// analysis/pretty/main.js:19052; webpack module 147
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    const r = n(0), i = n(11), o = r.__importDefault(n(209)), a = n(2), s = n(46), l = r.__importDefault(n(148)), c = r.__importDefault(n(26)), u = r.__importDefault(n(343)), d = r.__importDefault(n(109)), h = n(234), p = r.__importDefault(n(50)), f = n(66), _ = r.__importDefault(n(6)), m = r.__importDefault(n(110)), {isMac: g} = c.default.getSysEnv;
    class v extends o.default {
        constructor() {
            super();
        }
        static getInstance() {
            return this.instance || (this.instance = new v), this.instance;
        }
        broadcastSysEvent(e, t) {
            global.__log.info(`[framework]system event broadcast:${e},data:${t}`), this.broadcastEvent(e, t);
        }
        broadcastLockScreen() {
            this.broadcastEvent(i.APP_MESSAGE_ENUM.SYSTEM_LOCK_SCREEN_MESSAGE);
        }
        broadcastUnLockScreen() {
            this.broadcastEvent(i.APP_MESSAGE_ENUM.SYSTEM_UNLOCK_SCREEN_MESSAGE);
        }
        broadcastSuspend() {
            this.broadcastEvent(i.APP_MESSAGE_ENUM.SYSTEM_SUSPEND_MESSAGE);
        }
        broadcastResume() {
            this.broadcastEvent(i.APP_MESSAGE_ENUM.SYSTEM_RESUME_MESSAGE);
        }
        broadcastIdle(e) {
            this.broadcastEvent(i.APP_MESSAGE_ENUM.APP_IDLE_TIMEOUT, e);
        }
        broadcastSynsRestore() {
            this.broadcastEvent(i.APP_MESSAGE_ENUM.APP_SYNS_RESTORE);
        }
        broadcastSynsSuspend() {
            this.broadcastEvent(i.APP_MESSAGE_ENUM.APP_SYNS_SUSPEND);
        }
        broadcastSynsReduce() {
            this.broadcastEvent(i.APP_MESSAGE_ENUM.APP_SYNS_REDUCE);
        }
        broadcastServiceStop() {
            this.broadcastEvent(i.APP_MESSAGE_ENUM.SERVICE_STOPPING_MESSAGE);
        }
        broadcastServiceStopEnd() {
            this.broadcastEvent(i.APP_MESSAGE_ENUM.SERVICE_STOP_COMPLETE_MESSAGE);
        }
        broadcastAppQuit() {
            this.broadcastEvent(i.APP_MESSAGE_ENUM.APP_EXIT_MESSAGE);
        }
        broadcastAppServerRoom() {
            setTimeout(() => {
                global.__log.info("broadcastAppServerRoom"), this.broadcastEvent(i.APP_MESSAGE_ENUM.APP_SERVER_ROOM_SYNC), 
                setTimeout(() => {
                    global.__log.info("broadcastAppServerRoom delay 15s"), this.broadcastEvent(i.APP_MESSAGE_ENUM.APP_SERVER_ROOM_SYNC);
                }, 1e4);
            }, 5e3);
        }
        registerIpcEvent() {
            a.ipcMain.on(i.APP_MESSAGE_ENUM.SEND_MAINWINDOW_SHOW, () => {
                var e, t, n, r;
                (null === (e = this.mainWindow) || void 0 === e ? void 0 : e.isMinimized()) && (null === (t = this.mainWindow) || void 0 === t || t.restore()), 
                null === (n = this.mainWindow) || void 0 === n || n.show(), null === (r = this.mainWindow) || void 0 === r || r.setAlwaysOnTop(!0), 
                setTimeout(() => {
                    var e, t;
                    null === (e = this.mainWindow) || void 0 === e || e.setAlwaysOnTop(!1), null === (t = this.mainWindow) || void 0 === t || t.focus();
                }, 100);
            }), a.ipcMain.on(i.APP_MESSAGE_ENUM.OPEN_MAIN_BROWSER, () => {
                var e, t, n, r;
                const i = null === (e = this.mainWindow) || void 0 === e ? void 0 : e.isVisible(), o = null === (t = this.mainWindow) || void 0 === t ? void 0 : t.isFullScreen(), a = null === (n = this.mainWindow) || void 0 === n ? void 0 : n.isMinimized();
                let l;
                global.__log.info(`APP_MESSAGE_ENUM.OPEN_MAIN_BROWSER isFullScreen: ${o}, isMinimized ${a}`), 
                i || (this.mainWindow && !s.welcomeWindowIsExist() ? (global.__log.info("APP_MESSAGE_ENUM.OPEN_MAIN_BROWSER set top"), 
                null === (r = this.mainWindow) || void 0 === r || r.setAlwaysOnTop(!0), clearTimeout(l), 
                l = setTimeout(() => {
                    var e;
                    null === (e = this.mainWindow) || void 0 === e || e.setAlwaysOnTop(!1);
                }, 500), this.mainWindow.show()) : global.__log.info("APP_MESSAGE_ENUM.OPEN_MAIN_BROWSER error"));
            }), a.ipcMain.handle(i.APP_MESSAGE_ENUM.GET_WINDOW_ID, (e, {moduleName: t, isMainWindow: n}) => {
                var r;
                if (global.__log.info(`GET_WINDOW_ID, isMainWindow: ${n}， moduleName: ${t}`), n) return null === (r = this.mainWindow) || void 0 === r ? void 0 : r.id;
                const i = a.BrowserWindow.fromWebContents(e.sender);
                return null == i ? void 0 : i.id;
            }), a.ipcMain.on(i.APP_MESSAGE_ENUM.APP_THEME_SCHEME_CHANGE, (e, t) => {
                this.broadcastEvent(i.APP_MESSAGE_ENUM.APP_THEME_SCHEME_SYNC, t);
            }), a.ipcMain.on(i.APP_MESSAGE_ENUM.APP_THEME_COLOR_CHANGE, (e, t) => {
                this.broadcastEvent(i.APP_MESSAGE_ENUM.APP_THEME_COLOR_SYNC, t);
            }), a.ipcMain.on(i.APP_MESSAGE_ENUM.APP_LANG_SCHEME_CHANGE, (e, {lang: t, isRtl: n}) => {
                if (this.broadcastEvent(i.APP_MESSAGE_ENUM.APP_LANG_SCHEME_SYNC, {
                    lang: t,
                    isRtl: n
                }), u.default.setRtl(t, n), g && this.mainWindow) {
                    const {width: e = 0} = this.mainWindow.getBounds();
                    if (this.mainWindow.setTrafficLightPosition({
                        x: u.default.isRealRtl() ? e - 13 - 60 : 13,
                        y: 16
                    }), u.default.isRealRtl()) {
                        const [e, t] = this.mainWindow.getSize();
                        this.mainWindow.setSize(e + 1, t), this.mainWindow.setSize(e, t);
                    }
                }
            }), a.ipcMain.handle(i.APP_MESSAGE_ENUM.GET_IS_UNDER_WINDOWS_10, () => {
                if ("win32" == process.platform) {
                    const e = l.default.getSystemVersion();
                    return parseInt(e + "") < 10;
                }
                return !1;
            }), a.ipcMain.on(i.APP_MESSAGE_ENUM.OPEN_PROJECTION_SETTINGS, () => {
                global.__log.info("OPEN_PROJECTION_SETTINGS start"), l.default.openProjectionSetting();
            }), a.ipcMain.on(i.APP_MESSAGE_ENUM.OPEN_PRIVACY_SECURITY_SETTINGS, () => {
                global.__log.info("OPEN_PRIVACY_SECURITY_SETTINGS start"), l.default.openPrivacySecuritySetting();
            }), a.ipcMain.on(i.APP_MESSAGE_ENUM.OPEN_LOGIN_ITEMS_EXTENSION_SETTINGS, () => {
                global.__log.info("OPEN_LOGIN_ITEMS_EXTENSION_SETTINGS start"), l.default.openLoginItemsExtensionSetting();
            }), a.ipcMain.on(i.APP_MESSAGE_ENUM.NETWORK_STATUS_CHANGE, (e, t) => {
                global.__windows.forEach(e => {
                    var n;
                    (null == e ? void 0 : e.isMainBrowser) || (global.__log.info("NETWORK_STATUS_CHANGE broadcast: " + t), 
                    null === (n = null == e ? void 0 : e.webContents) || void 0 === n || n.send(i.APP_MESSAGE_ENUM.BROADCAST_NETWORK_STATUS_CHANGE, t));
                });
                const n = {
                    msg: {
                        cmd: h.CommonMsg.NETWORK_CHANGES,
                        exdata: JSON.stringify({
                            status: t
                        }),
                        moduleId: h.SyncModuleEnum.SYNC_MODULE_COMMON
                    },
                    moduleId: h.SyncModuleEnum.SYNC_MODULE_COMMON
                };
                d.default.getInstance().sendServiceMsg(n);
            }), a.ipcMain.on(i.APP_MESSAGE_ENUM.OPEN_DISPLAY_SETTINGS, () => {
                global.__log.info("OPEN_DISPLAY_SETTINGS start"), l.default.openDisplaySetting();
            }), a.ipcMain.on(i.APP_MESSAGE_ENUM.OPEN_PC_RENAME_SETTINGS, () => {
                global.__log.info("OPEN_PC_RENAME_SETTINGS start"), l.default.openPcRenameSetting();
            }), a.ipcMain.handle(i.APP_MESSAGE_ENUM.GET_SUITE_MEMORY_INFO, () => (global.__log.info("GET_SUITE_MEMORY_INFO start"), 
            c.default.getSuiteMemoryInfo())), a.ipcMain.on("REPORT_MEMORY_METRICS", () => {
                global.__log.info("REPORT_MEMORY_METRICS start");
                try {
                    c.default.reportMemoryMetrics();
                } catch (e) {
                    global.__log.error("[IPC] failed to handle REPORT_MEMORY_METRICS: " + e);
                }
            }), p.default.$on(i.APP_MESSAGE_ENUM.GET_WINDOW_ID, (e, t) => {
                let n = a.BrowserWindow.fromWebContents(t.sender);
                return null == n ? void 0 : n.id;
            }), p.default.$on(f.FRAMEWORK_MSG.DRAG_WINDOW, ({x: e, y: t}) => {
                const n = a.BrowserWindow.getFocusedWindow();
                if (n) {
                    const r = n.getPosition();
                    e = r[0] + e, t = r[1] + t, n.setPosition(e, t, !0);
                }
            });
            const e = e => e.preventDefault();
            p.default.$on(f.FRAMEWORK_MSG.DRAG_WINDOW_START, () => {
                const t = a.BrowserWindow.getFocusedWindow();
                t && (global.__log.info("FRAMEWORK_MSG.DRAG_WINDOW_START"), t.addListener("will-resize", e));
            }), p.default.$on(f.FRAMEWORK_MSG.DRAG_WINDOW_END, () => {
                const t = a.BrowserWindow.getFocusedWindow();
                t && (global.__log.info("FRAMEWORK_MSG.DRAG_WINDOW_END"), t.removeListener("will-resize", e));
            }), p.default.$on(f.FRAMEWORK_MSG.STORAGE_SET, ({key: e, value: t}) => {
                _.default.setItem(e, t);
            }), p.default.$on(f.FRAMEWORK_MSG.STORAGE_GET, e => _.default.getItem(e)), p.default.$on("macUpgrade:getStatus", () => m.default.getInstance().getIsMacUpgrade()), 
            a.ipcMain.on(i.APP_MESSAGE_ENUM.LOGOUT, () => {
                global.__windows.forEach((e, t) => {
                    e && !e.isDestroyed() && (e.webContents.send(i.APP_MESSAGE_ENUM.LOGOUT), "string" == typeof t && t.startsWith("cloudWindow") && e.close());
                });
            });
        }
    }
    t.default = v;
}
