// analysis/pretty/main.js:108984; webpack module 1471
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    const r = n(0), i = r.__importDefault(n(10)), o = r.__importDefault(n(1)), a = n(2), s = r.__importStar(n(8)), l = n(32), c = r.__importDefault(n(137)), u = r.__importDefault(n(52));
    class d extends u.default {
        constructor() {
            super();
        }
        static getInstance() {
            return this.instance || (this.instance = new d), this.instance;
        }
        launchWorkerProcess(e, t) {
            var n, u;
            return r.__awaiter(this, void 0, void 0, function*() {
                if ("object" != typeof t) throw global.__log.info(`[PhoneCallProcessMain] (hashId=${e}) launchMirrorProcess Parameter type error`), 
                "Parameter type error";
                const {} = t;
                global.__log.info("[ConnectionModule][phoneCallProcessMain.ts][launchWorkerProcess] params: " + JSON.stringify(t));
                let r = "phoneCall.exe", d = "", h = {
                    cwd: ""
                };
                const p = [ "--callinfo=" + t.callinfo, "--address=" + t.address, "--port=" + t.port, "--xpos=" + t.xpos, "--ypos=" + t.ypos, "--width=" + t.width, "--height=" + t.height, "--mode=" + t.mode, "--token=" + (t.token || ""), "--device=" + t.deviceId ];
                "darwin" === s.platform() ? (r = o.default.resolve(o.default.dirname(a.app.getPath("exe")), "../", "Resources/phonecall/phonecall.app/Contents/MacOS"), 
                h.stdio = "ignore") : r = o.default.resolve(o.default.dirname(a.app.getPath("exe")), "phonecall"), 
                d = "darwin" === s.platform() ? o.default.join(r, "./phonecall") : o.default.join(r, "./phonecall.exe"), 
                h.cwd = r, global.__log.info("mirrorProcessSpawn-phoneCallCwdpath isUpdateV3: " + l.isv3flagFn());
                const f = null === (u = null === (n = global.__mainWindow) || void 0 === n ? void 0 : n.getNativeWindowHandle()) || void 0 === u ? void 0 : u.readUInt32LE(0);
                global.__log.info("mirrorProcessSpawn-windowHandle:" + f), global.__log.info("mirrorProcessSpawn-phoneCallCwdpath executePath: " + d);
                const _ = i.default.spawn(d, p, h);
                return _.on("error", e => {
                    if (global.__log.error("Failed to spawn process: " + d, e), e.message.includes("ENOENT") || e.message.includes("UNKNOWN")) {
                        const e = {
                            cmd: d,
                            params: p
                        };
                        c.default(e);
                    }
                }), _;
            });
        }
    }
    t.default = d;
}
