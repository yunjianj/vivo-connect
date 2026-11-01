// analysis/pretty/main.js:38192; webpack module 356
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    const r = n(0), i = n(2), o = r.__importDefault(n(230)), a = n(231), s = n(719), l = r.__importDefault(n(26)), c = n(139), u = n(140), d = n(160), h = r.__importDefault(n(720)), p = r.__importDefault(n(65)), f = r.__importDefault(n(50)), _ = n(66), m = n(81), g = "darwin" == process.platform;
    class v {
        constructor() {
            this.isViewMounted = !1, this.isCreateWin = !1, this.sendQueue = Promise.resolve(), 
            this.handleUnlockScreen = () => r.__awaiter(this, void 0, void 0, function*() {
                var e, t, n, r, i;
                if (null === (e = this.win) || void 0 === e ? void 0 : e.isVisible()) {
                    yield u.sleep(200);
                    const e = this.getPos();
                    if (!e) return;
                    const o = e.x, a = e.y;
                    global.__log.info(`[DownloadWindow]handleUnlockScreen, x: ${o}, y: ${a}, width: ${this.winWidth}, height: ${this.winHeight}`), 
                    null === (t = this.win) || void 0 === t || t.setBounds({
                        x: o,
                        y: a,
                        width: this.winWidth,
                        height: this.winHeight
                    }), null === (n = this.win) || void 0 === n || n.setVibrancy(null), null === (r = this.win) || void 0 === r || r.setBackgroundColor("#00000000");
                    const s = null === (i = this.win) || void 0 === i ? void 0 : i.getBounds();
                    global.__log.info("[DownloadWindow]handleUnlockScreen, bounds: " + JSON.stringify(s));
                }
            }), this.winWidth = 300, this.winHeight = 440, this.win = null;
        }
        static getInstance() {
            return this.instance || (this.instance = new v), this.instance;
        }
        init() {
            return r.__awaiter(this, void 0, void 0, function*() {
                global.__log.info("[DownloadWindow] init"), i.powerMonitor.on("unlock-screen", this.handleUnlockScreen), 
                o.default.on("show", e => {
                    this.handlePhoneCallWinVisibilityChange(!0, e);
                }).on("hide", e => {
                    this.handlePhoneCallWinVisibilityChange(!1, e);
                }), f.default.$on(_.FRAMEWORK_MSG.SET_PROGRESS_WIN_VIBRANCY, () => {
                    var e, t;
                    null === (e = this.win) || void 0 === e || e.setVibrancy(null), null === (t = this.win) || void 0 === t || t.setBackgroundColor("#00000000");
                }), f.default.$on(_.FRAMEWORK_MSG.CAMERA_SHARING_WINDOW_POSITION_CHANGED, () => {
                    this.reSetBounds();
                }), f.default.$on(_.FRAMEWORK_MSG.FEEDBACK_MESSAGE_WINDOW_POSITION_CHANGED, () => {
                    this.reSetBounds();
                });
            });
        }
        show() {
            var e, t, n, i, o;
            return r.__awaiter(this, void 0, void 0, function*() {
                if (null === (e = this.win) || void 0 === e || e.setSkipTaskbar(!0), null === (t = this.win) || void 0 === t || t.setIgnoreMouseEvents(!1), 
                null === (n = this.win) || void 0 === n ? void 0 : n.isMinimized()) return void this.restore();
                const r = this.getPos();
                if (!r) return void global.__log.info("[DownloadWindow] show no pos");
                if (!this.win) return void global.__log.info("[DownloadWindow] show no this.win");
                if (null === (i = global.__transparentWindows.get("notification")) || void 0 === i || i.setAlwaysOnTop(!0), 
                g ? this.win.setAlwaysOnTop(!0, "status") : this.win.setAlwaysOnTop(!0, "screen-saver"), 
                this.win.isVisible()) return;
                global.__log.info("[DownloadWindow] show");
                const a = r.x, s = r.y, l = d.WinAnimation.mainWindowHasRightDisplay(), c = a + (l ? 0 : this.winWidth);
                global.__log.info(`[DownloadWindow]show, setBounds x: ${a}, startX: ${c}, y: ${s}, width: ${this.winWidth}, height: ${this.winHeight}`), 
                this.win.setBounds({
                    x: c,
                    y: s,
                    width: this.winWidth,
                    height: this.winHeight
                }), this.win.showInactive(), l || this.startAnimation({
                    x: c,
                    y: s
                }, {
                    x: a,
                    y: s
                });
                const u = null === (o = this.win) || void 0 === o ? void 0 : o.getBounds();
                global.__log.info("[DownloadWindow]show, bounds: " + JSON.stringify(u)), l && !g && this.reShowWin({
                    x: a,
                    y: s
                });
            });
        }
        hide() {
            return r.__awaiter(this, void 0, void 0, function*() {
                if (null == this.win || this.win.isDestroyed()) return;
                global.__log.info("[DownloadWindow] hide");
                const [e, t] = this.win.getPosition();
                yield this.startAnimation({
                    x: e,
                    y: t
                }, {
                    x: e + this.winWidth,
                    y: t
                }), g ? yield new Promise(e => {
                    u.hideWinInactiveOnMac(() => {
                        this.destroy(), e();
                    }), setTimeout(() => {
                        e();
                    }, 2e3);
                }) : this.destroy();
            });
        }
        send(e, t) {
            return r.__awaiter(this, void 0, void 0, function*() {
                return this.sendQueue = this.sendQueue.then(() => r.__awaiter(this, void 0, void 0, function*() {
                    yield this.viewMounted(), null == this.win || this.win.isDestroyed() || (e !== c.IPC_NOTICE_WIN_MSG.ADD_NOTICE || this.win.isVisible() || (yield this.show()), 
                    this.win.webContents.send(e, t));
                })).catch(e => {
                    var t, n;
                    null === (n = null === (t = global.__log) || void 0 === t ? void 0 : t.error) || void 0 === n || n.call(t, "[DownloadWindow] send error: " + e);
                }), this.sendQueue;
            });
        }
        handleMinmize() {
            var e, t;
            global.__log.info("[DownloadWindow]handleMinmize"), g || null === (e = this.win) || void 0 === e || e.setSkipTaskbar(!1), 
            null === (t = this.win) || void 0 === t || t.minimize();
        }
        create() {
            var e, t, n, i;
            return r.__awaiter(this, void 0, void 0, function*() {
                if (this.isCreateWin) return;
                this.isCreateWin = !0, global.__log.info("[DownloadWindow]create");
                const r = {
                    width: this.winWidth,
                    height: this.winHeight,
                    frame: !1,
                    resizable: !1,
                    skipTaskbar: !0,
                    transparent: !0,
                    alwaysOnTop: !0,
                    movable: !1,
                    fullscreenable: !1,
                    acceptFirstMouse: g,
                    roundedCorners: !g,
                    useContentSize: !0,
                    maximizable: !1,
                    minimizable: !0,
                    hasShadow: !1,
                    backgroundColor: "#00000000",
                    trafficLightPosition: {
                        x: -999,
                        y: -999
                    },
                    webPreferences: {
                        webviewTag: !0,
                        webSecurity: !1,
                        nodeIntegration: !0,
                        preload: "",
                        contextIsolation: !1,
                        devTools: !0
                    },
                    show: !1
                };
                let o;
                return o = g ? yield p.default.newBrowserWindow(r) : yield h.default.newBrowserWindow(r), 
                o.setTitle(""), f.default.$emit(_.FRAMEWORK_MSG.UPDATE_ROUTE_PATH_OR_DATA, {
                    winId: o.id,
                    routePath: m.CHILD_WINDOW_ROUTES.PROGRESS_WIN
                }), o.setAlwaysOnTop(!0), global.__transparentWindows.set("download_window", o), 
                this.win = o, this.bindWebContentsLifeCycle(), null === (e = this.win) || void 0 === e || e.addListener("close", e => {
                    global.__log.info("[DownloadWindow]close"), global.__mainWindow && (e.preventDefault(), 
                    this.send(c.DOWNLOAD_WIN_MAIN.CLOSE_WINDOW));
                }), null === (t = this.win) || void 0 === t || t.addListener("focus", () => {
                    var e;
                    global.__log.info("[DownloadWindow]focus"), null === (e = this.win) || void 0 === e || e.setIgnoreMouseEvents(!1);
                }), null === (n = this.win) || void 0 === n || n.addListener("blur", () => {
                    var e;
                    global.__log.info("[DownloadWindow]blur"), null === (e = this.win) || void 0 === e || e.setIgnoreMouseEvents(!1);
                }), null === (i = this.win) || void 0 === i || i.addListener("will-move", e => {
                    global.__log.info("[DownloadWindow]will-move"), e.preventDefault();
                }), this.addMainWindowEvents(), o;
            });
        }
        reSetBounds() {
            var e, t;
            global.__log.info("[DownloadWindow] reSetBounds start");
            const n = this.getPos();
            if (!n) return;
            const r = n.x, i = n.y;
            global.__log.info(`[DownloadWindow]reSetBounds, x: ${r}, y: ${i}, width: ${this.winWidth}, height: ${this.winHeight}`), 
            null === (e = this.win) || void 0 === e || e.setBounds({
                x: r,
                y: i,
                width: this.winWidth,
                height: this.winHeight
            });
            const o = null === (t = this.win) || void 0 === t ? void 0 : t.getBounds();
            global.__log.info("[DownloadWindow]reSetBounds end bounds: " + JSON.stringify(o));
        }
        restore() {
            var e;
            global.__log.info("[DownloadWindow] restore start"), null === (e = this.win) || void 0 === e || e.restore(), 
            this.reSetBounds();
        }
        setIgnoreFalse() {
            var e;
            null === (e = this.win) || void 0 === e || e.setIgnoreMouseEvents(!1);
        }
        destroy() {
            null != this.win && (global.__log.info("[DownloadWindow]destroy"), this.win.destroy(), 
            this.win = null, this.isViewMounted = !1, this.isCreateWin = !1, global.__transparentWindows.delete("download_window"));
        }
        maybeDestroy() {
            null == this.win || this.win.isDestroyed() || this.win.isVisible() || (global.__log.info("[DownloadWindow]maybeDestroy"), 
            this.destroy());
        }
        startAnimation(e, t) {
            return new Promise(n => {
                d.WinAnimation.mainWindowHasRightDisplay() ? n() : null != this.win ? new d.WinAnimation(this.win, {
                    width: this.winWidth,
                    height: this.winHeight
                }, e, t, 150, 0, [ .18, .11, .39, .98 ]).on("end", n).start() : n();
            });
        }
        handlePhoneCallWinVisibilityChange(e, t) {
            if (null == this.win || null != this.notification) return;
            const n = this.win.getPosition(), r = n[1] + (e ? -(t + 30) : t + 30);
            this.win.setPosition(n[0], r);
        }
        bindWebContentsLifeCycle() {
            null == this.win || this.win.isDestroyed() || (this.win.webContents.on("render-process-gone", (e, t) => {
                global.__log.info(`[DownloadWindow]render-process-gone, code: ${t.exitCode}, reason: ${t.reason}`), 
                this.destroy();
            }), this.win.webContents.on("unresponsive", () => {
                global.__log.info("[DownloadWindow]unresponsive"), this.destroy();
            }));
        }
        getPos() {
            const e = l.default.getMainWindowCloestDisplayBounds();
            if (!e || null == this.win || this.win.isDestroyed()) return;
            const t = o.default.winHeight > 0 ? o.default.winHeight + 12 : 0, n = a.CameraSharingWindowInstance.winHeight > 0 ? a.CameraSharingWindowInstance.winHeight + 12 : 0, r = s.FeedbackMessageWindowInstance.winHeight > 0 ? s.FeedbackMessageWindowInstance.winHeight + 12 : 0, i = e.x + e.width - 300 - 30, c = e.y + e.height - 440 - 30 - t - n - r;
            return global.__log.info(`[DownloadWindow]getPos, bounds.height: ${e.height}, bounds.y: ${e.y}, bounds.width: ${e.width}, bounds.x: ${e.x}\n      , x: ${i}, y: ${c}`), 
            {
                x: i,
                y: c
            };
        }
        addMainWindowEvents() {
            setTimeout(() => {
                var e, t;
                global.__log.info("[DownloadWindow] mainWindow " + !!global.__mainWindow), null === (e = global.__mainWindow) || void 0 === e || e.addListener("focus", () => {
                    this.setIgnoreFalse();
                }), null === (t = global.__mainWindow) || void 0 === t || t.addListener("blur", () => {
                    this.setIgnoreFalse();
                });
            }, 5e3);
        }
        reShowWin(e) {
            setTimeout(() => {
                var t, n;
                const {x: r, y: i} = e;
                null === (t = this.win) || void 0 === t || t.setBounds({
                    x: r,
                    y: i,
                    width: this.winWidth,
                    height: this.winHeight
                }), null === (n = this.win) || void 0 === n || n.showInactive();
            }, 1e3);
        }
        viewMounted() {
            return !(!this.isViewMounted || !this.win || this.win.isDestroyed()) || (this.isViewMounted = !1, 
            new Promise(e => {
                f.default.$once(_.FRAMEWORK_EVENTS.PROGRESS_WIN_MOUNTED, () => {
                    this.isViewMounted = !0, e(!0);
                }), this.create();
            }));
        }
    }
    t.default = v.getInstance();
}
