// analysis/pretty/main.js:72621; webpack module 794
function(e, t, n) {
    "use strict";
    const r = n(174), i = n(372), o = n(4), a = n(178), s = n(377), l = n(1), c = n(176);
    e.exports = (e, t, n) => {
        const i = r(e);
        if (!i.file) throw new TypeError("file is required");
        if (i.gzip || i.brotli || i.file.endsWith(".br") || i.file.endsWith(".tbr")) throw new TypeError("cannot append to compressed archives");
        if (!t || !Array.isArray(t) || !t.length) throw new TypeError("no files or directories specified");
        return t = Array.from(t), i.sync ? u(i, t) : h(i, t, n);
    };
    const u = (e, t) => {
        const n = new i.Sync(e);
        let r, a, s = !0;
        try {
            try {
                r = o.openSync(e.file, "r+");
            } catch (t) {
                if ("ENOENT" !== t.code) throw t;
                r = o.openSync(e.file, "w+");
            }
            const i = o.fstatSync(r), l = Buffer.alloc(512);
            e: for (a = 0; a < i.size; a += 512) {
                for (let e = 0, t = 0; e < 512; e += t) {
                    if (t = o.readSync(r, l, e, l.length - e, a + e), 0 === a && 31 === l[0] && 139 === l[1]) throw new Error("cannot append to compressed archives");
                    if (!t) break e;
                }
                const t = new c(l);
                if (!t.cksumValid) break;
                const n = 512 * Math.ceil(t.size / 512);
                if (a + n + 512 > i.size) break;
                a += n, e.mtimeCache && e.mtimeCache.set(t.path, t.mtime);
            }
            s = !1, d(e, n, a, r, t);
        } finally {
            if (s) try {
                o.closeSync(r);
            } catch (e) {}
        }
    }, d = (e, t, n, r, i) => {
        const o = new a.WriteStreamSync(e.file, {
            fd: r,
            start: n
        });
        t.pipe(o), p(t, i);
    }, h = (e, t, n) => {
        t = Array.from(t);
        const r = new i(e), s = new Promise((n, i) => {
            r.on("error", i);
            let s = "r+";
            const l = (u, d) => u && "ENOENT" === u.code && "r+" === s ? (s = "w+", o.open(e.file, s, l)) : u ? i(u) : void o.fstat(d, (s, l) => {
                if (s) return o.close(d, () => i(s));
                ((t, n, r) => {
                    const i = (e, n) => {
                        e ? o.close(t, t => r(e)) : r(null, n);
                    };
                    let a = 0;
                    if (0 === n) return i(null, 0);
                    let s = 0;
                    const l = Buffer.alloc(512), u = (r, d) => {
                        if (r) return i(r);
                        if (s += d, s < 512 && d) return o.read(t, l, s, l.length - s, a + s, u);
                        if (0 === a && 31 === l[0] && 139 === l[1]) return i(new Error("cannot append to compressed archives"));
                        if (s < 512) return i(null, a);
                        const h = new c(l);
                        if (!h.cksumValid) return i(null, a);
                        const p = 512 * Math.ceil(h.size / 512);
                        return a + p + 512 > n ? i(null, a) : (a += p + 512, a >= n ? i(null, a) : (e.mtimeCache && e.mtimeCache.set(h.path, h.mtime), 
                        s = 0, void o.read(t, l, 0, 512, a, u)));
                    };
                    o.read(t, l, 0, 512, a, u);
                })(d, l.size, (o, s) => {
                    if (o) return i(o);
                    const l = new a.WriteStream(e.file, {
                        fd: d,
                        start: s
                    });
                    r.pipe(l), l.on("error", i), l.on("close", n), f(r, t);
                });
            });
            o.open(e.file, s, l);
        });
        return n ? s.then(n, n) : s;
    }, p = (e, t) => {
        t.forEach(t => {
            "@" === t.charAt(0) ? s({
                file: l.resolve(e.cwd, t.slice(1)),
                sync: !0,
                noResume: !0,
                onentry: t => e.add(t)
            }) : e.add(t);
        }), e.end();
    }, f = (e, t) => {
        for (;t.length; ) {
            const n = t.shift();
            if ("@" === n.charAt(0)) return s({
                file: l.resolve(e.cwd, n.slice(1)),
                noResume: !0,
                onentry: t => e.add(t)
            }).then(n => f(e, t));
            e.add(n);
        }
        e.end();
    };
}
