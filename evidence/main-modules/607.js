// analysis/pretty/main.js:57095; webpack module 607
function(e, t, n) {
    "use strict";
    e.exports = function(e) {
        var t = n(24), r = n(102).keys, i = t.tryCatch, o = t.errorObj;
        return function(n, a, s) {
            return function(l) {
                var c = s._boundValue();
                e: for (var u = 0; u < n.length; ++u) {
                    var d = n[u];
                    if (d === Error || null != d && d.prototype instanceof Error) {
                        if (l instanceof d) return i(a).call(c, l);
                    } else if ("function" == typeof d) {
                        var h = i(d).call(c, l);
                        if (h === o) return h;
                        if (h) return i(a).call(c, l);
                    } else if (t.isObject(l)) {
                        for (var p = r(d), f = 0; f < p.length; ++f) {
                            var _ = p[f];
                            if (d[_] != l[_]) continue e;
                        }
                        return i(a).call(c, l);
                    }
                }
                return e;
            };
        };
    };
}
