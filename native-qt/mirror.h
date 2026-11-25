#pragma once
#include <QtWidgets>
#include <QtNetwork>
#include <algorithm>
#include <functional>
#include <climits>
#include <QtEndian>
#include "mirror-video.h"
#include "camera-devices.h"
#include <memory>

class MirrorDialog final : public QDialog {
    QNetworkAccessManager network;
    QString base, route;
    QByteArray token;
    bool camera;
    QString webcamPath;
    PhoneWebcam webcam;
    bool webcamAttempted = false;
    QLabel *cameraStatus = nullptr;
    QPushButton *orientationButton = nullptr;
    QPushButton *lensButton = nullptr;
    bool switchingLens = false;
    QString cameraSettingsPath, cameraOrientationGroup;
    bool frontCamera;
    int cameraQuarterTurns = 0;
    QImage lastCameraFrame;
    QLabel *audioStatus = nullptr;
    std::unique_ptr<PhoneMicrophone> microphone;
    MirrorScreen *screen = new MirrorScreen;
    QLabel *status = new QLabel("请在手机上允许投屏与操控");
    QLineEdit *text = new QLineEdit;
    QList<QPushButton *> controls;
    QTimer poll;
    MirrorVideoDecoder decoder;
    QImage frame;
    QPointer<QNetworkReply> video;
    QByteArray streamBuffer;
    qsizetype streamOffset = 0;
    QQueue<QJsonObject> input;
    int geometry = 0;
    int pressedButton = 0;
    QPointF lastPointer;
    QPoint wheelRemainder;
    bool ready = false, polling = false, sending = false, closing = false;
    bool starting = true, ownsSession = false;
    int closeResult = QDialog::Rejected;

    void request(const QByteArray &method, const QString &suffix, const QJsonObject &body,
                 std::function<void(QJsonObject, QString)> complete) {
        QNetworkRequest req{QUrl(base + route + suffix)};
        req.setRawHeader("Authorization", "Bearer " + token);
        req.setHeader(QNetworkRequest::ContentTypeHeader, "application/json");
        req.setAttribute(QNetworkRequest::RedirectPolicyAttribute, QNetworkRequest::ManualRedirectPolicy);
        req.setTransferTimeout(5000);
        auto *reply = method == "GET" ? network.get(req) : method == "DELETE" ? network.deleteResource(req)
            : network.post(req, QJsonDocument(body).toJson(QJsonDocument::Compact));
        connect(reply, &QNetworkReply::readyRead, this, [reply] {
            if (reply->bytesAvailable() > 3 * 1024 * 1024) reply->abort();
        });
        connect(reply, &QNetworkReply::finished, this, [reply, complete] {
            auto data = QJsonDocument::fromJson(reply->readAll()).object();
            QString error;
            if (reply->error() != QNetworkReply::NoError)
                error = data.value("error").toObject().value("message").toString("手机操控连接已断开");
            reply->deleteLater();
            complete(data, error);
        });
    }

    void setReady(bool value) {
        ready = value;
        if (!value) { pressedButton = 0; wheelRemainder = {}; input.clear(); }
        if (orientationButton) orientationButton->setEnabled(value && !switchingLens);
        if (lensButton) lensButton->setEnabled(value && !switchingLens);
        text->setEnabled(value);
        for (auto *button : controls) button->setEnabled(value);
    }

    QString orientationKey() const { return cameraOrientationGroup + (frontCamera ? "front" : "rear"); }

    void loadCameraCorrection() {
        QSettings settings(cameraSettingsPath, QSettings::IniFormat);
        cameraQuarterTurns = std::clamp(settings.value(orientationKey(), 0).toInt(), 0, 3);
    }

    void toggleLens() {
        if (!ready || switchingLens || closing) return;
        switchingLens = true;
        lensButton->setEnabled(false);
        orientationButton->setEnabled(false);
        const QString facing = frontCamera ? "rear" : "front";
        request("POST", "/lens", {{"facing", facing}}, [this, facing](QJsonObject result, QString error) {
            switchingLens = false;
            if (closing) return;
            if (error.isEmpty() && result.value("facing").toString() == facing) {
                frontCamera = facing == "front";
                loadCameraCorrection();
                lensButton->setText(frontCamera ? "切换到后摄" : "切换到前摄");
                lastCameraFrame = {};
                screen->clear();
                setReady(false);
            } else {
                status->setText(error.isEmpty() ? "手机未确认镜头切换" : error);
                lensButton->setEnabled(ready);
                orientationButton->setEnabled(ready);
            }
        });
    }

    void rotateCamera() {
        if (!ready || lastCameraFrame.isNull()) return;
        cameraQuarterTurns = (cameraQuarterTurns + 1) % 4;
        QSettings settings(cameraSettingsPath, QSettings::IniFormat);
        settings.setValue(orientationKey(), cameraQuarterTurns);
        presentCameraFrame();
    }

