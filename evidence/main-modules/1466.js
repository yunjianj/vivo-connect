// analysis/pretty/main.js:108801; webpack module 1466
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
                const e = a.default.resolve(a.default.dirname(s.app.getPath("exe")), "../", "Resources/vdfs/vdfs.app/Contents/MacOS/vdfsServer");
                return global.__log.info("[connectionModule][VDFSServerProcessMain] launchWorkerProcess: real path" + e), 
                e;
            }
            return a.default.resolve(a.default.dirname(s.app.getPath("exe")), "./vdfs/vdfsServer.exe");
        }
        launchWorkerProcess(e, t) {
            return r.__awaiter(this, void 0, void 0, function*() {
                const n = l.PathUtil.getVDFSLogPath();
                global.__log.info(`[connectionModule][VDFSServerProcessMain] launchWorkerProcess: ${t} --port:5679, --log:${n}, --appID:${e}`);
                const r = i.spawn(this.executePath, [ "--port", "5679", "--log", n, "--appID", e ], {
                    stdio: "ignore"
                });
                return global.__log.info("[connectionModule][vdfserverProcessMain] launchWorkerProcess path is: " + this.executePath), 
                r;
            });
        }
    }
    t.default = u;
}
