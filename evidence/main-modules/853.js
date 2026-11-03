// analysis/pretty/main.js:76498; webpack module 853
function(e, t, n) {
    "use strict";
    const r = n(854), i = e => {
        if (!Number.isInteger(e) && e !== 1 / 0 || !(e > 0)) return Promise.reject(new TypeError("Expected `concurrency` to be a number from 1 and up"));
        const t = [];
        let n = 0;
        const i = () => {
            n--, t.length > 0 && t.shift()();
        }, o = (e, t, ...o) => {
            n++;
            const a = r(e, ...o);
            t(a), a.then(i, i);
        }, a = (r, ...i) => new Promise(a => ((r, i, ...a) => {
            n < e ? o(r, i, ...a) : t.push(o.bind(null, r, i, ...a));
        })(r, a, ...i));
        return Object.defineProperties(a, {
            activeCount: {
                get: () => n
            },
            pendingCount: {
                get: () => t.length
            },
            clearQueue: {
                value: () => {
                    t.length = 0;
                }
            }
        }), a;
    };
    e.exports = i, e.exports.default = i;
}