    void presentCameraFrame() {
        auto upright = orientCameraFrame(lastCameraFrame, frontCamera, cameraQuarterTurns);
        if (upright.isNull()) return;
        if (!webcamPath.isEmpty()) {
            if (!webcamAttempted) {
                webcamAttempted = true;
                if (webcam.start(webcamPath)) cameraStatus->setText("虚拟摄像头：" + webcamPath);
                else {
                    cameraStatus->setText("无法启用虚拟摄像头，确认设备可写且未被占用");
                    webcamPath.clear();
                }
            }
            if (!webcamPath.isEmpty() && !webcam.writeFrame(upright)) {
                webcam.stop();
                cameraStatus->setText("虚拟摄像头输出已断开");
                webcamPath.clear();
            }
        }
        screen->swapFrame(upright);
    }

    void stopDevices() {
        if (microphone) {
            microphone.reset();
            audioStatus->setText("麦克风共享已结束");
        }
        webcam.stop();
        if (cameraStatus && webcamAttempted && !webcamPath.isEmpty()) cameraStatus->setText("虚拟摄像头共享已结束");
    }

    void showFailure(const QString &error) {
        stopDevices();
        poll.stop();
        setReady(false);
        screen->clear();
        frame = {};
        lastCameraFrame = {};
        status->setText(error);
        if (video) video->abort();
    }

    void showState(const QJsonObject &data, const QString &error) {
        if (closing) return;
        const auto state = data.value("status").toString();
        if (!error.isEmpty() || state == "failed") {
            showFailure(error.isEmpty() ? data.value("error").toString() : error);
            return;
        }
        if (microphone && data.value("audioAvailable").isBool() && !data.value("audioAvailable").toBool()) {
            microphone.reset();
            audioStatus->setText("手机未提供麦克风音频");
        }
        if (microphone && state == "streaming") microphone->waitForAudio();
        if (camera && state == "permission") status->setText(data.value("permissionHint").toString("请在手机上允许共享相机"));
        if (!ready && state == "starting") status->setText("正在接收手机画面…");
    }

    void readVideo() {
        if (closing || !video || video->attribute(QNetworkRequest::HttpStatusCodeAttribute).toInt() != 200) return;
        constexpr quint32 maxPacket = 16 * 1024 * 1024;
        streamBuffer.append(video->readAll());
        if (streamBuffer.size() > maxPacket + 128 * 1024) {
            showFailure("投屏数据超过缓冲区上限");
            return;
        }
        bool produced = false;
        while (streamBuffer.size() - streamOffset >= 8) {
            const char *header = streamBuffer.constData() + streamOffset;
            const auto size = qFromBigEndian<quint32>(header);
            const auto nextGeometry = qFromBigEndian<quint32>(header + 4);
            if (!size || size > maxPacket || nextGeometry > INT_MAX || (!nextGeometry && !camera)) {
                showFailure("投屏数据格式无效");
                return;
            }
            if (streamBuffer.size() - streamOffset < qsizetype(size) + 8) break;
            if (!nextGeometry) {
                if (microphone && size <= 256 * 1024) microphone->push(QByteArray(header + 8, size));
                streamOffset += qsizetype(size) + 8;
                continue;
            }
            if (geometry != int(nextGeometry)) {
                geometry = int(nextGeometry);
                produced = false;
                setReady(false);
                frame = {};
                lastCameraFrame = {};
                screen->clear();
                if (!decoder.open()) {
                    showFailure("无法初始化 H.264 解码器");
                    return;
                }
            }
            if (!decoder.decode(QByteArray(header + 8, size), frame, produced)) {
                showFailure("无法解码手机的 H.264 画面");
                return;
            }
            streamOffset += qsizetype(size) + 8;
        }
        // Compact once per read rather than moving the remaining bytes per frame.
        if (streamOffset) {
            streamBuffer.remove(0, streamOffset);
            streamOffset = 0;
        }
        if (produced) {
            if (camera) {
                lastCameraFrame.swap(frame);
                presentCameraFrame();
            } else screen->swapFrame(frame);
            if (!ready) {
                setReady(true);
                status->setText(camera ? "正在共享手机摄像头" : "正在操控手机");
            }
        }
    }

    void openVideo() {
        QNetworkRequest request{QUrl(base + route + "/stream")};
        request.setRawHeader("Authorization", "Bearer " + token);
        request.setAttribute(QNetworkRequest::RedirectPolicyAttribute, QNetworkRequest::ManualRedirectPolicy);
        video = network.get(request);
        video->setReadBufferSize(64 * 1024);
        connect(video, &QNetworkReply::readyRead, this, [this] { readVideo(); });
        connect(video, &QNetworkReply::finished, this, [this] {
            video->deleteLater();
            video = nullptr;
            if (!closing && poll.isActive()) {
                stopDevices();
                setReady(false);
                frame = {};
                lastCameraFrame = {};
                screen->clear();
                requestState();
            }
        });
    }

