// analysis/pretty/main.js:43134; webpack module 414
function(e, t, n) {
    "use strict";
    const {configs: r, LEVEL: i, MESSAGE: o} = n(27);
    class a {
        constructor(e = {
            levels: r.npm.levels
        }) {
            this.paddings = a.paddingForLevels(e.levels, e.filler), this.options = e;
        }
        static getLongestLevel(e) {
            const t = Object.keys(e).map(e => e.length);
            return Math.max(...t);
        }
        static paddingForLevel(e, t, n) {
            const r = n + 1 - e.length, i = Math.floor(r / t.length);
            return `${t}${t.repeat(i)}`.slice(0, r);
        }
        static paddingForLevels(e, t = " ") {
            const n = a.getLongestLevel(e);
            return Object.keys(e).reduce((e, r) => (e[r] = a.paddingForLevel(r, t, n), e), {});
        }
        transform(e, t) {
            return e.message = `${this.paddings[e[i]]}${e.message}`, e[o] && (e[o] = `${this.paddings[e[i]]}${e[o]}`), 
            e;
        }
    }
    e.exports = e => new a(e), e.exports.Padder = e.exports.Format = a;
}
