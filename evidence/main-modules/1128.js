// analysis/pretty/main.js:90876; webpack module 1128
function(e, t, n) {
    "use strict";
    e.exports = function(e, t, r) {
        var i = n(24), o = n(88).RangeError, a = n(88).AggregateError, s = i.isArray, l = {};
        function c(e) {
            this.constructor$(e), this._howMany = 0, this._unwrap = !1, this._initialized = !1;
        }
        function u(e, t) {
            if ((0 | t) !== t || t < 0) return r("expecting a positive integer\n\n    See http://goo.gl/MqrFmX\n");
            var n = new c(e), i = n.promise();
            return n.setHowMany(t), n.init(), i;
        }
        i.inherits(c, t), c.prototype._init = function() {
            if (this._initialized) if (0 !== this._howMany) {
                this._init$(void 0, -5);
                var e = s(this._values);
                !this._isResolved() && e && this._howMany > this._canPossiblyFulfill() && this._reject(this._getRangeError(this.length()));
            } else this._resolve([]);
        }, c.prototype.init = function() {
            this._initialized = !0, this._init();
        }, c.prototype.setUnwrap = function() {
            this._unwrap = !0;
        }, c.prototype.howMany = function() {
            return this._howMany;
        }, c.prototype.setHowMany = function(e) {
            this._howMany = e;
        }, c.prototype._promiseFulfilled = function(e) {
            return this._addFulfilled(e), this._fulfilled() === this.howMany() && (this._values.length = this.howMany(), 
            1 === this.howMany() && this._unwrap ? this._resolve(this._values[0]) : this._resolve(this._values), 
            !0);
        }, c.prototype._promiseRejected = function(e) {
            return this._addRejected(e), this._checkOutcome();
        }, c.prototype._promiseCancelled = function() {
            return this._values instanceof e || null == this._values ? this._cancel() : (this._addRejected(l), 
            this._checkOutcome());
        }, c.prototype._checkOutcome = function() {
            if (this.howMany() > this._canPossiblyFulfill()) {
                for (var e = new a, t = this.length(); t < this._values.length; ++t) this._values[t] !== l && e.push(this._values[t]);
                return e.length > 0 ? this._reject(e) : this._cancel(), !0;
            }
            return !1;
        }, c.prototype._fulfilled = function() {
            return this._totalResolved;
        }, c.prototype._rejected = function() {
            return this._values.length - this.length();
        }, c.prototype._addRejected = function(e) {
            this._values.push(e);
        }, c.prototype._addFulfilled = function(e) {
            this._values[this._totalResolved++] = e;
        }, c.prototype._canPossiblyFulfill = function() {
            return this.length() - this._rejected();
        }, c.prototype._getRangeError = function(e) {
            var t = "Input array must contain at least " + this._howMany + " items but contains only " + e + " items";
            return new o(t);
        }, c.prototype._resolveEmptyArray = function() {
            this._reject(this._getRangeError(0));
        }, e.some = function(e, t) {
            return u(e, t);
        }, e.prototype.some = function(e) {
            return u(this, e);
        }, e._SomePromiseArray = c;
    };
}
