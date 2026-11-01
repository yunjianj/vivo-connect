// analysis/pretty/main.js:16826; webpack module 105
function(e, t, n) {
    "use strict";
    const r = n(23).fromPromise, i = n(132);
    e.exports = {
        pathExists: r(function(e) {
            return i.access(e).then(() => !0).catch(() => !1);
        }),
        pathExistsSync: i.existsSync
    };
}
