// analysis/pretty/main.js:119560; webpack module 1557
function(e, t, n) {
    "use strict";
    e.exports = (e, t, n) => {
        const r = n => Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            writable: !0
        });
        return Object.defineProperty(e, t, {
            configurable: !0,
            enumerable: !0,
            get() {
                const e = n();
                return r(e), e;
            },
            set(e) {
                r(e);
            }
        }), e;
    };
}
