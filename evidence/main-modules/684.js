// analysis/pretty/main.js:61586; webpack module 684
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.notifyMainWindowBoundsDisplayChange = t.isDisplayUpdate = t.checkDisplayZoom = t.getDisplaysQuantity = t.displayMetricsChanged = t.bindScreenLifecycle = void 0;
    const r = n(0), i = n(2), o = n(63), a = r.__importDefault(n(26)), s = n(11), l = n(335), c = n(25), {isMac: u} = a.default.getSysEnv;
    let d, h, p;
    function f(e = !1, t = !1) {
        const {zoom: n, minWidth: r, minHeight: i, maxWidth: l, maxHeight: c} = a.default.getDisplayZoomFactor(), h = d - c, p = u && (null === o.mainWindow || void 0 === o.mainWindow ? void 0 : o.mainWindow.isFullScreen()) ? 160 : 80;
        if (global.__log.info("[displayMetricsChanged]change:" + h), d = c, Math.abs(h) < p && !e) t && g(h); else {
            if (o.mainWindow) {
                const [e, a] = o.mainWindow.getContentSize();
                if (t) {
                    const t = e > l ? l : Math.max(e, r), u = a > c ? c : Math.max(a, i);
                    global.__log.info(`displayMetricsChanged displayChange, ${l} x ${c}, ${e} x ${a}, ${t} x ${u}`), 
                    t == e && u == a || (o.mainWindow.setContentSize(t, u), global.__log.info("[displayMetricsChanged] displayChange zoom:" + n)), 
                    o.mainWindow.webContents.setZoomFactor(n), o.mainWindow.webContents.send(s.WINDOW_MESSAGE_ENUM.WINDOW_FACTOR_CHANGE, {
                        zoom: n
                    });
                } else o.mainWindow.setMinimumSize(r, i), o.mainWindow.setContentSize(e > r ? e : r, a > i ? a : i), 
                o.mainWindow.webContents.setZoomFactor(n), o.mainWindow.webContents.send(s.WINDOW_MESSAGE_ENUM.WINDOW_FACTOR_CHANGE, {
                    zoom: n
                }), global.__log.info("[displayMetricsChanged]zoom:" + n);
            }
            g(h);
        }
    }
    t.bindScreenLifecycle = function() {
        const {workAreaSize: {height: e}} = i.screen.getPrimaryDisplay();
        d = e, p = a.default.getCurrentDisplay().id, i.screen.on("display-metrics-changed", () => {
            _(!0);
        });
    }, t.displayMetricsChanged = f;
    const _ = c.debounce(f, 300, {
        leading: !1,
        trailing: !0
    });
    function m() {
        return h || (h = i.screen.getAllDisplays().length || 1), global.__log.info("[framework]getDisplaysQuantity:" + h), 
        h;
    }
    function g(e) {
        try {
            if (o.mainWindow) {
                const t = o.mainWindow.getBounds(), n = i.screen.getDisplayMatching(t), r = {
                    w: n.workArea.width,
                    h: n.workArea.height,
                    x: n.workArea.x,
                    y: n.workArea.y
                };
                global.__log.info("notifyMainWindowBoundsDisplayChange-workArea: " + JSON.stringify(r)), 
                null === o.mainWindow || void 0 === o.mainWindow || o.mainWindow.webContents.send(s.WINDOW_MESSAGE_ENUM.WINDOW_CUR_DISPLAY, r), 
                l.NotificationWindow.getInstance().adjustPosition(e);
            }
        } catch (e) {
            global.__log.error("[framework][screen.ts]notifyMainWindowBoundsDisplayChange error: " + (e.meesage || e));
        }
    }
    t.getDisplaysQuantity = m, t.checkDisplayZoom = function(e = 1) {
        var t, n, r;
        (null === (t = null === o.mainWindow || void 0 === o.mainWindow ? void 0 : o.mainWindow.webContents) || void 0 === t ? void 0 : t.getZoomFactor()) !== e && 1 == m() ? (null === o.mainWindow || void 0 === o.mainWindow || o.mainWindow.webContents.setZoomFactor(e), 
        null === o.mainWindow || void 0 === o.mainWindow || o.mainWindow.webContents.send(s.WINDOW_MESSAGE_ENUM.WINDOW_FACTOR_CHANGE, {
            zoom: e
        }), global.__log.info(`mainBrowser checkDisplayZoom reset zoom:${null === (n = null === o.mainWindow || void 0 === o.mainWindow ? void 0 : o.mainWindow.webContents) || void 0 === n ? void 0 : n.getZoomFactor()},zoom:${e}`)) : global.__log.info(`mainBrowser checkDisplayZoom zoom:${null === (r = null === o.mainWindow || void 0 === o.mainWindow ? void 0 : o.mainWindow.webContents) || void 0 === r ? void 0 : r.getZoomFactor()},zoom:${e}`);
    }, t.isDisplayUpdate = function() {
        const e = a.default.getCurrentDisplay();
        return e.id !== p && (p = e.id, !0);
    }, t.notifyMainWindowBoundsDisplayChange = g;
}
