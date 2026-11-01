// analysis/pretty/main.js:100235; webpack module 1318
function(e, t, n) {
    "use strict";
    const r = n(1), i = n(20), o = n(105).pathExists;
    e.exports = {
        symlinkPaths: function(e, t, n) {
            if (r.isAbsolute(e)) return i.lstat(e, t => t ? (t.message = t.message.replace("lstat", "ensureSymlink"), 
            n(t)) : n(null, {
                toCwd: e,
                toDst: e
            }));
            {
                const a = r.dirname(t), s = r.join(a, e);
                return o(s, (t, o) => t ? n(t) : o ? n(null, {
                    toCwd: s,
                    toDst: e
                }) : i.lstat(e, t => t ? (t.message = t.message.replace("lstat", "ensureSymlink"), 
                n(t)) : n(null, {
                    toCwd: e,
                    toDst: r.relative(a, e)
                })));
            }
        },
        symlinkPathsSync: function(e, t) {
            let n;
            if (r.isAbsolute(e)) {
                if (n = i.existsSync(e), !n) throw new Error("absolute srcpath does not exist");
                return {
                    toCwd: e,
                    toDst: e
                };
            }
            {
                const o = r.dirname(t), a = r.join(o, e);
                if (n = i.existsSync(a), n) return {
                    toCwd: a,
                    toDst: e
                };
                if (n = i.existsSync(e), !n) throw new Error("relative srcpath does not exist");
                return {
                    toCwd: e,
                    toDst: r.relative(o, e)
                };
            }
        }
    };
}
