#pragma once
#include <QtWidgets>
#include <QtNetwork>
#include <functional>

class GalleryGrid : public QListWidget {
public:
    std::function<void(QJsonArray)> dragFiles;
    std::function<void(QStringList)> importPaths;
    explicit GalleryGrid(QWidget *parent=nullptr): QListWidget(parent) { setDragDropMode(QAbstractItemView::DragDrop); setDragEnabled(true); setAcceptDrops(true); viewport()->setAcceptDrops(true); }
protected:
    void startDrag(Qt::DropActions) override {
        QJsonArray files;
        for (auto *item:selectedItems()) {
            const auto photo=item->data(Qt::UserRole).toJsonObject();
            const auto path=photo.value("savePath").toString(); if(path.isEmpty())continue;
            files.append(QJsonObject{{"name",photo.value("fileName")},{"path",path},{"size",photo.value("fileSize")},{"directory",false}});
        }
        if(!files.isEmpty() && dragFiles) dragFiles(files);
    }
    void dragEnterEvent(QDragEnterEvent *e) override { if(e->source()!=this && !e->mimeData()->hasFormat("application/x-vivo-phone-paths") && e->mimeData()->hasUrls()) e->acceptProposedAction(); else e->ignore(); }
    void dragMoveEvent(QDragMoveEvent *e) override { if(e->source()!=this && !e->mimeData()->hasFormat("application/x-vivo-phone-paths") && e->mimeData()->hasUrls()) e->acceptProposedAction(); else e->ignore(); }
    void dropEvent(QDropEvent *e) override {
        if(e->source()==this || e->mimeData()->hasFormat("application/x-vivo-phone-paths")) { e->ignore(); return; }
        QStringList paths; for(const auto &url:e->mimeData()->urls()) if(url.isLocalFile()) paths<<url.toLocalFile();
        if(paths.isEmpty() || !importPaths) { e->ignore(); return; }
        e->acceptProposedAction(); importPaths(paths);
    }
};

