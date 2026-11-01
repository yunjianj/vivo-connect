// analysis/pretty/main.js:43161; webpack module 415
function(e, t, n) {
    "use strict";
    const r = n(51), {MESSAGE: i} = n(27), o = n(202);
    function a(e, t) {
        return "bigint" == typeof t ? t.toString() : t;
    }
    e.exports = r((e, t) => {
        const n = o.configure(t);
        return e[i] = n(e, t.replacer || a, t.space), e;
    });
}
