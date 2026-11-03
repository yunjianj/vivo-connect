// analysis/pretty/main.js:128190; webpack module 1676
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    const r = n(0), i = n(2), o = (n(126), n(46)), a = r.__importDefault(n(157)), s = {
        mainWindowMaximize(e, t) {
            const n = global.__mainWindow, r = null == n ? void 0 : n.isMaximized();
            if (n) {
                if (r) null == n || n.setBounds(o.removeEmptyKey(n.cacheBounds), !0), null == n || n.unmaximize(); else {
                    n.storeBounds();
                    const {width: e, height: t} = i.screen.getPrimaryDisplay().workArea;
                    null == n || n.setBounds(o.removeEmptyKey({
                        x: 0,
                        y: 0,
                        width: e,
                        height: t
                    })), a.default.getInstance().handleMainWindowMaximize(), null == n || n.maximize();
                }
                t({
                    isMax: !r
                });
            }
        },
        setLoginItemSettings(e, t) {
            console.error("设置自启动", e.openAtLogin), i.app.setLoginItemSettings({
                openAtLogin: e.openAtLogin
            }), t();
        },
        getLoginItemSettings(e, t) {
            t({
                openAtLogin: i.app.getLoginItemSettings().openAtLogin
            });
        },
        setWinShadow(e, t) {
            const n = global.__mainWindow;
            null == n || n.setHasShadow(e.flag), t({});
        },
        setBackground(e, t) {
            const n = global.__mainWindow, r = (null == n ? void 0 : n.getSize()) || [ 0, 0 ];
            null == n || n.setSize(r[0] + 1, r[1]), null == n || n.setSize(r[0], r[1]), null == n || n.setBackgroundColor(e.color), 
            t({});
        }
    };
    e.exports = s;
}
