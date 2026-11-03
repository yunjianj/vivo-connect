// analysis/pretty/main.js:131886; webpack module 1716
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.initNoteListener = void 0;
    const r = n(11), i = n(2);
    t.initNoteListener = function() {
        i.ipcMain.on(r.APP_MESSAGE_ENUM.APP_THEME_COLOR_CHANGE, (e, t) => {
            global.__windows.forEach((e, n) => {
                "string" == typeof n && n.startsWith("note") && e && !e.isDestroyed() && e.webContents.send(r.NOTE_MULTI_WINDOW.THEME_CHANGE, t);
            });
        }), i.ipcMain.on(r.APP_MESSAGE_ENUM.APP_LANG_SCHEME_CHANGE, (e, {lang: t, isRtl: n}) => {
            global.__windows.forEach((e, i) => {
                "string" == typeof i && i.startsWith("note") && e && !e.isDestroyed() && e.webContents.send(r.NOTE_MULTI_WINDOW.LANG_CHANGE, {
                    lang: t,
                    isRtl: n
                });
            });
        });
    };
}
