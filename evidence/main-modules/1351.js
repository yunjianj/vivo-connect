// analysis/pretty/main.js:101132; webpack module 1351
function(e, t, n) {
    "use strict";
    const r = n(49), i = n(68);
    e.exports = (e, t, n) => {
        let o = null, a = null, s = null;
        try {
            s = new i(t, n);
        } catch (e) {
            return null;
        }
        return e.forEach(e => {
            s.test(e) && (o && -1 !== a.compare(e) || (o = e, a = new r(o, n)));
        }), o;
    };
}
