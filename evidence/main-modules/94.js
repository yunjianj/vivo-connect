// analysis/pretty/main.js:15908; webpack module 94
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.initDeviceBackupDirPath = t.initDefaultReceiveAndBackupPath = t.initBackupDirPath = t.initReceiveFilesPath = t.getAppName = t.openDownloadTarget = t.openSuccessFiles = t.getAppDocumentsPath = t.getAppDownloadPath = void 0;
    const r = n(0), i = n(2), o = r.__importDefault(n(8)), a = r.__importDefault(n(1)), s = n(2), l = r.__importDefault(n(4)), c = r.__importDefault(n(6)), u = n(112);
    function d() {
        try {
            return i.app.getPath("downloads");
        } catch (e) {
            global.__log.error("getAppDownloadPath error: " + e);
            const t = o.default.userInfo(), n = a.default.join(t.homedir, "Downloads");
            return global.__log.info("os.userInfo().homedir path : " + n), n;
        }
    }
    function h() {
        try {
            return i.app.getPath("documents");
        } catch (e) {
            global.__log.error("getAppDocumentsPath error: " + e);
            const t = o.default.userInfo(), n = a.default.join(t.homedir, "Documents");
            return global.__log.info("os.userInfo().homedir path : " + n), n;
        }
    }
    function p() {
        if ("br" === ("undefined" != typeof __buildConfig__ ? __buildConfig__.CHANNEL_CODE : "")) return "JOVI Office Kit";
        return !("undefined" == typeof __buildConfig__ || !__buildConfig__.IS_EXPORT) ? "vivo Office Kit" : "vivo办公套件";
    }
    function f() {
        return r.__awaiter(this, void 0, void 0, function*() {
            if (!c.default.getItem("receiveFilesPath")) {
                global.__log.info("[main][urils.ts] initReceiveFilesPath");
                const e = d(), t = p(), n = a.default.join(e, t);
                yield m(n), c.default.setItem("receiveFilesPath", n);
            }
        });
    }
    function _() {
        return r.__awaiter(this, void 0, void 0, function*() {
            if (!!("undefined" == typeof __buildConfig__ || !__buildConfig__.IS_EXPORT) && !c.default.getItem("backupDir")) {
                global.__log.info("[main][urils.ts] initBackupDirPath");
                const e = h(), t = p(), n = "图片视频备份", r = a.default.join(e, t, n);
                yield m(r), c.default.setItem("backupDir", r);
            }
        });
    }
    function m(e) {
        return new Promise(t => {
            l.default.access(e, l.default.constants.F_OK, n => {
                n ? l.default.mkdir(e, {
                    recursive: !0
                }, n => {
                    n ? (global.__log.info("[main][urils.ts] dirNotExistAndMkdir mkdir err: " + e), 
                    t(!0)) : (global.__log.info("[main][urils.ts] dirNotExistAndMkdir mkdir success: " + e), 
                    t(!0));
                }) : (global.__log.info("[main][urils.ts] dirNotExistAndMkdir success: " + e), t(!0));
            });
        });
    }
    t.getAppDownloadPath = d, t.getAppDocumentsPath = h, t.openSuccessFiles = function(e) {
        Array.isArray(e) && 0 !== e.length && s.shell.showItemInFolder(e[0]);
    }, t.openDownloadTarget = function(e) {
        if (!l.default.existsSync(e)) return;
        const t = l.default.statSync(e);
        t.isFile() ? s.shell.showItemInFolder(e) : t.isDirectory() && s.shell.openPath(e);
    }, t.getAppName = p, t.initReceiveFilesPath = f, t.initBackupDirPath = _, t.initDefaultReceiveAndBackupPath = function() {
        f(), _();
    }, t.initDeviceBackupDirPath = function() {
        return r.__awaiter(this, void 0, void 0, function*() {
            if (!!("undefined" == typeof __buildConfig__ || !__buildConfig__.IS_EXPORT) && !c.default.getItem(u.DB_STORAGE_KEY.BACKUP_PATH)) {
                global.__log.info("[main][urils.ts] initDeviceBackupDirPath");
                const e = h(), t = p(), n = "整机备份", r = a.default.join(e, t, n);
                yield m(r), c.default.setItem(u.DB_STORAGE_KEY.BACKUP_PATH, r);
            }
        });
    };
}
