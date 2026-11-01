// analysis/pretty/main.js:83299; webpack module 1046
function(e, t, n) {
    "use strict";
    const r = n(4), {StringDecoder: i} = n(83), {Stream: o} = n(38);
    function a() {}
    e.exports = (e, t) => {
        const n = Buffer.alloc(65536), s = new i("utf8"), l = new o;
        let c = "", u = 0, d = 0;
        return -1 === e.start && delete e.start, l.readable = !0, l.destroy = () => {
            l.destroyed = !0, l.emit("end"), l.emit("close");
        }, r.open(e.file, "a+", "0644", (i, o) => {
            if (i) return t ? t(i) : l.emit("error", i), void l.destroy();
            !function i() {
                if (!l.destroyed) return r.read(o, n, 0, n.length, u, (r, o) => {
                    if (r) return t ? t(r) : l.emit("error", r), void l.destroy();
                    if (!o) return c && ((null == e.start || d > e.start) && (t ? t(null, c) : l.emit("line", c)), 
                    d++, c = ""), setTimeout(i, 1e3);
                    let a = s.write(n.slice(0, o));
                    t || l.emit("data", a), a = (c + a).split(/\n+/);
                    const h = a.length - 1;
                    let p = 0;
                    for (;p < h; p++) (null == e.start || d > e.start) && (t ? t(null, a[p]) : l.emit("line", a[p])), 
                    d++;
                    return c = a[h], u += o, i();
                });
                r.close(o, a);
            }();
        }), t ? l.destroy : l;
    };
}
