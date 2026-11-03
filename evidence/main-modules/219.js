// analysis/pretty/main.js:27387; webpack module 219
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    const r = n(0), i = n(11), o = r.__importDefault(n(209)), a = n(2);
    class s extends o.default {
        constructor() {
            super();
        }
        static getInstance() {
            return this.instance || (this.instance = new s), this.instance;
        }
        broadcastWindowHide(e) {
            this.broadcastEvent(i.WINDOW_MESSAGE_ENUM.WINDOW_HIDE, e);
        }
        broadcastWindowShow(e) {
            this.broadcastEvent(i.WINDOW_MESSAGE_ENUM.WINDOW_SHOW, e);
        }
        broadcastWindowMin(e) {
            this.broadcastEvent(i.WINDOW_MESSAGE_ENUM.WINDOW_MINIMIZE, e);
        }
        broadcastWindowMax(e) {
            this.broadcastEvent(i.WINDOW_MESSAGE_ENUM.WINDOW_MAXIMIZE, e);
        }
        broadcastWindowToggleMax(e) {
            this.broadcastEvent(i.WINDOW_MESSAGE_ENUM.WINDOW_TOGGLE_MAXIMIZE, e);
        }
        broadcastWindowFocus(e, t) {
            e ? this.broadcastTargetEvent(e, i.WINDOW_MESSAGE_ENUM.WINDOW_FOCUS, t) : this.broadcastEvent(i.WINDOW_MESSAGE_ENUM.WINDOW_FOCUS, t);
        }
        broadcastWindowBlur(e, t) {
            e ? this.broadcastTargetEvent(e, i.WINDOW_MESSAGE_ENUM.WINDOW_BLUR, t) : this.broadcastEvent(i.WINDOW_MESSAGE_ENUM.WINDOW_BLUR, t);
        }
        broadcastWindowToggleBlur(e) {
            this.broadcastEvent(i.WINDOW_MESSAGE_ENUM.WINDOW_BLUR_TIMEOUT, e);
        }
        broadcastWindowRestore(e) {
            this.broadcastEvent(i.WINDOW_MESSAGE_ENUM.WINDOW_RESTORE, e);
        }
        broadcastToggleFullScreen(e) {
            this.broadcastEvent(i.WINDOW_MESSAGE_ENUM.WINDOW_TOGGLE_FULLSCREEN, e);
        }
        broadcastWindowLoadFinish() {
            this.broadcastEvent(i.WINDOW_MESSAGE_ENUM.WINDOW_LOAD_FINISH);
        }
        registerIpcEvent() {
            a.ipcMain.on(i.WINDOW_MESSAGE_ENUM.WINDOW_DISABLE_CLICK, () => {
                var e;
                null === (e = global.__mainWindow) || void 0 === e || e.webContents.on("before-input-event", (e, t) => {
                    global.__log.info("mouseDown WINDOW_DISABLE_CLICK"), "mouseDown" === t.type && e.preventDefault();
                });
            }), a.ipcMain.on(i.WINDOW_MESSAGE_ENUM.WINDOW_ENABLE_CLICK, () => {
                global.__log.info("mouseDown WINDOW_ENABLE_CLICK");
            });
        }
        listenWindowMounted(e) {
            this.listen(i.WINDOW_MESSAGE_ENUM.WINDOW_MOUNTED, t => {
                e(t);
            }, !0);
        }
        registerMainWinVisiblityChange(e) {
            a.ipcMain.on(i.WINDOW_MESSAGE_ENUM.WINDOW_VISIBLITY_CHANGE, e);
        }
        unregisterMainWinVisiblityChange() {
            a.ipcMain.removeHandler(i.WINDOW_MESSAGE_ENUM.WINDOW_VISIBLITY_CHANGE);
        }
    }
    t.default = s;
}
