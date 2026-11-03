// analysis/pretty/main.js:89443; webpack module 1110
function(e, t, n) {
    "use strict";
    e.exports = function(e) {
        var t = !1, n = [];
        function r() {
            this._trace = new r.CapturedTrace(i());
        }
        function i() {
            var e = n.length - 1;
            if (e >= 0) return n[e];
        }
        return e.prototype._promiseCreated = function() {}, e.prototype._pushContext = function() {}, 
        e.prototype._popContext = function() {
            return null;
        }, e._peekContext = e.prototype._peekContext = function() {}, r.prototype._pushContext = function() {
            void 0 !== this._trace && (this._trace._promiseCreated = null, n.push(this._trace));
        }, r.prototype._popContext = function() {
            if (void 0 !== this._trace) {
                var e = n.pop(), t = e._promiseCreated;
                return e._promiseCreated = null, t;
            }
            return null;
        }, r.CapturedTrace = null, r.create = function() {
            if (t) return new r;
        }, r.deactivateLongStackTraces = function() {}, r.activateLongStackTraces = function() {
            var n = e.prototype._pushContext, o = e.prototype._popContext, a = e._peekContext, s = e.prototype._peekContext, l = e.prototype._promiseCreated;
            r.deactivateLongStackTraces = function() {
                e.prototype._pushContext = n, e.prototype._popContext = o, e._peekContext = a, e.prototype._peekContext = s, 
                e.prototype._promiseCreated = l, t = !1;
            }, t = !0, e.prototype._pushContext = r.prototype._pushContext, e.prototype._popContext = r.prototype._popContext, 
            e._peekContext = e.prototype._peekContext = i, e.prototype._promiseCreated = function() {
                var e = this._peekContext();
                e && null == e._promiseCreated && (e._promiseCreated = this);
            };
        }, r;
    };
}
