// analysis/pretty/main.js:12825; webpack module 62
function(e, t, n) {
    "use strict";
    const r = /\s+/g;
    class i {
        constructor(e, t) {
            if (t = a(t), e instanceof i) return e.loose === !!t.loose && e.includePrerelease === !!t.includePrerelease ? e : new i(e.raw, t);
            if (e instanceof s) return this.raw = e.value, this.set = [ [ e ] ], this.formatted = void 0, 
            this;
            if (this.options = t, this.loose = !!t.loose, this.includePrerelease = !!t.includePrerelease, 
            this.raw = e.trim().replace(r, " "), this.set = this.raw.split("||").map(e => this.parseRange(e.trim())).filter(e => e.length), 
            !this.set.length) throw new TypeError("Invalid SemVer Range: " + this.raw);
            if (this.set.length > 1) {
                const e = this.set[0];
                if (this.set = this.set.filter(e => !g(e[0])), 0 === this.set.length) this.set = [ e ]; else if (this.set.length > 1) for (const e of this.set) if (1 === e.length && v(e[0])) {
                    this.set = [ e ];
                    break;
                }
            }
            this.formatted = void 0;
        }
        get range() {
            if (void 0 === this.formatted) {
                this.formatted = "";
                for (let e = 0; e < this.set.length; e++) {
                    e > 0 && (this.formatted += "||");
                    const t = this.set[e];
                    for (let e = 0; e < t.length; e++) e > 0 && (this.formatted += " "), this.formatted += t[e].toString().trim();
                }
            }
            return this.formatted;
        }
        format() {
            return this.range;
        }
        toString() {
            return this.range;
        }
        parseRange(e) {
            const t = ((this.options.includePrerelease && _) | (this.options.loose && m)) + ":" + e, n = o.get(t);
            if (n) return n;
            const r = this.options.loose, i = r ? u[d.HYPHENRANGELOOSE] : u[d.HYPHENRANGE];
            e = e.replace(i, R(this.options.includePrerelease)), l("hyphen replace", e), e = e.replace(u[d.COMPARATORTRIM], h), 
            l("comparator trim", e), e = e.replace(u[d.TILDETRIM], p), l("tilde trim", e), e = e.replace(u[d.CARETTRIM], f), 
            l("caret trim", e);
            let a = e.split(" ").map(e => E(e, this.options)).join(" ").split(/\s+/).map(e => I(e, this.options));
            r && (a = a.filter(e => (l("loose invalid filter", e, this.options), !!e.match(u[d.COMPARATORLOOSE])))), 
            l("range list", a);
            const c = new Map, v = a.map(e => new s(e, this.options));
            for (const e of v) {
                if (g(e)) return [ e ];
                c.set(e.value, e);
            }
            c.size > 1 && c.has("") && c.delete("");
            const y = [ ...c.values() ];
            return o.set(t, y), y;
        }
        intersects(e, t) {
            if (!(e instanceof i)) throw new TypeError("a Range is required");
            return this.set.some(n => y(n, t) && e.set.some(e => y(e, t) && n.every(n => e.every(e => n.intersects(e, t)))));
        }
        test(e) {
            if (!e) return !1;
            if ("string" == typeof e) try {
                e = new c(e, this.options);
            } catch (e) {
                return !1;
            }
            for (let t = 0; t < this.set.length; t++) if (D(this.set[t], e, this.options)) return !0;
            return !1;
        }
    }
    e.exports = i;
    const o = new (n(974)), a = n(259), s = n(199), l = n(197), c = n(45), {safeRe: u, t: d, comparatorTrimReplace: h, tildeTrimReplace: p, caretTrimReplace: f} = n(144), {FLAG_INCLUDE_PRERELEASE: _, FLAG_LOOSE: m} = n(196), g = e => "<0.0.0-0" === e.value, v = e => "" === e.value, y = (e, t) => {
        let n = !0;
        const r = e.slice();
        let i = r.pop();
        for (;n && r.length; ) n = r.every(e => i.intersects(e, t)), i = r.pop();
        return n;
    }, E = (e, t) => (e = e.replace(u[d.BUILD], ""), l("comp", e, t), e = T(e, t), l("caret", e), 
    e = w(e, t), l("tildes", e), e = O(e, t), l("xrange", e), e = N(e, t), l("stars", e), 
    e), b = e => !e || "x" === e.toLowerCase() || "*" === e, w = (e, t) => e.trim().split(/\s+/).map(e => S(e, t)).join(" "), S = (e, t) => {
        const n = t.loose ? u[d.TILDELOOSE] : u[d.TILDE];
        return e.replace(n, (t, n, r, i, o) => {
            let a;
            return l("tilde", e, t, n, r, i, o), b(n) ? a = "" : b(r) ? a = `>=${n}.0.0 <${+n + 1}.0.0-0` : b(i) ? a = `>=${n}.${r}.0 <${n}.${+r + 1}.0-0` : o ? (l("replaceTilde pr", o), 
            a = `>=${n}.${r}.${i}-${o} <${n}.${+r + 1}.0-0`) : a = `>=${n}.${r}.${i} <${n}.${+r + 1}.0-0`, 
            l("tilde return", a), a;
        });
    }, T = (e, t) => e.trim().split(/\s+/).map(e => A(e, t)).join(" "), A = (e, t) => {
        l("caret", e, t);
        const n = t.loose ? u[d.CARETLOOSE] : u[d.CARET], r = t.includePrerelease ? "-0" : "";
        return e.replace(n, (t, n, i, o, a) => {
            let s;
            return l("caret", e, t, n, i, o, a), b(n) ? s = "" : b(i) ? s = `>=${n}.0.0${r} <${+n + 1}.0.0-0` : b(o) ? s = "0" === n ? `>=${n}.${i}.0${r} <${n}.${+i + 1}.0-0` : `>=${n}.${i}.0${r} <${+n + 1}.0.0-0` : a ? (l("replaceCaret pr", a), 
            s = "0" === n ? "0" === i ? `>=${n}.${i}.${o}-${a} <${n}.${i}.${+o + 1}-0` : `>=${n}.${i}.${o}-${a} <${n}.${+i + 1}.0-0` : `>=${n}.${i}.${o}-${a} <${+n + 1}.0.0-0`) : (l("no pr"), 
            s = "0" === n ? "0" === i ? `>=${n}.${i}.${o}${r} <${n}.${i}.${+o + 1}-0` : `>=${n}.${i}.${o}${r} <${n}.${+i + 1}.0-0` : `>=${n}.${i}.${o} <${+n + 1}.0.0-0`), 
            l("caret return", s), s;
        });
    }, O = (e, t) => (l("replaceXRanges", e, t), e.split(/\s+/).map(e => C(e, t)).join(" ")), C = (e, t) => {
        e = e.trim();
        const n = t.loose ? u[d.XRANGELOOSE] : u[d.XRANGE];
        return e.replace(n, (n, r, i, o, a, s) => {
            l("xRange", e, n, r, i, o, a, s);
            const c = b(i), u = c || b(o), d = u || b(a), h = d;
            return "=" === r && h && (r = ""), s = t.includePrerelease ? "-0" : "", c ? n = ">" === r || "<" === r ? "<0.0.0-0" : "*" : r && h ? (u && (o = 0), 
            a = 0, ">" === r ? (r = ">=", u ? (i = +i + 1, o = 0, a = 0) : (o = +o + 1, a = 0)) : "<=" === r && (r = "<", 
            u ? i = +i + 1 : o = +o + 1), "<" === r && (s = "-0"), n = `${r + i}.${o}.${a}${s}`) : u ? n = `>=${i}.0.0${s} <${+i + 1}.0.0-0` : d && (n = `>=${i}.${o}.0${s} <${i}.${+o + 1}.0-0`), 
            l("xRange return", n), n;
        });
    }, N = (e, t) => (l("replaceStars", e, t), e.trim().replace(u[d.STAR], "")), I = (e, t) => (l("replaceGTE0", e, t), 
    e.trim().replace(u[t.includePrerelease ? d.GTE0PRE : d.GTE0], "")), R = e => (t, n, r, i, o, a, s, l, c, u, d, h) => `${n = b(r) ? "" : b(i) ? `>=${r}.0.0${e ? "-0" : ""}` : b(o) ? `>=${r}.${i}.0${e ? "-0" : ""}` : a ? ">=" + n : `>=${n}${e ? "-0" : ""}`} ${l = b(c) ? "" : b(u) ? `<${+c + 1}.0.0-0` : b(d) ? `<${c}.${+u + 1}.0-0` : h ? `<=${c}.${u}.${d}-${h}` : e ? `<${c}.${u}.${+d + 1}-0` : "<=" + l}`.trim(), D = (e, t, n) => {
        for (let n = 0; n < e.length; n++) if (!e[n].test(t)) return !1;
        if (t.prerelease.length && !n.includePrerelease) {
            for (let n = 0; n < e.length; n++) if (l(e[n].semver), e[n].semver !== s.ANY && e[n].semver.prerelease.length > 0) {
                const r = e[n].semver;
                if (r.major === t.major && r.minor === t.minor && r.patch === t.patch) return !0;
            }
            return !1;
        }
        return !0;
    };
}
