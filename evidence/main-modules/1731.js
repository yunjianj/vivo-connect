// analysis/pretty/main.js:132581; webpack module 1731
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.renameBackupRecord = t.readPcBackupRecords = void 0;
    const r = n(0), i = r.__importDefault(n(4)), o = r.__importDefault(n(232)), a = r.__importDefault(n(1)), s = n(7), l = r.__importDefault(n(6)), c = n(179), u = n(112), d = n(345);
    function h(e, t) {
        const n = s.createHash("sha256").update(e).digest("base64").replace(/\//g, "_").replace(/\=/g, "").replace(/\+/g, "");
        return t ? n.slice(0, t) : n;
    }
    t.readPcBackupRecords = function(e) {
        return r.__awaiter(this, void 0, void 0, function*() {
            let t = [];
            e ? t.push(e) : (t = d.getPathHistory().map(e => e.path), t.length || t.push(l.default.getItem(u.DB_STORAGE_KEY.BACKUP_PATH) || ""));
            let n = t.map(e => {
                const t = a.default.resolve(e, "./vivo/vivoBackup");
                let n = [];
                try {
                    i.default.existsSync(t) && i.default.readdirSync(t).forEach(e => {
                        const r = a.default.join(t, e);
                        if (i.default.statSync(r).isDirectory()) {
                            const e = function(e) {
                                let t = "", n = Buffer.from(""), r = null;
                                try {
                                    t = i.default.readFileSync(a.default.resolve(e, "./metadata"), {
                                        encoding: "utf-8"
                                    }), n = i.default.readFileSync(a.default.resolve(e, "./manifest")), r = JSON.parse(t);
                                } catch (t) {
                                    global.__dbLog.error(`[BackupRecord]${e}, read file error:`, t);
                                }
                                if (!t.length || !n.length || null == r) return null;
                                if (!e.includes(h(t, 32))) return global.__dbLog.error(`[BackupRecord]${e}, metadata check failed`), 
                                null;
                                if (r.d6 != h(n)) return global.__dbLog.error(`[BackupRecord]${e}, manifest check failed`), 
                                null;
                                try {
                                    const t = i.default.readFileSync(a.default.resolve(e, "./result_info"), {
                                        encoding: "utf-8"
                                    }), n = JSON.parse(t), o = n.exceptionCount > 0 ? c.getFolderSize(e).size : r.cn, s = n.timestamps > 0 ? n.timestamps : r.a2;
                                    r.cn = o, r.a2 = s, r.kn = n.exceptionCount;
                                } catch (t) {
                                    global.__dbLog.error(`[BackupRecord]${e}, read result_info error:`, t);
                                }
                                return {
                                    backupId: r.a1,
                                    filePath: e,
                                    backupName: r.b2,
                                    backupTime: r.a2,
                                    backupSize: r.cn,
                                    failureItemCount: r.kn,
                                    deviceType: 3 == r.pa ? 2 : 1,
                                    meteData: r
                                };
                            }(r);
                            null != e && n.push(e);
                        }
                    });
                } catch (e) {
                    global.__dbLog.error("[BackupRecord]readSingleBackupRecord error:", e);
                }
                return n.sort((e, t) => t.backupTime - e.backupTime), {
                    path: e,
                    list: n
                };
            }).filter(e => e.list.length > 0);
            return n.sort((e, t) => t.list[0].backupTime - e.list[0].backupTime), n;
        });
    }, t.renameBackupRecord = function(e, t) {
        e = c.getPlatformMatchedPath(e);
        const n = a.default.resolve(e, "./metadata");
        let r = "", s = null;
        try {
            r = i.default.readFileSync(n, {
                encoding: "utf-8"
            }), s = JSON.parse(r);
        } catch (t) {
            global.__dbLog.error(`[renameBackupRecord]${e}, read file error:`, t);
        }
        if (!r.length || null == s) return "read file error, path is " + e;
        const l = e.split(a.default.sep).pop();
        if (!l || !l.includes("-")) return "get currentDirName error, " + l;
        let u = l.split("-");
        if (3 != u.length) return "currentDirName split error, " + l;
        const d = Object.assign(Object.assign({}, s), {
            b2: t
        }), p = h(JSON.stringify(d), 32);
        u[2] = p;
        const f = u.join("-");
        let _ = e.split(a.default.sep);
        _.pop(), _.push(f);
        try {
            i.default.writeFileSync(n, JSON.stringify(d));
        } catch (t) {
            return global.__dbLog.error(`[renameBackupRecord]${e}, write metadata error:`, t), 
            "write metadata error";
        }
        try {
            o.default.renameSync(e, _.join(a.default.sep));
        } catch (t) {
            global.__dbLog.error(`[renameBackupRecord]${e}, rename dir error:`, t);
            try {
                i.default.writeFileSync(n, JSON.stringify(s));
            } catch (e) {
                global.__dbLog.error("[renameBackupRecord]revert metadata error:", e);
            }
            return "rename dir error";
        }
        return "";
    };
}
