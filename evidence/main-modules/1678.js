// analysis/pretty/main.js:128363; webpack module 1678
function(e, t, n) {
    "use strict";
    const r = n(174), i = n(372), o = n(178), a = n(377), s = n(1);
    e.exports = (e, t, n) => {
        if ("function" == typeof t && (n = t), Array.isArray(e) && (t = e, e = {}), !t || !Array.isArray(t) || !t.length) throw new TypeError("no files or directories specified");
        t = Array.from(t);
        const i = r(e);
        if (i.sync && "function" == typeof n) throw new TypeError("callback not supported for sync tar functions");
        if (!i.file && "function" == typeof n) throw new TypeError("callback only supported with file option");
        return i.file && i.sync ? l(i, t) : i.file ? c(i, t, n) : i.sync ? h(i, t) : p(i, t);
    };
    const l = (e, t) => {
        const n = new i.Sync(e), r = new o.WriteStreamSync(e.file, {
            mode: e.mode || 438
        });
        n.pipe(r), u(n, t);
    }, c = (e, t, n) => {
        const r = new i(e), a = new o.WriteStream(e.file, {
            mode: e.mode || 438
        });
        r.pipe(a);
        const s = new Promise((e, t) => {
            a.on("error", t), a.on("close", e), r.on("error", t);
        });
        return d(r, t), n ? s.then(n, n) : s;
    }, u = (e, t) => {
        t.forEach(t => {
            "@" === t.charAt(0) ? a({
                file: s.resolve(e.cwd, t.slice(1)),
                sync: !0,
                noResume: !0,
                onentry: t => e.add(t)
            }) : e.add(t);
        }), e.end();
    }, d = (e, t) => {
        for (;t.length; ) {
            const n = t.shift();
            if ("@" === n.charAt(0)) return a({
                file: s.resolve(e.cwd, n.slice(1)),
                noResume: !0,
                onentry: t => e.add(t)
            }).then(n => d(e, t));
            e.add(n);
        }
        e.end();
    }, h = (e, t) => {
        const n = new i.Sync(e);
        return u(n, t), n;
    }, p = (e, t) => {
        const n = new i(e);
        return d(n, t), n;
    };
}
