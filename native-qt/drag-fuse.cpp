#define FUSE_USE_VERSION 31
#include <fuse3/fuse.h>
#include <QtCore>
#include <QtNetwork>
#include <mutex>
#include <condition_variable>
#include <thread>
#include <sys/stat.h>
#include <fcntl.h>
#include <unistd.h>

struct Entry { QString name, phone, recording; qint64 size; bool directory; QString local; std::mutex mutex; };
static std::vector<std::unique_ptr<Entry>> entries;
static QString stateDir, session; static int port;
static QByteArray token;
static QTemporaryDir recordingTemp(QDir::tempPath()+"/vivo-record-drag-XXXXXX");
static std::mutex gateMutex; static std::condition_variable gateCondition; static bool gateReady=false, gateAccepted=false;
static Entry *findEntry(const char *p) { QString name=QString::fromUtf8(p+1).section('/',0,0); for (auto &e:entries) if(e->name==name)return e.get(); return nullptr; }
static QJsonObject call(QString method, QString path, QJsonObject body={}) {
    QNetworkAccessManager net; net.setProxy(QNetworkProxy::NoProxy);
    QNetworkRequest req(QUrl(QString("http://127.0.0.1:%1%2").arg(port).arg(path)));
    req.setRawHeader("Authorization", "Bearer " + token); req.setHeader(QNetworkRequest::ContentTypeHeader,"application/json");
    req.setAttribute(QNetworkRequest::RedirectPolicyAttribute,QNetworkRequest::ManualRedirectPolicy); req.setTransferTimeout(30000);
    auto *reply=method=="GET"?net.get(req):net.post(req,QJsonDocument(body).toJson(QJsonDocument::Compact));
    QEventLoop loop; QObject::connect(reply,&QNetworkReply::finished,&loop,&QEventLoop::quit); loop.exec();
    if(reply->error()!=QNetworkReply::NoError) return {};
    return QJsonDocument::fromJson(reply->readAll()).object();
}
static bool materialize(Entry *e) {
    { std::unique_lock<std::mutex> gate(gateMutex); gateCondition.wait(gate,[]{return gateReady;}); if(!gateAccepted)return false; }
    std::lock_guard<std::mutex> lock(e->mutex);
    if(!e->local.isEmpty()) return true;
    auto job=e->recording.isEmpty()?call("POST", "/api/sessions/"+session+"/downloads", {{"paths",QJsonArray{e->phone}},{"isDirectory",e->directory}}):call("POST","/api/recordings/"+e->recording+"/download");
    QString id=job.value("id").toString(); if(id.isEmpty())return false;
    QElapsedTimer timer; timer.start();
    while(timer.elapsed()<3600000) {
        auto j=call("GET","/api/jobs/"+id); QString status=j.value("status").toString();
        auto error=j.value("error").toObject();
        const bool notifyFailed=status=="failed" && error.value("code").toString()=="TRANSFER_NOTIFY_FAILED";
        if(status=="succeeded" || notifyFailed) {
            if(!e->recording.isEmpty()) {
                if(!recordingTemp.isValid())return false;
                QSaveFile file(recordingTemp.filePath(e->recording)); if(!file.open(QIODevice::WriteOnly))return false;
                QNetworkAccessManager net; net.setProxy(QNetworkProxy::NoProxy);
                QNetworkRequest req{QUrl(QString("http://127.0.0.1:%1/api/recordings/%2/file").arg(port).arg(e->recording))};
                req.setRawHeader("Authorization","Bearer "+token); req.setTransferTimeout(120000); req.setAttribute(QNetworkRequest::RedirectPolicyAttribute,QNetworkRequest::ManualRedirectPolicy);
                auto *reply=net.get(req); bool ok=true; QEventLoop loop;
                QObject::connect(reply,&QNetworkReply::readyRead,&loop,[&]{auto data=reply->readAll();if(file.write(data)!=data.size()){ok=false;reply->abort();}});
                QObject::connect(reply,&QNetworkReply::finished,&loop,&QEventLoop::quit); loop.exec();
                auto tail=reply->readAll(); if(file.write(tail)!=tail.size())ok=false;
                ok=ok && reply->error()==QNetworkReply::NoError && reply->attribute(QNetworkRequest::HttpStatusCodeAttribute).toInt()==200 && file.size()==e->size;
                reply->deleteLater(); if(!ok || !file.commit())return false; e->local=file.fileName(); return true;
            }
            auto result=notifyFailed?error.value("details").toObject():j.value("result").toObject();
            QDir dir(result.value("directory").toString());
            QString base=QFileInfo(dir.absolutePath()).canonicalFilePath(), root=QFileInfo(stateDir+"/downloads").canonicalFilePath();
            QString file=QFileInfo(dir.filePath(e->name)).canonicalFilePath();
            if(root.isEmpty() || !base.startsWith(root+"/") || !file.startsWith(base+"/") || (e->directory ? !QFileInfo(file).isDir() : (!QFileInfo(file).isFile() || QFileInfo(file).size()!=e->size)))return false;
            if(notifyFailed) fprintf(stderr,"TRANSFER_NOTIFY_FAILED\n");
            e->local=file; return true;
        }
        if(status=="failed" || status=="cancelled" || status.isEmpty()) return false;
        QThread::msleep(250);
    }
    call("POST","/api/jobs/"+id+"/cancel"); return false;
}
static QString localPath(Entry *e,const char *p) {
    if(!materialize(e))return {};
    QString relative=QString::fromUtf8(p+1).section('/',1);
    if(relative.isEmpty())return e->local;
    if(!e->directory)return {};
    QString candidate=QFileInfo(QDir(e->local).filePath(relative)).canonicalFilePath();
    return candidate.startsWith(e->local+"/") ? candidate : QString();
}
static int getattr_cb(const char *p,struct stat *s,struct fuse_file_info *) {
    memset(s,0,sizeof(*s)); s->st_uid=getuid();s->st_gid=getgid();
    if(strcmp(p,"/")==0){s->st_mode=S_IFDIR|0500;s->st_nlink=2;return 0;}
    auto *e=findEntry(p);if(!e)return -ENOENT;
    bool top=QString::fromUtf8(p+1)==e->name;
    if(top){s->st_mode=e->directory?S_IFDIR|0700:S_IFREG|0600;s->st_nlink=e->directory?2:1;s->st_size=e->directory?0:e->size;return 0;}
    QString local=localPath(e,p); if(local.isEmpty())return -EIO; QFileInfo info(local);
    if(!info.isDir()&&!info.isFile())return -ENOENT;
    s->st_mode=info.isDir()?S_IFDIR|0700:S_IFREG|0600;s->st_nlink=info.isDir()?2:1;s->st_size=info.isDir()?0:info.size();return 0;
}
static int readdir_cb(const char *p,void *buf,fuse_fill_dir_t fill,off_t,struct fuse_file_info *,enum fuse_readdir_flags) {
    fill(buf,".",nullptr,0,FUSE_FILL_DIR_DEFAULTS);fill(buf,"..",nullptr,0,FUSE_FILL_DIR_DEFAULTS);
    if(!strcmp(p,"/")) { for(auto &e:entries)fill(buf,e->name.toUtf8().constData(),nullptr,0,FUSE_FILL_DIR_DEFAULTS);return 0; }
    auto *e=findEntry(p);if(!e||!e->directory)return -ENOENT; QString local=localPath(e,p);if(local.isEmpty())return -EIO;
    QDir dir(local);if(!dir.exists())return -ENOENT;
    for(auto &name:dir.entryList(QDir::AllEntries|QDir::NoDotAndDotDot|QDir::Hidden|QDir::System))fill(buf,name.toUtf8().constData(),nullptr,0,FUSE_FILL_DIR_DEFAULTS);return 0;
}
static int open_cb(const char *p,struct fuse_file_info *fi) {
    auto *e=findEntry(p);if(!e)return -ENOENT;if((fi->flags&O_ACCMODE)!=O_RDONLY)return -EACCES;
    QString local=localPath(e,p);if(local.isEmpty())return -EIO; QByteArray name=QFile::encodeName(local); int fd=::open(name.constData(),O_RDONLY|O_CLOEXEC); if(fd<0)return -errno;fi->fh=fd;return 0;
}
static int read_cb(const char *,char *buf,size_t size,off_t offset,struct fuse_file_info *fi) { auto n=::pread(int(fi->fh),buf,size,offset);return n<0?-errno:int(n); }
static int release_cb(const char *,struct fuse_file_info *fi){::close(int(fi->fh));return 0;}
int main(int argc,char **argv) {
    QCoreApplication app(argc,argv); if(argc!=2)return 2;
    QByteArray line; char byte; while(::read(STDIN_FILENO,&byte,1)==1 && byte!='\n') { line+=byte; if(line.size()>1048576)return 2; }
    auto config=QJsonDocument::fromJson(line).object();
    stateDir=config.value("state").toString();session=config.value("session").toString();port=config.value("port").toInt();
    QFile f(stateDir+"/config.json");if(!f.open(QIODevice::ReadOnly))return 3;token=QJsonDocument::fromJson(f.readAll()).object().value("apiToken").toString().toUtf8();
    QSet<QString> names;for(auto v:config.value("files").toArray()) {auto o=v.toObject();auto e=std::make_unique<Entry>();e->name=o.value("name").toString();e->phone=o.value("path").toString();e->recording=o.value("recordingId").toString();e->directory=o.value("directory").toBool();e->size=qint64(o.value("size").toDouble(-1));if(e->name.isEmpty()||e->name=="."||e->name==".."||e->name.contains('/')||names.contains(e->name)||(!e->recording.isEmpty() ? (!QRegularExpression("^[a-f0-9]{64}$").match(e->recording).hasMatch() || e->directory) : (!e->phone.startsWith('/') || session.isEmpty()))||(!e->directory&&e->size<0))return 4;names.insert(e->name);entries.push_back(std::move(e));}
    if(entries.empty()||token.isEmpty()||port<1)return 5;
    std::thread([]{ char c=0; bool accepted=::read(STDIN_FILENO,&c,1)==1 && c=='1'; {std::lock_guard<std::mutex> lock(gateMutex);gateAccepted=accepted;gateReady=true;} gateCondition.notify_all(); }).detach();
    struct fuse_operations ops={};ops.getattr=getattr_cb;ops.readdir=readdir_cb;ops.open=open_cb;ops.read=read_cb;ops.release=release_cb;
    char foreground[]="-f";char *args[]={argv[0],foreground,argv[1]};return fuse_main(3,args,&ops,nullptr);
}
