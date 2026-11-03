// analysis/pretty/main.js:133748; webpack module 1746
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.CameraPreviewWindowManager = void 0;
    const r = n(0), i = n(2), o = n(1747), a = n(382);
    class s {
        constructor() {
            this.windows = new Map;
        }
        static getInstance() {
            return s.instance || (s.instance = new s), s.instance;
        }
        createWindow(e) {
            return r.__awaiter(this, void 0, void 0, function*() {
                const {deviceId: t, positionInfo: n} = e;
                if (this.windows.has(t)) return global.__log.info("[camera-preview][manager] window already exists for device: " + t), 
                this.windows.get(t);
                global.__log.info("[camera-preview][manager] createWindow for device: " + t);
                const {x: r, y: i} = this._calculateWindowPosition(n), a = new o.CameraPreviewWindow(t);
                this.windows.set(t, a);
                try {
                    yield a.create(r, i, e.videoOrientation), a.setOnCloseCallback(e => {
                        this._handleWindowClosed(e);
                    }), a.navigateToCameraPreview(e), a.show(), global.__log.info("[camera-preview][manager] window created and shown for device: " + t);
                } catch (e) {
                    throw this.windows.delete(t), global.__log.error(`[camera-preview][manager] createWindow failed for device: ${t}, error: ${e}`), 
                    e;
                }
                return a;
            });
        }
        bringToFront(e) {
            const t = this.windows.get(e);
            t ? (global.__log.info("[camera-preview][manager] bringToFront for device: " + e), 
            t.bringToFront()) : global.__log.warn("[camera-preview][manager] bringToFront: window not found for device: " + e);
        }
        closeWindow(e, t = "stop") {
            const n = this.windows.get(e);
            n ? (global.__log.info(`[camera-preview][manager] closeWindow for device: ${e}, reason: ${t}`), 
            n.close(t)) : global.__log.warn("[camera-preview][manager] closeWindow: window not found for device: " + e);
        }
        sendToDevice(e, t, n) {
            const r = this.windows.get(e);
            r ? r.send(t, n) : global.__log.warn("[camera-preview][manager] sendToDevice: window not found for device: " + e);
        }
        updateVideoAspectRatio(e, t, n) {
            const r = this.windows.get(e);
            r ? r.updateVideoAspectRatio(t, n) : global.__log.warn("[camera-preview][manager] updateVideoAspectRatio: window not found for device: " + e);
        }
        resizeWindow(e, t, n) {
            const r = this.windows.get(e);
            r ? r.resize(t, n) : global.__log.warn("[camera-preview][manager] resizeWindow: window not found for device: " + e);
        }
        flipOrientation(e, t, n) {
            const r = this.windows.get(e);
            r ? r.flipOrientation(t, n) : global.__log.warn("[camera-preview][manager] flipOrientation: window not found for device: " + e);
        }
        getWindow(e) {
            return this.windows.get(e);
        }
        hasWindow(e) {
            return this.windows.has(e);
        }
        closeAllWindows(e = "stop") {
            global.__log.info("[camera-preview][manager] closeAllWindows, reason: " + e);
            for (const [t, n] of this.windows.entries()) global.__log.info("[camera-preview][manager] closing window for device: " + t), 
            n.close(e);
        }
        _calculateWindowPosition(e) {
            const {dialogRect: t, cameraRect: n, previewSize: r} = e, o = i.screen.getDisplayMatching({
                x: Math.round(t.left),
                y: Math.round(t.top),
                width: Math.round(t.width),
                height: Math.round(t.height)
            }).workArea;
            global.__log.info(`[camera-preview][manager] display workArea: x=${o.x}, y=${o.y}, width=${o.width}, height=${o.height}, dialogRect.right=${t.right}`);
            const a = o.x + o.width - t.right, s = n.left - o.x;
            let l;
            a >= r.width + 10 ? (l = t.right + 10, global.__log.info("[camera-preview][manager] position: right side, x=" + l)) : s >= r.width + 10 ? (l = n.left - r.width - 10, 
            global.__log.info("[camera-preview][manager] position: left side, x=" + l)) : (l = o.x + o.width - r.width, 
            global.__log.info("[camera-preview][manager] position: fallback to right edge, x=" + l));
            const c = t.top;
            return {
                x: Math.round(l),
                y: Math.round(c)
            };
        }
        _handleWindowClosed(e) {
            const {deviceId: t} = e;
            global.__log.info("[camera-preview][manager] handleWindowClosed for device: " + t), 
            this.windows.delete(t), global.__mainWindow && !global.__mainWindow.isDestroyed() && global.__mainWindow.webContents.send(a.CAMERA_PREVIEW_IPC.CLOSED, e);
        }
    }
    t.CameraPreviewWindowManager = s;
}
