// analysis/pretty/main.js:16202; webpack module 96
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.replaceSpecialSymbolsWin = t.replaceSpecialSymbolsMac = t.replaceSpecialSymbols = t.replaceSpecialSymbolsAndMax = t.getFileStat = t.delayPromise = t.getDiskSpaceLeft = t.getVdfsFullPath = t.createTimeOut = t.isPathOk = t.getCacheList = t.clearCache = t.setCacheData = t.getCacheFilePath = t.clearDirFiles = t.checkPathWritable = t.sleep = t.getOpenProgressSendThrottle = t.getProgressSendThrottle = t.sendProgress = t.closeAndDelete = void 0;
    const r = n(0), i = r.__importDefault(n(1)), o = r.__importDefault(n(4)), a = r.__importDefault(n(116)), s = r.__importDefault(n(28)), l = n(138), c = n(25);
    t.closeAndDelete = function(e) {
        if (e) try {
            const t = e.path;
            e.close(e => {
                null != e && global.__fmLog.error(JSON.stringify(e)), o.default.existsSync(t) && a.default.stat(t).then(e => {
                    e.isFile() && a.default.unlink(t);
                });
            });
        } catch (e) {
            global.__fmLog.error("[file-manager]currentStream close err" + e);
        }
    };
    let u = 0;
    function d(e) {
        const {app: t} = n(2);
        return n(1).join(t.getPath("userData"), "fm_thumb_cache", "" + e);
    }
    function h(e, t) {
        const n = d(e), r = encodeURIComponent(t + ".txt");
        return i.default.join(n, "" + r);
    }
    function p(e) {
        if (!e) return "";
        let t = "";
        return t = "darwin" == process.platform ? f(e) : _(e), t;
    }
    function f(e) {
        return e ? e.replace(/[\p{Extended_Pictographic}\u000A\u000D\u{1F600}-\u{1F64F}\u{1F900}-\u{1F9FF}\n\r\\:*?"<>'|]/gu, "_") : "";
    }
    function _(e) {
        return e ? e.replace(/[\p{Extended_Pictographic}\u000A\u000D\u{1F600}-\u{1F64F}\u{1F900}-\u{1F9FF}\n\r]/gu, "_") : "";
    }
    t.sendProgress = function(e, t) {
        const n = (new Date).valueOf();
        n - u > 500 && (e.reply(l.FM_RENDERER_ENUM.PROGRESS_EVENT, t), u = n);
    }, t.getProgressSendThrottle = function() {
        return c.throttle((e, t) => {
            e.reply(l.FM_RENDERER_ENUM.PROGRESS_EVENT, t);
        }, 300, {
            trailing: !0,
            leading: !1
        });
    }, t.getOpenProgressSendThrottle = function() {
        return c.throttle((e, t, n, r) => {
            e.reply(l.FM_RENDERER_ENUM.OPEN_FILE_PROGRESS, {
                progressId: t,
                type: "ing",
                totalSize: n,
                currentSize: r
            });
        }, 300);
    }, t.sleep = function(e) {
        return new Promise(t => setTimeout(t, e));
    }, t.checkPathWritable = function(e) {
        try {
            const t = i.default.join(e, "test.txt");
            return o.default.writeFileSync(t, "test"), o.default.existsSync(t) ? (o.default.unlinkSync(t), 
            Promise.resolve(!0)) : Promise.resolve(!1);
        } catch (e) {
            return Promise.resolve(!1);
        }
    }, t.clearDirFiles = function(e) {
        if (!o.default.existsSync(e)) return;
        o.default.readdirSync(e).forEach(t => {
            try {
                const n = i.default.join(e, t);
                o.default.statSync(n).isFile() && o.default.unlinkSync(n);
            } catch (e) {
                global.__fmLog.error("[fm]clearOpenFileTempDir error: " + e);
            }
        });
    }, t.getCacheFilePath = h, t.setCacheData = function(e, t, i) {
        return r.__awaiter(this, void 0, void 0, function*() {
            if (process.env.IS_WEB) return;
            const r = n(4), o = h(e, t), a = d(e);
            r.mkdirSync(a, {
                recursive: !0
            }), r.writeFileSync(o, i);
        });
    }, t.clearCache = function(e) {
        const t = n(4), r = d(e);
        t.existsSync(r) && t.promises.rm(r, {
            recursive: !0
        });
    }, t.getCacheList = function(e) {
        return r.__awaiter(this, void 0, void 0, function*() {
            const t = d(e);
            return o.default.existsSync(t) ? yield function e(t, n) {
                return r.__awaiter(this, void 0, void 0, function*() {
                    let r = [];
                    const a = yield o.default.promises.readdir(t, {
                        withFileTypes: !0
                    });
                    for (const s of a) {
                        const a = i.default.join(t, s.name);
                        if ((yield o.default.promises.stat(a)).isDirectory()) {
                            const t = yield e(a, s.name);
                            r = [ ...r, ...t ];
                        } else r.push(`${n}${s.name}`);
                    }
                    return r;
                });
            }(t, "") : [];
        });
    }, t.isPathOk = function(e) {
        return r.__awaiter(this, void 0, void 0, function*() {
            if (process.env.IS_WEB) return !1;
            const r = n(4);
            return new Promise(n => {
                const i = t.createTimeOut(3e3);
                i.updateTimeOut().then(() => {
                    global.__fmLog.info("[fm]isPathOk  timeout 3s"), n(!1);
                });
                try {
                    r.access(e, r.constants.R_OK, e => {
                        i.clearTimeOut(), n(!e);
                    });
                } catch (e) {
                    i.clearTimeOut(), global.__fmLog.error("[fm][isPathOk] error : " + JSON.stringify(e)), 
                    n(!1);
                }
            });
        });
    }, t.createTimeOut = e => {
        let t = null;
        const n = () => {
            t && clearTimeout(t);
        };
        return {
            updateTimeOut: () => (n(), new Promise(n => {
                t = setTimeout(() => {
                    n(!0);
                }, e);
            })),
            clearTimeOut: n
        };
    }, t.getVdfsFullPath = (e, t, n, r) => {
        if ("win32" == process.platform) {
            return i.default.join(e, t, n, r);
        }
        return i.default.join(e, r);
    }, t.getDiskSpaceLeft = function(e, t) {
        try {
            const n = s.default.getAvailableSpace(e);
            if (0 == n) throw new Error("DragFile.getAvailableSpace get free 0, path is " + e);
            const r = t.reduce((e, t) => e + (t.fileSize || t.size || 0), 0);
            return global.__fmLog.info(`[fm]getDiskFreeSpace free: ${n}, need: ${r}`), (n || 0) - r;
        } catch (e) {
            return global.__fmLog.error("[fm]getDiskFreeSpace error " + (e.message || e)), 1 / 0;
        }
    }, t.delayPromise = e => new Promise(t => {
        setTimeout(() => {
            t(!0);
        }, e);
    }), t.getFileStat = e => new Promise(t => {
        o.default.stat(e, (n, r) => {
            if (n) return global.__fmLog.info("[fm]getFileStat " + JSON.stringify(n)), void t({
                stats: r,
                error: n
            });
            o.default.access(e, o.default.constants.R_OK, e => {
                e ? (global.__fmLog.info("[fm]getFileStat " + JSON.stringify(e)), t({
                    stats: r,
                    error: e
                })) : t({
                    stats: r
                });
            });
        });
    }), t.replaceSpecialSymbolsAndMax = function(e) {
        return e = p(e), global.__fmLog.info(`[fm]TarFileManager handleTarCreate>>> str: ${e}} `), 
        e;
    }, t.replaceSpecialSymbols = p, t.replaceSpecialSymbolsMac = f, t.replaceSpecialSymbolsWin = _;
}
