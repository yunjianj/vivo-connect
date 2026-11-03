// analysis/pretty/main.js:133207; webpack module 1738
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.init = void 0;
    const r = n(0), i = n(2), o = r.__importDefault(n(4)), a = r.__importDefault(n(235)), s = n(348), l = n(802), c = r.__importDefault(n(28));
    t.init = function() {
        global.__cm__mpLog.info("[media-player][主进程][初始化][init]2"), i.ipcMain.on(l.EVENT_NAME["common:updateWinDatas"], (e, t) => {
            global.__cm__mpLog.info("[media-player][主进程][common:updateWinDatas][参数] " + (t ? JSON.stringify(t) : null)), 
            a.default.update(t.windowId, t.resources);
        }), i.ipcMain.handle(l.EVENT_NAME["common:getWinIdByDatas"], (e, t) => (global.__cm__mpLog.info("[media-player][主进程][common:getWinIdByDatas][参数] " + (t ? JSON.stringify(t) : null)), 
        a.default.findWindowId(t.resources))), i.ipcMain.handle(l.EVENT_NAME["common:getWinDatas"], e => (global.__cm__mpLog.info("[media-player][主进程][common:getWinDatas][参数]"), 
        a.default.getAllData())), i.ipcMain.handle(l.EVENT_NAME["common:getWinOpenTraceInfo"], (e, t) => (global.__cm__mpLog.info("[media-player][主进程][common:getWinOpenTraceInfo][参数]"), 
        s.windowTimingTracker.getTimingData(t.windowId))), i.ipcMain.handle(l.EVENT_NAME.GET_FILE_EXT_SUPPORT_APP, (e, t) => r.__awaiter(this, void 0, void 0, function*() {
            c.default, global.__cm__mpLog.info("[media-player][主进程]getFileExtSupportApp suffix: " + t);
            const e = yield c.default.getFileExtSupportApp(t);
            return global.__cm__mpLog.info("[media-player][主进程]getFileExtSupportApp res: " + JSON.stringify(e)), 
            e;
        })), i.ipcMain.on(l.EVENT_NAME["common:update-win-file-info"], (e, t) => r.__awaiter(this, void 0, void 0, function*() {
            global.__cm__mpLog.info("[media-player][主进程][common:update-win-file-info] options: " + (t ? JSON.stringify(t) : null)), 
            s.windowTimingTracker.recordFileInfo(t.windowId, t.from, t.type, t.fileType);
        })), i.ipcMain.handle("common:check-file-exists", (e, t) => r.__awaiter(this, void 0, void 0, function*() {
            global.__cm__mpLog.info("[media-player][主进程][common:check-file-exists][参数] " + JSON.stringify(t));
            try {
                yield o.default.promises.stat(t.filePath);
                const e = {
                    success: !0,
                    exists: !0
                };
                return global.__cm__mpLog.info("[media-player][主进程][common:check-file-exists][结果] " + JSON.stringify(e)), 
                e;
            } catch (e) {
                if ("ENOENT" === e.code) {
                    const e = {
                        success: !0,
                        exists: !1
                    };
                    return global.__cm__mpLog.info("[media-player][主进程][common:check-file-exists][结果] 文件不存在"), 
                    e;
                }
                return global.__cm__mpLog.error("[media-player][主进程][common:check-file-exists][结果异常] " + e.message), 
                {
                    success: !1,
                    exists: !1
                };
            }
        })), i.ipcMain.handle("common:get-file-size", (e, t) => {
            global.__cm__mpLog.info("[media-player][主进程][common:get-file-size][参数] " + JSON.stringify(t));
            try {
                const e = o.default.statSync(t.filePath, {
                    throwIfNoEntry: !1
                });
                return global.__cm__mpLog.info(`[media-player][主进程][common:get-file-size][结果] size: ${null == e ? void 0 : e.size})}`), 
                null == e ? void 0 : e.size;
            } catch (e) {
                return global.__cm__mpLog.info("[media-player][主进程][common:get-file-size[结果异常] " + e.message), 
                0;
            }
        }), i.ipcMain.on("common:open-others", (e, t) => {
            var n;
            global.__cm__mpLog.info("[media-player][主进程][common:open-others][参数] " + JSON.stringify(t));
            try {
                null === (n = a.default.getTargetSender(t.windowId)) || void 0 === n || n.send("common:open-others", t);
            } catch (e) {
                global.__cm__mpLog.info("[media-player][主进程][common:open-others[结果异常] " + e.message);
            }
        }), i.ipcMain.on("common:local-open-others", (e, t) => {
            var n;
            global.__cm__mpLog.info("[media-player][主进程][common:local-open-others][参数] " + JSON.stringify(t));
            try {
                null === (n = a.default.getTargetSender(t.windowId)) || void 0 === n || n.send("common:local-open-others", t);
            } catch (e) {
                global.__cm__mpLog.info("[media-player][主进程][common:local-open-others[结果异常] " + e.message);
            }
        }), i.ipcMain.on("common:noticeVdfs", (e, t) => {
            var n;
            global.__cm__mpLog.info("[media-player][主进程][common:noticeVdfs][参数] " + JSON.stringify(t));
            try {
                null === (n = a.default.getTargetSender(t.windowId)) || void 0 === n || n.send("common:noticeVdfs", t);
            } catch (e) {
                global.__cm__mpLog.info("[media-player][主进程][common:noticeVdfs[结果异常] " + e.message);
            }
        });
    };
}
