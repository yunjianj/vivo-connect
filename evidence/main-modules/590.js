// analysis/pretty/main.js:56317; webpack module 590
function(e, t) {
    var n, r, i = Function.prototype, o = Object.prototype, a = i.toString, s = o.hasOwnProperty, l = a.call(Object), c = o.toString, u = (n = Object.getPrototypeOf, 
    r = Object, function(e) {
        return n(r(e));
    });
    e.exports = function(e) {
        if (!function(e) {
            return !!e && "object" == typeof e;
        }(e) || "[object Object]" != c.call(e) || function(e) {
            var t = !1;
            if (null != e && "function" != typeof e.toString) try {
                t = !!(e + "");
            } catch (e) {}
            return t;
        }(e)) return !1;
        var t = u(e);
        if (null === t) return !0;
        var n = s.call(t, "constructor") && t.constructor;
        return "function" == typeof n && n instanceof n && a.call(n) == l;
    };
}
