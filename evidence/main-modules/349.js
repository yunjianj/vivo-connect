// analysis/pretty/main.js:37582; webpack module 349
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    const r = n(0), i = r.__importDefault(n(10)), o = n(32), a = r.__importDefault(n(8)), s = r.__importDefault(n(137));
    let l = "pc_toast.exe";
    class c {
        constructor() {
            this.showToastIdList = [], "darwin" === a.default.platform() && (l = "mac_toast"), 
            this.executePath = `${o.PathUtil.getPcToastPath()}/${l}`, console.log("toast path is: " + this.executePath), 
            global.__log.info("toast path is: " + this.executePath);
        }
        static getInstance() {
            return this.instance || (this.instance = new c), this.instance;
        }
        get ToastProcessSpawn() {
            return this.toastProcessSpawn;
        }
        toast({title: e, msg: t, source: n = "0", id: r}) {
            let o = [];
            r = r || "ConnectStatus_63646331_1_0", o = "darwin" === a.default.platform() ? [ "-title", e, "-informativeText", t, "-source", n, "-appID", "com.vivo.pcsuite", "-id", r ] : [ "-t", e, "-m", t, "-md", n, "-appID", "com.vivo.pcsuite", "-id", r ], 
            global.__log.info("[toast-manager.ts][toast] paramArr: " + o.join()), this.toastProcessSpawn = i.default.spawn(this.executePath, o).on("error", e => {
                if (global.__log.info("toast err: " + e), e.message.includes("ENOENT") || e.message.includes("UNKNOWN")) {
                    const e = {
                        cmd: this.executePath,
                        params: o
                    };
                    s.default(e);
                }
            }), r && this.showToastIdList.push(r);
        }
        closeToast(e) {
            global.__log.info("[toast-manager.ts][closeToast] id: " + e), i.default.spawn(this.executePath, [ "-close", e, "-appID", "com.vivo.pcsuite" ]).on("error", t => {
                if (global.__log.info("closeToast err: " + t), t.message.includes("ENOENT") || t.message.includes("UNKNOWN")) {
                    const t = {
                        cmd: this.executePath,
                        params: [ "-close", e, "-appID", "com.vivo.pcsuite" ]
                    };
                    s.default(t);
                }
            }), this.showToastIdList = this.showToastIdList.filter(t => t != e);
        }
        closeAllWithIdToast() {
            [ ...this.showToastIdList ].forEach(e => this.closeToast(e));
        }
    }
    t.default = c;
}
