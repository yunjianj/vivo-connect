#include <QtWidgets>
#include <QtNetwork>
#include <QtDBus>
#include <cmath>
#include <functional>
#include <pwd.h>
#include <unistd.h>

static QString autostartPath() {
    return QStandardPaths::writableLocation(QStandardPaths::ConfigLocation)+"/autostart/"+QString::fromUtf8(VIVO_DESKTOP_ID)+".desktop";
}
static QString desktopArg(QString value) {
    value.replace("%", "%%"); value.replace("\\", "\\\\"); value.replace("\"", "\\\"");
    value.replace("`", "\\`"); value.replace("$", "\\$");
    return "\""+value+"\"";
}
static bool setAutostart(const QString &path, bool enabled, const QString &executable, const QString &state, int port, QString &error) {
    if (!enabled) {
        if (!QFile::exists(path) || QFile::remove(path)) return true;
        error="无法移除开机自启动配置："+path; return false;
    }
    if (!QDir().mkpath(QFileInfo(path).absolutePath())) { error="无法创建开机自启动目录"; return false; }
    QSaveFile file(path);
    if (!file.open(QIODevice::WriteOnly)) { error=file.errorString(); return false; }
    QString content="[Desktop Entry]\nType=Application\nName=vivo Connect\nExec="+desktopArg(executable)+" --background --state-dir "+desktopArg(state)+" --port "+QString::number(port)+"\nIcon="+QString::fromUtf8(VIVO_DESKTOP_ID)+"\nTerminal=false\nX-GNOME-Autostart-enabled=true\n";
    if (file.write(content.toUtf8())<0 || !file.commit()) { error=file.errorString(); return false; }
    return true;
}

static bool invalidMoveTarget(QString source, QString target) {
    source=QDir::cleanPath(source); target=QDir::cleanPath(target);
    return target==source || target.startsWith(source + "/") || target==QFileInfo(source).path();
}
static qint64 phoneFileSize(const QJsonValue &value) {
    if (value.isString()) {
        QString text=value.toString();
        if (text.isEmpty() || !std::all_of(text.cbegin(),text.cend(),[](QChar c){return c >= QLatin1Char('0') && c <= QLatin1Char('9');})) return -1;
        bool ok=false; qlonglong n=text.toLongLong(&ok); return ok && n<=9007199254740991LL ? n : -1;
    }
    if (!value.isDouble()) return -1;
    double n=value.toDouble(); return std::isfinite(n) && n>=0 && n<=9007199254740991.0 && std::floor(n)==n ? qint64(n) : -1;
}
static QJsonObject savedTransferResult(const QJsonObject &job) {
    if (job.value("status").toString()=="succeeded") return job.value("result").toObject();
    auto error=job.value("error").toObject();
    if (job.value("status").toString()=="failed" && error.value("code").toString()=="TRANSFER_NOTIFY_FAILED") return error.value("details").toObject();
    return {};
}
static QString transferLabel(const QJsonObject &job) {
    const auto status=job.value("status").toString(), phase=job.value("phase").toString();
    if (status=="failed" && job.value("error").toObject().value("code").toString()=="TRANSFER_NOTIFY_FAILED") return "文件已保存，通知手机失败";
    if (status=="failed") return "失败";
    if (status=="cancelled") return "已取消";
    if (status=="succeeded") return "已完成";
    if (status=="queued") return "等待中";
    if (phase=="preflight") return "正在查询大小和准备";
    if (phase=="downloading") return "正在接收";
    if (phase=="uploading") return "正在发送";
    if (phase=="verifying") return "正在校验和解包";
    if (phase=="notifying") return "正在通知手机";
    return "准备中";
}

class Api {
    QNetworkAccessManager net;
    QByteArray token;
    QUrl base;
public:
    QString error;
    explicit Api(QString state, int port) : base(QString("http://127.0.0.1:%1").arg(port)) {
        QFile f(state + "/config.json");
        if (f.open(QIODevice::ReadOnly)) token = QJsonDocument::fromJson(f.readAll()).object().value("apiToken").toString().toUtf8();
        net.setProxy(QNetworkProxy::NoProxy);
    }
    bool valid() const { return !token.isEmpty(); }
    QJsonValue call(const QString &method, const QString &path, const QJsonObject &body = {}) {
        error.clear();
        if (!path.startsWith("/api/")) { error = "接口路径无效"; return {}; }
        QNetworkRequest req(base.resolved(QUrl(path)));
        req.setRawHeader("Authorization", "Bearer " + token);
        req.setHeader(QNetworkRequest::ContentTypeHeader, "application/json");
        req.setAttribute(QNetworkRequest::RedirectPolicyAttribute, QNetworkRequest::ManualRedirectPolicy);
        req.setTransferTimeout(25000);
        QByteArray payload=QJsonDocument(body).toJson(QJsonDocument::Compact);
        QNetworkReply *reply = method == "GET" ? net.get(req) : method == "DELETE" ? net.deleteResource(req) : method == "PUT" ? net.put(req,payload) : method == "PATCH" ? net.sendCustomRequest(req,"PATCH",payload) : net.post(req,payload);
        QEventLoop loop; QObject::connect(reply, &QNetworkReply::finished, &loop, &QEventLoop::quit); loop.exec();
        const int status = reply->attribute(QNetworkRequest::HttpStatusCodeAttribute).toInt();
        QJsonParseError parse; const auto doc = QJsonDocument::fromJson(reply->readAll(), &parse);
        if (status < 200 || status >= 300 || parse.error != QJsonParseError::NoError) {
            error = doc.object().value("error").toObject().value("message").toString();
            if (error.isEmpty()) error = status == 0
                ? QString("无法连接本机后端 %1，请检查后端状态及 --port 配置").arg(base.toString())
                : "本机后端请求失败";
            reply->deleteLater(); return {};
        }
        reply->deleteLater(); return doc.isArray() ? QJsonValue(doc.array()) : QJsonValue(doc.object());
    }
};

class LazyMime : public QMimeData {
    std::function<QList<QUrl>()> materialize;
    mutable bool fetched = false;
    mutable QByteArray uriList;
    mutable QList<QUrl> cachedUrls;
public:
    LazyMime(QByteArray phonePaths, std::function<QList<QUrl>()> materialize) : materialize(std::move(materialize)) {
        setData("application/x-vivo-phone-paths", phonePaths);
    }
    QStringList formats() const override { auto f = QMimeData::formats(); f << "text/uri-list"; return f; }
    bool hasFormat(const QString &mime) const override { return mime == "text/uri-list" || QMimeData::hasFormat(mime); }
protected:
    QVariant retrieveData(const QString &mime, QMetaType type) const override {
        if (mime != "text/uri-list") return QMimeData::retrieveData(mime, type);
        if (!fetched) { fetched = true; cachedUrls = materialize(); for (const auto &url : cachedUrls) uriList += url.toEncoded() + "\r\n"; }
        if (type.id() == QMetaType::QVariantList) { QVariantList list; for (const auto &url : cachedUrls) list << url; return list; }
        return uriList;
    }
};

struct VirtualDrag { QList<QUrl> urls; std::function<void(bool)> finish; };
class FileTree : public QTreeWidget {
    QTreeWidgetItem *hover = nullptr;
    bool internalDrop = false;
    void setHover(QTreeWidgetItem *target, bool internal = false) {
        if (target && !target->data(0, Qt::UserRole + 1).toBool()) target = nullptr;
        if (target && internal) for (const auto &source : selectedPaths())
            if (invalidMoveTarget(source, target->data(0, Qt::UserRole).toString())) { target=nullptr; break; }
        if (target == hover) return;
        if (hover) for (int c=0;c<columnCount();++c) hover->setBackground(c, QBrush());
        hover = target;
        if (hover) for (int c=0;c<columnCount();++c) hover->setBackground(c, QColor("#c8ebd9"));
    }
public:
    std::function<void(QStringList, QString)> upload;
    std::function<void(QStringList, QString)> movePhone;
    std::function<VirtualDrag(QJsonArray)> virtualFiles;
    std::function<QString()> currentDirectory;
    std::function<void(QString)> dragStatus;
    FileTree() {
        setColumnCount(3); setHeaderLabels({"名称", "类型", "大小"});
        header()->setStretchLastSection(false); header()->setSectionResizeMode(0, QHeaderView::Stretch);
        header()->setSectionResizeMode(1, QHeaderView::ResizeToContents); header()->setSectionResizeMode(2, QHeaderView::ResizeToContents);
        setRootIsDecorated(false); setSelectionMode(QAbstractItemView::ExtendedSelection); setUniformRowHeights(true);
        setDragEnabled(true); setAcceptDrops(true); setDropIndicatorShown(true); viewport()->setAcceptDrops(true);
    }
    void clear() { setHover(nullptr); QTreeWidget::clear(); }
    QStringList selectedPaths() const { QStringList p; for (auto *item : selectedItems()) p << item->data(0, Qt::UserRole).toString(); return p; }
protected:
    void startDrag(Qt::DropActions) override {
        auto selected = selectedItems(); if (selected.isEmpty()) return;
        QStringList paths; QJsonArray files;
        for (auto *item : selected) { auto p=item->data(0, Qt::UserRole).toString(); paths << p; files.append(QJsonObject{{"name",item->text(0)},{"path",p},{"size",item->data(0, Qt::UserRole + 2).toDouble()},{"directory",item->data(0, Qt::UserRole + 1).toBool()}}); }
        if (!virtualFiles) return;
        auto v=virtualFiles(files);
        if (v.urls.isEmpty()) { dragStatus("无法创建拖放文件，请检查 FUSE 是否可用"); return; }
        auto *mime = new LazyMime(QJsonDocument(QJsonArray::fromStringList(paths)).toJson(QJsonDocument::Compact), [urls=v.urls] { return urls; });
        auto *drag = new QDrag(this); drag->setMimeData(mime); internalDrop=false;
        auto result=drag->exec(Qt::CopyAction, Qt::CopyAction);
        v.finish(result != Qt::IgnoreAction && !internalDrop);
    }
    void dragEnterEvent(QDragEnterEvent *e) override {
        if (e->mimeData()->hasFormat("application/x-vivo-phone-paths") || e->mimeData()->hasUrls()) e->acceptProposedAction(); else e->ignore();
    }
    void dragMoveEvent(QDragMoveEvent *e) override {
        if (e->mimeData()->hasFormat("application/x-vivo-phone-paths") || e->mimeData()->hasUrls()) {
            setHover(itemAt(e->position().toPoint()), e->source() == this && e->mimeData()->hasFormat("application/x-vivo-phone-paths"));
            e->acceptProposedAction();
        } else e->ignore();
    }
    void dragLeaveEvent(QDragLeaveEvent *e) override { setHover(nullptr); e->accept(); }
    void dropEvent(QDropEvent *e) override {
        auto *item = itemAt(e->position().toPoint());
        setHover(nullptr);
        QString target = item && item->data(0, Qt::UserRole + 1).toBool() ? item->data(0, Qt::UserRole).toString() : currentDirectory();
        if (e->mimeData()->hasFormat("application/x-vivo-phone-paths")) {
            if (e->source() != this) { e->ignore(); return; }
            internalDrop=true;
            QStringList paths; for (const auto &v : QJsonDocument::fromJson(e->mimeData()->data("application/x-vivo-phone-paths")).array()) paths << v.toString();
            e->setDropAction(Qt::CopyAction); e->accept(); movePhone(paths, target); return;
        }
        QStringList paths; for (const auto &url : e->mimeData()->urls()) if (url.isLocalFile()) paths << url.toLocalFile();
        if (!paths.isEmpty()) { e->acceptProposedAction(); upload(paths, target); } else e->ignore();
    }
};

