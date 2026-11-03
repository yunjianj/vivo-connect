// analysis/pretty/main.js:100116; webpack module 1315
function(e, t, n) {
    "use strict";
    const r = n(23).fromCallback, i = n(1), o = n(20), a = n(72);
    e.exports = {
        createFile: r(function(e, t) {
            function n() {
                o.writeFile(e, "", e => {
                    if (e) return t(e);
                    t();
                });
            }
            o.stat(e, (r, s) => {
                if (!r && s.isFile()) return t();
                const l = i.dirname(e);
                o.stat(l, (e, r) => {
                    if (e) return "ENOENT" === e.code ? a.mkdirs(l, e => {
                        if (e) return t(e);
                        n();
                    }) : t(e);
                    r.isDirectory() ? n() : o.readdir(l, e => {
                        if (e) return t(e);
                    });
                });
            });
        }),
        createFileSync: function(e) {
            let t;
            try {
                t = o.statSync(e);
            } catch {}
            if (t && t.isFile()) return;
            const n = i.dirname(e);
            try {
                o.statSync(n).isDirectory() || o.readdirSync(n);
            } catch (e) {
                if (!e || "ENOENT" !== e.code) throw e;
                a.mkdirsSync(n);
            }
            o.writeFileSync(e, "");
        }
    };
}
