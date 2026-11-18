#pragma once
#include <QtWidgets>
#include <QMimeDatabase>

// Use filename-based MIME detection: phone paths are not local files.
static QString fileIconCategory(const QString &name) {
    static const QSet<QString> archives={"zip","7z","rar","tar","gz","xz","bz2","zst","tgz","tbz","txz","iso"};
    const QString suffix=QFileInfo(name).suffix().toLower();
    if(archives.contains(suffix))return "archive";
    static const QMimeDatabase database;
    const QMimeType mime=database.mimeTypeForFile(name,QMimeDatabase::MatchExtension);
    if(mime.name().startsWith("audio/"))return "audio";
    if(mime.name().startsWith("video/"))return "video";
    if(mime.name().startsWith("image/"))return "image";
    if(mime.name().startsWith("text/") || mime.name()=="application/pdf" || mime.name().contains("document") || mime.name().contains("spreadsheet") || mime.name().contains("presentation"))return "document";
    return "file";
}
static QIcon phoneFileIcon(const QString &name,bool directory,QStyle *style) {
    if(directory)return QIcon::fromTheme("folder",style->standardIcon(QStyle::SP_DirIcon));
    static const QMimeDatabase database;
    const QMimeType mime=database.mimeTypeForFile(name,QMimeDatabase::MatchExtension);
    const QString category=fileIconCategory(name);
    const QHash<QString,QString> generic={{"audio","audio-x-generic"},{"video","video-x-generic"},{"image","image-x-generic"},{"archive","package-x-generic"},{"document","text-x-generic"}};
    QIcon icon=mime.name()=="application/octet-stream"?QIcon():QIcon::fromTheme(mime.iconName());
    if(icon.isNull() && generic.contains(category))icon=QIcon::fromTheme(generic.value(category));
    if(icon.isNull() && category=="file")icon=QIcon::fromTheme(mime.genericIconName());
    if(!icon.isNull())return icon;
    if(category=="file")return style->standardIcon(QStyle::SP_FileIcon);
    static QHash<QString,QIcon> fallback;
    if(fallback.contains(category))return fallback.value(category);
    const QHash<QString,QColor> colors={{"audio",QColor("#7256bf")},{"video",QColor("#b23b68")},{"image",QColor("#2b9867")},{"archive",QColor("#b66b19")},{"document",QColor("#3975b8")}};
    const QHash<QString,QString> labels={{"audio","♫"},{"video","▶"},{"image","●"},{"archive","ZIP"},{"document","DOC"}};
    QPixmap pixmap(64,64);pixmap.fill(Qt::transparent);QPainter p(&pixmap);p.setRenderHint(QPainter::Antialiasing);
    p.setPen(Qt::NoPen);p.setBrush(colors.value(category));p.drawRoundedRect(QRectF(5,5,54,54),10,10);
    p.setPen(Qt::white);QFont font=p.font();font.setBold(true);font.setPixelSize(category=="archive" || category=="document"?16:30);p.setFont(font);p.drawText(pixmap.rect(),Qt::AlignCenter,labels.value(category));p.end();
    fallback.insert(category,QIcon(pixmap));return fallback.value(category);
}
