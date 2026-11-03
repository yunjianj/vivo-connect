// analysis/pretty/main.js:32601; webpack module 279
function(e, t, n) {
    "use strict";
    function r(e) {
        return "/" === e.charAt(0);
    }
    function i(e) {
        var t = /^([a-zA-Z]:|[\\\/]{2}[^\\\/]+[\\\/]+[^\\\/]+)?([\\\/])?([\s\S]*?)$/.exec(e), n = t[1] || "", r = Boolean(n && ":" !== n.charAt(1));
        return Boolean(t[2] || r);
    }
    e.exports = "win32" === process.platform ? i : r, e.exports.posix = r, e.exports.win32 = i;
}
