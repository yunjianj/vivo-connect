// analysis/pretty/main.js:43979; webpack module 429
function(e, t, n) {
    "use strict";
    const r = e => null !== e && "object" == typeof e && "function" == typeof e.pipe;
    r.writable = e => r(e) && !1 !== e.writable && "function" == typeof e._write && "object" == typeof e._writableState, 
    r.readable = e => r(e) && !1 !== e.readable && "function" == typeof e._read && "object" == typeof e._readableState, 
    r.duplex = e => r.writable(e) && r.readable(e), r.transform = e => r.duplex(e) && "function" == typeof e._transform, 
    e.exports = r;
}
