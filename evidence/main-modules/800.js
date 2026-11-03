// analysis/pretty/main.js:73274; webpack module 800
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.handleOpenUrl = t.bindOpenUrlLifecycle = t.handleOpenUrlMainWindowFocus = void 0;
    const r = n(2), i = n(63), o = n(11), a = n(801), s = a.OPEN_URL;
    let l;
    const c = e => {
        var t;
        if (null == e ? void 0 : e.startsWith(s)) {
            const n = (null === (t = e.split("://")[1]) || void 0 === t ? void 0 : t.split("?")[0]) || "";
            if ([ a.OPEN_URL_PATH.SHARE_IMPORT ].includes(n)) try {
                const t = new URL(e);
                return {
                    type: n,
                    data: Object.fromEntries(t.searchParams.entries())
                };
            } catch (t) {
                global.__log.error(`[${s}] Failed to parse URL: ${e}`, t);
            }
        }
    }, u = e => {
        if (!(e = e || l)) return !1;
        if (!i.mainWindow) return l = e, !1;
        if (l = null, i.mainWindow.webContents.isLoading()) {
            l = e;
            const t = () => {
                l && (null === i.mainWindow || void 0 === i.mainWindow || i.mainWindow.webContents.send(o.APP_MESSAGE_ENUM.OPEN_URL_PARAMS, l), 
                global.__log.info(`[${s}] send params after did-finish-load: ${JSON.stringify(l)}`), 
                l = null), null === i.mainWindow || void 0 === i.mainWindow || i.mainWindow.webContents.removeListener("did-finish-load", t);
            };
            return i.mainWindow.webContents.once("did-finish-load", t), !1;
        }
        return null === i.mainWindow || void 0 === i.mainWindow || i.mainWindow.webContents.send(o.APP_MESSAGE_ENUM.OPEN_URL_PARAMS, e), 
        global.__log.info(`[${s}] success to params: ${JSON.stringify(e)}`), global.__windows.has("welcome") || (i.mainWindow.isMinimized() && i.mainWindow.restore(), 
        i.mainWindow.isVisible() || (global.__log.info("show mainwindow"), i.mainWindow.show()), 
        i.mainWindow.focus()), !0;
    };
    t.handleOpenUrlMainWindowFocus = u;
    t.bindOpenUrlLifecycle = () => {
        r.app.on("open-url", (e, t) => {
            const n = c(t);
            u(n);
        });
    };
    t.handleOpenUrl = e => {
        let t;
        return e.find(e => {
            const n = c(e);
            return !!n && (t = n, !0);
        }), u(t);
    };
}
