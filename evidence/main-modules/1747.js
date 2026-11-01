// analysis/pretty/main.js:133843; webpack module 1747
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.CameraPreviewWindow = void 0;
    const r = n(0), i = n(2), o = r.__importStar(n(1)), a = n(382), s = r.__importDefault(n(65)), l = r.__importDefault(n(50)), c = n(66), u = n(81), d = "darwin" === process.platform, h = {
        width: 632,
        height: 390,
        frame: !1,
        resizable: !0,
        minimizable: !0,
        maximizable: !0,
        fullscreenable: d,
        skipTaskbar: !1,
        movable: !0,
        useContentSize: !0,
        backgroundColor: "#000000",
        webPreferences: {
            webviewTag: !0,
            webSecurity: !1,
            nodeIntegration: !0,
            preload: "",
            contextIsolation: !1,
            devTools: !1
        },
        show: !1
    };
    t.CameraPreviewWindow = class {
        constructor(e) {
            this.win = null, this.videoAspectRatio = 16 / 9, this.videoWidth = 0, this.videoHeight = 0, 
            this.onCloseCallback = null, this.savedBounds = null, this.isClosing = !1, this.deviceId = e;
        }
        create(e, t, n) {
            return r.__awaiter(this, void 0, void 0, function*() {
                if (this.win && !this.win.isDestroyed()) return this.win;
                global.__log.info(`[camera-preview][window] create, deviceId: ${this.deviceId}, x: ${e}, y: ${t}, videoOrientation: ${n}`);
                const r = Object.assign(Object.assign({}, h), {
                    x: e,
                    y: t
                });
                return 90 === n && (r.width = 360, r.height = 662, global.__log.info(`[camera-preview][window] portrait mode, swapped dimensions: ${r.width}x${r.height}`)), 
                d && (r.titleBarStyle = "hidden", r.trafficLightPosition = {
                    x: 12,
                    y: 8
                }), d || (r.icon = o.join(__dirname, "../assets/icon.ico")), this.win = yield s.default.newBrowserWindow(r), 
                this.win.setMinimumSize(200, 200), d ? this.win.setAlwaysOnTop(!0, "status") : this.win.setAlwaysOnTop(!0, "screen-saver"), 
                this._registerEvents(), this.win;
            });
        }
        navigateToCameraPreview(e) {
            if (!this.win || this.win.isDestroyed()) return;
            const t = this.win.id;
            global.__log.info("[camera-preview][window] navigateToCameraPreview, winId: " + t), 
            l.default.$emit(c.FRAMEWORK_MSG.UPDATE_ROUTE_PATH_OR_DATA, {
                winId: t,
                routePath: u.CHILD_WINDOW_ROUTES.CAMERA_PREVIEW,
                data: e
            });
        }
        show() {
            this.win && !this.win.isDestroyed() && (global.__log.info("[camera-preview][window] show"), 
            this.win.show(), this.win.focus());
        }
        hide() {
            this.win && !this.win.isDestroyed() && (global.__log.info("[camera-preview][window] hide"), 
            this.win.hide());
        }
        bringToFront() {
            this.win && !this.win.isDestroyed() && (global.__log.info("[camera-preview][window] bringToFront"), 
            this.win.isMinimized() && this.win.restore(), this.win.show(), this.win.focus(), 
            this.win.moveTop());
        }
        close(e = "user_close") {
            this.win && !this.win.isDestroyed() && (this.isClosing || (this.isClosing = !0, 
            global.__log.info("[camera-preview][window] close, reason: " + e), this._gracefulClose(e)));
        }
        destroy() {
            this.win && !this.win.isDestroyed() && (global.__log.info("[camera-preview][window] destroy"), 
            this.isClosing = !0, this.win.destroy(), this.win = null);
        }
        _gracefulClose(e) {
            if (!this.win || this.win.isDestroyed()) return;
            const t = this.win;
            let n = !1;
            const r = () => {
                n || (n = !0, t.removeAllListeners("close"), t.isDestroyed() || t.destroy(), this.win = null);
            }, i = this.onCloseCallback;
            this.onCloseCallback = null, i && i({
                deviceId: this.deviceId,
                reason: e
            });
            const o = setTimeout(r, 1e3);
            t.webContents.once("ipc-message", (e, t) => {
                t === a.CAMERA_PREVIEW_IPC.CLEANUP_DONE && (global.__log.info("[camera-preview][window] received CLEANUP_DONE, destroying window"), 
                clearTimeout(o), r());
            }), global.__log.info("[camera-preview][window] sending STOP to renderer for graceful close"), 
            t.webContents.send(a.CAMERA_PREVIEW_IPC.STOP);
        }
        send(e, t) {
            this.win && !this.win.isDestroyed() && this.win.webContents.send(e, t);
        }
        getBrowserWindow() {
            return this.win;
        }
        getDeviceId() {
            return this.deviceId;
        }
        setOnCloseCallback(e) {
            this.onCloseCallback = e;
        }
        toggleFullScreen() {
            if (!this.win || this.win.isDestroyed()) return;
            if (!d) return;
            this.win.isFullScreen() ? (global.__log.info("[camera-preview][window] toggleFullScreen: leaving, savedBounds: " + JSON.stringify(this.savedBounds)), 
            this.win.setFullScreen(!1), setTimeout(() => {
                this.win && !this.win.isDestroyed() && this.savedBounds && (global.__log.info("[camera-preview][window] toggleFullScreen restore, bounds: " + JSON.stringify(this.savedBounds)), 
                this.win.setPosition(this.savedBounds.x, this.savedBounds.y), this.win.setContentSize(this.savedBounds.width, this.savedBounds.height - 30), 
                this.applyAspectRatio(), this.savedBounds = null);
            }, 600)) : (this.savedBounds = this.win.getBounds(), global.__log.info("[camera-preview][window] toggleFullScreen: entering, savedBounds: " + JSON.stringify(this.savedBounds)), 
            this.win.setAspectRatio(0), this.win.setFullScreen(!0));
        }
        updateVideoAspectRatio(e, t) {
            e > 0 && t > 0 && (this.videoWidth = e, this.videoHeight = t, this.videoAspectRatio = (e - 8) / t, 
            global.__log.info("[camera-preview][window] updateVideoAspectRatio: " + this.videoAspectRatio), 
            this.applyAspectRatio());
        }
        applyAspectRatio() {
            if (this.win && !this.win.isDestroyed()) {
                if (!d && this.videoWidth > 0 && this.videoHeight > 0) {
                    const e = (this.videoWidth - 8) / (this.videoHeight + 30);
                    return this.win.setAspectRatio(e), void global.__log.info("[camera-preview][window] applyAspectRatio (win whole-window): " + e);
                }
                this.win.setAspectRatio(this.videoAspectRatio, {
                    width: 0,
                    height: 30
                }), global.__log.info(`[camera-preview][window] applyAspectRatio: ${this.videoAspectRatio}, extraHeight: 30`);
            }
        }
        flipOrientation(e, t) {
            if (!this.win || this.win.isDestroyed()) return;
            e > 0 && t > 0 && (this.videoWidth = e, this.videoHeight = t, this.videoAspectRatio = (e - 8) / t);
            const n = this.win.getBounds(), [r, o] = this.win.getContentSize(), a = o - 30, s = r + 30;
            global.__log.info(`[camera-preview][window] flipOrientation: content ${r}x${o} -> ${a}x${s}`);
            const l = i.screen.getDisplayMatching(n).workArea;
            let c = n.x, u = n.y;
            c + a > l.x + l.width && (c = l.x + l.width - a), c < l.x && (c = l.x), u + s > l.y + l.height && (u = l.y + l.height - s), 
            u < l.y && (u = l.y), this.win.setAspectRatio(0), this.win.setContentSize(Math.round(a), Math.round(s)), 
            this.win.setPosition(Math.round(c), Math.round(u)), this.applyAspectRatio();
        }
        resize(e, t) {
            if (!this.win || this.win.isDestroyed()) return;
            e > 0 && t > 0 && (this.videoWidth = e, this.videoHeight = t, this.videoAspectRatio = (e - 8) / t, 
            global.__log.info("[camera-preview][window] resize updateVideoAspectRatio: " + this.videoAspectRatio));
            const n = e - 8, r = t + 30;
            global.__log.info(`[camera-preview][window] resize to ${n}x${r}`);
            const o = this.win.getBounds(), a = i.screen.getDisplayMatching(o).workArea;
            let s = o.x, l = o.y;
            s + n > a.x + a.width && (s = a.x + a.width - n), s < a.x && (s = a.x), l + r > a.y + a.height && (l = a.y + a.height - r), 
            l < a.y && (l = a.y), global.__log.info(`[camera-preview][window] resize bounds: x=${s}, y=${l}, w=${n}, h=${r}, workArea=${JSON.stringify(a)}`), 
            this.win.setAspectRatio(0), this.win.setBounds({
                x: Math.round(s),
                y: Math.round(l),
                width: Math.round(n),
                height: Math.round(r)
            }), this.applyAspectRatio();
        }
        _registerEvents() {
            this.win && (this.win.on("close", e => {
                this.isClosing || (e.preventDefault(), this.isClosing = !0, global.__log.info("[camera-preview][window] close event intercepted, starting graceful close"), 
                this._gracefulClose("user_close"));
            }), this.win.webContents.on("render-process-gone", (e, t) => {
                if (global.__log.error("[camera-preview][window] render-process-gone, detail: " + JSON.stringify(t)), 
                this.isClosing = !0, this.onCloseCallback) {
                    const e = this.onCloseCallback;
                    this.onCloseCallback = null, e({
                        deviceId: this.deviceId,
                        reason: "crash"
                    });
                }
                this.win && !this.win.isDestroyed() && this.win.destroy(), this.win = null;
            }), this.win.on("closed", () => {
                if (global.__log.info("[camera-preview][window] closed event"), this.onCloseCallback) {
                    const e = this.onCloseCallback;
                    this.onCloseCallback = null, e({
                        deviceId: this.deviceId,
                        reason: "user_close"
                    });
                }
                this.win = null;
            }), this.win.webContents.on("did-fail-load", (e, t, n) => {
                global.__log.error(`[camera-preview][window] did-fail-load, errCode: ${t}, errorDescription: ${n}`);
            }));
        }
    };
}