class MouseNavigation : public QObject {
    QWidget *window;
    std::function<void(int)> navigate;
public:
    MouseNavigation(QWidget *window, std::function<void(int)> navigate)
        : QObject(window), window(window), navigate(std::move(navigate)) {}
    bool eventFilter(QObject *watched, QEvent *event) override {
        if (event->type()!=QEvent::MouseButtonPress && event->type()!=QEvent::MouseButtonRelease) return false;
        auto *widget=qobject_cast<QWidget *>(watched);
        if (!widget || widget->window()!=window) return false;
        auto *mouse=static_cast<QMouseEvent *>(event);
        int direction=mouse->button()==Qt::BackButton ? -1 : mouse->button()==Qt::ForwardButton ? 1 : 0;
        if (!direction) return false;
        if (event->type()==QEvent::MouseButtonPress) navigate(direction);
        event->accept(); return true;
    }
};

class DirectoryHistory {
    QStringList paths;
    int current = -1;
    QString owner;
public:
    void select(const QString &session) { if (owner != session) { paths.clear(); current = -1; owner = session; } }
    void record(const QString &session, const QString &path) {
        select(session);
        if (current >= 0 && paths[current] == path) return;
        while (paths.size() > current + 1) paths.removeLast();
        paths.append(path); current = paths.size() - 1;
    }
    QString target(int direction) const { int i=current+direction; return i>=0 && i<paths.size()?paths[i]:QString(); }
    void moved(int direction) { if (!target(direction).isEmpty()) current+=direction; }
};

static void showAccountState(QLabel *label, QPushButton *button, const QJsonObject &account, bool available) {
    if (!available) { label->setText("账号状态不可用"); button->hide(); return; }
    const bool loggedIn=account.value("loggedIn").toBool();
    const auto login=account.value("login").toObject();
    const bool waiting=!loggedIn && login.value("status").toString()=="waiting";
    const bool failed=!loggedIn && login.value("status").toString()=="failed";
    QString name=account.value("nickName").toString().trimmed();
    label->setText(loggedIn ? (name.isEmpty()?"vivo 账号已登录":"已登录："+name)
                   : waiting ? "正在等待账号登录…" : failed ? "账号登录未完成" : "vivo 账号未登录");
    label->setToolTip(failed ? login.value("error").toString() : QString());
    button->setText(failed?"重试登录":"登录账号");
    button->setEnabled(!waiting); button->setVisible(!loggedIn);
}
static void updateTrayClipboard(QAction *action, const QCheckBox *toggle) {
    if (!action) return;
    QSignalBlocker blocker(action);
    action->setEnabled(toggle->isEnabled()); action->setChecked(toggle->isChecked());
}
static QString deviceStatus(const QJsonObject &device) {
    if (device.value("status").toString()=="connected") return "已连接";
    if (device.value("reconnecting").toBool()) return "正在重连…";
    if (device.value("needsAuthorization").toBool()) return "需要重新授权";
    const auto wait=device.value("reconnectWait").toObject();
    if (device.value("autoConnect").toBool() && !wait.isEmpty()) {
        const QString code=wait.value("code").toString();
        if (code=="P2P_NOT_READY") return "等待直连服务就绪";
        if (code=="P2P_AUTHENTICATING") return "正在入组认证";
        return "等待手机加入直连组";
    }
    return device.value("autoConnect").toBool() ? "等待自动重连" : "已暂停连接";
}
static bool canPauseDevice(const QJsonObject &device) {
    return !device.value("id").toString().isEmpty() && (device.value("status").toString()=="connected" || device.value("reconnecting").toBool() || device.value("autoConnect").toBool());
}
static bool rootManagedPath(QString path) {
    path=QFileInfo(path).absoluteFilePath();
    for (;;) {
        QFileInfo info(path);
        if (!info.exists() || info.isSymLink() || info.ownerId()!=0 || (info.permissions() & (QFileDevice::WriteGroup | QFileDevice::WriteOther))) return false;
        QString parent=info.dir().absolutePath(); if (parent==path) break; path=parent;
    }
    return true;
}
static bool trustedServiceSource(const QString &project) {
    if (QDir(project).canonicalPath()!=QStringLiteral("/usr/lib/vivo-connect")) return false;
    const QStringList paths={"tools/install_p2p_service.py","tools/p2p_service.py","tools/p2p_helper.py","tools/p2p_private.py","tools/wifi_capabilities.py","tools/p2p_supplicant.config","tools/build_p2p_supplicant.py","patches/wpa_supplicant-2.12-private-go.patch","packaging/systemd/vivo-connect-p2p.service","build/private-p2p/bin/wpa_supplicant","build/private-p2p/bin/build.json","build/private-p2p/bin/COPYING"};
    for (const auto &path:paths) if (!rootManagedPath(project+"/"+path)) return false;
    return true;
}

class Window : public QMainWindow {
    Api api, clipboardApi;
    QString project, state, selected, directory = "/storage/emulated/0", root = "/storage/emulated/0";
    QJsonArray sessions;
    QListWidget *devices = new QListWidget;
    FileTree *tree = new FileTree;
    QLineEdit *path = new QLineEdit;
    QLineEdit *search = new QLineEdit;
    QLabel *info = new QLabel("正在连接本机服务…");
    QLabel *account = new QLabel;
    QPushButton *accountButton = new QPushButton("登录账号");
    QPushButton *reconnectButton = new QPushButton("重新连接"), *disconnectButton = new QPushButton("断开连接");
    QCheckBox *clipboardToggle = new QCheckBox("同步文本剪贴板");
    QSystemTrayIcon *tray = nullptr;
    QAction *trayClipboard = nullptr;
    bool quitting = false, simulatedTray = false;
    QTimer poll;
    QTimer clipboardTimer;
    QString clipboardSession, clipboardBaseline, clipboardPending;
    qint64 clipboardRevision = -1;
    bool clipboardInitialized=false, clipboardEnabled=false, clipboardBusy=false, clipboardApplying=false, clipboardHasBaseline=false, clipboardHasPending=false;
    DirectoryHistory history;
    bool refreshing = false, waitingDirect = false;
    QString connectJob, connectJobDevice, pairJob, lease;
    QProcess *helper = nullptr;
    QProcess *serviceOperation = nullptr;
    QDialog *pairDialog = nullptr;
    QLabel *qrLabel = nullptr, *pairStatus = nullptr;
    QComboBox *pairMode = nullptr, *wireless = nullptr;

