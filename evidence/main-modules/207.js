// analysis/pretty/main.js:26662; webpack module 207
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
        var n = m(e) || function(e) {
            return function(e) {
                return function(e) {
                    return !!e && "object" == typeof e;
                }(e) && g(e);
            }(e) && o.call(e, "callee") && (!s.call(e, "callee") || "[object Arguments]" == a.call(e));
        }(e) ? function(e, t) {
            for (var n = -1, r = Array(e); ++n < e; ) r[n] = t(n);
            return r;
        }(e.length, String) : [], r = n.length, i = !!r;
        for (var l in e) !t && !o.call(e, l) || i && ("length" == l || f(l, r)) || n.push(l);
        return n;
    }
    function u(e, t, n, r) {
        return void 0 === e || _(e, i[n]) && !o.call(r, n) ? t : e;
    }
    function d(e, t, n) {
        var r = e[t];
        o.call(e, t) && _(r, n) && (void 0 !== n || t in e) || (e[t] = n);
    }
    function h(e) {
        if (!v(e)) return function(e) {
            var t = [];
            if (null != e) for (var n in Object(e)) t.push(n);
            return t;
        }(e);
        var t, n, r, a = (n = (t = e) && t.constructor, r = "function" == typeof n && n.prototype || i, 
        t === r), s = [];
        for (var l in e) ("constructor" != l || !a && o.call(e, l)) && s.push(l);
        return s;
    }
    function p(e, t) {
        return t = l(void 0 === t ? e.length - 1 : t, 0), function() {
            for (var n = arguments, i = -1, o = l(n.length - t, 0), a = Array(o); ++i < o; ) a[i] = n[t + i];
            i = -1;
            for (var s = Array(t + 1); ++i < t; ) s[i] = n[i];
            return s[t] = a, r(e, this, s);
        };
    }
    function f(e, t) {
        return !!(t = null == t ? 9007199254740991 : t) && ("number" == typeof e || n.test(e)) && e > -1 && e % 1 == 0 && e < t;
    }
    function _(e, t) {
        return e === t || e != e && t != t;
    }
    var m = Array.isArray;
    function g(e) {
        return null != e && function(e) {
            return "number" == typeof e && e > -1 && e % 1 == 0 && e <= 9007199254740991;
        }(e.length) && !function(e) {
            var t = v(e) ? a.call(e) : "";
            return "[object Function]" == t || "[object GeneratorFunction]" == t;
        }(e);
    }
    function v(e) {
        var t = typeof e;
        return !!e && ("object" == t || "function" == t);
    }
    var y, E = (y = function(e, t, n, r) {
        !function(e, t, n, r) {
            n || (n = {});
            for (var i = -1, o = t.length; ++i < o; ) {
                var a = t[i], s = r ? r(n[a], e[a], a, n, e) : void 0;
                d(n, a, void 0 === s ? e[a] : s);
            }
        }(t, function(e) {
            return g(e) ? c(e, !0) : h(e);
        }(t), e, r);
    }, p(function(e, t) {
        var n = -1, r = t.length, i = r > 1 ? t[r - 1] : void 0, o = r > 2 ? t[2] : void 0;
        for (i = y.length > 3 && "function" == typeof i ? (r--, i) : void 0, o && function(e, t, n) {
            if (!v(n)) return !1;
            var r = typeof t;
            return !!("number" == r ? g(n) && f(t, n.length) : "string" == r && t in n) && _(n[t], e);
        }(t[0], t[1], o) && (i = r < 3 ? void 0 : i, r = 1), e = Object(e); ++n < r; ) {
            var a = t[n];
            a && y(e, a, n, i);
        }
        return e;
    })), b = p(function(e) {
        return e.push(void 0, u), r(E, void 0, e);
    });
    e.exports = b;
}
