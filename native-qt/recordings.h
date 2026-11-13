#pragma once
#include <QtWidgets>
#include <QtNetwork>

class RecordingsTree : public QTreeWidget {
public:
    std::function<void(QJsonArray,QWidget *)> dragRecording;
protected:
    void startDrag(Qt::DropActions) override {
        if(!dragRecording)return; QJsonArray records;
        for(auto *item:selectedItems())records.append(item->data(0,Qt::UserRole).toJsonObject());
        if(!records.isEmpty())dragRecording(records,this);
    }
};

class RecordingsDialog : public QDialog {
    QNetworkAccessManager net;
    QByteArray token;
    QString base, jobId, exporting, destination;
    RecordingsTree *tree=new RecordingsTree;
    QPlainTextEdit *details=new QPlainTextEdit;
    QLineEdit *search=new QLineEdit;
    QCheckBox *automatic=new QCheckBox("自动同步（每分钟）"), *trash=new QCheckBox("回收站");
    QLabel *status=new QLabel;
    QPushButton *sync=new QPushButton("立即同步"), *cancel=new QPushButton("取消任务"), *play=new QPushButton("播放"), *save=new QPushButton("导出录音"), *rename=new QPushButton("重命名"), *moveTrash=new QPushButton("移入回收站"), *restore=new QPushButton("恢复");
    QJsonArray items;
    QTimer timer;
    bool requestBusy=false, playWhenReady=false, available=false;
    int refreshTick=0;
    QJsonObject current() const { return tree->selectedItems().size()==1?tree->selectedItems().first()->data(0,Qt::UserRole).toJsonObject():QJsonObject{}; }
    void buttons() {
        auto item=current(); const bool busy=!jobId.isEmpty() || requestBusy, selected=!item.isEmpty();
        sync->setEnabled(!busy); automatic->setEnabled(!busy); cancel->setEnabled(!jobId.isEmpty());
        play->setEnabled(available && !busy && selected && item.value("hasAudio").toBool()); save->setEnabled(play->isEnabled());
        rename->setEnabled(available && !busy && selected && !item.value("inTrash").toBool());
        moveTrash->setEnabled(rename->isEnabled()); restore->setEnabled(available && !busy && selected && item.value("inTrash").toBool());
    }
    void request(QString method,QString route,QJsonObject body,std::function<void(QJsonObject,QString)> done) {
        QNetworkRequest req{QUrl(base+route)}; req.setRawHeader("Authorization","Bearer "+token); req.setHeader(QNetworkRequest::ContentTypeHeader,"application/json");
        req.setAttribute(QNetworkRequest::RedirectPolicyAttribute,QNetworkRequest::ManualRedirectPolicy); req.setTransferTimeout(25000);
        auto bytes=QJsonDocument(body).toJson(QJsonDocument::Compact);
        auto *reply=method=="GET"?net.get(req):method=="PATCH"?net.sendCustomRequest(req,"PATCH",bytes):net.post(req,bytes);
        connect(reply,&QNetworkReply::finished,this,[this,reply,done]{
            const auto data=QJsonDocument::fromJson(reply->readAll()).object(); const int code=reply->attribute(QNetworkRequest::HttpStatusCodeAttribute).toInt();
            QString error; if(reply->error()!=QNetworkReply::NoError || code<200 || code>=300)error=data.value("error").toObject().value("message").toString("请求失败，请检查网络和账号登录状态");
            reply->deleteLater(); done(data,error);
        });
    }
    void display() {
        const int vertical=tree->verticalScrollBar()->value(), horizontal=tree->horizontalScrollBar()->value();
        QSet<QString> selected; for(auto *row:tree->selectedItems())selected.insert(row->data(0,Qt::UserRole).toJsonObject().value("id").toString());
        const QString currentId=tree->currentItem()?tree->currentItem()->data(0,Qt::UserRole).toJsonObject().value("id").toString():QString();
        QSignalBlocker blocker(tree); tree->clear();
        for(auto value:items) {
            const auto item=value.toObject(); if(item.value("inTrash").toBool()!=trash->isChecked() || !item.value("name").toString().contains(search->text(),Qt::CaseInsensitive))continue;
            qint64 seconds=qint64(item.value("duration").toDouble()/1000);
            auto *row=new QTreeWidgetItem(tree,{item.value("name").toString(),QString("%1:%2:%3").arg(seconds/3600,2,10,QChar('0')).arg(seconds/60%60,2,10,QChar('0')).arg(seconds%60,2,10,QChar('0')),
                QDateTime::fromMSecsSinceEpoch(qint64(item.value("date").toDouble())).toString("yyyy-MM-dd HH:mm"),QLocale().formattedDataSize(qint64(item.value("size").toDouble()))});
            row->setData(0,Qt::UserRole,item); if(item.value("id").toString()==currentId)tree->setCurrentItem(row,0,QItemSelectionModel::NoUpdate); if(selected.contains(item.value("id").toString()))row->setSelected(true);
        }
        tree->doItemsLayout(); tree->verticalScrollBar()->setValue(vertical); tree->horizontalScrollBar()->setValue(horizontal);
        blocker.unblock(); auto item=current(); QString text=item.value("transcript").toString();if(!item.value("summary").toString().isEmpty())text+="\n\n摘要：\n"+item.value("summary").toString();auto marks=item.value("marks").toArray();if(!marks.isEmpty())text+=QString("\n\n%1 处标记").arg(marks.size());if(details->toPlainText()!=text)details->setPlainText(text); buttons();
    }
    void refresh() {
        if(requestBusy)return;requestBusy=true;buttons();
        request("GET","/api/recordings",{},[this](QJsonObject data,QString error){
            requestBusy=false; available=error.isEmpty();
            if(!error.isEmpty()){items={};tree->clear();details->clear();status->setText(error);buttons();return;}
            auto incoming=data.value("items").toArray(); bool changed=items!=incoming; items=incoming; {QSignalBlocker block(automatic);automatic->setChecked(data.value("automatic").toBool());}
            if(jobId.isEmpty())jobId=data.value("jobId").toString(); if(changed)display(); else buttons();
            status->setText(QString("%1 条录音 · 上次同步：%2").arg(items.size()).arg(data.value("lastSync").isString()?QDateTime::fromString(data.value("lastSync").toString(),Qt::ISODate).toLocalTime().toString("yyyy-MM-dd HH:mm:ss"):"尚未同步")+(data.value("lastError").isString()?" · "+data.value("lastError").toString():""));
        });
    }
    void start(QString route,QJsonObject body={}) {
        if(requestBusy || !jobId.isEmpty())return; requestBusy=true; buttons();
        request("POST",route,body,[this](QJsonObject data,QString error){requestBusy=false; if(!error.isEmpty()){status->setText(error);exporting.clear();}else {jobId=data.value("id").toString();status->setText("正在处理…");}buttons();});
    }
    void poll() {
        if(jobId.isEmpty() || requestBusy)return;
        requestBusy=true;
        request("GET","/api/jobs/"+jobId,{},[this](QJsonObject data,QString error){
            requestBusy=false;
            if(!error.isEmpty()){status->setText(error);buttons();return;}
            const QString state=data.value("status").toString();
            if(state=="succeeded" || state=="failed" || state=="cancelled") {
                jobId.clear(); buttons();
                if(state=="succeeded" && !exporting.isEmpty()) { fetchFile();return; }
                exporting.clear(); refresh();
                if(state=="failed")QMessageBox::warning(this,"录音云同步",data.value("error").toObject().value("message").toString());
            } else {
                const qint64 bytes=qint64(data.value("bytes").toDouble()),total=qint64(data.value("totalSize").toDouble());
                status->setText(data.value("phase")=="downloading"?"正在下载："+QLocale().formattedDataSize(bytes)+" / "+QLocale().formattedDataSize(total):"正在与云端同步…"); buttons();
            }
        });
    }
    void fetchFile() {
        const QString id=exporting, target=destination; exporting.clear(); requestBusy=true; buttons();
        auto file=std::make_shared<QSaveFile>(target);
        if(!file->open(QIODevice::WriteOnly)){status->setText("无法保存录音："+file->errorString());requestBusy=false;buttons();return;}
        QNetworkRequest req{QUrl(base+"/api/recordings/"+id+"/file")}; req.setRawHeader("Authorization","Bearer "+token);req.setTransferTimeout(120000);req.setAttribute(QNetworkRequest::RedirectPolicyAttribute,QNetworkRequest::ManualRedirectPolicy);
        auto *reply=net.get(req); auto good=std::make_shared<bool>(true);
        connect(reply,&QNetworkReply::readyRead,this,[reply,file,good]{auto bytes=reply->readAll();if(file->write(bytes)!=bytes.size()){*good=false;reply->abort();}});
        connect(reply,&QNetworkReply::finished,this,[this,reply,file,good]{
            const int code=reply->attribute(QNetworkRequest::HttpStatusCodeAttribute).toInt();
            const auto tail=reply->readAll(); if(file->write(tail)!=tail.size())*good=false;
            bool ok=*good && reply->error()==QNetworkReply::NoError && code==200 && file->commit();
            reply->deleteLater(); requestBusy=false;buttons();
            if(!ok){file->cancelWriting();status->setText("保存录音失败，未覆盖目标文件");return;}
            status->setText("录音已保存"); if(playWhenReady && !QDesktopServices::openUrl(QUrl::fromLocalFile(file->fileName())))status->setText("录音已保存，但没有可用的音频播放器");
        });
    }
    void download(bool playing) {
        const auto item=current(); if(item.isEmpty())return;
        QString name=item.value("name").toString(); name.replace(QRegularExpression("[/\\\\\\x00-\\x1f]"),"_");
        if(!QRegularExpression("\\.(m4a|mp3|amr|wav|flac|ogg|opus|aac|mp4|3gp)$",QRegularExpression::CaseInsensitiveOption).match(name).hasMatch())name+=item.value("extension").toString(".m4a");
        if(playing) {const QString dir=QStandardPaths::writableLocation(QStandardPaths::CacheLocation)+"/recordings";QDir().mkpath(dir);destination=dir+"/"+item.value("id").toString()+"-"+name;}
        else destination=QFileDialog::getSaveFileName(this,"导出录音",QDir::homePath()+"/"+name);
        if(destination.isEmpty())return; exporting=item.value("id").toString();playWhenReady=playing;start("/api/recordings/"+exporting+"/download");
    }
public:
    std::function<void(QJsonArray,QWidget *)> dragRecording;
    RecordingsDialog(QString state,int port,QWidget *parent=nullptr):QDialog(parent),base(QString("http://127.0.0.1:%1").arg(port)) {
        if(parent)setWindowFlags(Qt::Widget);
        setWindowTitle("录音机云同步");resize(960,680);
        QFile file(state+"/config.json");if(file.open(QIODevice::ReadOnly))token=QJsonDocument::fromJson(file.readAll()).object().value("apiToken").toString().toUtf8();net.setProxy(QNetworkProxy::NoProxy);
        auto *layout=new QVBoxLayout(this);layout->addWidget(new QLabel("登录与手机相同的 vivo 账号，并在手机录音机中开启云同步。无需保持手机连接。"));
        auto *bar=new QGridLayout;search->setPlaceholderText("搜索录音名称");bar->addWidget(sync,0,0);bar->addWidget(automatic,0,1);bar->addWidget(trash,0,2);bar->addWidget(cancel,0,3);bar->addWidget(search,1,0,1,4);bar->setColumnStretch(1,1);layout->addLayout(bar);
        sync->setObjectName("recordingsSync");trash->setObjectName("recordingsTrash");automatic->setObjectName("recordingsAutomatic");search->setObjectName("recordingsSearch");status->setObjectName("recordingsStatus");details->setObjectName("recordingsDetails");
        tree->setObjectName("recordingsTree");tree->setHeaderLabels({"名称","时长","时间","大小"});tree->header()->setSectionResizeMode(0,QHeaderView::Stretch);tree->setSelectionMode(QAbstractItemView::ExtendedSelection);
        tree->setDragEnabled(true); tree->setDragDropMode(QAbstractItemView::DragOnly);
        tree->dragRecording=[this](QJsonArray items,QWidget *source){if(available && jobId.isEmpty() && !requestBusy && dragRecording)dragRecording(items,source);};
        details->setReadOnly(true);details->setPlaceholderText("选择录音查看已同步的转写、摘要及标记资料");
        auto *split=new QSplitter(Qt::Vertical);split->addWidget(tree);split->addWidget(details);split->setStretchFactor(0,3);split->setStretchFactor(1,1);layout->addWidget(split,1);
        auto *actions=new QHBoxLayout;for(auto *b:{play,save,rename,moveTrash,restore})actions->addWidget(b);actions->addStretch();layout->addLayout(actions);status->setWordWrap(true);layout->addWidget(status);
        connect(sync,&QPushButton::clicked,this,[this]{start("/api/recordings/sync");});
        connect(cancel,&QPushButton::clicked,this,[this]{if(!jobId.isEmpty())request("POST","/api/jobs/"+jobId+"/cancel",{},[](QJsonObject,QString){});});
        connect(automatic,&QCheckBox::toggled,this,[this](bool enabled){request("PATCH","/api/recordings/settings",{{"automatic",enabled}},[this](QJsonObject,QString error){if(!error.isEmpty())status->setText(error);refresh();});});
        connect(search,&QLineEdit::textChanged,this,[this]{display();});connect(trash,&QCheckBox::toggled,this,[this]{display();});
        connect(tree,&QTreeWidget::itemSelectionChanged,this,[this]{auto item=current();QString text=item.value("transcript").toString();if(!item.value("summary").toString().isEmpty())text+="\n\n摘要：\n"+item.value("summary").toString();auto marks=item.value("marks").toArray();if(!marks.isEmpty())text+=QString("\n\n%1 处标记").arg(marks.size());details->setPlainText(text);buttons();});
        connect(play,&QPushButton::clicked,this,[this]{download(true);});connect(save,&QPushButton::clicked,this,[this]{download(false);});
        connect(tree,&QTreeWidget::itemDoubleClicked,this,[this]{if(play->isEnabled())download(true);});
        connect(rename,&QPushButton::clicked,this,[this]{auto item=current();bool ok=false;auto name=QInputDialog::getText(this,"云端录音改名","名称",QLineEdit::Normal,item.value("name").toString(),&ok);if(ok && !name.trimmed().isEmpty())start("/api/recordings/"+item.value("id").toString()+"/rename",{{"name",name},{"cloudVersion",item.value("cloudVersion")}});});
        for(auto action:{QString("trash"),QString("restore")})connect(action=="trash"?moveTrash:restore,&QPushButton::clicked,this,[this,action]{auto item=current();if(QMessageBox::question(this,"云端录音",action=="trash"?"将这条录音移入云端回收站？更改会同步到其他设备。":"恢复这条云端录音？")!=QMessageBox::Yes)return;start("/api/recordings/"+item.value("id").toString()+"/"+action,{{"cloudVersion",item.value("cloudVersion")}});});
        tree->setContextMenuPolicy(Qt::CustomContextMenu);
        connect(tree,&QWidget::customContextMenuRequested,this,[this](QPoint pos){
            auto *item=tree->itemAt(pos);if(!item)return;if(!item->isSelected())tree->setCurrentItem(item);
            QMenu menu(this);
            auto add=[&menu](QPushButton *button){auto *action=menu.addAction(button->text());action->setEnabled(button->isEnabled());QObject::connect(action,&QAction::triggered,button,&QPushButton::click);};
            add(play);add(save);menu.addSeparator();add(rename);add(current().value("inTrash").toBool()?restore:moveTrash);
            menu.exec(tree->viewport()->mapToGlobal(pos));
        });
        auto shortcut=[this](QWidget *owner,const QKeySequence &sequence,std::function<void()> action){auto *s=new QShortcut(sequence,owner);s->setContext(Qt::WidgetWithChildrenShortcut);connect(s,&QShortcut::activated,this,std::move(action));};
        shortcut(this,QKeySequence(Qt::Key_F5),[this]{sync->click();});
        shortcut(this,QKeySequence("Ctrl+F"),[this]{search->setFocus();search->selectAll();});
        shortcut(tree,QKeySequence(Qt::Key_Return),[this]{play->click();});
        shortcut(tree,QKeySequence(Qt::Key_Enter),[this]{play->click();});
        shortcut(tree,QKeySequence(Qt::Key_F2),[this]{rename->click();});
        shortcut(tree,QKeySequence(Qt::Key_Delete),[this]{moveTrash->click();});
        shortcut(tree,QKeySequence("Ctrl+S"),[this]{save->click();});
        sync->setToolTip("立即同步 (F5)");search->setToolTip("搜索录音 (Ctrl+F)");play->setToolTip("播放所选录音 (Enter)");save->setToolTip("导出所选录音 (Ctrl+S)");rename->setToolTip("重命名所选录音 (F2)");moveTrash->setToolTip("移入回收站 (Delete)");
        connect(&timer,&QTimer::timeout,this,[this]{if(!isVisible())return;if(jobId.isEmpty()){if(++refreshTick%5==0)refresh();}else poll();});timer.start(1000);buttons();QTimer::singleShot(0,this,[this]{refresh();});
    }
    void reject() override {if(windowFlags().testFlag(Qt::Widget) || parentWidget() || requestBusy)return;QDialog::reject();}
};
