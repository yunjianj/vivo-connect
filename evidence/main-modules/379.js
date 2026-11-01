// analysis/pretty/main.js:41497; webpack module 379
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    class r {
        constructor() {
            this.map = new Map;
        }
        static getInstance() {
            return r.instance || (r.instance = new r), r.instance;
        }
        has(e) {
            return this.map.has(e);
        }
        add(e, t) {
            this.map.set(e, t), global.__fmLog.info("[fm]requestManager add, " + e);
        }
        abort(e) {
            const t = this.map.get(e);
            t && t.abort();
        }
        remove(e) {
            this.map.get(e) && global.__fmLog.info("[fm]requestManager destroy, " + e), this.map.delete(e), 
            global.__fmLog.info("[fm]requestManager remove, " + e);
        }
        getAll() {
            return global.__fmLog.info("[fm]requestManager remove, " + JSON.stringify([ ...this.map.keys() ])), 
            this.map;
        }
    }
    t.default = r.getInstance();
}
