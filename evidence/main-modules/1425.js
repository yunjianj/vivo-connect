// analysis/pretty/main.js:104943; webpack module 1425
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.DirtyRecord = void 0;
    const r = n(0);
    t.DirtyRecord = function() {
        return function(e) {
            return function(...t) {
                return r.__awaiter(this, void 0, void 0, function*() {
                    return this.transaction(n => r.__awaiter(this, void 0, void 0, function*() {
                        const r = t[0], i = Date.now(), o = Math.floor(i / 1e3), a = yield e.apply(n, [ null == r ? void 0 : r.data ]);
                        let s = null == r ? void 0 : r.localId;
                        if (!s) throw new Error("DirtyRecord: 无法从 params 中解析 recordId");
                        return yield n.run("UPDATE Record SET dirty = 1, localLastUpdate = ?, localVersion = ? WHERE localId = ?", [ i, o, s ]), 
                        a;
                    }));
                });
            };
        };
    };
}
