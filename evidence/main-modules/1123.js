// analysis/pretty/main.js:90591; webpack module 1123
function(e, t, n) {
    "use strict";
    e.exports = function(e, t) {
        var r = {}, i = n(24), o = n(608), a = i.withAppended, s = i.maybeWrapAsError, l = i.canEvaluate, c = n(88).TypeError, u = {
            __isPromisified__: !0
        }, d = new RegExp("^(?:" + [ "arity", "length", "name", "arguments", "caller", "callee", "prototype", "__isPromisified__" ].join("|") + ")$"), h = function(e) {
            return i.isIdentifier(e) && "_" !== e.charAt(0) && "constructor" !== e;
        };
        function p(e) {
            return !d.test(e);
        }
        function f(e) {
            try {
                return !0 === e.__isPromisified__;
            } catch (e) {
                return !1;
            }
        }
        function _(e, t, n) {
            var r = i.getDataPropertyOrDefault(e, t + n, u);
            return !!r && f(r);
        }
        function m(e, t, n, r) {
            for (var o = i.inheritedDataKeys(e), a = [], s = 0; s < o.length; ++s) {
                var l = o[s], u = e[l], d = r === h || h(l);
                "function" != typeof u || f(u) || _(e, l, t) || !r(l, u, e, d) || a.push(l, u);
            }
            return function(e, t, n) {
                for (var r = 0; r < e.length; r += 2) {
                    var i = e[r];
                    if (n.test(i)) for (var o = i.replace(n, ""), a = 0; a < e.length; a += 2) if (e[a] === o) throw new c("Cannot promisify an API that has normal methods with '%s'-suffix\n\n    See http://goo.gl/MqrFmX\n".replace("%s", t));
                }
            }(a, t, n), a;
        }
        var g = l ? function(n, l, c, u, d, h) {
            var p = Math.max(0, function(e) {
                return "number" == typeof e.length ? Math.max(Math.min(e.length, 1024), 0) : 0;
            }(u) - 1), f = function(e) {
                for (var t = [ e ], n = Math.max(0, e - 1 - 3), r = e - 1; r >= n; --r) t.push(r);
                for (r = e + 1; r <= 3; ++r) t.push(r);
                return t;
            }(p), _ = "string" == typeof n || l === r;
            function m(e) {
                var t, n = (t = e, i.filledRange(t, "_arg", "")).join(", "), r = e > 0 ? ", " : "";
                return (_ ? "ret = callback.call(this, {{args}}, nodeback); break;\n" : void 0 === l ? "ret = callback({{args}}, nodeback); break;\n" : "ret = callback.call(receiver, {{args}}, nodeback); break;\n").replace("{{args}}", n).replace(", ", r);
            }
            var g = "string" == typeof n ? "this != null ? this['" + n + "'] : fn" : "fn", v = "'use strict';                                                \n        var ret = function (Parameters) {                                    \n            'use strict';                                                    \n            var len = arguments.length;                                      \n            var promise = new Promise(INTERNAL);                             \n            promise._captureStackTrace();                                    \n            var nodeback = nodebackForPromise(promise, " + h + ");   \n            var ret;                                                         \n            var callback = tryCatch([GetFunctionCode]);                      \n            switch(len) {                                                    \n                [CodeForSwitchCase]                                          \n            }                                                                \n            if (ret === errorObj) {                                          \n                promise._rejectCallback(maybeWrapAsError(ret.e), true, true);\n            }                                                                \n            if (!promise._isFateSealed()) promise._setAsyncGuaranteed();     \n            return promise;                                                  \n        };                                                                   \n        notEnumerableProp(ret, '__isPromisified__', true);                   \n        return ret;                                                          \n    ".replace("[CodeForSwitchCase]", function() {
                for (var e = "", t = 0; t < f.length; ++t) e += "case " + f[t] + ":" + m(f[t]);
                return e += "                                                             \n        default:                                                             \n            var args = new Array(len + 1);                                   \n            var i = 0;                                                       \n            for (var i = 0; i < len; ++i) {                                  \n               args[i] = arguments[i];                                       \n            }                                                                \n            args[i] = nodeback;                                              \n            [CodeForCall]                                                    \n            break;                                                           \n        ".replace("[CodeForCall]", _ ? "ret = callback.apply(this, args);\n" : "ret = callback.apply(receiver, args);\n");
            }()).replace("[GetFunctionCode]", g);
            return v = v.replace("Parameters", function(e) {
                return i.filledRange(Math.max(e, 3), "_arg", "");
            }(p)), new Function("Promise", "fn", "receiver", "withAppended", "maybeWrapAsError", "nodebackForPromise", "tryCatch", "errorObj", "notEnumerableProp", "INTERNAL", v)(e, u, l, a, s, o, i.tryCatch, i.errorObj, i.notEnumerableProp, t);
        } : function(n, l, c, u, d, h) {
            var p = function() {
                return this;
            }(), f = n;
            function _() {
                var i = l;
                l === r && (i = this);
                var c = new e(t);
                c._captureStackTrace();
                var u = "string" == typeof f && this !== p ? this[f] : n, d = o(c, h);
                try {
                    u.apply(i, a(arguments, d));
                } catch (e) {
                    c._rejectCallback(s(e), !0, !0);
                }
                return c._isFateSealed() || c._setAsyncGuaranteed(), c;
            }
            return "string" == typeof f && (n = u), i.notEnumerableProp(_, "__isPromisified__", !0), 
            _;
        };
        function v(e, t, n, o, a) {
            for (var s = new RegExp(t.replace(/([$])/, "\\$") + "$"), l = m(e, t, s, n), c = 0, u = l.length; c < u; c += 2) {
                var d = l[c], h = l[c + 1], p = d + t;
                if (o === g) e[p] = g(d, r, d, h, t, a); else {
                    var f = o(h, function() {
                        return g(d, r, d, h, t, a);
                    });
                    i.notEnumerableProp(f, "__isPromisified__", !0), e[p] = f;
                }
            }
            return i.toFastProperties(e), e;
        }
        e.promisify = function(e, t) {
            if ("function" != typeof e) throw new c("expecting a function but got " + i.classString(e));
            if (f(e)) return e;
            var n = function(e, t, n) {
                return g(e, t, void 0, e, null, n);
            }(e, void 0 === (t = Object(t)).context ? r : t.context, !!t.multiArgs);
            return i.copyDescriptors(e, n, p), n;
        }, e.promisifyAll = function(e, t) {
            if ("function" != typeof e && "object" != typeof e) throw new c("the target of promisifyAll must be an object or a function\n\n    See http://goo.gl/MqrFmX\n");
            var n = !!(t = Object(t)).multiArgs, r = t.suffix;
            "string" != typeof r && (r = "Async");
            var o = t.filter;
            "function" != typeof o && (o = h);
            var a = t.promisifier;
            if ("function" != typeof a && (a = g), !i.isIdentifier(r)) throw new RangeError("suffix must be a valid identifier\n\n    See http://goo.gl/MqrFmX\n");
            for (var s = i.inheritedDataKeys(e), l = 0; l < s.length; ++l) {
                var u = e[s[l]];
                "constructor" !== s[l] && i.isClass(u) && (v(u.prototype, r, o, a, n), v(u, r, o, a, n));
            }
            return v(e, r, o, a, n);
        };
    };
}
