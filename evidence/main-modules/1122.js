// analysis/pretty/main.js:90562; webpack module 1122
function(e, t, n) {
    "use strict";
    e.exports = function(e) {
        var t = n(24), r = e._async, i = t.tryCatch, o = t.errorObj;
        function a(e, n) {
            if (!t.isArray(e)) return s.call(this, e, n);
            var a = i(n).apply(this._boundValue(), [ null ].concat(e));
            a === o && r.throwLater(a.e);
        }
        function s(e, t) {
            var n = this._boundValue(), a = void 0 === e ? i(t).call(n, null) : i(t).call(n, null, e);
            a === o && r.throwLater(a.e);
        }
        function l(e, t) {
            if (!e) {
                var n = new Error(e + "");
                n.cause = e, e = n;
            }
            var a = i(t).call(this._boundValue(), e);
            a === o && r.throwLater(a.e);
        }
        e.prototype.asCallback = e.prototype.nodeify = function(e, t) {
            if ("function" == typeof e) {
                var n = s;
                void 0 !== t && Object(t).spread && (n = a), this._then(n, l, void 0, this, e);
            }
            return this;
        };
    };
}
