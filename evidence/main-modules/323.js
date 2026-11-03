// analysis/pretty/main.js:34440; webpack module 323
function(e, t, n) {
    "use strict";
    const r = n(23).fromCallback, i = n(20), o = n(1), a = n(72), s = n(105).pathExists;
    e.exports = {
        outputFile: r(function(e, t, n, r) {
            "function" == typeof n && (r = n, n = "utf8");
            const l = o.dirname(e);
            s(l, (o, s) => o ? r(o) : s ? i.writeFile(e, t, n, r) : void a.mkdirs(l, o => {
                if (o) return r(o);
                i.writeFile(e, t, n, r);
            }));
        }),
        outputFileSync: function(e, ...t) {
            const n = o.dirname(e);
            if (i.existsSync(n)) return i.writeFileSync(e, ...t);
            a.mkdirsSync(n), i.writeFileSync(e, ...t);
        }
    };
}
