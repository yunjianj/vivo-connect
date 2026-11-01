// analysis/pretty/main.js:14118; webpack module 71
function(e, t, n) {
    var r = n(1304), i = n(661), o = n(1305), a = 0, s = Math.pow(36, 4);
    function l() {
        return i((o() * s << 0).toString(36), 4);
    }
    function c() {
        return a = a < s ? a : 0, ++a - 1;
    }
    function u() {
        return "c" + (new Date).getTime().toString(36) + i(c().toString(36), 4) + r() + (l() + l());
    }
    u.slug = function() {
        var e = (new Date).getTime().toString(36), t = c().toString(36).slice(-4), n = r().slice(0, 1) + r().slice(-1), i = l().slice(-2);
        return e.slice(-2) + t + n + i;
    }, u.isCuid = function(e) {
        return "string" == typeof e && !!e.startsWith("c");
    }, u.isSlug = function(e) {
        if ("string" != typeof e) return !1;
        var t = e.length;
        return t >= 7 && t <= 10;
    }, u.fingerprint = r, e.exports = u;
}
