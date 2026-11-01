// analysis/pretty/main.js:122506; webpack module 1599
function(e, t, n) {
    var r = n(752), i = n(1601), o = {};
    Object.keys(r).forEach(function(e) {
        o[e] = {}, Object.defineProperty(o[e], "channels", {
            value: r[e].channels
        }), Object.defineProperty(o[e], "labels", {
            value: r[e].labels
        });
        var t = i(e);
        Object.keys(t).forEach(function(n) {
            var r = t[n];
            o[e][n] = function(e) {
                var t = function(t) {
                    if (null == t) return t;
                    arguments.length > 1 && (t = Array.prototype.slice.call(arguments));
                    var n = e(t);
                    if ("object" == typeof n) for (var r = n.length, i = 0; i < r; i++) n[i] = Math.round(n[i]);
                    return n;
                };
                return "conversion" in e && (t.conversion = e.conversion), t;
            }(r), o[e][n].raw = function(e) {
                var t = function(t) {
                    return null == t ? t : (arguments.length > 1 && (t = Array.prototype.slice.call(arguments)), 
                    e(t));
                };
                return "conversion" in e && (t.conversion = e.conversion), t;
            }(r);
        });
    }), e.exports = o;
}