    void requestState() {
        if (polling || closing) return;
        polling = true;
        request("GET", "", {}, [this](QJsonObject data, QString error) {
            polling = false;
            if (!closing && !video && error.isEmpty() && data.value("status") != "failed")
                error = "手机投屏视频流已结束";
            showState(data, error);
        });
    }

    void sendNext() {
        if (sending || input.isEmpty() || !ready || closing) return;
        sending = true;
        request("POST", "/input", input.dequeue(), [this](QJsonObject, QString error) {
            sending = false;
            if (!error.isEmpty() && !closing) {
                status->setText(error);
                input.clear();
                pressedButton = 0;
            }
            sendNext();
        });
    }

    void enqueue(QJsonObject event) {
        if (!ready || closing) return;
        event.insert("geometry", geometry);
        const bool move = event.value("action").toString() == "move";
        if (move && !input.isEmpty() && input.back().value("action").toString() == "move") input.back() = event;
        else if (input.size() < 64) input.enqueue(event);
        else if (event.value("action").toString() == "up") {
            input.clear();
            input.enqueue(event);
        }
        sendNext();
    }

    void finishClose() {
        if (!ownsSession) {
            QDialog::done(closeResult);
            return;
        }
        request("DELETE", "", {}, [this](QJsonObject, QString) { QDialog::done(closeResult); });
    }

protected:
    bool eventFilter(QObject *watched, QEvent *event) override {
        if (camera || watched != screen) return QDialog::eventFilter(watched, event);
        if (event->type() == QEvent::UngrabMouse && pressedButton) {
            enqueue({{"kind","pointer"},{"action","up"},{"buttons",pressedButton},
                     {"x",lastPointer.x()},{"y",lastPointer.y()}});
            pressedButton = 0;
        }
        const auto displayed = screen->videoRect();
        if (!ready || displayed.isEmpty()) return false;
        const auto type = event->type();
        auto normalize = [&displayed](const QPointF &point) {
            return QPointF(std::clamp((point.x() - displayed.x()) / displayed.width(), 0., 1.),
                           std::clamp((point.y() - displayed.y()) / displayed.height(), 0., 1.));
        };
        if (type == QEvent::Wheel) {
            auto *wheel = static_cast<QWheelEvent *>(event);
            if (!QRectF(displayed).contains(wheel->position())) return false;
            if (wheel->phase() == Qt::ScrollBegin) wheelRemainder = {};
            const auto delta = wheel->angleDelta();
            wheelRemainder += delta.isNull() ? wheel->pixelDelta() * 3 : delta;
            QPoint steps(wheelRemainder.x() / 120, wheelRemainder.y() / 120);
            wheelRemainder -= steps * 120;
            const auto point = normalize(wheel->position());
            for (int count = 0; count < 8 && !steps.isNull(); ++count) {
                const int x = std::clamp(steps.x(), -1, 1), y = std::clamp(steps.y(), -1, 1);
                enqueue({{"kind","scroll"},{"hscroll",x},{"vscroll",y},{"x",point.x()},{"y",point.y()}});
                steps -= QPoint(x, y);
            }
            if (wheel->phase() == Qt::ScrollEnd) wheelRemainder = {};
            return true;
        }
        if (type != QEvent::MouseButtonPress && type != QEvent::MouseButtonDblClick &&
            type != QEvent::MouseMove && type != QEvent::MouseButtonRelease) return false;
        auto *mouse = static_cast<QMouseEvent *>(event);
        const bool down = type == QEvent::MouseButtonPress || type == QEvent::MouseButtonDblClick;
        const bool up = type == QEvent::MouseButtonRelease;
        const int button = mouse->button() == Qt::LeftButton ? 1 : mouse->button() == Qt::RightButton ? 2 :
                           mouse->button() == Qt::MiddleButton ? 4 : 0;
        if (down) {
            if (!button || pressedButton || !QRectF(displayed).contains(mouse->position())) return false;
            pressedButton = button;
        } else if (!pressedButton || (up && button != pressedButton)) return false;
        lastPointer = normalize(mouse->position());
        enqueue({{"kind","pointer"},{"action",down ? "down" : up ? "up" : "move"},{"buttons",pressedButton},
                 {"x",lastPointer.x()},{"y",lastPointer.y()}});
        if (up) pressedButton = 0;
        return true;
    }

    void closeEvent(QCloseEvent *event) override {
        event->ignore();
        reject();
    }

