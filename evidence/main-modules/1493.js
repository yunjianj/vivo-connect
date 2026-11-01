// analysis/pretty/main.js:111632; webpack module 1493
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.getIconTypeByFilePaths = t.getIconTypeByFilePath = void 0;
    const r = n(141);
    function i(e) {
        var t;
        if (!e) return r.NOTICE_WIN_MSG_ITEM_ICON_TYPE.File;
        const n = (null === (t = e.split(".").pop()) || void 0 === t ? void 0 : t.toLowerCase()) || "";
        return [ "jpg", "jpeg", "png", "gif", "bmp", "webp", "svg" ].includes(n) ? r.NOTICE_WIN_MSG_ITEM_ICON_TYPE.Img : [ "mp4", "avi", "mov", "mkv", "flv", "wmv", "webm" ].includes(n) ? r.NOTICE_WIN_MSG_ITEM_ICON_TYPE.Video : [ "mp3", "wav", "ogg", "aac", "flac" ].includes(n) ? r.NOTICE_WIN_MSG_ITEM_ICON_TYPE.Audio : [ "pdf", "doc", "docx", "xls", "xlsx", "ppt", "pptx", "txt" ].includes(n) ? r.NOTICE_WIN_MSG_ITEM_ICON_TYPE.Doc : r.NOTICE_WIN_MSG_ITEM_ICON_TYPE.File;
    }
    t.getIconTypeByFilePath = i, t.getIconTypeByFilePaths = function(e) {
        if (!e) return r.NOTICE_WIN_MSG_ITEM_ICON_TYPE.File;
        const t = i(e[0]);
        return e.every(e => t == i(e)) ? t : r.NOTICE_WIN_MSG_ITEM_ICON_TYPE.File;
    };
}
