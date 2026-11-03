// analysis/pretty/main.js:80922; webpack module 976
function(e, t, n) {
    "use strict";
    const r = n(45), i = n(62);
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
