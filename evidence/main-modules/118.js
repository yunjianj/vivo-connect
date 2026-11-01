// analysis/pretty/main.js:17887; webpack module 118
function(e, t, n) {
    "use strict";
    const r = n(45);
    e.exports = (e, t, n = !1) => {
        if (e instanceof r) return e;
        try {
            return new r(e, t);
        } catch (e) {
            if (!n) return null;
            throw e;
        }
    };
}
