// analysis/pretty/main.js:24242; webpack module 179
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.deleteFolder = t.getDiskInfo = t.getFolderFileInfo = t.getFolderSize = t.getPlatformMatchedPath = t.checkDirExist = t.checkDirPermission = t.init = void 0;
    const r = n(0), i = r.__importDefault(n(4)), o = r.__importDefault(n(1)), a = r.__importDefault(n(28)), s = n(2), l = n(1729);
    function c(e) {
        e = d(e);
        let t = !0, n = !0;
        try {
            i.default.readdirSync(e);
        } catch (e) {
            t = !1, global.__log.error("[fs]checkDirPermission readable error, " + JSON.stringify(e));
        }
        try {
            const t = o.default.join(e, "test.txt");
            i.default.writeFileSync(t, "test"), i.default.existsSync(t) ? i.default.unlinkSync(t) : n = !1;
        } catch (e) {
            n = !1, global.__log.error("checkDirPermission writable error, " + JSON.stringify(e));
        }
        return t && n ? "wr" : t || n ? t ? "r" : "w" : "none";
    }
    function u(e, t) {
        return new Promise(n => {
            try {
                i.default.existsSync(e) ? n(!0) : t ? i.default.mkdir(e, {
                    recursive: !0
                }, e => {
                    if (null != e) return global.__log.error("[fs]checkDirExist err: " + JSON.stringify(e)), 
                    void n(!1);
                    n(!0);
                }) : n(!1);
            } catch (e) {
                global.__log.error("[fs]checkDirExist err: " + JSON.stringify(e)), n(!1);
            }
        });
    }
    function d(e = "") {
        const t = e.includes("\\");
        return e.split(t ? "\\" : "/").join(o.default.sep);
    }
    function h(e) {
        let t = 0, n = !0, r = null;
        try {
            n = i.default.statSync(e).isDirectory();
            const r = e => {
                const n = i.default.statSync(e);
                n.isFile() ? t += n.size : i.default.readdirSync(e).forEach(t => {
                    r(o.default.resolve(e, t));
                });
            };
            r(e);
        } catch (e) {
            r = e, global.__log.error("[fs]getFolderSize error, " + JSON.stringify(e));
        }
        return {
            size: t,
            isDirectory: n,
            err: r
        };
    }
    function p(e, t = 1 / 0) {
        let n = [];
        try {
            const r = (e, a) => {
                const s = i.default.statSync(e);
                n.push({
                    fullPath: e,
                    size: s.size,
                    lasModifyTime: s.mtime.valueOf(),
                    isDirectory: s.isDirectory()
                }), s.isDirectory() && a <= t && i.default.readdirSync(e).forEach(t => {
                    r(o.default.resolve(e, t), a + 1);
                });
            };
            r(e, 1);
        } catch (e) {
            global.__log.error("[fs]getFolderFileInfo error, " + JSON.stringify(e));
        }
        return n;
    }
    function f(e) {
        let t = null;
        try {
            t = JSON.parse(a.default.getDiskInfo(e));
        } catch (e) {
            global.__log.error("[fs]getDiskInfo error: " + (e.meesage || e));
        }
        return t;
    }
    t.init = function() {
        s.ipcMain.handle(l.FS_UTILS_IPC_EVENTS.CHECK_DIR_PERMISSION, (e, t) => c(t)), s.ipcMain.handle(l.FS_UTILS_IPC_EVENTS.CHECK_DIR_EXSITS, (e, t) => u(t.path, t.makeFlag)), 
        s.ipcMain.handle(l.FS_UTILS_IPC_EVENTS.GET_PLATFORM_MATCHED_PATH, (e, t) => d(t)), 
        s.ipcMain.handle(l.FS_UTILS_IPC_EVENTS.GET_FOLDER_FILE_INFO, (e, t) => p(t.dir, t.depth)), 
        s.ipcMain.handle(l.FS_UTILS_IPC_EVENTS.GET_FOLDER_SIZE, (e, t) => h(t)), s.ipcMain.handle(l.FS_UTILS_IPC_EVENTS.GET_DISK_INFO, (e, t) => f(t));
    }, t.checkDirPermission = c, t.checkDirExist = u, t.getPlatformMatchedPath = d, 
    t.getFolderSize = h, t.getFolderFileInfo = p, t.getDiskInfo = f, t.deleteFolder = function(e) {
        try {
            return function e(t) {
                i.default.readdirSync(t).forEach(n => {
                    const r = `${t}/${n}`;
                    i.default.statSync(r).isDirectory() ? e(r) : i.default.unlinkSync(r);
                });
            }(e), function e(t) {
                i.default.readdirSync(t).forEach(n => {
                    e(`${t}/${n}`);
                }), i.default.rmdirSync(t);
            }(e), {
                success: !0,
                err: ""
            };
        } catch (e) {
            return global.__log.error("[fs]deleteFolder err, " + JSON.stringify(e)), {
                success: !1,
                err: JSON.stringify(e)
            };
        }
    };
}
