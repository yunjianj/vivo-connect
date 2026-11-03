// analysis/pretty/main.js:82339; webpack module 1023
function(e, t, n) {
    "use strict";
    const r = n(413), i = n(51), {MESSAGE: o} = n(27);
    e.exports = i((e, t) => (!1 !== t.level && (e.level = r.strip(e.level)), !1 !== t.message && (e.message = r.strip(String(e.message))), 
    !1 !== t.raw && e[o] && (e[o] = r.strip(String(e[o]))), e));
}
