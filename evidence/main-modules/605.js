// analysis/pretty/main.js:56931; webpack module 605
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    const r = n(0), i = r.__importDefault(n(10)), o = r.__importDefault(n(1)), a = r.__importStar(n(8)), s = n(2), l = r.__importDefault(n(6)), c = r.__importDefault(n(52)), u = r.__importDefault(n(89)), d = r.__importDefault(n(26)), h = n(32), p = n(56), f = n(236), _ = n(119);
    class m extends c.default {
        constructor() {
            super(), this.childProcessPids = new Set, this.registerChildProcessListeners();
        }
        static getInstance() {
            return this.instance || (this.instance = new m), this.instance;
        }
        launchWorkerProcess(e, t) {
            var n, c, m, g, v, y, E, b, w;
            return r.__awaiter(this, void 0, void 0, function*() {
                const r = Date.now();
                if ("object" != typeof t) throw global.__log.info(`[VivoScreenProcessMain] (hashId=${e}) launchMirrorProcess Parameter type error`), 
                "Parameter type error";
                const {ip: S, port: T, deviceName: A, appMobileDeviceId: O, product: C, widthPixels: N, heightPixels: I, naviState: R, connectFlag: D, screenPrivacy: L, token: k, is_support_pc_mode: M} = t;
                global.__log.info("[ConnectionModule][vivoScreenProcessMain.ts][launchWorkerProcess] params: " + JSON.stringify(t));
                let P = _.processNameManager.vivoScreen + ".exe", x = "", F = {
                    cwd: ""
                };
                "darwin" === a.platform() ? (P = o.default.resolve(o.default.dirname(s.app.getPath("exe")), "../", `Resources/vivoScreen/${_.processNameManager.vivoScreen}.app/Contents/MacOS`), 
                F.stdio = "ignore") : P = o.default.resolve(o.default.dirname(s.app.getPath("exe")), "vivoScreen"), 
                x = "darwin" === a.platform() ? o.default.join(P, "./" + _.processNameManager.vivoScreen) : o.default.join(P, `./${_.processNameManager.vivoScreen}.exe`), 
                F.cwd = P;
                const j = global.__mainWindow, U = j && !j.isDestroyed() ? j.getBounds() : null, W = s.screen.getPrimaryDisplay();
                let B = (null == W ? void 0 : W.scaleFactor) || 1;
                "darwin" === a.platform() && (B = 1);
                const H = null === (n = ((null == U ? void 0 : U.x) || 20) * B) || void 0 === n ? void 0 : n.toString(), $ = null === (c = ((null == U ? void 0 : U.y) || 20) * B) || void 0 === c ? void 0 : c.toString(), Y = null === (m = ((null == U ? void 0 : U.height) || 800) * B) || void 0 === m ? void 0 : m.toString(), z = null === (g = ((null == U ? void 0 : U.width) || 1360) * B) || void 0 === g ? void 0 : g.toString(), G = l.default.getItem("screen") || "pixels:2", q = l.default.getItem("no_audio") && /0|1/i.test(l.default.getItem("no_audio")) ? l.default.getItem("no_audio") : "no_audio:0", V = l.default.getItem("top_mirror_window") || "top_mirror_window:0", K = l.default.getItem("autoHideTitleBar") || "autoHideTitleBar:0";
                let J = 0 == l.default.getItem("pc_clipboard_switch") ? "pc_clipboard_switch:0" : "pc_clipboard_switch:1";
                d.default.getSysEnv.isMac && !d.default.isMacVersionOverTarget(11) && (J = "pc_clipboard_switch:1");
                const X = 1 == l.default.getItem("openHardwareAcceleration") ? "1" : "0", Q = "isUpdateV3:" + h.isv3flagFn(), Z = l.default.getItem("isAudioValUpdate") || !1;
                Z && l.default.setItem("isAudioValUpdate", !1), global.__log.info("mirrorProcessSpawn-vivoScreenCwdpath isUpdateV3: " + h.isv3flagFn());
                const ee = "isFirstInstall:" + (null == (null === (v = l.default.getItem("isv3flagFn")) || void 0 === v ? void 0 : v.value) || (null === (y = l.default.getItem("isv3flagFn")) || void 0 === y ? void 0 : y.value)), te = null === (b = null === (E = global.__mainWindow) || void 0 === E ? void 0 : E.getNativeWindowHandle()) || void 0 === b ? void 0 : b.readUInt32LE(0);
                global.__log.info("mirrorProcessSpawn-windowHandle:" + te);
                const ne = "connectFlag:" + D;
                l.default.setItem("isv3flagFn", {
                    value: !1
                }), global.__log.info(`window get bounds: ${H} ${$} ${Y} ${z}  scale: ${B}`), global.__log.info("mirrorProcessSpawn-vivoScreenCwdpath executePath: " + x);
                const re = [ "ip:" + S, "port:" + T, "logpath:" + h.PathUtil.getMirrorScreenLogPath(), "appid:com.vivo.pcsuite", "deviceName:" + A, `rect:${H},${$},${z},${Y}`, G, q, V, K, "show_touch_spot:0", "moudleName:" + e, "deviceId:" + O, J, "deviceType:" + C, "widthPixels:" + N, "heightPixels:" + I, "naviState:" + R, Q, ee, "winHandle:" + te, ne, "screenPrivacy:" + L, "is_support_pc_mode:" + M ];
                "darwin" !== a.platform() && re.push("GpuAcc:" + X), re.push("authTime:" + r, "isAudioValUpdate:" + Z, "token:" + k), 
                global.__log.info("[ConnectionModule][vivoScreenProcessMain.ts][launchWorkerProcess] processParams: " + re.join());
                const ie = i.default.spawn(x, re, F), oe = [ {
                    type: 1,
                    eventId: f.CONNECT_DATA_ANALYTICS_SINGLE_EVENT.LAUNCH_SCREEN,
                    params: {
                        connection_type: D,
                        hardware_decoding: X
                    }
                } ];
                return null === (w = u.default.getInstance().getWebContent()) || void 0 === w || w.send(p.ConnectionRendererEvent.APP_BURY_POINT, oe), 
                ie;
            });
        }
        killProcess(e) {
            return new Promise(t => r.__awaiter(this, void 0, void 0, function*() {
                var n;
                if (global.__log.info("[connectionModule][vivoScreenProcessMain.ts] killProcess appHashId = " + (e || "")), 
                this.processInstanceMap.size) {
                    const t = [];
                    if (e) {
                        const n = this.processInstanceMap.get(e);
                        n && t.push({
                            id: e,
                            proc: n
                        });
                    } else for (const [e, n] of this.processInstanceMap.entries()) t.push({
                        id: e,
                        proc: n
                    });
                    yield Promise.all(t.map(({id: e, proc: t}) => this.terminateWithEscalation(e, t)));
                    for (const {id: e} of t) this.processInstanceMap.delete(e);
                } else {
                    let e = setTimeout(() => {
                        var n;
                        global && (null === (n = null === global || void 0 === global ? void 0 : global.__log) || void 0 === n || n.info("[vivoScreenProcessMain.ts][killProcess](commandKill) timeout 5s")), 
                        t(), e = null;
                    }, 5e3);
                    try {
                        const e = "darwin" === a.platform() ? _.processNameManager.vivoScreen : _.processNameManager.vivoScreen + ".exe";
                        yield this.commandKill(e);
                    } catch (e) {
                        global && (null === (n = null === global || void 0 === global ? void 0 : global.__log) || void 0 === n || n.info("[vivoScreenProcessMain.ts][killProcess](commandKill) error: " + (null == e ? void 0 : e.toString())));
                    }
                    e && (clearTimeout(e), e = null);
                }
                t();
            }));
        }
        terminateWithEscalation(e, t) {
            return r.__awaiter(this, void 0, void 0, function*() {
                const n = t.pid;
                try {
                    global.__log.info(`[terminateWithEscalation] id=${e} pid=${n} sending SIGTERM`);
                    try {
                        t.kill();
                    } catch (e) {
                        global.__log.info("[terminateWithEscalation] SIGTERM kill threw: " + e);
                    }
                    if (yield this.waitForExit(t, 2e3)) return void global.__log.info(`[terminateWithEscalation] id=${e} pid=${n} exited after SIGTERM`);
                    global.__log.info(`[terminateWithEscalation] id=${e} pid=${n} SIGTERM timed out (likely frozen), escalating`), 
                    yield this.dumpAndForceKill(t, e);
                } catch (t) {
                    global.__log.info(`[terminateWithEscalation] id=${e} pid=${n} unexpected error: ${t}`);
                }
            });
        }
        waitForExit(e, t) {
            return new Promise(n => {
                let r = !1;
                const i = () => {
                    r || (r = !0, clearTimeout(o), n(!0));
                }, o = setTimeout(() => {
                    r || (r = !0, e.removeListener("exit", i), n(!1));
                }, t);
                e.once("exit", i);
            });
        }
        dumpAndForceKill(e, t) {
            return r.__awaiter(this, void 0, void 0, function*() {
                const n = e.pid;
                if ("darwin" === a.platform() && n) {
                    const e = h.PathUtil.getMirrorScreenLogPath(), r = (new Date).toISOString().replace(/[:.]/g, "-"), a = o.default.join(e, `vivoScreen_dump_${n}_${r}.txt`);
                    try {
                        global.__log.info(`[dumpAndForceKill] id=${t} pid=${n} sampling -> ${a}`), yield new Promise(e => {
                            i.default.exec(`sample ${n} 5 -file "${a}" 2>&1`, () => e());
                        });
                    } catch (e) {
                        global.__log.info(`[dumpAndForceKill] id=${t} pid=${n} sample failed: ${e}`);
                    }
                }
                global.__log.info(`[dumpAndForceKill] id=${t} pid=${n} sending SIGKILL`);
                try {
                    e.kill("SIGKILL");
                } catch (e) {
                    global.__log.info("[dumpAndForceKill] SIGKILL threw: " + e);
                }
            });
        }
        registerChildProcessListeners() {
            const {ipcMain: e} = n(2);
            e.on(p.ConnectionRendererEvent.MIRROR_CHILD_PROCESS_ID, (e, t) => {
                if (global.__log.info("[VivoScreenProcessMain] received child process message: " + JSON.stringify(t)), 
                !t || "object" != typeof t) return void global.__log.warn("[VivoScreenProcessMain] invalid message format, expected object");
                const n = t;
                !n.action || "addPid" !== n.action && "removePid" !== n.action ? global.__log.warn("[VivoScreenProcessMain] invalid action: " + n.action) : !n.pid || "number" != typeof n.pid || n.pid <= 0 ? global.__log.warn("[VivoScreenProcessMain] invalid pid: " + n.pid) : "addPid" === n.action ? this.addChildProcessPid(n.pid) : "removePid" === n.action && this.removeChildProcessPid(n.pid);
            });
        }
        addChildProcessPid(e) {
            e && !this.childProcessPids.has(e) && (this.childProcessPids.add(e), global.__log.info(`[VivoScreenProcessMain] added child process pid: ${e}, total: ${this.childProcessPids.size}`));
        }
        removeChildProcessPid(e) {
            e && this.childProcessPids.has(e) && (this.childProcessPids.delete(e), global.__log.info(`[VivoScreenProcessMain] removed child process pid: ${e}, total: ${this.childProcessPids.size}`));
        }
        getChildProcessPids() {
            return Array.from(this.childProcessPids);
        }
    }
    t.default = m;
}
