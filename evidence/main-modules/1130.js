// analysis/pretty/main.js:90981; webpack module 1130
function(e, t, n) {
    "use strict";
    e.exports = function(e, t, r, i, o, a) {
        var s = n(24), l = n(88).TypeError, c = n(24).inherits, u = s.errorObj, d = s.tryCatch, h = {};
        function p(e) {
            setTimeout(function() {
                throw e;
            }, 0);
        }
        function f(t, n) {
            var i = 0, a = t.length, s = new e(o);
            return function o() {
                if (i >= a) return s._fulfill();
                var l = function(e) {
                    var t = r(e);
                    return t !== e && "function" == typeof e._isDisposable && "function" == typeof e._getDisposer && e._isDisposable() && t._setDisposable(e._getDisposer()), 
                    t;
                }(t[i++]);
                if (l instanceof e && l._isDisposable()) {
                    try {
                        l = r(l._getDisposer().tryDispose(n), t.promise);
                    } catch (e) {
                        return p(e);
                    }
                    if (l instanceof e) return l._then(o, p, null, null, null);
                }
                o();
            }(), s;
        }
        function _(e, t, n) {
            this._data = e, this._promise = t, this._context = n;
        }
        function m(e, t, n) {
            this.constructor$(e, t, n);
        }
        function g(e) {
            return _.isDisposer(e) ? (this.resources[this.index]._setDisposable(e), e.promise()) : e;
        }
        function v(e) {
            this.length = e, this.promise = null, this[e - 1] = null;
        }
        _.prototype.data = function() {
            return this._data;
        }, _.prototype.promise = function() {
            return this._promise;
        }, _.prototype.resource = function() {
            return this.promise().isFulfilled() ? this.promise().value() : h;
        }, _.prototype.tryDispose = function(e) {
            var t = this.resource(), n = this._context;
            void 0 !== n && n._pushContext();
            var r = t !== h ? this.doDispose(t, e) : null;
            return void 0 !== n && n._popContext(), this._promise._unsetDisposable(), this._data = null, 
            r;
        }, _.isDisposer = function(e) {
            return null != e && "function" == typeof e.resource && "function" == typeof e.tryDispose;
        }, c(m, _), m.prototype.doDispose = function(e, t) {
            return this.data().call(e, e, t);
        }, v.prototype._resultCancelled = function() {
            for (var t = this.length, n = 0; n < t; ++n) {
                var r = this[n];
                r instanceof e && r.cancel();
            }
        }, e.using = function() {
            var n = arguments.length;
            if (n < 2) return t("you must pass at least 2 arguments to Promise.using");
            var i, o = arguments[n - 1];
            if ("function" != typeof o) return t("expecting a function but got " + s.classString(o));
            var l = !0;
            2 === n && Array.isArray(arguments[0]) ? (n = (i = arguments[0]).length, l = !1) : (i = arguments, 
            n--);
            for (var c = new v(n), h = 0; h < n; ++h) {
                var p = i[h];
                if (_.isDisposer(p)) {
                    var m = p;
                    (p = p.promise())._setDisposable(m);
                } else {
                    var y = r(p);
                    y instanceof e && (p = y._then(g, null, null, {
                        resources: c,
                        index: h
                    }, void 0));
                }
                c[h] = p;
            }
            var E = new Array(c.length);
            for (h = 0; h < E.length; ++h) E[h] = e.resolve(c[h]).reflect();
            var b = e.all(E).then(function(e) {
                for (var t = 0; t < e.length; ++t) {
                    var n = e[t];
                    if (n.isRejected()) return u.e = n.error(), u;
                    if (!n.isFulfilled()) return void b.cancel();
                    e[t] = n.value();
                }
                w._pushContext(), o = d(o);
                var r = l ? o.apply(void 0, e) : o(e), i = w._popContext();
                return a.checkForgottenReturns(r, i, "Promise.using", w), r;
            }), w = b.lastly(function() {
                var t = new e.PromiseInspection(b);
                return f(c, t);
            });
            return c.promise = w, w._setOnCancel(c), w;
        }, e.prototype._setDisposable = function(e) {
            this._bitField = 131072 | this._bitField, this._disposer = e;
        }, e.prototype._isDisposable = function() {
            return (131072 & this._bitField) > 0;
        }, e.prototype._getDisposer = function() {
            return this._disposer;
        }, e.prototype._unsetDisposable = function() {
            this._bitField = -131073 & this._bitField, this._disposer = void 0;
        }, e.prototype.disposer = function(e) {
            if ("function" == typeof e) return new m(e, this, i());
            throw new l;
        };
    };
}
