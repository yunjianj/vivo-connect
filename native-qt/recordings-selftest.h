#pragma once
#include "recordings.h"
static bool recordingsSelfTest(const QString &state) {
    QTcpServer server;if(!server.listen(QHostAddress::LocalHost,0))return false;
    int lists=0,syncs=0,settings=0;bool expired=false,authorized=true;
    QObject::connect(&server,&QTcpServer::newConnection,&server,[&]{
        auto *socket=server.nextPendingConnection();auto request=std::make_shared<QByteArray>();
        QObject::connect(socket,&QTcpSocket::disconnected,socket,&QObject::deleteLater);
        QObject::connect(socket,&QTcpSocket::readyRead,socket,[&,socket,request]{
            *request+=socket->readAll();int end=request->indexOf("\r\n\r\n");if(end<0)return;
            int length=0;for(auto line:request->left(end).split('\n'))if(line.toLower().startsWith("content-length:"))length=line.mid(line.indexOf(':')+1).trimmed().toInt();
            if(request->size()<end+4+length)return;
            authorized=authorized&&request->toLower().contains("authorization: bearer qt-test-token");
            auto route=request->split(' ').value(1);QJsonObject response;
            if(route=="/api/recordings/sync"){++syncs;response={{"id","record-job"}};}
            else if(route=="/api/jobs/record-job")response={{"status","succeeded"}};
            else if(route=="/api/recordings/settings"){++settings;response={{"automatic",true}};}
            else {++lists;QJsonArray items;for(int i=0;i<51;++i)items.append(QJsonObject{{"id",QString::number(i+1,16).rightJustified(64,'0')},{"cloudVersion",syncs?"2":"1"},{"name",i==50?"回收站示例":i==0?"会议录音示例":QString("录音 %1").arg(i)},{"duration",125000},{"size",128000},{"date",1700000000000.0},{"inTrash",i==50},{"hasAudio",true},{"transcript","模拟转写内容"},{"marks",QJsonArray{}}});response={{"items",items},{"automatic",false}};}
            if(expired)response={{"error",QJsonObject{{"message","请先登录 vivo 账号"}}}};
            const auto data=QJsonDocument(response).toJson(QJsonDocument::Compact);
            socket->write(QByteArray(expired?"HTTP/1.1 409 Conflict":"HTTP/1.1 200 OK")+"\r\nContent-Type: application/json\r\nContent-Length: "+QByteArray::number(data.size())+"\r\nConnection: close\r\n\r\n"+data);socket->disconnectFromHost();request->clear();
        });
    });
    RecordingsDialog dialog(state,server.serverPort());dialog.show();
    auto wait=[](std::function<bool()> done){QElapsedTimer time;time.start();while(!done()&&time.elapsed()<6000){QCoreApplication::processEvents(QEventLoop::AllEvents,20);QThread::msleep(1);}return done();};
    auto *tree=dialog.findChild<QTreeWidget*>("recordingsTree");auto *trash=dialog.findChild<QCheckBox*>("recordingsTrash");auto *search=dialog.findChild<QLineEdit*>("recordingsSearch");auto *sync=dialog.findChild<QPushButton*>("recordingsSync");auto *automatic=dialog.findChild<QCheckBox*>("recordingsAutomatic");
    if(tree->selectionMode()!=QAbstractItemView::ExtendedSelection)return false;
    if(!wait([&]{return tree->topLevelItemCount()==50;}))return false;
    if(tree->topLevelItem(0)->text(0)!="会议录音示例")return false;
    tree->setCurrentItem(tree->topLevelItem(0));
    if(!dialog.findChild<QPlainTextEdit*>("recordingsDetails")->toPlainText().contains("模拟转写"))return false;
    dialog.grab().save("/tmp/vivo-recordings-preview.png");
    trash->setChecked(true);if(tree->topLevelItemCount()!=1||tree->topLevelItem(0)->text(0)!="回收站示例")return false;
    search->setText("不存在");if(tree->topLevelItemCount()!=0)return false;search->clear();trash->setChecked(false);
    tree->setCurrentItem(tree->topLevelItem(0)); tree->verticalScrollBar()->setValue(tree->verticalScrollBar()->maximum());
    const int scroll=tree->verticalScrollBar()->value(); if(scroll<=0)return false;
    sync->click();if(!wait([&]{return syncs==1&&lists>=2&&sync->isEnabled();}))return false;
    QCoreApplication::processEvents(); if(tree->verticalScrollBar()->value()!=scroll || tree->selectedItems().size()!=1)return false;
    expired=true;automatic->setChecked(true);
    if(!wait([&]{return settings==1&&tree->topLevelItemCount()==0&&dialog.findChild<QLabel*>("recordingsStatus")->text().contains("登录");}))return false;
    dialog.reject();return authorized;
}
