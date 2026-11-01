// analysis/pretty/main.js:108768; webpack module 1465
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    const r = n(0), i = n(10), o = r.__importStar(n(8)), a = r.__importDefault(n(1)), s = n(2), l = r.__importDefault(n(137)), c = r.__importDefault(n(52));
    class u extends c.default {
        constructor() {
            super();
        }
        static getInstance() {
            return this.instance || (this.instance = new u), this.instance;
        }
        get executePath() {
            return "darwin" === o.platform() ? "" : a.default.resolve(a.default.dirname(s.app.getPath("exe")), "./example/win-ia32-unpacked/example.exe");
        }
        launchWorkerProcess(e, t) {
            return r.__awaiter(this, void 0, void 0, function*() {
                console.log("[connectionModule][exampleProcessMain] launchWorkerProcess");
                const n = i.spawn(this.executePath, [ e, t ]);
                return n.on("error", n => {
                    if (global.__log.error("Failed to spawn process: " + this.executePath, n), n.message.includes("ENOENT") || n.message.includes("UNKNOWN")) {
                        const n = {
                            cmd: this.executePath,
                            params: [ e, t ]
                        };
                        l.default(n);
                    }
                }), n;
            });
        }
    }
    t.default = u;
}
