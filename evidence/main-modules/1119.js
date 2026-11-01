// analysis/pretty/main.js:90343; webpack module 1119
function(e, t, n) {
    "use strict";
    var r = Object.create;
    if (r) {
        var i = r(null), o = r(null);
        i[" size"] = o[" size"] = 0;
    }
    e.exports = function(e) {
        var t, r, a = n(24), s = a.canEvaluate, l = a.isIdentifier, c = function(e) {
            return new Function("ensureMethod", "                                    \n        return function(obj) {                                               \n            'use strict'                                                     \n            var len = this.length;                                           \n            ensureMethod(obj, 'methodName');                                 \n            switch(len) {                                                    \n                case 1: return obj.methodName(this[0]);                      \n                case 2: return obj.methodName(this[0], this[1]);             \n                case 3: return obj.methodName(this[0], this[1], this[2]);    \n                case 0: return obj.methodName();                             \n                default:                                                     \n                    return obj.methodName.apply(obj, this);                  \n            }                                                                \n        };                                                                   \n        ".replace(/methodName/g, e))(h);
        }, u = function(e) {
            return new Function("obj", "                                             \n        'use strict';                                                        \n        return obj.propertyName;                                             \n        ".replace("propertyName", e));
        }, d = function(e, t, n) {
            var r = n[e];
            if ("function" != typeof r) {
                if (!l(e)) return null;
                if (r = t(e), n[e] = r, n[" size"]++, n[" size"] > 512) {
                    for (var i = Object.keys(n), o = 0; o < 256; ++o) delete n[i[o]];
                    n[" size"] = i.length - 256;
                }
            }
            return r;
        };
        function h(t, n) {
            var r;
            if (null != t && (r = t[n]), "function" != typeof r) {
                var i = "Object " + a.classString(t) + " has no method '" + a.toString(n) + "'";
                throw new e.TypeError(i);
            }
            return r;
        }
        function p(e) {
            return h(e, this.pop()).apply(e, this);
        }
        function f(e) {
            return e[this];
        }
        function _(e) {
            var t = +this;
            return t < 0 && (t = Math.max(0, t + e.length)), e[t];
        }
        t = function(e) {
            return d(e, c, i);
        }, r = function(e) {
            return d(e, u, o);
        }, e.prototype.call = function(e) {
            for (var n = arguments.length, r = new Array(Math.max(n - 1, 0)), i = 1; i < n; ++i) r[i - 1] = arguments[i];
            if (s) {
                var o = t(e);
                if (null !== o) return this._then(o, void 0, void 0, r, void 0);
            }
            return r.push(e), this._then(p, void 0, void 0, r, void 0);
        }, e.prototype.get = function(e) {
            var t;
            if ("number" == typeof e) t = _; else if (s) {
                var n = r(e);
                t = null !== n ? n : f;
            } else t = f;
            return this._then(t, void 0, void 0, e, void 0);
        };
    };
}
