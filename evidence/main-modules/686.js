// analysis/pretty/main.js:61673; webpack module 686
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    const r = n(0), i = r.__importDefault(n(10)), o = n(32), a = r.__importDefault(n(8)), s = n(340);
    let l = "pcsuite_.exe";
    class c {
        constructor() {
            "darwin" === a.default.platform() && (l = ""), this.executePath = `${o.PathUtil.getPcToastPath()}/${l}`, 
            console.log("tools path is: " + this.executePath);
        }
        static getInstance() {
            return this.instance || (this.instance = new c), this.instance;
        }
        get ToolsProcessSpawn() {
            return this.toolsProcessSpawn;
        }
        openBrower({url: e}) {
            let t = [];
            t = (a.default.platform(), [ e ]), this.toolsProcessSpawn = i.default.spawn(this.executePath, t).on("error", e => {
                global.__log.info("toast err: " + e);
            });
        }
        repairService(e) {
            let t = !1;
            this.toolsProcessSpawn = i.default.spawn(this.executePath, [ "repairService" ]).on("error", n => {
                global.__log.info("pcsuite_.exe repairService  err: " + n), t = !0, e.result = 0, 
                e.fail_reason = "" + n, s.sendTask10534(e);
            }), process.nextTick(() => {
                t || s.sendTask10534(e);
            });
        }
    }
    t.default = c.getInstance();
}
