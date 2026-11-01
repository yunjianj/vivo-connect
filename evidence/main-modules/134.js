// analysis/pretty/main.js:18583; webpack module 134
function(e, t, n) {
    "use strict";
    const r = n(49);
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
