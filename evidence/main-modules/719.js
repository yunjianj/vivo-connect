// analysis/pretty/main.js:63882; webpack module 719
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.FeedbackMessageWindowInstance = void 0;
    const r = n(0), i = n(160), o = r.__importDefault(n(26)), a = r.__importDefault(n(230)), s = n(231), l = r.__importDefault(n(65)), c = r.__importDefault(n(50)), u = n(66), d = n(81);
    class h {
        constructor() {
            this.win = null, this.widthHeight = {
                width: 300,
                height: 120
            }, this.showPosition = {
                x: 0,
                y: 0
            }, this.hidePosition = {
                x: 0,
                y: 0
            };
        }
        static getInstance() {
            return h.instance || (h.instance = new h), h.instance;
        }
        static get winHeight() {
            return h._winHeight;
        }
        init() {
            c.default.$on(u.FRAMEWORK_MSG.CREATE_FEEDBACK_MESSAGE_WINDOW, this.create.bind(this)), 
            c.default.$on(u.FRAMEWORK_MSG.SHOW_FEEDBACK_MESSAGE_WINDOW, this.show.bind(this)), 
            c.default.$on(u.FRAMEWORK_MSG.HIDE_FEEDBACK_MESSAGE_WINDOW, this.close.bind(this)), 
            a.default.on("show", () => {
                this.setPosition();
            }).on("hide", () => {
                this.setPosition();
            }), c.default.$on(u.FRAMEWORK_MSG.CAMERA_SHARING_WINDOW_POSITION_CHANGED, () => {
                this.setPosition();
            });
        }
        create(e) {
            return r.__awaiter(this, void 0, void 0, function*() {
                this.setPosition();
                const t = {
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
                this.win || (this.win = yield l.default.newBrowserWindow(t), this.win.setTitle("")), 
                c.default.$emit(u.FRAMEWORK_MSG.UPDATE_ROUTE_PATH_OR_DATA, {
                    winId: this.win.id,
                    routePath: d.CHILD_WINDOW_ROUTES.FEEDBACK_MESSAGE,
                    data: e
                });
            });
        }
        notifyWindowChange() {
            c.default.$emit(u.FRAMEWORK_MSG.FEEDBACK_MESSAGE_WINDOW_POSITION_CHANGED);
        }
        show() {
            if (!this.win) return;
            if (this.win.isVisible()) return;
            i.WinAnimation.mainWindowHasRightDisplay() ? (this.win.setPosition(this.showPosition.x, this.showPosition.y), 
            this.win.showInactive()) : (this.win.setPosition(this.hidePosition.x, this.hidePosition.y), 
            this.win.showInactive(), this.startShowAnimation()), this.setAlwaysOnTop(), h._winHeight = this.widthHeight.height, 
            this.notifyWindowChange();
        }
        close() {
            return r.__awaiter(this, void 0, void 0, function*() {
                if (!this.win) return;
                i.WinAnimation.mainWindowHasRightDisplay() || (yield this.startHideAnimation()), 
                this.win.hide(), this.win.close(), this.win = null, h._winHeight = 0, this.notifyWindowChange();
            });
        }
        setAlwaysOnTop() {
            if (!this.win) return;
            "darwin" == process.platform ? this.win.setAlwaysOnTop(!0, "status") : this.win.setAlwaysOnTop(!0, "screen-saver");
        }
        setPosition() {
            const e = o.default.getMainWindowCloestDisplayBounds();
            if (!e) return;
            const t = a.default.winHeight > 0 ? a.default.winHeight + 12 : 0, n = s.CameraSharingWindowInstance.winHeight > 0 ? s.CameraSharingWindowInstance.winHeight + 12 : 0, r = e.x + e.width - this.widthHeight.width - 30, i = e.y + e.height - this.widthHeight.height - 30 - t - n, l = e.x + e.width;
            this.showPosition = {
                x: r,
                y: i
            }, this.hidePosition = {
                x: l,
                y: i
            }, this.win && this.win.isVisible() && this.win.setPosition(this.showPosition.x, this.showPosition.y);
        }
        startShowAnimation() {
            return r.__awaiter(this, void 0, void 0, function*() {
                yield this.startAnimation(this.widthHeight, this.hidePosition, this.showPosition);
            });
        }
        startHideAnimation() {
            return r.__awaiter(this, void 0, void 0, function*() {
                yield this.startAnimation(this.widthHeight, this.showPosition, this.hidePosition);
            });
        }
        startAnimation(e, t, n) {
            return new Promise(r => {
                i.WinAnimation.mainWindowHasRightDisplay() ? r() : null != this.win ? new i.WinAnimation(this.win, e, t, n, 150, 0, [ .18, .11, .39, .98 ]).on("end", r).start() : r();
            });
        }
    }
    t.FeedbackMessageWindowInstance = h, h._winHeight = 0, t.default = h.getInstance();
}
