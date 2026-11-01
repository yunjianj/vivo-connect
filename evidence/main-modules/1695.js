// analysis/pretty/main.js:129335; webpack module 1695
function(e, t, n) {
    "use strict";
    const r = n(4), i = n(1), o = r.lchown ? "lchown" : "chown", a = r.lchownSync ? "lchownSync" : "chownSync", s = r.lchown && !process.version.match(/v1[1-9]+\./) && !process.version.match(/v10\.[6-9]/), l = (e, t, n) => {
        try {
            return r[a](e, t, n);
        } catch (e) {
            if ("ENOENT" !== e.code) throw e;
        }
    }, c = s ? (e, t, n, i) => o => {
        o && "EISDIR" === o.code ? r.chown(e, t, n, i) : i(o);
    } : (e, t, n, r) => r, u = s ? (e, t, n) => {
        try {
            return l(e, t, n);
        } catch (i) {
            if ("EISDIR" !== i.code) throw i;
            ((e, t, n) => {
                try {
                    r.chownSync(e, t, n);
                } catch (e) {
                    if ("ENOENT" !== e.code) throw e;
                }
            })(e, t, n);
        }
    } : (e, t, n) => l(e, t, n), d = process.version;
    let h = (e, t, n) => r.readdir(e, t, n);
    /^v4\./.test(d) && (h = (e, t, n) => r.readdir(e, n));
    const p = (e, t, n, i) => {
        r[o](e, t, n, c(e, t, n, e => {
            i(e && "ENOENT" !== e.code ? e : null);
        }));
    }, f = (e, t, n, o, a) => {
        if ("string" == typeof t) return r.lstat(i.resolve(e, t), (r, i) => {
            if (r) return a("ENOENT" !== r.code ? r : null);
            i.name = t, f(e, i, n, o, a);
        });
        if (t.isDirectory()) _(i.resolve(e, t.name), n, o, r => {
            if (r) return a(r);
            const s = i.resolve(e, t.name);
            p(s, n, o, a);
        }); else {
            const r = i.resolve(e, t.name);
            p(r, n, o, a);
        }
    }, _ = (e, t, n, r) => {
        h(e, {
            withFileTypes: !0
        }, (i, o) => {
            if (i) {
                if ("ENOENT" === i.code) return r();
                if ("ENOTDIR" !== i.code && "ENOTSUP" !== i.code) return r(i);
            }
            if (i || !o.length) return p(e, t, n, r);
            let a = o.length, s = null;
            const l = i => {
                if (!s) return i ? r(s = i) : 0 == --a ? p(e, t, n, r) : void 0;
            };
            o.forEach(r => f(e, r, t, n, l));
        });
    }, m = (e, t, n) => {
        let o;
        try {
            o = ((e, t) => r.readdirSync(e, t))(e, {
                withFileTypes: !0
            });
        } catch (r) {
            if ("ENOENT" === r.code) return;
            if ("ENOTDIR" === r.code || "ENOTSUP" === r.code) return u(e, t, n);
            throw r;
        }
        return o && o.length && o.forEach(o => ((e, t, n, o) => {
            if ("string" == typeof t) try {
                const n = r.lstatSync(i.resolve(e, t));
                n.name = t, t = n;
            } catch (e) {
                if ("ENOENT" === e.code) return;
                throw e;
            }
            t.isDirectory() && m(i.resolve(e, t.name), n, o), u(i.resolve(e, t.name), n, o);
        })(e, o, t, n)), u(e, t, n);
    };
    e.exports = _, _.sync = m;
}
