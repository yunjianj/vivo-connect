// analysis/pretty/main.js:37262; webpack module 344
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.send2MainWebcontent = t.checkIsSubpath = t.initDeviceBackup = void 0;
    const r = n(0), i = r.__importDefault(n(1)), o = r.__importDefault(n(6)), a = n(112), s = n(345), l = n(94);
    function c(e, t) {
        const n = global.__mainWindow;
        null == n || n.isDestroyed() ? global.__dbLog.error("[deviceBackup]send 2 main error") : n.webContents.send(e, t);
    }
    t.initDeviceBackup = function() {
        return r.__awaiter(this, void 0, void 0, function*() {
            !function() {
                r.__awaiter(this, void 0, void 0, function*() {
                    if (o.default.getItem(a.DB_STORAGE_KEY.BACKUP_PATH)) return;
                    yield l.initDeviceBackupDirPath();
                    const e = o.default.getItem(a.DB_STORAGE_KEY.BACKUP_PATH);
                    s.addPathHistory(e), c(a.IpcEnum.BACKUP_PATH_INITIALIZED, e);
                });
            }();
        });
    }, t.checkIsSubpath = function(e, t) {
        if (e && t) {
            const n = i.default.relative(t, e);
            if (n && n.startsWith("..") && n.endsWith("..")) return !0;
        }
        return !1;
    }, t.send2MainWebcontent = c;
}
