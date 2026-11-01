// analysis/pretty/main.js:14775; webpack module 79
function(e, t) {
    (function() {
        var t, n, r, i, o, a, s, l = [].slice, c = {}.hasOwnProperty;
        t = function() {
            var e, t, n, r, i, a;
            if (a = arguments[0], i = 2 <= arguments.length ? l.call(arguments, 1) : [], o(Object.assign)) Object.assign.apply(null, arguments); else for (e = 0, 
            n = i.length; e < n; e++) if (null != (r = i[e])) for (t in r) c.call(r, t) && (a[t] = r[t]);
            return a;
        }, o = function(e) {
            return !!e && "[object Function]" === Object.prototype.toString.call(e);
        }, a = function(e) {
            var t;
            return !!e && ("function" == (t = typeof e) || "object" === t);
        }, r = function(e) {
            return o(Array.isArray) ? Array.isArray(e) : "[object Array]" === Object.prototype.toString.call(e);
        }, i = function(e) {
            var t;
            if (r(e)) return !e.length;
            for (t in e) if (c.call(e, t)) return !1;
            return !0;
        }, s = function(e) {
            var t, n;
            return a(e) && (n = Object.getPrototypeOf(e)) && (t = n.constructor) && "function" == typeof t && t instanceof t && Function.prototype.toString.call(t) === Function.prototype.toString.call(Object);
        }, n = function(e) {
            return o(e.valueOf) ? e.valueOf() : e;
        }, e.exports.assign = t, e.exports.isFunction = o, e.exports.isObject = a, e.exports.isArray = r, 
        e.exports.isEmpty = i, e.exports.isPlainObject = s, e.exports.getValue = n;
    }).call(this);
}
