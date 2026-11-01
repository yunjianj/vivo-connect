// analysis/pretty/main.js:90021; webpack module 1112
function(e, t, n) {
    "use strict";
    e.exports = function(e, t, r) {
        var i = n(24), o = e.CancellationError, a = i.errorObj, s = n(607)(r);
        function l(e, t, n) {
            this.promise = e, this.type = t, this.handler = n, this.called = !1, this.cancelPromise = null;
        }
        function c(e) {
            this.finallyHandler = e;
        }
        function u(e, t) {
            return null != e.cancelPromise && (arguments.length > 1 ? e.cancelPromise._reject(t) : e.cancelPromise._cancel(), 
            e.cancelPromise = null, !0);
        }
        function d() {
            return p.call(this, this.promise._target()._settledValue());
        }
        function h(e) {
            if (!u(this, e)) return a.e = e, a;
        }
        function p(n) {
            var i = this.promise, s = this.handler;
            if (!this.called) {
                this.called = !0;
                var l = this.isFinallyHandler() ? s.call(i._boundValue()) : s.call(i._boundValue(), n);
                if (l === r) return l;
                if (void 0 !== l) {
                    i._setReturnedNonUndefined();
                    var p = t(l, i);
                    if (p instanceof e) {
                        if (null != this.cancelPromise) {
                            if (p._isCancelled()) {
                                var f = new o("late cancellation observer");
                                return i._attachExtraTrace(f), a.e = f, a;
                            }
                            p.isPending() && p._attachCancellationCallback(new c(this));
                        }
                        return p._then(d, h, void 0, this, void 0);
                    }
                }
            }
            return i.isRejected() ? (u(this), a.e = n, a) : (u(this), n);
        }
        return l.prototype.isFinallyHandler = function() {
            return 0 === this.type;
        }, c.prototype._resultCancelled = function() {
            u(this.finallyHandler);
        }, e.prototype._passThrough = function(e, t, n, r) {
            return "function" != typeof e ? this.then() : this._then(n, r, void 0, new l(this, t, e), void 0);
        }, e.prototype.lastly = e.prototype.finally = function(e) {
            return this._passThrough(e, 0, p, p);
        }, e.prototype.tap = function(e) {
            return this._passThrough(e, 1, p);
        }, e.prototype.tapCatch = function(t) {
            var n = arguments.length;
            if (1 === n) return this._passThrough(t, 1, void 0, p);
            var r, o = new Array(n - 1), a = 0;
            for (r = 0; r < n - 1; ++r) {
                var l = arguments[r];
                if (!i.isObject(l)) return e.reject(new TypeError("tapCatch statement predicate: expecting an object but got " + i.classString(l)));
                o[a++] = l;
            }
            o.length = a;
            var c = arguments[r];
            return this._passThrough(s(o, c, this), 1, void 0, p);
        }, l;
    };
}
