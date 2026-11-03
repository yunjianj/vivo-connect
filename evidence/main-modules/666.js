// analysis/pretty/main.js:60560; webpack module 666
function(e, t, n) {
    "use strict";
    const r = /^[0-9]+$/, i = (e, t) => {
        if ("number" == typeof e && "number" == typeof t) return e === t ? 0 : e < t ? -1 : 1;
        const n = r.test(e), i = r.test(t);
        return n && i && (e = +e, t = +t), e === t ? 0 : n && !i ? -1 : i && !n ? 1 : e < t ? -1 : 1;
    };
    e.exports = {
        compareIdentifiers: i,
        rcompareIdentifiers: (e, t) => i(t, e)
    };
}
