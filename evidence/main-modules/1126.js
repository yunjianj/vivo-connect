// analysis/pretty/main.js:90781; webpack module 1126
function(e, t, n) {
    "use strict";
    e.exports = function(e, t, r, i, o, a) {
        var s = n(24), l = s.tryCatch;
        function c(t, n, r, i) {
            this.constructor$(t);
            var a = e._getContext();
            this._fn = s.contextBind(a, n), void 0 !== r && (r = e.resolve(r))._attachCancellationCallback(this), 
            this._initialValue = r, this._currentCancellable = null, this._eachValues = i === o ? Array(this._length) : 0 === i ? null : void 0, 
            this._promise._captureStackTrace(), this._init$(void 0, -5);
        }
        function u(e, t) {
            this.isFulfilled() ? t._resolve(e) : t._reject(e);
        }
        function d(e, t, n, i) {
            return "function" != typeof t ? r("expecting a function but got " + s.classString(t)) : new c(e, t, n, i).promise();
        }
        function h(t) {
            this.accum = t, this.array._gotAccum(t);
            var n = i(this.value, this.array._promise);
            return n instanceof e ? (this.array._currentCancellable = n, n._then(p, void 0, void 0, this, void 0)) : p.call(this, n);
        }
        function p(t) {
            var n, r = this.array, i = r._promise, o = l(r._fn);
            i._pushContext(), (n = void 0 !== r._eachValues ? o.call(i._boundValue(), t, this.index, this.length) : o.call(i._boundValue(), this.accum, t, this.index, this.length)) instanceof e && (r._currentCancellable = n);
            var s = i._popContext();
            return a.checkForgottenReturns(n, s, void 0 !== r._eachValues ? "Promise.each" : "Promise.reduce", i), 
            n;
        }
        s.inherits(c, t), c.prototype._gotAccum = function(e) {
            void 0 !== this._eachValues && null !== this._eachValues && e !== o && this._eachValues.push(e);
        }, c.prototype._eachComplete = function(e) {
            return null !== this._eachValues && this._eachValues.push(e), this._eachValues;
        }, c.prototype._init = function() {}, c.prototype._resolveEmptyArray = function() {
            this._resolve(void 0 !== this._eachValues ? this._eachValues : this._initialValue);
        }, c.prototype.shouldCopyValues = function() {
            return !1;
        }, c.prototype._resolve = function(e) {
            this._promise._resolveCallback(e), this._values = null;
        }, c.prototype._resultCancelled = function(t) {
            if (t === this._initialValue) return this._cancel();
            this._isResolved() || (this._resultCancelled$(), this._currentCancellable instanceof e && this._currentCancellable.cancel(), 
            this._initialValue instanceof e && this._initialValue.cancel());
        }, c.prototype._iterate = function(t) {
            var n, r;
            this._values = t;
            var i = t.length;
            void 0 !== this._initialValue ? (n = this._initialValue, r = 0) : (n = e.resolve(t[0]), 
            r = 1), this._currentCancellable = n;
            for (var o = r; o < i; ++o) {
                var a = t[o];
                a instanceof e && a.suppressUnhandledRejections();
            }
            if (!n.isRejected()) for (;r < i; ++r) {
                var s = {
                    accum: null,
                    value: t[r],
                    index: r,
                    length: i,
                    array: this
                };
                n = n._then(h, void 0, void 0, s, void 0), 0 == (127 & r) && n._setNoAsyncGuarantee();
            }
            void 0 !== this._eachValues && (n = n._then(this._eachComplete, void 0, void 0, this, void 0)), 
            n._then(u, u, void 0, n, this);
        }, e.prototype.reduce = function(e, t) {
            return d(this, e, t, null);
        }, e.reduce = function(e, t, n, r) {
            return d(e, t, n, r);
        };
    };
}
