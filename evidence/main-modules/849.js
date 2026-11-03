// analysis/pretty/main.js:76430; webpack module 849
function(e, t, n) {
    "use strict";
    const r = n(1), i = n(850);
    e.exports = (e, t = {}) => {
        const n = r.resolve(t.cwd || ""), {root: o} = r.parse(n), a = [].concat(e);
        return new Promise(e => {
            !function t(n) {
                i(a, {
                    cwd: n
                }).then(i => {
                    i ? e(r.join(n, i)) : n === o ? e(null) : t(r.dirname(n));
                });
            }(n);
        });
    }, e.exports.sync = (e, t = {}) => {
        let n = r.resolve(t.cwd || "");
        const {root: o} = r.parse(n), a = [].concat(e);
        for (;;) {
            const e = i.sync(a, {
                cwd: n
            });
            if (e) return r.join(n, e);
            if (n === o) return null;
            n = r.dirname(n);
        }
    };
}
