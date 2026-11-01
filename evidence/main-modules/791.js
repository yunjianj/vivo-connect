// analysis/pretty/main.js:72460; webpack module 791
function(e, t, n) {
    "use strict";
    const r = [ "|", "<", ">", "?", ":" ], i = r.map(e => String.fromCharCode(61440 + e.charCodeAt(0))), o = new Map(r.map((e, t) => [ e, i[t] ])), a = new Map(i.map((e, t) => [ e, r[t] ]));
    e.exports = {
        encode: e => r.reduce((e, t) => e.split(t).join(o.get(t)), e),
        decode: e => i.reduce((e, t) => e.split(t).join(a.get(t)), e)
    };
}
