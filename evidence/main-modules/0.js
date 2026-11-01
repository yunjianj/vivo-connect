// analysis/pretty/main.js:44; webpack module 0
function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, "__extends", function() {
        return i;
    }), n.d(t, "__assign", function() {
        return o;
    }), n.d(t, "__rest", function() {
        return a;
    }), n.d(t, "__decorate", function() {
        return s;
    }), n.d(t, "__param", function() {
        return l;
    }), n.d(t, "__esDecorate", function() {
        return c;
    }), n.d(t, "__runInitializers", function() {
        return u;
    }), n.d(t, "__propKey", function() {
        return d;
    }), n.d(t, "__setFunctionName", function() {
        return h;
    }), n.d(t, "__metadata", function() {
        return p;
    }), n.d(t, "__awaiter", function() {
        return f;
    }), n.d(t, "__generator", function() {
        return _;
    }), n.d(t, "__createBinding", function() {
        return m;
    }), n.d(t, "__exportStar", function() {
        return g;
    }), n.d(t, "__values", function() {
        return v;
    }), n.d(t, "__read", function() {
        return y;
    }), n.d(t, "__spread", function() {
        return E;
    }), n.d(t, "__spreadArrays", function() {
        return b;
    }), n.d(t, "__spreadArray", function() {
        return w;
    }), n.d(t, "__await", function() {
        return S;
    }), n.d(t, "__asyncGenerator", function() {
        return T;
    }), n.d(t, "__asyncDelegator", function() {
        return A;
    }), n.d(t, "__asyncValues", function() {
        return O;
    }), n.d(t, "__makeTemplateObject", function() {
        return C;
    }), n.d(t, "__importStar", function() {
        return R;
    }), n.d(t, "__importDefault", function() {
        return D;
    }), n.d(t, "__classPrivateFieldGet", function() {
        return L;
    }), n.d(t, "__classPrivateFieldSet", function() {
        return k;
    }), n.d(t, "__classPrivateFieldIn", function() {
        return M;
    }), n.d(t, "__addDisposableResource", function() {
        return P;
    }), n.d(t, "__disposeResources", function() {
        return F;
    }), n.d(t, "__rewriteRelativeImportExtension", function() {
        return j;
    });
    var r = function(e, t) {
        return (r = Object.setPrototypeOf || {
            __proto__: []
        } instanceof Array && function(e, t) {
            e.__proto__ = t;
        } || function(e, t) {
            for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
        })(e, t);
    };
    function i(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
        function n() {
            this.constructor = e;
        }
        r(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, 
        new n);
    }
    var o = function() {
        return (o = Object.assign || function(e) {
            for (var t, n = 1, r = arguments.length; n < r; n++) for (var i in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
            return e;
        }).apply(this, arguments);
    };
    function a(e, t) {
        var n = {};
        for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
        if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
            var i = 0;
            for (r = Object.getOwnPropertySymbols(e); i < r.length; i++) t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
        }
        return n;
    }
    function s(e, t, n, r) {
        var i, o = arguments.length, a = o < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, n) : r;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, r); else for (var s = e.length - 1; s >= 0; s--) (i = e[s]) && (a = (o < 3 ? i(a) : o > 3 ? i(t, n, a) : i(t, n)) || a);
        return o > 3 && a && Object.defineProperty(t, n, a), a;
    }
    function l(e, t) {
        return function(n, r) {
            t(n, r, e);
        };
    }
    function c(e, t, n, r, i, o) {
        function a(e) {
            if (void 0 !== e && "function" != typeof e) throw new TypeError("Function expected");
            return e;
        }
        for (var s, l = r.kind, c = "getter" === l ? "get" : "setter" === l ? "set" : "value", u = !t && e ? r.static ? e : e.prototype : null, d = t || (u ? Object.getOwnPropertyDescriptor(u, r.name) : {}), h = !1, p = n.length - 1; p >= 0; p--) {
            var f = {};
            for (var _ in r) f[_] = "access" === _ ? {} : r[_];
            for (var _ in r.access) f.access[_] = r.access[_];
            f.addInitializer = function(e) {
                if (h) throw new TypeError("Cannot add initializers after decoration has completed");
                o.push(a(e || null));
            };
            var m = (0, n[p])("accessor" === l ? {
                get: d.get,
                set: d.set
            } : d[c], f);
            if ("accessor" === l) {
                if (void 0 === m) continue;
                if (null === m || "object" != typeof m) throw new TypeError("Object expected");
                (s = a(m.get)) && (d.get = s), (s = a(m.set)) && (d.set = s), (s = a(m.init)) && i.unshift(s);
            } else (s = a(m)) && ("field" === l ? i.unshift(s) : d[c] = s);
        }
        u && Object.defineProperty(u, r.name, d), h = !0;
    }
    function u(e, t, n) {
        for (var r = arguments.length > 2, i = 0; i < t.length; i++) n = r ? t[i].call(e, n) : t[i].call(e);
        return r ? n : void 0;
    }
    function d(e) {
        return "symbol" == typeof e ? e : "".concat(e);
    }
    function h(e, t, n) {
        return "symbol" == typeof t && (t = t.description ? "[".concat(t.description, "]") : ""), 
        Object.defineProperty(e, "name", {
            configurable: !0,
            value: n ? "".concat(n, " ", t) : t
        });
    }
    function p(e, t) {
        if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
    }
    function f(e, t, n, r) {
        return new (n || (n = Promise))(function(i, o) {
            function a(e) {
                try {
                    l(r.next(e));
                } catch (e) {
                    o(e);
                }
            }
            function s(e) {
                try {
                    l(r.throw(e));
                } catch (e) {
                    o(e);
                }
            }
            function l(e) {
                var t;
                e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n(function(e) {
                    e(t);
                })).then(a, s);
            }
            l((r = r.apply(e, t || [])).next());
        });
    }
    function _(e, t) {
        var n, r, i, o = {
            label: 0,
            sent: function() {
                if (1 & i[0]) throw i[1];
                return i[1];
            },
            trys: [],
            ops: []
        }, a = Object.create(("function" == typeof Iterator ? Iterator : Object).prototype);
        return a.next = s(0), a.throw = s(1), a.return = s(2), "function" == typeof Symbol && (a[Symbol.iterator] = function() {
            return this;
        }), a;
        function s(s) {
            return function(l) {
                return function(s) {
                    if (n) throw new TypeError("Generator is already executing.");
                    for (;a && (a = 0, s[0] && (o = 0)), o; ) try {
                        if (n = 1, r && (i = 2 & s[0] ? r.return : s[0] ? r.throw || ((i = r.return) && i.call(r), 
                        0) : r.next) && !(i = i.call(r, s[1])).done) return i;
                        switch (r = 0, i && (s = [ 2 & s[0], i.value ]), s[0]) {
                          case 0:
                          case 1:
                            i = s;
                            break;

                          case 4:
                            return o.label++, {
                                value: s[1],
                                done: !1
                            };

                          case 5:
                            o.label++, r = s[1], s = [ 0 ];
                            continue;

                          case 7:
                            s = o.ops.pop(), o.trys.pop();
                            continue;

                          default:
                            if (!(i = o.trys, (i = i.length > 0 && i[i.length - 1]) || 6 !== s[0] && 2 !== s[0])) {
                                o = 0;
                                continue;
                            }
                            if (3 === s[0] && (!i || s[1] > i[0] && s[1] < i[3])) {
                                o.label = s[1];
                                break;
                            }
                            if (6 === s[0] && o.label < i[1]) {
                                o.label = i[1], i = s;
                                break;
                            }
                            if (i && o.label < i[2]) {
                                o.label = i[2], o.ops.push(s);
                                break;
                            }
                            i[2] && o.ops.pop(), o.trys.pop();
                            continue;
                        }
                        s = t.call(e, o);
                    } catch (e) {
                        s = [ 6, e ], r = 0;
                    } finally {
                        n = i = 0;
                    }
                    if (5 & s[0]) throw s[1];
                    return {
                        value: s[0] ? s[1] : void 0,
                        done: !0
                    };
                }([ s, l ]);
            };
        }
    }
    var m = Object.create ? function(e, t, n, r) {
        void 0 === r && (r = n);
        var i = Object.getOwnPropertyDescriptor(t, n);
        i && !("get" in i ? !t.__esModule : i.writable || i.configurable) || (i = {
            enumerable: !0,
            get: function() {
                return t[n];
            }
        }), Object.defineProperty(e, r, i);
    } : function(e, t, n, r) {
        void 0 === r && (r = n), e[r] = t[n];
    };
    function g(e, t) {
        for (var n in e) "default" === n || Object.prototype.hasOwnProperty.call(t, n) || m(t, e, n);
    }
    function v(e) {
        var t = "function" == typeof Symbol && Symbol.iterator, n = t && e[t], r = 0;
        if (n) return n.call(e);
        if (e && "number" == typeof e.length) return {
            next: function() {
                return e && r >= e.length && (e = void 0), {
                    value: e && e[r++],
                    done: !e
                };
            }
        };
        throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }
    function y(e, t) {
        var n = "function" == typeof Symbol && e[Symbol.iterator];
        if (!n) return e;
        var r, i, o = n.call(e), a = [];
        try {
            for (;(void 0 === t || t-- > 0) && !(r = o.next()).done; ) a.push(r.value);
        } catch (e) {
            i = {
                error: e
            };
        } finally {
            try {
                r && !r.done && (n = o.return) && n.call(o);
            } finally {
                if (i) throw i.error;
            }
        }
        return a;
    }
    function E() {
        for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(y(arguments[t]));
        return e;
    }
    function b() {
        for (var e = 0, t = 0, n = arguments.length; t < n; t++) e += arguments[t].length;
        var r = Array(e), i = 0;
        for (t = 0; t < n; t++) for (var o = arguments[t], a = 0, s = o.length; a < s; a++, 
        i++) r[i] = o[a];
        return r;
    }
    function w(e, t, n) {
        if (n || 2 === arguments.length) for (var r, i = 0, o = t.length; i < o; i++) !r && i in t || (r || (r = Array.prototype.slice.call(t, 0, i)), 
        r[i] = t[i]);
        return e.concat(r || Array.prototype.slice.call(t));
    }
    function S(e) {
        return this instanceof S ? (this.v = e, this) : new S(e);
    }
    function T(e, t, n) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var r, i = n.apply(e, t || []), o = [];
        return r = Object.create(("function" == typeof AsyncIterator ? AsyncIterator : Object).prototype), 
        a("next"), a("throw"), a("return", function(e) {
            return function(t) {
                return Promise.resolve(t).then(e, c);
            };
        }), r[Symbol.asyncIterator] = function() {
            return this;
        }, r;
        function a(e, t) {
            i[e] && (r[e] = function(t) {
                return new Promise(function(n, r) {
                    o.push([ e, t, n, r ]) > 1 || s(e, t);
                });
            }, t && (r[e] = t(r[e])));
        }
        function s(e, t) {
            try {
                (n = i[e](t)).value instanceof S ? Promise.resolve(n.value.v).then(l, c) : u(o[0][2], n);
            } catch (e) {
                u(o[0][3], e);
            }
            var n;
        }
        function l(e) {
            s("next", e);
        }
        function c(e) {
            s("throw", e);
        }
        function u(e, t) {
            e(t), o.shift(), o.length && s(o[0][0], o[0][1]);
        }
    }
    function A(e) {
        var t, n;
        return t = {}, r("next"), r("throw", function(e) {
            throw e;
        }), r("return"), t[Symbol.iterator] = function() {
            return this;
        }, t;
        function r(r, i) {
            t[r] = e[r] ? function(t) {
                return (n = !n) ? {
                    value: S(e[r](t)),
                    done: !1
                } : i ? i(t) : t;
            } : i;
        }
    }
    function O(e) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var t, n = e[Symbol.asyncIterator];
        return n ? n.call(e) : (e = v(e), t = {}, r("next"), r("throw"), r("return"), t[Symbol.asyncIterator] = function() {
            return this;
        }, t);
        function r(n) {
            t[n] = e[n] && function(t) {
                return new Promise(function(r, i) {
                    (function(e, t, n, r) {
                        Promise.resolve(r).then(function(t) {
                            e({
                                value: t,
                                done: n
                            });
                        }, t);
                    })(r, i, (t = e[n](t)).done, t.value);
                });
            };
        }
    }
    function C(e, t) {
        return Object.defineProperty ? Object.defineProperty(e, "raw", {
            value: t
        }) : e.raw = t, e;
    }
    var N = Object.create ? function(e, t) {
        Object.defineProperty(e, "default", {
            enumerable: !0,
            value: t
        });
    } : function(e, t) {
        e.default = t;
    }, I = function(e) {
        return (I = Object.getOwnPropertyNames || function(e) {
            var t = [];
            for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[t.length] = n);
            return t;
        })(e);
    };
    function R(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e) for (var n = I(e), r = 0; r < n.length; r++) "default" !== n[r] && m(t, e, n[r]);
        return N(t, e), t;
    }
    function D(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    }
    function L(e, t, n, r) {
        if ("a" === n && !r) throw new TypeError("Private accessor was defined without a getter");
        if ("function" == typeof t ? e !== t || !r : !t.has(e)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
        return "m" === n ? r : "a" === n ? r.call(e) : r ? r.value : t.get(e);
    }
    function k(e, t, n, r, i) {
        if ("m" === r) throw new TypeError("Private method is not writable");
        if ("a" === r && !i) throw new TypeError("Private accessor was defined without a setter");
        if ("function" == typeof t ? e !== t || !i : !t.has(e)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
        return "a" === r ? i.call(e, n) : i ? i.value = n : t.set(e, n), n;
    }
    function M(e, t) {
        if (null === t || "object" != typeof t && "function" != typeof t) throw new TypeError("Cannot use 'in' operator on non-object");
        return "function" == typeof e ? t === e : e.has(t);
    }
    function P(e, t, n) {
        if (null != t) {
            if ("object" != typeof t && "function" != typeof t) throw new TypeError("Object expected.");
            var r, i;
            if (n) {
                if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
                r = t[Symbol.asyncDispose];
            }
            if (void 0 === r) {
                if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
                r = t[Symbol.dispose], n && (i = r);
            }
            if ("function" != typeof r) throw new TypeError("Object not disposable.");
            i && (r = function() {
                try {
                    i.call(this);
                } catch (e) {
                    return Promise.reject(e);
                }
            }), e.stack.push({
                value: t,
                dispose: r,
                async: n
            });
        } else n && e.stack.push({
            async: !0
        });
        return t;
    }
    var x = "function" == typeof SuppressedError ? SuppressedError : function(e, t, n) {
        var r = new Error(n);
        return r.name = "SuppressedError", r.error = e, r.suppressed = t, r;
    };
    function F(e) {
        function t(t) {
            e.error = e.hasError ? new x(t, e.error, "An error was suppressed during disposal.") : t, 
            e.hasError = !0;
        }
        var n, r = 0;
        return function i() {
            for (;n = e.stack.pop(); ) try {
                if (!n.async && 1 === r) return r = 0, e.stack.push(n), Promise.resolve().then(i);
                if (n.dispose) {
                    var o = n.dispose.call(n.value);
                    if (n.async) return r |= 2, Promise.resolve(o).then(i, function(e) {
                        return t(e), i();
                    });
                } else r |= 1;
            } catch (e) {
                t(e);
            }
            if (1 === r) return e.hasError ? Promise.reject(e.error) : Promise.resolve();
            if (e.hasError) throw e.error;
        }();
    }
    function j(e, t) {
        return "string" == typeof e && /^\.\.?\//.test(e) ? e.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i, function(e, n, r, i, o) {
            return n ? t ? ".jsx" : ".js" : !r || i && o ? r + i + "." + o.toLowerCase() + "js" : e;
        }) : e;
    }
    t.default = {
        __extends: i,
        __assign: o,
        __rest: a,
        __decorate: s,
        __param: l,
        __esDecorate: c,
        __runInitializers: u,
        __propKey: d,
        __setFunctionName: h,
        __metadata: p,
        __awaiter: f,
        __generator: _,
        __createBinding: m,
        __exportStar: g,
        __values: v,
        __read: y,
        __spread: E,
        __spreadArrays: b,
        __spreadArray: w,
        __await: S,
        __asyncGenerator: T,
        __asyncDelegator: A,
        __asyncValues: O,
        __makeTemplateObject: C,
        __importStar: R,
        __importDefault: D,
        __classPrivateFieldGet: L,
        __classPrivateFieldSet: k,
        __classPrivateFieldIn: M,
        __addDisposableResource: P,
        __disposeResources: F,
        __rewriteRelativeImportExtension: j
    };
}
