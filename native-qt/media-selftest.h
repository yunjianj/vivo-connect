#pragma once
#include "gallery.h"

static bool mediaSelfTest(const QString &state) {
    for(const QString &kind:QStringList{"videos","music","documents","recent"}) {
        QTcpServer server;if(!server.listen(QHostAddress::LocalHost,0))return false;
        QList<QPair<QByteArray,QJsonObject>> calls;
        bool authorized=true,failedPage=false;int exports=0,copies=0,imports=0;
        QObject::connect(&server,&QTcpServer::newConnection,&server,[&]{
            auto *socket=server.nextPendingConnection();auto bytes=std::make_shared<QByteArray>();
            QObject::connect(socket,&QTcpSocket::disconnected,socket,&QObject::deleteLater);
            QObject::connect(socket,&QTcpSocket::readyRead,socket,[&,socket,bytes]{
                *bytes+=socket->readAll();const int end=bytes->indexOf("\r\n\r\n");if(end<0)return;
                int length=0;for(const auto &line:bytes->left(end).split('\n'))if(line.toLower().startsWith("content-length:"))length=line.mid(line.indexOf(':')+1).trimmed().toInt();
                if(bytes->size()<end+4+length)return;
                const QByteArray route=bytes->split(' ').value(1);const QJsonObject body=QJsonDocument::fromJson(bytes->mid(end+4,length)).object();
                authorized=authorized && bytes->toLower().contains("authorization: bearer qt-test-token");calls.append({route,body});
                QJsonObject response;int status=200;
                if(route.endsWith("/media/list")) {
                    if(kind=="music" && body.value("pageIndex").toInt()==1 && !failedPage) {failedPage=true;status=502;response={{"error",QJsonObject{{"message","模拟分页失败"}}}};}
                    else {
                        QJsonArray items;
                        if(body.value("pageIndex").toInt()==0)for(int i=0;i<2;++i)items.append(QJsonObject{{"fileName",QString("文件%1.%2").arg(i).arg(kind=="music"?"mp3":(kind=="documents" || kind=="recent")?"pdf":"mp4")},{"savePath",QString("/sdcard/Download/%1").arg(i)},{"fileSize",120},{"isVideo",kind=="videos"},{"recentTime","2026-11-17"},{"recentType","DOC"}});
                        response={{"items",items},{"hasMore",!items.isEmpty()}};
                    }
                } else if(route.endsWith("/thumbnail")){status=502;response={{"error",QJsonObject{{"message","无缩略图"}}}};}
                const QByteArray data=QJsonDocument(response).toJson(QJsonDocument::Compact);
                socket->write("HTTP/1.1 "+QByteArray::number(status)+" Result\r\nContent-Type: application/json\r\nContent-Length: "+QByteArray::number(data.size())+"\r\nConnection: close\r\n\r\n"+data);socket->disconnectFromHost();
            });
        });
        GalleryDialog dialog(state,server.serverPort(),"media-test",nullptr,kind);
        dialog.resize(850,620);dialog.show();
        auto *grid=static_cast<GalleryGrid*>(dialog.findChild<QListWidget*>("galleryGrid"));auto *retry=dialog.findChild<QPushButton*>("galleryRetry");
        auto *save=dialog.findChild<QPushButton*>("galleryExport");auto *categories=dialog.findChild<QComboBox*>("galleryAlbums");auto *sort=dialog.findChild<QComboBox*>("gallerySort");
        auto wait=[&](std::function<bool()> condition){QElapsedTimer timer;timer.start();while(!condition() && timer.elapsed()<4000){QCoreApplication::processEvents(QEventLoop::AllEvents,10);QThread::msleep(1);}return condition();};
        if(!wait([&]{return kind=="music"?retry->isVisible():grid->count()==2 && save->isEnabled()==false && calls.size()>=2;}))return false;
        if(kind=="music") {retry->click();if(!wait([&]{return !retry->isVisible() && grid->count()==2;}))return false;}
        dialog.exportFiles=[&](QStringList paths,bool original){if(paths.size()==2 && !original)++exports;};
        dialog.copyFiles=[&](QJsonArray files){if(files.size()==2 && files[0].toObject().contains("path"))++copies;};
        dialog.importFiles=[&](QStringList paths){if(paths==QStringList{"/tmp/media-import.pdf"})++imports;};
        if(!wait([&]{grid->selectAll();return save->isEnabled();}))return false;
        auto *listView=dialog.findChild<QToolButton*>("mediaListView"), *iconView=dialog.findChild<QToolButton*>("mediaIconView");
        if(!listView || !iconView)return false;
        listView->click();if(grid->viewMode()!=QListView::ListMode || grid->verticalScrollMode()!=QAbstractItemView::ScrollPerPixel || grid->selectedItems().size()!=2)return false;
        iconView->click();if(grid->viewMode()!=QListView::IconMode || grid->verticalScrollMode()!=QAbstractItemView::ScrollPerPixel || grid->selectedItems().size()!=2)return false;
        save->click();grid->setFocus();QKeyEvent copy(QEvent::KeyPress,Qt::Key_C,Qt::ControlModifier);QApplication::sendEvent(grid,&copy);
        grid->importPaths({"/tmp/media-import.pdf"});if(exports!=1 || copies!=1 || imports!=1)return false;
        if(kind=="documents") {
            categories->setCurrentIndex(categories->findText("PDF"));
            if(!wait([&]{for(const auto &call:calls)if(call.second.value("category")=="PDF")return true;return false;}))return false;
        }
        if(!wait([&]{return grid->count()==2 && !retry->isVisible();}))return false;
        if(kind=="recent") {
            if(sort->isVisible() || sort->currentData().toInt()!=5 || !grid->item(0)->text().contains("2026-11-17 · 文档"))return false;
        } else {
            sort->setCurrentIndex(sort->findData(6));
            if(!wait([&]{for(const auto &call:calls)if(call.second.value("sortCondition")==6)return true;return false;}))return false;
        }
        if(!wait([&]{grid->setCurrentRow(0);return save->isEnabled();}))return false;
        auto *rename=dialog.findChild<QPushButton*>("mediaRename");auto *move=dialog.findChild<QPushButton*>("mediaMove");
        for(bool moving:{false,true}) {
            if(!wait([&]{grid->setCurrentRow(0);return rename->isEnabled();}))return false;
            QTimer::singleShot(10,&dialog,[&]{if(auto *input=qobject_cast<QInputDialog*>(QApplication::activeModalWidget())){input->setTextValue(moving?"/sdcard/Documents":"新文件.pdf");input->accept();}});
            (moving?move:rename)->click();
            if(!wait([&]{for(const auto &call:calls)if(call.first.endsWith(moving?"/files/move":"/files/rename"))return true;return false;}))return false;
        }
        if(!wait([&]{grid->setCurrentRow(0);return rename->isEnabled();}))return false;
        auto *remove=dialog.findChild<QPushButton*>("mediaDelete");
        auto deletionCount=[&]{int n=0;for(const auto &call:calls)if(call.first.endsWith("/files/delete"))++n;return n;};
        for(bool confirm:{false,true}) {
            QTimer::singleShot(10,&dialog,[&,confirm]{if(auto *message=qobject_cast<QMessageBox*>(QApplication::activeModalWidget()))message->button(confirm?QMessageBox::Yes:QMessageBox::No)->click();});
            remove->click();
            if(confirm){if(!wait([&]{return deletionCount()==1 && !dialog.isOperating();}))return false;}
            else if(deletionCount()!=0)return false;
        }
        for(const auto &call:calls) {
            if(call.first.endsWith("/albums"))return false;
            if(kind!="videos" && call.first.endsWith("/thumbnail"))return false;
            if(call.first.endsWith("/media/list") && call.second.value("kind")!=kind)return false;
            if(call.first.endsWith("/files/rename") && call.second.value("name")!="新文件.pdf")return false;
            if(call.first.endsWith("/files/delete") && call.second.value("paths").toArray()!=QJsonArray{"/sdcard/Download/0"})return false;
            if(call.first.endsWith("/files/move") && call.second.value("destination")!="/sdcard/Documents/0")return false;
        }
        if(!authorized)return false;
        if(!wait([&]{grid->setCurrentRow(0);return rename->isEnabled();}))return false;
        if(kind=="documents")dialog.grab().save("/tmp/vivo-documents-preview.png");
        dialog.close();
    }
    return true;
}
