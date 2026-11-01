// analysis/pretty/main.js:108835; webpack module 1467
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    const r = n(0), i = n(10), o = r.__importStar(n(8)), a = r.__importDefault(n(1)), s = n(2), l = n(32), c = r.__importDefault(n(52));
    class u extends c.default {
        constructor() {
            super();
        }
        static getInstance() {
            return this.instance || (this.instance = new u), this.instance;
        }
        get executePath() {
            if ("darwin" === o.platform()) {
                const e = s.app.getPath("home"), t = a.default.join(e, "Applications/vdfs"), n = a.default.resolve(a.default.dirname(s.app.getPath("exe")), "../", "Resources/vdfs/vdfs.app/Contents/MacOS/vdfs");
                return global.__log.info("[connectionModule][VDFSClientProcessMain] launchWorkerProcess:" + t), 
                global.__log.info("[connectionModule][VDFSClientProcessMain] launchWorkerProcess: real path" + n), 
                n;
            }
            return a.default.resolve(a.default.dirname(s.app.getPath("exe")), "./vdfs/vdfs.exe");
        }
        launchWorkerProcess(e, t) {
            return r.__awaiter(this, void 0, void 0, function*() {
                const n = l.PathUtil.getVDFSLogPath(), {desPath: r} = t;
                global.__log.info(`[connectionModule][VDFSClientProcessMain] launchWorkerProcess: --port:5678, --log:${n}, --appID:${e}, --des:${r}, --executePath111:${this.executePath}`);
                const o = i.spawn(this.executePath, [ "--des", r, "--port", "5678", "--log", n, "--appID", e ], {
                    stdio: "ignore"
                });
                return global.__log.info("[connectionModule][vdfClientProcessMain] launchWorkerProcess path is: " + this.executePath), 
                o;
            });
        }
        removeDomain() {
            return r.__awaiter(this, void 0, void 0, function*() {
                global.__log.info("[connectionModule][vdfClientProcessMain] removeDomain path is: " + this.executePath);
                try {
                    const e = i.spawn(this.executePath, [ "--removeDomain", "all" ], {
                        detached: !0,
                        stdio: "ignore"
                    });
                    e.unref(), e.on("close", e => {
                        console.log("[connectionModule][vdfClientProcessMain] removeDomain close: " + e);
                    });
                } catch (e) {
                    global.__log.error("[connectionModule][vdfClientProcessMain] removeDomain error: " + e);
                }
            });
        }
    }
    t.default = u;
}
