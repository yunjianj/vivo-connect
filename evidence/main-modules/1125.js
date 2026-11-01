// analysis/pretty/main.js:90757; webpack module 1125
function(e, t, n) {
    "use strict";
    e.exports = function(e, t, r, i) {
        var o = n(24);
        function a(n, s) {
            var l, c = r(n);
            if (c instanceof e) return (l = c).then(function(e) {
                return a(e, l);
            });
            if (null === (n = o.asArray(n))) return i("expecting an array or an iterable object but got " + o.classString(n));
            var u = new e(t);
            void 0 !== s && u._propagateFrom(s, 3);
            for (var d = u._fulfill, h = u._reject, p = 0, f = n.length; p < f; ++p) {
                var _ = n[p];
                (void 0 !== _ || p in n) && e.cast(_)._then(d, h, void 0, u, null);
            }
            return u;
        }
        e.race = function(e) {
            return a(e, void 0);
        }, e.prototype.race = function() {
            return a(this, void 0);
        };
    };
}
