// analysis/pretty/main.js:30840; webpack module 265
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.MirroProcessManager = void 0;
    const r = n(0), i = r.__importDefault(n(10)), o = r.__importDefault(n(1)), a = n(2), s = r.__importStar(n(8)), l = n(32), c = r.__importDefault(n(6)), u = n(46), d = n(119), h = [ "mirrorButtonClicked", "min" ];
    var p;
    !function(e) {
        e.WS_MESSAGE = "WS_MESSAGE", e.WS_CONNECTED = "WS_CONNECTED", e.WS_DISCONNECT = "WS_DISCONNECT";
    }(p || (p = {}));
    class f {
        constructor() {
            var e, t, n, r, i, o, a;
            this.mirrorScreenExeIsRunning = !1, this.executePath = "", this.processOptions = {
                cwd: ""
            }, this.ws = null, this.isFullScreen = !1, this.windowIsHide = !1, null === (e = global.__mainWindow) || void 0 === e || e.on("maximize", () => {
                this.postMsgMirrorProcess("max"), this.windowIsHide = !1;
            }), null === (t = global.__mainWindow) || void 0 === t || t.on("minimize", () => {}), 
            null === (n = global.__mainWindow) || void 0 === n || n.on("restore", () => {
                "darwin" === s.platform() && (this.postMsgMirrorProcess("restore"), this.windowIsHide = !1);
            }), null === (r = global.__mainWindow) || void 0 === r || r.on("hide", () => {
                !global.__clickQuitFromDock && "darwin" == s.platform() || this.windowIsHide || (this.postMsgMirrorProcess("min"), 
                this.windowIsHide = !0);
            }), null === (i = global.__mainWindow) || void 0 === i || i.on("show", () => {
                (global.__clickQuitFromDock || "darwin" != s.platform()) && (this.postMsgMirrorProcess("restore"), 
                global.__clickQuitFromDock = !1, this.windowIsHide = !1);
            }), null === (o = global.__mainWindow) || void 0 === o || o.on("enter-full-screen", () => {
                this.isFullScreen = !0;
            }), null === (a = global.__mainWindow) || void 0 === a || a.on("leave-full-screen", () => {
                this.isFullScreen = !1;
            });
        }
        setWebContent(e) {
            this.webContent = e;
        }
        static getInstance() {
            return this.instance || (this.instance = new f), this.instance;
        }
        wsReceiveMessage(e) {
            var t;
            global.__log.info("[mirrorProcessManager][wsReceiveMessage] event: " + (null == e ? void 0 : e.data)), 
            "close" === e.data && setTimeout(() => {
                this.killMirrorProcess();
            }, 100), global.__log.info("[mirrorProcessManager][wsReceiveMessage] webContent: " + !!this.webContent);
            try {
                global.__log.info("[mirrorProcessManager] send success"), null === (t = this.webContent) || void 0 === t || t.send(p.WS_MESSAGE, null == e ? void 0 : e.data);
            } catch (e) {
                global.__log.info("[mirrorProcessManager][wsReceiveMessage] webContent send err: " + e.toString());
            }
        }
        wsClose() {
            global.__log.info("[mirrorProcessManager] ws close"), u.sendStableIpcMessage(this.webContent, p.WS_DISCONNECT);
        }
        initWs(e) {
            global.__log.info("[mirrorProcessManager] init ws: " + !!e), this.ws = e, this.ws && (this.ws.on("message", this.wsReceiveMessage.bind(this)), 
            this.ws.on("close", e => {
                this.wsClose();
            }), u.sendStableIpcMessage(this.webContent, p.WS_CONNECTED));
        }
        wsSend(e) {
            var t;
            global.__log.info("[mirrorProcessManager] ws send msg: " + e);
            try {
                null === (t = this.ws) || void 0 === t || t.send(e);
            } catch (e) {
                global.__log.info("[mirrorProcessManager][wsReceiveMessage] ws send msg err: " + e.toString());
            }
        }
        isWs() {
            return !!this.ws;
        }
        postMsgMirrorProcess(e = "") {
            var t;
            if (global.__log.info("[mirrorProcessManager]postMsgMirrorProcess: mirrorProcessSpawn: " + !!this.mirrorProcessSpawn), 
            this.mirrorProcessSpawn) {
                const n = JSON.stringify({
                    event: e
                }), r = "00" + n.length;
                global.__log.info(`[mirrorProcessManager]postMsgMirrorProcess: ${r}#${n}, os.platform(): ${s.platform()}`);
                try {
                    if (global.__log.info(`[mirrorProcessManager]postMsgMirrorProcess: ${r}#${n}`), 
                    "darwin" === s.platform() && this.isFullScreen && !h.includes(e)) return;
                    global.__log.info(`[mirrorProcessManager]postMsgMirrorProcess event: ${e}, ws: ${!!this.ws}`), 
                    null === (t = this.ws) || void 0 === t || t.send(e);
                } catch (e) {
                    global.__log.info("[mirrorProcessManager]postMsgMirrorProcess error: " + JSON.stringify(e));
                }
            }
        }
        launchMirrorProcess(e, t, n = "") {
            var r, u, h, p;
            global.__log.info("launchMirrorProcess ip: " + e + ", deviceNama: " + n), this.killMirrorProcess(), 
            global.__log.info(__dirname);
            let f = d.processNameManager.vivoScreen + ".exe";
            this.executePath = "", this.processOptions = {
                cwd: ""
            }, "darwin" === s.platform() ? (f = o.default.resolve(o.default.dirname(a.app.getPath("exe")), "../", `Resources/vivoScreen/${d.processNameManager.vivoScreen}.app/Contents/MacOS`), 
            this.executePath = f + "/" + d.processNameManager.vivoScreen, this.processOptions.stdio = "ignore") : (f = o.default.resolve(o.default.dirname(a.app.getPath("exe")), d.processNameManager.vivoScreen), 
            this.executePath = f + `/${d.processNameManager.vivoScreen}.exe`), this.processOptions.cwd = f;
            const _ = global.__mainWindow, m = _ && !_.isDestroyed() ? _.getBounds() : null, g = a.screen.getPrimaryDisplay();
            let v = (null == g ? void 0 : g.scaleFactor) || 1;
            "darwin" === s.platform() && (v = 1);
            const y = null === (r = ((null == m ? void 0 : m.x) || 20) * v) || void 0 === r ? void 0 : r.toString(), E = null === (u = ((null == m ? void 0 : m.y) || 20) * v) || void 0 === u ? void 0 : u.toString(), b = null === (h = ((null == m ? void 0 : m.height) || 800) * v) || void 0 === h ? void 0 : h.toString(), w = null === (p = ((null == m ? void 0 : m.width) || 1360) * v) || void 0 === p ? void 0 : p.toString(), S = c.default.getItem("screen") || "pixels:2", T = c.default.getItem("no_audio") || "no_audio:0", A = c.default.getItem("top_mirror_window") || "top_mirror_window:0", O = c.default.getItem("autoHideTitleBar") || "autoHideTitleBar:0";
            return global.__log.info(`window get bounds: ${y} ${E} ${b} ${w}  scale: ${v}`), 
            global.__log.info(l.PathUtil.getMirrorScreenLogPath()), global.__log.info("mirrorProcessSpawn-vivoScreenCwdpath executePath: " + this.executePath), 
            this.mirrorProcessSpawn = i.default.spawn(this.executePath, [ e, t, l.PathUtil.getMirrorScreenLogPath(), "com.vivo.pcsuite", n, y, E, b, w, S, T, A, O ], this.processOptions), 
            this.mirrorScreenExeIsRunning = !0, this.mirrorProcessSpawn.on("error", e => (console.log("mirrorProcessSpawn-error-", e), 
            global.__log.info(" start mirror process on: error"), global.__log.info(e), this.mirrorScreenExeIsRunning = !1, 
            !1)), this.mirrorProcessSpawn.on("message", e => (console.log("mirrorProcessSpawn-message-", e), 
            global.__log.info("start mirror process on: message"), global.__log.info(e), !1)), 
            this.mirrorProcessSpawn.on("exit", e => (console.log("mirrorProcessSpawn-exit-", e), 
            global.__log.info("start mirror process on: exit"), global.__log.info(e), this.killMirrorProcess(), 
            this.mirrorScreenExeIsRunning = !1, !1)), this.mirrorProcessSpawn.on("close", e => (console.log("mirrorProcessSpawn-close-", e), 
            global.__log.info("start mirror process on: close"), global.__log.info(e), this.killMirrorProcess(), 
            this.mirrorScreenExeIsRunning = !1, !1)), this.mirrorProcessSpawn.on("disconnect", e => (console.log("mirrorProcessSpawn-disconnect-", e), 
            global.__log.info("start mirror process on: disconnect"), global.__log.info(e), 
            this.mirrorScreenExeIsRunning = !1, !1)), !0;
        }
        killMirrorProcess() {
            global.__log.info("[mirror-process-manager] killMirrorProcess this.mirrorProcessSpawn: " + !!this.mirrorProcessSpawn), 
            this.ws && (this.ws.send("close"), this.ws = null), this.mirrorProcessSpawn && (this.mirrorProcessSpawn.kill(), 
            this.mirrorProcessSpawn);
        }
        isMirrorScreenAlive() {
            return global.__log.info("[mirror-process-manager] this.mirrorScreenExeIsRunning: " + this.mirrorScreenExeIsRunning), 
            !!this.mirrorScreenExeIsRunning;
        }
    }
    t.MirroProcessManager = f, t.default = f;
}
