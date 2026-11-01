// analysis/pretty/main.js:129160; webpack module 1688
function(e, t, n) {
    "use strict";
    const r = n(1689), i = n(4), o = n(1), a = n(1695), s = n(175);
    class l extends Error {
        constructor(e, t) {
            super("Cannot extract through symbolic link"), this.path = t, this.symlink = e;
        }
        get name() {
            return "SylinkError";
        }
    }
    class c extends Error {
        constructor(e, t) {
            super(t + ": Cannot cd into '" + e + "'"), this.path = e, this.code = t;
        }
        get name() {
            return "CwdError";
        }
    }
    const u = (e, t) => e.get(s(t)), d = (e, t, n) => e.set(s(t), n);
    e.exports = (e, t, n) => {
        e = s(e);
        const l = t.umask, p = 448 | t.mode, f = 0 != (p & l), _ = t.uid, m = t.gid, g = "number" == typeof _ && "number" == typeof m && (_ !== t.processUid || m !== t.processGid), v = t.preserve, y = t.unlink, E = t.cache, b = s(t.cwd), w = (t, r) => {
            t ? n(t) : (d(E, e, !0), r && g ? a(r, _, m, e => w(e)) : f ? i.chmod(e, p, n) : n());
        };
        if (E && !0 === u(E, e)) return w();
        if (e === b) return ((e, t) => {
            i.stat(e, (n, r) => {
                !n && r.isDirectory() || (n = new c(e, n && n.code || "ENOTDIR")), t(n);
            });
        })(e, w);
        if (v) return r(e, {
            mode: p
        }).then(e => w(null, e), w);
        const S = s(o.relative(b, e)).split("/");
        h(b, S, p, E, y, b, null, w);
    };
    const h = (e, t, n, r, a, l, c, d) => {
        if (!t.length) return d(null, c);
        const f = t.shift(), _ = s(o.resolve(e + "/" + f));
        if (u(r, _)) return h(_, t, n, r, a, l, c, d);
        i.mkdir(_, n, p(_, t, n, r, a, l, c, d));
    }, p = (e, t, n, r, o, a, c, u) => d => {
        d ? i.lstat(e, (f, _) => {
            if (f) f.path = f.path && s(f.path), u(f); else if (_.isDirectory()) h(e, t, n, r, o, a, c, u); else if (o) i.unlink(e, s => {
                if (s) return u(s);
                i.mkdir(e, n, p(e, t, n, r, o, a, c, u));
            }); else {
                if (_.isSymbolicLink()) return u(new l(e, e + "/" + t.join("/")));
                u(d);
            }
        }) : h(e, t, n, r, o, a, c = c || e, u);
    };
    e.exports.sync = (e, t) => {
        e = s(e);
        const n = t.umask, h = 448 | t.mode, p = 0 != (h & n), f = t.uid, _ = t.gid, m = "number" == typeof f && "number" == typeof _ && (f !== t.processUid || _ !== t.processGid), g = t.preserve, v = t.unlink, y = t.cache, E = s(t.cwd), b = t => {
            d(y, e, !0), t && m && a.sync(t, f, _), p && i.chmodSync(e, h);
        };
        if (y && !0 === u(y, e)) return b();
        if (e === E) return (e => {
            let t = !1, n = "ENOTDIR";
            try {
                t = i.statSync(e).isDirectory();
            } catch (e) {
                n = e.code;
            } finally {
                if (!t) throw new c(e, n);
            }
        })(E), b();
        if (g) return b(r.sync(e, h));
        const w = s(o.relative(E, e)).split("/");
        let S = null;
        for (let e = w.shift(), t = E; e && (t += "/" + e); e = w.shift()) if (t = s(o.resolve(t)), 
        !u(y, t)) try {
            i.mkdirSync(t, h), S = S || t, d(y, t, !0);
        } catch (e) {
            const n = i.lstatSync(t);
            if (n.isDirectory()) {
                d(y, t, !0);
                continue;
            }
            if (v) {
                i.unlinkSync(t), i.mkdirSync(t, h), S = S || t, d(y, t, !0);
                continue;
            }
            if (n.isSymbolicLink()) return new l(t, t + "/" + w.join("/"));
        }
        return b(S);
    };
}
