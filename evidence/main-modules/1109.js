// analysis/pretty/main.js:89370; webpack module 1109
function(e, t, n) {
    "use strict";
    e.exports = function(e, t, r, i, o) {
        var a = n(24);
        a.isArray;
        function s(n) {
            var r = this._promise = new e(t);
            n instanceof e && (r._propagateFrom(n, 3), n.suppressUnhandledRejections()), r._setOnCancel(this), 
            this._values = n, this._length = 0, this._totalResolved = 0, this._init(void 0, -2);
        }
        return a.inherits(s, o), s.prototype.length = function() {
            return this._length;
        }, s.prototype.promise = function() {
            return this._promise;
        }, s.prototype._init = function t(n, o) {
            var s = r(this._values, this._promise);
            if (s instanceof e) {
                var l = (s = s._target())._bitField;
                if (this._values = s, 0 == (50397184 & l)) return this._promise._setAsyncGuaranteed(), 
                s._then(t, this._reject, void 0, this, o);
                if (0 == (33554432 & l)) return 0 != (16777216 & l) ? this._reject(s._reason()) : this._cancel();
                s = s._value();
            }
            if (null !== (s = a.asArray(s))) 0 !== s.length ? this._iterate(s) : -5 === o ? this._resolveEmptyArray() : this._resolve(function(e) {
                switch (e) {
                  case -2:
                    return [];

                  case -3:
                    return {};

                  case -6:
                    return new Map;
                }
            }(o)); else {
                var c = i("expecting an array or an iterable object but got " + a.classString(s)).reason();
                this._promise._rejectCallback(c, !1);
            }
        }, s.prototype._iterate = function(t) {
            var n = this.getActualLength(t.length);
            this._length = n, this._values = this.shouldCopyValues() ? new Array(n) : this._values;
            for (var i = this._promise, o = !1, a = null, s = 0; s < n; ++s) {
                var l = r(t[s], i);
                a = l instanceof e ? (l = l._target())._bitField : null, o ? null !== a && l.suppressUnhandledRejections() : null !== a ? 0 == (50397184 & a) ? (l._proxy(this, s), 
                this._values[s] = l) : o = 0 != (33554432 & a) ? this._promiseFulfilled(l._value(), s) : 0 != (16777216 & a) ? this._promiseRejected(l._reason(), s) : this._promiseCancelled(s) : o = this._promiseFulfilled(l, s);
            }
            o || i._setAsyncGuaranteed();
        }, s.prototype._isResolved = function() {
            return null === this._values;
        }, s.prototype._resolve = function(e) {
            this._values = null, this._promise._fulfill(e);
        }, s.prototype._cancel = function() {
            !this._isResolved() && this._promise._isCancellable() && (this._values = null, this._promise._cancel());
        }, s.prototype._reject = function(e) {
            this._values = null, this._promise._rejectCallback(e, !1);
        }, s.prototype._promiseFulfilled = function(e, t) {
            return this._values[t] = e, ++this._totalResolved >= this._length && (this._resolve(this._values), 
            !0);
        }, s.prototype._promiseCancelled = function() {
            return this._cancel(), !0;
        }, s.prototype._promiseRejected = function(e) {
            return this._totalResolved++, this._reject(e), !0;
        }, s.prototype._resultCancelled = function() {
            if (!this._isResolved()) {
                var t = this._values;
                if (this._cancel(), t instanceof e) t.cancel(); else for (var n = 0; n < t.length; ++n) t[n] instanceof e && t[n].cancel();
            }
        }, s.prototype.shouldCopyValues = function() {
            return !0;
        }, s.prototype.getActualLength = function(e) {
            return e;
        }, s;
    };
}
