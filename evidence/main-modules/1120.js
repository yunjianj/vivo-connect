// analysis/pretty/main.js:90404; webpack module 1120
function(e, t, n) {
    "use strict";
    e.exports = function(e, t, r, i, o, a) {
        var s = n(88).TypeError, l = n(24), c = l.errorObj, u = l.tryCatch, d = [];
        function h(t, n, i, o) {
            if (a.cancellation()) {
                var s = new e(r), l = this._finallyPromise = new e(r);
                this._promise = s.lastly(function() {
                    return l;
                }), s._captureStackTrace(), s._setOnCancel(this);
            } else {
                (this._promise = new e(r))._captureStackTrace();
            }
            this._stack = o, this._generatorFunction = t, this._receiver = n, this._generator = void 0, 
            this._yieldHandlers = "function" == typeof i ? [ i ].concat(d) : d, this._yieldedPromise = null, 
            this._cancellationPhase = !1;
        }
        l.inherits(h, o), h.prototype._isResolved = function() {
            return null === this._promise;
        }, h.prototype._cleanup = function() {
            this._promise = this._generator = null, a.cancellation() && null !== this._finallyPromise && (this._finallyPromise._fulfill(), 
            this._finallyPromise = null);
        }, h.prototype._promiseCancelled = function() {
            if (!this._isResolved()) {
                var t;
                if (void 0 !== this._generator.return) this._promise._pushContext(), t = u(this._generator.return).call(this._generator, void 0), 
                this._promise._popContext(); else {
                    var n = new e.CancellationError("generator .return() sentinel");
                    e.coroutine.returnSentinel = n, this._promise._attachExtraTrace(n), this._promise._pushContext(), 
                    t = u(this._generator.throw).call(this._generator, n), this._promise._popContext();
                }
                this._cancellationPhase = !0, this._yieldedPromise = null, this._continue(t);
            }
        }, h.prototype._promiseFulfilled = function(e) {
            this._yieldedPromise = null, this._promise._pushContext();
            var t = u(this._generator.next).call(this._generator, e);
            this._promise._popContext(), this._continue(t);
        }, h.prototype._promiseRejected = function(e) {
            this._yieldedPromise = null, this._promise._attachExtraTrace(e), this._promise._pushContext();
            var t = u(this._generator.throw).call(this._generator, e);
            this._promise._popContext(), this._continue(t);
        }, h.prototype._resultCancelled = function() {
            if (this._yieldedPromise instanceof e) {
                var t = this._yieldedPromise;
                this._yieldedPromise = null, t.cancel();
            }
        }, h.prototype.promise = function() {
            return this._promise;
        }, h.prototype._run = function() {
            this._generator = this._generatorFunction.call(this._receiver), this._receiver = this._generatorFunction = void 0, 
            this._promiseFulfilled(void 0);
        }, h.prototype._continue = function(t) {
            var n = this._promise;
            if (t === c) return this._cleanup(), this._cancellationPhase ? n.cancel() : n._rejectCallback(t.e, !1);
            var r = t.value;
            if (!0 === t.done) return this._cleanup(), this._cancellationPhase ? n.cancel() : n._resolveCallback(r);
            var o = i(r, this._promise);
            if (o instanceof e || null !== (o = function(t, n, r) {
                for (var o = 0; o < n.length; ++o) {
                    r._pushContext();
                    var a = u(n[o])(t);
                    if (r._popContext(), a === c) {
                        r._pushContext();
                        var s = e.reject(c.e);
                        return r._popContext(), s;
                    }
                    var l = i(a, r);
                    if (l instanceof e) return l;
                }
                return null;
            }(o, this._yieldHandlers, this._promise))) {
                var a = (o = o._target())._bitField;
                0 == (50397184 & a) ? (this._yieldedPromise = o, o._proxy(this, null)) : 0 != (33554432 & a) ? e._async.invoke(this._promiseFulfilled, this, o._value()) : 0 != (16777216 & a) ? e._async.invoke(this._promiseRejected, this, o._reason()) : this._promiseCancelled();
            } else this._promiseRejected(new s("A value %s was yielded that could not be treated as a promise\n\n    See http://goo.gl/MqrFmX\n\n".replace("%s", String(r)) + "From coroutine:\n" + this._stack.split("\n").slice(1, -7).join("\n")));
        }, e.coroutine = function(e, t) {
            if ("function" != typeof e) throw new s("generatorFunction must be a function\n\n    See http://goo.gl/MqrFmX\n");
            var n = Object(t).yieldHandler, r = h, i = (new Error).stack;
            return function() {
                var t = e.apply(this, arguments), o = new r(void 0, void 0, n, i), a = o.promise();
                return o._generator = t, o._promiseFulfilled(void 0), a;
            };
        }, e.coroutine.addYieldHandler = function(e) {
            if ("function" != typeof e) throw new s("expecting a function but got " + l.classString(e));
            d.push(e);
        }, e.spawn = function(n) {
            if (a.deprecated("Promise.spawn()", "Promise.coroutine()"), "function" != typeof n) return t("generatorFunction must be a function\n\n    See http://goo.gl/MqrFmX\n");
            var r = new h(n, this), i = r.promise();
            return r._run(e.spawn), i;
        };
    };
}
