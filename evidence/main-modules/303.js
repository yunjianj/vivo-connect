// analysis/pretty/main.js:33784; webpack module 303
function(e, t, n) {
    var r = n(1259), i = n(1260);
    e.exports = function(e, t, n) {
        var o = t && n || 0;
        "string" == typeof e && (t = "binary" === e ? new Array(16) : null, e = null);
        var a = (e = e || {}).random || (e.rng || r)();
        if (a[6] = 15 & a[6] | 64, a[8] = 63 & a[8] | 128, t) for (var s = 0; s < 16; ++s) t[o + s] = a[s];
        return t || i(a);
    };
}
