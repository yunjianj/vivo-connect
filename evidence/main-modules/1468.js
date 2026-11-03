// analysis/pretty/main.js:108886; webpack module 1468
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    const r = n(0), i = n(10), o = r.__importStar(n(8)), a = r.__importDefault(n(1)), s = n(2), l = r.__importDefault(n(52)), c = r.__importDefault(n(137));
    class u extends l.default {
        constructor() {
            super();
        }
        static getInstance() {
            return this.instance || (this.instance = new u), this.instance;
        }
        get executePath() {
            let e = "";
            return e = "darwin" === o.platform() ? a.default.resolve(a.default.dirname(s.app.getPath("exe")), "../", "Resources/vivoControl/vcontrol.app/Contents/MacOS/vcontrol") : a.default.resolve(a.default.dirname(s.app.getPath("exe")), "./vivoControl/vivocontrol.exe"), 
            e;
        }
        launchWorkerProcess(e, t) {
            return r.__awaiter(this, void 0, void 0, function*() {
                global.__log.info(`[connectionModule][RemoteControlMain] launchWorkerProcess: executePath=${this.executePath},appHashId=${e},params=${JSON.stringify(t)}`);
                const {startTime: n, themeColor: r, lang: o, isRtl: a, language: s} = t;
                console.log("executePath", [ "executePath=" + this.executePath, e, "startTime=" + n, "themeColor=" + r, "lang=" + o, "isRtl=" + a ]);
                const l = i.spawn(`"${this.executePath}"`, [ e, "startTime=" + n, "themeColor=" + r, "lang=" + o, "isRtl=" + a, "language=" + s ], {
                    shell: !0,
                    detached: !0,
                    stdio: "ignore"
                });
                return l.on("error", t => {
                    if (global.__log.error("Failed to spawn process: " + this.executePath, t), t.message.includes("ENOENT") || t.message.includes("UNKNOWN")) {
                        const t = {
                            cmd: this.executePath,
                            params: [ e, "startTime=" + n, "themeColor=" + r, "lang=" + o, "isRtl=" + a, "language=" + s ]
                        };
                        c.default(t);
                    }
                }), l.unref(), l;
            });
        }
    }
    t.default = u;
}
