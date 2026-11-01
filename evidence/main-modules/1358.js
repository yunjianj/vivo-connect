// analysis/pretty/main.js:101216; webpack module 1358
function(e, t, n) {
    "use strict";
    const r = n(229), i = n(67);
    e.exports = (e, t, n) => {
        const o = [];
        let a = null, s = null;
        const l = e.sort((e, t) => i(e, t, n));
        for (const e of l) {
            r(e, t, n) ? (s = e, a || (a = e)) : (s && o.push([ a, s ]), s = null, a = null);
        }
        a && o.push([ a, null ]);
        const c = [];
        for (const [e, t] of o) e === t ? c.push(e) : t || e !== l[0] ? t ? e === l[0] ? c.push("<=" + t) : c.push(`${e} - ${t}`) : c.push(">=" + e) : c.push("*");
        const u = c.join(" || "), d = "string" == typeof t.raw ? t.raw : String(t);
        return u.length < d.length ? u : t;
    };
}
