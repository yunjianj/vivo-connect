// analysis/pretty/main.js:19034; webpack module 145
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = function(e, t) {
        t || (t = e.length);
        if (!t) throw new Error("arity is undefined");
        return function(...n) {
            return "function" == typeof n[t - 1] ? e.apply(this, n) : new Promise((r, i) => {
                n[t - 1] = (e, ...t) => {
                    if (e) return i(e);
                    r(t.length > 1 ? t : t[0]);
                }, e.apply(this, n);
            });
        };
    }, e.exports = t.default;
}
