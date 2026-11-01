// analysis/pretty/main.js:132304; webpack module 1727
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.init = void 0;
    const r = n(0), i = r.__importDefault(n(4)), o = r.__importDefault(n(1)), a = n(2), s = r.__importDefault(n(1728)), l = r.__importDefault(n(1730)), c = n(112), u = n(56), d = n(1731), h = n(179), p = n(345);
    function f(e, t) {
        t.deviceId && new s.default(t).on("file-res", n => {
            e.reply(c.IpcEnum.DEVICE_BACKUP_SINGLE_FILE_END, {
                result: n,
                deviceId: t.deviceId
            });
        });
    }
    function _(e, t) {
        t.deviceId && "" != t.deviceId && t.pipeId && l.default.getInstance(t.deviceId).init(t);
    }
    function m(e, t) {
        t.deviceId && "" != t.deviceId && t.pipeId && l.default.getInstance(t.deviceId).start(t);
    }
    function g(e, t) {
        global.__dbLog.info(`[RestoreRequest]CONNECTED_DEVICE_CHANGE, type is ${t.action}, payload is:`, t.devices.map(e => e.deviceId)), 
        "removeDevice" == t.action && l.default.clearInstance(null == t ? void 0 : t.devices);
    }
    function v(e, t) {
        return r.__awaiter(this, void 0, void 0, function*() {
            let e = !1, n = "";
            if ("darwin" == process.platform) yield a.shell.trashItem(h.getPlatformMatchedPath(t)).then(() => {
                e = !0, global.__dbLog.info("[ipc]handleRecyclePathFiles trashItem success: " + t);
            }).catch(e => {
                n = null == e ? void 0 : e.toString(), global.__dbLog.error(`[ipc]handleRecyclePathFiles trashItem ${t},  fail: ${e}, errorMsg:${n}`), 
                n = n.includes("EPERM") || n.includes("EACCES") || n.includes("operation can’t be completed because the file is in use") ? "3" : "4";
            }); else {
                const {success: r, err: i} = h.deleteFolder(t);
                e = r, r || (global.__dbLog.error(`[ipc]handleRecyclePathFiles trashItem ${t}, errorMsg:${n}`), 
                n = i.includes("EBUSY") ? "3" : "4");
            }
            return e || i.default.existsSync(o.default.resolve(t, "./metadata")) || i.default.existsSync(o.default.resolve(t, "./manifest")) || (e = !0, 
            n = ""), {
                isSuccess: e,
                errorMsg: n
            };
        });
    }
    t.init = function() {
        a.ipcMain.on(c.IpcEnum.DEVICE_BACKUP_FILE, f), a.ipcMain.on(c.IpcEnum.DEVICE_RESTORE_INIT_PIPE, _), 
        a.ipcMain.on(c.IpcEnum.DEVICE_RESTORE_PUSH_FILE, m), a.ipcMain.on(c.IpcEnum.DEVICE_RESTORE_PIPE_END, (e, t) => {
            t && l.default.getInstance(t).handlePipeEnd();
        }), a.ipcMain.on(u.ConnectionRendererEvent.CONNECTED_DEVICE_CHANGE, g), a.ipcMain.handle(c.IpcEnum.RECYCLE_PATH_FILES, v), 
        a.ipcMain.handle(c.IpcEnum.DEVICE_BACKUP_GET_RECORDS, (e, t) => d.readPcBackupRecords(t)), 
        a.ipcMain.handle(c.IpcEnum.DEVICE_BACKUP_RENAME_RECORD, (e, t, n) => d.renameBackupRecord(t, n)), 
        a.ipcMain.on(c.IpcEnum.ADD_PATH_HISTORY, (e, t) => p.addPathHistory(t)), a.ipcMain.handle(c.IpcEnum.GET_PATH_HISTORY, () => p.getPathHistory());
    };
}
