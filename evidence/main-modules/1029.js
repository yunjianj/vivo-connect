// analysis/pretty/main.js:82566; webpack module 1029
function(e, t, n) {
    "use strict";
    var r;
    function i(e, t, n) {
        return (t = function(e) {
            var t = function(e, t) {
                if ("object" != typeof e || null === e) return e;
                var n = e[Symbol.toPrimitive];
                if (void 0 !== n) {
                    var r = n.call(e, t || "default");
                    if ("object" != typeof r) return r;
                    throw new TypeError("@@toPrimitive must return a primitive value.");
                }
                return ("string" === t ? String : Number)(e);
            }(e, "string");
            return "symbol" == typeof t ? t : String(t);
        }(t)) in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e;
    }
    var o = n(270), a = Symbol("lastResolve"), s = Symbol("lastReject"), l = Symbol("error"), c = Symbol("ended"), u = Symbol("lastPromise"), d = Symbol("handlePromise"), h = Symbol("stream");
    function p(e, t) {
        return {
            value: e,
            done: t
        };
    }
    function f(e) {
        var t = e[a];
        if (null !== t) {
            var n = e[h].read();
            null !== n && (e[u] = null, e[a] = null, e[s] = null, t(p(n, !1)));
        }
    }
    function _(e) {
        process.nextTick(f, e);
    }
    var m = Object.getPrototypeOf(function() {}), g = Object.setPrototypeOf((i(r = {
        get stream() {
            return this[h];
        },
        next: function() {
            var e = this, t = this[l];
            if (null !== t) return Promise.reject(t);
            if (this[c]) return Promise.resolve(p(void 0, !0));
            if (this[h].destroyed) return new Promise(function(t, n) {
                process.nextTick(function() {
                    e[l] ? n(e[l]) : t(p(void 0, !0));
                });
            });
            var n, r = this[u];
            if (r) n = new Promise(function(e, t) {
                return function(n, r) {
                    e.then(function() {
                        t[c] ? n(p(void 0, !0)) : t[d](n, r);
                    }, r);
                };
            }(r, this)); else {
                var i = this[h].read();
                if (null !== i) return Promise.resolve(p(i, !1));
                n = new Promise(this[d]);
            }
            return this[u] = n, n;
        }
    }, Symbol.asyncIterator, function() {
        return this;
    }), i(r, "return", function() {
        var e = this;
        return new Promise(function(t, n) {
            e[h].destroy(null, function(e) {
                e ? n(e) : t(p(void 0, !0));
            });
        });
    }), r), m);
    e.exports = function(e) {
        var t, n = Object.create(g, (i(t = {}, h, {
            value: e,
            writable: !0
        }), i(t, a, {
            value: null,
            writable: !0
        }), i(t, s, {
            value: null,
            writable: !0
        }), i(t, l, {
            value: null,
            writable: !0
        }), i(t, c, {
            value: e._readableState.endEmitted,
            writable: !0
        }), i(t, d, {
            value: function(e, t) {
                var r = n[h].read();
                r ? (n[u] = null, n[a] = null, n[s] = null, e(p(r, !1))) : (n[a] = e, n[s] = t);
            },
            writable: !0
        }), t));
        return n[u] = null, o(e, function(e) {
            if (e && "ERR_STREAM_PREMATURE_CLOSE" !== e.code) {
                var t = n[s];
                return null !== t && (n[u] = null, n[a] = null, n[s] = null, t(e)), void (n[l] = e);
            }
            var r = n[a];
            null !== r && (n[u] = null, n[a] = null, n[s] = null, r(p(void 0, !0))), n[c] = !0;
        }), e.on("readable", _.bind(null, n)), n;
    };
}
