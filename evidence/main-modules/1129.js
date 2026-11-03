// analysis/pretty/main.js:90938; webpack module 1129
function(e, t, n) {
    "use strict";
    e.exports = function(e, t, r) {
        var i = n(24), o = e.TimeoutError;
        function a(e) {
            this.handle = e;
        }
        a.prototype._resultCancelled = function() {
            clearTimeout(this.handle);
        };
        var s = function(e) {
            return l(+this).thenReturn(e);
        }, l = e.delay = function(n, i) {
            var o, l;
            return void 0 !== i ? (o = e.resolve(i)._then(s, null, null, n, void 0), r.cancellation() && i instanceof e && o._setOnCancel(i)) : (o = new e(t), 
            l = setTimeout(function() {
                o._fulfill();
            }, +n), r.cancellation() && o._setOnCancel(new a(l)), o._captureStackTrace()), o._setAsyncGuaranteed(), 
            o;
        };
        e.prototype.delay = function(e) {
            return l(e, this);
        };
        function c(e) {
            return clearTimeout(this.handle), e;
        }
        function u(e) {
            throw clearTimeout(this.handle), e;
        }
        e.prototype.timeout = function(e, t) {
            var n, s;
            e = +e;
            var l = new a(setTimeout(function() {
                n.isPending() && function(e, t, n) {
                    var r;
                    r = "string" != typeof t ? t instanceof Error ? t : new o("operation timed out") : new o(t), 
                    i.markAsOriginatingFromRejection(r), e._attachExtraTrace(r), e._reject(r), null != n && n.cancel();
                }(n, t, s);
            }, e));
            return r.cancellation() ? (s = this.then(), (n = s._then(c, u, void 0, l, void 0))._setOnCancel(l)) : n = this._then(c, u, void 0, l, void 0), 
            n;
        };
    };
}
