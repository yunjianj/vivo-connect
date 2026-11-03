// analysis/pretty/main.js:88853; webpack module 1104
function(e, t, n) {
    "use strict";
    e.exports = function() {
        var t = function() {
            return new g("circular promise resolution chain\n\n    See http://goo.gl/MqrFmX\n");
        }, r = function() {
            return new L.PromiseInspection(this._target());
        }, i = function(e) {
            return L.reject(new g(e));
        };
        function o() {}
        var a = {}, s = n(24);
        s.setReflectHandler(r);
        var l = function() {
            var e = process.domain;
            return void 0 === e ? null : e;
        }, c = function() {
            return {
                domain: l(),
                async: null
            };
        }, u = s.isNode && s.nodeSupportsAsyncResource ? n(606).AsyncResource : null, d = function() {
            return {
                domain: l(),
                async: new u("Bluebird::Promise")
            };
        }, h = s.isNode ? c : function() {
            return null;
        };
        s.notEnumerableProp(L, "_getContext", h);
        var p = n(102), f = n(1105), _ = new f;
        p.defineProperty(L, "_async", {
            value: _
        });
        var m = n(88), g = L.TypeError = m.TypeError;
        L.RangeError = m.RangeError;
        var v = L.CancellationError = m.CancellationError;
        L.TimeoutError = m.TimeoutError, L.OperationalError = m.OperationalError, L.RejectionError = m.OperationalError, 
        L.AggregateError = m.AggregateError;
        var y = function() {}, E = {}, b = {}, w = n(1108)(L, y), S = n(1109)(L, y, w, i, o), T = n(1110)(L), A = T.create, O = n(1111)(L, T, function() {
            h = d, s.notEnumerableProp(L, "_getContext", d);
        }, function() {
            h = c, s.notEnumerableProp(L, "_getContext", c);
        }), C = (O.CapturedTrace, n(1112)(L, w, b)), N = n(607)(b), I = n(608), R = s.errorObj, D = s.tryCatch;
        function L(e) {
            e !== y && function(e, t) {
                if (null == e || e.constructor !== L) throw new g("the promise constructor cannot be invoked directly\n\n    See http://goo.gl/MqrFmX\n");
                if ("function" != typeof t) throw new g("expecting a function but got " + s.classString(t));
            }(this, e), this._bitField = 0, this._fulfillmentHandler0 = void 0, this._rejectionHandler0 = void 0, 
            this._promise0 = void 0, this._receiver0 = void 0, this._resolveFromExecutor(e), 
            this._promiseCreated(), this._fireEvent("promiseCreated", this);
        }
        function k(e) {
            this.promise._resolveCallback(e);
        }
        function M(e) {
            this.promise._rejectCallback(e, !1);
        }
        function P(e) {
            var t = new L(y);
            t._fulfillmentHandler0 = e, t._rejectionHandler0 = e, t._promise0 = e, t._receiver0 = e;
        }
        return L.prototype.toString = function() {
            return "[object Promise]";
        }, L.prototype.caught = L.prototype.catch = function(e) {
            var t = arguments.length;
            if (t > 1) {
                var n, r = new Array(t - 1), o = 0;
                for (n = 0; n < t - 1; ++n) {
                    var a = arguments[n];
                    if (!s.isObject(a)) return i("Catch statement predicate: expecting an object but got " + s.classString(a));
                    r[o++] = a;
                }
                if (r.length = o, "function" != typeof (e = arguments[n])) throw new g("The last argument to .catch() must be a function, got " + s.toString(e));
                return this.then(void 0, N(r, e, this));
            }
            return this.then(void 0, e);
        }, L.prototype.reflect = function() {
            return this._then(r, r, void 0, this, void 0);
        }, L.prototype.then = function(e, t) {
            if (O.warnings() && arguments.length > 0 && "function" != typeof e && "function" != typeof t) {
                var n = ".then() only accepts functions but was passed: " + s.classString(e);
                arguments.length > 1 && (n += ", " + s.classString(t)), this._warn(n);
            }
            return this._then(e, t, void 0, void 0, void 0);
        }, L.prototype.done = function(e, t) {
            this._then(e, t, void 0, void 0, void 0)._setIsFinal();
        }, L.prototype.spread = function(e) {
            return "function" != typeof e ? i("expecting a function but got " + s.classString(e)) : this.all()._then(e, void 0, void 0, E, void 0);
        }, L.prototype.toJSON = function() {
            var e = {
                isFulfilled: !1,
                isRejected: !1,
                fulfillmentValue: void 0,
                rejectionReason: void 0
            };
            return this.isFulfilled() ? (e.fulfillmentValue = this.value(), e.isFulfilled = !0) : this.isRejected() && (e.rejectionReason = this.reason(), 
            e.isRejected = !0), e;
        }, L.prototype.all = function() {
            return arguments.length > 0 && this._warn(".all() was passed arguments but it does not take any"), 
            new S(this).promise();
        }, L.prototype.error = function(e) {
            return this.caught(s.originatesFromRejection, e);
        }, L.getNewLibraryCopy = e.exports, L.is = function(e) {
            return e instanceof L;
        }, L.fromNode = L.fromCallback = function(e) {
            var t = new L(y);
            t._captureStackTrace();
            var n = arguments.length > 1 && !!Object(arguments[1]).multiArgs, r = D(e)(I(t, n));
            return r === R && t._rejectCallback(r.e, !0), t._isFateSealed() || t._setAsyncGuaranteed(), 
            t;
        }, L.all = function(e) {
            return new S(e).promise();
        }, L.cast = function(e) {
            var t = w(e);
            return t instanceof L || ((t = new L(y))._captureStackTrace(), t._setFulfilled(), 
            t._rejectionHandler0 = e), t;
        }, L.resolve = L.fulfilled = L.cast, L.reject = L.rejected = function(e) {
            var t = new L(y);
            return t._captureStackTrace(), t._rejectCallback(e, !0), t;
        }, L.setScheduler = function(e) {
            if ("function" != typeof e) throw new g("expecting a function but got " + s.classString(e));
            return _.setScheduler(e);
        }, L.prototype._then = function(e, t, n, r, i) {
            var o = void 0 !== i, a = o ? i : new L(y), l = this._target(), c = l._bitField;
            o || (a._propagateFrom(this, 3), a._captureStackTrace(), void 0 === r && 0 != (2097152 & this._bitField) && (r = 0 != (50397184 & c) ? this._boundValue() : l === this ? void 0 : this._boundTo), 
            this._fireEvent("promiseChained", this, a));
            var u = h();
            if (0 != (50397184 & c)) {
                var d, p, f = l._settlePromiseCtx;
                0 != (33554432 & c) ? (p = l._rejectionHandler0, d = e) : 0 != (16777216 & c) ? (p = l._fulfillmentHandler0, 
                d = t, l._unsetRejectionIsUnhandled()) : (f = l._settlePromiseLateCancellationObserver, 
                p = new v("late cancellation observer"), l._attachExtraTrace(p), d = t), _.invoke(f, l, {
                    handler: s.contextBind(u, d),
                    promise: a,
                    receiver: r,
                    value: p
                });
            } else l._addCallbacks(e, t, a, r, u);
            return a;
        }, L.prototype._length = function() {
            return 65535 & this._bitField;
        }, L.prototype._isFateSealed = function() {
            return 0 != (117506048 & this._bitField);
        }, L.prototype._isFollowing = function() {
            return 67108864 == (67108864 & this._bitField);
        }, L.prototype._setLength = function(e) {
            this._bitField = -65536 & this._bitField | 65535 & e;
        }, L.prototype._setFulfilled = function() {
            this._bitField = 33554432 | this._bitField, this._fireEvent("promiseFulfilled", this);
        }, L.prototype._setRejected = function() {
            this._bitField = 16777216 | this._bitField, this._fireEvent("promiseRejected", this);
        }, L.prototype._setFollowing = function() {
            this._bitField = 67108864 | this._bitField, this._fireEvent("promiseResolved", this);
        }, L.prototype._setIsFinal = function() {
            this._bitField = 4194304 | this._bitField;
        }, L.prototype._isFinal = function() {
            return (4194304 & this._bitField) > 0;
        }, L.prototype._unsetCancelled = function() {
            this._bitField = -65537 & this._bitField;
        }, L.prototype._setCancelled = function() {
            this._bitField = 65536 | this._bitField, this._fireEvent("promiseCancelled", this);
        }, L.prototype._setWillBeCancelled = function() {
            this._bitField = 8388608 | this._bitField;
        }, L.prototype._setAsyncGuaranteed = function() {
            if (!_.hasCustomScheduler()) {
                var e = this._bitField;
                this._bitField = e | (536870912 & e) >> 2 ^ 134217728;
            }
        }, L.prototype._setNoAsyncGuarantee = function() {
            this._bitField = -134217729 & (536870912 | this._bitField);
        }, L.prototype._receiverAt = function(e) {
            var t = 0 === e ? this._receiver0 : this[4 * e - 4 + 3];
            if (t !== a) return void 0 === t && this._isBound() ? this._boundValue() : t;
        }, L.prototype._promiseAt = function(e) {
            return this[4 * e - 4 + 2];
        }, L.prototype._fulfillmentHandlerAt = function(e) {
            return this[4 * e - 4 + 0];
        }, L.prototype._rejectionHandlerAt = function(e) {
            return this[4 * e - 4 + 1];
        }, L.prototype._boundValue = function() {}, L.prototype._migrateCallback0 = function(e) {
            e._bitField;
            var t = e._fulfillmentHandler0, n = e._rejectionHandler0, r = e._promise0, i = e._receiverAt(0);
            void 0 === i && (i = a), this._addCallbacks(t, n, r, i, null);
        }, L.prototype._migrateCallbackAt = function(e, t) {
            var n = e._fulfillmentHandlerAt(t), r = e._rejectionHandlerAt(t), i = e._promiseAt(t), o = e._receiverAt(t);
            void 0 === o && (o = a), this._addCallbacks(n, r, i, o, null);
        }, L.prototype._addCallbacks = function(e, t, n, r, i) {
            var o = this._length();
            if (o >= 65531 && (o = 0, this._setLength(0)), 0 === o) this._promise0 = n, this._receiver0 = r, 
            "function" == typeof e && (this._fulfillmentHandler0 = s.contextBind(i, e)), "function" == typeof t && (this._rejectionHandler0 = s.contextBind(i, t)); else {
                var a = 4 * o - 4;
                this[a + 2] = n, this[a + 3] = r, "function" == typeof e && (this[a + 0] = s.contextBind(i, e)), 
                "function" == typeof t && (this[a + 1] = s.contextBind(i, t));
            }
            return this._setLength(o + 1), o;
        }, L.prototype._proxy = function(e, t) {
            this._addCallbacks(void 0, void 0, t, e, null);
        }, L.prototype._resolveCallback = function(e, n) {
            if (0 == (117506048 & this._bitField)) {
                if (e === this) return this._rejectCallback(t(), !1);
                var r = w(e, this);
                if (!(r instanceof L)) return this._fulfill(e);
                n && this._propagateFrom(r, 2);
                var i = r._target();
                if (i !== this) {
                    var o = i._bitField;
                    if (0 == (50397184 & o)) {
                        var a = this._length();
                        a > 0 && i._migrateCallback0(this);
                        for (var s = 1; s < a; ++s) i._migrateCallbackAt(this, s);
                        this._setFollowing(), this._setLength(0), this._setFollowee(r);
                    } else if (0 != (33554432 & o)) this._fulfill(i._value()); else if (0 != (16777216 & o)) this._reject(i._reason()); else {
                        var l = new v("late cancellation observer");
                        i._attachExtraTrace(l), this._reject(l);
                    }
                } else this._reject(t());
            }
        }, L.prototype._rejectCallback = function(e, t, n) {
            var r = s.ensureErrorObject(e), i = r === e;
            if (!i && !n && O.warnings()) {
                var o = "a promise was rejected with a non-error: " + s.classString(e);
                this._warn(o, !0);
            }
            this._attachExtraTrace(r, !!t && i), this._reject(e);
        }, L.prototype._resolveFromExecutor = function(e) {
            if (e !== y) {
                var t = this;
                this._captureStackTrace(), this._pushContext();
                var n = !0, r = this._execute(e, function(e) {
                    t._resolveCallback(e);
                }, function(e) {
                    t._rejectCallback(e, n);
                });
                n = !1, this._popContext(), void 0 !== r && t._rejectCallback(r, !0);
            }
        }, L.prototype._settlePromiseFromHandler = function(e, t, n, r) {
            var i = r._bitField;
            if (0 == (65536 & i)) {
                var o;
                r._pushContext(), t === E ? n && "number" == typeof n.length ? o = D(e).apply(this._boundValue(), n) : (o = R).e = new g("cannot .spread() a non-array: " + s.classString(n)) : o = D(e).call(t, n);
                var a = r._popContext();
                0 == (65536 & (i = r._bitField)) && (o === b ? r._reject(n) : o === R ? r._rejectCallback(o.e, !1) : (O.checkForgottenReturns(o, a, "", r, this), 
                r._resolveCallback(o)));
            }
        }, L.prototype._target = function() {
            for (var e = this; e._isFollowing(); ) e = e._followee();
            return e;
        }, L.prototype._followee = function() {
            return this._rejectionHandler0;
        }, L.prototype._setFollowee = function(e) {
            this._rejectionHandler0 = e;
        }, L.prototype._settlePromise = function(e, t, n, i) {
            var a = e instanceof L, s = this._bitField, l = 0 != (134217728 & s);
            0 != (65536 & s) ? (a && e._invokeInternalOnCancel(), n instanceof C && n.isFinallyHandler() ? (n.cancelPromise = e, 
            D(t).call(n, i) === R && e._reject(R.e)) : t === r ? e._fulfill(r.call(n)) : n instanceof o ? n._promiseCancelled(e) : a || e instanceof S ? e._cancel() : n.cancel()) : "function" == typeof t ? a ? (l && e._setAsyncGuaranteed(), 
            this._settlePromiseFromHandler(t, n, i, e)) : t.call(n, i, e) : n instanceof o ? n._isResolved() || (0 != (33554432 & s) ? n._promiseFulfilled(i, e) : n._promiseRejected(i, e)) : a && (l && e._setAsyncGuaranteed(), 
            0 != (33554432 & s) ? e._fulfill(i) : e._reject(i));
        }, L.prototype._settlePromiseLateCancellationObserver = function(e) {
            var t = e.handler, n = e.promise, r = e.receiver, i = e.value;
            "function" == typeof t ? n instanceof L ? this._settlePromiseFromHandler(t, r, i, n) : t.call(r, i, n) : n instanceof L && n._reject(i);
        }, L.prototype._settlePromiseCtx = function(e) {
            this._settlePromise(e.promise, e.handler, e.receiver, e.value);
        }, L.prototype._settlePromise0 = function(e, t, n) {
            var r = this._promise0, i = this._receiverAt(0);
            this._promise0 = void 0, this._receiver0 = void 0, this._settlePromise(r, e, i, t);
        }, L.prototype._clearCallbackDataAtIndex = function(e) {
            var t = 4 * e - 4;
            this[t + 2] = this[t + 3] = this[t + 0] = this[t + 1] = void 0;
        }, L.prototype._fulfill = function(e) {
            var n = this._bitField;
            if (!((117506048 & n) >>> 16)) {
                if (e === this) {
                    var r = t();
                    return this._attachExtraTrace(r), this._reject(r);
                }
                this._setFulfilled(), this._rejectionHandler0 = e, (65535 & n) > 0 && (0 != (134217728 & n) ? this._settlePromises() : _.settlePromises(this), 
                this._dereferenceTrace());
            }
        }, L.prototype._reject = function(e) {
            var t = this._bitField;
            if (!((117506048 & t) >>> 16)) {
                if (this._setRejected(), this._fulfillmentHandler0 = e, this._isFinal()) return _.fatalError(e, s.isNode);
                (65535 & t) > 0 ? _.settlePromises(this) : this._ensurePossibleRejectionHandled();
            }
        }, L.prototype._fulfillPromises = function(e, t) {
            for (var n = 1; n < e; n++) {
                var r = this._fulfillmentHandlerAt(n), i = this._promiseAt(n), o = this._receiverAt(n);
                this._clearCallbackDataAtIndex(n), this._settlePromise(i, r, o, t);
            }
        }, L.prototype._rejectPromises = function(e, t) {
            for (var n = 1; n < e; n++) {
                var r = this._rejectionHandlerAt(n), i = this._promiseAt(n), o = this._receiverAt(n);
                this._clearCallbackDataAtIndex(n), this._settlePromise(i, r, o, t);
            }
        }, L.prototype._settlePromises = function() {
            var e = this._bitField, t = 65535 & e;
            if (t > 0) {
                if (0 != (16842752 & e)) {
                    var n = this._fulfillmentHandler0;
                    this._settlePromise0(this._rejectionHandler0, n, e), this._rejectPromises(t, n);
                } else {
                    var r = this._rejectionHandler0;
                    this._settlePromise0(this._fulfillmentHandler0, r, e), this._fulfillPromises(t, r);
                }
                this._setLength(0);
            }
            this._clearCancellationData();
        }, L.prototype._settledValue = function() {
            var e = this._bitField;
            return 0 != (33554432 & e) ? this._rejectionHandler0 : 0 != (16777216 & e) ? this._fulfillmentHandler0 : void 0;
        }, "undefined" != typeof Symbol && Symbol.toStringTag && p.defineProperty(L.prototype, Symbol.toStringTag, {
            get: function() {
                return "Object";
            }
        }), L.defer = L.pending = function() {
            return O.deprecated("Promise.defer", "new Promise"), {
                promise: new L(y),
                resolve: k,
                reject: M
            };
        }, s.notEnumerableProp(L, "_makeSelfResolutionError", t), n(1113)(L, y, w, i, O), 
        n(1114)(L, y, w, O), n(1115)(L, S, i, O), n(1116)(L), n(1117)(L), n(1118)(L, S, w, y, _), 
        L.Promise = L, L.version = "3.7.2", n(1119)(L), n(1120)(L, i, y, w, o, O), n(1121)(L, S, i, w, y, O), 
        n(1122)(L), n(1123)(L, y), n(1124)(L, S, w, i), n(1125)(L, y, w, i), n(1126)(L, S, i, w, y, O), 
        n(1127)(L, S, O), n(1128)(L, S, i), n(1129)(L, y, O), n(1130)(L, i, w, A, y, O), 
        n(1131)(L), n(1132)(L, y), n(1133)(L, y), s.toFastProperties(L), s.toFastProperties(L.prototype), 
        P({
            a: 1
        }), P({
            b: 2
        }), P({
            c: 3
        }), P(1), P(function() {}), P(void 0), P(!1), P(new L(y)), O.setBounds(f.firstLineError, s.lastLineError), 
        L;
    };
}
