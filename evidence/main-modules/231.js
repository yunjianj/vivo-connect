// analysis/pretty/main.js:27733; webpack module 231
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.CameraSharingWindowInstance = void 0;
    const r = n(0), i = n(160), o = r.__importDefault(n(26)), a = r.__importDefault(n(230)), s = r.__importDefault(n(65)), l = r.__importDefault(n(50)), c = n(66), u = n(81);
    class d {
        constructor() {
            this.win = null, this.widthHeight = {
                width: 300,
                height: 146
            }, this.showPosition = {
                x: 0,
                y: 0
            }, this.hidePosition = {
                x: 0,
                y: 0
            }, this.height = 0, this.isShowing = !1, this.createWindowPromise = null, this.desiredState = null, 
            this.pendingData = null;
        }
        static getInstance() {
            return d.instance || (d.instance = new d), d.instance;
        }
        static get winHeight() {
            var e;
            const t = d.getInstance();
            return (null === (e = t.win) || void 0 === e ? void 0 : e.isVisible()) && t.isShowing ? t.height : 0;
        }
        get isShow() {
            return this.isShowing;
        }
        init() {
            l.default.$on(c.FRAMEWORK_MSG.CREATE_CAMERA_SHARING_WINDOW, this.create.bind(this)), 
            l.default.$on(c.FRAMEWORK_MSG.SHOW_CAMERA_SHARING_WINDOW, this.show.bind(this)), 
            l.default.$on(c.FRAMEWORK_MSG.HIDE_CAMERA_SHARING_WINDOW, this.close.bind(this)), 
            l.default.$on(c.FRAMEWORK_MSG.UPDATE_CAMERA_SHARING_WINDOW_SIZE, this.onUpdateSize.bind(this)), 
            a.default.on("show", () => this.setPosition()).on("hide", () => this.setPosition());
        }
        notifyWindowChange() {
            l.default.$emit(c.FRAMEWORK_MSG.CAMERA_SHARING_WINDOW_POSITION_CHANGED);
        }
        updateData(e) {
            this.win && !this.win.isDestroyed() && this.win.isVisible() ? (global.__log.info("[CameraSharingWindow] updateData: updating data without recreate"), 
            l.default.$emit(c.FRAMEWORK_MSG.UPDATE_ROUTE_PATH_OR_DATA, {
                winId: this.win.id,
                routePath: u.CHILD_WINDOW_ROUTES.NOTICE_PROMPT,
                data: e
            })) : global.__log.warn("[CameraSharingWindow] updateData: window not available or not visible, skip");
        }
        create(e) {
            var t, n, o;
            return r.__awaiter(this, void 0, void 0, function*() {
                if (global.__log.info(`[CameraSharingWindow] create: start, scene: ${null === (t = e) || void 0 === t ? void 0 : t.scene}, isCreating: ${d.isCreating}, hasWin: ${!!this.win}, timestamp: ${Date.now()}`), 
                this.desiredState = "show", this.pendingData = e, d.isCreating) {
                    global.__log.warn("[CameraSharingWindow] create: already creating, waiting for completion");
                    try {
                        yield this.createWindowPromise;
                    } catch (e) {
                        return void global.__log.error("[CameraSharingWindow] create: createWindowPromise rejected while waiting, error: " + e);
                    }
                    return;
                }
                if (this.isShowing && this.win) {
                    i.WinAnimation.mainWindowHasRightDisplay() || (yield this.startHideAnimation()), 
                    this.win.hide(), this.isShowing = !1, this.notifyWindowChange(), global.__log.info("[CameraSharingWindow] create: hidden before recreate");
                }
                1 != (null === (n = e.actionData) || void 0 === n ? void 0 : n.isZh) && null != (null === (o = e.actionData) || void 0 === o ? void 0 : o.isZh) || (this.widthHeight.height = 120), 
                this.setPosition();
                const r = {
                    resizable: !1,
                    skipTaskbar: !0,
                    alwaysOnTop: !0,
                    fullscreenable: !1,
                    trafficLightPosition: {
                        x: -999,
                        y: -999
                    },
                    movable: !1,
                    maximizable: !1,
                    minimizable: !1,
                    show: !1,
                    width: this.widthHeight.width,
                    height: this.widthHeight.height
                };
                if (!this.win || this.win.isDestroyed()) {
                    d.isCreating = !0;
                    try {
                        this.createWindowPromise = s.default.newBrowserWindow(r), this.win = yield this.createWindowPromise;
                    } catch (e) {
                        return global.__log.error("[CameraSharingWindow] create: newBrowserWindow failed, error: " + e), 
                        void (this.win = null);
                    } finally {
                        d.isCreating = !1, this.createWindowPromise = null;
                    }
                    if ("hide" === (this.desiredState || "show")) return global.__log.info("[CameraSharingWindow] create: desiredState is hide after creation, closing window"), 
                    this.win.close(), void (this.win = null);
                }
                this.height = this.widthHeight.height, l.default.$emit(c.FRAMEWORK_MSG.UPDATE_ROUTE_PATH_OR_DATA, {
                    winId: this.win.id,
                    routePath: u.CHILD_WINDOW_ROUTES.NOTICE_PROMPT,
                    data: this.pendingData
                });
            });
        }
        show() {
            if (!this.win) return;
            if (this.win.isVisible()) return;
            const e = i.WinAnimation.mainWindowHasRightDisplay();
            this.win.showInactive(), e ? this.win.setPosition(this.showPosition.x, this.showPosition.y) : (this.win.setPosition(this.hidePosition.x, this.hidePosition.y), 
            this.startShowAnimation()), this.isShowing = !0, this.setAlwaysOnTop(), this.notifyWindowChange(), 
            global.__log.info("[CameraSharingWindow] show: completed");
        }
        close() {
            return r.__awaiter(this, void 0, void 0, function*() {
                if (this.desiredState = "hide", d.isCreating && this.createWindowPromise) {
                    global.__log.info("[CameraSharingWindow] close: window is being created, waiting for creation to complete");
                    try {
                        yield this.createWindowPromise;
                    } catch (e) {
                        return void global.__log.error("[CameraSharingWindow] close: createWindowPromise rejected, error: " + e);
                    }
                }
                if (!this.win || this.win.isDestroyed()) return;
                i.WinAnimation.mainWindowHasRightDisplay() || (yield this.startHideAnimation()), 
                this.win.hide(), this.win.close(), this.win = null, this.isShowing = !1, this.height = 0, 
                this.notifyWindowChange(), global.__log.info("[CameraSharingWindow] close: completed");
            });
        }
        updateSize(e, t) {
            this.win ? (void 0 !== e && (this.widthHeight.width = e), void 0 !== t && (this.widthHeight.height = t), 
            this.win.setSize(this.widthHeight.width, this.widthHeight.height), this.height = this.widthHeight.height, 
            this.setPosition(), this.isShowing && this.notifyWindowChange(), global.__log.info(`[CameraSharingWindow] updateSize: width=${this.widthHeight.width}, height=${this.widthHeight.height}`)) : global.__log.warn("[CameraSharingWindow] updateSize: window not created");
        }
        onUpdateSize(e) {
            const {width: t, height: n} = e || {};
            global.__log.info(`[CameraSharingWindow] onUpdateSize: width=${t}, height=${n}`), 
            this.updateSize(t, n);
        }
        setPosition() {
            const e = o.default.getMainWindowCloestDisplayBounds();
            if (!e) return;
            const t = a.default.winHeight > 0 ? a.default.winHeight + 12 : 0, n = e.x + e.width - this.widthHeight.width - 30, r = e.y + e.height - this.widthHeight.height - 30 - t, i = e.x + e.width;
            this.showPosition = {
                x: n,
                y: r
            }, this.hidePosition = {
                x: i,
                y: r
            }, this.win && this.win.isVisible() && this.isShowing && this.win.setPosition(this.showPosition.x, this.showPosition.y);
        }
        setAlwaysOnTop() {
            if (!this.win) return;
            "darwin" == process.platform ? this.win.setAlwaysOnTop(!0, "status") : this.win.setAlwaysOnTop(!0, "screen-saver");
        }
        startShowAnimation() {
            return r.__awaiter(this, void 0, void 0, function*() {
                yield this.startAnimation(this.widthHeight, this.hidePosition, this.showPosition), 
                global.__log.info("[CameraSharingWindow] startShowAnimation: completed");
            });
        }
        startAnimation(e, t, n) {
            return new Promise(r => {
                i.WinAnimation.mainWindowHasRightDisplay() ? r() : null != this.win ? new i.WinAnimation(this.win, e, t, n, 150, 0, [ .18, .11, .39, .98 ]).on("end", r).start() : r();
            });
        }
        startHideAnimation() {
            return r.__awaiter(this, void 0, void 0, function*() {
                yield this.startAnimation(this.widthHeight, this.showPosition, this.hidePosition), 
                global.__log.info("[CameraSharingWindow] startHideAnimation: completed");
            });
        }
    }
    t.CameraSharingWindowInstance = d, d.isCreating = !1, t.default = d.getInstance();
}