// All requests stay on the authenticated local backend; phone tokens never enter the UI.
class GalleryDialog : public QWidget {
    QNetworkAccessManager net;
    QByteArray token;
    QString base, session;
    QComboBox *albums = new QComboBox, *sort = new QComboBox;
    GalleryGrid *grid = new GalleryGrid;
    QLabel *status = new QLabel;
    QPushButton *refreshButton=nullptr, *importButton=nullptr;
    QPushButton *retry = new QPushButton("重试加载");
    QPushButton *save = new QPushButton("导出所选…"), *remove = new QPushButton("删除所选…"), *open = new QPushButton("打开原图／视频");
    QSet<QNetworkReply*> requests;
    int generation=0, page=0, thumbsActive=0;
    QSet<int> thumbsRequested;
    bool loading=false, operating=false, more=false, pageFailed=false;
    QStringList selectedPaths() const {
        QStringList result; for (auto *item:grid->selectedItems()) result << item->data(Qt::UserRole).toJsonObject().value("savePath").toString(); return result;
    }
    void buttons() {
        const int count=grid->selectedItems().size();
        albums->setEnabled(!operating); sort->setEnabled(!operating); grid->setEnabled(!operating);
        if(refreshButton)refreshButton->setEnabled(!operating); if(importButton)importButton->setEnabled(!operating);
        save->setEnabled(!loading && !operating && count>0); remove->setEnabled(save->isEnabled());
        open->setEnabled(!loading && !operating && count==1);
        retry->setVisible(pageFailed); retry->setEnabled(!loading && !operating);
    }
    void request(QString method, QString suffix, QJsonObject body, std::function<void(QJsonObject,QString)> done) {
        QNetworkRequest req{QUrl(base+"/api/sessions/"+session+suffix)};
        req.setRawHeader("Authorization","Bearer "+token);
        req.setHeader(QNetworkRequest::ContentTypeHeader,"application/json");
        req.setAttribute(QNetworkRequest::RedirectPolicyAttribute,QNetworkRequest::ManualRedirectPolicy);
        req.setTransferTimeout(25000);
        auto *reply=method=="GET"?net.get(req):net.post(req,QJsonDocument(body).toJson(QJsonDocument::Compact));
        requests.insert(reply);
        connect(reply,&QNetworkReply::readyRead,this,[reply]{ if(reply->bytesAvailable()>3*1024*1024) reply->abort(); });
        connect(reply,&QNetworkReply::finished,this,[this,reply,done]{
            requests.remove(reply);
            const auto data=QJsonDocument::fromJson(reply->readAll()).object();
            QString error;
            if(reply->error()!=QNetworkReply::NoError || reply->attribute(QNetworkRequest::HttpStatusCodeAttribute).toInt()!=200)
                error=data.value("error").toObject().value("message").toString("图库请求失败，请检查手机连接或权限");
            reply->deleteLater(); done(data,error);
        });
    }
    void cancelRequests() {
        ++generation;
        const auto pending=requests;
        for(auto *r:pending) { disconnect(r,nullptr,this,nullptr); r->abort(); r->deleteLater(); }
        requests.clear(); thumbsActive=0; thumbsRequested.clear();
    }
    void thumbnails() {
        const int current=generation;
        if (!grid->isVisible()) return;
        const QRect visible=grid->viewport()->rect();
        for(int index=0; index<grid->count() && thumbsActive<4; ++index) {
            if(thumbsRequested.contains(index) || !grid->visualItemRect(grid->item(index)).intersects(visible)) continue;
            thumbsRequested.insert(index); ++thumbsActive;
            const auto photo=grid->item(index)->data(Qt::UserRole).toJsonObject();
            request("POST","/gallery/thumbnail",{{"path",photo.value("savePath")}},[this,current,index](QJsonObject data,QString error){
                if(current!=generation)return;
                --thumbsActive;
                if(index<grid->count()) {
                    auto *item=grid->item(index);
                    if(error.isEmpty()) {
                        QByteArray bytes=QByteArray::fromBase64(data.value("base64").toString().toLatin1());
                        QBuffer buffer(&bytes); buffer.open(QIODevice::ReadOnly); QImageReader reader(&buffer);
                        const QSize size=reader.size();
                        // Decode a scaled thumbnail, and reject implausible image dimensions.
                        if(size.isValid() && size.width()<=32768 && size.height()<=32768) {
                            reader.setAutoTransform(true); reader.setScaledSize(size.scaled(300,220,Qt::KeepAspectRatio));
                            const QImage image=reader.read(); if(!image.isNull()) item->setIcon(QPixmap::fromImage(image));
                        }
                    } else item->setToolTip(item->toolTip()+"\n缩略图不可用；仍可导出或打开原文件");
                }
                thumbnails();
            });
        }
    }
    void loadAlbums() {
        cancelRequests(); loading=true; buttons(); status->setText("正在读取手机相册…");
        const int current=generation;
        request("GET","/gallery/albums",{},[this,current](QJsonObject data,QString error){
            if(current!=generation)return;
            { QSignalBlocker block(albums); albums->clear(); albums->addItem("所有照片",QJsonObject{{"kind","photos"}}); albums->addItem("所有视频",QJsonObject{{"kind","videos"}});
              for(auto entry:data.value("albums").toArray()) { auto a=entry.toObject(); a.insert("kind","album"); albums->addItem(a.value("name").toString()+QString(" (%1)").arg(a.value("count").toInt()),a); } }
            if(!error.isEmpty()) albumError=error+"；可尝试所有照片／视频。"; else albumError.clear();
            resetPages();
        });
    }
    QString albumError;
    void resetPages() {
        cancelRequests(); loading=false; page=0; more=true; pageFailed=false; grid->clear(); loadPage();
    }
    void maybeLoadMore() {
        if(loading || operating || pageFailed || !more || !isVisible())return;
        auto *bar=grid->verticalScrollBar();
        if(bar->value()>=bar->maximum()-qMax(1,bar->pageStep()/2)) loadPage();
    }
    void loadPage() {
        if(loading || operating || !more)return;
        loading=true; pageFailed=false; buttons(); status->setText(page==0?"正在读取照片…":"正在加载更多照片…");
        QJsonObject body=albums->currentData().toJsonObject();
        body.insert("pageIndex",page); body.insert("pageNumber",100); body.insert("sortCondition",sort->currentData().toInt());
        const int current=generation;
        request("POST","/gallery/list",body,[this,current](QJsonObject data,QString error){
            if(current!=generation)return;
            loading=false;
            if(!error.isEmpty()) { pageFailed=true; status->setText(error+"；请检查连接和权限后重试。"); buttons(); return; }
            const auto items=data.value("items").toArray();
            for(auto value:items) {
                auto photo=value.toObject(); const QString file=photo.value("fileName").toString();
                auto *item=new QListWidgetItem((photo.value("isVideo").toBool()?"▶ ":"")+file,grid);
                item->setData(Qt::UserRole,photo); item->setIcon(style()->standardIcon(photo.value("isVideo").toBool()?QStyle::SP_MediaPlay:QStyle::SP_FileIcon));
                QString detail=photo.value("savePath").toString();
                qint64 size=qint64(photo.value("fileSize").toDouble(-1)); if(size>=0)detail+="\n"+QLocale().formattedDataSize(size);
                qint64 date=qint64(photo.value("date").toDouble()); if(date>0)detail+="\n"+QDateTime::fromMSecsSinceEpoch(date).toString("yyyy-MM-dd HH:mm");
                item->setToolTip(detail);
            }
            more=data.value("hasMore").toBool() && !items.isEmpty(); ++page;
            status->setText(albumError+QString("%1 个项目").arg(grid->count())+(grid->count()==0?" · 暂无照片或视频":more?" · 向下滚动加载更多":" · 已加载全部")); buttons(); thumbnails();
            QTimer::singleShot(0,this,[this]{thumbnails(); maybeLoadMore();});
        });
    }
    void operate(const std::function<void()> &action) {
        if(loading || operating)return; operating=true; buttons(); action(); operating=false; buttons();
    }
protected:
    bool eventFilter(QObject *watched,QEvent *event) override {
        if(watched==grid->viewport() && (event->type()==QEvent::Show || event->type()==QEvent::Resize)) QTimer::singleShot(0,this,[this]{thumbnails(); maybeLoadMore();});
        return QWidget::eventFilter(watched,event);
    }
public:
    bool isOperating() const { return operating; }
    std::function<void(QStringList,bool)> exportFiles;
    std::function<void(QStringList)> importFiles;
    std::function<void(QJsonArray,QWidget *)> dragFiles;
    GalleryDialog(QString state,int port,QString id,QWidget *parent=nullptr):QWidget(parent),base(QString("http://127.0.0.1:%1").arg(port)),session(id) {
        setObjectName("galleryPage");
        QFile config(state+"/config.json"); if(config.open(QIODevice::ReadOnly))token=QJsonDocument::fromJson(config.readAll()).object().value("apiToken").toString().toUtf8();
        net.setProxy(QNetworkProxy::NoProxy);
        auto *layout=new QVBoxLayout(this); auto *toolbar=new QHBoxLayout;
        auto *refresh=new QPushButton("刷新相册"), *import=new QPushButton("导入到手机…");
        refreshButton=refresh; importButton=import;
        albums->setObjectName("galleryAlbums"); sort->setObjectName("gallerySort"); retry->setObjectName("galleryRetry"); retry->hide(); save->setObjectName("galleryExport"); status->setObjectName("galleryStatus");
        sort->addItem("最新在前",5); sort->addItem("最早在前",4);
        toolbar->addWidget(albums,1); toolbar->addWidget(sort); toolbar->addWidget(refresh); toolbar->addWidget(import); layout->addLayout(toolbar);
        grid->setObjectName("galleryGrid"); grid->setViewMode(QListView::IconMode); grid->setResizeMode(QListView::Adjust); grid->setMovement(QListView::Static); grid->setDragDropMode(QAbstractItemView::DragDrop); grid->viewport()->setAcceptDrops(true);
        grid->setIconSize(QSize(150,110)); grid->setGridSize(QSize(180,160)); grid->setWordWrap(true); grid->setSelectionMode(QAbstractItemView::ExtendedSelection); layout->addWidget(grid,1);
        grid->viewport()->installEventFilter(this);
        grid->dragFiles=[this](QJsonArray files){operate([this,files]{if(dragFiles)dragFiles(files,grid);});};
        grid->importPaths=[this](QStringList paths){operate([this,paths]{if(importFiles)importFiles(paths);});};
        auto *actions=new QHBoxLayout; actions->addWidget(open); actions->addWidget(save); actions->addWidget(remove); actions->addStretch(); actions->addWidget(retry); layout->addLayout(actions);
        status->setWordWrap(true); layout->addWidget(status);
        auto *hint=new QLabel("拖入文件导入 · 拖出照片导出 · 右键操作 · Ctrl／Shift 多选"); layout->addWidget(hint);
        connect(refresh,&QPushButton::clicked,this,[this]{if(!operating)loadAlbums();});
        connect(albums,&QComboBox::currentIndexChanged,this,[this]{if(!operating)resetPages();});
        connect(sort,&QComboBox::currentIndexChanged,this,[this]{if(!operating)resetPages();});
        connect(retry,&QPushButton::clicked,this,[this]{if(!loading && !operating){pageFailed=false;loadPage();}});
        connect(grid->verticalScrollBar(),&QScrollBar::valueChanged,this,[this]{thumbnails(); maybeLoadMore();});
        connect(grid->verticalScrollBar(),&QScrollBar::rangeChanged,this,[this]{QTimer::singleShot(0,this,[this]{thumbnails(); maybeLoadMore();});});
        connect(grid,&QListWidget::itemSelectionChanged,this,[this]{buttons();});
        connect(save,&QPushButton::clicked,this,[this]{operate([this]{if(exportFiles)exportFiles(selectedPaths(),false);});});
        connect(open,&QPushButton::clicked,this,[this]{operate([this]{if(exportFiles)exportFiles(selectedPaths(),true);});});
        connect(grid,&QListWidget::itemDoubleClicked,this,[this](QListWidgetItem *item){operate([this,item]{if(exportFiles)exportFiles({item->data(Qt::UserRole).toJsonObject().value("savePath").toString()},true);});});
        connect(import,&QPushButton::clicked,this,[this]{operate([this]{if(importFiles)importFiles({});});});
        connect(remove,&QPushButton::clicked,this,[this]{
            const auto paths=selectedPaths(); if(paths.isEmpty() || operating || loading)return;
            if(QMessageBox::question(this,"删除手机照片",QString("从手机删除所选 %1 个原文件？此操作可能无法撤销。").arg(paths.size()))!=QMessageBox::Yes)return;
            operating=true; buttons();
            request("POST","/files/delete",{{"paths",QJsonArray::fromStringList(paths)}},[this](QJsonObject,QString error){
                operating=false; page=0; loadAlbums();
                if(!error.isEmpty())QMessageBox::warning(this,"删除未完成",error+"\n已重新读取列表，请检查手机。");
            });
        });
        grid->setContextMenuPolicy(Qt::CustomContextMenu);
        connect(grid,&QWidget::customContextMenuRequested,this,[this](QPoint pos){
            auto *item=grid->itemAt(pos); if(!item)return;
            if(!item->isSelected()){grid->clearSelection();item->setSelected(true);}
            QMenu menu(this); auto *openAction=menu.addAction("打开原文件"); auto *exportAction=menu.addAction("导出所选…"); auto *deleteAction=menu.addAction("删除所选…");
            openAction->setEnabled(open->isEnabled()); exportAction->setEnabled(save->isEnabled()); deleteAction->setEnabled(remove->isEnabled());
            auto *chosen=menu.exec(grid->viewport()->mapToGlobal(pos));
            if(chosen==openAction)open->click(); else if(chosen==exportAction)save->click(); else if(chosen==deleteAction)remove->click();
        });
        auto key=[this](QWidget *owner,QKeySequence sequence,std::function<void()> action){auto *s=new QShortcut(sequence,owner);s->setContext(Qt::WidgetWithChildrenShortcut);connect(s,&QShortcut::activated,this,std::move(action));};
        key(this,QKeySequence(Qt::Key_F5),[refresh]{refresh->click();});
        key(grid,QKeySequence(Qt::Key_Delete),[remove=this->remove]{remove->click();});
        key(grid,QKeySequence(Qt::Key_Return),[open=this->open]{open->click();});
        QTimer::singleShot(0,this,[this]{loadAlbums();});
    }
    ~GalleryDialog() override { cancelRequests(); }
};
