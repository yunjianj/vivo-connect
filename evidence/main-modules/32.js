// analysis/pretty/main.js:8323; webpack module 32
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.hasLocalNetworkAccess = t.getCurrentSSID = t.killProcessByPort = t.findAvailablePort = t.isPortInUse = t.getPortsByServiceName = t.getListeningPorts = t.getServicePids = t.execAsync = t.isv3flagFn = t.PathUtil = t.findProcessPath = t.maskPcName = t.generatorToken = t.getInstallArgs = t.is_vivo = t.MD5 = void 0;
    const r = n(0), i = r.__importStar(n(409)), o = r.__importStar(n(7)), a = n(2), s = r.__importStar(n(25)), l = r.__importDefault(n(1)), c = n(10), u = r.__importStar(n(8)), d = r.__importDefault(n(989)), h = r.__importDefault(n(990)), p = r.__importDefault(n(6)), f = n(119);
    t.MD5 = e => {
        let t = o.createHash("md5");
        return t.update(Buffer.from(e, "binary")), e = t.digest("hex");
    }, t.is_vivo = function(e) {
        return s.isEqual(e, "bbk") || s.isEqual(e, "vivo") || s.isEqual(e, "iQOO") || s.isEqual(e, "jovi");
    }, t.getInstallArgs = (e, n) => e.shell(n, 'date "+%Y%m%d"').then(i.util.readAll).then(e => {
        let n = t.MD5(e.toString().trim());
        return new Buffer(n.substr(0, 8)).toString("base64").substr(0, 8);
    }), t.generatorToken = () => h.default(4), t.maskPcName = e => {
        if (e && e.length > 6) {
            const t = [ ...e ];
            return t.length > 6 ? t.slice(0, 3).join("") + "****" + t.slice(-3).join("") : e;
        }
        return e;
    }, t.findProcessPath = function(e) {
        return r.__awaiter(this, void 0, void 0, function*() {
            return "darwin" === u.platform() ? "" : yield function(e) {
                return "darwin" === u.platform() ? "" : new Promise((t, n) => {
                    c.exec(`powershell "get-process ${e.slice(0, -4)} | select-object path"`, (r, i) => {
                        if (r) return void n(r);
                        const o = i.split("\n");
                        for (let n = 0; n < o.length; n++) {
                            const r = o[n].trim() || "";
                            if (r.endsWith(e)) return void t(r);
                        }
                        n("not found ExecutablePath");
                    });
                });
            }(e);
        });
    };
    function _(e) {
        return r.__awaiter(this, void 0, void 0, function*() {
            console.time("isPortInUse");
            let n = "";
            n = "win32" === u.platform() ? `netstat -ano | findstr :${e} | findstr LISTENING` : `lsof -i :${e} | grep LISTEN`;
            try {
                const e = yield t.execAsync(n);
                return console.timeEnd("isPortInUse"), !!e;
            } catch (e) {
                throw e;
            }
        });
    }
    t.PathUtil = class {
        static getDevRootPath() {
            global.__log.info("app.getPath('appData') : " + a.app.getPath("appData")), global.__log.info("app.getAppPath() : " + a.app.getAppPath()), 
            global.__log.info('app.getPath("exe") : ' + a.app.getPath("exe")), global.__log.info("app.getPath('userData') : " + a.app.getPath("userData")), 
            global.__log.info("app.getPath('getVivoScreenExePath') : " + this.getVivoScreenExePath());
        }
        static getDevSrcPath() {}
        static getProductionExePath() {}
        static getAppDataPath() {
            let e = l.default.resolve("" + a.app.getPath("appData"), "../");
            return global.__log.info(l.default), e;
        }
        static getAppDataRoamingPath() {
            let e = l.default.resolve("" + a.app.getPath("appData"));
            return global.__log.info(l.default), e;
        }
        static getLogRootPath() {
            let e = l.default.resolve("" + a.app.getPath("appData"), "pcsuite/log/");
            return global.__log.info(e), e;
        }
        static getSyncServiceLogPath() {
            let e = l.default.resolve(this.getLogRootPath(), "sync_service_log");
            return global.__log.info(e), e;
        }
        static getFrameworkLogPath() {
            let e = l.default.resolve(this.getLogRootPath(), "framework_log");
            return global.__log.info(e), e;
        }
        static getShareCameraLogPath() {
            let e = l.default.resolve(this.getLogRootPath(), "vcamera_log");
            return global.__log.info(e), e;
        }
        static getMirrorScreenLogPath() {
            let e = l.default.resolve(this.getLogRootPath(), "mirrorscreen_log");
            return global.__log.info(e), e;
        }
        static getVDFSLogPath() {
            return l.default.resolve(this.getLogRootPath(), "vdfs_log");
        }
        static getRelayLogPath() {
            return l.default.resolve(this.getLogRootPath(), "relay_log");
        }
        static getExtScreenLogPath() {
            return l.default.resolve(this.getLogRootPath(), "vivoExtScreen_log").replace(/\\/g, "/");
        }
        static getVivoBackupLogPath() {
            return l.default.resolve(this.getLogRootPath(), "backup_log");
        }
        static getVivoScreenExePath() {
            {
                let e = l.default.resolve(a.app.getPath("exe"), f.processNameManager.vivoScreen);
                return global.__log.info("vivoScreen path is: " + e), e;
            }
        }
        static getShareCameraExePath() {
            {
                let e = l.default.resolve(a.app.getPath("exe"), f.processNameManager.vivoScreen);
                return global.__log.info("shareCamera path is: " + e), e;
            }
        }
        static getUpdateApkPath() {
            {
                let e = "";
                return e = "darwin" === u.platform() ? l.default.resolve(l.default.dirname(a.app.getPath("exe")), "../", "Resources/updateApk") : l.default.resolve(l.default.dirname(a.app.getPath("exe")), "updateApk"), 
                e;
            }
        }
        static getPcToastPath() {
            {
                let e = l.default.resolve(l.default.dirname(a.app.getPath("exe")));
                return "darwin" === u.platform() && (e = l.default.resolve(l.default.dirname(a.app.getPath("exe")), "../", "MacOS")), 
                e;
            }
        }
        static getAdbExePath() {
            return l.default.resolve(a.app.getPath("exe"));
        }
        static getElevatePath() {
            {
                let e = l.default.resolve(a.app.getPath("exe"), "../resources/app.asar.unpacked/node_modules/node-windows/bin/elevate/elevate.cmd");
                return global.__log.info("getElevatePath path: " + e), e;
            }
        }
        static getTelnetPath() {
            let e = "";
            return e = l.default.resolve(l.default.dirname(a.app.getPath("exe")), "../", "Resources/telnet/telnet"), 
            e;
        }
        static getVivoControlExePath() {
            {
                let e = l.default.resolve(a.app.getPath("exe"), "vivoControl");
                return global.__log.info("vivoControl path is: " + e), e;
            }
        }
        static getPhoneCallExePath() {
            {
                let e = l.default.resolve(a.app.getPath("exe"), "phoneCall");
                return global.__log.info("phoneCall path is: " + e), e;
            }
        }
    }, t.isv3flagFn = () => {
        var e, t;
        const n = null === (e = p.default.getItem("isv3flagFn")) || void 0 === e ? void 0 : e.value, r = p.default.getItem("updateRelaunchflags"), i = null === (t = p.default.getItem("updateDir")) || void 0 === t ? void 0 : t.updateDir, o = "darwin" === process.platform ? void 0 !== r : void 0 !== i;
        return !(void 0 !== n || !o);
    }, t.execAsync = e => new Promise((t, n) => {
        c.exec(e, (r, i, o) => {
            global.__log.info(`execAsync command: \n ${e} \n stdout: ${i} \n stderr: ${o} \n error: [code: ${null == r ? void 0 : r.code}] [message: ${null == r ? void 0 : r.message}]`), 
            r ? 1 === r.code ? t(i) : n(r) : o ? n(new Error(o)) : t(i);
        });
    }), t.getServicePids = e => r.__awaiter(void 0, void 0, void 0, function*() {
        const n = u.platform();
        let r = "";
        r = "win32" === n ? "tasklist | findstr " + e : `pgrep -x ${e} | xargs ps -p`;
        return (yield t.execAsync(r)).split("\n").filter(t => t.includes(e)).map(e => {
            const t = "win32" === n ? e.trim().split(/\s+/)[1] : e.trim().split(/\s+/)[0];
            return parseInt(t, 10);
        });
    }), t.getListeningPorts = e => r.__awaiter(void 0, void 0, void 0, function*() {
        const n = u.platform(), r = [];
        for (const i of e) {
            let e = "";
            e = "win32" === n ? `netstat -aon | findstr "${i}" | findstr "LISTENING"` : `lsof -Pan -p ${i} -i | grep LISTEN`;
            const o = (yield t.execAsync(e)).split("\n").filter(e => e.includes("LISTEN"));
            for (const e of o) {
                const t = "win32" === n ? e.trim().split(/\s+/)[1] : e.trim().split(/\s+/).find(e => e.includes(":"));
                if (t) {
                    const e = parseInt(t.split(":").pop(), 10);
                    r.push(e);
                }
            }
        }
        return r;
    }), t.getPortsByServiceName = e => r.__awaiter(void 0, void 0, void 0, function*() {
        try {
            const n = yield t.getServicePids(e);
            if (0 === n.length) return [];
            return yield t.getListeningPorts(n);
        } catch (t) {
            return global.__log.error(`Error getting ports for ${e}: ${t.message}`), [];
        }
    }), t.isPortInUse = _, t.findAvailablePort = function(e) {
        return r.__awaiter(this, void 0, void 0, function*() {
            let t = e;
            for (;yield _(t); ) t++;
            return t;
        });
    }, t.killProcessByPort = e => r.__awaiter(void 0, void 0, void 0, function*() {
        let n = "";
        n = "win32" === u.platform() ? `for /f "tokens=5" %a in ('netstat -aon ^| findstr :${e} ^| findstr LISTENING') do taskkill /F /PID %a` : `lsof -i :${e} | grep LISTEN | awk '{print $2}' | xargs kill -9`;
        try {
            yield t.execAsync(n), global.__log.info(`成功终止端口 ${e} 上的进程`);
        } catch (t) {
            global.__log.error(`终止端口 ${e} 上的进程时出错: ${t.message}`);
        }
    }), t.getCurrentSSID = () => {
        if ("darwin" === u.platform()) try {
            return c.execSync("ipconfig getsummary \"$(networksetup -listallhardwareports | awk '/Wi-Fi|AirPort/{getline; print $NF}')\" | grep '  SSID : ' | awk -F ': ' '{print $2}'", {
                timeout: 1e3
            }).toString().trim();
        } catch (e) {
            return global.__log.error("获取SSID失败: " + e.message), "";
        } else {
            if ("win32" !== u.platform()) return global.__log.warn("当前平台不支持获取SSID"), "";
            try {
                const e = c.execSync('netsh wlan show interfaces | findstr "SSID"', {
                    timeout: 1e3
                }).toString().match(/SSID\s*:\s*(.+)/);
                return e ? e[1].trim() : "";
            } catch (e) {
                return global.__log.error("获取SSID失败: " + e.message), "";
            }
        }
    }, t.hasLocalNetworkAccess = function() {
        return r.__awaiter(this, void 0, void 0, function*() {
            return new Promise(e => {
                if ("darwin" !== u.platform()) return void e(!1);
                const t = d.default.createSocket("udp4");
                let n = !1;
                const r = r => {
                    n || (n = !0, t.close(), e(r));
                };
                t.on("error", () => r(!1)), t.bind(() => {
                    t.setBroadcast(!0), t.send(Buffer.from([ 0 ]), 5353, "224.0.0.251", e => {
                        r(!e);
                    });
                }), setTimeout(() => {
                    r(!1);
                }, 500);
            });
        });
    };
}
