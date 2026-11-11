#pragma once
#include "gallery.h"

static bool gallerySelfTest(const QString &state) {
    QTcpServer server; if(!server.listen(QHostAddress::LocalHost,0))return false;
    int active=0, maximum=0, thumbnails=0, exports=0, imports=0;
    bool authorized=true, albumBody=false; QStringList thumbnailPaths;
    QImage image(32,24,QImage::Format_RGB32); image.fill(Qt::red);
    QByteArray png; QBuffer buffer(&png); buffer.open(QIODevice::WriteOnly); image.save(&buffer,"PNG");
    QObject::connect(&server,&QTcpServer::newConnection,&server,[&]{
        auto *socket=server.nextPendingConnection();
        auto data=std::make_shared<QByteArray>();
        QObject::connect(socket,&QTcpSocket::disconnected,socket,&QObject::deleteLater);
        QObject::connect(socket,&QTcpSocket::readyRead,socket,[&,socket,data]{
            *data+=socket->readAll(); int end=data->indexOf("\r\n\r\n"); if(end<0)return;
            int length=0; for(auto line:data->left(end).split('\n'))if(line.toLower().startsWith("content-length:"))length=line.mid(line.indexOf(':')+1).trimmed().toInt();
            if(data->size()<end+4+length)return;
            authorized=authorized && data->toLower().contains("authorization: bearer qt-test-token");
            const auto body=QJsonDocument::fromJson(data->mid(end+4,length)).object();
            const QByteArray path=data->split(' ').value(1);
            QPointer<QTcpSocket> guard(socket);
            auto respond=[guard](QJsonObject result){
                if(!guard)return; auto *socket=guard.data();
                if(socket->state()!=QAbstractSocket::ConnectedState)return;
                auto bytes=QJsonDocument(result).toJson(QJsonDocument::Compact);
                socket->write("HTTP/1.1 200 OK\r\nContent-Type: application/json\r\nContent-Length: "+QByteArray::number(bytes.size())+"\r\nConnection: close\r\n\r\n"+bytes); socket->disconnectFromHost();
            };
            if(path.endsWith("/albums")) respond({{"albums",QJsonArray{QJsonObject{{"name","测试相册"},{"keyID","camera"},{"bucketIDs",QJsonArray{7}},{"count",6}}}}});
            else if(path.endsWith("/list")) {
                bool last=body.value("pageIndex").toInt()>0;
                if(body.value("kind")=="album")albumBody=body.value("bucketIDs").toArray()==QJsonArray{7} && body.value("keyID")=="camera";
                QJsonArray items; for(int i=0;i<(last?1:60);++i)items.append(QJsonObject{{"fileName",QString(last?"最后一张.jpg":"照片 %1.jpg").arg(i)},{"savePath",QString("/sdcard/DCIM/%1.jpg").arg(last?100:i)},{"fileSize",120},{"date",1700000000000.0}});
                respond({{"items",items},{"hasMore",!last}});
            } else if(path.endsWith("/thumbnail")) {
                thumbnailPaths << body.value("path").toString(); ++active; maximum=qMax(maximum,active);
                QTimer::singleShot(30,&server,[&,respond]{--active; ++thumbnails; respond({{"mime","image/png"},{"base64",QString::fromLatin1(png.toBase64())}});});
            }
            data->clear();
        });
    });
    GalleryDialog dialog(state,server.serverPort(),"gallery-test");
    auto *grid=dialog.findChild<QListWidget*>("galleryGrid"); auto *albums=dialog.findChild<QComboBox*>("galleryAlbums");
    auto *save=dialog.findChild<QPushButton*>("galleryExport");
    auto wait=[&](std::function<bool()> condition){ QElapsedTimer time;time.start(); while(!condition() && time.elapsed()<4000){QCoreApplication::processEvents(QEventLoop::AllEvents,10);QThread::msleep(1);}return condition(); };
    dialog.exportFiles=[&](QStringList paths,bool original){if(paths.size()==2 && !original)++exports;};
    dialog.importFiles=[&](QStringList paths){if(paths==QStringList{"/tmp/gallery-test.jpg"})++imports;};
    dialog.resize(720,500); dialog.show();
    if(!wait([&]{return thumbnails>=2 && grid->count()>=60;}))return false;
    if(maximum>4 || maximum<2 || !authorized)return false;
    grid->item(0)->setSelected(true); grid->item(1)->setSelected(true); save->click(); if(exports!=1)return false;
    QMimeData desktop; desktop.setUrls({QUrl::fromLocalFile("/tmp/gallery-test.jpg")});
    QDragEnterEvent enter(QPointF(10,10),Qt::CopyAction,&desktop,Qt::LeftButton,Qt::NoModifier); QApplication::sendEvent(grid->viewport(),&enter);
    QDropEvent drop(QPointF(10,10),Qt::CopyAction,&desktop,Qt::LeftButton,Qt::NoModifier); QApplication::sendEvent(grid->viewport(),&drop);
    if(!enter.isAccepted() || !drop.isAccepted() || imports!=1){fprintf(stderr,"drop: %d %d %d\n",enter.isAccepted(),drop.isAccepted(),imports);return false;}
    QMimeData phone; phone.setData("application/x-vivo-phone-paths","[]"); phone.setUrls({QUrl::fromLocalFile("/tmp/gallery-test.jpg")});
    QDragEnterEvent internal(QPointF(10,10),Qt::CopyAction,&phone,Qt::LeftButton,Qt::NoModifier); QApplication::sendEvent(grid->viewport(),&internal);
    if(internal.isAccepted()){fprintf(stderr,"internal accepted\n");return false;}
    dialog.grab().save("/tmp/vivo-gallery-preview.png");
    grid->verticalScrollBar()->setValue(grid->verticalScrollBar()->maximum());
    if(!wait([&]{return grid->count()==61 && thumbnailPaths.contains("/sdcard/DCIM/59.jpg");}))return false;
    if(thumbnailPaths.contains("/sdcard/DCIM/30.jpg"))return false;
    // Change the collection while old thumbnail requests are outstanding.
    albums->setCurrentIndex(2);
    if(!wait([&]{return albumBody && grid->count()>=60 && active==0;}))return false;
    if(grid->item(0)->text().contains("最后一张"))return false;
    dialog.close(); return true;
}
