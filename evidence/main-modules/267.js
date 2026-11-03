// analysis/pretty/main.js:31572; webpack module 267
function(e, t, n) {
    "use strict";
    const r = n(413), {LEVEL: i, MESSAGE: o} = n(27);
    r.enabled = !0;
    const a = /\s+/;
    class s {
        constructor(e = {}) {
            e.colors && this.addColors(e.colors), this.options = e;
        }
        static addColors(e) {
            const t = Object.keys(e).reduce((t, n) => (t[n] = a.test(e[n]) ? e[n].split(a) : e[n], 
            t), {});
            return s.allColors = Object.assign({}, s.allColors || {}, t), s.allColors;
        }
        addColors(e) {
            return s.addColors(e);
        }
        colorize(e, t, n) {
            if (void 0 === n && (n = t), !Array.isArray(s.allColors[e])) return r[s.allColors[e]](n);
            for (let t = 0, i = s.allColors[e].length; t < i; t++) n = r[s.allColors[e][t]](n);
            return n;
        }
        transform(e, t) {
            return t.all && "string" == typeof e[o] && (e[o] = this.colorize(e[i], e.level, e[o])), 
            (t.level || t.all || !t.message) && (e.level = this.colorize(e[i], e.level)), (t.all || t.message) && (e.message = this.colorize(e[i], e.level, e.message)), 
            e;
        }
    }
    e.exports = e => new s(e), e.exports.Colorizer = e.exports.Format = s;
}
