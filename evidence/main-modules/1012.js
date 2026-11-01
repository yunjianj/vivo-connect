// analysis/pretty/main.js:81954; webpack module 1012
function(e, t, n) {
    "use strict";
    const r = n(51);
    function i(e) {
        if (e.every(o)) return t => {
            let n = t;
            for (let t = 0; t < e.length; t++) if (n = e[t].transform(n, e[t].options), !n) return !1;
            return n;
        };
    }
    function o(e) {
        if ("function" != typeof e.transform) throw new Error([ "No transform function found on format. Did you create a format instance?", "const myFormat = format(formatFn);", "const instance = myFormat();" ].join("\n"));
        return !0;
    }
    e.exports = (...e) => {
        const t = r(i(e)), n = t();
        return n.Format = t.Format, n;
    }, e.exports.cascade = i;
}
