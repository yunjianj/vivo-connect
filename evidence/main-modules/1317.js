// analysis/pretty/main.js:100195; webpack module 1317
function(e, t, n) {
    "use strict";
    const r = n(23).fromCallback, i = n(1), o = n(132), a = n(72), s = a.mkdirs, l = a.mkdirsSync, c = n(1318), u = c.symlinkPaths, d = c.symlinkPathsSync, h = n(1319), p = h.symlinkType, f = h.symlinkTypeSync, _ = n(105).pathExists, {areIdentical: m} = n(133);
    function g(e, t, n, r) {
        u(e, t, (a, l) => {
            if (a) return r(a);
            e = l.toDst, p(l.toCwd, n, (n, a) => {
                if (n) return r(n);
                const l = i.dirname(t);
                _(l, (n, i) => n ? r(n) : i ? o.symlink(e, t, a, r) : void s(l, n => {
                    if (n) return r(n);
                    o.symlink(e, t, a, r);
                }));
            });
        });
    }
    e.exports = {
        createSymlink: r(function(e, t, n, r) {
            r = "function" == typeof n ? n : r, n = "function" != typeof n && n, o.lstat(t, (i, a) => {
                !i && a.isSymbolicLink() ? Promise.all([ o.stat(e), o.stat(t) ]).then(([i, o]) => {
                    if (m(i, o)) return r(null);
                    g(e, t, n, r);
                }) : g(e, t, n, r);
            });
        }),
        createSymlinkSync: function(e, t, n) {
            let r;
            try {
                r = o.lstatSync(t);
            } catch {}
            if (r && r.isSymbolicLink()) {
                const n = o.statSync(e), r = o.statSync(t);
                if (m(n, r)) return;
            }
            const a = d(e, t);
            e = a.toDst, n = f(a.toCwd, n);
            const s = i.dirname(t);
            return o.existsSync(s) || l(s), o.symlinkSync(e, t, n);
        }
    };
}
