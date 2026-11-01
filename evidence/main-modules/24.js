// analysis/pretty/main.js:4567; webpack module 24
function(e, t, n) {
    "use strict";
    var r = n(102), i = "undefined" == typeof navigator, o = {
        e: {}
    }, a, s = "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : void 0 !== this ? this : null;
    function l() {
        try {
            var e = a;
            return a = null, e.apply(this, arguments);
        } catch (e) {
            return o.e = e, o;
        }
    }
    function c(e) {
        return a = e, l;
    }
    var u = function(e, t) {
        var n = {}.hasOwnProperty;
        function r() {
            for (var r in this.constructor = e, this.constructor$ = t, t.prototype) n.call(t.prototype, r) && "$" !== r.charAt(r.length - 1) && (this[r + "$"] = t.prototype[r]);
        }
        return r.prototype = t.prototype, e.prototype = new r, e.prototype;
    };
    function d(e) {
        return null == e || !0 === e || !1 === e || "string" == typeof e || "number" == typeof e;
    }
    function h(e) {
        return "function" == typeof e || "object" == typeof e && null !== e;
    }
    function p(e) {
        return d(e) ? new Error(A(e)) : e;
    }
    function f(e, t) {
        var n, r = e.length, i = new Array(r + 1);
        for (n = 0; n < r; ++n) i[n] = e[n];
        return i[n] = t, i;
    }
    function _(e, t, n) {
        if (!r.isES5) return {}.hasOwnProperty.call(e, t) ? e[t] : void 0;
        var i = Object.getOwnPropertyDescriptor(e, t);
        return null != i ? null == i.get && null == i.set ? i.value : n : void 0;
    }
    function m(e, t, n) {
        if (d(e)) return e;
        var i = {
            value: n,
            configurable: !0,
            enumerable: !1,
            writable: !0
        };
        return r.defineProperty(e, t, i), e;
    }
    function g(e) {
        throw e;
    }
    var v = function() {
        var e = [ Array.prototype, Object.prototype, Function.prototype ], t = function(t) {
            for (var n = 0; n < e.length; ++n) if (e[n] === t) return !0;
            return !1;
        };
        if (r.isES5) {
            var n = Object.getOwnPropertyNames;
            return function(e) {
                for (var i = [], o = Object.create(null); null != e && !t(e); ) {
                    var a;
                    try {
                        a = n(e);
                    } catch (e) {
                        return i;
                    }
                    for (var s = 0; s < a.length; ++s) {
                        var l = a[s];
                        if (!o[l]) {
                            o[l] = !0;
                            var c = Object.getOwnPropertyDescriptor(e, l);
                            null != c && null == c.get && null == c.set && i.push(l);
                        }
                    }
                    e = r.getPrototypeOf(e);
                }
                return i;
            };
        }
        var i = {}.hasOwnProperty;
        return function(n) {
            if (t(n)) return [];
            var r = [];
            e: for (var o in n) if (i.call(n, o)) r.push(o); else {
                for (var a = 0; a < e.length; ++a) if (i.call(e[a], o)) continue e;
                r.push(o);
            }
            return r;
        };
    }(), y = /this\s*\.\s*\S+\s*=/;
    function E(e) {
        try {
            if ("function" == typeof e) {
                var t = r.names(e.prototype), n = r.isES5 && t.length > 1, i = t.length > 0 && !(1 === t.length && "constructor" === t[0]), o = y.test(e + "") && r.names(e).length > 0;
                if (n || i || o) return !0;
            }
            return !1;
        } catch (e) {
            return !1;
        }
    }
    function b(e) {
        function t() {}
        t.prototype = e;
        var n = new t;
        function r() {
            return typeof n.foo;
        }
        return r(), r(), e;
    }
    var w = /^[a-z$_][a-z$_0-9]*$/i;
    function S(e) {
        return w.test(e);
    }
    function T(e, t, n) {
        for (var r = new Array(e), i = 0; i < e; ++i) r[i] = t + i + n;
        return r;
    }
    function A(e) {
        try {
            return e + "";
        } catch (e) {
            return "[no string representation]";
        }
    }
    function O(e) {
        return e instanceof Error || null !== e && "object" == typeof e && "string" == typeof e.message && "string" == typeof e.name;
    }
    function C(e) {
        try {
            m(e, "isOperational", !0);
        } catch (e) {}
    }
    function N(e) {
        return null != e && (e instanceof Error.__BluebirdErrorTypes__.OperationalError || !0 === e.isOperational);
    }
    function I(e) {
        return O(e) && r.propertyIsWritable(e, "stack");
    }
    var R = "stack" in new Error ? function(e) {
        return I(e) ? e : new Error(A(e));
    } : function(e) {
        if (I(e)) return e;
        try {
            throw new Error(A(e));
        } catch (e) {
            return e;
        }
    };
    function D(e) {
        return {}.toString.call(e);
    }
    function L(e, t, n) {
        for (var i = r.names(e), o = 0; o < i.length; ++o) {
            var a = i[o];
            if (n(a)) try {
                r.defineProperty(t, a, r.getDescriptor(e, a));
            } catch (e) {}
        }
    }
    var k = function(e) {
        return r.isArray(e) ? e : null;
    };
    if ("undefined" != typeof Symbol && Symbol.iterator) {
        var M = "function" == typeof Array.from ? function(e) {
            return Array.from(e);
        } : function(e) {
            for (var t, n = [], r = e[Symbol.iterator](); !(t = r.next()).done; ) n.push(t.value);
            return n;
        };
        k = function(e) {
            return r.isArray(e) ? e : null != e && "function" == typeof e[Symbol.iterator] ? M(e) : null;
        };
    }
    var P = "undefined" != typeof process && "[object process]" === D(process).toLowerCase(), x = "undefined" != typeof process && void 0 !== process.env, F;
    function j(e) {
        return x ? process.env[e] : void 0;
    }
    function U() {
        if ("function" == typeof Promise) try {
            if ("[object Promise]" === D(new Promise(function() {}))) return Promise;
        } catch (e) {}
    }
    function W(e, t) {
        if (null === e || "function" != typeof t || t === F) return t;
        null !== e.domain && (t = e.domain.bind(t));
        var n = e.async;
        if (null !== n) {
            var r = t;
            t = function() {
                for (var e = arguments.length + 2, t = new Array(e), i = 2; i < e; ++i) t[i] = arguments[i - 2];
                return t[0] = r, t[1] = this, n.runInAsyncScope.apply(n, t);
            };
        }
        return t;
    }
    var B = {
        setReflectHandler: function(e) {
            F = e;
        },
        isClass: E,
        isIdentifier: S,
        inheritedDataKeys: v,
        getDataPropertyOrDefault: _,
        thrower: g,
        isArray: r.isArray,
        asArray: k,
        notEnumerableProp: m,
        isPrimitive: d,
        isObject: h,
        isError: O,
        canEvaluate: i,
        errorObj: o,
        tryCatch: c,
        inherits: u,
        withAppended: f,
        maybeWrapAsError: p,
        toFastProperties: b,
        filledRange: T,
        toString: A,
        canAttachTrace: I,
        ensureErrorObject: R,
        originatesFromRejection: N,
        markAsOriginatingFromRejection: C,
        classString: D,
        copyDescriptors: L,
        isNode: P,
        hasEnvVariables: x,
        env: j,
        global: s,
        getNativePromise: U,
        contextBind: W
    }, H;
    B.isRecentNode = B.isNode && (process.versions && process.versions.node ? H = process.versions.node.split(".").map(Number) : process.version && (H = process.version.split(".").map(Number)), 
    0 === H[0] && H[1] > 10 || H[0] > 0), B.nodeSupportsAsyncResource = B.isNode && function() {
        var e = !1;
        try {
            e = "function" == typeof n(606).AsyncResource.prototype.runInAsyncScope;
        } catch (t) {
            e = !1;
        }
        return e;
    }(), B.isNode && B.toFastProperties(process);
    try {
        throw new Error;
    } catch (e) {
        B.lastLineError = e;
    }
    e.exports = B;
}
