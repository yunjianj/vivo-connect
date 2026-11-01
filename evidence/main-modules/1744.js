// analysis/pretty/main.js:133611; webpack module 1744
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    const r = n(0), i = r.__importDefault(n(65)), o = r.__importDefault(n(50)), a = n(66), s = n(81);
    class l {
        constructor() {
            this.win = null, this.widthHeight = {
                width: 1100,
                height: 640
            };
        }
        static getInstance() {
            return l.instance || (l.instance = new l), l.instance;
        }
        init() {
            o.default.$on(a.FRAMEWORK_MSG.CREATE_VCLAW_WINDOW, this.create.bind(this)), o.default.$on(a.FRAMEWORK_MSG.CLOSE_VCLAW__WINDOW, this.close.bind(this)), 
            o.default.$on("vclaw:maximize", () => {
                var e, t, n;
                (null === (e = this.win) || void 0 === e ? void 0 : e.isMaximized()) ? null === (t = this.win) || void 0 === t || t.unmaximize() : null === (n = this.win) || void 0 === n || n.maximize();
            }), o.default.$on("vclaw:minimize", () => {
                var e;
                null === (e = this.win) || void 0 === e || e.minimize();
            });
        }
        create(e) {
            return r.__awaiter(this, void 0, void 0, function*() {
                const t = {
                    show: !0,
                    width: this.widthHeight.width,
                    height: this.widthHeight.height,
                    resizable: !1,
                    title: "undefined" != typeof __buildConfig__ && __buildConfig__.IS_EXPORT ? "Jovi" : "小V Claw"
                };
                this.win || (this.win = yield i.default.newBrowserWindow(t), this.win.on("close", () => {
                    this.win = null;
                }), this.win.on("maximize", () => {
                    o.default.$emit("vclaw:toggleMaximized", !0);
                }), this.win.on("unmaximize", () => {
                    o.default.$emit("vclaw:toggleMaximized", !1);
                })), this.win.isVisible() && this.win.focus(), this.win.isMinimizable() && this.win.restore(), 
                o.default.$emit(a.FRAMEWORK_MSG.UPDATE_ROUTE_PATH_OR_DATA, {
                    winId: this.win.id,
                    routePath: s.CHILD_WINDOW_ROUTES.VCLAW,
                    data: e
                });
            });
        }
        close() {
            return r.__awaiter(this, void 0, void 0, function*() {
                this.win && (this.win.close(), this.win = null);
            });
        }
    }
    t.default = l.getInstance();
}
