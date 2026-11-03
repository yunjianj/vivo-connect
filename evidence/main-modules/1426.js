// analysis/pretty/main.js:104964; webpack module 1426
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    const r = n(0), i = n(1427), o = n(160), a = n(1428), s = n(1429), l = r.__importDefault(n(235)), c = r.__importDefault(n(65)), u = r.__importDefault(n(50)), d = n(66), h = n(81), p = n(348), f = "darwin" == process.platform;
    t.default = class {
        constructor(e) {
            this.isInitialized = !1, this.initPromise = null, this.isInitializing = !1, this.windowId = e, 
            this.winWidth = 1020, this.winHeight = 600, this.winMinWidth = 1020, this.winMinHeight = 600, 
            this.win = null;
        }
        createAsync(e) {
            return r.__awaiter(this, void 0, void 0, function*() {
                return this.isInitializing ? this.initPromise : this.isInitialized ? Promise.resolve() : (this.isInitializing = !0, 
                this.initPromise = new Promise((t, n) => r.__awaiter(this, void 0, void 0, function*() {
                    try {
                        yield this.create(e), yield this.waitForInitialization(), this.isInitializing = !1, 
                        t();
                    } catch (e) {
                        this.isInitializing = !1, n(e);
                    }
                })), this.initPromise);
            });
        }
        waitForInitialization() {
            return new Promise((e, t) => {
                if (this.isInitialized) return void e();
                const n = setInterval(() => {
                    s.throttlePrintLog(() => {
                        global.__cm__mpLog.info(`[mediaPlayerWindow] ${this.windowId} ${this.isInitializing} ${this.isInitialized}`);
                    }), this.isInitialized && (clearInterval(n), clearTimeout(r), e());
                }, 50), r = setTimeout(() => {
                    clearInterval(n), t(new Error("Window initialization timeout for windowId: " + this.windowId));
                }, 15e3);
            });
        }
        create(e) {
            return null != this.win ? Promise.resolve(this.win) : new Promise((t, n) => r.__awaiter(this, void 0, void 0, function*() {
                var r, i, o, a, s, _;
                try {
                    const m = yield this.callRenderMethod("common.preview");
                    global.__cm__mpLog.info("[MediaPlayerWindow]create, title: " + m);
                    const g = {
                        title: m,
                        width: this.winWidth,
                        height: this.winHeight,
                        minWidth: this.winMinWidth,
                        minHeight: this.winMinHeight,
                        frame: !1,
                        resizable: !0,
                        skipTaskbar: !1,
                        transparent: !0,
                        alwaysOnTop: !1,
                        movable: !0,
                        fullscreenable: !0,
                        acceptFirstMouse: f,
                        roundedCorners: !f,
                        useContentSize: !1,
                        maximizable: !0,
                        minimizable: !0,
                        hasShadow: !1,
                        backgroundColor: "rgba(0, 0, 0, 0)",
                        webPreferences: {
                            nativeWindowOpen: !0,
                            webviewTag: !0,
                            webSecurity: !1,
                            nodeIntegration: !0,
                            preload: "",
                            contextIsolation: !1,
                            zoomFactor: 1,
                            devTools: !0
                        },
                        show: !1
                    };
                    "darwin" === process.platform ? Object.assign(g, {
                        titleBarStyle: "hiddenInset",
                        frame: !0,
                        trafficLightPosition: {
                            x: 12,
                            y: 18
                        }
                    }) : "win32" === process.platform && Object.assign(g, {
                        frame: !1
                    });
                    const v = yield c.default.newBrowserWindow(g);
                    v.setMaximizable(!0), v.setMenu(null), v.setTitle(m), u.default.$emit(d.FRAMEWORK_MSG.UPDATE_ROUTE_PATH_OR_DATA, {
                        winId: v.id,
                        routePath: h.CHILD_WINDOW_ROUTES.MEDIA_PLAYER,
                        data: {
                            windowId: this.windowId,
                            args: e
                        }
                    }), this.isInitialized = !0, p.windowTimingTracker.recordEndTime(this.windowId), 
                    global.__transparentWindows.set("media_player_win" + this.windowId, v), v.webContents.on("did-fail-load", (e, t, r) => {
                        global.__cm__mpLog.error(`[MediaPlayerWindow] Failed to load: ${t} - ${r}`), n(new Error("Failed to load: " + r));
                    }), this.win = v, this.bindWebContentsLifeCycle(), this.win.webContents.once("did-finish-load", () => {
                        global.__cm__mpLog.info("[media-player][主进程][窗口加载完成]，窗口ID：" + this.windowId), this.isInitialized = !0, 
                        p.windowTimingTracker.recordEndTime(this.windowId);
                    }), this.win.webContents.on("crashed", () => {
                        global.__cm__mpLog.error("[MediaPlayerWindow] WebContents crashed for window: " + this.windowId), 
                        this.isInitialized = !1;
                    }), null === (r = this.win) || void 0 === r || r.addListener("moved", () => {
                        global.__cm__mpLog.info("[MediaPlayerWindow]moved"), null == this.win || this.win.isDestroyed() || (global.__cm__mpLog.info("[media-player][主进程][moved]，窗口ID：" + this.windowId), 
                        this.send({
                            event: "media-player-window-moved",
                            payload: null,
                            type: 1
                        }));
                    }), null === (i = this.win) || void 0 === i || i.addListener("focus", () => {
                        var e;
                        global.__cm__mpLog.info("[MediaPlayerWindow]focus"), null == this.win || this.win.isDestroyed() || null === (e = this.win) || void 0 === e || e.setIgnoreMouseEvents(!1);
                    }), null === (o = this.win) || void 0 === o || o.addListener("blur", () => {
                        var e;
                        global.__cm__mpLog.info("[MediaPlayerWindow]blur"), null == this.win || this.win.isDestroyed() || null === (e = this.win) || void 0 === e || e.setIgnoreMouseEvents(!1);
                    }), null === (a = this.win) || void 0 === a || a.on("close", () => {
                        global.__cm__mpLog.info("[MediaPlayerWindow]close", this.windowId), p.windowTimingTracker.recordCloseTime(this.windowId), 
                        this.send({
                            event: "media-player-video-stop",
                            payload: null,
                            type: 1
                        }), this.isInitialized = !1, l.default.delete(this.windowId);
                    }), null === (s = this.win) || void 0 === s || s.addListener("maximize", () => {
                        global.__cm__mpLog.info("[MediaPlayerWindow]maximize"), null == this.win || this.win.isDestroyed() || this.win.webContents.send("common:win-status-changed", {
                            windowId: this.windowId,
                            isMaximized: !0
                        });
                    }), null === (_ = this.win) || void 0 === _ || _.addListener("unmaximize", () => {
                        global.__cm__mpLog.info("[MediaPlayerWindow]unmaximize"), null == this.win || this.win.isDestroyed() || this.win.webContents.send("common:win-status-changed", {
                            windowId: this.windowId,
                            isMaximized: !1
                        });
                    }), this.addMainWindowEvents(), t(v);
                } catch (e) {
                    n(e);
                }
            }));
        }
        init(e) {
            return this.createAsync(e);
        }
        show() {
            var e, t, n, i, o, a, s, l;
            return r.__awaiter(this, void 0, void 0, function*() {
                if (null === (e = this.win) || void 0 === e || e.setSkipTaskbar(!1), null === (t = this.win) || void 0 === t || t.setIgnoreMouseEvents(!1), 
                null === (n = this.win) || void 0 === n ? void 0 : n.isMinimized()) return void this.restore(!0);
                if (this.centerToMainWindow(), null === (i = this.win) || void 0 === i ? void 0 : i.isVisible()) return;
                global.__cm__mpLog.info("[MediaPlayerWindow] show"), null === (o = this.win) || void 0 === o || o.setSize(this.winWidth, this.winHeight, !0), 
                null === (a = this.win) || void 0 === a || a.showInactive(), null === (s = this.win) || void 0 === s || s.focus();
                const r = null === (l = this.win) || void 0 === l ? void 0 : l.getBounds();
                global.__cm__mpLog.info("[MediaPlayerWindow]show, bounds: " + JSON.stringify(r));
            });
        }
        callRenderMethod(e) {
            return r.__awaiter(this, void 0, void 0, function*() {
                try {
                    const t = global.__mainWindow;
                    return yield t.webContents.executeJavaScript(`window.getGlobalLocalesForMain(${JSON.stringify(e)})`);
                } catch (e) {
                    return global.__cm__mpLog.info("[MediaPlayerWindow]callRenderMethod, error: " + e.message), 
                    "预览";
                }
            });
        }
        centerToMainWindow(e = !1) {
            if (!this.win) return;
            const t = global.__mainWindow;
            if (t && !t.isDestroyed()) {
                const n = t.getBounds(), r = Math.floor(n.x + (n.width - this.winWidth) / 2), i = Math.floor(n.y + (n.height - this.winHeight) / 2);
                global.__cm__mpLog.info(`[MediaPlayerWindow] Positioning at main window center: x=${r}, y=${i}, mainBounds=${JSON.stringify(n)}`), 
                this.win.setPosition(r, i, !1), e && (this.win.setParentWindow(t), setTimeout(() => {
                    var e;
                    null === (e = this.win) || void 0 === e || e.setParentWindow(null);
                }, 100));
            } else global.__cm__mpLog.info("[MediaPlayerWindow] Main window not available, using screen center"), 
            this.win.center();
        }
        openDebug() {
            null == this.win || this.win.isDestroyed() || this.win.webContents.openDevTools();
        }
        isReady() {
            return this.isInitialized;
        }
        isAlive() {
            return null != this.win && !this.win.isDestroyed() && (this.win.isVisible() || this.win.isMinimized());
        }
        maximize() {
            return r.__awaiter(this, void 0, void 0, function*() {
                null == this.win || this.win.isDestroyed() || this.win.isMaximized() || this.win.isFullScreen() || this.win.isResizable() && this.win.maximize();
            });
        }
        minimize() {
            var e;
            return r.__awaiter(this, void 0, void 0, function*() {
                global.__cm__mpLog.info("[MediaPlayerWindow]handleMinmize"), null == this.win || this.win.isDestroyed() || this.win.isMinimized() || this.win.isResizable() && (f || null === (e = this.win) || void 0 === e || e.setSkipTaskbar(!1), 
                this.win.minimize());
            });
        }
        hide(e) {
            var t;
            return r.__awaiter(this, void 0, void 0, function*() {
                if (null == this.win || this.win.isDestroyed()) return;
                global.__cm__mpLog.info("[MediaPlayerWindow] hide");
                const [n, r] = this.win.getPosition();
                e && (yield this.startAnimation({
                    x: n,
                    y: r
                }, {
                    x: n + this.winWidth,
                    y: r
                })), f ? yield new Promise(e => {
                    i.hideWinInactiveOnMac(() => {
                        var t;
                        null === (t = this.win) || void 0 === t || t.hide(), e();
                    }), setTimeout(() => {
                        e();
                    }, 2e3);
                }) : null === (t = this.win) || void 0 === t || t.hide();
            });
        }
        send({event: e, payload: t, type: n}) {
            null == this.win || this.win.isDestroyed() || (1 === n ? this.win.webContents.send(e, t) : 2 === n && this.win.webContents.postMessage(e, null, t));
        }
        close() {
            return r.__awaiter(this, void 0, void 0, function*() {
                null == this.win || this.win.isDestroyed() || (this.win.close(), this.isInitialized = !1);
            });
        }
        getPath() {
            return `file://${__dirname}/${a.URL_PATH_NAME}/index.html#` + `?windowId=${this.windowId}&t=${Date.now()}&r=${Math.random()}`;
        }
        goToFront() {
            var e;
            global.__cm__mpLog.info("[MediaPlayerWindow] goToFront start"), null == this.win || this.win.isDestroyed() || null === (e = this.win) || void 0 === e || e.show();
        }
        restore(e) {
            var t, n, r;
            global.__cm__mpLog.info("[MediaPlayerWindow] restore start"), e && (null === (t = this.win) || void 0 === t || t.setSize(this.winWidth, this.winHeight, !0), 
            this.centerToMainWindow(!0)), null === (n = this.win) || void 0 === n || n.unmaximize();
            const i = null === (r = this.win) || void 0 === r ? void 0 : r.getBounds();
            global.__cm__mpLog.info("[MediaPlayerWindow]restore end bounds: " + JSON.stringify(i));
        }
        setIgnoreFalse() {
            var e;
            global.__cm__mpLog.info("[MediaPlayerWindow] setIgnoreFalse"), null == this.win || this.win.isDestroyed() || null === (e = this.win) || void 0 === e || e.setIgnoreMouseEvents(!1);
        }
        destroy() {
            null != this.win && (global.__cm__mpLog.info("[MediaPlayerWindow]destroy"), this.win.destroy(), 
            this.win = null, global.__transparentWindows.delete("media_player_win" + this.windowId));
        }
        startAnimation(e, t) {
            return new Promise(n => {
                null != this.win ? new o.WinAnimation(this.win, {
                    width: this.winWidth,
                    height: this.winHeight
                }, e, t, 150, 0, [ .18, .11, .39, .98 ]).on("end", n).start() : n();
            });
        }
        bindWebContentsLifeCycle() {
            null == this.win || this.win.isDestroyed() || (this.win.webContents.on("render-process-gone", (e, t) => {
                global.__cm__mpLog.info(`[MediaPlayerWindow]render-process-gone, code: ${t.exitCode}, reason: ${t.reason}`), 
                this.destroy();
            }), this.win.webContents.on("unresponsive", () => {
                global.__cm__mpLog.info("[MediaPlayerWindow]unresponsive");
            }));
        }
        addMainWindowEvents() {
            setTimeout(() => {
                var e, t;
                global.__cm__mpLog.info("[MediaPlayerWindow] mainWindow " + !!global.__mainWindow), 
                null === (e = global.__mainWindow) || void 0 === e || e.addListener("focus", () => {
                    this.setIgnoreFalse();
                }), null === (t = global.__mainWindow) || void 0 === t || t.addListener("blur", () => {
                    this.setIgnoreFalse();
                });
            }, 5e3);
        }
        getWin() {
            return this.win;
        }
    };
}
