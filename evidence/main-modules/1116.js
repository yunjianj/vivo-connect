// analysis/pretty/main.js:90205; webpack module 1116
function(e, t, n) {
    "use strict";
    e.exports = function(e) {
        function t() {
            return this.value;
        }
        function n() {
            throw this.reason;
        }
        e.prototype.return = e.prototype.thenReturn = function(n) {
            return n instanceof e && n.suppressUnhandledRejections(), this._then(t, void 0, void 0, {
                value: n
            }, void 0);
        }, e.prototype.throw = e.prototype.thenThrow = function(e) {
            return this._then(n, void 0, void 0, {
                reason: e
            }, void 0);
        }, e.prototype.catchThrow = function(e) {
            if (arguments.length <= 1) return this._then(void 0, n, void 0, {
                reason: e
            }, void 0);
            var t = arguments[1], r = function() {
                throw t;
            };
            return this.caught(e, r);
        }, e.prototype.catchReturn = function(n) {
            if (arguments.length <= 1) return n instanceof e && n.suppressUnhandledRejections(), 
            this._then(void 0, t, void 0, {
                value: n
            }, void 0);
            var r = arguments[1];
            r instanceof e && r.suppressUnhandledRejections();
            var i = function() {
                return r;
            };
            return this.caught(n, i);
        };
    };
}
