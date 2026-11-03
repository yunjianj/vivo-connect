// analysis/pretty/main.js:71067; webpack module 782
function(e, t) {
    var n = /^(?:0|[1-9]\d*)$/;
    function r(e, t, n) {
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
    var i = Object.prototype, o = i.hasOwnProperty, a = i.toString, s = i.propertyIsEnumerable, l = Math.max;
    function c(e, t) {
        var n = f(e) || function(e) {
            return function(e) {
                return function(e) {
                    return !!e && "object" == typeof e;
                }(e) && _(e);
            }(e) && o.call(e, "callee") && (!s.call(e, "callee") || "[object Arguments]" == a.call(e));
        }(e) ? function(e, t) {
            for (var n = -1, r = Array(e); ++n < e; ) r[n] = t(n);
            return r;
        }(e.length, String) : [], r = n.length, i = !!r;
        for (var l in e) !t && !o.call(e, l) || i && ("length" == l || h(l, r)) || n.push(l);
        return n;
    }
    function u(e, t, n) {
        var r = e[t];
        o.call(e, t) && p(r, n) && (void 0 !== n || t in e) || (e[t] = n);
    }
    function d(e) {
        if (!m(e)) return function(e) {
            var t = [];
            if (null != e) for (var n in Object(e)) t.push(n);
            return t;
        }(e);
        var t, n, r, a = (n = (t = e) && t.constructor, r = "function" == typeof n && n.prototype || i, 
        t === r), s = [];
        for (var l in e) ("constructor" != l || !a && o.call(e, l)) && s.push(l);
        return s;
    }
    function h(e, t) {
        return !!(t = null == t ? 9007199254740991 : t) && ("number" == typeof e || n.test(e)) && e > -1 && e % 1 == 0 && e < t;
    }
    function p(e, t) {
        return e === t || e != e && t != t;
    }
    var f = Array.isArray;
    function _(e) {
        return null != e && function(e) {
            return "number" == typeof e && e > -1 && e % 1 == 0 && e <= 9007199254740991;
        }(e.length) && !function(e) {
            var t = m(e) ? a.call(e) : "";
            return "[object Function]" == t || "[object GeneratorFunction]" == t;
        }(e);
    }
    function m(e) {
        var t = typeof e;
        return !!e && ("object" == t || "function" == t);
    }
    var g, v, y, E = (g = function(e, t) {
        !function(e, t, n, r) {
            n || (n = {});
            for (var i = -1, o = t.length; ++i < o; ) {
                var a = t[i], s = r ? r(n[a], e[a], a, n, e) : void 0;
                u(n, a, void 0 === s ? e[a] : s);
            }
        }(t, function(e) {
            return _(e) ? c(e, !0) : d(e);
        }(t), e);
    }, v = function(e, t) {
        var n = -1, r = t.length, i = r > 1 ? t[r - 1] : void 0, o = r > 2 ? t[2] : void 0;
        for (i = g.length > 3 && "function" == typeof i ? (r--, i) : void 0, o && function(e, t, n) {
            if (!m(n)) return !1;
            var r = typeof t;
            return !!("number" == r ? _(n) && h(t, n.length) : "string" == r && t in n) && p(n[t], e);
        }(t[0], t[1], o) && (i = r < 3 ? void 0 : i, r = 1), e = Object(e); ++n < r; ) {
            var a = t[n];
            a && g(e, a, n, i);
        }
        return e;
    }, y = l(void 0 === y ? v.length - 1 : y, 0), function() {
        for (var e = arguments, t = -1, n = l(e.length - y, 0), i = Array(n); ++t < n; ) i[t] = e[y + t];
        t = -1;
        for (var o = Array(y + 1); ++t < y; ) o[t] = e[t];
        return o[y] = i, r(v, this, o);
    });
    e.exports = E;
}
