// analysis/pretty/main.js:102450; webpack module 1375
function(e, t, n) {
    "use strict";
    const r = n(20), i = n(1), o = n(73).mkdirs, a = n(108).pathExists, s = n(685).utimesMillis, l = n(136);
    function c(e, t, n, r, s) {
        const l = i.dirname(n);
        a(l, (i, a) => i ? s(i) : a ? d(e, t, n, r, s) : void o(l, i => i ? s(i) : d(e, t, n, r, s)));
    }
    function u(e, t, n, r, i, o) {
        Promise.resolve(i.filter(n, r)).then(a => a ? e(t, n, r, i, o) : o(), e => o(e));
    }
    function d(e, t, n, i, o) {
        (i.dereference ? r.stat : r.lstat)(t, (a, s) => a ? o(a) : s.isDirectory() ? function(e, t, n, i, o, a) {
            return t ? _(n, i, o, a) : function(e, t, n, i, o) {
                r.mkdir(n, r => {
                    if (r) return o(r);
                    _(t, n, i, t => t ? o(t) : f(n, e, o));
                });
            }(e.mode, n, i, o, a);
        }(s, e, t, n, i, o) : s.isFile() || s.isCharacterDevice() || s.isBlockDevice() ? function(e, t, n, i, o, a) {
            return t ? function(e, t, n, i, o) {
                if (!i.overwrite) return i.errorOnExist ? o(new Error(`'${n}' already exists`)) : o();
                r.unlink(n, r => r ? o(r) : h(e, t, n, i, o));
            }(e, n, i, o, a) : h(e, n, i, o, a);
        }(s, e, t, n, i, o) : s.isSymbolicLink() ? g(e, t, n, i, o) : s.isSocket() ? o(new Error("Cannot copy a socket file: " + t)) : s.isFIFO() ? o(new Error("Cannot copy a FIFO pipe: " + t)) : o(new Error("Unknown file: " + t)));
    }
    function h(e, t, n, i, o) {
        r.copyFile(t, n, r => r ? o(r) : i.preserveTimestamps ? function(e, t, n, r) {
            if (function(e) {
                return 0 == (128 & e);
            }(e)) return function(e, t, n) {
                return f(e, 128 | t, n);
            }(n, e, i => i ? r(i) : p(e, t, n, r));
            return p(e, t, n, r);
        }(e.mode, t, n, o) : f(n, e.mode, o));
    }
    function p(e, t, n, i) {
        !function(e, t, n) {
            r.stat(e, (e, r) => e ? n(e) : s(t, r.atime, r.mtime, n));
        }(t, n, t => t ? i(t) : f(n, e, i));
    }
    function f(e, t, n) {
        return r.chmod(e, t, n);
    }
    function _(e, t, n, i) {
        r.readdir(e, (r, o) => r ? i(r) : m(o, e, t, n, i));
    }
    function m(e, t, n, r, o) {
        const a = e.pop();
        return a ? function(e, t, n, r, o, a) {
            const s = i.join(n, t), c = i.join(r, t);
            l.checkPaths(s, c, "copy", o, (t, i) => {
                if (t) return a(t);
                const {destStat: l} = i;
                !function(e, t, n, r, i) {
                    r.filter ? u(d, e, t, n, r, i) : d(e, t, n, r, i);
                }(l, s, c, o, t => t ? a(t) : m(e, n, r, o, a));
            });
        }(e, a, t, n, r, o) : o();
    }
    function g(e, t, n, o, a) {
        r.readlink(t, (t, s) => t ? a(t) : (o.dereference && (s = i.resolve(process.cwd(), s)), 
        e ? void r.readlink(n, (t, c) => t ? "EINVAL" === t.code || "UNKNOWN" === t.code ? r.symlink(s, n, a) : a(t) : (o.dereference && (c = i.resolve(process.cwd(), c)), 
        l.isSrcSubdir(s, c) ? a(new Error(`Cannot copy '${s}' to a subdirectory of itself, '${c}'.`)) : e.isDirectory() && l.isSrcSubdir(c, s) ? a(new Error(`Cannot overwrite '${c}' with '${s}'.`)) : function(e, t, n) {
            r.unlink(t, i => i ? n(i) : r.symlink(e, t, n));
        }(s, n, a))) : r.symlink(s, n, a)));
    }
    e.exports = function(e, t, n, r) {
        "function" != typeof n || r ? "function" == typeof n && (n = {
            filter: n
        }) : (r = n, n = {}), r = r || function() {}, (n = n || {}).clobber = !("clobber" in n) || !!n.clobber, 
        n.overwrite = "overwrite" in n ? !!n.overwrite : n.clobber, n.preserveTimestamps && "ia32" === process.arch && console.warn("fs-extra: Using the preserveTimestamps option in 32-bit node is not recommended;\n\n    see https://github.com/jprichardson/node-fs-extra/issues/269"), 
        l.checkPaths(e, t, "copy", n, (i, o) => {
            if (i) return r(i);
            const {srcStat: a, destStat: s} = o;
            l.checkParentPaths(e, a, t, "copy", i => i ? r(i) : n.filter ? u(c, s, e, t, n, r) : c(s, e, t, n, r));
        });
    };
}
