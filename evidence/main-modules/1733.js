// analysis/pretty/main.js:132732; webpack module 1733
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.PermissionWindow = void 0;
    const r = n(0), i = n(2), o = n(11), a = r.__importDefault(n(65)), s = r.__importDefault(n(50)), l = n(66), c = n(81), u = "darwin" == process.platform, d = {
        single: {
            width: 300,
            height: 376,
            movable: !0
        },
        multi: {
            width: 800,
            height: 540
        },
        messageBox: {
            width: 300,
            height: 188,
            movable: !0
        }
    }, h = {
        frame: !1,
        resizable: !1,
        skipTaskbar: !0,
        transparent: !!u,
        fullscreenable: !1,
        acceptFirstMouse: u,
        titleBarStyle: "hidden",
        trafficLightPosition: {
            x: -999,
            y: -999
        },
        useContentSize: !0,
        backgroundColor: u ? "#e8F2F4F6" : void 0,
        vibrancy: u ? "fullscreen-ui" : void 0,
        visualEffectState: "active",
        movable: !1,
        maximizable: !1,
        minimizable: !1,
        center: !0,
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
    class p {
        constructor(e) {
            this.win = null, this._dialogType = "single", this._oldDialogType = this._dialogType, 
            this._contentReadyCallback = null, this._showingPromise = null, this._showToken = 0, 
            this.screenSize = {
                width: 0,
                height: 0
            }, console.log("PermissionWindow constructor", e), this.win && this.win.isDestroyed() || global.__mainWindow && this._registerViewLoadEvent();
        }
        static getInstance(e) {
            return p.instance || (p.instance = new p(e)), p.instance;
        }
        getBrowserWindow() {
            return this.win;
        }
        show() {
            if (null != global.__mainWindow && null != this.win && !this.win.isDestroyed()) if (global.__log.info("PermissionWindow show"), 
            u) this.win.setOpacity(1), this.win.focus(); else {
                this._centerWin(), this.win.setAlwaysOnTop(!0), this.win.show(), this.win.focus();
                const e = () => {
                    var t;
                    global.__log.info(`[permission-window][show] win: ${!!this.win}, isDestroyed: ${null === (t = this.win) || void 0 === t ? void 0 : t.isDestroyed()}`), 
                    this.win && !this.win.isDestroyed() && (this.win.setAlwaysOnTop(!1), this.win.removeListener("blur", e));
                };
                this.win.once("blur", e);
            }
        }
        hide() {
            var e;
            this._showToken++, null == this.win || this.win.isDestroyed() || (global.__log.info("PermissionWindow hide"), 
            u ? this.hideMainWindow(() => {
                var e;
                null === (e = this.win) || void 0 === e || e.hide();
            }) : null === (e = this.win) || void 0 === e || e.hide());
        }
        create() {
            return r.__awaiter(this, void 0, void 0, function*() {
                if (this.win) return Promise.resolve(this.win);
                global.__log.info("[permission-window] load start : ");
                const e = Object.assign(Object.assign({}, h), d[this._dialogType]), t = yield a.default.newBrowserWindow(e);
                return global.__transparentWindows.set("permission_window", t), this.win = t, t;
            });
        }
        showAuthDialog(e) {
            return r.__awaiter(this, void 0, void 0, function*() {
                this._showingPromise && (global.__log.info("[permission-window][showAuthDialog] waiting for previous show to finish"), 
                yield this._showingPromise.catch(() => {})), this._showingPromise = this._doShowAuthDialog(e);
                try {
                    yield this._showingPromise;
                } finally {
                    this._showingPromise = null;
                }
            });
        }
        _doShowAuthDialog(e) {
            var t, n, i, o, a;
            return r.__awaiter(this, void 0, void 0, function*() {
                const r = ++this._showToken;
                if (global.__log.info("[permission-window][showAuthDialog]permissions len: " + (e && e.permissions && e.permissions.length)), 
                this._dialogType = e.permissions.length > 1 ? "multi" : 1 === e.permissions.length ? "single" : "messageBox", 
                yield this.create(), u ? (null === (t = this.win) || void 0 === t || t.show(), null === (n = this.win) || void 0 === n || n.setOpacity(0), 
                this._centerWin()) : (null === (i = this.win) || void 0 === i || i.showInactive(), 
                this._moveOffScreen()), global.__log.info(`[permission-window][showAuthDialog] _dialogType: ${this._dialogType}, _oldDialogType: ${this._oldDialogType}`), 
                this._oldDialogType != this._dialogType) {
                    const e = Object.assign({}, d[this._dialogType]);
                    global.__log.info("[permission-window][showAuthDialog] setBounds exec"), null === (o = this.win) || void 0 === o || o.setBounds(e), 
                    this._oldDialogType = this._dialogType;
                }
                const h = new Promise(e => {
                    const t = setTimeout(() => {
                        global.__log.info("[permission-window][showAuthDialog] CONTENT_READY timeout, showing anyway"), 
                        this._contentReadyCallback = null, e();
                    }, 1200);
                    this._contentReadyCallback = () => {
                        clearTimeout(t), this._contentReadyCallback = null, e();
                    };
                });
                s.default.$emit(l.FRAMEWORK_MSG.UPDATE_ROUTE_PATH_OR_DATA, {
                    winId: null === (a = this.win) || void 0 === a ? void 0 : a.id,
                    routePath: c.CHILD_WINDOW_ROUTES.PERMISSION,
                    data: e
                }), yield h, r === this._showToken ? this.show() : global.__log.info(`[permission-window][showAuthDialog] stale show skipped, myToken: ${r}, current: ${this._showToken}`);
            });
        }
        onContentReady() {
            global.__log.info("[permission-window][onContentReady] content ready"), this._contentReadyCallback && this._contentReadyCallback();
        }
        updateDialog(e) {
            var t;
            null === (t = this.win) || void 0 === t || t.setSize(e.width, e.height);
        }
        send(e, t) {
            return r.__awaiter(this, void 0, void 0, function*() {
                null == this.win || this.win.isDestroyed() || this.win.webContents.send(e, t);
            });
        }
        sendToMainWin(e, t) {
            var n;
            console.log("sendToMainWin: ", e, t, !!global.__mainWindow), null === (n = global.__mainWindow) || void 0 === n || n.webContents.send(e, t);
        }
        destroy() {
            null != this.win && (global.__log.info("[DownloadWindow]destroy"), this.win.destroy(), 
            this.win = null, global.__transparentWindows.delete("download_window"));
        }
        _moveOffScreen() {
            var e;
            if (this.screenSize.width <= 0 || this.screenSize.height <= 0) {
                const e = i.screen.getPrimaryDisplay(), {width: t, height: n} = e.workArea;
                this.screenSize = {
                    width: t,
                    height: n
                };
            }
            const t = d[this._dialogType], n = -t.width, r = this.screenSize.height;
            global.__log.info(`[permission-window][_moveOffScreen] Windows: x=${n}, y=${r}, width=${t.width}, height=${t.height}`), 
            null === (e = this.win) || void 0 === e || e.setBounds({
                x: n,
                y: r,
                width: t.width,
                height: t.height
            });
        }
        _centerWin() {
            var e;
            if (this.screenSize.width <= 0 || this.screenSize.height <= 0) {
                const e = i.screen.getPrimaryDisplay(), {width: t, height: n} = e.workArea;
                this.screenSize = {
                    width: t,
                    height: n
                }, global.__log.info(`[permission][window.ts][_centerWin] width: ${this.screenSize.width}, height: ${this.screenSize.height}`);
            }
            const t = Math.floor((this.screenSize.width - d[this._dialogType].width) / 2), n = Math.floor((this.screenSize.height - d[this._dialogType].height) / 2);
            global.__log.info(`[permission-window][_centerWin] x=${t}, y=${n}`), null === (e = this.win) || void 0 === e || e.setPosition(t, n);
        }
        _registerViewLoadEvent() {
            var e, t;
            null === (e = this.win) || void 0 === e || e.webContents.on("did-fail-load", (e, t, n) => {
                global.__log.info(`[permission-window] load error, errCode: ${t}, errorDesc: ${n} `);
            }), null === (t = this.win) || void 0 === t || t.webContents.on("render-process-gone", (e, t) => {
                global.__log.info("[permission-window] render-process-gone detail: " + JSON.stringify(t)), 
                this.win && !this.win.isDestroyed() && this.win.destroy();
            });
        }
        hideMainWindow(e) {
            let t = global.__mainWindow;
            null == t || t.webContents.send(o.WINDOW_MESSAGE_ENUM.GET_MAIN_WINDOW_VISIBLITY_STATE), 
            i.ipcMain.once(o.WINDOW_MESSAGE_ENUM.GET_MAIN_WINDOW_VISIBLITY_STATE_REPLY, (e, n) => {
                global.__log.info("visibleState:" + n.visibleState), "hidden" == n.visibleState && ((null == t ? void 0 : t.isFullScreen()) || null == t || t.hide());
            }), setTimeout(() => {
                e();
            }, 0);
        }
    }
    t.PermissionWindow = p, t.default = p.getInstance();
}
