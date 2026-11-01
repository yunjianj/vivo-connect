// analysis/pretty/main.js:90295; webpack module 1118
function(e, t, n) {
    "use strict";
    e.exports = function(e, t, r, i, o) {
        var a, s = n(24), l = s.canEvaluate, c = s.tryCatch, u = s.errorObj;
        if (l) {
            for (var d = function(e) {
                return new Function("value", "holder", "                             \n            'use strict';                                                    \n            holder.pIndex = value;                                           \n            holder.checkFulfillment(this);                                   \n            ".replace(/Index/g, e));
            }, h = function(e) {
                return new Function("promise", "holder", "                           \n            'use strict';                                                    \n            holder.pIndex = promise;                                         \n            ".replace(/Index/g, e));
            }, p = function(t) {
                for (var n = new Array(t), r = 0; r < n.length; ++r) n[r] = "this.p" + (r + 1);
                var i = n.join(" = ") + " = null;", a = "var promise;\n" + n.map(function(e) {
                    return "                                                         \n                promise = " + e + ";                                      \n                if (promise instanceof Promise) {                            \n                    promise.cancel();                                        \n                }                                                            \n            ";
                }).join("\n"), s = n.join(", "), l = "Holder$" + t, d = "return function(tryCatch, errorObj, Promise, async) {    \n            'use strict';                                                    \n            function [TheName](fn) {                                         \n                [TheProperties]                                              \n                this.fn = fn;                                                \n                this.asyncNeeded = true;                                     \n                this.now = 0;                                                \n            }                                                                \n                                                                             \n            [TheName].prototype._callFunction = function(promise) {          \n                promise._pushContext();                                      \n                var ret = tryCatch(this.fn)([ThePassedArguments]);           \n                promise._popContext();                                       \n                if (ret === errorObj) {                                      \n                    promise._rejectCallback(ret.e, false);                   \n                } else {                                                     \n                    promise._resolveCallback(ret);                           \n                }                                                            \n            };                                                               \n                                                                             \n            [TheName].prototype.checkFulfillment = function(promise) {       \n                var now = ++this.now;                                        \n                if (now === [TheTotal]) {                                    \n                    if (this.asyncNeeded) {                                  \n                        async.invoke(this._callFunction, this, promise);     \n                    } else {                                                 \n                        this._callFunction(promise);                         \n                    }                                                        \n                                                                             \n                }                                                            \n            };                                                               \n                                                                             \n            [TheName].prototype._resultCancelled = function() {              \n                [CancellationCode]                                           \n            };                                                               \n                                                                             \n            return [TheName];                                                \n        }(tryCatch, errorObj, Promise, async);                               \n        ";
                return d = d.replace(/\[TheName\]/g, l).replace(/\[TheTotal\]/g, t).replace(/\[ThePassedArguments\]/g, s).replace(/\[TheProperties\]/g, i).replace(/\[CancellationCode\]/g, a), 
                new Function("tryCatch", "errorObj", "Promise", "async", d)(c, u, e, o);
            }, f = [], _ = [], m = [], g = 0; g < 8; ++g) f.push(p(g + 1)), _.push(d(g + 1)), 
            m.push(h(g + 1));
            a = function(e) {
                this._reject(e);
            };
        }
        e.join = function() {
            var n, o = arguments.length - 1;
            if (o > 0 && "function" == typeof arguments[o] && (n = arguments[o], o <= 8 && l)) {
                (w = new e(i))._captureStackTrace();
                for (var c = f[o - 1], u = new c(n), d = _, h = 0; h < o; ++h) {
                    var p = r(arguments[h], w);
                    if (p instanceof e) {
                        var g = (p = p._target())._bitField;
                        0 == (50397184 & g) ? (p._then(d[h], a, void 0, w, u), m[h](p, u), u.asyncNeeded = !1) : 0 != (33554432 & g) ? d[h].call(w, p._value(), u) : 0 != (16777216 & g) ? w._reject(p._reason()) : w._cancel();
                    } else d[h].call(w, p, u);
                }
                if (!w._isFateSealed()) {
                    if (u.asyncNeeded) {
                        var v = e._getContext();
                        u.fn = s.contextBind(v, u.fn);
                    }
                    w._setAsyncGuaranteed(), w._setOnCancel(u);
                }
                return w;
            }
            for (var y = arguments.length, E = new Array(y), b = 0; b < y; ++b) E[b] = arguments[b];
            n && E.pop();
            var w = new t(E).promise();
            return void 0 !== n ? w.spread(n) : w;
        };
    };
}
