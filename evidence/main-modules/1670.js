// analysis/pretty/main.js:127414; webpack module 1670
function(e, t) {
    var n = "object" == typeof global && global && global.Object === Object && global, r = "object" == typeof self && self && self.Object === Object && self, i = n || r || Function("return this")();
    function o(e, t, n) {
        switch (n.length) {
          case 0:
            return e.call(t);

          case 1:
            return e.call(t, n[0]);

          case 2:
            return e.call(t, n[0], n[1]);

          case 3:
            return e.call(t, n[0], n[1], n[2]);
        }
        return e.apply(t, n);
    }
    function a(e, t) {
        for (var n = -1, r = t.length, i = e.length; ++n < r; ) e[i + n] = t[n];
        return e;
    }
    var s = Object.prototype, l = s.hasOwnProperty, c = s.toString, u = i.Symbol, d = s.propertyIsEnumerable, h = u ? u.isConcatSpreadable : void 0, p = Math.max;
    function f(e) {
        return m(e) || function(e) {
            return function(e) {
                return g(e) && function(e) {
                    return null != e && function(e) {
                        return "number" == typeof e && e > -1 && e % 1 == 0 && e <= 9007199254740991;
                    }(e.length) && !function(e) {
                        var t = function(e) {
                            var t = typeof e;
                            return !!e && ("object" == t || "function" == t);
                        }(e) ? c.call(e) : "";
                        return "[object Function]" == t || "[object GeneratorFunction]" == t;
                    }(e);
                }(e);
            }(e) && l.call(e, "callee") && (!d.call(e, "callee") || "[object Arguments]" == c.call(e));
        }(e) || !!(h && e && e[h]);
    }
    function _(e) {
        if ("string" == typeof e || function(e) {
            return "symbol" == typeof e || g(e) && "[object Symbol]" == c.call(e);
        }(e)) return e;
        var t = e + "";
        return "0" == t && 1 / e == -1 / 0 ? "-0" : t;
    }
    var m = Array.isArray;
    function g(e) {
        return !!e && "object" == typeof e;
    }
    var v, y, E = (v = function(e, t) {
        return null == e ? {} : function(e, t) {
            return function(e, t, n) {
                for (var r = -1, i = t.length, o = {}; ++r < i; ) {
                    var a = t[r], s = e[a];
                    n(s, a) && (o[a] = s);
                }
                return o;
            }(e = Object(e), t, function(t, n) {
                return n in e;
            });
        }(e, function(e, t) {
            for (var n = -1, r = e ? e.length : 0, i = Array(r); ++n < r; ) i[n] = t(e[n], n, e);
            return i;
        }(function e(t, n, r, i, o) {
            var s = -1, l = t.length;
            for (r || (r = f), o || (o = []); ++s < l; ) {
                var c = t[s];
                n > 0 && r(c) ? n > 1 ? e(c, n - 1, r, i, o) : a(o, c) : i || (o[o.length] = c);
            }
            return o;
        }(t, 1), _));
    }, y = p(void 0 === y ? v.length - 1 : y, 0), function() {
        for (var e = arguments, t = -1, n = p(e.length - y, 0), r = Array(n); ++t < n; ) r[t] = e[y + t];
        t = -1;
        for (var i = Array(y + 1); ++t < y; ) i[t] = e[t];
        return i[y] = r, o(v, this, i);
    });
    e.exports = E;
}
