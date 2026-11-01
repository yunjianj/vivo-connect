// analysis/pretty/main.js:131441; webpack module 1711
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.bindPowerMonitorLifecycle = void 0;
    const r = n(0), i = n(2), o = n(11), a = r.__importDefault(n(6)), s = r.__importDefault(n(147)), l = r.__importDefault(n(26)), c = r.__importDefault(n(360)), {isWin: u, isMac: d} = l.default.getSysEnv, h = s.default.getInstance();
    let p = !1, f = !1, _ = !1;
    function m(e) {
        const t = null == e ? void 0 : e.webContents;
        if (!t || t.isDestroyed()) return;
        global.__log.info("[renderer-health] checking renderer health...");
        let n = !1;
        const r = setTimeout(() => {
            n || (n = !0, global.__log.info("[renderer-health] renderer unresponsive (5s timeout), reloading window"), 
            t.isDestroyed() || t.reload());
        }, 5e3);
        t.executeJavaScript("1+1").then(() => {
            n || (n = !0, clearTimeout(r), global.__log.info("[renderer-health] renderer responsive, OK"));
        }).catch(e => {
            n || (n = !0, clearTimeout(r), global.__log.info("[renderer-health] renderer check error: " + ((null == e ? void 0 : e.message) || e)));
        });
    }
    t.bindPowerMonitorLifecycle = function() {
        setInterval(() => {
            let e = i.powerMonitor.getSystemIdleTime();
            if (600 === e) return h.broadcastIdle(!0), void (p = !0);
            e > 600 || e < 600 && p && (h.broadcastIdle(!1), p = !1);
        }, 1e3), i.powerMonitor.on("lock-screen", () => {
            const e = global.__mainWindow;
            global.__log.info(`powerMonitor lock-screen isFoucsed: ${null == e ? void 0 : e.isFocused()} isAlwaysOnTop: ${null == e ? void 0 : e.isAlwaysOnTop()}`), 
            (null == e ? void 0 : e.isDestroyed()) || (_ = !!(null == e ? void 0 : e.isAlwaysOnTop()), 
            u && (null == e ? void 0 : e.isVisible()) && !e.isMinimized() && (f = !0, null == e || e.minimize(), 
            global.__log.info("[framework] lock-screen unMinimized minimize window")), h.broadcastLockScreen());
        }), i.powerMonitor.on("unlock-screen", () => {
            var e;
            const t = global.__mainWindow;
            if (!(null == t ? void 0 : t.isDestroyed())) {
                if (global.__log.info("unlock-screen isVisible: " + (null == t ? void 0 : t.isVisible())), 
                global.__log.info("unlock-screen isMinimized: " + (null == t ? void 0 : t.isMinimized())), 
                u && f && (global.__log.info("[framework] unlock-screen restore window"), f = !1, 
                null == t || t.restore()), h.broadcastUnLockScreen(), (null == t ? void 0 : t.isVisible()) && !t.isMinimized() ? (h.broadcastSynsRestore(), 
                u && (global.__log.info("unlock-screen win top " + _), null == t || t.flashFrame(!1), 
                null == t || t.setAlwaysOnTop(!0), null == t || t.blur(), setTimeout(() => {
                    null == t || t.setAlwaysOnTop(!1), null == t || t.focus();
                }, 100), _ = !1), d && !(null == t ? void 0 : t.isFocused()) && (global.__log.info("unlock-screen mac foucs"), 
                setTimeout(() => null == t ? void 0 : t.focus(), 100)), d && m(t)) : h.broadcastSynsReduce(), 
                d) {
                    let n = a.default.getItem("updateTime"), r = new Date, i = (r.getTime() - n) / 1e3 / 60 / 60;
                    global.__log.info("unlock-screen hoursDiff " + i), i >= 48 && (null === (e = null == t ? void 0 : t.webContents) || void 0 === e || e.send(o.APP_MESSAGE_ENUM.MAC_CHEK_UPDATE_AGAIN), 
                    a.default.setItem("updateTime", r.getTime()));
                }
                c.default.checkPatchInfo();
            }
        }), i.powerMonitor.on("suspend", () => {
            global.__log.info("powerMonitor suspend"), h.broadcastSuspend();
        }), i.powerMonitor.on("resume", () => {
            global.__log.info("powerMonitor resume"), h.broadcastResume();
            const e = global.__mainWindow;
            (null == e ? void 0 : e.isDestroyed()) || (u && (f && (global.__log.info("[framework] resume restore window (S0 recovery)"), 
            f = !1, null == e || e.restore()), null == e || e.setAlwaysOnTop(!0), null == e || e.blur(), 
            setTimeout(() => {
                null == e || e.setAlwaysOnTop(!1), null == e || e.focus();
            }, 100)), d && (null == e ? void 0 : e.isVisible()) && !e.isMinimized() && !(null == e ? void 0 : e.isFocused()) && (global.__log.info("resume mac foucs"), 
            setTimeout(() => null == e ? void 0 : e.focus(), 100)), d && (null == e ? void 0 : e.isVisible()) && !e.isMinimized() && m(e));
        }), i.ipcMain.on("renderer-severe-freeze", (e, {lag: t}) => {
            global.__log.info(`[FreezeDetector] renderer severe freeze reported, lag=${t}ms`);
            const n = global.__mainWindow;
            (null == n ? void 0 : n.isDestroyed()) || u && f && (global.__log.info("[framework] freeze recovery: restore window"), 
            f = !1, null == n || n.restore());
        });
    };
}
