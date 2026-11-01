// analysis/pretty/main.js:76481; webpack module 852
function(e, t, n) {
    "use strict";
    const r = n(853);
    class i extends Error {
        constructor(e) {
            super(), this.value = e;
        }
    }
    const o = (e, t) => Promise.resolve(e).then(t), a = e => Promise.all(e).then(e => !0 === e[1] && Promise.reject(new i(e[0])));
    e.exports = (e, t, n) => {
        n = Object.assign({
            concurrency: 1 / 0,
            preserveOrder: !0
        }, n);
        const s = r(n.concurrency), l = [ ...e ].map(e => [ e, s(o, e, t) ]), c = r(n.preserveOrder ? 1 : 1 / 0);
        return Promise.all(l.map(e => c(a, e))).then(() => {}).catch(e => e instanceof i ? e.value : Promise.reject(e));
    };
}
