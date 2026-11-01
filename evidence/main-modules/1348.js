// analysis/pretty/main.js:101086; webpack module 1348
function(e, t, n) {
    "use strict";
    const r = n(49), i = n(134), {safeRe: o, t: a} = n(159);
    e.exports = (e, t) => {
        if (e instanceof r) return e;
        if ("number" == typeof e && (e = String(e)), "string" != typeof e) return null;
        let n = null;
        if ((t = t || {}).rtl) {
            const r = t.includePrerelease ? o[a.COERCERTLFULL] : o[a.COERCERTL];
            let i;
            for (;(i = r.exec(e)) && (!n || n.index + n[0].length !== e.length); ) n && i.index + i[0].length === n.index + n[0].length || (n = i), 
            r.lastIndex = i.index + i[1].length + i[2].length;
            r.lastIndex = -1;
        } else n = e.match(t.includePrerelease ? o[a.COERCEFULL] : o[a.COERCE]);
        if (null === n) return null;
        const s = n[2], l = n[3] || "0", c = n[4] || "0", u = t.includePrerelease && n[5] ? "-" + n[5] : "", d = t.includePrerelease && n[6] ? "+" + n[6] : "";
        return i(`${s}.${l}.${c}${u}${d}`, t);
    };
}
