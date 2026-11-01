// analysis/pretty/main.js:123412; webpack module 1620
function(e, t, n) {
    var r = n(1621);
    e.exports = function(e) {
        if (e >= 55296 && e <= 57343 || e > 1114111) return "�";
        e in r && (e = r[e]);
        var t = "";
        e > 65535 && (e -= 65536, t += String.fromCharCode(e >>> 10 & 1023 | 55296), e = 56320 | 1023 & e);
        return t += String.fromCharCode(e);
    };
}