    void done(int result) override {
        if (closing) return;
        closing = true;
        stopDevices();
        poll.stop();
        setReady(false);
        hide();
        if (video) video->abort();
        closeResult = result;
        if (!starting) finishClose();
    }

public:
    MirrorDialog(const QString &state, int port, const QString &id, const QString &facing = {},
                 bool shareMicrophone = false, const QString &webcamDevice = {})
        : QDialog(nullptr, Qt::Window), base(QString("http://127.0.0.1:%1").arg(port)),
          route("/api/sessions/" + id + "/mirror"), camera(!facing.isEmpty()), webcamPath(webcamDevice),
          cameraSettingsPath(state + "/ui.ini"), cameraOrientationGroup("cameraRotation/" + id + "/"),
          frontCamera(facing == "front") {
        setAttribute(Qt::WA_DeleteOnClose);
        setAttribute(Qt::WA_QuitOnClose, false);
        setWindowTitle(camera ? "共享手机摄像头" : "手机屏幕与操控");
        resize(540, 800);
        QFile config(state + "/config.json");
        if (config.open(QIODevice::ReadOnly))
            token = QJsonDocument::fromJson(config.readAll()).object().value("apiToken").toString().toUtf8();
        network.setProxy(QNetworkProxy::NoProxy);
        auto *layout = new QVBoxLayout(this);
        screen->setSizePolicy(QSizePolicy::Ignored, QSizePolicy::Ignored);
        screen->setMinimumSize(160, 200);
        screen->installEventFilter(this);
        status->setTextFormat(Qt::PlainText);
        layout->addWidget(screen, 1);
        layout->addWidget(status);
        auto *actions = new QHBoxLayout;
        if (camera) {
            loadCameraCorrection();
            lensButton = new QPushButton(frontCamera ? "切换到后摄" : "切换到前摄");
            actions->addWidget(lensButton);
            connect(lensButton, &QPushButton::clicked, this, [this] { toggleLens(); });
            orientationButton = new QPushButton("向右旋转 90°");
            orientationButton->setToolTip("旋转预览和虚拟摄像头画面，方向按手机和镜头记住");
            actions->addWidget(orientationButton);
            connect(orientationButton, &QPushButton::clicked, this, [this] { rotateCamera(); });
            status->setText("请在手机上允许共享相机");
            cameraStatus = new QLabel(webcamPath.isEmpty() ? "仅预览摄像头" : "等待虚拟摄像头画面…", this);
            layout->addWidget(cameraStatus);
            if (shareMicrophone) {
                audioStatus = new QLabel("等待手机麦克风音频…", this);
                layout->addWidget(audioStatus);
            }
            text->hide();
            text->setParent(this);
        } else {
            auto *back = new QPushButton("返回");
            auto *home = new QPushButton("主屏幕");
            auto *recent = new QPushButton("最近应用");
            controls = {back, home, recent};
            int codes[] = {4, 3, 187};
            for (int i = 0; i < controls.size(); ++i) {
                auto *button = controls[i];
                const int code = codes[i];
                actions->addWidget(button);
                connect(button, &QPushButton::clicked, this, [this, code] { enqueue({{"kind","key"},{"keycode",code}}); });
            }
            auto *entry = new QHBoxLayout;
            text->setPlaceholderText("输入文字并按 Enter 发送到手机");
            text->setMaxLength(1024);
            auto *send = new QPushButton("发送文字");
            controls.append(send);
            entry->addWidget(text, 1);
            entry->addWidget(send);
            layout->addLayout(entry);
            auto sendText = [this] {
                if (ready && !text->text().isEmpty()) {
                    enqueue({{"kind","text"},{"text",text->text()}});
                    text->clear();
                }
            };
            connect(text, &QLineEdit::returnPressed, this, sendText);
            connect(send, &QPushButton::clicked, this, sendText);
        }
        actions->addStretch();
        auto *stop = new QPushButton(camera ? "结束共享" : "结束操控");
        actions->addWidget(stop);
        connect(stop, &QPushButton::clicked, this, &QDialog::reject);
        layout->addLayout(actions);
        setReady(false);
        connect(&poll, &QTimer::timeout, this, [this] { requestState(); });
        const QJsonObject settings = camera ? QJsonObject{{"source","camera"}, {"facing",facing}, {"microphone",shareMicrophone}} : QJsonObject{};
        request("POST", "", settings, [this, shareMicrophone](QJsonObject data, QString error) {
            starting = false;
            ownsSession = error.isEmpty();
            if (closing) { finishClose(); return; }
            showState(data, error);
            if (ownsSession && data.value("status") != "failed") {
                if (shareMicrophone) microphone = std::make_unique<PhoneMicrophone>([this](const QString &message) {
                    audioStatus->setText(message);
                });
                poll.start(500);
                openVideo();
            }
        });
    }
};
