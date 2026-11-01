// analysis/pretty/main.js:64289; webpack module 723
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.getFilesQuantifierAndType = t.getMimeCategoryFromSuffix = void 0;
    const r = n(0), i = r.__importDefault(n(1476)), o = r.__importDefault(n(1477)), a = n(724), s = n(141);
    t.getMimeCategoryFromSuffix = e => {
        let t = a.MimeCategoryType.UNKNOWN;
        if (e.includes(".")) {
            const n = e.lastIndexOf(".");
            let r = e.substring(n + 1);
            null == r && (r = ""), r = r.toLowerCase();
            const a = i.default.get(r) || "", s = o.default.get(a);
            null != s && (t = s);
        }
        return t;
    }, t.getFilesQuantifierAndType = function(e) {
        const n = [ a.MimeCategoryType.IMAGE_SET, a.MimeCategoryType.VIDEO_SET, a.MimeCategoryType.AUDIO_SET, a.MimeCategoryType.DOC_SET ], r = [ a.MimeCategoryType.PDF_SET, a.MimeCategoryType.WORD_SET, a.MimeCategoryType.PPT_SET, a.MimeCategoryType.EXCEL_SET, a.MimeCategoryType.CSV_SET, a.MimeCategoryType.TXT_SET ];
        let i = a.MimeCategoryType.UNKNOWN;
        for (let o = 0; o < e.length; o++) {
            const s = e[o];
            let l;
            if (l = s.fileType && s.fileType != a.MimeCategoryType.UNKNOWN ? s.fileType : t.getMimeCategoryFromSuffix(s.fileName || s.name || ""), 
            r.includes(l) && (l = a.MimeCategoryType.DOC_SET), !n.includes(l)) {
                i = a.MimeCategoryType.UNKNOWN;
                break;
            }
            if (0 != o) {
                if (l != i) {
                    i = a.MimeCategoryType.UNKNOWN;
                    break;
                }
            } else i = l;
        }
        switch (i) {
          case a.MimeCategoryType.IMAGE_SET:
            return s.NOTICE_WIN_MSG_ITEM_ICON_TYPE.Img;

          case a.MimeCategoryType.VIDEO_SET:
            return s.NOTICE_WIN_MSG_ITEM_ICON_TYPE.Video;

          case a.MimeCategoryType.DOC_SET:
            return s.NOTICE_WIN_MSG_ITEM_ICON_TYPE.Doc;

          case a.MimeCategoryType.AUDIO_SET:
            return s.NOTICE_WIN_MSG_ITEM_ICON_TYPE.Audio;

          default:
            return s.NOTICE_WIN_MSG_ITEM_ICON_TYPE.File;
        }
    };
}
