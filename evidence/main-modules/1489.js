// analysis/pretty/main.js:111068; webpack module 1489
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    const r = n(0), i = r.__importDefault(n(341)), o = r.__importDefault(n(6)), a = n(164), s = n(728);
    class l {
        constructor() {
            this.init();
        }
        static getInstance() {
            return this.instance || (this.instance = new l, global.__log.info("freeTransferManager ready")), 
            this.instance;
        }
        init() {
            global.__log.info("[FreeTransferManager] init start"), s.initTaskMain(), this.registerHttpServerListeners();
        }
        registerHttpServerListeners() {
            global.__log.info("HttpForwardMessage:freeTransfer listen start"), i.default.getInstance().on("freeTransfer", e => {
                var t;
                if (global.__log.info("HttpForwardMessage:freeTransfer:recieve data"), null === (t = o.default.getItem("userInfo")) || void 0 === t ? void 0 : t.openId) try {
                    const t = JSON.parse(e);
                    t.ext && a.TaskManager.addTask(t.ext, !0);
                } catch (e) {
                    global.__log.info("HttpForwardMessage:FreeTransferManager add error " + e.message);
                } else global.__log.info("HttpForwardMessage:freeTransfer: unlogin recieve vpush msg noopenId");
            });
        }
    }
    t.default = l;
}
