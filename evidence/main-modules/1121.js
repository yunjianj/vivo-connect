// analysis/pretty/main.js:90494; webpack module 1121
function(e, t, n) {
    "use strict";
    e.exports = function(e, t, r, i, o, a) {
        var s = n(24), l = s.tryCatch, c = s.errorObj, u = e._async;
        function d(t, n, r, i) {
            this.constructor$(t), this._promise._captureStackTrace();
            var a = e._getContext();
            if (this._callback = s.contextBind(a, n), this._preservedValues = i === o ? new Array(this.length()) : null, 
            this._limit = r, this._inFlight = 0, this._queue = [], u.invoke(this._asyncInit, this, void 0), 
            s.isArray(t)) for (var l = 0; l < t.length; ++l) {
                var c = t[l];
                c instanceof e && c.suppressUnhandledRejections();
            }
        }
        function h(t, n, i, o) {
            if ("function" != typeof n) return r("expecting a function but got " + s.classString(n));
            var a = 0;
            if (void 0 !== i) {
                if ("object" != typeof i || null === i) return e.reject(new TypeError("options argument must be an object but it is " + s.classString(i)));
                if ("number" != typeof i.concurrency) return e.reject(new TypeError("'concurrency' must be a number but it is " + s.classString(i.concurrency)));
                a = i.concurrency;
            }
            return new d(t, n, a = "number" == typeof a && isFinite(a) && a >= 1 ? a : 0, o).promise();
        }
        s.inherits(d, t), d.prototype._asyncInit = function() {
            this._init$(void 0, -2);
        }, d.prototype._init = function() {}, d.prototype._promiseFulfilled = function(t, n) {
            var r = this._values, o = this.length(), s = this._preservedValues, u = this._limit;
            if (n < 0) {
                if (r[n = -1 * n - 1] = t, u >= 1 && (this._inFlight--, this._drainQueue(), this._isResolved())) return !0;
            } else {
                if (u >= 1 && this._inFlight >= u) return r[n] = t, this._queue.push(n), !1;
                null !== s && (s[n] = t);
                var d = this._promise, h = this._callback, p = d._boundValue();
                d._pushContext();
                var f = l(h).call(p, t, n, o), _ = d._popContext();
                if (a.checkForgottenReturns(f, _, null !== s ? "Promise.filter" : "Promise.map", d), 
                f === c) return this._reject(f.e), !0;
                var m = i(f, this._promise);
                if (m instanceof e) {
                    var g = (m = m._target())._bitField;
                    if (0 == (50397184 & g)) return u >= 1 && this._inFlight++, r[n] = m, m._proxy(this, -1 * (n + 1)), 
                    !1;
                    if (0 == (33554432 & g)) return 0 != (16777216 & g) ? (this._reject(m._reason()), 
                    !0) : (this._cancel(), !0);
                    f = m._value();
                }
                r[n] = f;
            }
            return ++this._totalResolved >= o && (null !== s ? this._filter(r, s) : this._resolve(r), 
            !0);
        }, d.prototype._drainQueue = function() {
            for (var e = this._queue, t = this._limit, n = this._values; e.length > 0 && this._inFlight < t; ) {
                if (this._isResolved()) return;
                var r = e.pop();
                this._promiseFulfilled(n[r], r);
            }
        }, d.prototype._filter = function(e, t) {
            for (var n = t.length, r = new Array(n), i = 0, o = 0; o < n; ++o) e[o] && (r[i++] = t[o]);
            r.length = i, this._resolve(r);
        }, d.prototype.preservedValues = function() {
            return this._preservedValues;
        }, e.prototype.map = function(e, t) {
            return h(this, e, t, null);
        }, e.map = function(e, t, n, r) {
            return h(e, t, n, r);
        };
    };
}
