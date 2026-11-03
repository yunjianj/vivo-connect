// analysis/pretty/main.js:41242; webpack module 377
function(e, t, n) {
    "use strict";
    const r = n(174), i = n(378), o = n(4), a = n(178), s = n(1), l = n(177);
    e.exports = (e, t, n) => {
        "function" == typeof e ? (n = e, t = null, e = {}) : Array.isArray(e) && (t = e, 
        e = {}), "function" == typeof t && (n = t, t = null), t = t ? Array.from(t) : [];
        const i = r(e);
        if (i.sync && "function" == typeof n) throw new TypeError("callback not supported for sync tar functions");
        if (!i.file && "function" == typeof n) throw new TypeError("callback only supported with file option");
        return t.length && u(i, t), i.noResume || c(i), i.file && i.sync ? d(i) : i.file ? h(i, n) : p(i);
    };
    const c = e => {
        const t = e.onentry;
        e.onentry = t ? e => {
            t(e), e.resume();
        } : e => e.resume();
    }, u = (e, t) => {
        const n = new Map(t.map(e => [ l(e), !0 ])), r = e.filter, i = (e, t) => {
            const r = t || s.parse(e).root || ".", o = e !== r && (n.has(e) ? n.get(e) : i(s.dirname(e), r));
            return n.set(e, o), o;
        };
        e.filter = r ? (e, t) => r(e, t) && i(l(e)) : e => i(l(e));
    }, d = e => {
        const t = p(e), n = e.file;
        let r, i = !0;
        try {
            const a = o.statSync(n), s = e.maxReadSize || 16777216;
            if (a.size < s) t.end(o.readFileSync(n)); else {
                let e = 0;
                const i = Buffer.allocUnsafe(s);
                for (r = o.openSync(n, "r"); e < a.size; ) {
                    const n = o.readSync(r, i, 0, s, e);
                    e += n, t.write(i.slice(0, n));
                }
                t.end();
            }
            i = !1;
        } finally {
            if (i && r) try {
                o.closeSync(r);
            } catch (e) {}
        }
    }, h = (e, t) => {
        const n = new i(e), r = e.maxReadSize || 16777216, s = e.file, l = new Promise((e, t) => {
            n.on("error", t), n.on("end", e), o.stat(s, (e, i) => {
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
    }, p = e => new i(e);
}
