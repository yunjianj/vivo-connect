// analysis/pretty/main.js:102551; webpack module 1378
function(e, t, n) {
    "use strict";
    const r = n(20), i = n(1), o = n(73).mkdirsSync, a = n(685).utimesMillisSync, s = n(136);
    function l(e, t, n, o) {
        const a = (o.dereference ? r.statSync : r.lstatSync)(t);
        if (a.isDirectory()) return function(e, t, n, i, o) {
            return t ? d(n, i, o) : function(e, t, n, i) {
                return r.mkdirSync(n), d(t, n, i), u(n, e);
            }(e.mode, n, i, o);
        }(a, e, t, n, o);
        if (a.isFile() || a.isCharacterDevice() || a.isBlockDevice()) return function(e, t, n, i, o) {
            return t ? function(e, t, n, i) {
                if (i.overwrite) return r.unlinkSync(n), c(e, t, n, i);
                if (i.errorOnExist) throw new Error(`'${n}' already exists`);
            }(e, n, i, o) : c(e, n, i, o);
        }(a, e, t, n, o);
        if (a.isSymbolicLink()) return function(e, t, n, o) {
            let a = r.readlinkSync(t);
            o.dereference && (a = i.resolve(process.cwd(), a));
            if (e) {
                let e;
                try {
                    e = r.readlinkSync(n);
                } catch (e) {
                    if ("EINVAL" === e.code || "UNKNOWN" === e.code) return r.symlinkSync(a, n);
                    throw e;
                }
                if (o.dereference && (e = i.resolve(process.cwd(), e)), s.isSrcSubdir(a, e)) throw new Error(`Cannot copy '${a}' to a subdirectory of itself, '${e}'.`);
                if (r.statSync(n).isDirectory() && s.isSrcSubdir(e, a)) throw new Error(`Cannot overwrite '${e}' with '${a}'.`);
                return function(e, t) {
                    return r.unlinkSync(t), r.symlinkSync(e, t);
                }(a, n);
            }
            return r.symlinkSync(a, n);
        }(e, t, n, o);
        if (a.isSocket()) throw new Error("Cannot copy a socket file: " + t);
        if (a.isFIFO()) throw new Error("Cannot copy a FIFO pipe: " + t);
        throw new Error("Unknown file: " + t);
    }
    function c(e, t, n, i) {
        return r.copyFileSync(t, n), i.preserveTimestamps && function(e, t, n) {
            (function(e) {
                return 0 == (128 & e);
            })(e) && function(e, t) {
                u(e, 128 | t);
            }(n, e);
            (function(e, t) {
                const n = r.statSync(e);
                a(t, n.atime, n.mtime);
            })(t, n);
        }(e.mode, t, n), u(n, e.mode);
    }
    function u(e, t) {
        return r.chmodSync(e, t);
    }
    function d(e, t, n) {
        r.readdirSync(e).forEach(r => function(e, t, n, r) {
            const o = i.join(t, e), a = i.join(n, e), {destStat: c} = s.checkPathsSync(o, a, "copy", r);
            return function(e, t, n, r) {
                if (!r.filter || r.filter(t, n)) return l(e, t, n, r);
            }(c, o, a, r);
        }(r, e, t, n));
    }
    e.exports = function(e, t, n) {
        "function" == typeof n && (n = {
            filter: n
        }), (n = n || {}).clobber = !("clobber" in n) || !!n.clobber, n.overwrite = "overwrite" in n ? !!n.overwrite : n.clobber, 
        n.preserveTimestamps && "ia32" === process.arch && console.warn("fs-extra: Using the preserveTimestamps option in 32-bit node is not recommended;\n\n    see https://github.com/jprichardson/node-fs-extra/issues/269");
        const {srcStat: a, destStat: c} = s.checkPathsSync(e, t, "copy", n);
        return s.checkParentPathsSync(e, a, t, "copy"), function(e, t, n, a) {
            if (a.filter && !a.filter(t, n)) return;
            const s = i.dirname(n);
            r.existsSync(s) || o(s);
            return l(e, t, n, a);
        }(c, e, t, n);
    };
}
