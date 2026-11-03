// analysis/pretty/main.js:30157; webpack module 246
function(e, t) {
    var n = /^(?:0|[1-9]\d*)$/;
    function r(e, t) {
        for (var n = -1, r = e ? e.length : 0; ++n < r && !1 !== t(e[n], n, e); ) ;
        return e;
    }
    var i, o, a = Object.prototype, s = a.hasOwnProperty, l = a.toString, c = a.propertyIsEnumerable, u = (i = Object.keys, 
    o = Object, function(e) {
        return i(o(e));
    });
    function d(e, t) {
        var n = v(e) || function(e) {
            return function(e) {
                return function(e) {
                    return !!e && "object" == typeof e;
                }(e) && y(e);
            }(e) && s.call(e, "callee") && (!c.call(e, "callee") || "[object Arguments]" == l.call(e));
        }(e) ? function(e, t) {
            for (var n = -1, r = Array(e); ++n < e; ) r[n] = t(n);
            return r;
        }(e.length, String) : [], r = n.length, i = !!r;
        for (var o in e) !t && !s.call(e, o) || i && ("length" == o || g(o, r)) || n.push(o);
        return n;
    }
    var h, p, f = (h = function(e, t) {
        return e && _(e, t, E);
    }, function(e, t) {
        if (null == e) return e;
        if (!y(e)) return h(e, t);
        for (var n = e.length, r = p ? n : -1, i = Object(e); (p ? r-- : ++r < n) && !1 !== t(i[r], r, i); ) ;
        return e;
    }), _ = function(e) {
        return function(t, n, r) {
            for (var i = -1, o = Object(t), a = r(t), s = a.length; s--; ) {
                var l = a[e ? s : ++i];
                if (!1 === n(o[l], l, o)) break;
            }
            return t;
        };
    }();
    function m(e) {
        if (n = (t = e) && t.constructor, r = "function" == typeof n && n.prototype || a, 
        t !== r) return u(e);
        var t, n, r, i = [];
        for (var o in Object(e)) s.call(e, o) && "constructor" != o && i.push(o);
        return i;
    }
    function g(e, t) {
        return !!(t = null == t ? 9007199254740991 : t) && ("number" == typeof e || n.test(e)) && e > -1 && e % 1 == 0 && e < t;
    }
    var v = Array.isArray;
    function y(e) {
        return null != e && function(e) {
            return "number" == typeof e && e > -1 && e % 1 == 0 && e <= 9007199254740991;
        }(e.length) && !function(e) {
            var t = function(e) {
                var t = typeof e;
                return !!e && ("object" == t || "function" == t);
            }(e) ? l.call(e) : "";
            return "[object Function]" == t || "[object GeneratorFunction]" == t;
        }(e);
    }
    function E(e) {
        return y(e) ? d(e) : m(e);
    }
    function b(e) {
        return e;
    }
    e.exports = function(e, t) {
        return (v(e) ? r : f)(e, "function" == typeof t ? t : b);
    };
}
