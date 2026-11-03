// analysis/pretty/main.js:114337; webpack module 1518
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.renameFile = void 0;
    const r = n(0), i = n(46);
    t.renameFile = (e, t) => r.__awaiter(void 0, void 0, void 0, function*() {
        const o = () => "renderer" === process.type ? window._log : global.__log;
        if (!e || !t) return !1;
        const a = n(1), s = n(4);
        return new Promise(n => r.__awaiter(void 0, void 0, void 0, function*() {
            s.stat(e, r => {
                if (r) return n({
                    ok: !1,
                    code: 2
                }), void o().error("renameFile fs.stat error: " + r.message);
                const l = a.dirname(e), c = a.join(l, t);
                s.rename(e, c, e => {
                    if (e) return o().error("renameFile fs.rename error: " + e.message), void n({
                        ok: !1,
                        code: 3
                    });
                    n({
                        ok: !0,
                        code: 1,
                        msg: "成功",
                        data: i.fixPCFilePath(c)
                    });
                });
            });
        }));
    });
}
