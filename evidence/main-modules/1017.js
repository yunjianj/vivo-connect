// analysis/pretty/main.js:82011; webpack module 1017
function(e, t, n) {
    "use strict";
    const r = n(5).inspect, i = n(51), {LEVEL: o, MESSAGE: a, SPLAT: s} = n(27);
    e.exports = i((e, t = {}) => {
        const n = Object.assign({}, e);
        return delete n[o], delete n[a], delete n[s], e[a] = r(n, !1, t.depth || null, t.colorize), 
        e;
    });
}
