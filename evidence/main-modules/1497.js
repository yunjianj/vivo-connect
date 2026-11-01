// analysis/pretty/main.js:111906; webpack module 1497
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    const r = n(0), i = r.__importDefault(n(10)), o = r.__importDefault(n(8)), a = r.__importDefault(n(137)), s = n(32);
    class l {
        constructor() {
            this.executePath = s.PathUtil.getPcToastPath() + "/pc_toast.exe", console.log("toast path is: " + this.executePath);
        }
        static getInstance() {
            return this.instance || (this.instance = new l), this.instance;
        }
        get ToastProcessSpawn() {
            return this.toastProcessSpawn;
        }
        toast({title: e, msg: t, iconPath: n, pendingIntentId: r, questNotifyUrl: s}) {
            let l = [];
            "darwin" === o.default.platform() ? l = [ "-title", e, "-informativeText", t, "-source", "0", "-appID", "com.vivo.ConnectStatus", "-id", "ConnectStatus_63646331_1_0" ] : r ? l = [ "-t", e, "-m", t, "-appID", "com.vivo.pcsuite", "-p", n, "-md", "4", " " + r, "-id", r ] : s && (l = [ "-t", e, "-m", t, "-appID", "com.vivo.pcsuite", "-p", n, "-md", "6", "" + s, "-id", "questNotifyUrl" ]), 
            global.__log.info("CommonToastManager toast param: " + l), this.toastProcessSpawn = i.default.spawn(this.executePath, l).on("error", e => {
                if (global.__log.info("CommonToastManager toast error: " + e), e.message.includes("ENOENT") || e.message.includes("UNKNOWN")) {
                    const e = {
                        cmd: this.executePath,
                        params: l
                    };
                    a.default(e);
                }
            });
        }
    }
    t.default = l.getInstance();
}
