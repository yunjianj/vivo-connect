// analysis/pretty/main.js:31902; webpack module 276
function(e, t) {
    var n = "object" == typeof global && global && global.Object === Object && global, r = "object" == typeof self && self && self.Object === Object && self, i = n || r || Function("return this")();
    function o(e, t) {
        for (var n = -1, r = t.length, i = e.length; ++n < r; ) e[i + n] = t[n];
        return e;
    }
    var a = Object.prototype, s = a.hasOwnProperty, l = a.toString, c = i.Symbol, u = a.propertyIsEnumerable, d = c ? c.isConcatSpreadable : void 0;
    function h(e) {
        return p(e) || function(e) {
            return function(e) {
                return function(e) {
                    return !!e && "object" == typeof e;
                }(e) && function(e) {
                    return null != e && function(e) {
                        return "number" == typeof e && e > -1 && e % 1 == 0 && e <= 9007199254740991;
                    }(e.length) && !function(e) {
                        var t = function(e) {
                            var t = typeof e;
                            return !!e && ("object" == t || "function" == t);
                        }(e) ? l.call(e) : "";
                        return "[object Function]" == t || "[object GeneratorFunction]" == t;
                    }(e);
                }(e);
            }(e) && s.call(e, "callee") && (!u.call(e, "callee") || "[object Arguments]" == l.call(e));
        }(e) || !!(d && e && e[d]);
    }
    var p = Array.isArray;
    e.exports = function(e) {
        return (e ? e.length : 0) ? function e(t, n, r, i, a) {
            var s = -1, l = t.length;
            for (r || (r = h), a || (a = []); ++s < l; ) {
                var c = t[s];
                n > 0 && r(c) ? n > 1 ? e(c, n - 1, r, i, a) : o(a, c) : i || (a[a.length] = c);
            }
            return a;
        }(e, 1) : [];
    };
}
