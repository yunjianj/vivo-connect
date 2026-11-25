#pragma once
#include <QtCore>
#include <QtGui/QImage>
#include <linux/videodev2.h>
#include <fcntl.h>
#include <sys/ioctl.h>
#include <unistd.h>
#include <cstring>
#include <cerrno>
#include <functional>
extern "C" {
#include <libswscale/swscale.h>
}

class PhoneWebcam {
    int fd = -1;
    SwsContext *scale = nullptr;
    QByteArray pixels;
    int stride = 0;
    static constexpr int width = 640, height = 480;

    static bool loopback(int fd) {
        v4l2_capability caps{};
        if (ioctl(fd, VIDIOC_QUERYCAP, &caps) < 0) return false;
        const QByteArray driver(reinterpret_cast<const char *>(caps.driver), sizeof(caps.driver));
        return driver.split('\0').first() == "v4l2loopback" || driver.split('\0').first() == "v4l2 loopback";
    }

public:
    static QStringList devices() {
        QStringList paths;
        for (const auto &name : QDir("/dev").entryList({"video*"}, QDir::System)) {
            const QString path = "/dev/" + name;
            const int candidate = ::open(qPrintable(path), O_WRONLY | O_NONBLOCK | O_CLOEXEC | O_NOFOLLOW);
            if (candidate < 0) continue;
            if (loopback(candidate)) paths.append(path);
            ::close(candidate);
        }
        return paths;
    }
    ~PhoneWebcam() { stop(); }
    void stop() {
        if (fd >= 0) ::close(fd);
        fd = -1;
        sws_freeContext(scale);
        scale = nullptr;
        pixels.clear();
    }
    bool start(const QString &path) {
        stop();
        if (!QRegularExpression("^/dev/video[0-9]+$").match(path).hasMatch()) return false;
        fd = ::open(qPrintable(path), O_WRONLY | O_NONBLOCK | O_CLOEXEC | O_NOFOLLOW);
        if (fd < 0) return false;
        v4l2_format format{};
        format.type = V4L2_BUF_TYPE_VIDEO_OUTPUT;
        auto &pix = format.fmt.pix;
        pix.width = width;
        pix.height = height;
        pix.pixelformat = V4L2_PIX_FMT_YUYV;
        pix.field = V4L2_FIELD_NONE;
        pix.bytesperline = width * 2;
        pix.sizeimage = width * height * 2;
        if (!loopback(fd) || ioctl(fd, VIDIOC_S_FMT, &format) < 0 ||
            pix.pixelformat != V4L2_PIX_FMT_YUYV || pix.width != width || pix.height != height ||
            pix.bytesperline < width * 2 || pix.sizeimage < pix.bytesperline * height || pix.sizeimage > 4 * 1024 * 1024) {
            stop();
            return false;
        }
        stride = int(pix.bytesperline);
        pixels.resize(int(pix.sizeimage));
        return true;
    }
    bool writeFrame(const QImage &frame) {
        if (fd < 0) return false;
        auto size = frame.size().scaled(width, height, Qt::KeepAspectRatio);
        const int w = size.width() & ~1;
        if (w < 2 || size.height() < 1) return false;
        scale = sws_getCachedContext(scale, frame.width(), frame.height(), AV_PIX_FMT_RGB32,
            w, size.height(), AV_PIX_FMT_YUYV422, SWS_FAST_BILINEAR, nullptr, nullptr, nullptr);
        if (!scale) return false;
        auto *bytes = reinterpret_cast<uint8_t *>(pixels.data());
        for (int i = 0; i + 1 < pixels.size(); i += 2) { bytes[i] = 16; bytes[i + 1] = 128; }
        const uint8_t *input[] = {frame.constBits()};
        const int inputStride[] = {int(frame.bytesPerLine())};
        const int left = ((width - w) / 2) & ~1;
        uint8_t *output[] = {bytes + ((height - size.height()) / 2) * stride + 2 * left};
        const int outputStride[] = {stride};
        if (sws_scale(scale, input, inputStride, 0, frame.height(), output, outputStride) != size.height()) return false;
        const auto written = ::write(fd, bytes, size_t(pixels.size()));
        return written == pixels.size() || (written < 0 && (errno == EAGAIN || errno == EINTR));
    }
};

