// analysis/pretty/main.js:63997; webpack module 720
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    const r = n(0), i = n(2), o = r.__importDefault(n(1));
    class a {
        constructor() {
            this.browserWindowList = [];
        }
        static getInstance() {
            return a.instance || (a.instance = new a), a.instance;
        }
        init() {
            return r.__awaiter(this, void 0, void 0, function*() {
                this.createFreeWindow();
            });
        }
        newBrowserWindow(e) {
            return new Promise(t => {
                this.createFreeWindow();
                const n = this.browserWindowList.shift();
                (null == n ? void 0 : n.browserWindow) && this.setBrowserWindowOptions(null == n ? void 0 : n.browserWindow, e), 
                (null == n ? void 0 : n.isReadyToShow) ? (global.__log.info("[WindowTransparentPoolInstance] newBrowserWindow, id:" + n.browserWindow.id), 
                (null == e ? void 0 : e.show) && n.browserWindow.show(), t(null == n ? void 0 : n.browserWindow)) : null == n || n.browserWindow.on("ready-to-show", () => {
                    global.__log.info("[WindowTransparentPoolInstance] newBrowserWindow, id:" + n.browserWindow.id), 
                    (null == e ? void 0 : e.show) && n.browserWindow.show(), t(null == n ? void 0 : n.browserWindow);
                });
            });
        }
        createFreeWindow() {
            const e = "darwin" == process.platform;
            const t = {
                useContentSize: !1,
                frame: !1,
                titleBarStyle: "hidden",
                transparent: !0,
                backgroundColor: e ? "#e8F2F4F6" : "#F2F4F6",
                acceptFirstMouse: e,
                vibrancy: "fullscreen-ui",
                skipTaskbar: !1,
                hasShadow: !1,
                webPreferences: {
                    webSecurity: !1,
                    webviewTag: !0,
                    nodeIntegration: !0,
                    contextIsolation: !1,
                    preload: o.default.resolve(__dirname, "../electron/preload-child-window.js"),
                    devTools: !0
                },
                show: !1
            }, r = new i.BrowserWindow(t);
            n(248).enable(r.webContents), this.browserWindowList.push({
                isReadyToShow: !1,
                browserWindow: r
            });
            const a = `file://${__dirname}/child-window.html#`;
            r.loadURL(a), global.__log.info("[WindowTransparentPoolInstance] createFreeWindow, id:" + r.id), 
            r.on("ready-to-show", () => {
                global.__log.info("[WindowTransparentPoolInstance] ready-to-show, id:" + r.id);
                const e = this.browserWindowList.findIndex(e => e.browserWindow.id == r.id);
                -1 !== e && (this.browserWindowList[e].isReadyToShow = !0);
            }), r.webContents.on("did-finish-load", () => {
                global.__log.info("[WindowTransparentPoolInstance]did-finish-load, id:" + r.id);
            });
            const s = r.id;
            r.webContents.on("destroyed", () => {
                global.__log.info("[WindowTransparentPoolInstance]destroyed " + s);
            }), r.webContents.on("unresponsive", () => {
                global.__log.error("[WindowTransparentPoolInstance]unresponsive, id:" + r.id);
            }), r.webContents.on("did-fail-load", (e, t, n) => {
                global.__log.error(`[WindowTransparentPoolInstance]did-fail-load errorCode: ${t},errorDescription: ${n}, id:${r.id}`);
            }), r.webContents.on("render-process-gone", (e, t) => {
                global.__log.error(`[WindowTransparentPoolInstance]render-process-gone ${JSON.stringify(t)}, id:${r.id}`);
            });
        }
        setBrowserWindowOptions(e, t) {
            if (!t) return;
            const n = "darwin" == process.platform;
            void 0 !== (null == t ? void 0 : t.resizable) && e.setResizable(t.resizable), void 0 !== (null == t ? void 0 : t.movable) && e.setMovable(t.movable), 
            void 0 !== (null == t ? void 0 : t.maximizable) && e.setMaximizable(t.maximizable), 
            void 0 !== (null == t ? void 0 : t.minimizable) && e.setMinimizable(t.minimizable), 
            void 0 !== (null == t ? void 0 : t.hasShadow) && e.setHasShadow(t.hasShadow), void 0 !== (null == t ? void 0 : t.alwaysOnTop) && e.setAlwaysOnTop(t.alwaysOnTop), 
            void 0 !== (null == t ? void 0 : t.skipTaskbar) && e.setSkipTaskbar(t.skipTaskbar), 
            void 0 !== (null == t ? void 0 : t.fullscreenable) && e.setFullScreenable(t.fullscreenable), 
            void 0 !== (null == t ? void 0 : t.title) && e.setTitle(t.title), n && (null == t ? void 0 : t.trafficLightPosition) && e.setTrafficLightPosition(t.trafficLightPosition), 
            (null == t ? void 0 : t.backgroundColor) && e.setBackgroundColor(t.backgroundColor), 
            t.minWidth && t.minHeight && e.setMinimumSize(t.minWidth, t.minHeight);
            const r = {
                width: t.width || 800,
                height: t.height || 600
            };
            t.x && (r.x = t.x), t.y && (r.y = t.y), e.setBounds(r);
        }
    }
    t.default = a.getInstance();
}
