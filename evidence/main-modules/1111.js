// analysis/pretty/main.js:89479; webpack module 1111
function(e, t, n) {
    "use strict";
    e.exports = function(e, t, r, i) {
        var o, a, s, l, c = e._async, u = n(88).Warning, d = n(24), h = n(102), p = d.canAttachTrace, f = /[\\\/]bluebird[\\\/]js[\\\/](release|debug|instrumented)/, _ = /\((?:timers\.js):\d+:\d+\)/, m = /[\/<\(](.+?):(\d+):(\d+)\)?\s*$/, g = null, v = null, y = !1, E = !(0 == d.env("BLUEBIRD_DEBUG") || !d.env("BLUEBIRD_DEBUG") && "development" !== d.env("NODE_ENV")), b = !(0 == d.env("BLUEBIRD_WARNINGS") || !E && !d.env("BLUEBIRD_WARNINGS")), w = !(0 == d.env("BLUEBIRD_LONG_STACK_TRACES") || !E && !d.env("BLUEBIRD_LONG_STACK_TRACES")), S = 0 != d.env("BLUEBIRD_W_FORGOTTEN_RETURN") && (b || !!d.env("BLUEBIRD_W_FORGOTTEN_RETURN"));
        !function() {
            var t = [];
            function n() {
                for (var e = 0; e < t.length; ++e) t[e]._notifyUnhandledRejection();
                r();
            }
            function r() {
                t.length = 0;
            }
            l = function(e) {
                t.push(e), setTimeout(n, 1);
            }, h.defineProperty(e, "_unhandledRejectionCheck", {
                value: n
            }), h.defineProperty(e, "_unhandledRejectionClear", {
                value: r
            });
        }(), e.prototype.suppressUnhandledRejections = function() {
            var e = this._target();
            e._bitField = -1048577 & e._bitField | 524288;
        }, e.prototype._ensurePossibleRejectionHandled = function() {
            0 == (524288 & this._bitField) && (this._setRejectionIsUnhandled(), l(this));
        }, e.prototype._notifyUnhandledRejectionIsHandled = function() {
            q("rejectionHandled", o, void 0, this);
        }, e.prototype._setReturnedNonUndefined = function() {
            this._bitField = 268435456 | this._bitField;
        }, e.prototype._returnedNonUndefined = function() {
            return 0 != (268435456 & this._bitField);
        }, e.prototype._notifyUnhandledRejection = function() {
            if (this._isRejectionUnhandled()) {
                var e = this._settledValue();
                this._setUnhandledRejectionIsNotified(), q("unhandledRejection", a, e, this);
            }
        }, e.prototype._setUnhandledRejectionIsNotified = function() {
            this._bitField = 262144 | this._bitField;
        }, e.prototype._unsetUnhandledRejectionIsNotified = function() {
            this._bitField = -262145 & this._bitField;
        }, e.prototype._isUnhandledRejectionNotified = function() {
            return (262144 & this._bitField) > 0;
        }, e.prototype._setRejectionIsUnhandled = function() {
            this._bitField = 1048576 | this._bitField;
        }, e.prototype._unsetRejectionIsUnhandled = function() {
            this._bitField = -1048577 & this._bitField, this._isUnhandledRejectionNotified() && (this._unsetUnhandledRejectionIsNotified(), 
            this._notifyUnhandledRejectionIsHandled());
        }, e.prototype._isRejectionUnhandled = function() {
            return (1048576 & this._bitField) > 0;
        }, e.prototype._warn = function(e, t, n) {
            return $(e, t, n || this);
        }, e.onPossiblyUnhandledRejection = function(t) {
            var n = e._getContext();
            a = d.contextBind(n, t);
        }, e.onUnhandledRejectionHandled = function(t) {
            var n = e._getContext();
            o = d.contextBind(n, t);
        };
        var T = function() {};
        e.longStackTraces = function() {
            if (c.haveItemsQueued() && !te.longStackTraces) throw new Error("cannot enable long stack traces after promises have been created\n\n    See http://goo.gl/MqrFmX\n");
            if (!te.longStackTraces && K()) {
                var n = e.prototype._captureStackTrace, r = e.prototype._attachExtraTrace, i = e.prototype._dereferenceTrace;
                te.longStackTraces = !0, T = function() {
                    if (c.haveItemsQueued() && !te.longStackTraces) throw new Error("cannot enable long stack traces after promises have been created\n\n    See http://goo.gl/MqrFmX\n");
                    e.prototype._captureStackTrace = n, e.prototype._attachExtraTrace = r, e.prototype._dereferenceTrace = i, 
                    t.deactivateLongStackTraces(), te.longStackTraces = !1;
                }, e.prototype._captureStackTrace = W, e.prototype._attachExtraTrace = B, e.prototype._dereferenceTrace = H, 
                t.activateLongStackTraces();
            }
        }, e.hasLongStackTraces = function() {
            return te.longStackTraces && K();
        };
        var A = {
            unhandledrejection: {
                before: function() {
                    var e = d.global.onunhandledrejection;
                    return d.global.onunhandledrejection = null, e;
                },
                after: function(e) {
                    d.global.onunhandledrejection = e;
                }
            },
            rejectionhandled: {
                before: function() {
                    var e = d.global.onrejectionhandled;
                    return d.global.onrejectionhandled = null, e;
                },
                after: function(e) {
                    d.global.onrejectionhandled = e;
                }
            }
        }, O = function() {
            var e = function(e, t) {
                if (!e) return !d.global.dispatchEvent(t);
                var n;
                try {
                    return n = e.before(), !d.global.dispatchEvent(t);
                } finally {
                    e.after(n);
                }
            };
            try {
                if ("function" == typeof CustomEvent) {
                    var t = new CustomEvent("CustomEvent");
                    return d.global.dispatchEvent(t), function(t, n) {
                        t = t.toLowerCase();
                        var r = new CustomEvent(t, {
                            detail: n,
                            cancelable: !0
                        });
                        return h.defineProperty(r, "promise", {
                            value: n.promise
                        }), h.defineProperty(r, "reason", {
                            value: n.reason
                        }), e(A[t], r);
                    };
                }
                if ("function" == typeof Event) {
                    t = new Event("CustomEvent");
                    return d.global.dispatchEvent(t), function(t, n) {
                        t = t.toLowerCase();
                        var r = new Event(t, {
                            cancelable: !0
                        });
                        return r.detail = n, h.defineProperty(r, "promise", {
                            value: n.promise
                        }), h.defineProperty(r, "reason", {
                            value: n.reason
                        }), e(A[t], r);
                    };
                }
                return (t = document.createEvent("CustomEvent")).initCustomEvent("testingtheevent", !1, !0, {}), 
                d.global.dispatchEvent(t), function(t, n) {
                    t = t.toLowerCase();
                    var r = document.createEvent("CustomEvent");
                    return r.initCustomEvent(t, !1, !0, n), e(A[t], r);
                };
            } catch (e) {}
            return function() {
                return !1;
            };
        }(), C = d.isNode ? function() {
            return process.emit.apply(process, arguments);
        } : d.global ? function(e) {
            var t = "on" + e.toLowerCase(), n = d.global[t];
            return !!n && (n.apply(d.global, [].slice.call(arguments, 1)), !0);
        } : function() {
            return !1;
        };
        function N(e, t) {
            return {
                promise: t
            };
        }
        var I = {
            promiseCreated: N,
            promiseFulfilled: N,
            promiseRejected: N,
            promiseResolved: N,
            promiseCancelled: N,
            promiseChained: function(e, t, n) {
                return {
                    promise: t,
                    child: n
                };
            },
            warning: function(e, t) {
                return {
                    warning: t
                };
            },
            unhandledRejection: function(e, t, n) {
                return {
                    reason: t,
                    promise: n
                };
            },
            rejectionHandled: N
        }, R = function(e) {
            var t = !1;
            try {
                t = C.apply(null, arguments);
            } catch (e) {
                c.throwLater(e), t = !0;
            }
            var n = !1;
            try {
                n = O(e, I[e].apply(null, arguments));
            } catch (e) {
                c.throwLater(e), n = !0;
            }
            return n || t;
        };
        function D() {
            return !1;
        }
        function L(e, t, n) {
            var r = this;
            try {
                e(t, n, function(e) {
                    if ("function" != typeof e) throw new TypeError("onCancel must be a function, got: " + d.toString(e));
                    r._attachCancellationCallback(e);
                });
            } catch (e) {
                return e;
            }
        }
        function k(e) {
            if (!this._isCancellable()) return this;
            var t = this._onCancel();
            void 0 !== t ? d.isArray(t) ? t.push(e) : this._setOnCancel([ t, e ]) : this._setOnCancel(e);
        }
        function M() {
            return this._onCancelField;
        }
        function P(e) {
            this._onCancelField = e;
        }
        function x() {
            this._cancellationParent = void 0, this._onCancelField = void 0;
        }
        function F(e, t) {
            if (0 != (1 & t)) {
                this._cancellationParent = e;
                var n = e._branchesRemainingToCancel;
                void 0 === n && (n = 0), e._branchesRemainingToCancel = n + 1;
            }
            0 != (2 & t) && e._isBound() && this._setBoundTo(e._boundTo);
        }
        e.config = function(t) {
            if ("longStackTraces" in (t = Object(t)) && (t.longStackTraces ? e.longStackTraces() : !t.longStackTraces && e.hasLongStackTraces() && T()), 
            "warnings" in t) {
                var n = t.warnings;
                te.warnings = !!n, S = te.warnings, d.isObject(n) && "wForgottenReturn" in n && (S = !!n.wForgottenReturn);
            }
            if ("cancellation" in t && t.cancellation && !te.cancellation) {
                if (c.haveItemsQueued()) throw new Error("cannot enable cancellation after promises are in use");
                e.prototype._clearCancellationData = x, e.prototype._propagateFrom = F, e.prototype._onCancel = M, 
                e.prototype._setOnCancel = P, e.prototype._attachCancellationCallback = k, e.prototype._execute = L, 
                j = F, te.cancellation = !0;
            }
            if ("monitoring" in t && (t.monitoring && !te.monitoring ? (te.monitoring = !0, 
            e.prototype._fireEvent = R) : !t.monitoring && te.monitoring && (te.monitoring = !1, 
            e.prototype._fireEvent = D)), "asyncHooks" in t && d.nodeSupportsAsyncResource) {
                var o = te.asyncHooks, a = !!t.asyncHooks;
                o !== a && (te.asyncHooks = a, a ? r() : i());
            }
            return e;
        }, e.prototype._fireEvent = D, e.prototype._execute = function(e, t, n) {
            try {
                e(t, n);
            } catch (e) {
                return e;
            }
        }, e.prototype._onCancel = function() {}, e.prototype._setOnCancel = function(e) {}, 
        e.prototype._attachCancellationCallback = function(e) {}, e.prototype._captureStackTrace = function() {}, 
        e.prototype._attachExtraTrace = function() {}, e.prototype._dereferenceTrace = function() {}, 
        e.prototype._clearCancellationData = function() {}, e.prototype._propagateFrom = function(e, t) {};
        var j = function(e, t) {
            0 != (2 & t) && e._isBound() && this._setBoundTo(e._boundTo);
        };
        function U() {
            var t = this._boundTo;
            return void 0 !== t && t instanceof e ? t.isFulfilled() ? t.value() : void 0 : t;
        }
        function W() {
            this._trace = new Z(this._peekContext());
        }
        function B(e, t) {
            if (p(e)) {
                var n = this._trace;
                if (void 0 !== n && t && (n = n._parent), void 0 !== n) n.attachExtraTrace(e); else if (!e.__stackCleaned__) {
                    var r = z(e);
                    d.notEnumerableProp(e, "stack", r.message + "\n" + r.stack.join("\n")), d.notEnumerableProp(e, "__stackCleaned__", !0);
                }
            }
        }
        function H() {
            this._trace = void 0;
        }
        function $(t, n, r) {
            if (te.warnings) {
                var i, o = new u(t);
                if (n) r._attachExtraTrace(o); else if (te.longStackTraces && (i = e._peekContext())) i.attachExtraTrace(o); else {
                    var a = z(o);
                    o.stack = a.message + "\n" + a.stack.join("\n");
                }
                R("warning", o) || G(o, "", !0);
            }
        }
        function Y(e) {
            for (var t = [], n = 0; n < e.length; ++n) {
                var r = e[n], i = "    (No stack trace)" === r || g.test(r), o = i && J(r);
                i && !o && (y && " " !== r.charAt(0) && (r = "    " + r), t.push(r));
            }
            return t;
        }
        function z(e) {
            var t = e.stack, n = e.toString();
            return t = "string" == typeof t && t.length > 0 ? function(e) {
                for (var t = e.stack.replace(/\s+$/g, "").split("\n"), n = 0; n < t.length; ++n) {
                    var r = t[n];
                    if ("    (No stack trace)" === r || g.test(r)) break;
                }
                return n > 0 && "SyntaxError" != e.name && (t = t.slice(n)), t;
            }(e) : [ "    (No stack trace)" ], {
                message: n,
                stack: "SyntaxError" == e.name ? t : Y(t)
            };
        }
        function G(e, t, n) {
            if ("undefined" != typeof console) {
                var r;
                if (d.isObject(e)) {
                    var i = e.stack;
                    r = t + v(i, e);
                } else r = t + String(e);
                "function" == typeof s ? s(r, n) : "function" != typeof console.log && "object" != typeof console.log || console.log(r);
            }
        }
        function q(e, t, n, r) {
            var i = !1;
            try {
                "function" == typeof t && (i = !0, "rejectionHandled" === e ? t(r) : t(n, r));
            } catch (e) {
                c.throwLater(e);
            }
            "unhandledRejection" === e ? R(e, n, r) || i || G(n, "Unhandled rejection ") : R(e, r);
        }
        function V(e) {
            var t;
            if ("function" == typeof e) t = "[function " + (e.name || "anonymous") + "]"; else {
                t = e && "function" == typeof e.toString ? e.toString() : d.toString(e);
                if (/\[object [a-zA-Z0-9$_]+\]/.test(t)) try {
                    t = JSON.stringify(e);
                } catch (e) {}
                0 === t.length && (t = "(empty array)");
            }
            return "(<" + function(e) {
                if (e.length < 41) return e;
                return e.substr(0, 38) + "...";
            }(t) + ">, no stack trace)";
        }
        function K() {
            return "function" == typeof ee;
        }
        var J = function() {
            return !1;
        }, X = /[\/<\(]([^:\/]+):(\d+):(?:\d+)\)?\s*$/;
        function Q(e) {
            var t = e.match(X);
            if (t) return {
                fileName: t[1],
                line: parseInt(t[2], 10)
            };
        }
        function Z(e) {
            this._parent = e, this._promisesCreated = 0;
            var t = this._length = 1 + (void 0 === e ? 0 : e._length);
            ee(this, Z), t > 32 && this.uncycle();
        }
        d.inherits(Z, Error), t.CapturedTrace = Z, Z.prototype.uncycle = function() {
            var e = this._length;
            if (!(e < 2)) {
                for (var t = [], n = {}, r = 0, i = this; void 0 !== i; ++r) t.push(i), i = i._parent;
                for (r = (e = this._length = r) - 1; r >= 0; --r) {
                    var o = t[r].stack;
                    void 0 === n[o] && (n[o] = r);
                }
                for (r = 0; r < e; ++r) {
                    var a = n[t[r].stack];
                    if (void 0 !== a && a !== r) {
                        a > 0 && (t[a - 1]._parent = void 0, t[a - 1]._length = 1), t[r]._parent = void 0, 
                        t[r]._length = 1;
                        var s = r > 0 ? t[r - 1] : this;
                        a < e - 1 ? (s._parent = t[a + 1], s._parent.uncycle(), s._length = s._parent._length + 1) : (s._parent = void 0, 
                        s._length = 1);
                        for (var l = s._length + 1, c = r - 2; c >= 0; --c) t[c]._length = l, l++;
                        return;
                    }
                }
            }
        }, Z.prototype.attachExtraTrace = function(e) {
            if (!e.__stackCleaned__) {
                this.uncycle();
                for (var t = z(e), n = t.message, r = [ t.stack ], i = this; void 0 !== i; ) r.push(Y(i.stack.split("\n"))), 
                i = i._parent;
                !function(e) {
                    for (var t = e[0], n = 1; n < e.length; ++n) {
                        for (var r = e[n], i = t.length - 1, o = t[i], a = -1, s = r.length - 1; s >= 0; --s) if (r[s] === o) {
                            a = s;
                            break;
                        }
                        for (s = a; s >= 0; --s) {
                            var l = r[s];
                            if (t[i] !== l) break;
                            t.pop(), i--;
                        }
                        t = r;
                    }
                }(r), function(e) {
                    for (var t = 0; t < e.length; ++t) (0 === e[t].length || t + 1 < e.length && e[t][0] === e[t + 1][0]) && (e.splice(t, 1), 
                    t--);
                }(r), d.notEnumerableProp(e, "stack", function(e, t) {
                    for (var n = 0; n < t.length - 1; ++n) t[n].push("From previous event:"), t[n] = t[n].join("\n");
                    return n < t.length && (t[n] = t[n].join("\n")), e + "\n" + t.join("\n");
                }(n, r)), d.notEnumerableProp(e, "__stackCleaned__", !0);
            }
        };
        var ee = function() {
            var e = /^\s*at\s*/, t = function(e, t) {
                return "string" == typeof e ? e : void 0 !== t.name && void 0 !== t.message ? t.toString() : V(t);
            };
            if ("number" == typeof Error.stackTraceLimit && "function" == typeof Error.captureStackTrace) {
                Error.stackTraceLimit += 6, g = e, v = t;
                var n = Error.captureStackTrace;
                return J = function(e) {
                    return f.test(e);
                }, function(e, t) {
                    Error.stackTraceLimit += 6, n(e, t), Error.stackTraceLimit -= 6;
                };
            }
            var r, i = new Error;
            if ("string" == typeof i.stack && i.stack.split("\n")[0].indexOf("stackDetection@") >= 0) return g = /@/, 
            v = t, y = !0, function(e) {
                e.stack = (new Error).stack;
            };
            try {
                throw new Error;
            } catch (e) {
                r = "stack" in e;
            }
            return !("stack" in i) && r && "number" == typeof Error.stackTraceLimit ? (g = e, 
            v = t, function(e) {
                Error.stackTraceLimit += 6;
                try {
                    throw new Error;
                } catch (t) {
                    e.stack = t.stack;
                }
                Error.stackTraceLimit -= 6;
            }) : (v = function(e, t) {
                return "string" == typeof e ? e : "object" != typeof t && "function" != typeof t || void 0 === t.name || void 0 === t.message ? V(t) : t.toString();
            }, null);
        }();
        "undefined" != typeof console && void 0 !== console.warn && (s = function(e) {
            console.warn(e);
        }, d.isNode && process.stderr.isTTY ? s = function(e, t) {
            var n = t ? "[33m" : "[31m";
            console.warn(n + e + "[0m\n");
        } : d.isNode || "string" != typeof (new Error).stack || (s = function(e, t) {
            console.warn("%c" + e, t ? "color: darkorange" : "color: red");
        }));
        var te = {
            warnings: b,
            longStackTraces: !1,
            cancellation: !1,
            monitoring: !1,
            asyncHooks: !1
        };
        return w && e.longStackTraces(), {
            asyncHooks: function() {
                return te.asyncHooks;
            },
            longStackTraces: function() {
                return te.longStackTraces;
            },
            warnings: function() {
                return te.warnings;
            },
            cancellation: function() {
                return te.cancellation;
            },
            monitoring: function() {
                return te.monitoring;
            },
            propagateFromFunction: function() {
                return j;
            },
            boundValueFunction: function() {
                return U;
            },
            checkForgottenReturns: function(e, t, n, r, i) {
                if (void 0 === e && null !== t && S) {
                    if (void 0 !== i && i._returnedNonUndefined()) return;
                    if (0 == (65535 & r._bitField)) return;
                    n && (n += " ");
                    var o = "", a = "";
                    if (t._trace) {
                        for (var s = t._trace.stack.split("\n"), l = Y(s), c = l.length - 1; c >= 0; --c) {
                            var u = l[c];
                            if (!_.test(u)) {
                                var d = u.match(m);
                                d && (o = "at " + d[1] + ":" + d[2] + ":" + d[3] + " ");
                                break;
                            }
                        }
                        if (l.length > 0) {
                            var h = l[0];
                            for (c = 0; c < s.length; ++c) if (s[c] === h) {
                                c > 0 && (a = "\n" + s[c - 1]);
                                break;
                            }
                        }
                    }
                    var p = "a promise was created in a " + n + "handler " + o + "but was not returned from it, see http://goo.gl/rRqMUw" + a;
                    r._warn(p, !0, t);
                }
            },
            setBounds: function(e, t) {
                if (K()) {
                    for (var n, r, i = (e.stack || "").split("\n"), o = (t.stack || "").split("\n"), a = -1, s = -1, l = 0; l < i.length; ++l) {
                        if (c = Q(i[l])) {
                            n = c.fileName, a = c.line;
                            break;
                        }
                    }
                    for (l = 0; l < o.length; ++l) {
                        var c;
                        if (c = Q(o[l])) {
                            r = c.fileName, s = c.line;
                            break;
                        }
                    }
                    a < 0 || s < 0 || !n || !r || n !== r || a >= s || (J = function(e) {
                        if (f.test(e)) return !0;
                        var t = Q(e);
                        return !!(t && t.fileName === n && a <= t.line && t.line <= s);
                    });
                }
            },
            warn: $,
            deprecated: function(e, t) {
                var n = e + " is deprecated and will be removed in a future version.";
                return t && (n += " Use " + t + " instead."), $(n);
            },
            CapturedTrace: Z,
            fireDomEvent: O,
            fireGlobalEvent: C
        };
    };
}
