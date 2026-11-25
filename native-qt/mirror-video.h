#pragma once
#include <QtGui/QImage>
#include <QtGui/QPainter>
#include <QtWidgets/QWidget>
#include <cstring>
extern "C" {
#include <libavcodec/avcodec.h>
#include <libswscale/swscale.h>
}

class MirrorVideoDecoder {
    AVCodecContext *context = nullptr;
    AVCodecParserContext *parser = nullptr;
    AVFrame *decoded = nullptr;
    AVPacket *packet = nullptr;
    SwsContext *converter = nullptr;
    size_t pendingBytes = 0;

public:
    MirrorVideoDecoder() = default;
    MirrorVideoDecoder(const MirrorVideoDecoder &) = delete;
    MirrorVideoDecoder &operator=(const MirrorVideoDecoder &) = delete;
    ~MirrorVideoDecoder() { reset(); }

    void reset() {
        if (parser) av_parser_close(parser);
        parser = nullptr;
        avcodec_free_context(&context);
        av_frame_free(&decoded);
        av_packet_free(&packet);
        sws_freeContext(converter);
        converter = nullptr;
        pendingBytes = 0;
    }

    bool open() {
        reset();
        const auto *codec = avcodec_find_decoder(AV_CODEC_ID_H264);
        if (!codec) return false;
        context = avcodec_alloc_context3(codec);
        parser = av_parser_init(AV_CODEC_ID_H264);
        decoded = av_frame_alloc();
        packet = av_packet_alloc();
        if (!(context && parser && decoded && packet)) return false;
        context->thread_count = 2;
        context->thread_type = FF_THREAD_SLICE;
        context->max_pixels = 8192 * 8192;
        context->flags |= AV_CODEC_FLAG_LOW_DELAY;
        return avcodec_open2(context, codec, nullptr) >= 0;
    }

    // The parser also handles codec configuration and access units split across packets.
    bool decode(QByteArray bytes, QImage &image, bool &produced) {
        int remaining = int(bytes.size());
        bytes.append(QByteArray(AV_INPUT_BUFFER_PADDING_SIZE, '\0'));
        auto *data = reinterpret_cast<const uint8_t *>(bytes.constData());
        while (remaining > 0) {
            uint8_t *unit = nullptr;
            int size = 0;
            const int used = av_parser_parse2(parser, context, &unit, &size, data, remaining,
                                              AV_NOPTS_VALUE, AV_NOPTS_VALUE, 0);
            if (used < 0 || (used == 0 && size == 0)) return false;
            pendingBytes += size_t(used);
            if (pendingBytes > 16 * 1024 * 1024) return false;
            data += used;
            remaining -= used;
            if (!size) continue;
            pendingBytes = 0;
            if (av_new_packet(packet, size) < 0) return false;
            std::memcpy(packet->data, unit, size_t(size));
            const int sent = avcodec_send_packet(context, packet);
            av_packet_unref(packet);
            if (sent < 0) return false;
            for (;;) {
                const int received = avcodec_receive_frame(context, decoded);
                if (received == AVERROR(EAGAIN) || received == AVERROR_EOF) break;
                if (received < 0) return false;
                // XRGB8888 matches QImage's native-endian RGB32 pixel layout.
                converter = sws_getCachedContext(converter, decoded->width, decoded->height,
                    AVPixelFormat(decoded->format), decoded->width, decoded->height, AV_PIX_FMT_RGB32,
                    SWS_FAST_BILINEAR, nullptr, nullptr, nullptr);
                if (!converter) return false;
                if (image.size() != QSize(decoded->width, decoded->height))
                    image = QImage(decoded->width, decoded->height, QImage::Format_RGB32);
                if (image.isNull()) return false;
                uint8_t *planes[] = {image.bits()};
                int strides[] = {int(image.bytesPerLine())};
                const int rows = sws_scale(converter, decoded->data, decoded->linesize,
                    0, decoded->height, planes, strides);
                av_frame_unref(decoded);
                if (rows != image.height()) return false;
                produced = true;
            }
        }
        return true;
    }
};

// Use portrait as the initial view for a landscape sensor stream. The manual
// adjustment also covers phones which deliver already rotated or inverted frames.
inline QImage orientCameraFrame(const QImage &frame, bool front, int quarterTurns) {
    if (frame.isNull()) return {};
    const int portraitTurns = frame.width() > frame.height() ? (front ? 3 : 1) : 0;
    const int angle = ((portraitTurns + quarterTurns) % 4) * 90;
    return angle ? frame.transformed(QTransform().rotate(angle)) : frame;
}

class MirrorScreen final : public QWidget {
    QImage image;
public:
    QRect videoRect() const {
        if (image.isNull()) return {};
        const auto area = contentsRect();
        const auto size = image.size().scaled(area.size(), Qt::KeepAspectRatio);
        return QRect(area.topLeft() + QPoint((area.width() - size.width()) / 2,
                     (area.height() - size.height()) / 2), size);
    }
    void swapFrame(QImage &frame) { image.swap(frame); update(); }
    void clear() { image = {}; update(); }
protected:
    void paintEvent(QPaintEvent *) override {
        QPainter painter(this);
        painter.fillRect(rect(), QColor(21, 23, 27));
        if (!image.isNull()) painter.drawImage(videoRect(), image);
    }
};
