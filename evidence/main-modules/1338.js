// analysis/pretty/main.js:101026; webpack module 1338
function(e, t, n) {
    "use strict";
    const r = n(49);
    e.exports = (e, t, n, i, o) => {
        "string" == typeof n && (o = i, i = n, n = void 0);
        try {
            return new r(e instanceof r ? e.version : e, n).inc(t, i, o).version;
        } catch (e) {
            return null;
        }
    };
}
