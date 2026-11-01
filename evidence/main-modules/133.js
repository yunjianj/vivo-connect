// analysis/pretty/main.js:18467; webpack module 133
function(e, t, n) {
    "use strict";
    const r = n(132), i = n(1), o = n(5);
    function a(e, t, n) {
        const i = n.dereference ? e => r.stat(e, {
            bigint: !0
        }) : e => r.lstat(e, {
            bigint: !0
        });
        return Promise.all([ i(e), i(t).catch(e => {
            if ("ENOENT" === e.code) return null;
            throw e;
        }) ]).then(([e, t]) => ({
            srcStat: e,
            destStat: t
        }));
    }
    function s(e, t) {
        return t.ino && t.dev && t.ino === e.ino && t.dev === e.dev;
    }
    function l(e, t) {
        const n = i.resolve(e).split(i.sep).filter(e => e), r = i.resolve(t).split(i.sep).filter(e => e);
        return n.reduce((e, t, n) => e && r[n] === t, !0);
    }
    function c(e, t, n) {
        return `Cannot ${n} '${e}' to a subdirectory of itself, '${t}'.`;
    }
    e.exports = {
        checkPaths: function(e, t, n, r, u) {
            o.callbackify(a)(e, t, r, (r, o) => {
                if (r) return u(r);
                const {srcStat: a, destStat: d} = o;
                if (d) {
                    if (s(a, d)) {
                        const r = i.basename(e), o = i.basename(t);
                        return "move" === n && r !== o && r.toLowerCase() === o.toLowerCase() ? u(null, {
                            srcStat: a,
                            destStat: d,
                            isChangingCase: !0
                        }) : u(new Error("Source and destination must not be the same."));
                    }
                    if (a.isDirectory() && !d.isDirectory()) return u(new Error(`Cannot overwrite non-directory '${t}' with directory '${e}'.`));
                    if (!a.isDirectory() && d.isDirectory()) return u(new Error(`Cannot overwrite directory '${t}' with non-directory '${e}'.`));
                }
                return a.isDirectory() && l(e, t) ? u(new Error(c(e, t, n))) : u(null, {
                    srcStat: a,
                    destStat: d
                });
            });
        },
        checkPathsSync: function(e, t, n, o) {
            const {srcStat: a, destStat: u} = function(e, t, n) {
                let i;
                const o = n.dereference ? e => r.statSync(e, {
                    bigint: !0
                }) : e => r.lstatSync(e, {
                    bigint: !0
                }), a = o(e);
                try {
                    i = o(t);
                } catch (e) {
                    if ("ENOENT" === e.code) return {
                        srcStat: a,
                        destStat: null
                    };
                    throw e;
                }
                return {
                    srcStat: a,
                    destStat: i
                };
            }(e, t, o);
            if (u) {
                if (s(a, u)) {
                    const r = i.basename(e), o = i.basename(t);
                    if ("move" === n && r !== o && r.toLowerCase() === o.toLowerCase()) return {
                        srcStat: a,
                        destStat: u,
                        isChangingCase: !0
                    };
                    throw new Error("Source and destination must not be the same.");
                }
                if (a.isDirectory() && !u.isDirectory()) throw new Error(`Cannot overwrite non-directory '${t}' with directory '${e}'.`);
                if (!a.isDirectory() && u.isDirectory()) throw new Error(`Cannot overwrite directory '${t}' with non-directory '${e}'.`);
            }
            if (a.isDirectory() && l(e, t)) throw new Error(c(e, t, n));
            return {
                srcStat: a,
                destStat: u
            };
        },
        checkParentPaths: function e(t, n, o, a, l) {
            const u = i.resolve(i.dirname(t)), d = i.resolve(i.dirname(o));
            if (d === u || d === i.parse(d).root) return l();
            r.stat(d, {
                bigint: !0
            }, (r, i) => r ? "ENOENT" === r.code ? l() : l(r) : s(n, i) ? l(new Error(c(t, o, a))) : e(t, n, d, a, l));
        },
        checkParentPathsSync: function e(t, n, o, a) {
            const l = i.resolve(i.dirname(t)), u = i.resolve(i.dirname(o));
            if (u === l || u === i.parse(u).root) return;
            let d;
            try {
                d = r.statSync(u, {
                    bigint: !0
                });
            } catch (e) {
                if ("ENOENT" === e.code) return;
                throw e;
            }
            if (s(n, d)) throw new Error(c(t, o, a));
            return e(t, n, u, a);
        },
        isSrcSubdir: l,
        areIdentical: s
    };
}
