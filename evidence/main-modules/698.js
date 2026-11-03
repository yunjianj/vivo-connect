// analysis/pretty/main.js:62434; webpack module 698
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    const r = n(0), i = r.__importDefault(n(10)), o = r.__importDefault(n(1)), a = r.__importStar(n(8)), s = n(2), l = r.__importDefault(n(6)), c = r.__importDefault(n(52)), u = r.__importDefault(n(26)), d = n(32), h = "darwin" === a.platform() ? n(699) : null;
    class p extends c.default {
        constructor() {
            super();
        }
        static getInstance() {
            return this.instance || (this.instance = new p), this.instance;
        }
        launchWorkerProcess(e, t) {
            var n, c, h, p, f, _, m, g;
            return r.__awaiter(this, void 0, void 0, function*() {
                const r = Date.now();
                if ("object" != typeof t) throw global.__log.info(`[ShareCameraProcessMain] (hashId=${e}) launchMirrorProcess Parameter type error`), 
                "Parameter type error";
                const {ip: v, port: y, deviceName: E, appMobileDeviceId: b, product: w, widthPixels: S, heightPixels: T, naviState: A, connectFlag: O, screenPrivacy: C, token: N, is_support_pc_mode: I} = t;
                global.__log.info("[ConnectionModule][shareCameraProcessMain.ts][launchWorkerProcess] params: " + JSON.stringify(t));
                let R = "vCamera.exe", D = "", L = {
                    cwd: ""
                };
                "darwin" === a.platform() ? (R = o.default.resolve(o.default.dirname(s.app.getPath("exe")), "../", "Resources/vivoCamera/vCamera.app/Contents/MacOS"), 
                L.stdio = "ignore") : R = o.default.resolve(o.default.dirname(s.app.getPath("exe")), "vivoCamera"), 
                D = "darwin" === a.platform() ? o.default.join(R, "./vCamera") : o.default.join(R, "./vCamera.exe"), 
                L.cwd = R;
                const k = global.__mainWindow, M = k && !k.isDestroyed() ? k.getBounds() : null, P = s.screen.getPrimaryDisplay();
                let x = (null == P ? void 0 : P.scaleFactor) || 1;
                "darwin" === a.platform() && (x = 1);
                const F = null === (n = ((null == M ? void 0 : M.x) || 20) * x) || void 0 === n ? void 0 : n.toString(), j = null === (c = ((null == M ? void 0 : M.y) || 20) * x) || void 0 === c ? void 0 : c.toString(), U = null === (h = ((null == M ? void 0 : M.height) || 800) * x) || void 0 === h ? void 0 : h.toString(), W = null === (p = ((null == M ? void 0 : M.width) || 1360) * x) || void 0 === p ? void 0 : p.toString(), B = l.default.getItem("screen") || "pixels:2", H = l.default.getItem("no_audio") && /0|1/i.test(l.default.getItem("no_audio")) ? l.default.getItem("no_audio") : "no_audio:0", $ = l.default.getItem("top_mirror_window") || "top_mirror_window:0", Y = l.default.getItem("autoHideTitleBar") || "autoHideTitleBar:0";
                let z = 0 == l.default.getItem("pc_clipboard_switch") ? "pc_clipboard_switch:0" : "pc_clipboard_switch:1";
                u.default.getSysEnv.isMac && !u.default.isMacVersionOverTarget(11) && (z = "pc_clipboard_switch:1");
                const G = 1 == l.default.getItem("openHardwareAcceleration") ? "1" : "0", q = "isUpdateV3:" + d.isv3flagFn(), V = l.default.getItem("isAudioValUpdate") || !1;
                V && l.default.setItem("isAudioValUpdate", !1), global.__log.info("shareCameraProcessSpawn-shareCameraCwdpath isUpdateV3: " + d.isv3flagFn());
                const K = "isFirstInstall:" + (null == (null === (f = l.default.getItem("isv3flagFn")) || void 0 === f ? void 0 : f.value) || (null === (_ = l.default.getItem("isv3flagFn")) || void 0 === _ ? void 0 : _.value)), J = null === (g = null === (m = global.__mainWindow) || void 0 === m ? void 0 : m.getNativeWindowHandle()) || void 0 === g ? void 0 : g.readUInt32LE(0);
                global.__log.info("shareCameraProcessSpawn-windowHandle:" + J);
                const X = "connectFlag:" + O;
                l.default.setItem("isv3flagFn", {
                    value: !1
                }), global.__log.info(`window get bounds: ${F} ${j} ${U} ${W}  scale: ${x}`), global.__log.info("shareCameraProcessSpawn-shareCameraCwdpath executePath: " + D);
                const Q = [ "ip:" + v, "port:" + y, "logpath:" + d.PathUtil.getShareCameraLogPath(), "appid:com.vivo.pcsuite", "deviceName:" + E, `rect:${F},${j},${W},${U}`, B, H, $, Y, "show_touch_spot:0", "moudleName:" + e, "deviceId:" + b, z, "deviceType:" + w, "widthPixels:" + S, "heightPixels:" + T, "naviState:" + A, q, K, "winHandle:" + J, X, "screenPrivacy:" + C, "is_support_pc_mode:" + I, "isCamera:" + !0 ];
                "darwin" !== a.platform() && Q.push("GpuAcc:" + G), Q.push("authTime:" + r, "isAudioValUpdate:" + V, "token:" + N), 
                global.__log.info("[ConnectionModule][shareCameraProcessMain.ts][launchWorkerProcess] processParams: " + Q.join());
                return i.default.spawn(D, Q, L);
            });
        }
        launchVCamProcess(e) {
            return r.__awaiter(this, void 0, void 0, function*() {
                if ("darwin" !== a.platform()) return void global.__log.info("[ShareCameraProcessMain][launchVCamProcess] only supports macOS");
                if (h.isCMIOExtensionSupported()) {
                    global.__log.info("[ShareCameraProcessMain][launchVCamProcess] macOS 13+, using CMIO extension API");
                    const e = h.setupVirtualCamera();
                    if (global.__log.info("[ShareCameraProcessMain][launchVCamProcess] setupVirtualCamera result: " + JSON.stringify(e)), 
                    e.success) {
                        return {
                            kill: () => {
                                h.stopCameraStream(), h.cleanup();
                            },
                            on: (e, t) => {},
                            pid: -1
                        };
                    }
                    if (e.pending) {
                        global.__log.info("[ShareCameraProcessMain][launchVCamProcess] Extension activation pending, user approval required"), 
                        h.installAndActivateExtension();
                        return {
                            kill: () => {
                                h.cleanup();
                            },
                            on: (e, t) => {},
                            pid: -1
                        };
                    }
                    global.__log.info(`[ShareCameraProcessMain][launchVCamProcess] CMIO setup failed: ${e.message}, falling back to spawn`);
                }
                let t = "", n = "", r = {
                    cwd: "",
                    stdio: "ignore"
                };
                t = o.default.resolve(o.default.dirname(s.app.getPath("exe")), "../", "Resources/vivoCamera/vCam.app/Contents/MacOS"), 
                n = o.default.join(t, "./vCam"), r.cwd = t, global.__log.info(`[ShareCameraProcessMain][launchVCamProcess] executePath: ${n}, isUpdatePlugin: ${e}`);
                const l = [];
                e && l.push("runPar:1"), global.__log.info("[ShareCameraProcessMain][launchVCamProcess] processParams: " + l.join());
                const c = i.default.spawn(n, l, r);
                return c.on("error", e => {
                    global.__log.info("[ShareCameraProcessMain][launchVCamProcess] spawn error: " + (null == e ? void 0 : e.message));
                }), c;
            });
        }
    }
    t.default = p;
}
