// analysis/pretty/main.js:73178; webpack module 798
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    const r = n(0), i = r.__importDefault(n(1706)), o = r.__importDefault(n(4));
    class a {
        constructor() {
            this.passBackList = [];
        }
        static getInstance() {
            return a.instance || (a.instance = new a), a.instance;
        }
        addAndCheck(e, t, n) {
            const r = this.getIsExist(e);
            global.__fmLog.info(`[fm]PassBackListInstance addAndCheck filePath:${e}, isDoc: ${n}, isExist: ${r}`), 
            n && (r || this.add(e, t));
        }
        delete(e) {
            const t = this.passBackList.findIndex(t => t.getFilePath() == e);
            -1 !== t && (global.__fmLog.info("[fm]PassBackListInstance delete: " + e), this.passBackList.splice(t, 1));
        }
        add(e, t) {
            const n = new i.default(e, t);
            n.init(), this.passBackList.push(n);
        }
        getIsExist(e) {
            if (o.default.existsSync(e)) return this.passBackList.some(t => t.getFilePath() == e);
            global.__fmLog.info("[fm]PassBackListInstance getIsExist false: " + e);
        }
    }
    t.default = a.getInstance();
}
