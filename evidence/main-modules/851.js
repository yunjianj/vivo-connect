// analysis/pretty/main.js:76467; webpack module 851
function(e, t, n) {
    "use strict";
    const r = n(4);
    e.exports = e => new Promise(t => {
        r.access(e, e => {
            t(!e);
        });
    }), e.exports.sync = e => {
        try {
            return r.accessSync(e), !0;
        } catch (e) {
            return !1;
        }
    };
}
