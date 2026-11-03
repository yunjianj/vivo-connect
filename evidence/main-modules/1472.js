// analysis/pretty/main.js:109028; webpack module 1472
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    const r = n(0), i = r.__importDefault(n(10)), o = r.__importDefault(n(1)), a = r.__importStar(n(8)), s = n(2), l = r.__importDefault(n(6)), c = r.__importDefault(n(52)), u = r.__importDefault(n(26)), d = n(32), h = n(119);
    class p extends c.default {
        constructor() {
            super();
        }
        static getInstance() {
            return this.instance || (this.instance = new p), this.instance;
        }
        launchWorkerProcess(e, t) {
            var n, c, p, f, _, m, g, v;
            return r.__awaiter(this, void 0, void 0, function*() {
                const r = Date.now();
                if ("object" != typeof t) throw global.__log.info(`[PCModeProcessMain] (hashId=${e}) launchMirrorProcess Parameter type error`), 
                "Parameter type error";
                const {ip: y, port: E, deviceName: b, appMobileDeviceId: w, product: S, widthPixels: T, heightPixels: A, naviState: O, connectFlag: C, screenPrivacy: N, token: I, is_support_pc_mode: R, from: D} = t;
                global.__log.info("[ConnectionModule][PCModeProcessMain.ts][launchWorkerProcess] params: " + JSON.stringify(t));
                let L = "PCMode.exe", k = "", M = {
                    cwd: ""
                };
                "darwin" === a.platform() ? (L = o.default.resolve(o.default.dirname(s.app.getPath("exe")), "../", `Resources/vivoScreen/${h.processNameManager.vivoScreen}.app/Contents/Helpers/PCMode.app/Contents/MacOS`), 
                M.stdio = "ignore") : L = o.default.resolve(o.default.dirname(s.app.getPath("exe")), "vivoScreen"), 
                k = "darwin" === a.platform() ? o.default.join(L, "./PCMode") : o.default.join(L, "./PCMode.exe"), 
                M.cwd = L;
                const P = global.__mainWindow, x = P && !P.isDestroyed() ? P.getBounds() : null, F = s.screen.getPrimaryDisplay();
                let j = (null == F ? void 0 : F.scaleFactor) || 1;
                "darwin" === a.platform() && (j = 1);
                const U = null === (n = ((null == x ? void 0 : x.x) || 20) * j) || void 0 === n ? void 0 : n.toString(), W = null === (c = ((null == x ? void 0 : x.y) || 20) * j) || void 0 === c ? void 0 : c.toString(), B = null === (p = ((null == x ? void 0 : x.height) || 800) * j) || void 0 === p ? void 0 : p.toString(), H = null === (f = ((null == x ? void 0 : x.width) || 1360) * j) || void 0 === f ? void 0 : f.toString(), $ = l.default.getItem("screen") || "pixels:2", Y = "no_audio:" + (l.default.getItem("pcModeAudioOutputDevice") || 0);
                let z = 0 == l.default.getItem("pc_clipboard_switch") ? "pc_clipboard_switch:0" : "pc_clipboard_switch:1";
                u.default.getSysEnv.isMac && !u.default.isMacVersionOverTarget(11) && (z = "pc_clipboard_switch:1");
                const G = 1 == l.default.getItem("openHardwareAcceleration") ? "1" : "0", q = "isUpdateV3:" + d.isv3flagFn(), V = l.default.getItem("isAudioValUpdate") || !1;
                V && l.default.setItem("isAudioValUpdate", !1), global.__log.info("PCModeProcessSpawn-PCModeCwdpath isUpdateV3: " + d.isv3flagFn());
                const K = "isFirstInstall:" + (null == (null === (_ = l.default.getItem("isv3flagFn")) || void 0 === _ ? void 0 : _.value) || (null === (m = l.default.getItem("isv3flagFn")) || void 0 === m ? void 0 : m.value)), J = null === (v = null === (g = global.__mainWindow) || void 0 === g ? void 0 : g.getNativeWindowHandle()) || void 0 === v ? void 0 : v.readUInt32LE(0);
                global.__log.info("PCModeProcessSpawn-windowHandle:" + J);
                const X = "connectFlag:" + C;
                l.default.setItem("isv3flagFn", {
                    value: !1
                }), global.__log.info(`window get bounds: ${U} ${W} ${B} ${H}  scale: ${j}`), global.__log.info("PCModeProcessSpawn-PCModeCwdpath executePath: " + k);
                const Q = [ "ip:" + y, "port:" + E, "logpath:" + d.PathUtil.getMirrorScreenLogPath(), "appid:com.vivo.pcsuite", "deviceName:" + b, `rect:${U},${W},${H},${B}`, $, "top_mirror_window:0", "autoHideTitleBar:0", "show_touch_spot:0", "moudleName:" + e, "deviceId:" + w, z, "deviceType:" + S, "widthPixels:" + T, "heightPixels:" + A, "naviState:" + O, q, K, "winHandle:" + J, X, "screenPrivacy:" + N, "mirror_type:1", "app_package_name:", "is_support_pc_mode:" + R, "from:" + D, Y ];
                "darwin" !== a.platform() && Q.push("GpuAcc:" + G), Q.push("authTime:" + r, "isAudioValUpdate:" + V, "token:" + I), 
                global.__log.info("[ConnectionModule][PCModeProcessMain.ts][launchWorkerProcess] processParams: " + Q.join());
                return i.default.spawn(k, Q, M);
            });
        }
        killProcess(e) {
            return new Promise(t => r.__awaiter(this, void 0, void 0, function*() {
                var n;
                if (global.__log.info("[connectionModule][PCModeProcessMain.ts] killProcess appHashId = " + (e || "")), 
                this.processInstanceMap.size) if (e) {
                    const t = this.processInstanceMap.get(e);
                    null == t || t.kill(), this.processInstanceMap.delete(e);
                } else {
                    const e = this.processInstanceMap.values();
                    for (const t of e) t.kill();
                    this.processInstanceMap.clear();
                } else {
                    let e = setTimeout(() => {
                        var n;
                        global && (null === (n = null === global || void 0 === global ? void 0 : global.__log) || void 0 === n || n.info("[PCModeProcessMain.ts][killProcess](commandKill) timeout 5s")), 
                        t(), e = null;
                    }, 5e3);
                    try {
                        const e = "darwin" === a.platform() ? "PCMode" : "PCMode.exe";
                        yield this.commandKill(e);
                    } catch (e) {
                        global && (null === (n = null === global || void 0 === global ? void 0 : global.__log) || void 0 === n || n.info("[PCModeProcessMain.ts][killProcess](commandKill) error: " + (null == e ? void 0 : e.toString())));
                    }
                    e && (clearTimeout(e), e = null);
                }
                t();
            }));
        }
    }
    t.default = p;
}
