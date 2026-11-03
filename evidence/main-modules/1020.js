// analysis/pretty/main.js:82043; webpack module 1020
function(e, t, n) {
    "use strict";
    const r = n(5), {SPLAT: i} = n(27), o = /%[scdjifoO%]/g, a = /%%/g;
    class s {
        constructor(e) {
            this.options = e;
        }
        _splat(e, t) {
            const n = e.message, o = e[i] || e.splat || [], s = n.match(a), l = s && s.length || 0, c = t.length - l - o.length, u = c < 0 ? o.splice(c, -1 * c) : [], d = u.length;
            if (d) for (let t = 0; t < d; t++) Object.assign(e, u[t]);
            return e.message = r.format(n, ...o), e;
        }
        transform(e) {
            const t = e.message, n = e[i] || e.splat;
            if (!n || !n.length) return e;
            const r = t && t.match && t.match(o);
            if (!r && (n || n.length)) {
                const t = n.length > 1 ? n.splice(0) : n, r = t.length;
                if (r) for (let n = 0; n < r; n++) Object.assign(e, t[n]);
                return e;
            }
            return r ? this._splat(e, r) : e;
        }
    }
    e.exports = e => new s(e);
}
