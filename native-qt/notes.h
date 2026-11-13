#pragma once
#include <QtWidgets>
#include <QtNetwork>
#include <functional>

class NoteDocument : public QTextDocument {
protected:
    QVariant loadResource(int,const QUrl &) override { return {}; }
public:
    explicit NoteDocument(QObject *parent=nullptr):QTextDocument(parent) {}
};
class NoteEditorDialog : public QDialog {
public:
    using QDialog::QDialog;
    std::function<bool()> allowReject;
    void reject() override { if(!allowReject || allowReject()) QDialog::reject(); }
};
class NotePreview : public QTextBrowser {
protected:
    QVariant loadResource(int,const QUrl &) override { return {}; }
public:
    explicit NotePreview(QWidget *parent=nullptr):QTextBrowser(parent) {setDocument(new NoteDocument(this));setOpenLinks(false);setOpenExternalLinks(false);}
    void showContent(QString html) {
        html.remove(QRegularExpression("<(script|style|iframe|object|embed)\\b[^>]*>[\\s\\S]*?</\\1\\s*>",QRegularExpression::CaseInsensitiveOption));
        html.replace(QRegularExpression("<vnote-[^>]+>([\\s\\S]*?</vnote-[^>]+>)?",QRegularExpression::CaseInsensitiveOption),"<p>[图片、手写或其他附件，请查看附件列表]</p>");
        setHtml(html);
    }
};
static QString notePartText(QString html) {
    html.replace("<","&lt;");html.replace(">","&gt;");NoteDocument document;document.setHtml("<p>"+html+"</p>");return document.toPlainText();
}
static QString noteEditableText(QString html) {
    // Qt's HTML importer drops empty paragraphs, including <p><br></p>.
    // Keep a temporary visible placeholder during import so blank lines survive.
    const QString marker=QUuid::createUuid().toString(QUuid::WithoutBraces);
    QRegularExpression emptyBlock("(<(p|div)\\b[^>]*>)\\s*(?:<span\\b[^>]*>|</span\\s*>|<br\\s*/?>|&nbsp;|&#160;|&#x[aA]0;|\\s)*(</\\2\\s*>)",QRegularExpression::CaseInsensitiveOption);
    html.replace(emptyBlock,QString("\\1%1\\3").arg(marker));
    NoteDocument document;document.setHtml(html); QString result=document.toPlainText();result.remove(marker);return result;
}
class NotesPanel : public QWidget {
    QNetworkAccessManager net;
    QString base, jobId, savingRoute, savingPath, accountKey, lastSync;
    QByteArray token;
    QTreeWidget *tree=new QTreeWidget;
    NotePreview *preview=new NotePreview;
    QListWidget *attachments=new QListWidget;
    QLineEdit *search=new QLineEdit;
    QComboBox *notebooks=new QComboBox;
    QCheckBox *automatic=new QCheckBox("自动同步（每分钟）"),*trash=new QCheckBox("回收站");
    QLabel *status=new QLabel;
    QPushButton *sync=new QPushButton("立即同步"),*cancel=new QPushButton("取消任务"),*create=new QPushButton("新建笔记"),*rename=new QPushButton("重命名"),*edit=new QPushButton("编辑正文"),*exportText=new QPushButton("导出文本"),*moveTrash=new QPushButton("移入回收站"),*restore=new QPushButton("恢复"),*exportAttachment=new QPushButton("导出所选附件");
    QJsonArray items;
    QJsonObject detail, draft;
    QString operation;
    bool busy=false;
    int generation=0,ticks=0;
    QTimer timer;
    QJsonObject current() const {return tree->currentItem()?tree->currentItem()->data(0,Qt::UserRole).toJsonObject():QJsonObject{};}
    void buttons() {
        auto row=current();bool active=busy||!jobId.isEmpty(),selected=!row.isEmpty()&&!row.value("locked").toBool();
        sync->setEnabled(!active);automatic->setEnabled(!active);create->setEnabled(!active);cancel->setEnabled(!jobId.isEmpty());
        rename->setEnabled(!active&&selected&&!row.value("inTrash").toBool());moveTrash->setEnabled(rename->isEnabled());restore->setEnabled(!active&&selected&&row.value("inTrash").toBool());
        bool ready=selected&&detail.value("id")==row.value("id")&&detail.value("version")==row.value("version");
        edit->setEnabled(!active&&ready&&detail.value("editable").toBool()&&!row.value("inTrash").toBool());edit->setToolTip(edit->isEnabled()?"编辑文字，保留原格式和附件":row.value("locked").toBool()?"请先在官方客户端解锁笔记":"请先选择并读取笔记；手写画布或没有文字的笔记可使用改名操作");exportText->setEnabled(!active&&ready);
        exportAttachment->setEnabled(!active&&ready&&attachments->currentItem());
    }
    void request(QString method,QString route,QJsonObject body,std::function<void(QJsonObject,QString)> done) {
        QNetworkRequest req{QUrl(base+route)};req.setRawHeader("Authorization","Bearer "+token);req.setHeader(QNetworkRequest::ContentTypeHeader,"application/json");req.setTransferTimeout(70000);req.setAttribute(QNetworkRequest::RedirectPolicyAttribute,QNetworkRequest::ManualRedirectPolicy);
        auto bytes=QJsonDocument(body).toJson(QJsonDocument::Compact);auto *reply=method=="GET"?net.get(req):method=="PATCH"?net.sendCustomRequest(req,"PATCH",bytes):net.post(req,bytes);
        connect(reply,&QNetworkReply::readyRead,this,[reply]{if(reply->bytesAvailable()>16*1024*1024)reply->abort();});
        connect(reply,&QNetworkReply::finished,this,[reply,done]{
            auto result=QJsonDocument::fromJson(reply->readAll()).object();int code=reply->attribute(QNetworkRequest::HttpStatusCodeAttribute).toInt();QString error;
            if(reply->error()!=QNetworkReply::NoError||code<200||code>=300)error=result.value("error").toObject().value("message").toString("笔记请求失败，请检查网络与登录状态");
            reply->deleteLater();done(result,error);
        });
    }
    void clearDetail() {++generation;detail={};preview->clear();attachments->clear();buttons();}
    void display() {
        const QString selected=current().value("id").toString();
        {QSignalBlocker block(tree);tree->clear();for(auto value:items){auto note=value.toObject();
            if(note.value("inTrash").toBool()!=trash->isChecked()||(!notebooks->currentData().toString().isEmpty()&&note.value("notebookId").toString()!=notebooks->currentData().toString())||!(note.value("title").toString()+note.value("digest").toString()).contains(search->text(),Qt::CaseInsensitive))continue;
            auto *row=new QTreeWidgetItem(tree,{(note.value("locked").toBool()?"🔒 ":"")+note.value("title").toString(),QDateTime::fromMSecsSinceEpoch(qint64(note.value("date").toDouble())).toString("yyyy-MM-dd HH:mm")});row->setData(0,Qt::UserRole,note);if(note.value("id")==selected)tree->setCurrentItem(row);
        }}
        if(current().isEmpty())clearDetail();else loadDetail();buttons();
    }
    void refresh() {
        if(busy)return;busy=true;buttons();
        request("GET","/api/notes",{},[this](QJsonObject data,QString error){busy=false;
            if(!error.isEmpty()){items={};tree->clear();clearDetail();status->setText(error);buttons();return;}
            if(accountKey!=data.value("accountKey").toString()||lastSync!=data.value("lastSync").toString())clearDetail();
            if(accountKey!=data.value("accountKey").toString())draft={};
            accountKey=data.value("accountKey").toString();lastSync=data.value("lastSync").toString();items=data.value("items").toArray();
            const QString selectedBook=notebooks->currentData().toString();{QSignalBlocker block(notebooks);notebooks->clear();notebooks->addItem("所有笔记本","");for(auto v:data.value("notebooks").toArray()){auto b=v.toObject();notebooks->addItem(b.value("name").toString(),b.value("id").toString());}notebooks->addItem("未分类",data.value("unclassifiedId").toString());int index=notebooks->findData(selectedBook);notebooks->setCurrentIndex(index>=0?index:0);}
            {QSignalBlocker block(automatic);automatic->setChecked(data.value("automatic").toBool());}
            if(jobId.isEmpty())jobId=data.value("jobId").toString();display();
            status->setText(QString("%1 篇笔记 · 上次同步：%2").arg(items.size()).arg(lastSync.isEmpty()?"尚未同步":QDateTime::fromString(lastSync,Qt::ISODate).toLocalTime().toString("yyyy-MM-dd HH:mm:ss"))+(data.value("lastError").isString()?" · "+data.value("lastError").toString():""));buttons();
        });
    }
    void loadDetail() {
        auto note=current();if(note.isEmpty()){clearDetail();return;}if(detail.value("id")==note.value("id")&&detail.value("version")==note.value("version")){buttons();return;}
        clearDetail();const int revision=generation;const QString id=note.value("id").toString();
        if(note.value("locked").toBool()){preview->setPlainText("加密笔记请在官方客户端解锁查看。");return;}
        preview->setPlainText("正在读取笔记正文…");
        request("GET","/api/notes/"+id,{},[this,revision,id](QJsonObject data,QString error){if(revision!=generation||current().value("id").toString()!=id)return;
            if(!error.isEmpty()){preview->setPlainText(error);buttons();return;}detail=data;preview->showContent(data.value("content").toString());
            for(auto value:data.value("attachments").toArray()){auto a=value.toObject();auto *entry=new QListWidgetItem(a.value("name").toString()+" · "+QLocale().formattedDataSize(qint64(a.value("size").toDouble())),attachments);entry->setData(Qt::UserRole,a);}buttons();
        });
    }
    void start(QString route,QJsonObject body={}) {
        if(busy||!jobId.isEmpty())return;busy=true;buttons();request("POST",route,body,[this](QJsonObject data,QString error){busy=false;if(!error.isEmpty()){status->setText(error);savingRoute.clear();}else {jobId=data.value("id").toString();status->setText("正在处理笔记…");}buttons();});
    }
    void poll() {
        if(busy||jobId.isEmpty())return;busy=true;
        request("GET","/api/jobs/"+jobId,{},[this](QJsonObject data,QString error){busy=false;if(!error.isEmpty()){status->setText(error);buttons();return;}
            auto state=data.value("status").toString();if(state=="succeeded"||state=="failed"||state=="cancelled"){
                jobId.clear();if(state=="succeeded"&&(operation=="create"||operation=="save"))draft={};operation.clear();buttons();if(state=="succeeded"&&!savingRoute.isEmpty()){saveAttachment();return;}savingRoute.clear();clearDetail();refresh();
                if(state=="failed")QMessageBox::warning(this,"原子笔记云同步",data.value("error").toObject().value("message").toString());
            }else{status->setText(data.value("phase")=="downloading"?"正在下载附件："+QLocale().formattedDataSize(qint64(data.value("bytes").toDouble())):"正在与云端同步…");buttons();}
        });
    }
    void saveAttachment() {
        QString route=savingRoute,target=savingPath;savingRoute.clear();busy=true;buttons();auto file=std::make_shared<QSaveFile>(target);if(!file->open(QIODevice::WriteOnly)){busy=false;buttons();status->setText(file->errorString());return;}
        QNetworkRequest req{QUrl(base+route)};req.setRawHeader("Authorization","Bearer "+token);req.setTransferTimeout(120000);req.setAttribute(QNetworkRequest::RedirectPolicyAttribute,QNetworkRequest::ManualRedirectPolicy);auto *reply=net.get(req);auto good=std::make_shared<bool>(true);
        connect(reply,&QNetworkReply::readyRead,this,[reply,file,good]{auto b=reply->readAll();if(file->write(b)!=b.size()){*good=false;reply->abort();}});
        connect(reply,&QNetworkReply::finished,this,[this,reply,file,good]{auto b=reply->readAll();if(file->write(b)!=b.size())*good=false;
            bool ok=*good&&reply->error()==QNetworkReply::NoError&&reply->attribute(QNetworkRequest::HttpStatusCodeAttribute).toInt()==200&&file->commit();if(!ok)file->cancelWriting();reply->deleteLater();busy=false;buttons();status->setText(ok?"附件已导出":"附件导出失败，未覆盖原文件");});
    }
    void editor(bool creating) {
        if(!creating&&!detail.value("editable").toBool())return;
        const auto original=current();const auto version=detail.value("version");const auto source=detail;
        const bool fragments=!creating&&source.value("editMode").toString()=="text-parts";
        const QString draftId=creating?"new":original.value("id").toString();
        NoteEditorDialog dialog(this);dialog.setObjectName("noteEditor");dialog.setWindowTitle(creating?"新建云端笔记":"编辑笔记文字");dialog.resize(720,560);
        auto *layout=new QVBoxLayout(&dialog); QLineEdit title; title.setObjectName("noteEditorTitle"); title.setPlaceholderText("笔记标题");
        QPlainTextEdit text; text.setObjectName("noteEditorText"); text.setPlaceholderText("在这里输入笔记内容");
        if(!creating)title.setText(original.value("title").toString()); layout->addWidget(&title);
        const bool hasDraft=draft.value("id").toString()==draftId;
        bool restoreDraft=hasDraft&&(creating||draft.value("version")==version);
        QList<QPlainTextEdit *> editors; QStringList originals, partIds;
        if(fragments) {
            auto *hint=new QLabel("直接编辑文字。原有格式和附件会保留；不同格式的文字分别显示在独立区域。"); hint->setWordWrap(true); layout->addWidget(hint);
            auto *scroll=new QScrollArea; scroll->setWidgetResizable(true); auto *body=new QWidget; auto *partsLayout=new QVBoxLayout(body); partsLayout->setContentsMargins(0,0,0,0); partsLayout->setSpacing(2);
            const auto parts=source.value("textParts").toArray(), saved=draft.value("parts").toArray();
            for(int i=0;i<parts.size();++i){const auto part=parts[i].toObject(); const QString id=part.value("id").toString(), originalText=notePartText(part.value("html").toString());
                auto *field=new QPlainTextEdit(body); field->setObjectName("notePartEditor"); field->setPlaceholderText("输入文字"); field->setPlainText(originalText);
                if(restoreDraft)for(auto value:saved){auto d=value.toObject();if(d.value("id")==id)field->setPlainText(d.value("text").toString());}
                field->setMinimumHeight(parts.size()==1?240:60); field->setTabChangesFocus(true);
                auto resizeField=[field]{int height=qBound(60,int(field->document()->size().height())+24,360);field->setMinimumHeight(height);};
                connect(field->document(),&QTextDocument::contentsChanged,field,resizeField); resizeField();
                editors<<field; originals<<originalText; partIds<<id; partsLayout->addWidget(field,parts.size()==1?1:0);
            }
            partsLayout->addStretch();scroll->setWidget(body);layout->addWidget(scroll,1);
            if(hasDraft&&!restoreDraft&&QMessageBox::question(this,"保留未保存文字","云端笔记已更新。是否将之前未保存的文字复制到剪贴板，便于手动合并？",QMessageBox::Yes|QMessageBox::No,QMessageBox::No)==QMessageBox::Yes)QApplication::clipboard()->setText(draft.value("text").toString());
            if(!editors.isEmpty())QTimer::singleShot(0,editors.first(),[field=editors.first()]{field->setFocus();});
        } else {
            if(!creating)text.setPlainText(noteEditableText(source.value("content").toString()));
            if(hasDraft&&!restoreDraft)restoreDraft=QMessageBox::question(this,"恢复未保存草稿","云端笔记已更新，是否载入之前未保存的草稿？请核对内容后再保存。",QMessageBox::Yes|QMessageBox::No,QMessageBox::No)==QMessageBox::Yes;
            if(restoreDraft)text.setPlainText(draft.value("text").toString());layout->addWidget(&text,1);
        }
        if(restoreDraft)title.setText(draft.value("title").toString());
        const QString initialTitle=title.text(), initialText=text.toPlainText(); QStringList initialParts;for(auto *field:editors)initialParts<<field->toPlainText();
        QDialogButtonBox choices(QDialogButtonBox::Save|QDialogButtonBox::Cancel);choices.button(QDialogButtonBox::Save)->setText("保存");choices.button(QDialogButtonBox::Cancel)->setText("取消");layout->addWidget(&choices);
        const bool converting=!creating && source.value("editMode").toString()=="plain-convert";
        auto accept=[&]{if(title.text().trimmed().isEmpty()){QMessageBox::warning(&dialog,"标题为空","请输入笔记标题");title.setFocus();return;}if(converting && text.toPlainText()!=initialText && QMessageBox::question(&dialog,"保存为纯文字","此笔记包含文字样式。以连续文本保存会移除这些样式，是否继续？",QMessageBox::Yes|QMessageBox::No,QMessageBox::No)!=QMessageBox::Yes)return;dialog.accept();};
        connect(&choices,&QDialogButtonBox::accepted,&dialog,accept);connect(&choices,&QDialogButtonBox::rejected,&dialog,&QDialog::reject);
        auto *saveShortcut=new QShortcut(QKeySequence("Ctrl+S"),&dialog);connect(saveShortcut,&QShortcut::activated,&dialog,accept);
        auto dirty=[&]{if(title.text()!=initialTitle || (!fragments && text.toPlainText()!=initialText))return true;for(int i=0;i<editors.size();++i)if(editors[i]->toPlainText()!=initialParts[i])return true;return false;};
        dialog.allowReject=[&]{return !dirty() || QMessageBox::question(&dialog,"放弃修改","尚有未保存的修改，确定放弃吗？",QMessageBox::Yes|QMessageBox::No,QMessageBox::No)==QMessageBox::Yes;};
        if(dialog.exec()!=QDialog::Accepted)return;
        QJsonObject body{{"title",title.text()}};QString draftText;QJsonArray parts,edits;
        if(fragments){for(int i=0;i<editors.size();++i){const QString value=editors[i]->toPlainText();QJsonObject change{{"id",partIds[i]},{"text",value}};parts.append(change);draftText+=value+"\n";if(value!=originals[i])edits.append(change);}body.insert("edits",edits);}
        else {draftText=text.toPlainText();if(converting && draftText==initialText)body.insert("edits",QJsonArray{});else {body.insert("text",draftText);if(converting)body.insert("convertToPlain",true);}}
        draft={{"id",draftId},{"title",title.text()},{"text",draftText},{"parts",parts},{"version",version}};operation=creating?"create":"save";
        if(creating)start("/api/notes/create",body);else{body.insert("version",version);start("/api/notes/"+original.value("id").toString()+"/save",body);}
    }

public:
    NotesPanel(QString state,int port,QWidget *parent=nullptr):QWidget(parent),base(QString("http://127.0.0.1:%1").arg(port)) {
        QFile config(state+"/config.json");if(config.open(QIODevice::ReadOnly))token=QJsonDocument::fromJson(config.readAll()).object().value("apiToken").toString().toUtf8();net.setProxy(QNetworkProxy::NoProxy);
        auto *layout=new QVBoxLayout(this);layout->addWidget(new QLabel("登录与手机相同的 vivo 账号，并在手机原子笔记中开启云同步。"));
        auto *bar=new QGridLayout;search->setPlaceholderText("搜索标题或摘要");notebooks->addItem("所有笔记本","");bar->addWidget(sync,0,0);bar->addWidget(automatic,0,1);bar->addWidget(trash,0,2);bar->addWidget(cancel,0,3);bar->addWidget(notebooks,1,0,1,2);bar->addWidget(search,1,2,1,2);bar->setColumnStretch(1,1);bar->setColumnStretch(3,1);layout->addLayout(bar);
        tree->setHeaderLabels({"笔记","更新时间"});tree->header()->setStretchLastSection(false);tree->header()->setSectionResizeMode(0,QHeaderView::Stretch);tree->header()->setSectionResizeMode(1,QHeaderView::ResizeToContents);tree->setSelectionMode(QAbstractItemView::SingleSelection);
        auto *right=new QWidget;auto *content=new QVBoxLayout(right);content->setContentsMargins(0,0,0,0);content->addWidget(preview,1);attachments->setMaximumHeight(110);content->addWidget(attachments);content->addWidget(exportAttachment);auto *split=new QSplitter;split->addWidget(tree);split->addWidget(right);split->setStretchFactor(0,1);split->setStretchFactor(1,2);layout->addWidget(split,1);
        auto *actions=new QGridLayout;int actionIndex=0;for(auto *button:{create,rename,edit,exportText,moveTrash,restore}){actions->addWidget(button,actionIndex/3,actionIndex%3);++actionIndex;}layout->addLayout(actions);auto *hint=new QLabel("可编辑笔记中的文字并保留原格式及附件；手写画布、加密笔记请使用官方客户端。");hint->setWordWrap(true);layout->addWidget(hint);status->setWordWrap(true);layout->addWidget(status);
        tree->setObjectName("notesTree");preview->setObjectName("notesPreview");search->setObjectName("notesSearch");trash->setObjectName("notesTrash");sync->setObjectName("notesSync");edit->setObjectName("notesEdit");automatic->setObjectName("notesAutomatic");status->setObjectName("notesStatus");
        connect(sync,&QPushButton::clicked,this,[this]{start("/api/notes/sync");});connect(create,&QPushButton::clicked,this,[this]{editor(true);});connect(edit,&QPushButton::clicked,this,[this]{editor(false);});
        connect(cancel,&QPushButton::clicked,this,[this]{if(!jobId.isEmpty())request("POST","/api/jobs/"+jobId+"/cancel",{},[](QJsonObject,QString){});});
        connect(tree,&QTreeWidget::itemSelectionChanged,this,[this]{loadDetail();});connect(search,&QLineEdit::textChanged,this,[this]{display();});connect(trash,&QCheckBox::toggled,this,[this]{display();});connect(notebooks,&QComboBox::currentIndexChanged,this,[this]{display();});connect(attachments,&QListWidget::itemSelectionChanged,this,[this]{buttons();});
        connect(automatic,&QCheckBox::toggled,this,[this](bool enabled){request("PATCH","/api/notes/settings",{{"automatic",enabled}},[this](QJsonObject,QString error){if(!error.isEmpty())status->setText(error);refresh();});});
        connect(rename,&QPushButton::clicked,this,[this]{auto note=current();bool ok=false;auto title=QInputDialog::getText(this,"云端笔记改名","标题",QLineEdit::Normal,note.value("title").toString(),&ok);if(ok&&!title.trimmed().isEmpty())start("/api/notes/"+note.value("id").toString()+"/rename",{{"title",title},{"version",note.value("version")}});});
        for(auto action:{QString("trash"),QString("restore")})connect(action=="trash"?moveTrash:restore,&QPushButton::clicked,this,[this,action]{auto note=current();if(QMessageBox::question(this,"云端笔记",action=="trash"?"将这篇笔记移入云端回收站？更改会同步到其他设备。":"恢复这篇云端笔记？")!=QMessageBox::Yes)return;start("/api/notes/"+note.value("id").toString()+"/"+action,{{"version",note.value("version")}});});
        connect(exportText,&QPushButton::clicked,this,[this]{QString name=current().value("title").toString();name.replace(QRegularExpression("[/\\\\\\x00-\\x1f]"),"_");auto target=QFileDialog::getSaveFileName(this,"导出笔记文本",QDir::homePath()+"/"+name+".txt","文本文件 (*.txt)");if(target.isEmpty())return;QSaveFile file(target);auto bytes=preview->toPlainText().toUtf8();bool ok=file.open(QIODevice::WriteOnly)&&file.write(bytes)==bytes.size()&&file.commit();status->setText(ok?"笔记文本已导出":"导出失败，未覆盖原文件");});
        connect(exportAttachment,&QPushButton::clicked,this,[this]{if(!attachments->currentItem())return;auto a=attachments->currentItem()->data(Qt::UserRole).toJsonObject();QString name=a.value("name").toString();name.replace(QRegularExpression("[/\\\\\\x00-\\x1f]"),"_");savingPath=QFileDialog::getSaveFileName(this,"导出笔记附件",QDir::homePath()+"/"+name);if(savingPath.isEmpty())return;savingRoute="/api/notes/"+current().value("id").toString()+"/attachments/"+a.value("id").toString()+"/file";start(savingRoute.left(savingRoute.size()-4)+"download");});
        connect(&timer,&QTimer::timeout,this,[this]{if(!isVisible())return;if(!jobId.isEmpty())poll();else if(++ticks%5==0)refresh();});timer.start(1000);buttons();QTimer::singleShot(0,this,[this]{refresh();});
    }
};
