// analysis/pretty/main.js:90088; webpack module 1113
function(e, t, n) {
    "use strict";
    e.exports = function(e, t, r, i, o) {
        var a = n(24), s = a.tryCatch;
        e.method = function(n) {
            if ("function" != typeof n) throw new e.TypeError("expecting a function but got " + a.classString(n));
            return function() {
                var r = new e(t);
                r._captureStackTrace(), r._pushContext();
                var i = s(n).apply(this, arguments), a = r._popContext();
                return o.checkForgottenReturns(i, a, "Promise.method", r), r._resolveFromSyncValue(i), 
                r;
            };
        }, e.attempt = e.try = function(n) {
            if ("function" != typeof n) return i("expecting a function but got " + a.classString(n));
            var r, l = new e(t);
            if (l._captureStackTrace(), l._pushContext(), arguments.length > 1) {
                o.deprecated("calling Promise.try with more than 1 argument");
                var c = arguments[1], u = arguments[2];
                r = a.isArray(c) ? s(n).apply(u, c) : s(n).call(u, c);
            } else r = s(n)();
            var d = l._popContext();
            return o.checkForgottenReturns(r, d, "Promise.try", l), l._resolveFromSyncValue(r), 
            l;
        }, e.prototype._resolveFromSyncValue = function(e) {
            e === a.errorObj ? this._rejectCallback(e.e, !1) : this._resolveCallback(e, !0);
        };
    };
}
