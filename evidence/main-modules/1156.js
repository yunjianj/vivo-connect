// analysis/pretty/main.js:91479; webpack module 1156
function(e, t, n) {
    "use strict";
    var r = n(620), i = n(621), o = n(1157);
    e.exports = r ? function(e) {
        return r(e);
    } : i ? function(e) {
        if (!e || "object" != typeof e && "function" != typeof e) throw new TypeError("getProto: not an object");
        return i(e);
    } : o ? function(e) {
        return o(e);
    } : null;
}
