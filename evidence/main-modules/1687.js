// analysis/pretty/main.js:129123; webpack module 1687
function(e, t, n) {
    "use strict";
    const r = n(174), i = n(795), o = n(4), a = n(178), s = n(1), l = n(177);
    e.exports = (e, t, n) => {
        "function" == typeof e ? (n = e, t = null, e = {}) : Array.isArray(e) && (t = e, 
        e = {}), "function" == typeof t && (n = t, t = null), t = t ? Array.from(t) : [];
        const i = r(e);
        if (i.sync && "function" == typeof n) throw new TypeError("callback not supported for sync tar functions");
        if (!i.file && "function" == typeof n) throw new TypeError("callback only supported with file option");
        return t.length && c(i, t), i.file && i.sync ? u(i) : i.file ? d(i, n) : i.sync ? h(i) : p(i);
    };
    const c = (e, t) => {
        const n = new Map(t.map(e => [ l(e), !0 ])), r = e.filter, i = (e, t) => {
            const r = t || s.parse(e).root || ".", o = e !== r && (n.has(e) ? n.get(e) : i(s.dirname(e), r));
            return n.set(e, o), o;
        };
        e.filter = r ? (e, t) => r(e, t) && i(l(e)) : e => i(l(e));
    }, u = e => {
        const t = new i.Sync(e), n = e.file, r = o.statSync(n), s = e.maxReadSize || 16777216;
        new a.ReadStreamSync(n, {
            readSize: s,
            size: r.size
        }).pipe(t);
    }, d = (e, t) => {
        const n = new i(e), r = e.maxReadSize || 16777216, s = e.file, l = new Promise((e, t) => {
            n.on("error", t), n.on("close", e), o.stat(s, (e, i) => {
                if (e) t(e); else {
                    const e = new a.ReadStream(s, {
                        readSize: r,
                        size: i.size
                    });
                    e.on("error", t), e.pipe(n);
                }
            });
        });
        return t ? l.then(t, t) : l;
    }, h = e => new i.Sync(e), p = e => new i(e);
}