    void report(QString message, bool warning = false) {
        info->setText(message);
        if (warning) QMessageBox::warning(this, "vivo Connect", message);
    }
    QString actual(QString p) const {
        p = p.trimmed();
        if (p.isEmpty() || p == "/" || p == root || p == root + "/") return root;
        for (auto prefix : {QString("/sdcard"), QString("/mnt/sdcard"), QString("/storage/self/primary")})
            if (p == prefix || p.startsWith(prefix + "/")) { p = root + p.mid(prefix.size()); break; }
        if (!p.startsWith('/')) p = root + "/" + p;
        return QDir::cleanPath(p);
    }
    QString apiPath(QString p) const { p = actual(p); return p == root ? "/" : p; }
    bool connected() const { for (auto s : sessions) if (s.toObject().value("id").toString() == selected && s.toObject().value("status") == "connected") return true; return false; }
    QJsonObject selectedDevice() const { for (auto s:sessions) if(s.toObject().value("id").toString()==selected) return s.toObject(); return {}; }
    QString route(QString suffix) const { return "/api/sessions/" + selected + suffix; }
    bool kdeClipboardText(QString &text) {
        QDBusInterface klipper("org.kde.klipper", "/klipper", "org.kde.klipper.klipper", QDBusConnection::sessionBus());
        if (!klipper.isValid()) return false;
        QDBusReply<QString> result=klipper.call("getClipboardContents");
        if (!result.isValid()) return false;
        text=result.value(); return true;
    }
    void resetClipboard() {
        clipboardSession.clear(); clipboardRevision=-1; clipboardInitialized=false; clipboardEnabled=false;
        clipboardHasBaseline=false; clipboardHasPending=false; clipboardBaseline.clear(); clipboardPending.clear();
        QSignalBlocker block(clipboardToggle); clipboardToggle->setChecked(false); clipboardToggle->setEnabled(false);
        updateTrayClipboard(trayClipboard,clipboardToggle);
    }
    void updateClipboard() {
        if (clipboardBusy) return;
        if (!connected()) { resetClipboard(); return; }
        if (clipboardSession!=selected) { resetClipboard(); clipboardSession=selected; }
        clipboardBusy=true; const QString session=clipboardSession, path=route("/clipboard");
        auto value=clipboardApi.call("GET",path).toObject();
        if (session!=selected || !connected()) { clipboardBusy=false; resetClipboard(); return; }
        if (!clipboardApi.error.isEmpty()) { clipboardBusy=false; clipboardToggle->setEnabled(false); clipboardToggle->setToolTip("剪贴板同步接口不可用："+clipboardApi.error); updateTrayClipboard(trayClipboard,clipboardToggle); return; }
        clipboardEnabled=value.value("enabled").toBool();
        { QSignalBlocker block(clipboardToggle); clipboardToggle->setEnabled(true); clipboardToggle->setChecked(clipboardEnabled); }
        updateTrayClipboard(trayClipboard,clipboardToggle);
        clipboardToggle->setToolTip("同步当前设备的文本；关闭后清除本次同步状态");
        qint64 revision=qint64(value.value("revision").toDouble());
        if (clipboardEnabled && value.value("source").toString()=="phone" && value.value("text").isString() && revision!=clipboardRevision) {
            QString text=value.value("text").toString(); clipboardApplying=true; clipboardBaseline=text; clipboardHasBaseline=true; clipboardHasPending=false;
            QDBusInterface klipper("org.kde.klipper", "/klipper", "org.kde.klipper.klipper", QDBusConnection::sessionBus());
            bool written=klipper.isValid() && klipper.call("setClipboardContents",text).type()!=QDBusMessage::ErrorMessage;
            if (!written) QApplication::clipboard()->setText(text);
            clipboardApplying=false;
        }
        clipboardRevision=revision;
        QString observed; bool kde=kdeClipboardText(observed);
        const auto *mime=QApplication::clipboard()->mimeData();
        if (kde && !(mime && mime->hasUrls()) && (!observed.isEmpty() || (mime && mime->hasText()) || !clipboardHasBaseline)) {
            if (clipboardInitialized && clipboardEnabled && clipboardHasBaseline && observed!=clipboardBaseline) { clipboardPending=observed; clipboardHasPending=true; }
            clipboardBaseline=observed; clipboardHasBaseline=true;
        }
        clipboardInitialized=true;
        if (clipboardEnabled && clipboardHasPending) {
            QString text=clipboardPending; clipboardHasPending=false;
            if (text.toUtf8().size()>65536) report("剪贴板文本超过 64 KiB，未同步");
            else {
                clipboardApi.call("PUT",path,{{"text",text}});
                if (!clipboardApi.error.isEmpty() && session==selected) report("剪贴板同步失败："+clipboardApi.error);
            }
        }
        clipboardBusy=false;
    }
    void setClipboardEnabled(bool enabled) {
        if (!connected() || clipboardBusy || clipboardSession!=selected) { updateClipboard(); updateTrayClipboard(trayClipboard,clipboardToggle); return; }
        clipboardBusy=true; QString session=selected;
        clipboardApi.call("PATCH",route("/clipboard"),{{"enabled",enabled}});
        QString error=clipboardApi.error; clipboardBusy=false;
        clipboardHasPending=false;
        if (!error.isEmpty() && session==selected) report("剪贴板设置失败："+error);
        updateClipboard();
        updateTrayClipboard(trayClipboard,clipboardToggle);
    }
    void refresh() {
        if (refreshing) return;
        refreshing = true;
        auto value = api.call("GET", "/api/sessions");
        if (!api.error.isEmpty()) { report(api.error); refreshing = false; return; }
        bool wasConnected = connected();
        sessions = value.toArray(); bool found = false;
        for (auto x : sessions) if (x.toObject().value("id").toString() == selected) found = true;
        if (!found) { selected.clear(); for (auto x : sessions) if (x.toObject().value("status") == "connected") { selected = x.toObject().value("id").toString(); break; } if (selected.isEmpty() && !sessions.isEmpty()) selected = sessions.first().toObject().value("id").toString(); }
        history.select(selected);
        if (wasConnected && !connected()) { tree->clear(); report("手机连接已断开："+deviceStatus(selectedDevice())); }
        { QSignalBlocker block(devices); devices->clear();
          for (auto x : sessions) { auto o = x.toObject(), phone = o.value("phone").toObject();
            QString name = phone.value("mobileDeviceName").toString("vivo 手机"); bool active = o.value("status") == "connected";
            QString stateText = deviceStatus(o);
            auto *item = new QListWidgetItem((active ? "●  " : "○  ") + name + "\n    " + stateText);
            item->setToolTip(o.value("reconnectWait").toObject().value("message").toString());
            item->setData(Qt::UserRole, o.value("id").toString()); devices->addItem(item);
            if (o.value("id").toString() == selected) { devices->setCurrentItem(item); QString r = phone.value("innerRoot").toString(); if (!r.isEmpty() && r != "/") root = r; }
          }
        }
        auto currentDevice=selectedDevice();
        const QString waitCode=currentDevice.value("reconnectWait").toObject().value("code").toString();
        reconnectButton->setText(waitCode=="P2P_PHONE_NOT_JOINED" || waitCode=="P2P_ADDRESS_CHANGED" ? "加入直连组" : currentDevice.value("needsAuthorization").toBool()?"重新授权":"重新连接");
        reconnectButton->setEnabled(!selected.isEmpty() && !connected() && !currentDevice.value("reconnecting").toBool() && connectJob.isEmpty());
        disconnectButton->setEnabled(canPauseDevice(currentDevice));
        auto acc = api.call("GET", "/api/account").toObject();
        showAccountState(account,accountButton,acc,api.error.isEmpty());
        if (!connectJob.isEmpty()) {
            auto job = api.call("GET", "/api/jobs/" + connectJob).toObject(); QString status = job.value("status").toString();
            if (status == "succeeded") { bool current=selected==connectJobDevice; connectJob.clear(); connectJobDevice.clear(); if(current) { report("手机已连接"); QTimer::singleShot(0, this, [this]{ browse(root); }); } }
            else if (status == "failed" || status == "cancelled") { QString message = job.value("error").toObject().value("message").toString("连接已结束"); bool current=selected==connectJobDevice; connectJob.clear(); connectJobDevice.clear(); if(current) report(message + "；请查看设备状态"); }
        }
        if (!wasConnected && connected() && connectJob.isEmpty()) QTimer::singleShot(0, this, [this]{ browse(root); });
        if (waitingDirect && api.call("GET", "/api/p2p/status").toObject().value("ready").toBool()) { waitingDirect = false; makeQr(true); }
        if (!pairJob.isEmpty()) {
            auto job = api.call("GET", "/api/jobs/" + pairJob).toObject(); QString status = job.value("status").toString();
            if (pairStatus && (status == "queued" || status == "running")) pairStatus->setText("等待手机扫码并确认连接…");
            if (status == "succeeded") { selected = job.value("result").toObject().value("id").toString(); pairJob.clear(); if (pairDialog) pairDialog->accept(); report("手机已连接"); QTimer::singleShot(0, this, [this]{ browse(root); }); }
            else if (status == "failed" || status == "cancelled") { pairJob.clear(); if (pairStatus) pairStatus->setText(job.value("error").toObject().value("message").toString("连接已结束，请刷新二维码")); }
        }
        int desired = (waitingDirect || !pairJob.isEmpty() || !connectJob.isEmpty() || acc.value("login").toObject().value("status").toString()=="waiting") ? 1000 : 5000;
        if (poll.interval() != desired) poll.setInterval(desired);
        refreshing = false;
    }
    bool browse(QString destination, bool record = true) {
        if (!connected()) { report("请先连接手机"); return false; }
        const QString resolved = actual(destination);
        if (resolved != root && !resolved.startsWith(root + "/")) { report("请选择手机共享存储中的目录"); return false; }
        auto response = api.call("POST", route("/files"), {{"type", "REQUEST_POSTS_FILELIST"}, {"data", apiPath(resolved)}, {"versionTag", 1}});
        if (!api.error.isEmpty()) { report(api.error); return false; }
        auto obj = response.toObject(); QJsonValue payload = obj.contains("data") ? obj.value("data") : response;
        if (payload.isString()) payload = QJsonDocument::fromJson(payload.toString().toUtf8()).object();
        QJsonArray files = payload.isArray() ? payload.toArray() : payload.toObject().value("dataList").toArray();
        directory = resolved; if (record) history.record(selected, directory); path->setText(directory + (directory == root ? "/" : "")); tree->clear();
        for (auto value : files) { auto f = value.toObject(); QString filename = f.value("fileName").toString(), full = f.value("savePath").toString(); if (full.isEmpty()) continue;
            bool isDir = f.value("isDirectory").toBool() || f.value("isDirectory").toString() == "true";
            qint64 size=phoneFileSize(f.value("fileSize"));
            auto *item = new QTreeWidgetItem({filename, isDir ? "文件夹" : "文件", isDir ? "—" : size<0 ? "未知" : QLocale().formattedDataSize(size)});
            item->setData(0, Qt::UserRole, full); item->setData(0, Qt::UserRole + 1, isDir); item->setIcon(0, style()->standardIcon(isDir ? QStyle::SP_DirIcon : QStyle::SP_FileIcon)); tree->addTopLevelItem(item);
            item->setData(0, Qt::UserRole + 2, size);
        }
        filter(); report(QString("%1 个项目").arg(tree->topLevelItemCount())); return true;
    }
    void navigateHistory(int direction) { QString target=history.target(direction); if (!target.isEmpty() && browse(target, false)) history.moved(direction); }
    void goUp() { browse(directory==root?root:QFileInfo(directory).path()); }
    void deleteSelected() {
        auto paths=tree->selectedPaths(); if (paths.isEmpty() || !connected()) return;
        if (QMessageBox::question(this,"确认删除",QString("删除手机上的 %1 个项目？").arg(paths.size()))==QMessageBox::Yes)
            fileOp("delete",{{"paths",QJsonArray::fromStringList(paths)}});
    }
    void renameSelected() {
        auto items=tree->selectedItems(); if (items.size()!=1 || !connected()) return;
        auto *item=items.first(); auto p=item->data(0,Qt::UserRole).toString(); bool ok=false;
        auto name=QInputDialog::getText(this,"重命名","新名称",QLineEdit::Normal,item->text(0),&ok);
        if(ok && !name.isEmpty()) fileOp("rename",{{"path",p},{"name",name}});
    }
    void filter() { for (int i=0; i<tree->topLevelItemCount(); ++i) tree->topLevelItem(i)->setHidden(!tree->topLevelItem(i)->text(0).contains(search->text(), Qt::CaseInsensitive)); }
    void upload(QStringList paths, QString target) {
        if (!connected() || paths.isEmpty()) return;
        auto result = api.call("POST", route("/uploads"), {{"paths", QJsonArray::fromStringList(paths)}, {"savePath", actual(target)}, {"ifDuplicated", "rename"}}).toObject();
        report(api.error.isEmpty() ? "已加入发送队列，可在传输记录中查看" : api.error, !api.error.isEmpty());
        Q_UNUSED(result);
    }
    VirtualDrag makeVirtualFiles(const QJsonArray &files) {
        if (!connected() || files.isEmpty()) return {};
        QSet<QString> names;
        for (auto v:files) { auto o=v.toObject(); auto name=o.value("name").toString();
            if (name.isEmpty() || names.contains(name) || (!o.value("directory").toBool() && o.value("size").toDouble(-1)<0)) { report("文件名重复或文件大小未知，无法拖出",true); return {}; } names.insert(name); }
        auto dir = std::make_shared<QTemporaryDir>(QDir::tempPath()+"/vivo-drag-XXXXXX");
        if (!dir->isValid()) return {};
        auto *process=new QProcess(this);
        connect(process,&QProcess::finished,this,[process,dir](int,QProcess::ExitStatus){process->deleteLater();});
        connect(process,&QProcess::readyReadStandardError,this,[this,process]{
            auto message=QString::fromUtf8(process->readAllStandardError());
            if (message.contains("TRANSFER_NOTIFY_FAILED")) report("文件已接收，但未能通知手机传输完成；详情见传输记录");
        });
        process->start(QCoreApplication::applicationDirPath()+"/vivo-drag-fuse",{dir->path()});
        if (!process->waitForStarted(3000)) { process->deleteLater(); return {}; }
        process->write(QJsonDocument(QJsonObject{{"state",state},{"session",selected},{"port",port},{"files",files}}).toJson(QJsonDocument::Compact) + "\n");
        QElapsedTimer timer; timer.start(); QString first=dir->filePath(files.first().toObject().value("name").toString());
        while (timer.elapsed()<3000 && process->state()!=QProcess::NotRunning && !QFileInfo::exists(first)) { QCoreApplication::processEvents(QEventLoop::ExcludeUserInputEvents,20); QThread::msleep(10); }
        if (!QFileInfo::exists(first)) { process->kill(); process->waitForFinished(1000); return {}; }
        QList<QUrl> urls; for(auto v:files) urls << QUrl::fromLocalFile(dir->filePath(v.toObject().value("name").toString()));
        QPointer<QProcess> guard(process);
        return {urls, [guard](bool accepted){ if (!guard) return; if (accepted) { guard->write("1"); guard->closeWriteChannel(); } else guard->kill(); }};
    }
    bool fileOp(QString action, QJsonObject body) {
        if (action == "rename" || action == "move") {
            if (actual(body.value("path").toString()) == root) { report("不能修改手机存储根目录", true); return false; }
        } else if (action == "delete") {
            for (auto item : body.value("paths").toArray()) if (actual(item.toString()) == root) { report("不能删除手机存储根目录", true); return false; }
        }
        api.call("POST", route("/files/" + action), body);
        if (!api.error.isEmpty()) { auto error = api.error; browse(directory); report(error, true); return false; }
        if (action != "size") browse(directory);
        return true;
    }
    void movePhone(QStringList sources, QString target) {
        target=actual(target);
        for (const auto &source : sources) {
            if (invalidMoveTarget(actual(source), target)) { report("目标是原位置或位于所选项目内，未移动文件"); return; }
        }
        for (const auto &source : sources) {
            if (!fileOp("move", {{"path",source},{"destination", target + "/" + QFileInfo(source).fileName()}})) return;
        }
        report("移动完成");
    }
    QList<QUrl> download(QStringList paths, bool isDir, bool *notifyFailed = nullptr) {
        if (notifyFailed) *notifyFailed=false;
        if (!connected() || paths.isEmpty()) return {};
        report("正在从手机准备文件，请稍候…");
        auto started = api.call("POST", route("/downloads"), {{"paths", QJsonArray::fromStringList(paths)}, {"isDirectory",isDir}}).toObject();
        if (!api.error.isEmpty()) { report(api.error, true); return {}; }
        const QString id = started.value("id").toString(); QElapsedTimer elapsed; elapsed.start();
        while (elapsed.elapsed() < 3600000) {
            auto job = api.call("GET", "/api/jobs/" + id).toObject();
            if (!api.error.isEmpty()) { report(api.error, true); return {}; }
            QString status = job.value("status").toString();
            auto result=savedTransferResult(job);
            if (!result.isEmpty()) {
                if (notifyFailed) *notifyFailed=(status=="failed");
                QDir dir(result.value("directory").toString()); QString base = QFileInfo(dir.absolutePath()).canonicalFilePath(); QList<QUrl> urls;
                const QString downloads = QFileInfo(state + "/downloads").canonicalFilePath();
                if (base.isEmpty() || downloads.isEmpty() || !base.startsWith(downloads + "/")) { report("接收目录无效", true); return {}; }
                for (const auto &source : paths) {
                    QString candidate = QFileInfo(dir.filePath(QFileInfo(source).fileName())).canonicalFilePath();
                    if (!candidate.isEmpty() && candidate.startsWith(base + "/")) urls << QUrl::fromLocalFile(candidate);
                }
                if (urls.isEmpty() && paths.size() == 1) { auto files = result.value("files").toArray(); if (files.size() == 1) { QString candidate = QFileInfo(dir.filePath(files.first().toObject().value("path").toString())).canonicalFilePath(); if (!candidate.isEmpty() && candidate.startsWith(base + "/")) urls << QUrl::fromLocalFile(candidate); } }
                report(urls.isEmpty() ? "文件已接收，但无法确定保存路径" : status=="failed" ? "文件已接收，但通知手机失败；详情见传输记录" : "文件已准备完成"); return urls;
            }
            if (status == "failed" || status == "cancelled") { report(job.value("error").toObject().value("message").toString("接收失败"), true); return {}; }
            report("接收文件："+transferLabel(job));
            QEventLoop wait; QTimer::singleShot(300, &wait, &QEventLoop::quit); wait.exec();
        }
        api.call("POST", "/api/jobs/" + id + "/cancel"); report("接收超时", true); return {};
    }
    void contextMenu(QPoint pos) {
        auto *item = tree->itemAt(pos); if (!item) return;
        if (!item->isSelected()) { tree->clearSelection(); item->setSelected(true); }
        auto paths = tree->selectedPaths(); QMenu menu(this);
        QAction *open = menu.addAction(item->data(0, Qt::UserRole + 1).toBool() ? "打开文件夹" : "接收到电脑…");
        QAction *rename = menu.addAction("重命名…"); rename->setEnabled(paths.size() == 1);
        QAction *move = menu.addAction("移动到…"); QAction *size = menu.addAction("查询大小"); size->setEnabled(paths.size() == 1 && item->data(0, Qt::UserRole + 1).toBool());
        menu.addSeparator(); QAction *del = menu.addAction("删除…");
        QAction *chosen = menu.exec(tree->viewport()->mapToGlobal(pos));
        if (chosen == open) { if (item->data(0, Qt::UserRole + 1).toBool()) browse(paths.first()); else receive(paths, false); }
        else if (chosen == rename) renameSelected();
        else if (chosen == move) { bool ok = false; auto target = QInputDialog::getText(this, "移动", "目标文件夹", QLineEdit::Normal, directory, &ok); if (ok && !target.isEmpty()) movePhone(paths, target); }
        else if (chosen == size) { auto data = api.call("POST", route("/files/size"), {{"path",paths.first()}}).toObject(); report(api.error.isEmpty() ? "文件夹大小：" + QLocale().formattedDataSize(qint64(data.value("size").toDouble())) : api.error, !api.error.isEmpty()); }
        else if (chosen == del) deleteSelected();
    }
    bool copyFile(QString src, QString dst) {
        QFile in(src); QSaveFile out(dst); if (!in.open(QIODevice::ReadOnly) || !out.open(QIODevice::WriteOnly)) return false;
        while (!in.atEnd()) { auto data = in.read(1024 * 1024); if (data.isEmpty() && in.error() != QFile::NoError) return false; if (out.write(data) != data.size()) return false; }
        return out.commit();
    }
    void receive(QStringList sources, bool directoryFlag) {
        if (sources.size() != 1 || directoryFlag) { report("请将项目拖到电脑文件管理器接收，或选择单个文件接收"); return; }
        bool notifyFailed=false; auto urls = download(sources, false, &notifyFailed); if (urls.size() != 1) return;
        QString dest = QFileDialog::getSaveFileName(this, "保存到电脑", QDir::home().filePath(QFileInfo(sources.first()).fileName())); if (dest.isEmpty()) return;
        bool copied = copyFile(urls.first().toLocalFile(), dest);
        report(copied ? (notifyFailed ? "文件已保存，但未能通知手机传输完成；详情见传输记录" : "文件已保存") : "保存文件失败", !copied);
    }
    void showJobs() {
        QDialog dialog(this); dialog.setWindowTitle("传输记录"); dialog.resize(650, 440); QVBoxLayout layout(&dialog); QListWidget list; layout.addWidget(&list);
        QLabel details("选择任务查看详情"); details.setWordWrap(true); details.setTextInteractionFlags(Qt::TextSelectableByMouse); layout.addWidget(&details);
        QHBoxLayout buttons; QPushButton cancel("取消所选任务"), open("打开接收目录"); buttons.addWidget(&cancel); buttons.addWidget(&open); buttons.addStretch(); layout.addLayout(&buttons);
        auto current = [&] { auto *item=list.currentItem(); return item ? item->data(Qt::UserRole+1).toJsonObject() : QJsonObject{}; };
        auto render = [&] {
            auto job=current(); QString status=job.value("status").toString();
            cancel.setEnabled(status=="queued" || status=="running");
            auto result=savedTransferResult(job); QString base=QFileInfo(result.value("directory").toString()).canonicalFilePath();
            QString rootPath=QFileInfo(state+"/downloads").canonicalFilePath();
            open.setEnabled(!base.isEmpty() && !rootPath.isEmpty() && base.startsWith(rootPath+"/"));
            if (job.isEmpty()) { details.setText("选择任务查看详情"); return; }
            QString text=transferLabel(job);
            auto error=job.value("error").toObject(); if (!error.value("message").toString().isEmpty()) text+="\n"+error.value("message").toString();
            if (job.value("totalSize").isDouble()) text+="\n文件总大小："+QLocale().formattedDataSize(qint64(job.value("totalSize").toDouble()));
            text+="\n已传输归档数据："+QLocale().formattedDataSize(qint64(job.value("bytes").toDouble()));
            if (open.isEnabled()) text+="\n接收目录："+base;
            details.setText(text);
        };
        auto update = [&] {
            QString selectedId=list.currentItem()?list.currentItem()->data(Qt::UserRole).toString():QString();
            auto jobs=api.call("GET", "/api/jobs").toArray();
            { QSignalBlocker block(&list); list.clear(); for (auto v:jobs) { auto j=v.toObject(); QString kind=j.value("kind").toString(); if (kind!="upload" && kind!="download") continue;
              auto *item=new QListWidgetItem((kind=="upload"?"发送":"接收")+QString("  %1  ·  %2").arg(transferLabel(j),QLocale().formattedDataSize(qint64(j.value("bytes").toDouble()))));
              item->setData(Qt::UserRole,j.value("id").toString()); item->setData(Qt::UserRole+1,j); list.addItem(item);
              if (item->data(Qt::UserRole).toString()==selectedId) list.setCurrentItem(item);
            } }
            render();
        };
        connect(&list,&QListWidget::currentItemChanged,&dialog,[&]{render();});
        connect(&cancel,&QPushButton::clicked,&dialog,[&]{auto job=current(); if (!job.isEmpty()) api.call("POST", "/api/jobs/"+job.value("id").toString()+"/cancel"); update();});
        connect(&open,&QPushButton::clicked,&dialog,[&]{auto job=current(); QString base=QFileInfo(savedTransferResult(job).value("directory").toString()).canonicalFilePath(); QString rootPath=QFileInfo(state+"/downloads").canonicalFilePath(); if (!base.isEmpty() && !rootPath.isEmpty() && base.startsWith(rootPath+"/")) QDesktopServices::openUrl(QUrl::fromLocalFile(base));});
        QTimer timer; connect(&timer, &QTimer::timeout, &dialog, update); timer.start(1500); update(); dialog.exec();
    }
    void startHelper(QString iface) {
        // Fail before invoking PolicyKit if the local service is unavailable.
        api.call("GET", "/api/p2p/status");
        if (!api.error.isEmpty()) { if (pairStatus) pairStatus->setText(api.error); return; }
        const QString servicePath="/etc/vivo-connect-p2p/service.json"; QFile serviceConfig(servicePath);
        if (serviceConfig.exists() && (!rootManagedPath(servicePath) || !serviceConfig.open(QIODevice::ReadOnly))) {
            if (pairStatus) pairStatus->setText("Wi-Fi Direct 服务配置不可读取或不受系统保护，请检查系统配置。"); return;
        }
        if (serviceConfig.isOpen()) {
            const auto config=QJsonDocument::fromJson(serviceConfig.readAll()).object();
            if (config.value("uid").toInt(-1)==int(getuid()) &&
                QDir(config.value("state_dir").toString()).canonicalPath()==QDir(state).canonicalPath() && config.value("port").toInt()==port && config.value("interface").toString()==iface) {
                waitingDirect=true;
                if (pairStatus) pairStatus->setText("正在等待系统 Wi-Fi Direct 服务就绪；无需再次授权。若一直未就绪，请检查 vivo-connect-p2p.service 状态。");
                return;
            }
            if (pairStatus) pairStatus->setText("已安装的 Wi-Fi Direct 服务使用另一组用户、网卡、状态目录或端口，请核对服务配置。");
            return;
        }
        if (helper && helper->state() != QProcess::NotRunning) { waitingDirect = true; return; }
        if (!QFileInfo::exists(project + "/build/private-p2p/bin/wpa_supplicant")) {
            if (pairStatus) pairStatus->setText("正在构建独立无线组件，完成后将请求系统授权…");
            auto *builder = new QProcess(this); builder->setWorkingDirectory(project); builder->setStandardOutputFile(QProcess::nullDevice());
            connect(builder, &QProcess::finished, this, [this, builder, iface](int code, QProcess::ExitStatus status) {
                const QString message=QString::fromUtf8(builder->readAllStandardError()).trimmed().right(500); builder->deleteLater();
                if (!pairDialog) return;
                if (code == 0 && status == QProcess::NormalExit) startHelper(iface);
                else if (pairStatus) pairStatus->setText(message.isEmpty() ? "无线组件构建失败，请检查开发依赖" : message);
            });
            connect(builder, &QProcess::errorOccurred, this, [this, builder](QProcess::ProcessError){ if (pairStatus) pairStatus->setText("无法启动无线组件构建"); builder->deleteLater(); });
            builder->start("/usr/bin/python", {project + "/tools/build_p2p_supplicant.py"}); return;
        }
        QFile stat("/proc/self/stat"); if (!stat.open(QIODevice::ReadOnly)) { report("无法读取窗口进程身份", true); return; }
        QByteArray fields = stat.readAll(); int end = fields.lastIndexOf(')'); auto parts = fields.mid(end+1).simplified().split(' '); if (end < 0 || parts.size() <= 19) { report("无法确认窗口进程身份", true); return; }
        QString dir = state + "/native-qt-" + QString::number(QCoreApplication::applicationPid());
        if (!QDir().mkpath(dir)) { report("无法创建无线助手状态目录", true); return; }
        QFile::setPermissions(dir, QFileDevice::ReadOwner|QFileDevice::WriteOwner|QFileDevice::ExeOwner); lease = dir + "/p2p-owner"; QFile file(lease); if (!file.open(QIODevice::WriteOnly|QIODevice::NewOnly)) { report("无法创建无线助手生命周期文件", true); return; } file.close();
        helper = new QProcess(this); helper->setStandardOutputFile(QProcess::nullDevice());
        connect(helper, &QProcess::errorOccurred, this, [this](QProcess::ProcessError){ waitingDirect=false; if (pairStatus) pairStatus->setText("无法打开系统授权窗口，请检查 polkit 授权代理。"); });
        connect(helper, &QProcess::finished, this, [this](int code, QProcess::ExitStatus){ if (waitingDirect) { waitingDirect=false; QString e=QString::fromUtf8(helper->readAllStandardError()).trimmed().right(500); if (pairStatus) pairStatus->setText(code==126 ? "已取消系统授权" : e.isEmpty() ? "无线助手启动失败" : e); } });
        QStringList args={"--disable-internal-agent", "/usr/bin/python", project + "/tools/p2p_helper.py", "--interface",iface,"--driver","private","--state-dir",state,"--port",QString::number(port),"--owner-pid",QString::number(QCoreApplication::applicationPid()),"--owner-start-time",QString::fromLatin1(parts[19]),"--owner-lease",lease};
        waitingDirect=true; if (pairStatus) pairStatus->setText("请在系统窗口授权，正在启动 Wi-Fi Direct…"); helper->start("/usr/bin/pkexec", args);
    }
    void makeQr(bool direct) {
        if (!pairJob.isEmpty()) api.call("POST", "/api/jobs/" + pairJob + "/cancel"); pairJob.clear();
        auto qr = api.call("POST", direct ? "/api/sessions/p2p" : "/api/sessions/scan").toObject();
        if (!api.error.isEmpty()) { if (pairStatus) pairStatus->setText(api.error); return; }
        QProcess encoder; encoder.start("qrencode", {"-t","PNG","-s","7","-o","-"});
        if (!encoder.waitForStarted(3000)) { if (pairStatus) pairStatus->setText("缺少二维码生成器 qrencode"); return; }
        encoder.write(qr.value("qrText").toString().toUtf8()); encoder.closeWriteChannel();
        if (!encoder.waitForFinished(5000) || encoder.exitCode()) { if (pairStatus) pairStatus->setText("二维码生成失败"); return; }
        QPixmap pix; pix.loadFromData(encoder.readAllStandardOutput(), "PNG"); if (qrLabel) qrLabel->setPixmap(pix.scaled(260,260,Qt::KeepAspectRatio,Qt::FastTransformation));
        pairJob = qr.value("jobId").toString(); if (pairStatus) pairStatus->setText("使用手机互传扫码并确认连接");
    }
    void wifiServiceSettings() {
        QDialog dialog(this); dialog.setWindowTitle("Wi-Fi Direct 持久服务"); dialog.resize(480,240); QVBoxLayout layout(&dialog);
        auto *description=new QLabel("启用后，系统服务会在后端就绪时管理 Wi-Fi Direct 网络。安装或移除需要系统授权；网络重建后手机可能需要重新扫码。",&dialog);
        description->setWordWrap(true); layout.addWidget(description);
        auto *interfaces=new QComboBox(&dialog); QDir net("/sys/class/net");
        for (const auto &name:net.entryList(QDir::Dirs|QDir::NoDotAndDotDot)) if(!name.startsWith("p2p-") && QFileInfo::exists(net.filePath(name+"/wireless"))) interfaces->addItem(name);
        layout.addWidget(interfaces); auto *status=new QLabel(&dialog); status->setWordWrap(true); layout.addWidget(status);
        auto *buttons=new QDialogButtonBox(&dialog); auto *install=buttons->addButton("启用持久服务",QDialogButtonBox::ActionRole); auto *remove=buttons->addButton("移除持久服务",QDialogButtonBox::ActionRole); buttons->addButton(QDialogButtonBox::Close); layout.addWidget(buttons);
        connect(buttons,&QDialogButtonBox::rejected,&dialog,&QDialog::reject);
        QPointer<QLabel> statusPtr(status); QPointer<QComboBox> interfacesPtr(interfaces); QPointer<QPushButton> installPtr(install), removePtr(remove);
        auto refreshView=[this,statusPtr,interfacesPtr,installPtr,removePtr] {
            if (!statusPtr || !interfacesPtr || !installPtr || !removePtr) return;
            const QString configPath="/etc/vivo-connect-p2p/service.json"; QFile configFile(configPath);
            bool exists=QFileInfo::exists(configPath), trusted=trustedServiceSource(project), running=serviceOperation && serviceOperation->state()!=QProcess::NotRunning;
            QString text; bool matches=false, validInterface=false;
            if (exists && rootManagedPath(configPath) && configFile.open(QIODevice::ReadOnly)) {
                auto config=QJsonDocument::fromJson(configFile.readAll()).object(); auto iface=config.value("interface").toString(); int index=interfacesPtr->findText(iface); if(index>=0)interfacesPtr->setCurrentIndex(index);
                matches=config.value("uid").toInt(-1)==int(getuid()) && QDir(config.value("state_dir").toString()).canonicalPath()==QDir(state).canonicalPath() && config.value("port").toInt()==port; validInterface=index>=0;
                QProcess query; query.start("/usr/bin/systemctl",{"is-active","vivo-connect-p2p.service"});
                bool active=query.waitForFinished(1500) && query.exitStatus()==QProcess::NormalExit && query.exitCode()==0;
                if(query.state()!=QProcess::NotRunning){query.kill();query.waitForFinished(500);}
                text=matches ? (active?"服务已运行；网络将在后端就绪后注册。":"服务已配置，但当前未运行。") : "服务已配置给其他用户、状态目录或端口；请先移除后重新配置。";
                if (matches && active && helper && helper->state()!=QProcess::NotRunning) text="服务已运行；当前仍在使用临时网络，退出程序后服务可接管，手机可能需要重新扫码。";
            } else if (exists) text="服务配置不可读取或不受系统保护，请检查系统配置。";
            else text="持久服务尚未启用。";
            if (!trusted) text+="\n请先安装包含此功能的 pacman 软件包，再从应用菜单启动。";
            if (running) text="正在等待系统授权并处理服务，请稍候…";
            statusPtr->setText(text); interfacesPtr->setEnabled(!exists && !running);
            installPtr->setText(exists?"更新持久服务":"启用持久服务");
            installPtr->setEnabled(trusted && !running && interfacesPtr->count()>0 && (!exists || (matches && validInterface)));
            removePtr->setEnabled(trusted && exists && rootManagedPath(configPath) && !running);
        };
        auto start=[this,interfacesPtr,refreshView](bool enabling) {
            if (serviceOperation && serviceOperation->state()!=QProcess::NotRunning) return;
            if (!trustedServiceSource(project)) { report("服务管理需要由系统包安装的可信文件",true); return; }
            if (enabling && QFileInfo::exists("/etc/vivo-connect-p2p/service.json") && QMessageBox::question(this,"更新持久服务","更新会重启 Wi-Fi Direct 服务并可能中断当前连接，是否继续？")!=QMessageBox::Yes) return;
            if (!enabling && QMessageBox::question(this,"移除持久服务","移除服务会停止其 Wi-Fi Direct 网络，是否继续？")!=QMessageBox::Yes) return;
            auto *user=getpwuid(getuid()); if (!user || !interfacesPtr) { report("无法确定当前用户",true); return; }
            QStringList args={"/usr/bin/python3","-I",project+"/tools/install_p2p_service.py",enabling?"install":"uninstall"};
            if(enabling) args << "--user" << QString::fromLocal8Bit(user->pw_name) << "--interface" << interfacesPtr->currentText() << "--state-dir" << state << "--port" << QString::number(port);
            auto *process=new QProcess(this); serviceOperation=process;
            auto finish=[this,process,refreshView](int code) {
                if (process->property("handled").toBool()) return; process->setProperty("handled",true);
                QString error=QString::fromUtf8(process->readAllStandardError()).trimmed().right(400);
                serviceOperation=nullptr; process->deleteLater();
                report(code==0?"Wi-Fi Direct 服务设置已更新":(code==126?"已取消系统授权":error.isEmpty()?"Wi-Fi Direct 服务设置失败":error)); refreshView();
            };
            connect(process,&QProcess::finished,this,[finish](int code,QProcess::ExitStatus result){finish(result==QProcess::NormalExit?code:-1);});
            connect(process,&QProcess::errorOccurred,this,[finish](QProcess::ProcessError error){if(error==QProcess::FailedToStart)finish(-1);});
            process->start("/usr/bin/pkexec",args); refreshView();
        };
        connect(install,&QPushButton::clicked,&dialog,[start]{start(true);}); connect(remove,&QPushButton::clicked,&dialog,[start]{start(false);});
        refreshView(); dialog.exec();
    }
    void pair() {
        QDialog dialog(this); pairDialog=&dialog; dialog.setWindowTitle("连接手机"); dialog.resize(430, 500); QVBoxLayout layout(&dialog);
        QComboBox modes; modes.addItems({"Wi-Fi Direct", "局域网扫码"}); pairMode=&modes; layout.addWidget(&modes);
        QComboBox interfaces; wireless=&interfaces; QDir net("/sys/class/net"); for (auto name : net.entryList(QDir::Dirs|QDir::NoDotAndDotDot)) if (!name.startsWith("p2p-") && QFileInfo::exists(net.filePath(name+"/wireless"))) interfaces.addItem(name); layout.addWidget(&interfaces);
        const QString configPath="/etc/vivo-connect-p2p/service.json"; QFile serviceConfig(configPath);
        if(rootManagedPath(configPath) && serviceConfig.open(QIODevice::ReadOnly)) { auto config=QJsonDocument::fromJson(serviceConfig.readAll()).object(); if(config.value("uid").toInt(-1)==int(getuid()) && QDir(config.value("state_dir").toString()).canonicalPath()==QDir(state).canonicalPath() && config.value("port").toInt()==port) { int i=interfaces.findText(config.value("interface").toString()); if(i>=0)interfaces.setCurrentIndex(i); } }
        QLabel image; image.setFixedSize(280,280); image.setAlignment(Qt::AlignCenter); qrLabel=&image; layout.addWidget(&image,0,Qt::AlignCenter);
        QLabel status("选择方式并生成二维码"); status.setWordWrap(true); pairStatus=&status; layout.addWidget(&status);
        QPushButton generate("生成二维码"); layout.addWidget(&generate); connect(&modes, &QComboBox::currentIndexChanged, &dialog, [&]{ interfaces.setVisible(modes.currentIndex()==0); });
        connect(&generate, &QPushButton::clicked, &dialog, [&]{
            if (modes.currentIndex()==1) { makeQr(false); return; }
            const auto direct = api.call("GET", "/api/p2p/status").toObject();
            if (!api.error.isEmpty()) { status.setText(api.error); return; }
            if (direct.value("ready").toBool()) makeQr(true);
            else if (interfaces.currentText().isEmpty()) status.setText("未找到无线网卡");
            else startHelper(interfaces.currentText());
        });
        dialog.exec(); if (!pairJob.isEmpty()) { api.call("POST", "/api/jobs/" + pairJob + "/cancel"); pairJob.clear(); } if (waitingDirect && !lease.isEmpty()) { QFile::remove(lease); QDir().rmdir(QFileInfo(lease).absolutePath()); lease.clear(); } waitingDirect=false; pairDialog=nullptr; qrLabel=nullptr; pairStatus=nullptr; pairMode=nullptr; wireless=nullptr;
    }
    int port;
protected:
    void closeEvent(QCloseEvent *event) override {
        if (!quitting && tray && (simulatedTray || QSystemTrayIcon::isSystemTrayAvailable())) {
            hide(); event->ignore(); return;
        }
        if (serviceOperation && serviceOperation->state()!=QProcess::NotRunning) { report("Wi-Fi Direct 服务设置仍在进行，请稍候"); event->ignore(); return; }
        if (!pairJob.isEmpty()) api.call("POST", "/api/jobs/" + pairJob + "/cancel");
        if (!lease.isEmpty()) { QFile::remove(lease); QDir().rmdir(QFileInfo(lease).absolutePath()); }
        QMainWindow::closeEvent(event);
        if (!quitting && tray) QTimer::singleShot(0,qApp,&QCoreApplication::quit);
    }
public:
    void showMainWindow() { showNormal(); raise(); activateWindow(); }
    bool hasTray() const { return tray && (simulatedTray || QSystemTrayIcon::isSystemTrayAvailable()); }
    void quitApplication() { if (serviceOperation && serviceOperation->state()!=QProcess::NotRunning) { report("Wi-Fi Direct 服务设置仍在进行，请稍候"); return; } quitting=true; if (pairDialog) pairDialog->reject(); if (tray) tray->hide(); close(); QCoreApplication::quit(); }
    Window(QString project, QString state, int port, bool testTray=false) : api(state, port), clipboardApi(state,port), project(std::move(project)), state(std::move(state)), simulatedTray(testTray), port(port) {
        setWindowTitle("vivo Connect · 手机文件"); resize(1080,760); setMinimumSize(820,620);
        qApp->installEventFilter(new MouseNavigation(this,[this](int direction){navigateHistory(direction);}));
        auto *central = new QWidget; setCentralWidget(central); auto *outer = new QHBoxLayout(central); outer->setContentsMargins(0,0,0,0); outer->setSpacing(0);
        auto *sidebar = new QWidget; sidebar->setFixedWidth(230); sidebar->setObjectName("sidebar"); auto *side = new QVBoxLayout(sidebar); side->setContentsMargins(18,18,18,18);
        auto *brand = new QLabel("↔  vivo Connect"); QFont brandFont=brand->font(); brandFont.setPointSize(17); brandFont.setBold(true); brand->setFont(brandFont); side->addWidget(brand); side->addWidget(new QLabel("我的设备")); side->addWidget(devices,1);
        auto *pairButton = new QPushButton("＋ 添加设备"); auto *jobs = new QPushButton("传输记录"); auto *wifiService = new QPushButton("Wi-Fi Direct 设置");
        auto *autostart = new QCheckBox("开机后台启动"); autostart->setChecked(QFileInfo::exists(autostartPath()));
        account->setText("正在获取账号状态…"); accountButton->hide(); reconnectButton->setEnabled(false); disconnectButton->setEnabled(false);
        side->addWidget(pairButton); side->addWidget(reconnectButton); side->addWidget(disconnectButton); side->addWidget(wifiService); side->addWidget(jobs); clipboardToggle->setEnabled(false); side->addWidget(clipboardToggle); side->addWidget(autostart); side->addWidget(account); side->addWidget(accountButton); outer->addWidget(sidebar);
        auto *content = new QWidget; auto *column = new QVBoxLayout(content); column->setContentsMargins(28,24,28,24); column->setSpacing(12);
        auto *heading = new QLabel("手机文件"); QFont h=heading->font();h.setPointSize(20);h.setBold(true);heading->setFont(h);column->addWidget(heading);
        auto *nav = new QHBoxLayout; auto *back = new QPushButton("←"); auto *forward = new QPushButton("→"); back->setToolTip("后退 (Alt+←)"); forward->setToolTip("前进 (Alt+→)"); auto *home = new QPushButton("手机存储"); auto *up = new QPushButton("上一级"); auto *reload = new QPushButton("刷新"); path->setText(root + "/"); nav->addWidget(back);nav->addWidget(forward);nav->addWidget(home);nav->addWidget(up);nav->addWidget(path,1);nav->addWidget(reload);column->addLayout(nav);
        auto *actions = new QHBoxLayout; auto *choose = new QPushButton("上传文件"); auto *mkdir = new QPushButton("新建文件夹"); auto *receiveButton = new QPushButton("接收所选文件"); search->setPlaceholderText("搜索当前文件夹"); actions->addWidget(choose); actions->addWidget(mkdir); actions->addWidget(receiveButton); actions->addStretch(1); actions->addWidget(search); column->addLayout(actions);
        column->addWidget(new QLabel("拖入电脑文件上传 · 将手机文件拖到电脑接收 · 右键管理文件")); column->addWidget(tree,1); info->setWordWrap(true); column->addWidget(info); outer->addWidget(content,1);
        setStyleSheet("#sidebar{background:#f8f9fa;border-right:1px solid #d8dfe4} QMainWindow,QWidget{font-size:13px} QPushButton{padding:7px 10px} QTreeWidget{background:white;alternate-background-color:#f7fafc;border:1px solid #d9e0e5} QTreeWidget::item{padding:7px} QTreeWidget::item:selected{background:#dceffa;color:#27343d}"); tree->setAlternatingRowColors(true); tree->setDragDropMode(QAbstractItemView::DragDrop);
        tree->upload=[this](auto p,auto d){ upload(p,d); }; tree->movePhone=[this](auto p,auto d){ movePhone(p,d); }; tree->currentDirectory=[this]{ return directory; };
        tree->virtualFiles=[this](auto files){return makeVirtualFiles(files);};
        tree->dragStatus=[this](QString message){ report(message); };
        connect(devices,&QListWidget::currentItemChanged,this,[this](QListWidgetItem *item){ if (!item) return; selected=item->data(Qt::UserRole).toString(); history.select(selected); directory=root; tree->clear(); refresh(); if (connected()) browse(root); });
        devices->setContextMenuPolicy(Qt::CustomContextMenu);
        connect(devices,&QWidget::customContextMenuRequested,this,[this](QPoint pos){
            auto *item=devices->itemAt(pos); if(!item)return; QString id=item->data(Qt::UserRole).toString();
            QMenu menu(this); auto *forget=menu.addAction("忘记设备…");
            if(menu.exec(devices->viewport()->mapToGlobal(pos))!=forget)return;
            if(QMessageBox::question(this,"忘记设备","忘记此设备并删除其保存的连接凭据？再次连接可能需要扫码。")!=QMessageBox::Yes)return;
            api.call("DELETE","/api/sessions/"+id); QString error=api.error;
            if(!error.isEmpty())report(error,true); else {if(selected==id){selected.clear();tree->clear();} report("已忘记设备");refresh();}
        });
        connect(pairButton,&QPushButton::clicked,this,[this]{ pair(); });
        connect(wifiService,&QPushButton::clicked,this,[this]{wifiServiceSettings();});
        connect(autostart,&QCheckBox::clicked,this,[this,autostart](bool enabled){
            QString error; const QString launcher=this->project=="/usr/lib/vivo-connect" ? "/usr/bin/vivo-connect" : QCoreApplication::applicationFilePath();
            if (!setAutostart(autostartPath(),enabled,launcher,this->state,this->port,error)) { QSignalBlocker block(autostart); autostart->setChecked(!enabled); report("设置开机启动失败："+error,true); }
        });
        connect(clipboardToggle,&QCheckBox::clicked,this,[this](bool enabled){setClipboardEnabled(enabled);});
        connect(QApplication::clipboard(),&QClipboard::dataChanged,this,[this]{
            if (clipboardApplying || !clipboardInitialized || !clipboardEnabled || clipboardSession!=selected || !connected()) return;
            auto *mime=QApplication::clipboard()->mimeData(); if (!mime || !mime->hasText() || mime->hasUrls()) return;
            QString text=mime->text(); if (clipboardHasBaseline && text==clipboardBaseline) return;
            clipboardBaseline=text; clipboardHasBaseline=true; clipboardPending=text; clipboardHasPending=true;
        });
        connect(accountButton,&QPushButton::clicked,this,[this]{ api.call("POST","/api/account/login"); auto error=api.error; report(error.isEmpty()?"请在官方登录窗口完成登录":error,!error.isEmpty()); refresh(); });
        connect(disconnectButton,&QPushButton::clicked,this,[this]{ if (selected.isEmpty()) return; api.call("POST",route("/disconnect")); auto error=api.error; if(error.isEmpty() && connectJobDevice==selected){connectJob.clear();connectJobDevice.clear();} report(error.isEmpty()?"连接已断开，自动重连已暂停":error,!error.isEmpty()); refresh(); });
        connect(reconnectButton,&QPushButton::clicked,this,[this]{ if (connected()) { report("手机已连接"); return; } if (selected.isEmpty()) { report("没有历史设备，请先添加设备"); return; } const auto device=selectedDevice(); const auto wait=device.value("reconnectWait").toObject(); const QString code=wait.value("code").toString(); if(device.value("needsAuthorization").toBool() || code=="P2P_PHONE_NOT_JOINED" || code=="P2P_ADDRESS_CHANGED") { pair(); return; } if(!wait.isEmpty()) { report(wait.value("message").toString()); return; } QString id=selected; auto r=api.call("POST",route("/reconnect")).toObject(); if (!api.error.isEmpty()) { report(api.error); } else { connectJob=r.value("id").toString(); connectJobDevice=id; report("正在重新连接已授权设备…"); refresh(); } });
        connect(jobs,&QPushButton::clicked,this,[this]{ showJobs(); }); connect(back,&QPushButton::clicked,this,[this]{navigateHistory(-1);}); connect(forward,&QPushButton::clicked,this,[this]{navigateHistory(1);}); connect(home,&QPushButton::clicked,this,[this]{ browse(root); }); connect(up,&QPushButton::clicked,this,[this]{ goUp(); }); connect(reload,&QPushButton::clicked,this,[this]{ browse(directory); }); connect(path,&QLineEdit::returnPressed,this,[this]{ browse(path->text()); });
        connect(search,&QLineEdit::textChanged,this,[this]{ filter(); }); connect(choose,&QPushButton::clicked,this,[this]{ auto paths=QFileDialog::getOpenFileNames(this,"选择要发送的文件"); upload(paths,directory); });
        connect(mkdir,&QPushButton::clicked,this,[this]{ bool ok=false; auto name=QInputDialog::getText(this,"新建文件夹","名称",QLineEdit::Normal,"",&ok); if(ok&&!name.isEmpty()) fileOp("mkdir",{{"path",directory},{"name",name}}); });
        connect(receiveButton,&QPushButton::clicked,this,[this]{ auto items=tree->selectedItems();if(items.isEmpty())return;bool isDir=false;for(auto *i:items)isDir|=i->data(0,Qt::UserRole+1).toBool();receive(tree->selectedPaths(),isDir); });
        connect(tree,&QTreeWidget::itemActivated,this,[this](QTreeWidgetItem *item){ auto p=item->data(0,Qt::UserRole).toString(); if(item->data(0,Qt::UserRole+1).toBool()) browse(p); else receive({p},false); });
        tree->setContextMenuPolicy(Qt::CustomContextMenu); connect(tree,&QWidget::customContextMenuRequested,this,[this](QPoint p){contextMenu(p);});
        auto shortcut=[this](QWidget *owner, QKeySequence key, std::function<void()> action, Qt::ShortcutContext context) {
            auto *s=new QShortcut(key,owner); s->setContext(context); connect(s,&QShortcut::activated,this,std::move(action));
        };
        shortcut(this,QKeySequence("Alt+Left"),[this]{navigateHistory(-1);},Qt::WindowShortcut);
        shortcut(this,QKeySequence("Alt+Right"),[this]{navigateHistory(1);},Qt::WindowShortcut);
        shortcut(this,QKeySequence("Alt+Up"),[this]{goUp();},Qt::WindowShortcut);
        shortcut(this,QKeySequence(Qt::Key_F5),[this]{browse(directory);},Qt::WindowShortcut);
        shortcut(this,QKeySequence("Ctrl+L"),[this]{path->setFocus();path->selectAll();},Qt::WindowShortcut);
        shortcut(this,QKeySequence("Ctrl+F"),[this]{search->setFocus();search->selectAll();},Qt::WindowShortcut);
        shortcut(tree,QKeySequence(Qt::Key_Backspace),[this]{goUp();},Qt::WidgetWithChildrenShortcut);
        shortcut(tree,QKeySequence(Qt::Key_Delete),[this]{deleteSelected();},Qt::WidgetWithChildrenShortcut);
        shortcut(tree,QKeySequence(Qt::Key_F2),[this]{renameSelected();},Qt::WidgetWithChildrenShortcut);
        if (simulatedTray || QSystemTrayIcon::isSystemTrayAvailable()) {
            QIcon icon=QApplication::windowIcon();
            if (icon.isNull()) icon=QIcon(project+"/analysis/app/dist/electron/static/logo.ico");
            if (icon.isNull()) icon=style()->standardIcon(QStyle::SP_ComputerIcon);
            tray=new QSystemTrayIcon(icon,this); tray->setToolTip("vivo Connect");
            auto *menu=new QMenu(this); auto *open=menu->addAction("打开软件");
            trayClipboard=menu->addAction("同步文本剪贴板"); trayClipboard->setCheckable(true); trayClipboard->setObjectName("trayClipboard");
            menu->addSeparator(); auto *quit=menu->addAction("退出"); quit->setObjectName("trayQuit");
            tray->setContextMenu(menu); updateTrayClipboard(trayClipboard,clipboardToggle);
            connect(open,&QAction::triggered,this,[this]{showMainWindow();});
            connect(trayClipboard,&QAction::triggered,this,[this](bool enabled){setClipboardEnabled(enabled);});
            connect(quit,&QAction::triggered,this,[this]{quitApplication();});
            connect(tray,&QSystemTrayIcon::activated,this,[this](QSystemTrayIcon::ActivationReason reason){if(reason==QSystemTrayIcon::Trigger || reason==QSystemTrayIcon::DoubleClick) showMainWindow();});
            QApplication::setQuitOnLastWindowClosed(false);
            if (!simulatedTray) tray->show();
        }
        connect(&poll,&QTimer::timeout,this,[this]{refresh();}); poll.start(1500);
        connect(&clipboardTimer,&QTimer::timeout,this,[this]{updateClipboard();}); clipboardTimer.start(1200);
        if (!api.valid()) report("找不到后端配置，请先启动后端"); else QTimer::singleShot(0, this, [this]{ refresh(); if (connected()) browse(root); });
    }
};
int main(int argc, char **argv) {
    if (qEnvironmentVariableIsSet("WAYLAND_DISPLAY") && !qEnvironmentVariableIsSet("QT_QPA_PLATFORM")) qputenv("QT_QPA_PLATFORM", "wayland");
    QApplication app(argc,argv); app.setApplicationName("vivo Connect"); app.setDesktopFileName(QString::fromUtf8(VIVO_DESKTOP_ID));
    app.setWindowIcon(QIcon::fromTheme(QString::fromUtf8(VIVO_DESKTOP_ID)));
    auto args=app.arguments();
    if (args.contains("--self-test")) {
        QTemporaryDir autostartTest;
        QString autostartError, testPath=autostartTest.path()+"/autostart/test.desktop";
        if (!autostartTest.isValid() || !setAutostart(testPath,true,"/tmp/test app","/tmp/state % $",8765,autostartError)) return 41;
        QFile desktopFile(testPath); if (!desktopFile.open(QIODevice::ReadOnly)) return 42;
        const auto entry=desktopFile.readAll(); desktopFile.close();
        if (!entry.contains("--background") || !entry.contains("/tmp/state %% \\$")) return 43;
        if (!setAutostart(testPath,false,{}, {},8765,autostartError) || QFile::exists(testPath)) return 44;
        QJsonObject rememberedDevice{{"id","phone"},{"status","disconnected"},{"autoConnect",true}};
        if(deviceStatus(rememberedDevice)!="等待自动重连" || !canPauseDevice(rememberedDevice)) return 37;
        rememberedDevice["autoConnect"]=false;
        if(deviceStatus(rememberedDevice)!="已暂停连接" || canPauseDevice(rememberedDevice)) return 38;
        rememberedDevice["needsAuthorization"]=true;
        if(deviceStatus(rememberedDevice)!="需要重新授权") return 39;
        rememberedDevice["reconnecting"]=true;
        if(deviceStatus(rememberedDevice)!="正在重连…" || !canPauseDevice(rememberedDevice)) return 40;
        if (phoneFileSize("123")!=123 || phoneFileSize(0)!=0 || phoneFileSize("invalid")!=-1 || phoneFileSize(QJsonValue())!=-1 || phoneFileSize(1.5)!=-1) return 31;
        QJsonObject saved{{"directory","/tmp/saved"}};
        QJsonObject notified{{"status","failed"},{"error",QJsonObject{{"code","TRANSFER_NOTIFY_FAILED"},{"details",saved}}}};
        if (savedTransferResult(notified)!=saved || !transferLabel(notified).contains("通知手机失败")) return 28;
        if (!savedTransferResult(QJsonObject{{"status","failed"},{"error",QJsonObject{{"code","OTHER"},{"details",saved}}}}).isEmpty()) return 29;
        if (transferLabel({{"status","running"},{"phase","notifying"}})!="正在通知手机") return 30;
        QLabel accountLabel; QPushButton loginButton;
        showAccountState(&accountLabel,&loginButton,{{"loggedIn",true}},true);
        if (!loginButton.isHidden() || accountLabel.text()!="vivo 账号已登录") return 24;
        showAccountState(&accountLabel,&loginButton,{{"loggedIn",false},{"login",QJsonObject{{"status","waiting"}}}},true);
        if (loginButton.isHidden() || loginButton.isEnabled()) return 25;
        showAccountState(&accountLabel,&loginButton,{{"loggedIn",false},{"login",QJsonObject{{"status","failed"}}}},true);
        if (loginButton.isHidden() || !loginButton.isEnabled() || loginButton.text()!="重试登录") return 26;
        showAccountState(&accountLabel,&loginButton,{},false);
        if (!loginButton.isHidden() || accountLabel.text()!="账号状态不可用") return 27;
        if (!invalidMoveTarget("/storage/emulated/0/a", "/storage/emulated/0/a") ||
            !invalidMoveTarget("/storage/emulated/0/a", "/storage/emulated/0/a/sub") ||
            !invalidMoveTarget("/storage/emulated/0/a", "/storage/emulated/0") ||
            invalidMoveTarget("/storage/emulated/0/a", "/storage/emulated/0/ab")) return 21;
        DirectoryHistory h; h.record("phone", "/"); h.record("phone", "/a"); h.record("phone", "/a/b");
        if (h.target(-1)!="/a") return 15;
        h.moved(-1); if (h.target(1)!="/a/b") return 16;
        h.record("phone", "/c"); if (!h.target(1).isEmpty() || h.target(-1)!="/a") return 17;
        h.select("other"); if (!h.target(-1).isEmpty()) return 18;
        QWidget testWindow; QWidget child(&testWindow); int mouseDirection=0, mouseCalls=0;
        MouseNavigation mouseNav(&testWindow,[&](int direction){mouseDirection=direction; ++mouseCalls;});
        app.installEventFilter(&mouseNav);
        QMouseEvent backPress(QEvent::MouseButtonPress,QPointF(1,1),QPointF(1,1),Qt::BackButton,Qt::BackButton,Qt::NoModifier);
        QApplication::sendEvent(&child,&backPress);
        QMouseEvent backRelease(QEvent::MouseButtonRelease,QPointF(1,1),QPointF(1,1),Qt::BackButton,Qt::NoButton,Qt::NoModifier);
        QApplication::sendEvent(&child,&backRelease);
        if (mouseDirection!=-1 || mouseCalls!=1) return 19;
        QMouseEvent forwardPress(QEvent::MouseButtonPress,QPointF(1,1),QPointF(1,1),Qt::ForwardButton,Qt::ForwardButton,Qt::NoModifier);
        QApplication::sendEvent(&child,&forwardPress); if (mouseDirection!=1 || mouseCalls!=2) return 20;
        app.removeEventFilter(&mouseNav);
        int calls=0; LazyMime mime(QByteArray("[\"/storage/emulated/0/a.txt\"]"), [&]{ ++calls; return QList<QUrl>{QUrl::fromLocalFile("/tmp/vivo-test-file.txt")}; });
        if (!mime.hasFormat("text/uri-list") || calls != 0) return 2;
        if (!mime.data("text/uri-list").contains("file:///tmp/vivo-test-file.txt") || calls != 1) return 3;
        if (mime.data("text/uri-list").isEmpty() || calls != 1) return 4;
        if (mime.urls().size() != 1 || !mime.urls().first().isLocalFile()) return 6;
        FileTree tree; tree.currentDirectory=[]{return QString("/storage/emulated/0");}; bool received=false;
        tree.upload=[&](QStringList paths, QString target){received = paths == QStringList{"/tmp/vivo-test-file.txt"} && target == "/storage/emulated/0";};
        tree.show(); app.processEvents(); QMimeData desktop; desktop.setUrls({QUrl::fromLocalFile("/tmp/vivo-test-file.txt")});
        QDragEnterEvent enter(QPointF(20,20), Qt::CopyAction, &desktop, Qt::LeftButton, Qt::NoModifier); QApplication::sendEvent(tree.viewport(), &enter);
        QDropEvent drop(QPointF(20,20), Qt::CopyAction, &desktop, Qt::LeftButton, Qt::NoModifier); QApplication::sendEvent(tree.viewport(), &drop);
        if (!enter.isAccepted() || !drop.isAccepted() || !received) return 5;
        QTemporaryDir temporary;
        if (!temporary.isValid()) return 7;
        QFile config(temporary.filePath("config.json")); if (!config.open(QIODevice::WriteOnly)) return 8;
        config.write("{\"apiToken\":\"qt-test-token\"}"); config.close();
        QTcpServer server; if (!server.listen(QHostAddress::LocalHost, 0)) return 9;
        QByteArray request;
        QObject::connect(&server, &QTcpServer::newConnection, &app, [&]{
            auto *socket = server.nextPendingConnection();
            QObject::connect(socket, &QTcpSocket::readyRead, socket, [socket, &request]{
                request += socket->readAll();
                auto end = request.indexOf("\r\n\r\n"); if (end < 0) return;
                int length = 0; for (auto line : request.left(end).split('\n')) if (line.toLower().startsWith("content-length:")) length = line.mid(line.indexOf(':')+1).trimmed().toInt();
                if (request.size() < end + 4 + length) return;
                socket->write("HTTP/1.1 200 OK\r\nContent-Type: application/json\r\nContent-Length: 11\r\nConnection: close\r\n\r\n{\"ok\":true}"); socket->disconnectFromHost();
            });
        });
        Api mock(temporary.path(), server.serverPort());
        if (!mock.call("POST", "/api/test", {{"name", "example"}}).toObject().value("ok").toBool()) return 10;
        if (!request.toLower().contains("authorization: bearer qt-test-token") || !request.contains("\"name\":\"example\"")) return 11;
        request.clear(); mock.call("PUT", "/api/test", {{"text", "clipboard-test"}});
        if (!mock.error.isEmpty() || !request.startsWith("PUT /api/test ") || !request.contains("clipboard-test")) return 22;
        request.clear(); mock.call("PATCH", "/api/test", {{"enabled", false}});
        if (!mock.error.isEmpty() || !request.startsWith("PATCH /api/test ") || !request.contains("\"enabled\":false")) return 23;
        server.close();
        mock.call("GET", "/api/p2p/status");
        if (!mock.error.contains("后端") || !mock.error.contains("--port")) return 12;
        bool previousQuit=QApplication::quitOnLastWindowClosed();
        {
            Window background(QString::fromUtf8(PROJECT_ROOT),temporary.filePath("missing"),server.serverPort(),true);
            background.show(); background.close();
            if (background.isVisible() || QApplication::quitOnLastWindowClosed()) return 32;
            auto *trayAction=background.findChild<QAction *>("trayClipboard");
            if (!trayAction || trayAction->isEnabled() || trayAction->isChecked()) return 33;
            QCheckBox checkbox; checkbox.setEnabled(true); checkbox.setChecked(true); updateTrayClipboard(trayAction,&checkbox);
            if (!trayAction->isEnabled() || !trayAction->isChecked()) return 34;
            bool timerRan=false; QEventLoop loop; QTimer::singleShot(20,&loop,[&]{timerRan=true;loop.quit();}); loop.exec();
            if (!timerRan || background.isVisible()) return 35;
            if (!background.findChild<QAction *>("trayQuit")) return 36;
        }
        QApplication::setQuitOnLastWindowClosed(previousQuit);
        fprintf(stdout, "Qt drag/drop, MIME, history, tray lifecycle and local API checks passed\n"); return 0;
    }
    QString root=QDir(QString::fromUtf8(PROJECT_ROOT)).canonicalPath();
    QString state=qEnvironmentVariable("VIVO_STATE_DIR", root+"/.vivo-connect");
    int stateArg=args.indexOf("--state-dir"); if(stateArg>=0 && stateArg+1<args.size()) state=args[stateArg+1];
    bool ok=false; int port=qEnvironmentVariableIntValue("PORT",&ok); if(!ok)port=8765;
    int portArg=args.indexOf("--port"); if(portArg>=0 && portArg+1<args.size()) port=args[portArg+1].toInt();
    if (port < 1 || port > 65535) { QMessageBox::critical(nullptr, "vivo Connect", "后端端口无效"); return 1; }
    state = QDir(state).absolutePath();
    QProcess backend;
    auto available = [port] { QTcpSocket socket; socket.connectToHost(QHostAddress::LocalHost, port); return socket.waitForConnected(200); };
    if (!available()) {
        QProcessEnvironment env = QProcessEnvironment::systemEnvironment();
        env.insert("PORT", QString::number(port)); env.insert("VIVO_STATE_DIR", state);
        backend.setProcessEnvironment(env); backend.setWorkingDirectory(root);
        backend.setProcessChannelMode(QProcess::ForwardedErrorChannel);
        backend.setStandardOutputFile(QProcess::nullDevice());
        backend.start("node", {root + "/backend/src/server.mjs"});
        if (!backend.waitForStarted(5000)) { QMessageBox::critical(nullptr, "vivo Connect", "无法启动后端，请检查是否安装 Node.js：" + backend.errorString()); return 1; }
        QElapsedTimer timer; timer.start();
        while (!available() && backend.state() != QProcess::NotRunning && timer.elapsed() < 10000) {
            backend.waitForFinished(100);
        }
        if (backend.state() == QProcess::NotRunning || !available()) {
            backend.terminate(); if (!backend.waitForFinished(2000)) { backend.kill(); backend.waitForFinished(1000); }
            QMessageBox::critical(nullptr, "vivo Connect", "后端启动失败，请检查终端输出和端口占用。"); return 1;
        }
    }
    Api probe(state, port); probe.call("GET", "/api/account");
    if (!probe.valid() || !probe.error.isEmpty()) {
        if (backend.state() != QProcess::NotRunning) { backend.terminate(); if (!backend.waitForFinished(2000)) { backend.kill(); backend.waitForFinished(1000); } }
        QMessageBox::critical(nullptr, "vivo Connect", "无法验证本机后端。请检查端口占用以及状态目录是否与现有后端一致。\n" + probe.error); return 1;
    }
    Window window(root,state,port); if (args.contains("--trial")) window.setWindowTitle("vivo Connect · 新版测试"); if (!args.contains("--background") || !window.hasTray()) window.show(); int i=args.indexOf("--quit-after"); if(i>=0 && i+1<args.size()) QTimer::singleShot(args[i+1].toInt()*1000,&window,[&window]{window.quitApplication();});
    int result = app.exec();
    if (backend.state() != QProcess::NotRunning) { backend.terminate(); if (!backend.waitForFinished(3000)) { backend.kill(); backend.waitForFinished(1000); } }
    return result;
}
