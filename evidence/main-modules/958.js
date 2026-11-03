// analysis/pretty/main.js:80710; webpack module 958
function(e, t, n) {
    "use strict";
    const r = n(959);
    e.exports = (e, t = {}) => {
        if ("function" != typeof e) throw new TypeError(`Expected the first argument to be a function, got \`${typeof e}\``);
        const {wait: n = 0, before: i = !1, after: o = !0} = t;
        if (!i && !o) throw new Error("Both `before` and `after` are false, function wouldn't be called.");
        let a, s;
        const l = function(...t) {
            const r = this, l = i && !a;
            return clearTimeout(a), a = setTimeout(() => {
                a = void 0, o && (s = e.apply(r, t));
            }, n), l && (s = e.apply(r, t)), s;
        };
        return r(l, e), l.cancel = () => {
            a && (clearTimeout(a), a = void 0);
        }, l;
    };
}
