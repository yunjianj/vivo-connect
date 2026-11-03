// analysis/pretty/main.js:17174; webpack module 110
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    const r = n(0), i = r.__importDefault(n(28)), o = n(2), a = r.__importDefault(n(1)), s = n(10), l = r.__importDefault(n(6)), c = n(1395), u = n(11), d = r.__importDefault(n(161)), h = r.__importDefault(n(26)), p = n(41), f = n(688), _ = r.__importDefault(n(148)), m = n(340), g = r.__importDefault(n(50));
    class v extends d.default {
        constructor() {
            super([ p.LogModule.FRAMEWORK, "ProcessManager" ]), this.isMacUpgrade = !1;
        }
        static getInstance() {
            return this.instance || (this.instance = new v), this.instance;
        }
        getIsMacUpgrade() {
            return this.isMacUpgrade;
        }
        getPkgScriptPath() {
            let e;
            return e = a.default.resolve(a.default.dirname(o.app.getPath("exe")), "../Resources/uninstall"), 
            e;
        }
        startRelationService(e = f.START_MODE.REPAIR, t) {
            const r = e || f.START_MODE.REPAIR;
            let i = this.getPkgScriptPath();
            return new Promise((o, a) => {
                if (!this.isRelaunchflags) return this.log.info("not updateRelaunchflag"), void o(-1);
                const {exec: s} = n(10);
                e == f.START_MODE.UPGRADE && (this.isMacUpgrade = !0), s(`"${i}/postinstall.sh" ${r}`, {
                    cwd: "" + i
                }, (n, r, s) => (e == f.START_MODE.UPGRADE && (this.isMacUpgrade = !1, g.default.$emit("macUpgrade:end")), 
                n ? (this.log.error(`start ${i} error: ${JSON.stringify(n)}`), a(n), this.log.error("service start fail"), 
                void (t && (t.result = 0, t.fail_reason = JSON.stringify(n), m.sendTask10534(t)))) : (t && m.sendTask10534(t), 
                s ? (this.log.error(`start stderr error: ${s} and ${i}`), this.log.error("service start fail"), 
                void a(n)) : (this.log.info("service start success"), void o(r))))), this.resetRelaunchflags();
            });
        }
        killRelationService() {
            return new Promise((e, t) => {
                let r = this.getPkgScriptPath();
                this.resetKillServiceflags(), this.log.info("stop service: " + r);
                const {exec: i} = n(10);
                i(r + "/preinstall.sh", {
                    cwd: "" + r
                }, (t, n, i) => {
                    t && this.log.error(`kill service ${r} error: ${JSON.stringify(t)}`), i && this.log.error(`kill service stderr error: ${i} and ${r}`), 
                    this.log.info("service kill success"), e(n);
                });
            });
        }
        isRelaunchflags() {
            return l.default.getItem("updateRelaunchflags") === c.UPDATE_RELAUNCH_FLAGS.UPDATE;
        }
        setRelaunchflags() {
            global.__log.info("[setRelaunchflags]:" + c.UPDATE_RELAUNCH_FLAGS.UPDATE), l.default.setItem("updateRelaunchflags", c.UPDATE_RELAUNCH_FLAGS.UPDATE);
        }
        resetRelaunchflags() {
            l.default.setItem("updateRelaunchflags", c.UPDATE_RELAUNCH_FLAGS.DEFAULT);
        }
        isKillServiceflags() {
            return l.default.getItem("killserviceflags") === c.UPDATE_KILL_SERVICE_FLAGS.READY;
        }
        setKillServiceflags() {
            this.log.info("[killserviceflags]:" + c.UPDATE_KILL_SERVICE_FLAGS.READY), l.default.setItem("killserviceflags", c.UPDATE_KILL_SERVICE_FLAGS.READY);
        }
        resetKillServiceflags() {
            l.default.setItem("killserviceflags", c.UPDATE_KILL_SERVICE_FLAGS.DEFAULT);
        }
        isRestartNowflags() {
            return l.default.getItem("restartNowflags") === c.UPDATE_RESTRAT_NOW_FLAGS.RELUNCH;
        }
        setRestartNowflags() {
            this.log.info("[setRestartNowflags]:" + c.UPDATE_RESTRAT_NOW_FLAGS.RELUNCH), l.default.setItem("restartNowflags", c.UPDATE_RESTRAT_NOW_FLAGS.RELUNCH);
        }
        resetRestartNowflags() {
            l.default.setItem("restartNowflags", c.UPDATE_RESTRAT_NOW_FLAGS.DEFAULT);
        }
        openMacAllServiceDialog(e) {
            return r.__awaiter(this, void 0, void 0, function*() {
                this.log.info("[openMacAllServiceDialog]");
                (yield this.getUpgradeStatus()) || this.openMacAllService(e);
            });
        }
        getUpgradeStatus() {
            return r.__awaiter(this, void 0, void 0, function*() {
                return new Promise(e => {
                    var t, n;
                    o.ipcMain.once(u.SERVER_MESSAGE_ENUM.GET_UPGRADE_STATUS, (t, n) => {
                        this.log.info("[getUpgradeStatus]: " + n), e(n);
                    }), null === (n = null === (t = global.__mainWindow) || void 0 === t ? void 0 : t.webContents) || void 0 === n || n.send(u.SERVER_MESSAGE_ENUM.GET_UPGRADE_STATUS), 
                    setTimeout(() => {
                        this.log.info("[getUpgradeStatus]: timeout: false"), e(!1);
                    }, 2e3);
                });
            });
        }
        openMacAllService(e) {
            this.log.info("[openMacAllService]"), this.setRelaunchflags(), this.startRelationService(f.START_MODE.REPAIR, e);
        }
        isProcessRunning(e) {
            const t = i.default.processIsExist(e);
            return this.log.info(`isProcessRunning ${e}: ${t}`), t;
        }
        launchDumpReportApp() {
            if (this.log.info("launchDumpReportApp"), h.default.getSysEnv.isMac) return;
            if (this.isProcessRunning(f.ProcessName.VIVO_DUMP_REPORT)) return void this.log.info("ProcessName.VIVO_DUMP_REPORT is running return");
            const e = o.app.getPath("exe");
            let t;
            t = a.default.join(e, "../vivoScreen"), this.log.info("vivoDump path:" + t);
            const n = s.exec(`"${t}\\vivoDumpReport.exe"`, e => {
                e && this.log.error("vivoDump exec error: " + e);
            });
            n.on("data", e => {
                this.log.info("vivoPreDetector start success data:" + e);
            }), n.on("close", e => {
                this.log.info("vivoPreDetector start success data:" + e);
            });
        }
        launchVivoPreDetector() {
            if (!h.default.getSysEnv.isMac) try {
                let e;
                {
                    let t = o.app.getPath("exe");
                    e = a.default.join(t, "../vivoScreen");
                }
                this.log.info("vivoPreDetector path:" + e);
                const t = s.exec(`"${e}\\vivoPreDetector.exe"`, (e, t, n) => {
                    if (e) return console.error("launchVivoPreDetector: " + e), void this.log.error("exec error: " + e);
                });
                t.on("data", e => {
                    this.log.info("vivoPreDetector start success data:" + e);
                }), t.on("close", e => {
                    this.log.info("vivoPreDetector start success data:" + e), _.default.initGpuInfo();
                });
            } catch (e) {
                this.log.info("launchVivoPreDetector error: " + (e && e.message));
            }
        }
    }
    t.default = v;
}
