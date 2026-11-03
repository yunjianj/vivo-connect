// analysis/pretty/main.js:91509; webpack module 1159
function(e, t, n) {
    "use strict";
    var r = "Function.prototype.bind called on incompatible ", i = Object.prototype.toString, o = Math.max, a = function(e, t) {
        for (var n = [], r = 0; r < e.length; r += 1) n[r] = e[r];
        for (var i = 0; i < t.length; i += 1) n[i + e.length] = t[i];
        return n;
    }, s = function(e, t) {
        for (var n = [], r = t || 0, i = 0; r < e.length; r += 1, i += 1) n[i] = e[r];
        return n;
    }, l = function(e, t) {
        for (var n = "", r = 0; r < e.length; r += 1) n += e[r], r + 1 < e.length && (n += t);
        return n;
    };
    e.exports = function(e) {
        var t = this;
        if ("function" != typeof t || "[object Function]" !== i.apply(t)) throw new TypeError(r + t);
        for (var n, c = s(arguments, 1), u = function() {
            if (this instanceof n) {
                var r = t.apply(this, a(c, arguments));
                return Object(r) === r ? r : this;
            }
            return t.apply(e, a(c, arguments));
        }, d = o(0, t.length - c.length), h = [], p = 0; p < d; p++) h[p] = "$" + p;
        if (n = Function("binder", "return function (" + l(h, ",") + "){ return binder.apply(this,arguments); }")(u), 
        t.prototype) {
            var f = function() {};
            f.prototype = t.prototype, n.prototype = new f, f.prototype = null;
        }
        return n;
    };
}
