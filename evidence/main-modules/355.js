// analysis/pretty/main.js:38114; webpack module 355
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    const r = n(0), i = n(10), o = r.__importStar(n(8)), a = r.__importDefault(n(1)), s = n(2), l = r.__importStar(n(4)), c = r.__importDefault(n(52)), u = r.__importDefault(n(28));
    class d extends c.default {
        constructor() {
            super(), this._cachedArch = null, this._cachedExecutePath = null, this._cachedAppPath = null;
        }
        static getInstance() {
            return this.instance || (this.instance = new d), this.instance;
        }
        get executePath() {
            if (this._cachedExecutePath) return this._cachedExecutePath;
            let e = "";
            return e = "darwin" === o.platform() ? a.default.resolve(a.default.dirname(s.app.getPath("exe")), "../", "Resources/VClaw/VClaw.app/Contents/MacOS/VClaw") : a.default.resolve(a.default.dirname(s.app.getPath("exe")), "./VClaw/VClaw.exe"), 
            this._cachedExecutePath = e, e;
        }
        get vclawAppPath() {
            if (this._cachedAppPath) return this._cachedAppPath;
            let e = "";
            return e = a.default.resolve(a.default.dirname(s.app.getPath("exe")), "../", "Resources/VClaw/VClaw.app"), 
            this._cachedAppPath = e, e;
        }
        getMacArch() {
            if (null !== this._cachedArch) return this._cachedArch;
            if ("darwin" === o.platform()) {
                const e = i.execFileSync("uname", [ "-a" ], {
                    encoding: "utf8"
                }).includes("ARM") || "arm64" == process.arch ? "arm64" : "x64";
                return this._cachedArch = e, e;
            }
            return this._cachedArch = "", "";
        }
        isInstalled() {
            try {
                const e = l.existsSync(this.executePath);
                return global.__log.info("[VClawMain] VClaw安装状态: " + e), e;
            } catch (e) {
                return global.__log.error("[VClawMain] 检查安装状态失败: " + e), !1;
            }
        }
        launchWorkerProcess(e, t) {
            return r.__awaiter(this, void 0, void 0, function*() {
                global.__log.info(`[connectionModule][VClawMain] launchWorkerProcess: executePath=${this.executePath},appHashId=${e},params=${JSON.stringify(t)}`);
                const {startTime: n, themeColor: r, lang: a, isRtl: s, language: l} = t, c = [ e, "startTime=" + n, "themeColor=" + r, "lang=" + a, "isRtl=" + s, "language=" + l ];
                let d;
                if (global.__log.info(`[connectionModule][VClawMain] spawn: ${this.executePath}, args=${JSON.stringify(c)}`), 
                "darwin" === o.platform() && this.vclawAppPath) {
                    const e = [ "-a", this.vclawAppPath, "--args", ...c ];
                    global.__log.info(`[connectionModule][VClawMain] open -a spawn: ${this.vclawAppPath}, openArgs=${JSON.stringify(e)}`), 
                    d = i.spawn("open", e, {
                        shell: !1,
                        detached: !0,
                        stdio: "ignore"
                    });
                } else d = i.spawn(`"${this.executePath}"`, c, {
                    shell: !0,
                    detached: !0,
                    stdio: "ignore"
                });
                return d.on("error", e => {
                    if (global.__log.error("Failed to spawn process: " + this.executePath, e), e.message.includes("ENOENT") || e.message.includes("UNKNOWN")) try {
                        const e = {
                            cmd: this.executePath,
                            params: c
                        };
                        global.__log.info("DragFile.launch VClaw", e), u.default.launch(JSON.stringify(e)), 
                        global.__log.info("DragFile.launch VClaw end", e);
                    } catch (e) {
                        global.__log.error("DragFile.launch error", e);
                    }
                }), d.unref(), d;
            });
        }
    }
    t.default = d;
}
