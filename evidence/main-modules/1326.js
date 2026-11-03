// analysis/pretty/main.js:100386; webpack module 1326
function(e, t, n) {
    "use strict";
    const r = n(20), i = n(1), o = n(321).copy, a = n(222).remove, s = n(72).mkdirp, l = n(105).pathExists, c = n(133);
    function u(e, t, n, r, i) {
        return r ? d(e, t, n, i) : n ? a(t, r => r ? i(r) : d(e, t, n, i)) : void l(t, (r, o) => r ? i(r) : o ? i(new Error("dest already exists.")) : d(e, t, n, i));
    }
    function d(e, t, n, i) {
        r.rename(e, t, r => r ? "EXDEV" !== r.code ? i(r) : function(e, t, n, r) {
            o(e, t, {
                overwrite: n,
                errorOnExist: !0
            }, t => t ? r(t) : a(e, r));
        }(e, t, n, i) : i());
    }
    e.exports = function(e, t, n, r) {
        "function" == typeof n && (r = n, n = {});
        const o = (n = n || {}).overwrite || n.clobber || !1;
        c.checkPaths(e, t, "move", n, (n, a) => {
            if (n) return r(n);
            const {srcStat: l, isChangingCase: d = !1} = a;
            c.checkParentPaths(e, l, t, "move", n => n ? r(n) : function(e) {
                const t = i.dirname(e);
                return i.parse(t).root === t;
            }(t) ? u(e, t, o, d, r) : void s(i.dirname(t), n => n ? r(n) : u(e, t, o, d, r)));
        });
    };
}
