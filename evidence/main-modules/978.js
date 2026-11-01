// analysis/pretty/main.js:80950; webpack module 978
function(e, t, n) {
    "use strict";
    const r = n(45), i = n(62), o = n(198);
    e.exports = (e, t) => {
        e = new i(e, t);
        let n = new r("0.0.0");
        if (e.test(n)) return n;
        if (n = new r("0.0.0-0"), e.test(n)) return n;
        n = null;
        for (let t = 0; t < e.set.length; ++t) {
            const i = e.set[t];
            let a = null;
            i.forEach(e => {
                const t = new r(e.semver.version);
                switch (e.operator) {
                  case ">":
                    0 === t.prerelease.length ? t.patch++ : t.prerelease.push(0), t.raw = t.format();

                  case "":
                  case ">=":
                    a && !o(t, a) || (a = t);
                    break;

                  case "<":
                  case "<=":
                    break;

                  default:
                    throw new Error("Unexpected operation: " + e.operator);
                }
            }), !a || n && !o(n, a) || (n = a);
        }
        return n && e.test(n) ? n : null;
    };
}
