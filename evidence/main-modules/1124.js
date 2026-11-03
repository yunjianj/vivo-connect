// analysis/pretty/main.js:90698; webpack module 1124
function(e, t, n) {
    "use strict";
    e.exports = function(e, t, r, i) {
        var o, a = n(24), s = a.isObject, l = n(102);
        "function" == typeof Map && (o = Map);
        var c = function() {
            var e = 0, t = 0;
            function n(n, r) {
                this[e] = n, this[e + t] = r, e++;
            }
            return function(r) {
                t = r.size, e = 0;
                var i = new Array(2 * r.size);
                return r.forEach(n, i), i;
            };
        }();
        function u(e) {
            var t, n = !1;
            if (void 0 !== o && e instanceof o) t = c(e), n = !0; else {
                var r = l.keys(e), i = r.length;
                t = new Array(2 * i);
                for (var a = 0; a < i; ++a) {
                    var s = r[a];
                    t[a] = e[s], t[a + i] = s;
                }
            }
            this.constructor$(t), this._isMap = n, this._init$(void 0, n ? -6 : -3);
        }
        function d(t) {
            var n, o = r(t);
            return s(o) ? (n = o instanceof e ? o._then(e.props, void 0, void 0, void 0, void 0) : new u(o).promise(), 
            o instanceof e && n._propagateFrom(o, 2), n) : i("cannot await properties of a non-object\n\n    See http://goo.gl/MqrFmX\n");
        }
        a.inherits(u, t), u.prototype._init = function() {}, u.prototype._promiseFulfilled = function(e, t) {
            if (this._values[t] = e, ++this._totalResolved >= this._length) {
                var n;
                if (this._isMap) n = function(e) {
                    for (var t = new o, n = e.length / 2 | 0, r = 0; r < n; ++r) {
                        var i = e[n + r], a = e[r];
                        t.set(i, a);
                    }
                    return t;
                }(this._values); else {
                    n = {};
                    for (var r = this.length(), i = 0, a = this.length(); i < a; ++i) n[this._values[i + r]] = this._values[i];
                }
                return this._resolve(n), !0;
            }
            return !1;
        }, u.prototype.shouldCopyValues = function() {
            return !1;
        }, u.prototype.getActualLength = function(e) {
            return e >> 1;
        }, e.prototype.props = function() {
            return d(this);
        }, e.props = function(e) {
            return d(e);
        };
    };
}
