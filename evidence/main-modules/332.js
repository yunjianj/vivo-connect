// analysis/pretty/main.js:36061; webpack module 332
function(e, t, n) {
    "use strict";
    const r = n(49), i = n(228), {ANY: o} = i, a = n(68), s = n(229), l = n(227), c = n(329), u = n(331), d = n(330);
    e.exports = (e, t, n, h) => {
        let p, f, _, m, g;
        switch (e = new r(e, h), t = new a(t, h), n) {
          case ">":
            p = l, f = u, _ = c, m = ">", g = ">=";
            break;

          case "<":
            p = c, f = d, _ = l, m = "<", g = "<=";
            break;

          default:
            throw new TypeError('Must provide a hilo val of "<" or ">"');
        }
        if (s(e, t, h)) return !1;
        for (let n = 0; n < t.set.length; ++n) {
            const r = t.set[n];
            let a = null, s = null;
            if (r.forEach(e => {
                e.semver === o && (e = new i(">=0.0.0")), a = a || e, s = s || e, p(e.semver, a.semver, h) ? a = e : _(e.semver, s.semver, h) && (s = e);
            }), a.operator === m || a.operator === g) return !1;
            if ((!s.operator || s.operator === m) && f(e, s.semver)) return !1;
            if (s.operator === g && _(e, s.semver)) return !1;
        }
        return !0;
    };
}
