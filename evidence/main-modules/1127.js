// analysis/pretty/main.js:90852; webpack module 1127
function(e, t, n) {
    "use strict";
    e.exports = function(e, t, r) {
        var i = e.PromiseInspection;
        function o(e) {
            this.constructor$(e);
        }
        n(24).inherits(o, t), o.prototype._promiseResolved = function(e, t) {
            return this._values[e] = t, ++this._totalResolved >= this._length && (this._resolve(this._values), 
            !0);
        }, o.prototype._promiseFulfilled = function(e, t) {
            var n = new i;
            return n._bitField = 33554432, n._settledValueField = e, this._promiseResolved(t, n);
        }, o.prototype._promiseRejected = function(e, t) {
            var n = new i;
            return n._bitField = 16777216, n._settledValueField = e, this._promiseResolved(t, n);
        }, e.settle = function(e) {
            return r.deprecated(".settle()", ".reflect()"), new o(e).promise();
        }, e.allSettled = function(e) {
            return new o(e).promise();
        }, e.prototype.settle = function() {
            return e.settle(this);
        };
    };
}
