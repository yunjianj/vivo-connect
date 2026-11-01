// analysis/pretty/main.js:90116; webpack module 1114
function(e, t, n) {
    "use strict";
    e.exports = function(e, t, n, r) {
        var i = !1, o = function(e, t) {
            this._reject(t);
        }, a = function(e, t) {
            t.promiseRejectionQueued = !0, t.bindingPromise._then(o, o, null, this, e);
        }, s = function(e, t) {
            0 == (50397184 & this._bitField) && this._resolveCallback(t.target);
        }, l = function(e, t) {
            t.promiseRejectionQueued || this._reject(e);
        };
        e.prototype.bind = function(o) {
            i || (i = !0, e.prototype._propagateFrom = r.propagateFromFunction(), e.prototype._boundValue = r.boundValueFunction());
            var c = n(o), u = new e(t);
            u._propagateFrom(this, 1);
            var d = this._target();
            if (u._setBoundTo(c), c instanceof e) {
                var h = {
                    promiseRejectionQueued: !1,
                    promise: u,
                    target: d,
                    bindingPromise: c
                };
                d._then(t, a, void 0, u, h), c._then(s, l, void 0, u, h), u._setOnCancel(c);
            } else u._resolveCallback(d);
            return u;
        }, e.prototype._setBoundTo = function(e) {
            void 0 !== e ? (this._bitField = 2097152 | this._bitField, this._boundTo = e) : this._bitField = -2097153 & this._bitField;
        }, e.prototype._isBound = function() {
            return 2097152 == (2097152 & this._bitField);
        }, e.bind = function(t, n) {
            return e.resolve(n).bind(t);
        };
    };
}
