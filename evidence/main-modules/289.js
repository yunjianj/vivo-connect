// analysis/pretty/main.js:32718; webpack module 289
function(e, t, n) {
    "use strict";
    var r = Object.prototype.hasOwnProperty, i = Object.prototype.toString, o = Object.defineProperty, a = Object.getOwnPropertyDescriptor, s = function(e) {
        return "function" == typeof Array.isArray ? Array.isArray(e) : "[object Array]" === i.call(e);
    }, l = function(e) {
        if (!e || "[object Object]" !== i.call(e)) return !1;
        var t, n = r.call(e, "constructor"), o = e.constructor && e.constructor.prototype && r.call(e.constructor.prototype, "isPrototypeOf");
        if (e.constructor && !n && !o) return !1;
        for (t in e) ;
        return void 0 === t || r.call(e, t);
    }, c = function(e, t) {
        o && "__proto__" === t.name ? o(e, t.name, {
            enumerable: !0,
            configurable: !0,
            value: t.newValue,
            writable: !0
        }) : e[t.name] = t.newValue;
    }, u = function(e, t) {
        if ("__proto__" === t) {
            if (!r.call(e, t)) return;
            if (a) return a(e, t).value;
        }
        return e[t];
    };
    e.exports = function e() {
        var t, n, r, i, o, a, d = arguments[0], h = 1, p = arguments.length, f = !1;
        for ("boolean" == typeof d && (f = d, d = arguments[1] || {}, h = 2), (null == d || "object" != typeof d && "function" != typeof d) && (d = {}); h < p; ++h) if (null != (t = arguments[h])) for (n in t) r = u(d, n), 
        d !== (i = u(t, n)) && (f && i && (l(i) || (o = s(i))) ? (o ? (o = !1, a = r && s(r) ? r : []) : a = r && l(r) ? r : {}, 
        c(d, {
            name: n,
            newValue: e(f, a, i)
        })) : void 0 !== i && c(d, {
            name: n,
            newValue: i
        }));
        return d;
    };
}
