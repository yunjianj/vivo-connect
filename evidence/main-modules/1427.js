// analysis/pretty/main.js:105245; webpack module 1427
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.sleep = t.hideWinInactiveOnMac = t.send2Main = void 0;
    const r = n(2), i = n(11);
    function o(e, t) {
        const n = global.__mainWindow;
        null == n || n.isDestroyed() ? global.__cm__mpLog.error("[oi]send 2 main error") : n.webContents.send(e, t);
    }
    t.send2Main = o, t.hideWinInactiveOnMac = function(e) {
        r.ipcMain.once(i.WINDOW_MESSAGE_ENUM.GET_MAIN_WINDOW_VISIBLITY_STATE_REPLY, (t, n) => {
            global.__cm__mpLog.info("visibleState:" + n.visibleState);
            const r = global.__mainWindow;
            "hidden" != n.visibleState || null == r || r.isDestroyed() || r.isFullScreen() || null == r || r.hide(), 
            e();
        }), o(i.WINDOW_MESSAGE_ENUM.GET_MAIN_WINDOW_VISIBLITY_STATE);
    }, t.sleep = function(e) {
        return new Promise(t => setTimeout(t, e));
    };
}
