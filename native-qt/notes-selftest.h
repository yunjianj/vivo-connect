#pragma once
#include "notes.h"
static bool notesSelfTest(const QString &state) {
    auto fail=[](int line){fprintf(stderr,"Notes self-test failed at line %d\n",line);return false;};
    if(noteEditableText("<div>第一段</div><div>第二段</div><div><br></div><div>第三段</div>")!="第一段\n第二段\n\n第三段")return fail(__LINE__);
    if(noteEditableText("<p>甲<br>乙</p><p><br></p><p><br></p><p>丙</p>")!="甲\n乙\n\n\n丙")return fail(__LINE__);
    if(noteEditableText("<p style='x'><span>第一段</span></p><p><span>第二段</span></p><p style='x'><span style='y'></span></p><p><span>第三段</span></p>")!="第一段\n第二段\n\n第三段")return fail(__LINE__);
    QTcpServer server;if(!server.listen(QHostAddress::LocalHost,0))return fail(__LINE__);
    bool expired=false,authorized=true;int syncs=0,lists=0,edits=0;bool editPayload=false;
    QObject::connect(&server,&QTcpServer::newConnection,&server,[&]{auto *socket=server.nextPendingConnection();auto request=std::make_shared<QByteArray>();QObject::connect(socket,&QTcpSocket::disconnected,socket,&QObject::deleteLater);
        QObject::connect(socket,&QTcpSocket::readyRead,socket,[&,socket,request]{*request+=socket->readAll();int end=request->indexOf("\r\n\r\n");if(end<0)return;int length=0;for(auto line:request->left(end).split('\n'))if(line.toLower().startsWith("content-length:"))length=line.mid(line.indexOf(':')+1).trimmed().toInt();if(request->size()<end+4+length)return;
            authorized=authorized&&request->toLower().contains("authorization: bearer qt-test-token");auto route=request->split(' ').value(1);QJsonObject response;
            if(route=="/api/notes/sync"){syncs++;response={{"id","note-test-job"}};}
            else if(route.endsWith("/save")){edits++;auto body=QJsonDocument::fromJson(request->mid(end+4,length)).object();auto changes=body.value("edits").toArray();editPayload=body.value("version")=="1"&&body.value("title")=="修改后标题"&&changes.size()==1&&changes[0].toObject().value("text")=="修改后文字";response={{"id","note-edit-job"}};}
            else if(route=="/api/jobs/note-test-job"||route=="/api/jobs/note-edit-job")response={{"status","succeeded"}};
            else if(route=="/api/notes/settings")response={{"automatic",true}};
            else if(route=="/api/notes"){
                lists++;QJsonArray items;for(int i=0;i<3;i++)items.append(QJsonObject{{"id",QString(64,QChar('a'+i))},{"version","1"},{"title",i==0?"项目笔记示例":i==1?"加密笔记":"回收站示例"},{"digest","演示摘要"},{"date",1700000000000.0},{"inTrash",i==2},{"locked",i==1},{"notebookId","demo-book"}});
                response={{"accountKey","demo-account"},{"items",items},{"notebooks",QJsonArray{QJsonObject{{"id","demo-book"},{"name","工作"}}}},{"lastSync","2026-11-12T00:00:00Z"},{"automatic",false}};
            }else response={{"id",QString(64,QChar('a'))},{"version","1"},{"editable",true},{"editMode","text-parts"},{"textParts",QJsonArray{QJsonObject{{"id",QString(64,QChar('d'))},{"html","模拟笔记正文"}}}},{"content","<p>模拟笔记正文</p><script>untrusted()</script><img src='file:///etc/passwd'>"},{"attachments",QJsonArray{}}};
            if(expired)response={{"error",QJsonObject{{"message","请先登录原子笔记账号"}}}};
            auto bytes=QJsonDocument(response).toJson(QJsonDocument::Compact);socket->write(QByteArray(expired?"HTTP/1.1 409 Conflict":"HTTP/1.1 200 OK")+"\r\nContent-Type: application/json\r\nContent-Length: "+QByteArray::number(bytes.size())+"\r\nConnection: close\r\n\r\n"+bytes);socket->disconnectFromHost();request->clear();
        });
    });
    NotesPanel panel(state,server.serverPort());panel.resize(1080,720);panel.show();
    auto wait=[](std::function<bool()> condition){QElapsedTimer time;time.start();while(!condition()&&time.elapsed()<6000){QCoreApplication::processEvents(QEventLoop::AllEvents,20);QThread::msleep(1);}return condition();};
    auto *tree=panel.findChild<QTreeWidget*>("notesTree");
    auto *preview=panel.findChild<QTextBrowser*>("notesPreview");auto *search=panel.findChild<QLineEdit*>("notesSearch");auto *trash=panel.findChild<QCheckBox*>("notesTrash");auto *sync=panel.findChild<QPushButton*>("notesSync");auto *edit=panel.findChild<QPushButton*>("notesEdit");auto *automatic=panel.findChild<QCheckBox*>("notesAutomatic");
    if(!wait([&]{return tree->topLevelItemCount()==2;}))return fail(__LINE__);
    tree->setCurrentItem(tree->topLevelItem(0));if(!wait([&]{return preview->toPlainText().contains("模拟笔记正文")&&edit->isEnabled();}))return fail(__LINE__);
    if(preview->toPlainText().contains("untrusted"))return fail(__LINE__);
    if(preview->document()->resource(QTextDocument::ImageResource,QUrl("file:///etc/passwd")).isValid())return fail(__LINE__);
    panel.grab().save("/tmp/vivo-notes-preview.png");
    QTimer::singleShot(50,&panel,[&]{
        auto *dialog=qobject_cast<QDialog*>(QApplication::activeModalWidget());if(!dialog)return;
        auto *editor=dialog->findChild<QPlainTextEdit*>("notePartEditor");auto *title=dialog->findChild<QLineEdit*>("noteEditorTitle");auto *choices=dialog->findChild<QDialogButtonBox*>();
        if(!editor||!title||!choices){dialog->reject();return;}
        editor->setPlainText("修改后文字");title->setText("修改后标题");choices->button(QDialogButtonBox::Save)->click();
    });
    edit->click();if(!wait([&]{return edits==1&&sync->isEnabled();})||!editPayload)return fail(__LINE__);
    tree->setCurrentItem(tree->topLevelItem(1));if(!preview->toPlainText().contains("官方客户端")||edit->isEnabled())return fail(__LINE__);
    search->setText("不存在");if(tree->topLevelItemCount()!=0||!preview->toPlainText().isEmpty())return fail(__LINE__);search->clear();trash->setChecked(true);if(tree->topLevelItemCount()!=1)return fail(__LINE__);
    trash->setChecked(false);sync->click();if(!wait([&]{return syncs==1&&lists>=2&&sync->isEnabled();}))return fail(__LINE__);
    expired=true;automatic->setChecked(true);if(!wait([&]{return tree->topLevelItemCount()==0&&panel.findChild<QLabel*>("notesStatus")->text().contains("登录");}))return fail(__LINE__);
    return authorized;
}
