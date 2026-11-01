// analysis/pretty/main.js:101232; webpack module 1359
function(e, t, n) {
    "use strict";
    const r = n(68), i = n(228), {ANY: o} = i, a = n(229), s = n(67), l = [ new i(">=0.0.0-0") ], c = [ new i(">=0.0.0") ], u = (e, t, n) => {
        if (e === t) return !0;
        if (1 === e.length && e[0].semver === o) {
            if (1 === t.length && t[0].semver === o) return !0;
            e = n.includePrerelease ? l : c;
        }
        if (1 === t.length && t[0].semver === o) {
            if (n.includePrerelease) return !0;
            t = c;
        }
        const r = new Set;
        let i, u, p, f, _, m, g;
        for (const t of e) ">" === t.operator || ">=" === t.operator ? i = d(i, t, n) : "<" === t.operator || "<=" === t.operator ? u = h(u, t, n) : r.add(t.semver);
        if (r.size > 1) return null;
        if (i && u) {
            if (p = s(i.semver, u.semver, n), p > 0) return null;
            if (0 === p && (">=" !== i.operator || "<=" !== u.operator)) return null;
        }
        for (const e of r) {
            if (i && !a(e, String(i), n)) return null;
            if (u && !a(e, String(u), n)) return null;
            for (const r of t) if (!a(e, String(r), n)) return !1;
            return !0;
        }
        let v = !(!u || n.includePrerelease || !u.semver.prerelease.length) && u.semver, y = !(!i || n.includePrerelease || !i.semver.prerelease.length) && i.semver;
        v && 1 === v.prerelease.length && "<" === u.operator && 0 === v.prerelease[0] && (v = !1);
        for (const e of t) {
            if (g = g || ">" === e.operator || ">=" === e.operator, m = m || "<" === e.operator || "<=" === e.operator, 
            i) if (y && e.semver.prerelease && e.semver.prerelease.length && e.semver.major === y.major && e.semver.minor === y.minor && e.semver.patch === y.patch && (y = !1), 
            ">" === e.operator || ">=" === e.operator) {
                if (f = d(i, e, n), f === e && f !== i) return !1;
            } else if (">=" === i.operator && !a(i.semver, String(e), n)) return !1;
            if (u) if (v && e.semver.prerelease && e.semver.prerelease.length && e.semver.major === v.major && e.semver.minor === v.minor && e.semver.patch === v.patch && (v = !1), 
            "<" === e.operator || "<=" === e.operator) {
                if (_ = h(u, e, n), _ === e && _ !== u) return !1;
            } else if ("<=" === u.operator && !a(u.semver, String(e), n)) return !1;
            if (!e.operator && (u || i) && 0 !== p) return !1;
        }
        return !(i && m && !u && 0 !== p) && (!(u && g && !i && 0 !== p) && (!y && !v));
    }, d = (e, t, n) => {
        if (!e) return t;
        const r = s(e.semver, t.semver, n);
        return r > 0 ? e : r < 0 || ">" === t.operator && ">=" === e.operator ? t : e;
    }, h = (e, t, n) => {
        if (!e) return t;
        const r = s(e.semver, t.semver, n);
        return r < 0 ? e : r > 0 || "<" === t.operator && "<=" === e.operator ? t : e;
    };
    e.exports = (e, t, n = {}) => {
        if (e === t) return !0;
        e = new r(e, n), t = new r(t, n);
        let i = !1;
        e: for (const r of e.set) {
            for (const e of t.set) {
                const t = u(r, e, n);
                if (i = i || null !== t, t) continue e;
            }
            if (i) return !1;
        }
        return !0;
    };
}
