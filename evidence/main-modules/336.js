// analysis/pretty/main.js:36669; webpack module 336
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    const r = n(0), i = r.__importDefault(n(1)), o = r.__importDefault(n(232)), a = r.__importDefault(n(4)), s = n(2), l = n(41), c = n(11), u = n(126), d = r.__importDefault(n(161)), h = r.__importDefault(n(6)), p = n(63), f = r.__importDefault(n(26)), _ = r.__importDefault(n(109)), m = r.__importDefault(n(219)), g = r.__importDefault(n(158)), v = r.__importDefault(n(216)), y = n(1418), E = r.__importDefault(n(110)), b = n(688), w = r.__importDefault(n(343)), S = !("undefined" == typeof __buildConfig__ || !__buildConfig__.IS_EXPORT), T = n(344);
    class A extends d.default {
        constructor() {
            super([ l.LogModule.FRAMEWORK, "BasicToolManager" ]);
        }
        static getInstance() {
            return this.instance || (this.instance = new A, this.instance.log.info("BasicToolManager instance created")), 
            this.instance;
        }
        get isUpgradeRelaunch() {
            return h.default.getItem("updateRelaunchflags") === y.UPGRADE_RELAUNCH_FLAGS.UPDATE;
        }
        initBasicWork() {
            return new Promise(e => r.__awaiter(this, void 0, void 0, function*() {
                let t = 0;
                const n = setInterval(() => {
                    ++t, t >= 10 && (this.log.info(`initBasicWork timeout:${t}s`), e(!0), clearInterval(n)), 
                    _.default.getInstance().getSyncServiceStatus() && (this.log.info("initBasicWork vivoSyncService start success"), 
                    e(!0), clearInterval(n));
                }, 1e3);
                yield E.default.getInstance().startRelationService(b.START_MODE.UPGRADE), this.log.info("initBasicWork startRelationService "), 
                e(!0);
            }));
        }
        initAppBeforeReady() {
            this.log.info("initAppBeforeReady"), v.default.init();
            const e = f.default.getSysVersion(), t = f.default.getAppVersion(), n = f.default.getHotVersion();
            h.default.setItem("systemVersion", e), h.default.setItem("appVersion", t), S && w.default.init(), 
            this.log.info(`\n            *********  printAppStartLog  *********\n            commandLine == process ${JSON.stringify(process.argv)}\n            pctoast_.exe == process ${process.argv}\n            currentVersion: ${t}\n            currentHotVersion: ${n}\n            platform: ${process.platform}\n            SystemVersion: ${e}\n            getSystemMemoryInfo: ${JSON.stringify(process.getSystemMemoryInfo())}\n            Chrome cors: ${process.versions.chrome}\n            appData:${s.app.getPath("appData")};\n            *********  printAppStartLog  *********`);
        }
        initWindowAfterReady() {
            m.default.getInstance().broadcastWindowLoadFinish(), this.initVtalkDB(), S || T.initDeviceBackup(), 
            this.handleLoginModalByCmd(), g.default.getInstance().init(), this.initAppStorageFolders(), 
            E.default.getInstance().launchVivoPreDetector(), this.printSystemInfo();
        }
        initAppStorageFolders() {
            return r.__awaiter(this, void 0, void 0, function*() {
                try {
                    const e = s.app.getPath("appData"), t = Object.values(u.APP_STORAGE_FOLDERS).map(t => r.__awaiter(this, void 0, void 0, function*() {
                        const n = i.default.join(e, "pcsuite", ...t);
                        return yield o.default.ensureDir(n);
                    }));
                    yield Promise.all(t), this.log.info("initAppStorageFolders success");
                } catch (e) {
                    this.log.error("initAppStorageFolders err: " + e);
                }
            });
        }
        initVtalkDB() {
            return r.__awaiter(this, void 0, void 0, function*() {
                try {
                    this.log.info("setUpVtalkDB"), console.log("userInfo on finish load", h.default.getItem("userInfo"));
                    const e = n(64);
                    yield e.initTables(), yield e.checkAndUpdateCols(), p.createAiTalkWindow(), this.log.info("setUpVtalkDB success");
                } catch (e) {
                    p.createAiTalkWindow(), this.log.error("setUpVtalkDB error: " + (e.meesage || e));
                }
            });
        }
        uninitWindowBeforeClose(e, t) {
            return r.__awaiter(this, void 0, void 0, function*() {
                this.log.info("尝试关闭窗体"), f.default.getSysEnv.isMac ? this.unintWinBeforeCloseByMac(t) : this.unitWinBeforeCloseByWin(t);
            });
        }
        unintWinBeforeCloseByMac(e) {
            return r.__awaiter(this, void 0, void 0, function*() {});
        }
        unitWinBeforeCloseByWin(e) {}
        handleLoginModalByCmd() {
            var e, t;
            const n = h.default.getItem("openLoginFlag");
            this.log.info("handleLoginModalByCmd: " + !!n), n && (h.default.setItem("openLoginFlag", 0), 
            this.log.info("handleLoginModalByCmd open login modal: " + !!n), null === (t = null === (e = global.__mainWindow) || void 0 === e ? void 0 : e.webContents) || void 0 === t || t.send(c.APP_MESSAGE_ENUM.OPEN_LOGIN_DIALOG, "vivoControl"));
        }
        printSystemInfo() {
            const {PATH: e, COMSPEC: t} = process.env;
            this.log.info(`\n            *********  printSystemInfo  *********\n            printSystemInfo env Path: ${e}\n            printSystemInfo env COMSPEC: ${t}\n            *********  printSystemInfo  *********\n            `);
        }
        clearRecordDataOnEnvChange(e, t) {
            var i, o, a, s, l, c, u, d, p, f, _, m, g;
            return r.__awaiter(this, void 0, void 0, function*() {
                const r = Date.now();
                try {
                    const g = n(346), v = yield g.record_clearAllData(), y = Date.now() - r;
                    this.log.info(`[record-clear] 环境切换清理完成 ${e} -> ${t} cost=${y}ms recordCountBefore=${null !== (i = null == v ? void 0 : v.recordCountBefore) && void 0 !== i ? i : 0} localFileCountBefore=${null !== (o = null == v ? void 0 : v.localFileCountBefore) && void 0 !== o ? o : 0} summaryCountBefore=${null !== (a = null == v ? void 0 : v.summaryCountBefore) && void 0 !== a ? a : 0} markCountBefore=${null !== (s = null == v ? void 0 : v.markCountBefore) && void 0 !== s ? s : 0} insightCountBefore=${null !== (l = null == v ? void 0 : v.insightCountBefore) && void 0 !== l ? l : 0} outlineCountBefore=` + (null !== (c = null == v ? void 0 : v.outlineCountBefore) && void 0 !== c ? c : 0));
                    try {
                        h.default.setItem("__record_env_changed__", JSON.stringify({
                            previousEnv: e,
                            currentEnv: t,
                            t: Date.now()
                        }));
                    } catch (e) {
                        this.log.info("[record-clear] 写 storage 标记失败(非致命): " + ((null === (u = e) || void 0 === u ? void 0 : u.message) || e));
                    }
                    try {
                        const {BrowserWindow: r} = n(2), i = {
                            previousEnv: e,
                            currentEnv: t
                        }, o = (null === (d = r.getAllWindows) || void 0 === d ? void 0 : d.call(r)) || [];
                        for (const e of o) try {
                            (null === (p = e.isDestroyed) || void 0 === p ? void 0 : p.call(e)) || null === (_ = null === (f = e.webContents) || void 0 === f ? void 0 : f.send) || void 0 === _ || _.call(f, "record-env-changed", i);
                        } catch (e) {}
                    } catch (e) {
                        this.log.info("[record-clear] 广播 record-env-changed 失败(非致命): " + ((null === (m = e) || void 0 === m ? void 0 : m.message) || e));
                    }
                    return !0;
                } catch (n) {
                    return this.log.info(`[record-clear] error: 环境切换清理失败 ${e} -> ${t}: ${(null === (g = n) || void 0 === g ? void 0 : g.message) || n}`), 
                    !1;
                }
            });
        }
        readEnvConfig() {
            var e;
            let t = {};
            try {
                const r = "win32" === process.platform, o = n(125), s = "PCSuite";
                let l = "/Library/Preferences/pcsuite/switch_host.ini", c = "switch_host.ini", u = process.env.APP_DIR || "", d = r ? i.default.join(i.default.dirname(u), "../" + c) : l;
                const h = o.parse(a.default.readFileSync(d, "utf-8"));
                return console.log("init文件路径：", h), t = {
                    Host: h[s] ? null === (e = h[s]) || void 0 === e ? void 0 : e.Host : ""
                }, t;
            } catch (e) {
                return console.log("readEnvConfig catch error:", e), global.__log.error("readEnvConfig catch error: " + e), 
                t;
            }
        }
    }
    t.default = A;
}
