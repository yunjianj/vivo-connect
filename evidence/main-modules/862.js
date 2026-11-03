// analysis/pretty/main.js:76789; webpack module 862
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    const r = {}, i = {
        next: e => {
            const t = r[e];
            if (!t) return;
            t.shift();
            const n = t[0];
            n ? n(() => i.next(e)) : delete r[e];
        },
        schedule: e => new Promise(t => {
            let n = r[e];
            n || (n = r[e] = []), n.push(t), n.length > 1 || t(() => i.next(e));
        })
    };
    t.default = i;
}
