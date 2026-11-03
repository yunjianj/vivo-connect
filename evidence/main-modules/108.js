// analysis/pretty/main.js:16884; webpack module 108
function(e, t, n) {
    "use strict";
    const r = n(23).fromPromise, i = n(135);
    e.exports = {
        pathExists: r(function(e) {
            return i.access(e).then(() => !0).catch(() => !1);
        }),
        pathExistsSync: i.existsSync
    };
}
