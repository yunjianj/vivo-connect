// analysis/pretty/main.js:133003; webpack module 1736
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.mediaPlayerWindowManager = t.init = void 0;
    const r = n(0), i = n(2), o = n(697);
    Object.defineProperty(t, "mediaPlayerWindowManager", {
        enumerable: !0,
        get: function() {
            return o.mediaPlayerWindowManager;
        }
    });
    const a = n(1737), s = n(802), l = n(1738), c = n(11), u = r.__importDefault(n(6)), d = n(94), h = n(1739), p = n(1740), f = r.__importDefault(n(235)), _ = n(348);
    let m = !1;
    t.init = function() {
        global.__cm__mpLog.info("[media-player][主进程][初始化][init]1"), m || (i.ipcMain.on(a.EVENT_NAME["show-media-play-window"], (e, t) => r.__awaiter(this, void 0, void 0, function*() {
            var n;
            global.__cm__mpLog.info("[media-player][主进程][监听到打开窗口事件]：" + JSON.stringify(t));
            const r = t.windowId;
            e.sender && f.default.setSender(r, e.sender), _.windowTimingTracker.recordStartTime(r), 
            global.__cm__mpLog.info("[media-player][主进程][创建新窗口]，窗口ID：" + r);
            try {
                if (yield new Promise(e => setTimeout(e, 100)), yield o.mediaPlayerWindowManager.createWindow(r, t), 
                global.__cm__mpLog.info("[media-player][主进程][窗口初始化完成]，窗口ID：" + r), t.dependsOnConn) {
                    const e = u.default.getItem("getConnectedDeviceIdList");
                    global.__cm__mpLog.info(`[media-player][主进程][窗口初始化完成]，窗口ID：${r}，已连接设备：${e}，当前设备：${t.deviceId}`), 
                    e && !e.includes(t.deviceId) && (global.__cm__mpLog.info(`[media-player][主进程][窗口初始化完成]，窗口ID：${r}，当前设备已断开，准备关闭窗口。`), 
                    null === (n = f.default.getTargetSender(r)) || void 0 === n || n.send(p.IPC_EVENT_ENUM.CLOSE_MEDIA_PLAYER_WIN_UNDER_DEVICE, {
                        deviceId: t.deviceId
                    }));
                }
            } catch (e) {
                global.__cm__mpLog.error(`[media-player][主进程][窗口初始化失败]，窗口ID：${r}，错误：${e}`);
            }
        })), i.ipcMain.on(a.EVENT_NAME["media-play-props-data-ready"], (e, t) => {
            global.__cm__mpLog.info("[media-player][主进程][监听到数据准备完成事件]，args：" + (t ? JSON.stringify(t) : null)), 
            f.default.add(t.windowId, t.args.resources);
            const n = o.mediaPlayerWindowManager.getWindow(t.windowId);
            global.__cm__mpLog.info("[media-player][主进程][给渲染进程发送数据]，窗口ID：" + t.windowId), n.send({
                type: 1,
                event: a.EVENT_NAME["media-play-props-data"],
                payload: Object.assign(Object.assign({}, t.args), {
                    windowId: t.windowId
                })
            }), setTimeout(() => {
                var e;
                i.ipcMain.emit("common:init", {
                    windowId: t.windowId
                }), o.mediaPlayerWindowManager.showWindow(t.windowId), global.__cm__mpLog.info("[media-player][主进程][通知渲染进程去管理窗口]，窗口ID：" + t.windowId), 
                null === (e = f.default.getTargetSender(t.windowId)) || void 0 === e || e.send(a.EVENT_NAME["send-win-opened-event-to-main"], {
                    windowId: t.windowId
                });
            }, 0);
        }), i.ipcMain.on(a.EVENT_NAME["open-media-play-debug-window"], e => {
            global.__cm__mpLog.info("[media-player][主进程][监听到打开调试窗口事件]");
            const t = o.mediaPlayerWindowManager.getAllWindowIds();
            0 !== t.length ? (global.__cm__mpLog.info(`[media-player][主进程][为 ${t.length} 个窗口打开调试工具]`), 
            t.forEach(e => {
                const t = o.mediaPlayerWindowManager.getWindow(e);
                if (t) try {
                    t.openDebug(), global.__cm__mpLog.info("[media-player][主进程][已为窗口打开调试工具]，窗口ID：" + e);
                } catch (t) {
                    global.__cm__mpLog.error(`[media-player][主进程][为窗口打开调试工具失败]，窗口ID：${e}，错误：${t}`);
                }
            })) : global.__cm__mpLog.info("[media-player][主进程][没有找到已打开的窗口]");
        }), i.ipcMain.on(a.EVENT_NAME["hide-media-play-window"], (e, t) => {
            global.__cm__mpLog.info("[media-player][主进程][监听到隐藏窗口事件]，窗口ID：" + t.windowId), o.mediaPlayerWindowManager.hideWindow(t.windowId);
        }), i.ipcMain.on(a.EVENT_NAME["close-media-play-window"], (e, t) => {
            global.__cm__mpLog.info("[media-player][主进程][监听到关闭窗口事件]，窗口ID：" + t.windowId), o.mediaPlayerWindowManager.closeWindow(t.windowId);
        }), i.ipcMain.on(a.EVENT_NAME["close-media-play-window-received"], (e, t) => {
            var n;
            global.__cm__mpLog.info("[media-player][主进程][收到多窗口渲染进程发送的关闭窗口通知]，窗口ID：" + t.windowId), 
            null === (n = f.default.getTargetSender(t.windowId)) || void 0 === n || n.send(a.EVENT_NAME["close-media-play-window-received"], t);
        }), i.ipcMain.on(a.EVENT_NAME["send-callback-event-to-main"], (e, t) => r.__awaiter(this, void 0, void 0, function*() {
            var e;
            global.__cm__mpLog.info("[media-player][主进程][监听到资源切换事件]，目标窗口：" + t.windowId), null === (e = f.default.getTargetSender(t.windowId)) || void 0 === e || e.send(a.EVENT_NAME["send-callback-event-to-main"], t);
        })), i.ipcMain.on("video:stop-other-vidoes", (e, t) => r.__awaiter(this, void 0, void 0, function*() {
            global.__cm__mpLog.info("[media-player][主进程][监听暂停其他窗口视频的消息]，目标窗口：" + t.windowId), 
            o.mediaPlayerWindowManager.stopVideo(t.windowId);
        })), i.ipcMain.on(a.EVENT_NAME["media-play-btn-handle-callback"], (e, t) => r.__awaiter(this, void 0, void 0, function*() {
            global.__cm__mpLog.info("[media-player][主进程][自定义按钮执行完后，回调查看器]，目标窗口：" + t.windowId), 
            o.mediaPlayerWindowManager.callBackPlayer(t.windowId, t.args, t.mode, a.EVENT_NAME["media-play-btn-handle-callback"]);
        })), i.ipcMain.on("window:maximize", (e, t) => r.__awaiter(this, void 0, void 0, function*() {
            global.__cm__mpLog.info("[media-player][主进程][监听窗口最大化事件]，目标窗口：" + t.windowId), o.mediaPlayerWindowManager.maximize(t.windowId);
        })), i.ipcMain.on("window:minimize", (e, t) => r.__awaiter(this, void 0, void 0, function*() {
            global.__cm__mpLog.info("[media-player][主进程][监听窗口最小化事件]，目标窗口：" + t.windowId), o.mediaPlayerWindowManager.minimize(t.windowId);
        })), i.ipcMain.on("window:restore", (e, t) => r.__awaiter(this, void 0, void 0, function*() {
            global.__cm__mpLog.info("[media-player][主进程][监听窗口恢复事件]，目标窗口：" + t.windowId), o.mediaPlayerWindowManager.restore(t.windowId);
        })), i.ipcMain.on("common:modify-win-cache", (e, t) => {
            var n;
            global.__cm__mpLog.info("[media-player][主进程][common:modify-win-cach][修改独立窗口缓存数据] " + JSON.stringify(t)), 
            null === (n = f.default.getTargetSender(t.windowId)) || void 0 === n || n.send(a.EVENT_NAME["win-cache-modified"], {
                windowId: t.windowId,
                dependsOnConn: t.dependsOnConn,
                deviceId: t.deviceId
            });
        }), i.ipcMain.on("common:download-file", (e, t) => {
            var n;
            global.__cm__mpLog.info("[media-player][主进程][common:download-file][下载模式（即：vdfs失效模式）下] " + JSON.stringify(t)), 
            null === (n = f.default.getTargetSender(t.windowId)) || void 0 === n || n.send(a.EVENT_NAME["common:download-file"], {
                windowId: t.windowId,
                resource: t.resource,
                opType: t.opType,
                sceneType: t.sceneType,
                type: t.type
            });
        }), i.ipcMain.handle("common:choose-save-directory", (e, t) => r.__awaiter(this, void 0, void 0, function*() {
            const e = u.default.getItem("FM_SAVE_PATH") || d.getAppDownloadPath(), n = o.mediaPlayerWindowManager.getWindow(t.windowId);
            return yield new Promise(r => {
                i.dialog.showOpenDialog(null == n ? void 0 : n.getWin(), {
                    properties: [ "openDirectory" ],
                    defaultPath: e,
                    buttonLabel: t.saveBtnText
                }).then(e => {
                    let t = "";
                    e.filePaths && e.filePaths.length && (t = e.filePaths[0], u.default.setItem("FM_SAVE_PATH", t)), 
                    r(t);
                });
            });
        })), i.ipcMain.on(c.APP_MESSAGE_ENUM.APP_THEME_SCHEME_CHANGE, (e, t) => {
            global.__cm__mpLog.info("[media-player][主进程][APP_MESSAGE_ENUM.APP_THEME_SCHEME_CHANGE] " + t), 
            o.mediaPlayerWindowManager.changeTheme(t);
        }), i.ipcMain.on(c.APP_MESSAGE_ENUM.APP_LANG_SCHEME_CHANGE, (e, {lang: t, isRtl: n}) => {
            global.__cm__mpLog.info(`[media-player][主进程][APP_MESSAGE_ENUM.APP_LANG_SCHEME_CHANGE] lang: ${t},  isRtl: ${n}`), 
            o.mediaPlayerWindowManager.changeScheme({
                lang: t,
                isRtl: n
            });
        }), i.ipcMain.on(h.API_EVENT_NAME["on-player-download-ended"], (e, t) => {
            var n;
            global.__cm__mpLog.info("[media-player][主进程][on-player-download-ended][下载模式（即：vdfs失效模式）下] " + JSON.stringify(t)), 
            "inline" === t.mode ? null === (n = f.default.getTargetSender(t.windowId)) || void 0 === n || n.send(h.API_EVENT_NAME["on-player-download-ended"], t) : o.mediaPlayerWindowManager.downloadEnded(t);
        }), i.ipcMain.on(h.API_EVENT_NAME["on-player-download-started"], (e, t) => {
            var n;
            global.__cm__mpLog.info("[media-player][主进程][on-player-download-started] " + (t ? JSON.stringify(t) : null)), 
            "inline" === t.mode && (null === (n = f.default.getTargetSender(t.windowId)) || void 0 === n || n.send(h.API_EVENT_NAME["on-player-download-started"], t));
        }), i.ipcMain.on(s.EVENT_NAME["common:jumpPageByData"], (e, t) => {
            global.__cm__mpLog.info("[media-player][主进程][common:jumpPageByData][同源跳转] " + JSON.stringify(t)), 
            o.mediaPlayerWindowManager.jumpPageByData(t);
        }), l.init(), i.ipcMain.on("common:init", e => {
            global.__cm__mpLog.info("[media-player][主进程][common:init][start] " + JSON.stringify(e)), 
            o.mediaPlayerWindowManager.callAddOn("init_api_in_mediaPlayer", e.windowId), global.__cm__mpLog.info("[media-player][主进程][common:init][end]");
        }), i.ipcMain.on("common:unInit", (e, t) => {
            global.__cm__mpLog.info("[media-player][主进程][common:unInit][start]"), o.mediaPlayerWindowManager.callAddOn("unInit_api_in_mediaPlayer", t.windowId), 
            global.__cm__mpLog.info("[media-player][主进程][common:unInit][end]");
        }), i.ipcMain.handle("image:get-info", (e, t) => r.__awaiter(this, void 0, void 0, function*() {
            global.__cm__mpLog.info("[media-player][主进程][image:get-info][参数][start] " + JSON.stringify(t));
            const e = yield o.mediaPlayerWindowManager.getAddOnResult("getImageInfo_api_in_mediaPlayer", t.windowId, t);
            return global.__cm__mpLog.info("[media-player][主进程][image:get-info][结果][end] " + (e ? JSON.stringify(e) : null)), 
            e;
        })), i.ipcMain.handle("image:get-converted-info", (e, t) => r.__awaiter(this, void 0, void 0, function*() {
            global.__cm__mpLog.info("[media-player][主进程][image:get-converted-info][参数][start] " + JSON.stringify(t));
            const e = yield o.mediaPlayerWindowManager.getAddOnResult("getConvertedImageInfo_api_in_mediaPlayer", t.windowId, t);
            return global.__cm__mpLog.info("[media-player][主进程][image:get-converted-info][结果][end] " + (e ? JSON.stringify(e) : null)), 
            e;
        })), i.ipcMain.handle("video:get-info", (e, t) => r.__awaiter(this, void 0, void 0, function*() {
            console.log(e), global.__cm__mpLog.info("[media-player][主进程][video:get-video-info][参数][start] " + JSON.stringify(t));
            const n = yield o.mediaPlayerWindowManager.getAddOnResult("getVideoInfo_api_in_mediaPlayer", t.windowId, t);
            return global.__cm__mpLog.info("[media-player][主进程][video:get-video-info][结果][end] " + (n ? JSON.stringify(n) : null)), 
            n;
        })), i.ipcMain.on("video:start-stream", (e, t) => {
            global.__cm__mpLog.info("[media-player][主进程][video:start-stream][参数] " + JSON.stringify(t)), 
            o.mediaPlayerWindowManager.callAddOn("startStream_api_in_mediaPlayer", t.windowId, t);
        }), i.ipcMain.on("video:seek", (e, t) => {
            console.log(e), global.__cm__mpLog.info("[media-player][主进程][video:seek][参数] " + JSON.stringify(t)), 
            o.mediaPlayerWindowManager.callAddOn("seek_api_in_mediaPlayer", t.windowId, t);
        }), i.ipcMain.on("video:stop-stream", (e, t) => {
            console.log(e), global.__cm__mpLog.info("[media-player][主进程][video:stop-stream][参数] " + JSON.stringify(t)), 
            o.mediaPlayerWindowManager.callAddOn("stopStream_api_in_mediaPlayer", t.windowId, t);
        }), i.ipcMain.on("video:pause-stream", (e, t) => r.__awaiter(this, void 0, void 0, function*() {
            console.log(e), global.__cm__mpLog.info("[media-player][主进程][video:pause-stream][参数] " + JSON.stringify(t)), 
            o.mediaPlayerWindowManager.callAddOn("pause_api_in_mediaPlayer", t.windowId, t);
        })), i.ipcMain.on("video:resume-stream", (e, t) => {
            console.log(e), global.__cm__mpLog.info("[media-player][主进程][video:resume-stream][参数] " + JSON.stringify(t)), 
            o.mediaPlayerWindowManager.callAddOn("resume_api_in_mediaPlayer", t.windowId, t);
        }), i.ipcMain.on("video:adjust-volumn", (e, t) => {
            global.__cm__mpLog.info("[media-player][主进程][video:adjust-volumn][参数] " + JSON.stringify(t)), 
            o.mediaPlayerWindowManager.callAddOn("adjustVolumn_api_in_mediaPlayer", t.windowId, t);
        }), m = !0);
        const {app: e, globalShortcut: t} = n(2);
        e.whenReady().then(() => {
            0;
        });
    };
}
