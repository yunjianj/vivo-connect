// analysis/pretty/main.js:128235; webpack module 1677
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.bindAppLifecycle = void 0;
    const r = n(0), i = r.__importDefault(n(8)), o = n(2), a = r.__importDefault(n(6)), s = r.__importDefault(n(354)), l = n(63), c = n(11), u = n(787), d = r.__importDefault(n(733)), h = r.__importDefault(n(1)), p = n(4), f = r.__importDefault(n(349)), _ = "darwin" === i.default.platform(), m = "win32" === i.default.platform();
    t.bindAppLifecycle = () => {
        o.app.on("did-become-active", () => {
            var e, t;
            0 === o.BrowserWindow.getAllWindows().filter(e => {
                var t;
                return e.isVisible() && !e.isMinimized() && e.id !== (null === (t = global.__mainWindow) || void 0 === t ? void 0 : t.id);
            }).length && _ && (null === (e = global.__mainWindow) || void 0 === e ? void 0 : e.isMinimized()) && (null === (t = global.__mainWindow) || void 0 === t || t.restore());
        }), o.app.on("activate", () => {
            var e, t, n, r, i;
            try {
                if (global.__log.info("[app lifecycle] activate"), null === global.__mainWindow) l.createWindow(); else {
                    !global.__windows.get("welcome") && o.app.isReady() && (global.__log.info("[app lifecycle] activate welcome"), 
                    o.app.show(), _ && global.__mainWindow && (global.__log.info(`[app lifecycle] activate mainWindowState,mainWindowBounds: ${JSON.stringify(global.__mainWindow.getBounds())},isVisible:${global.__mainWindow.isVisible()},isNormal:${global.__mainWindow.isNormal()}`), 
                    global.__log.info(`[app lifecycle] activate mainWindowState, isMin: ${global.__mainWindow.isMinimized()}, isMax: ${global.__mainWindow.isMaximized()}, isFull: ${global.__mainWindow.isFullScreen()}`)), 
                    (null === (e = global.__mainWindow) || void 0 === e ? void 0 : e.isMinimized()) ? null === (t = global.__mainWindow) || void 0 === t || t.restore() : null === (n = global.__mainWindow) || void 0 === n || n.show(), 
                    null === (i = null === (r = global.__mainWindow) || void 0 === r ? void 0 : r.webContents) || void 0 === i || i.send(c.APP_MESSAGE_ENUM.EXPORT_PCSUITE_REPORT)), 
                    global.__log.info("activate show window");
                }
            } catch (e) {
                global.__log.info("[app lifecycle] activate error:" + e), l.createWindow();
            }
        }), o.app.on("before-quit", e => {
            var t, n, r, i, a, s;
            global.__log.info("[app lifecycle] before-quit:" + global.__quitFlag), global.__quitFlag || (global.__log.info("[app lifecycle] stop-quit:" + global.__quitFlag), 
            null === (n = null === (t = global.__mainWindow) || void 0 === t ? void 0 : t.webContents) || void 0 === n || n.send(c.APP_MESSAGE_ENUM.QUIT_EVENT_CHECKT, 0), 
            (null === (r = global.__mainWindow) || void 0 === r ? void 0 : r.isDestroyed()) || (e.preventDefault(), 
            (null === (i = global.__mainWindow) || void 0 === i ? void 0 : i.isMinimized()) ? null === (a = global.__mainWindow) || void 0 === a || a.restore() : null === (s = global.__mainWindow) || void 0 === s || s.focus(), 
            v && clearTimeout(v), v = setTimeout(() => {
                global.__log.info("[app lifecycle] before-quit: renderer unresponsive (5s timeout), force quit"), 
                global.__quitFlag = !0, o.app.quit();
            }, 5e3))), global.__log.info("[app lifecycle] before-quit is console:" + global.__quitFlag), 
            _ && (global.__quitFromDock = !0);
        }), o.app.on("will-quit", y), o.app.on("quit", () => {
            global.__log.info("[app lifecycle] quit");
        }), function() {
            o.app.on("render-process-gone", (e, t, n) => r.__awaiter(this, void 0, void 0, function*() {
                var e;
                if (global.__log.info(`\n      *********  render-process-gone  *********\n      reason: ${(null == n ? void 0 : n.reason) && JSON.stringify(n.reason)}\n      loadavg: ${JSON.stringify(i.default.loadavg())}\n      totalmem: ${JSON.stringify(i.default.totalmem())}\n      freemem: ${JSON.stringify(i.default.freemem())}\n      *********  render-process-gone  *********`), 
                global.__log.info(`render-progress-gone webContents.id :${t.id}, title: ${t.getTitle()}, url: ${t.getURL()}`), 
                (null === (e = global.__mainWindow) || void 0 === e ? void 0 : e.webContents.id) != t.id) return void global.__log.info("render-progress-gone  not mainWindow, continue");
                if ("killed" == n.reason && (1073807364 == n.exitCode || 1 == n.exitCode)) return global.__log.info("render-progress-gone because of shutdown， app.exit, exitCode: " + n.exitCode), 
                void o.app.exit(n.exitCode);
                o.dialog.showMessageBox({
                    type: "error",
                    title: "vivo办公套件",
                    message: "抱歉，vivo办公套件运行异常，请点击重新加载或退出应用。",
                    buttons: [ "退出", "重新加载" ]
                }).then(e => {
                    global.__log.info("[render-process-gone] - " + e.response), 1 === e.response ? (() => {
                        var e;
                        global.__log.info("[reloadWindow] - start"), (null === (e = global.__mainWindow) || void 0 === e ? void 0 : e.isDestroyed()) ? (global.__log.info("[reloadWindow] - relaunch"), 
                        o.app.relaunch(), o.app.exit(0)) : (global.__log.info("[reloadWindow] - reloadWindow"), 
                        o.BrowserWindow.getAllWindows().forEach(e => {
                            var t;
                            e.id !== (null === (t = global.__mainWindow) || void 0 === t ? void 0 : t.id) && e.destroy();
                        }), global.__log.info("[reloadWindow] - end"), o.app.relaunch(), o.app.exit(0));
                    })() : o.app.quit();
                });
            })), o.app.on("renderer-process-crashed", () => r.__awaiter(this, void 0, void 0, function*() {
                global.__log.info("renderer-process-crashed");
            }));
        }(), o.ipcMain.on(c.APP_MESSAGE_ENUM.QUIT_EVENT_COMPLETE, (e, t) => {
            global.__log.info("[QUIT_EVENT_COMPLETE] :" + t), v && (clearTimeout(v), v = null), 
            global.__quitFlag = !0, o.app.quit();
        }), o.ipcMain.on(c.APP_MESSAGE_ENUM.QUIT_FLAG_CHANGE, (e, t) => {
            global.__log.info(`[QUIT_FLAG_CHANGE]:${t} `), v && (clearTimeout(v), v = null), 
            global.__quitFlag = !1;
        });
    };
    let g = !1, v = null;
    function y(e) {
        return r.__awaiter(this, void 0, void 0, function*() {
            global.__log.info("[app lifecycle] will-quit");
            try {
                const {setReportSwitchEnabled: e} = n(799), t = a.default.getItem("reportSwitch"), r = null == t || 1 == t;
                e(r), global.__log.info("[app-lifecycle] 退出时写入埋点开关配置: enabled=" + r);
            } catch (e) {
                global.__log.error("[app-lifecycle] 写入埋点开关配置失败: " + e);
            }
            try {
                n(26).default.reportMemoryMetrics();
            } catch (e) {
                global.__log.error("[app-lifecycle] failed to report memory metrics on quit: " + e);
            }
            g ? global.__log.info("[app lifecycle] will-quit success") : (global.__log.info("[app lifecycle] production will-quit" + g), 
            g = !0, yield function() {
                return global.__log.info("[app lifecycle] will-quit quitClearTask"), new Promise((e, t) => r.__awaiter(this, void 0, void 0, function*() {
                    try {
                        m && (a.default.setItem("openTime", {
                            openTime: ""
                        }), global.__appIcon && global.__appIcon.destroy()), a.default.getItem("appAiSearchGuide.isShow") && a.default.setItem("appAiSearchGuide", {
                            onceShowed: !0,
                            isShow: !1
                        }), yield function() {
                            return r.__awaiter(this, void 0, void 0, function*() {
                                try {
                                    const e = h.default.resolve("" + o.app.getPath("appData"), "pcsuite/data/Notification");
                                    global.__log.info("[app lifecycle][clearNotificationThumb] remove Notification cache: " + e);
                                    p.readdirSync(e).forEach(t => {
                                        try {
                                            const n = h.default.join(e, t);
                                            p.statSync(n).isFile() && p.unlinkSync(n);
                                        } catch (e) {
                                            global.__log.error("[app lifecycle]clearNotificationThumb  error: " + e);
                                        }
                                    });
                                } catch (e) {
                                    global.__log.info("[app lifecycle][clearNotificationThumb]  remove Notification cache error: " + (e.message || e));
                                }
                            });
                        }(), yield u.FmModuleStopDragPlugin(), yield s.default.getInstance().killProcess(), 
                        yield f.default.getInstance().closeAllWithIdToast();
                        const t = n(95).default;
                        yield t.DestoryHttpServer(), yield d.default.finishAllTask(), global.__log.info("[app lifecycle] will-quit done"), 
                        e(!0);
                    } catch (e) {
                        global.__log.info("[common.ts] HttpServer.DestoryHttpServer() error: ", e), t(!0);
                    }
                }));
            }(), global.__log.info("[app lifecycle] quitClearTask success!"));
        });
    }
}
