// analysis/pretty/main.js:25827; webpack module 201
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.cleanOldCrashReports = t.registerCrashReporter = t.removeLogZip = t.getTxtFileZip = t.getLogZip = t.createLogger = t.initMainLog = t.initRenderLog = t.initLog = void 0;
    const r = n(0), i = r.__importDefault(n(8)), o = n(2), a = r.__importDefault(n(182)), s = r.__importDefault(n(6));
    n(993);
    const l = n(4), c = n(1), u = n(411), {format: d} = u, h = "win32" === i.default.platform(), p = "darwin" === i.default.platform(), f = "renderer" === process.type ? n(146).app : o.app, _ = c.join(f.getPath("appData"), "/pcsuite/log"), m = h ? _ : S(), g = p ? c.join(i.default.homedir(), "Library", "Containers", "com.vivo.pcsuite.vdfs/Data/Library/Application Support/pcsuite/log") : void 0, v = p ? c.join(i.default.homedir(), "Library", "Containers", "com.vivo.pcsuite.vdfs.fileproviderExt/Data/Library/Application Support/pcsuite/log") : void 0;
    let y = [], E = [];
    const b = e => {
        const t = e.logDir || c.join(_, "/framework_log"), n = [ new u.transports.DailyRotateFile({
            dirname: c.join(t, e.name),
            filename: ("" != e.name ? e.name + "-" : "") + "%DATE%",
            extension: ".log",
            maxSize: "15m",
            maxFiles: 7,
            maxDays: 7,
            json: !1
        }) ];
        try {
            const t = "" != e.name ? `[${e.name}]` : "";
            return new u.createLogger({
                format: d.combine(d.label({
                    label: e.encrypt ? "[T]" + t : "" + t
                }), d.timestamp({
                    format: "YYYY-MM-DD HH:mm:ss.SSS"
                }), d.splat(), d.simple(), d.printf(({level: t, timestamp: n, message: r, label: i}) => (r = function(e) {
                    if ("string" != typeof e) return e;
                    const t = e => !e || e.length <= 6 ? e : e.slice(0, 3) + "***" + e.slice(-3), n = [ "token", "openId", "openid", "open_id", "open_Id", "userId", "clientId", "vivotoken", "lastToken", "deviceId", "device_id", "pcDeviceId", "vivo_account_cookie_iqoo_vivotoken", "vivo_account_cookie_iqoo_openid", "vivo_account_cookie_iqoo_deviceid", "newToken", "randomId", "cloudDeviceId" ];
                    return n.forEach(n => {
                        const r = new RegExp(`"${n}":"([^"]*)"`, "g");
                        e = e.replace(r, (e, r) => `"${n}":"${t(r)}"`);
                    }), n.forEach(n => {
                        const r = new RegExp(`\\\\"${n}\\\\":\\\\"([^"\\\\]*)\\\\"`, "g");
                        e = e.replace(r, (e, r) => `\\"${n}\\":\\"${t(r)}\\"`);
                    }), e = e.replace(/(token\s*[:=]\s*)([a-fA-F0-9]{8,})/g, (e, n, r) => n + t(r));
                }(r = e.encrypt ? `[${a.default.Encrypt(r)}]` : r), [ n, `:[${t.toUpperCase()}]`, i, r ].join("")))),
                transports: n
            });
        } catch (e) {
            console.error("create log  error", e);
        }
    };
    function w(e = 7) {
        return r.__awaiter(this, void 0, void 0, function*() {
            try {
                global.__log.info("cleanOldCrashReports start");
                const t = Date.now(), n = 24 * e * 60 * 60 * 1e3, i = f.getPath("userData"), o = c.join(i, "Crashpad");
                global.__log.info("cleanOldCrashReports crashpadDir:" + o);
                try {
                    yield l.promises.access(o);
                } catch (e) {
                    return void global.__log.info("cleanOldCrashReports no dir");
                }
                let a = 0;
                if (yield function e(i) {
                    return r.__awaiter(this, void 0, void 0, function*() {
                        const o = (yield l.promises.readdir(i, {
                            withFileTypes: !0
                        })).map(o => r.__awaiter(this, void 0, void 0, function*() {
                            const r = c.join(i, o.name);
                            if (o.isDirectory()) yield e(r); else if (o.isFile()) try {
                                const e = yield l.promises.stat(r);
                                t - e.mtimeMs > n && (yield l.promises.unlink(r), a++);
                            } catch (e) {
                                const t = global.__log;
                                (null == t ? void 0 : t.error) && t.error(`Error processing file ${r}: ${e}`);
                            }
                        }));
                        yield Promise.all(o);
                    });
                }(o), global.__log.info("cleanOldCrashReports totalDeletedCount: " + a), a > 0) {
                    const t = global.__log;
                    (null == t ? void 0 : t.info) && t.info(`Cleaned ${a} crash reports older than ${e} days from Crashpad directory`);
                }
            } catch (e) {
                const t = global.__log;
                (null == t ? void 0 : t.error) && t.error("Error cleaning crash reports: " + e);
            }
        });
    }
    function S() {
        const e = o.app ? o.app : n(146).app, t = e.getName();
        return c.resolve(e.getPath("appData"), "./" + t, "./log");
    }
    function T(e, t) {
        let n = 0, r = "", i = t || m;
        try {
            l.readdirSync(i).forEach(t => {
                console.log("files", t);
                const o = c.join(i, t);
                if (l.statSync(o).isDirectory()) {
                    const a = function(e) {
                        let t = 0;
                        try {
                            !function e(n) {
                                const r = l.statSync(n);
                                if (r.isDirectory()) {
                                    l.readdirSync(n).forEach(t => {
                                        e(c.join(n, t));
                                    });
                                } else t += r.size;
                            }(e);
                        } catch (e) {
                            u.error("calcDirSize error", e);
                        }
                        return t;
                    }(o);
                    if (-1 == t.indexOf("cut")) if (a > 104857600) {
                        y.push(t);
                        let s = `ModuleLogPath: ${o},  TotalSize: ${Math.ceil(a / 1024 / 1024 * 10) / 10}M\n`, d = function(e) {
                            let t = "";
                            try {
                                !function e(n) {
                                    const r = l.statSync(n);
                                    if (r.isDirectory()) {
                                        l.readdirSync(n).forEach(t => {
                                            e(c.join(n, t));
                                        });
                                    } else {
                                        let e = r.mtime;
                                        t += `FileName: ${c.basename(n)}, Size:${Math.ceil(r.size / 1024)}KB, LastModifiedTime:${e.getFullYear()}-${("0" + (e.getMonth() + 1)).slice(-2)}-${("0" + e.getDate()).slice(-2)}\n`;
                                    }
                                }(e);
                            } catch (e) {
                                u.error("getFileInfo", e);
                            }
                            return t;
                        }(o), h = c.join(i, `${t}_${e}_cut`);
                        !l.existsSync(h) && l.mkdirSync(h), function(e, t) {
                            const n = c.join(m, e), r = (new Date).valueOf();
                            let i = 0;
                            try {
                                if (function e(t) {
                                    const n = l.statSync(t);
                                    if (n.isDirectory()) {
                                        l.readdirSync(t).forEach(n => {
                                            e(c.join(t, n));
                                        });
                                    } else {
                                        const e = new Date(n.mtime).valueOf();
                                        r - e <= 1728e5 && (i += n.size);
                                    }
                                }(n), i <= 104857600) global.__log.info(`${e}模块最近2天的日志大小为${Math.ceil(i / 1024 / 1024 * 10) / 10}M，打包该模块日志`), 
                                function n(i) {
                                    const o = l.statSync(i);
                                    if (o.isDirectory()) {
                                        l.readdirSync(i).forEach(e => {
                                            n(c.join(i, e));
                                        });
                                    } else {
                                        const n = new Date(o.mtime).valueOf();
                                        if (r - n <= 1728e5) {
                                            const n = c.basename(i), r = c.join(m, `${e}_${t}_cut`, n), o = l.createReadStream(i), a = l.createWriteStream(r);
                                            o.on("error", e => {
                                                global.__log.error(e);
                                            }), a.on("error", e => {
                                                global.__log.error(e);
                                            }), a.on("finish", () => {}), o.pipe(a);
                                        }
                                    }
                                }(n); else {
                                    global.__log.info(`${e}模块最近2天的日志大小为${Math.ceil(i / 1024 / 1024 * 10) / 10}M，超过100M，不打包该模块日志`);
                                    const n = c.resolve(m, `${e}_${t}_cut/tip.txt`);
                                    let r = `该模块最近2天的日志大小为${Math.ceil(i / 1024 / 1024 * 10) / 10}M,超过100M，不打包该模块日志`;
                                    l.writeFileSync(n, r);
                                }
                            } catch (e) {
                                u.error("getLatestFile error", e);
                            }
                        }(t, e), r += `${s}${d}\n`, n++;
                    } else E.push(o);
                }
            });
            const t = c.resolve(m, "../", `overSizeLogInfo-${e}.txt`);
            let o = `_logPath: ${i}, Number of Oversize Module Logs:${n}\n\n${r}`;
            l.appendFile(t, o, e => {
                if (e) {
                    const t = JSON.stringify(e);
                    global.__log.info("handleModuleLog fs.appendFile error " + t);
                }
            });
        } catch (e) {
            u.error("handleModuleLog error", e);
        }
    }
    function A(e, t, n, i) {
        return r.__awaiter(this, void 0, void 0, function*() {
            return new Promise(o => r.__awaiter(this, void 0, void 0, function*() {
                const r = yield O(t, i);
                if (r) if (r.isDirectory()) {
                    const r = yield function(e, t = Date.now()) {
                        return new Promise(n => {
                            l.readdir(e, (e, r) => {
                                if (e) {
                                    const r = JSON.stringify(e);
                                    global.__log.info("fsReaddir error " + r), C(t, "fsReaddir error " + r), n([]);
                                } else n(r);
                            });
                        });
                    }(t, i);
                    for (var a = 0; a < r.length; a++) {
                        const o = r[a], s = c.join(t, o), l = yield O(s, i);
                        l && (l.isDirectory() ? yield A(e, s, n, i) : e.file(s, {
                            name: c.relative(n, s)
                        }));
                    }
                    o(!0);
                } else e.file(t, {
                    name: c.relative(n, t)
                }), o(!0); else o(!0);
            }));
        });
    }
    function O(e, t = Date.now()) {
        return new Promise(n => {
            l.stat(e, (e, r) => {
                if (e) {
                    const r = JSON.stringify(e);
                    global.__log.info("fsStat error " + r), C(t, "fsStat error " + r), n(null);
                } else n(r);
            });
        });
    }
    function C(e, t) {
        const n = c.resolve(m, "../", `overSizeLogInfo-${e}.txt`);
        l.appendFile(n, t, e => {
            if (e) {
                const t = JSON.stringify(e);
                global.__log.info("writeErrorToTxt error " + t);
            }
        });
    }
    t.createLogger = b, t.registerCrashReporter = function() {
        const e = {
            openid: null != s.default.getItem("userInfo") ? s.default.getItem("userInfo").openId : "vistor",
            user: i.default.userInfo().username + "@" + i.default.hostname(),
            platformType: h ? "1" : "2"
        };
        o.crashReporter.start({
            productName: "vivo-collection-app",
            companyName: "vivo",
            uploadToServer: !1,
            compress: !1,
            globalExtra: e
        }), setTimeout(() => {
            w(7);
        }, 3e4);
    }, t.cleanOldCrashReports = w, t.initRenderLog = function({moduleName: e = "render", encrypt: t = !1}) {
        try {
            return b({
                name: e,
                logDir: h ? void 0 : S(),
                encrypt: t
            });
        } catch (e) {
            throw new Error("create render_log error:" + e);
        }
    }, t.initMainLog = function({encrypt: e = !1}) {
        try {
            return b({
                name: "main",
                logDir: h ? void 0 : S(),
                encrypt: e
            });
        } catch (e) {
            throw new Error("create main_log error:" + e);
        }
    }, t.initLog = function(e, t) {
        try {
            return b({
                name: e,
                logDir: c.resolve(m, t)
            });
        } catch (e) {
            throw new Error("initLog error:" + e);
        }
    }, t.getLogZip = function(e) {
        return r.__awaiter(this, void 0, void 0, function*() {
            global.__log.info("enter getLogZip"), E = [], y = [], T(e), p && (T(e, g), T(e, v));
            const t = c.join(f.getPath("userData"), "Crashpad");
            T(e, t);
            const i = n(204);
            return new Promise((t, n) => r.__awaiter(this, void 0, void 0, function*() {
                try {
                    global.__log.info("begin pack log");
                    const r = c.resolve(m, "../", `log-${e}.zip`), o = c.resolve(m, "../", `overSizeLogInfo-${e}.txt`);
                    global.__log.info("logPath:" + m), global.__log.info("outputPath:" + r);
                    const a = i("zip", {
                        statConcurrency: 16,
                        zlib: {
                            level: 1
                        }
                    }), s = l.createWriteStream(r);
                    a.pipe(s);
                    for (let t = 0; t < E.length; t++) {
                        const n = E[t];
                        yield A(a, n, m, e);
                    }
                    for (let t = 0; t < y.length; t++) {
                        const n = y[t], r = c.join(m, `${n}_${e}_cut`);
                        yield A(a, r, m, e);
                    }
                    a.file(o, {
                        name: "overSizeLogInfo.txt"
                    }), s.on("error", e => {
                        global.__log.error("end pack log outputStream error " + e);
                    }), s.on("end", () => {
                        global.__log.error("end pack log outputStream end");
                    }), s.on("close", () => {
                        global.__log.info("end pack log outputStream close"), t(l.promises.readFile(r));
                    }), a.on("finish", () => {
                        global.__log.info("end pack log archive finish");
                    }), a.on("error", e => {
                        global.__log.error("LOG_FILE_ARCHIVE_ERROR: ", e), n("LOG_FILE_ARCHIVE_ERROR");
                    }), a.on("warning", e => {
                        "ENOENT" === e.code ? global.__log.warn("end pack log archive warning ENOENT " + JSON.stringify(e)) : global.__log.warn("end pack log archive warning err " + JSON.stringify(e));
                    }), a.finalize();
                } catch (e) {
                    global.__log.error("archive打包zip error: ", e), n(e);
                }
            }));
        });
    }, t.getTxtFileZip = function(e) {
        return new Promise((t, i) => r.__awaiter(this, void 0, void 0, function*() {
            try {
                global.__log.info("enter getTxtFileZip"), global.__log.info("不打包模块日志，只打包overSizeLogInfo.txt文件");
                const r = n(204), o = c.resolve(m, "../", `err-log-${e}.zip`), a = c.resolve(m, "../", `overSizeLogInfo-${e}.txt`), s = r("zip", {
                    statConcurrency: 16,
                    zlib: {
                        level: 1
                    }
                }), u = l.createWriteStream(o);
                s.pipe(u), s.file(a, {
                    name: "overSizeLogInfo.txt"
                }), u.on("close", () => {
                    t(l.promises.readFile(o));
                }), s.on("error", e => {
                    global.__log.error("getTxtFileZip archive ERROR: ", e), i("");
                }), s.finalize();
            } catch (e) {
                global.__log.error("getTxtFileZip error: ", e), i(e);
            }
        }));
    }, t.removeLogZip = function(e, t) {
        window._log.info("enter remove log");
        try {
            const n = c.resolve(m, "../", `log-${e}.zip`), r = c.resolve(m, "../", `err-log-${e}.zip`);
            1 == t ? l.promises.unlink(r).then(() => {
                window._log.info(r + " 日志删除成功");
            }).catch(e => {
                window._log.error(`${r} 日志删除失败：${e}`);
            }) : l.promises.unlink(n).then(() => {
                window._log.info(n + " 日志删除成功");
            }).catch(e => {
                window._log.error(`${n} 日志删除失败：${e}`);
            });
            const i = c.resolve(m, "../", `overSizeLogInfo-${e}.txt`);
            l.promises.unlink(i).then(() => {
                window._log.info(i + " txt文件删除成功");
            }).catch(e => {
                console.error(e);
            }), function e(t) {
                try {
                    const n = l.readdirSync(m);
                    n.filter(e => e.indexOf(t) > -1).forEach(t => {
                        const n = c.join(m, t);
                        l.readdirSync(n).forEach(t => {
                            let r = c.join(n, t);
                            l.statSync(r).isDirectory() ? e(r) : l.unlinkSync(r);
                        }), l.rmdirSync(n), window._log.info(n + " 文件夹删除成功");
                    });
                } catch (e) {
                    window._log.error("删除文件夹失败：" + e);
                }
            }(e);
        } catch (e) {
            window._log.error("removeLogZip:" + e);
        }
    };
}
