// analysis/pretty/main.js:100412; webpack module 1327
function(e, t, n) {
    "use strict";
    const r = n(20), i = n(1), o = n(321).copySync, a = n(222).removeSync, s = n(72).mkdirpSync, l = n(133);
    function c(e, t, n) {
        try {
            r.renameSync(e, t);
        } catch (r) {
            if ("EXDEV" !== r.code) throw r;
            return function(e, t, n) {
                return o(e, t, {
                    overwrite: n,
                    errorOnExist: true
                }), a(e);
            }(e, t, n);
        }
    }
    e.exports = function(e, t, n) {
        const o = (n = n || {}).overwrite || n.clobber || !1, {srcStat: u, isChangingCase: d = !1} = l.checkPathsSync(e, t, "move", n);
        return l.checkParentPathsSync(e, u, t, "move"), function(e) {
            const t = i.dirname(e);
            return i.parse(t).root === t;
        }(t) || s(i.dirname(t)), function(e, t, n, i) {
            if (i) return c(e, t, n);
            if (n) return a(t), c(e, t, n);
            if (r.existsSync(t)) throw new Error("dest already exists.");
            return c(e, t, n);
        }(e, t, o, d);
    };
}
