// analysis/pretty/main.js:4547; webpack module 23
function(e, t, n) {
    "use strict";
    t.fromCallback = function(e) {
        return Object.defineProperty(function(...t) {
            if ("function" != typeof t[t.length - 1]) return new Promise((n, r) => {
                t.push((e, t) => null != e ? r(e) : n(t)), e.apply(this, t);
            });
            e.apply(this, t);
        }, "name", {
            value: e.name
        });
    }, t.fromPromise = function(e) {
        return Object.defineProperty(function(...t) {
            const n = t[t.length - 1];
            if ("function" != typeof n) return e.apply(this, t);
            t.pop(), e.apply(this, t).then(e => n(null, e), n);
        }, "name", {
            value: e.name
        });
    };
}