class PhoneMicrophone : public QObject {
    QProcess decoder, loopback, playback;
    QTimer audioTimeout;
    const QString name = "vivo-phone-" + QUuid::createUuid().toString(QUuid::Id128);
    QByteArray pcm;
    bool spawning = false, stopped = false;
    std::function<void(const QString &)> showStatus;

    void pushPcm() {
        const QByteArray data = decoder.readAllStandardOutput();
        if (stopped || data.isEmpty()) return;
        audioTimeout.start(8000);
        if (playback.state() == QProcess::Running) {
            if (playback.bytesToWrite() < 8192) playback.write(data);
            return;
        }
        pcm = data.right(8192);
        if (spawning) return;
        spawning = true;
        loopback.start("pw-loopback", {"-n", name, "-c", "1", "-m", "MONO", "-l", "20",
            "-i", "{ node.name = " + name + "-input node.description = \"vivo 手机麦克风输入\" media.class = Audio/Sink node.virtual = true node.autoconnect = false }",
            "-o", "{ node.name = " + name + "-source node.description = \"vivo 手机麦克风\" media.class = Audio/Source node.virtual = true node.autoconnect = false }"});
    }
    void fail(const QString &message) { stop(); showStatus(message); }

public:
    explicit PhoneMicrophone(std::function<void(const QString &)> status) : showStatus(std::move(status)) {
        audioTimeout.setSingleShot(true);
        connect(&audioTimeout, &QTimer::timeout, this, [this] { fail("没有收到手机麦克风音频"); });
        connect(&decoder, &QProcess::readyReadStandardOutput, this, [this] { pushPcm(); });
        connect(&loopback, &QProcess::started, this, [this] {
            QTimer::singleShot(350, this, [this] {
                if (stopped || loopback.state() != QProcess::Running) return;
                playback.start("pw-cat", {"--playback", "--raw", "--target", name + "-input",
                    "--rate", "48000", "--channels", "1", "--format", "s16", "--latency", "20ms", "-"});
            });
        });
        connect(&playback, &QProcess::started, this, [this] {
            if (stopped) return;
            playback.write(pcm);
            pcm.clear();
            showStatus("麦克风：在会议软件中选择「vivo 手机麦克风」");
        });
        for (auto *process : {&decoder, &loopback, &playback}) {
            process->setStandardErrorFile(QProcess::nullDevice());
            if (process != &decoder) process->setStandardOutputFile(QProcess::nullDevice());
            connect(process, &QProcess::errorOccurred, this, [this] {
                if (!stopped) fail("无法启动虚拟麦克风，请检查 FFmpeg 和 PipeWire 工具");
            });
            connect(process, &QProcess::finished, this, [this](int, QProcess::ExitStatus) {
                if (!stopped) fail("虚拟麦克风已断开");
            });
        }
    }
    void waitForAudio() { if (!stopped && !audioTimeout.isActive()) audioTimeout.start(12000); }
    ~PhoneMicrophone() override { stop(); }
    void push(const QByteArray &adts) {
        if (stopped) return;
        waitForAudio();
        if (decoder.state() == QProcess::NotRunning)
            decoder.start("ffmpeg", {"-hide_banner", "-loglevel", "error", "-probesize", "32",
                "-analyzeduration", "1", "-f", "aac", "-i", "pipe:0", "-ac", "1", "-ar", "48000",
                "-flush_packets", "1", "-f", "s16le", "pipe:1"});
        if (decoder.bytesToWrite() < 32 * 1024) decoder.write(adts);
    }
    void stop() {
        stopped = true;
        audioTimeout.stop();
        for (auto *process : {&playback, &decoder, &loopback}) {
            if (process->state() == QProcess::NotRunning) continue;
            process->kill();
            process->waitForFinished(300);
        }
        pcm.clear();
    }
};
