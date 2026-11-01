// analysis/pretty/main.js:43912; webpack module 427
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = function(e) {
        return function(...t) {
            if (null === e) throw new Error("Callback was already called.");
            var n = e;
            e = null, n.apply(this, t);
        };
    }, e.exports = t.default;
}
