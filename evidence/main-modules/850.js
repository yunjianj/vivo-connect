// analysis/pretty/main.js:76456; webpack module 850
function(e, t, n) {
    "use strict";
    const r = n(1), i = n(851), o = n(852);
    e.exports = (e, t) => (t = Object.assign({
        cwd: process.cwd()
    }, t), o(e, e => i(r.resolve(t.cwd, e)), t)), e.exports.sync = (e, t) => {
        t = Object.assign({
            cwd: process.cwd()
        }, t);
        for (const n of e) if (i.sync(r.resolve(t.cwd, n))) return n;
    };
}
