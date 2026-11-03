// analysis/pretty/main.js:90243; webpack module 1117
function(e, t, n) {
    "use strict";
    e.exports = function(e) {
        function t(e) {
            void 0 !== e ? (e = e._target(), this._bitField = e._bitField, this._settledValueField = e._isFateSealed() ? e._settledValue() : void 0) : (this._bitField = 0, 
            this._settledValueField = void 0);
        }
        t.prototype._settledValue = function() {
            return this._settledValueField;
        };
        var n = t.prototype.value = function() {
            if (!this.isFulfilled()) throw new TypeError("cannot get fulfillment value of a non-fulfilled promise\n\n    See http://goo.gl/MqrFmX\n");
            return this._settledValue();
        }, r = t.prototype.error = t.prototype.reason = function() {
            if (!this.isRejected()) throw new TypeError("cannot get rejection reason of a non-rejected promise\n\n    See http://goo.gl/MqrFmX\n");
            return this._settledValue();
        }, i = t.prototype.isFulfilled = function() {
            return 0 != (33554432 & this._bitField);
        }, o = t.prototype.isRejected = function() {
            return 0 != (16777216 & this._bitField);
        }, a = t.prototype.isPending = function() {
            return 0 == (50397184 & this._bitField);
        }, s = t.prototype.isResolved = function() {
            return 0 != (50331648 & this._bitField);
        };
        t.prototype.isCancelled = function() {
            return 0 != (8454144 & this._bitField);
        }, e.prototype.__isCancelled = function() {
            return 65536 == (65536 & this._bitField);
        }, e.prototype._isCancelled = function() {
            return this._target().__isCancelled();
        }, e.prototype.isCancelled = function() {
            return 0 != (8454144 & this._target()._bitField);
        }, e.prototype.isPending = function() {
            return a.call(this._target());
        }, e.prototype.isRejected = function() {
            return o.call(this._target());
        }, e.prototype.isFulfilled = function() {
            return i.call(this._target());
        }, e.prototype.isResolved = function() {
            return s.call(this._target());
        }, e.prototype.value = function() {
            return n.call(this._target());
        }, e.prototype.reason = function() {
            var e = this._target();
            return e._unsetRejectionIsUnhandled(), r.call(e);
        }, e.prototype._value = function() {
            return this._settledValue();
        }, e.prototype._reason = function() {
            return this._unsetRejectionIsUnhandled(), this._settledValue();
        }, e.PromiseInspection = t;
    };
}
