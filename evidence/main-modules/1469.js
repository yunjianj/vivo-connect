// analysis/pretty/main.js:108927; webpack module 1469
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    const r = n(0), i = n(10), o = r.__importStar(n(8)), a = r.__importDefault(n(1)), s = n(2), l = n(32), c = r.__importDefault(n(52)), u = r.__importDefault(n(95));
    class d extends c.default {
        constructor() {
            super();
        }
        static getInstance() {
            return this.instance || (this.instance = new d), this.instance;
        }
        get executePath() {
            let e = "";
            return e = "darwin" === o.platform() ? a.default.resolve(a.default.dirname(s.app.getPath("exe")), "../", "Resources/SyncService/VivoBackup") : a.default.resolve(a.default.dirname(s.app.getPath("exe")), "./SyncService/vivoBackup.exe"), 
            e;
        }
        launchWorkerProcess(e) {
            return r.__awaiter(this, void 0, void 0, function*() {
                const t = "" + l.PathUtil.getVivoBackupLogPath(), n = "/backup?hashId=" + e, r = u.default.serverPort || 9199;
                global.__log.info(`[connectionModule][BackupApplicationMain] launchWorkerProcess: executePath=${this.executePath} --url ${n}, --log ${t}, --port ${r}`);
                if (!!("undefined" == typeof __buildConfig__ || !__buildConfig__.IS_EXPORT)) {
                    return i.spawn(this.executePath, [ "--port=" + r, `--uri="${n}"`, `--logPath="${t}"` ], {
                        stdio: "ignore"
                    });
                }
            });
        }
    }
    t.default = d;
}
