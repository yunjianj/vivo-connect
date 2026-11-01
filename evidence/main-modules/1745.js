// analysis/pretty/main.js:133667; webpack module 1745
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.registerCameraPreviewIPC = void 0;
    const r = n(0), i = n(2), o = n(382), a = n(1746);
    t.registerCameraPreviewIPC = function() {
        const e = a.CameraPreviewWindowManager.getInstance();
        global.__log.info("[camera-preview][ipc] registering IPC handlers"), i.ipcMain.handle(o.CAMERA_PREVIEW_IPC.START, (t, n) => r.__awaiter(this, void 0, void 0, function*() {
            global.__log.info("[camera-preview][ipc] START request for device: " + n.deviceId);
            try {
                return yield e.createWindow(n), {
                    success: !0
                };
            } catch (e) {
                return global.__log.error("[camera-preview][ipc] START failed: " + e), {
                    success: !1,
                    error: String(e)
                };
            }
        })), i.ipcMain.on(o.CAMERA_PREVIEW_IPC.STOP, (t, n) => {
            global.__log.info("[camera-preview][ipc] STOP request for device: " + n), e.closeWindow(n, "stop");
        }), i.ipcMain.on(o.CAMERA_PREVIEW_IPC.PAUSE, (t, n) => {
            global.__log.info("[camera-preview][ipc] PAUSE request for device: " + n), e.sendToDevice(n, o.CAMERA_PREVIEW_IPC.PAUSE);
        }), i.ipcMain.on(o.CAMERA_PREVIEW_IPC.RESUME, (t, n) => {
            global.__log.info("[camera-preview][ipc] RESUME request for device: " + n), e.sendToDevice(n, o.CAMERA_PREVIEW_IPC.RESUME);
        }), i.ipcMain.on(o.CAMERA_PREVIEW_IPC.BRING_TO_FRONT, (t, n) => {
            global.__log.info("[camera-preview][ipc] BRING_TO_FRONT request for device: " + n), 
            e.bringToFront(n);
        }), i.ipcMain.on(o.CAMERA_PREVIEW_IPC.READY, (e, t) => {
            global.__log.info("[camera-preview][ipc] READY from device: " + t), global.__mainWindow && !global.__mainWindow.isDestroyed() && global.__mainWindow.webContents.send(o.CAMERA_PREVIEW_IPC.READY, {
                deviceId: t
            });
        }), i.ipcMain.on(o.CAMERA_PREVIEW_IPC.FIRST_FRAME, (t, n) => {
            global.__log.info("[camera-preview][ipc] FIRST_FRAME from device: " + n.deviceId), 
            n.meta && e.updateVideoAspectRatio(n.deviceId, n.meta.width, n.meta.height), global.__mainWindow && !global.__mainWindow.isDestroyed() ? (global.__log.info("[camera-preview][ipc] Forwarding FIRST_FRAME to main window, id: " + global.__mainWindow.id), 
            global.__mainWindow.webContents.send(o.CAMERA_PREVIEW_IPC.FIRST_FRAME, n)) : global.__log.error("[camera-preview][ipc] mainWindow not available, exists: " + !!global.__mainWindow);
        }), i.ipcMain.on(o.CAMERA_PREVIEW_IPC.STREAM_END, (t, n) => {
            global.__log.info("[camera-preview][ipc] STREAM_END from device: " + n), e.closeWindow(n, "stop"), 
            global.__mainWindow && !global.__mainWindow.isDestroyed() && global.__mainWindow.webContents.send(o.CAMERA_PREVIEW_IPC.STREAM_END, {
                deviceId: n
            });
        }), i.ipcMain.on(o.CAMERA_PREVIEW_IPC.ERROR, (t, n) => {
            global.__log.error(`[camera-preview][ipc] ERROR from device: ${n.deviceId}, error: ${n.error}`), 
            e.closeWindow(n.deviceId, "error"), global.__mainWindow && !global.__mainWindow.isDestroyed() && global.__mainWindow.webContents.send(o.CAMERA_PREVIEW_IPC.ERROR, n);
        }), i.ipcMain.on(o.CAMERA_PREVIEW_IPC.CAMERA_PAUSED, (e, t) => {
            global.__log.info("[camera-preview][ipc] CAMERA_PAUSED from device: " + t), global.__mainWindow && !global.__mainWindow.isDestroyed() && global.__mainWindow.webContents.send(o.CAMERA_PREVIEW_IPC.CAMERA_PAUSED, {
                deviceId: t
            });
        }), i.ipcMain.on(o.CAMERA_PREVIEW_IPC.CAMERA_RESUMED, (e, t) => {
            global.__log.info("[camera-preview][ipc] CAMERA_RESUMED from device: " + t), global.__mainWindow && !global.__mainWindow.isDestroyed() && global.__mainWindow.webContents.send(o.CAMERA_PREVIEW_IPC.CAMERA_RESUMED, {
                deviceId: t
            });
        }), i.ipcMain.on(o.CAMERA_PREVIEW_IPC.MINIMIZE, (t, n) => {
            global.__log.info("[camera-preview][ipc] MINIMIZE request for device: " + n);
            const r = e.getWindow(n);
            if (r) {
                const e = r.getBrowserWindow();
                e && !e.isDestroyed() && e.minimize();
            }
        }), i.ipcMain.on(o.CAMERA_PREVIEW_IPC.MAXIMIZE, (t, n) => {
            global.__log.info("[camera-preview][ipc] MAXIMIZE request for device: " + n);
            const r = e.getWindow(n);
            if (r) {
                const e = r.getBrowserWindow();
                e && !e.isDestroyed() && (e.isMaximized() ? e.unmaximize() : e.maximize());
            }
        }), i.ipcMain.on(o.CAMERA_PREVIEW_IPC.FULLSCREEN, (t, n) => {
            global.__log.info("[camera-preview][ipc] FULLSCREEN request for device: " + n);
            const r = e.getWindow(n);
            r && r.toggleFullScreen();
        }), i.ipcMain.on(o.CAMERA_PREVIEW_IPC.CLOSE, (t, n) => {
            global.__log.info("[camera-preview][ipc] CLOSE request for device: " + n), e.closeWindow(n, "user_close");
        }), i.ipcMain.on(o.CAMERA_PREVIEW_IPC.RESIZE, (t, n) => {
            global.__log.info(`[camera-preview][ipc] RESIZE request for device: ${n.deviceId}, size: ${n.width}x${n.height}`), 
            e.resizeWindow(n.deviceId, n.width, n.height);
        }), i.ipcMain.on(o.CAMERA_PREVIEW_IPC.ORIENTATION_FLIP, (t, n) => {
            global.__log.info(`[camera-preview][ipc] ORIENTATION_FLIP request for device: ${n.deviceId}, video: ${n.width}x${n.height}`), 
            e.flipOrientation(n.deviceId, n.width, n.height);
        }), global.__log.info("[camera-preview][ipc] IPC handlers registered successfully");
    };
}
