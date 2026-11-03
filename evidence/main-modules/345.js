// analysis/pretty/main.js:37290; webpack module 345
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.getPathHistory = t.addPathHistory = void 0;
    const r = n(0), i = r.__importDefault(n(1)), o = r.__importDefault(n(4)), a = r.__importDefault(n(6)), s = n(112);
    t.addPathHistory = function(e) {
        let t = a.default.getItem(s.DB_STORAGE_KEY.BACKUP_PATH_HISTORY) || [];
        t.push(e), a.default.setItem(s.DB_STORAGE_KEY.BACKUP_PATH_HISTORY, [ ...new Set(t) ]);
    }, t.getPathHistory = function() {
        const e = a.default.getItem(s.DB_STORAGE_KEY.BACKUP_PATH), t = i.default.dirname(e), n = i.default.basename(e);
        let r = a.default.getItem(s.DB_STORAGE_KEY.BACKUP_PATH_HISTORY) || [];
        0 == r.length && r.push(e);
        try {
            return r.map(e => ({
                path: e,
                isBroken: !o.default.existsSync(e),
                isCurrent: i.default.basename(e) == n && i.default.dirname(e) == t
            }));
        } catch (e) {
            return [];
        }
    };
}
