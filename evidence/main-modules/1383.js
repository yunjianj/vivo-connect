// analysis/pretty/main.js:102827; webpack module 1383
function(e, t, n) {
    "use strict";
    const r = n(23).fromCallback, i = n(1), o = n(20), a = n(73), s = n(108).pathExists, {areIdentical: l} = n(136);
    e.exports = {
        createLink: r(function(e, t, n) {
            function r(e, t) {
                o.link(e, t, e => {
                    if (e) return n(e);
                    n(null);
                });
            }
            o.lstat(t, (c, u) => {
                o.lstat(e, (o, c) => {
                    if (o) return o.message = o.message.replace("lstat", "ensureLink"), n(o);
                    if (u && l(c, u)) return n(null);
                    const d = i.dirname(t);
                    s(d, (i, o) => i ? n(i) : o ? r(e, t) : void a.mkdirs(d, i => {
                        if (i) return n(i);
                        r(e, t);
                    }));
                });
            });
        }),
        createLinkSync: function(e, t) {
            let n;
            try {
                n = o.lstatSync(t);
            } catch {}
            try {
                const t = o.lstatSync(e);
                if (n && l(t, n)) return;
            } catch (e) {
                throw e.message = e.message.replace("lstat", "ensureLink"), e;
            }
            const r = i.dirname(t);
            return o.existsSync(r) || a.mkdirsSync(r), o.linkSync(e, t);
        }
    };
}
