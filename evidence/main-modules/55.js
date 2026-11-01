// analysis/pretty/main.js:10255; webpack module 55
function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, "default", function() {
        return bn;
    }), n.d(t, "Axios", function() {
        return wn;
    }), n.d(t, "AxiosError", function() {
        return Sn;
    }), n.d(t, "CanceledError", function() {
        return Tn;
    }), n.d(t, "isCancel", function() {
        return An;
    }), n.d(t, "CancelToken", function() {
        return On;
    }), n.d(t, "VERSION", function() {
        return Cn;
    }), n.d(t, "all", function() {
        return Nn;
    }), n.d(t, "Cancel", function() {
        return In;
    }), n.d(t, "isAxiosError", function() {
        return Rn;
    }), n.d(t, "spread", function() {
        return Dn;
    }), n.d(t, "toFormData", function() {
        return Ln;
    }), n.d(t, "AxiosHeaders", function() {
        return kn;
    }), n.d(t, "HttpStatusCode", function() {
        return Mn;
    }), n.d(t, "formToJSON", function() {
        return Pn;
    }), n.d(t, "getAdapter", function() {
        return xn;
    }), n.d(t, "mergeConfig", function() {
        return Fn;
    });
    var r = {};
    function i(e, t) {
        return function() {
            return e.apply(t, arguments);
        };
    }
    n.r(r), n.d(r, "hasBrowserEnv", function() {
        return be;
    }), n.d(r, "hasStandardBrowserWebWorkerEnv", function() {
        return Te;
    }), n.d(r, "hasStandardBrowserEnv", function() {
        return Se;
    }), n.d(r, "navigator", function() {
        return we;
    }), n.d(r, "origin", function() {
        return Ae;
    });
    const {toString: o} = Object.prototype, {getPrototypeOf: a} = Object, {iterator: s, toStringTag: l} = Symbol, c = (u = Object.create(null), 
    e => {
        const t = o.call(e);
        return u[t] || (u[t] = t.slice(8, -1).toLowerCase());
    });
    var u;
    const d = e => (e = e.toLowerCase(), t => c(t) === e), h = e => t => typeof t === e, {isArray: p} = Array, f = h("undefined");
    function _(e) {
        return null !== e && !f(e) && null !== e.constructor && !f(e.constructor) && v(e.constructor.isBuffer) && e.constructor.isBuffer(e);
    }
    const m = d("ArrayBuffer");
    const g = h("string"), v = h("function"), y = h("number"), E = e => null !== e && "object" == typeof e, b = e => {
        if ("object" !== c(e)) return !1;
        const t = a(e);
        return !(null !== t && t !== Object.prototype && null !== Object.getPrototypeOf(t) || l in e || s in e);
    }, w = d("Date"), S = d("File"), T = d("Blob"), A = d("FileList"), O = d("URLSearchParams"), [C, N, I, R] = [ "ReadableStream", "Request", "Response", "Headers" ].map(d);
    function D(e, t, {allOwnKeys: n = !1} = {}) {
        if (null == e) return;
        let r, i;
        if ("object" != typeof e && (e = [ e ]), p(e)) for (r = 0, i = e.length; r < i; r++) t.call(null, e[r], r, e); else {
            if (_(e)) return;
            const i = n ? Object.getOwnPropertyNames(e) : Object.keys(e), o = i.length;
            let a;
            for (r = 0; r < o; r++) a = i[r], t.call(null, e[a], a, e);
        }
    }
    function L(e, t) {
        if (_(e)) return null;
        t = t.toLowerCase();
        const n = Object.keys(e);
        let r, i = n.length;
        for (;i-- > 0; ) if (r = n[i], t === r.toLowerCase()) return r;
        return null;
    }
    const k = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof window ? window : global, M = e => !f(e) && e !== k;
    const P = (x = "undefined" != typeof Uint8Array && a(Uint8Array), e => x && e instanceof x);
    var x;
    const F = d("HTMLFormElement"), j = (({hasOwnProperty: e}) => (t, n) => e.call(t, n))(Object.prototype), U = d("RegExp"), W = (e, t) => {
        const n = Object.getOwnPropertyDescriptors(e), r = {};
        D(n, (n, i) => {
            let o;
            !1 !== (o = t(n, i, e)) && (r[i] = o || n);
        }), Object.defineProperties(e, r);
    };
    const B = d("AsyncFunction"), H = ($ = "function" == typeof setImmediate, Y = v(k.postMessage), 
    $ ? setImmediate : Y ? (z = "axios@" + Math.random(), G = [], k.addEventListener("message", ({source: e, data: t}) => {
        e === k && t === z && G.length && G.shift()();
    }, !1), e => {
        G.push(e), k.postMessage(z, "*");
    }) : e => setTimeout(e));
    var $, Y, z, G;
    const q = "undefined" != typeof queueMicrotask ? queueMicrotask.bind(k) : "undefined" != typeof process && process.nextTick || H;
    var V = {
        isArray: p,
        isArrayBuffer: m,
        isBuffer: _,
        isFormData: e => {
            let t;
            return e && ("function" == typeof FormData && e instanceof FormData || v(e.append) && ("formdata" === (t = c(e)) || "object" === t && v(e.toString) && "[object FormData]" === e.toString()));
        },
        isArrayBufferView: function(e) {
            let t;
            return t = "undefined" != typeof ArrayBuffer && ArrayBuffer.isView ? ArrayBuffer.isView(e) : e && e.buffer && m(e.buffer), 
            t;
        },
        isString: g,
        isNumber: y,
        isBoolean: e => !0 === e || !1 === e,
        isObject: E,
        isPlainObject: b,
        isEmptyObject: e => {
            if (!E(e) || _(e)) return !1;
            try {
                return 0 === Object.keys(e).length && Object.getPrototypeOf(e) === Object.prototype;
            } catch (e) {
                return !1;
            }
        },
        isReadableStream: C,
        isRequest: N,
        isResponse: I,
        isHeaders: R,
        isUndefined: f,
        isDate: w,
        isFile: S,
        isBlob: T,
        isRegExp: U,
        isFunction: v,
        isStream: e => E(e) && v(e.pipe),
        isURLSearchParams: O,
        isTypedArray: P,
        isFileList: A,
        forEach: D,
        merge: function e() {
            const {caseless: t, skipUndefined: n} = M(this) && this || {}, r = {}, i = (i, o) => {
                const a = t && L(r, o) || o;
                b(r[a]) && b(i) ? r[a] = e(r[a], i) : b(i) ? r[a] = e({}, i) : p(i) ? r[a] = i.slice() : n && f(i) || (r[a] = i);
            };
            for (let e = 0, t = arguments.length; e < t; e++) arguments[e] && D(arguments[e], i);
            return r;
        },
        extend: (e, t, n, {allOwnKeys: r} = {}) => (D(t, (t, r) => {
            n && v(t) ? e[r] = i(t, n) : e[r] = t;
        }, {
            allOwnKeys: r
        }), e),
        trim: e => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, ""),
        stripBOM: e => (65279 === e.charCodeAt(0) && (e = e.slice(1)), e),
        inherits: (e, t, n, r) => {
            e.prototype = Object.create(t.prototype, r), e.prototype.constructor = e, Object.defineProperty(e, "super", {
                value: t.prototype
            }), n && Object.assign(e.prototype, n);
        },
        toFlatObject: (e, t, n, r) => {
            let i, o, s;
            const l = {};
            if (t = t || {}, null == e) return t;
            do {
                for (i = Object.getOwnPropertyNames(e), o = i.length; o-- > 0; ) s = i[o], r && !r(s, e, t) || l[s] || (t[s] = e[s], 
                l[s] = !0);
                e = !1 !== n && a(e);
            } while (e && (!n || n(e, t)) && e !== Object.prototype);
            return t;
        },
        kindOf: c,
        kindOfTest: d,
        endsWith: (e, t, n) => {
            e = String(e), (void 0 === n || n > e.length) && (n = e.length), n -= t.length;
            const r = e.indexOf(t, n);
            return -1 !== r && r === n;
        },
        toArray: e => {
            if (!e) return null;
            if (p(e)) return e;
            let t = e.length;
            if (!y(t)) return null;
            const n = new Array(t);
            for (;t-- > 0; ) n[t] = e[t];
            return n;
        },
        forEachEntry: (e, t) => {
            const n = (e && e[s]).call(e);
            let r;
            for (;(r = n.next()) && !r.done; ) {
                const n = r.value;
                t.call(e, n[0], n[1]);
            }
        },
        matchAll: (e, t) => {
            let n;
            const r = [];
            for (;null !== (n = e.exec(t)); ) r.push(n);
            return r;
        },
        isHTMLForm: F,
        hasOwnProperty: j,
        hasOwnProp: j,
        reduceDescriptors: W,
        freezeMethods: e => {
            W(e, (t, n) => {
                if (v(e) && -1 !== [ "arguments", "caller", "callee" ].indexOf(n)) return !1;
                const r = e[n];
                v(r) && (t.enumerable = !1, "writable" in t ? t.writable = !1 : t.set || (t.set = () => {
                    throw Error("Can not rewrite read-only method '" + n + "'");
                }));
            });
        },
        toObjectSet: (e, t) => {
            const n = {}, r = e => {
                e.forEach(e => {
                    n[e] = !0;
                });
            };
            return p(e) ? r(e) : r(String(e).split(t)), n;
        },
        toCamelCase: e => e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function(e, t, n) {
            return t.toUpperCase() + n;
        }),
        noop: () => {},
        toFiniteNumber: (e, t) => null != e && Number.isFinite(e = +e) ? e : t,
        findKey: L,
        global: k,
        isContextDefined: M,
        isSpecCompliantForm: function(e) {
            return !!(e && v(e.append) && "FormData" === e[l] && e[s]);
        },
        toJSONObject: e => {
            const t = new Array(10), n = (e, r) => {
                if (E(e)) {
                    if (t.indexOf(e) >= 0) return;
                    if (_(e)) return e;
                    if (!("toJSON" in e)) {
                        t[r] = e;
                        const i = p(e) ? [] : {};
                        return D(e, (e, t) => {
                            const o = n(e, r + 1);
                            !f(o) && (i[t] = o);
                        }), t[r] = void 0, i;
                    }
                }
                return e;
            };
            return n(e, 0);
        },
        isAsyncFn: B,
        isThenable: e => e && (E(e) || v(e)) && v(e.then) && v(e.catch),
        setImmediate: H,
        asap: q,
        isIterable: e => null != e && v(e[s])
    };
    function K(e, t, n, r, i) {
        Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = (new Error).stack, 
        this.message = e, this.name = "AxiosError", t && (this.code = t), n && (this.config = n), 
        r && (this.request = r), i && (this.response = i, this.status = i.status ? i.status : null);
    }
    V.inherits(K, Error, {
        toJSON: function() {
            return {
                message: this.message,
                name: this.name,
                description: this.description,
                number: this.number,
                fileName: this.fileName,
                lineNumber: this.lineNumber,
                columnNumber: this.columnNumber,
                stack: this.stack,
                config: V.toJSONObject(this.config),
                code: this.code,
                status: this.status
            };
        }
    });
    const J = K.prototype, X = {};
    [ "ERR_BAD_OPTION_VALUE", "ERR_BAD_OPTION", "ECONNABORTED", "ETIMEDOUT", "ERR_NETWORK", "ERR_FR_TOO_MANY_REDIRECTS", "ERR_DEPRECATED", "ERR_BAD_RESPONSE", "ERR_BAD_REQUEST", "ERR_CANCELED", "ERR_NOT_SUPPORT", "ERR_INVALID_URL" ].forEach(e => {
        X[e] = {
            value: e
        };
    }), Object.defineProperties(K, X), Object.defineProperty(J, "isAxiosError", {
        value: !0
    }), K.from = (e, t, n, r, i, o) => {
        const a = Object.create(J);
        V.toFlatObject(e, a, function(e) {
            return e !== Error.prototype;
        }, e => "isAxiosError" !== e);
        const s = e && e.message ? e.message : "Error", l = null == t && e ? e.code : t;
        return K.call(a, s, l, n, r, i), e && null == a.cause && Object.defineProperty(a, "cause", {
            value: e,
            configurable: !0
        }), a.name = e && e.name || "Error", o && Object.assign(a, o), a;
    };
    var Q = K, Z = n(804), ee = n.n(Z).a;
    function te(e) {
        return V.isPlainObject(e) || V.isArray(e);
    }
    function ne(e) {
        return V.endsWith(e, "[]") ? e.slice(0, -2) : e;
    }
    function re(e, t, n) {
        return e ? e.concat(t).map(function(e, t) {
            return e = ne(e), !n && t ? "[" + e + "]" : e;
        }).join(n ? "." : "") : t;
    }
    const ie = V.toFlatObject(V, {}, null, function(e) {
        return /^is[A-Z]/.test(e);
    });
    var oe = function(e, t, n) {
        if (!V.isObject(e)) throw new TypeError("target must be an object");
        t = t || new (ee || FormData);
        const r = (n = V.toFlatObject(n, {
            metaTokens: !0,
            dots: !1,
            indexes: !1
        }, !1, function(e, t) {
            return !V.isUndefined(t[e]);
        })).metaTokens, i = n.visitor || c, o = n.dots, a = n.indexes, s = (n.Blob || "undefined" != typeof Blob && Blob) && V.isSpecCompliantForm(t);
        if (!V.isFunction(i)) throw new TypeError("visitor must be a function");
        function l(e) {
            if (null === e) return "";
            if (V.isDate(e)) return e.toISOString();
            if (V.isBoolean(e)) return e.toString();
            if (!s && V.isBlob(e)) throw new Q("Blob is not supported. Use a Buffer instead.");
            return V.isArrayBuffer(e) || V.isTypedArray(e) ? s && "function" == typeof Blob ? new Blob([ e ]) : Buffer.from(e) : e;
        }
        function c(e, n, i) {
            let s = e;
            if (e && !i && "object" == typeof e) if (V.endsWith(n, "{}")) n = r ? n : n.slice(0, -2), 
            e = JSON.stringify(e); else if (V.isArray(e) && function(e) {
                return V.isArray(e) && !e.some(te);
            }(e) || (V.isFileList(e) || V.endsWith(n, "[]")) && (s = V.toArray(e))) return n = ne(n), 
            s.forEach(function(e, r) {
                !V.isUndefined(e) && null !== e && t.append(!0 === a ? re([ n ], r, o) : null === a ? n : n + "[]", l(e));
            }), !1;
            return !!te(e) || (t.append(re(i, n, o), l(e)), !1);
        }
        const u = [], d = Object.assign(ie, {
            defaultVisitor: c,
            convertValue: l,
            isVisitable: te
        });
        if (!V.isObject(e)) throw new TypeError("data must be an object");
        return function e(n, r) {
            if (!V.isUndefined(n)) {
                if (-1 !== u.indexOf(n)) throw Error("Circular reference detected in " + r.join("."));
                u.push(n), V.forEach(n, function(n, o) {
                    !0 === (!(V.isUndefined(n) || null === n) && i.call(t, n, V.isString(o) ? o.trim() : o, r, d)) && e(n, r ? r.concat(o) : [ o ]);
                }), u.pop();
            }
        }(e), t;
    };
    function ae(e) {
        const t = {
            "!": "%21",
            "'": "%27",
            "(": "%28",
            ")": "%29",
            "~": "%7E",
            "%20": "+",
            "%00": "\0"
        };
        return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function(e) {
            return t[e];
        });
    }
    function se(e, t) {
        this._pairs = [], e && oe(e, this, t);
    }
    const le = se.prototype;
    le.append = function(e, t) {
        this._pairs.push([ e, t ]);
    }, le.toString = function(e) {
        const t = e ? function(t) {
            return e.call(this, t, ae);
        } : ae;
        return this._pairs.map(function(e) {
            return t(e[0]) + "=" + t(e[1]);
        }, "").join("&");
    };
    var ce = se;
    function ue(e) {
        return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+");
    }
    function de(e, t, n) {
        if (!t) return e;
        const r = n && n.encode || ue;
        V.isFunction(n) && (n = {
            serialize: n
        });
        const i = n && n.serialize;
        let o;
        if (o = i ? i(t, n) : V.isURLSearchParams(t) ? t.toString() : new ce(t, n).toString(r), 
        o) {
            const t = e.indexOf("#");
            -1 !== t && (e = e.slice(0, t)), e += (-1 === e.indexOf("?") ? "?" : "&") + o;
        }
        return e;
    }
    var he = class {
        constructor() {
            this.handlers = [];
        }
        use(e, t, n) {
            return this.handlers.push({
                fulfilled: e,
                rejected: t,
                synchronous: !!n && n.synchronous,
                runWhen: n ? n.runWhen : null
            }), this.handlers.length - 1;
        }
        eject(e) {
            this.handlers[e] && (this.handlers[e] = null);
        }
        clear() {
            this.handlers && (this.handlers = []);
        }
        forEach(e) {
            V.forEach(this.handlers, function(t) {
                null !== t && e(t);
            });
        }
    }, pe = {
        silentJSONParsing: !0,
        forcedJSONParsing: !0,
        clarifyTimeoutError: !1
    }, fe = n(7), _e = n.n(fe), me = n(15), ge = n.n(me).a.URLSearchParams;
    const ve = "abcdefghijklmnopqrstuvwxyz", ye = {
        DIGIT: "0123456789",
        ALPHA: ve,
        ALPHA_DIGIT: ve + ve.toUpperCase() + "0123456789"
    };
    var Ee = {
        isNode: !0,
        classes: {
            URLSearchParams: ge,
            FormData: ee,
            Blob: "undefined" != typeof Blob && Blob || null
        },
        ALPHABET: ye,
        generateString: (e = 16, t = ye.ALPHA_DIGIT) => {
            let n = "";
            const {length: r} = t, i = new Uint32Array(e);
            _e.a.randomFillSync(i);
            for (let o = 0; o < e; o++) n += t[i[o] % r];
            return n;
        },
        protocols: [ "http", "https", "file", "data" ]
    };
    const be = "undefined" != typeof window && "undefined" != typeof document, we = "object" == typeof navigator && navigator || void 0, Se = be && (!we || [ "ReactNative", "NativeScript", "NS" ].indexOf(we.product) < 0), Te = "undefined" != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope && "function" == typeof self.importScripts, Ae = be && window.location.href || "http://localhost";
    var Oe = {
        ...r,
        ...Ee
    };
    var Ce = function(e) {
        function t(e, n, r, i) {
            let o = e[i++];
            if ("__proto__" === o) return !0;
            const a = Number.isFinite(+o), s = i >= e.length;
            if (o = !o && V.isArray(r) ? r.length : o, s) return V.hasOwnProp(r, o) ? r[o] = [ r[o], n ] : r[o] = n, 
            !a;
            r[o] && V.isObject(r[o]) || (r[o] = []);
            return t(e, n, r[o], i) && V.isArray(r[o]) && (r[o] = function(e) {
                const t = {}, n = Object.keys(e);
                let r;
                const i = n.length;
                let o;
                for (r = 0; r < i; r++) o = n[r], t[o] = e[o];
                return t;
            }(r[o])), !a;
        }
        if (V.isFormData(e) && V.isFunction(e.entries)) {
            const n = {};
            return V.forEachEntry(e, (e, r) => {
                t(function(e) {
                    return V.matchAll(/\w+|\[(\w*)]/g, e).map(e => "[]" === e[0] ? "" : e[1] || e[0]);
                }(e), r, n, 0);
            }), n;
        }
        return null;
    };
    const Ne = {
        transitional: pe,
        adapter: [ "xhr", "http", "fetch" ],
        transformRequest: [ function(e, t) {
            const n = t.getContentType() || "", r = n.indexOf("application/json") > -1, i = V.isObject(e);
            i && V.isHTMLForm(e) && (e = new FormData(e));
            if (V.isFormData(e)) return r ? JSON.stringify(Ce(e)) : e;
            if (V.isArrayBuffer(e) || V.isBuffer(e) || V.isStream(e) || V.isFile(e) || V.isBlob(e) || V.isReadableStream(e)) return e;
            if (V.isArrayBufferView(e)) return e.buffer;
            if (V.isURLSearchParams(e)) return t.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), 
            e.toString();
            let o;
            if (i) {
                if (n.indexOf("application/x-www-form-urlencoded") > -1) return function(e, t) {
                    return oe(e, new Oe.classes.URLSearchParams, {
                        visitor: function(e, t, n, r) {
                            return Oe.isNode && V.isBuffer(e) ? (this.append(t, e.toString("base64")), !1) : r.defaultVisitor.apply(this, arguments);
                        },
                        ...t
                    });
                }(e, this.formSerializer).toString();
                if ((o = V.isFileList(e)) || n.indexOf("multipart/form-data") > -1) {
                    const t = this.env && this.env.FormData;
                    return oe(o ? {
                        "files[]": e
                    } : e, t && new t, this.formSerializer);
                }
            }
            return i || r ? (t.setContentType("application/json", !1), function(e, t, n) {
                if (V.isString(e)) try {
                    return (t || JSON.parse)(e), V.trim(e);
                } catch (e) {
                    if ("SyntaxError" !== e.name) throw e;
                }
                return (n || JSON.stringify)(e);
            }(e)) : e;
        } ],
        transformResponse: [ function(e) {
            const t = this.transitional || Ne.transitional, n = t && t.forcedJSONParsing, r = "json" === this.responseType;
            if (V.isResponse(e) || V.isReadableStream(e)) return e;
            if (e && V.isString(e) && (n && !this.responseType || r)) {
                const n = !(t && t.silentJSONParsing) && r;
                try {
                    return JSON.parse(e, this.parseReviver);
                } catch (e) {
                    if (n) {
                        if ("SyntaxError" === e.name) throw Q.from(e, Q.ERR_BAD_RESPONSE, this, null, this.response);
                        throw e;
                    }
                }
            }
            return e;
        } ],
        timeout: 0,
        xsrfCookieName: "XSRF-TOKEN",
        xsrfHeaderName: "X-XSRF-TOKEN",
        maxContentLength: -1,
        maxBodyLength: -1,
        env: {
            FormData: Oe.classes.FormData,
            Blob: Oe.classes.Blob
        },
        validateStatus: function(e) {
            return e >= 200 && e < 300;
        },
        headers: {
            common: {
                Accept: "application/json, text/plain, */*",
                "Content-Type": void 0
            }
        }
    };
    V.forEach([ "delete", "get", "head", "post", "put", "patch" ], e => {
        Ne.headers[e] = {};
    });
    var Ie = Ne;
    const Re = V.toObjectSet([ "age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent" ]);
    const De = Symbol("internals");
    function Le(e) {
        return e && String(e).trim().toLowerCase();
    }
    function ke(e) {
        return !1 === e || null == e ? e : V.isArray(e) ? e.map(ke) : String(e);
    }
    function Me(e, t, n, r, i) {
        return V.isFunction(r) ? r.call(this, t, n) : (i && (t = n), V.isString(t) ? V.isString(r) ? -1 !== t.indexOf(r) : V.isRegExp(r) ? r.test(t) : void 0 : void 0);
    }
    class Pe {
        constructor(e) {
            e && this.set(e);
        }
        set(e, t, n) {
            const r = this;
            function i(e, t, n) {
                const i = Le(t);
                if (!i) throw new Error("header name must be a non-empty string");
                const o = V.findKey(r, i);
                (!o || void 0 === r[o] || !0 === n || void 0 === n && !1 !== r[o]) && (r[o || t] = ke(e));
            }
            const o = (e, t) => V.forEach(e, (e, n) => i(e, n, t));
            if (V.isPlainObject(e) || e instanceof this.constructor) o(e, t); else if (V.isString(e) && (e = e.trim()) && !/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim())) o((e => {
                const t = {};
                let n, r, i;
                return e && e.split("\n").forEach(function(e) {
                    i = e.indexOf(":"), n = e.substring(0, i).trim().toLowerCase(), r = e.substring(i + 1).trim(), 
                    !n || t[n] && Re[n] || ("set-cookie" === n ? t[n] ? t[n].push(r) : t[n] = [ r ] : t[n] = t[n] ? t[n] + ", " + r : r);
                }), t;
            })(e), t); else if (V.isObject(e) && V.isIterable(e)) {
                let n, r, i = {};
                for (const t of e) {
                    if (!V.isArray(t)) throw TypeError("Object iterator must return a key-value pair");
                    i[r = t[0]] = (n = i[r]) ? V.isArray(n) ? [ ...n, t[1] ] : [ n, t[1] ] : t[1];
                }
                o(i, t);
            } else null != e && i(t, e, n);
            return this;
        }
        get(e, t) {
            if (e = Le(e)) {
                const n = V.findKey(this, e);
                if (n) {
                    const e = this[n];
                    if (!t) return e;
                    if (!0 === t) return function(e) {
                        const t = Object.create(null), n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
                        let r;
                        for (;r = n.exec(e); ) t[r[1]] = r[2];
                        return t;
                    }(e);
                    if (V.isFunction(t)) return t.call(this, e, n);
                    if (V.isRegExp(t)) return t.exec(e);
                    throw new TypeError("parser must be boolean|regexp|function");
                }
            }
        }
        has(e, t) {
            if (e = Le(e)) {
                const n = V.findKey(this, e);
                return !(!n || void 0 === this[n] || t && !Me(0, this[n], n, t));
            }
            return !1;
        }
        delete(e, t) {
            const n = this;
            let r = !1;
            function i(e) {
                if (e = Le(e)) {
                    const i = V.findKey(n, e);
                    !i || t && !Me(0, n[i], i, t) || (delete n[i], r = !0);
                }
            }
            return V.isArray(e) ? e.forEach(i) : i(e), r;
        }
        clear(e) {
            const t = Object.keys(this);
            let n = t.length, r = !1;
            for (;n--; ) {
                const i = t[n];
                e && !Me(0, this[i], i, e, !0) || (delete this[i], r = !0);
            }
            return r;
        }
        normalize(e) {
            const t = this, n = {};
            return V.forEach(this, (r, i) => {
                const o = V.findKey(n, i);
                if (o) return t[o] = ke(r), void delete t[i];
                const a = e ? function(e) {
                    return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (e, t, n) => t.toUpperCase() + n);
                }(i) : String(i).trim();
                a !== i && delete t[i], t[a] = ke(r), n[a] = !0;
            }), this;
        }
        concat(...e) {
            return this.constructor.concat(this, ...e);
        }
        toJSON(e) {
            const t = Object.create(null);
            return V.forEach(this, (n, r) => {
                null != n && !1 !== n && (t[r] = e && V.isArray(n) ? n.join(", ") : n);
            }), t;
        }
        [Symbol.iterator]() {
            return Object.entries(this.toJSON())[Symbol.iterator]();
        }
        toString() {
            return Object.entries(this.toJSON()).map(([e, t]) => e + ": " + t).join("\n");
        }
        getSetCookie() {
            return this.get("set-cookie") || [];
        }
        get [Symbol.toStringTag]() {
            return "AxiosHeaders";
        }
        static from(e) {
            return e instanceof this ? e : new this(e);
        }
        static concat(e, ...t) {
            const n = new this(e);
            return t.forEach(e => n.set(e)), n;
        }
        static accessor(e) {
            const t = (this[De] = this[De] = {
                accessors: {}
            }).accessors, n = this.prototype;
            function r(e) {
                const r = Le(e);
                t[r] || (!function(e, t) {
                    const n = V.toCamelCase(" " + t);
                    [ "get", "set", "has" ].forEach(r => {
                        Object.defineProperty(e, r + n, {
                            value: function(e, n, i) {
                                return this[r].call(this, t, e, n, i);
                            },
                            configurable: !0
                        });
                    });
                }(n, e), t[r] = !0);
            }
            return V.isArray(e) ? e.forEach(r) : r(e), this;
        }
    }
    Pe.accessor([ "Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization" ]), 
    V.reduceDescriptors(Pe.prototype, ({value: e}, t) => {
        let n = t[0].toUpperCase() + t.slice(1);
        return {
            get: () => e,
            set(e) {
                this[n] = e;
            }
        };
    }), V.freezeMethods(Pe);
    var xe = Pe;
    function Fe(e, t) {
        const n = this || Ie, r = t || n, i = xe.from(r.headers);
        let o = r.data;
        return V.forEach(e, function(e) {
            o = e.call(n, o, i.normalize(), t ? t.status : void 0);
        }), i.normalize(), o;
    }
    function je(e) {
        return !(!e || !e.__CANCEL__);
    }
    function Ue(e, t, n) {
        Q.call(this, null == e ? "canceled" : e, Q.ERR_CANCELED, t, n), this.name = "CanceledError";
    }
    V.inherits(Ue, Q, {
        __CANCEL__: !0
    });
    var We = Ue;
    function Be(e, t, n) {
        const r = n.config.validateStatus;
        n.status && r && !r(n.status) ? t(new Q("Request failed with status code " + n.status, [ Q.ERR_BAD_REQUEST, Q.ERR_BAD_RESPONSE ][Math.floor(n.status / 100) - 4], n.config, n.request, n)) : e(n);
    }
    function He(e, t, n) {
        let r = !/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t);
        return e && (r || 0 == n) ? function(e, t) {
            return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
        }(e, t) : t;
    }
    var $e = n(805), Ye = n.n($e), ze = n(39), Ge = n.n(ze), qe = n(43), Ve = n.n(qe), Ke = n(5), Je = n.n(Ke), Xe = n(806), Qe = n.n(Xe), Ze = n(30), et = n.n(Ze);
    function tt(e) {
        const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
        return t && t[1] || "";
    }
    const nt = /^(?:([^;]+);)?(?:[^;]+;)?(base64|),([\s\S]*)$/;
    var rt = n(9), it = n.n(rt);
    const ot = Symbol("internals");
    class at extends it.a.Transform {
        constructor(e) {
            super({
                readableHighWaterMark: (e = V.toFlatObject(e, {
                    maxRate: 0,
                    chunkSize: 65536,
                    minChunkSize: 100,
                    timeWindow: 500,
                    ticksRate: 2,
                    samplesCount: 15
                }, null, (e, t) => !V.isUndefined(t[e]))).chunkSize
            });
            const t = this[ot] = {
                timeWindow: e.timeWindow,
                chunkSize: e.chunkSize,
                maxRate: e.maxRate,
                minChunkSize: e.minChunkSize,
                bytesSeen: 0,
                isCaptured: !1,
                notifiedBytesLoaded: 0,
                ts: Date.now(),
                bytes: 0,
                onReadCallback: null
            };
            this.on("newListener", e => {
                "progress" === e && (t.isCaptured || (t.isCaptured = !0));
            });
        }
        _read(e) {
            const t = this[ot];
            return t.onReadCallback && t.onReadCallback(), super._read(e);
        }
        _transform(e, t, n) {
            const r = this[ot], i = r.maxRate, o = this.readableHighWaterMark, a = r.timeWindow, s = i / (1e3 / a), l = !1 !== r.minChunkSize ? Math.max(r.minChunkSize, .01 * s) : 0, c = (e, t) => {
                const n = Buffer.byteLength(e);
                r.bytesSeen += n, r.bytes += n, r.isCaptured && this.emit("progress", r.bytesSeen), 
                this.push(e) ? process.nextTick(t) : r.onReadCallback = () => {
                    r.onReadCallback = null, process.nextTick(t);
                };
            }, u = (e, t) => {
                const n = Buffer.byteLength(e);
                let u, d = null, h = o, p = 0;
                if (i) {
                    const e = Date.now();
                    (!r.ts || (p = e - r.ts) >= a) && (r.ts = e, u = s - r.bytes, r.bytes = u < 0 ? -u : 0, 
                    p = 0), u = s - r.bytes;
                }
                if (i) {
                    if (u <= 0) return setTimeout(() => {
                        t(null, e);
                    }, a - p);
                    u < h && (h = u);
                }
                h && n > h && n - h > l && (d = e.subarray(h), e = e.subarray(0, h)), c(e, d ? () => {
                    process.nextTick(t, null, d);
                } : t);
            };
            u(e, function e(t, r) {
                if (t) return n(t);
                r ? u(r, e) : n(null);
            });
        }
    }
    var st = at, lt = n(12);
    const {asyncIterator: ct} = Symbol;
    var ut = async function*(e) {
        e.stream ? yield* e.stream() : e.arrayBuffer ? yield await e.arrayBuffer() : e[ct] ? yield* e[ct]() : yield e;
    };
    const dt = Oe.ALPHABET.ALPHA_DIGIT + "-_", ht = "function" == typeof TextEncoder ? new TextEncoder : new Je.a.TextEncoder, pt = ht.encode("\r\n");
    class ft {
        constructor(e, t) {
            const {escapeName: n} = this.constructor, r = V.isString(t);
            let i = `Content-Disposition: form-data; name="${n(e)}"${!r && t.name ? `; filename="${n(t.name)}"` : ""}\r\n`;
            r ? t = ht.encode(String(t).replace(/\r?\n|\r\n?/g, "\r\n")) : i += `Content-Type: ${t.type || "application/octet-stream"}\r\n`, 
            this.headers = ht.encode(i + "\r\n"), this.contentLength = r ? t.byteLength : t.size, 
            this.size = this.headers.byteLength + this.contentLength + 2, this.name = e, this.value = t;
        }
        async* encode() {
            yield this.headers;
            const {value: e} = this;
            V.isTypedArray(e) ? yield e : yield* ut(e), yield pt;
        }
        static escapeName(e) {
            return String(e).replace(/[\r\n"]/g, e => ({
                "\r": "%0D",
                "\n": "%0A",
                '"': "%22"
            }[e]));
        }
    }
    var _t = (e, t, n) => {
        const {tag: r = "form-data-boundary", size: i = 25, boundary: o = r + "-" + Oe.generateString(i, dt)} = n || {};
        if (!V.isFormData(e)) throw TypeError("FormData instance required");
        if (o.length < 1 || o.length > 70) throw Error("boundary must be 10-70 characters long");
        const a = ht.encode("--" + o + "\r\n"), s = ht.encode("--" + o + "--\r\n");
        let l = s.byteLength;
        const c = Array.from(e.entries()).map(([e, t]) => {
            const n = new ft(e, t);
            return l += n.size, n;
        });
        l += a.byteLength * c.length, l = V.toFiniteNumber(l);
        const u = {
            "Content-Type": "multipart/form-data; boundary=" + o
        };
        return Number.isFinite(l) && (u["Content-Length"] = l), t && t(u), rt.Readable.from(async function*() {
            for (const e of c) yield a, yield* e.encode();
            yield s;
        }());
    };
    class mt extends it.a.Transform {
        __transform(e, t, n) {
            this.push(e), n();
        }
        _transform(e, t, n) {
            if (0 !== e.length && (this._transform = this.__transform, 120 !== e[0])) {
                const e = Buffer.alloc(2);
                e[0] = 120, e[1] = 156, this.push(e, t);
            }
            this.__transform(e, t, n);
        }
    }
    var gt = mt;
    var vt = (e, t) => V.isAsyncFn(e) ? function(...n) {
        const r = n.pop();
        e.apply(this, n).then(e => {
            try {
                t ? r(null, ...t(e)) : r(null, e);
            } catch (e) {
                r(e);
            }
        }, r);
    } : e;
    var yt = function(e, t) {
        e = e || 10;
        const n = new Array(e), r = new Array(e);
        let i, o = 0, a = 0;
        return t = void 0 !== t ? t : 1e3, function(s) {
            const l = Date.now(), c = r[a];
            i || (i = l), n[o] = s, r[o] = l;
            let u = a, d = 0;
            for (;u !== o; ) d += n[u++], u %= e;
            if (o = (o + 1) % e, o === a && (a = (a + 1) % e), l - i < t) return;
            const h = c && l - c;
            return h ? Math.round(1e3 * d / h) : void 0;
        };
    };
    var Et = function(e, t) {
        let n, r, i = 0, o = 1e3 / t;
        const a = (t, o = Date.now()) => {
            i = o, n = null, r && (clearTimeout(r), r = null), e(...t);
        };
        return [ (...e) => {
            const t = Date.now(), s = t - i;
            s >= o ? a(e, t) : (n = e, r || (r = setTimeout(() => {
                r = null, a(n);
            }, o - s)));
        }, () => n && a(n) ];
    };
    const bt = (e, t, n = 3) => {
        let r = 0;
        const i = yt(50, 250);
        return Et(n => {
            const o = n.loaded, a = n.lengthComputable ? n.total : void 0, s = o - r, l = i(s);
            r = o;
            e({
                loaded: o,
                total: a,
                progress: a ? o / a : void 0,
                bytes: s,
                rate: l || void 0,
                estimated: l && a && o <= a ? (a - o) / l : void 0,
                event: n,
                lengthComputable: null != a,
                [t ? "download" : "upload"]: !0
            });
        }, n);
    }, wt = (e, t) => {
        const n = null != e;
        return [ r => t[0]({
            lengthComputable: n,
            total: e,
            loaded: r
        }), t[1] ];
    }, St = e => (...t) => V.asap(() => e(...t));
    const Tt = {
        flush: et.a.constants.Z_SYNC_FLUSH,
        finishFlush: et.a.constants.Z_SYNC_FLUSH
    }, At = {
        flush: et.a.constants.BROTLI_OPERATION_FLUSH,
        finishFlush: et.a.constants.BROTLI_OPERATION_FLUSH
    }, Ot = V.isFunction(et.a.createBrotliDecompress), {http: Ct, https: Nt} = Qe.a, It = /https:?/, Rt = Oe.protocols.map(e => e + ":"), Dt = (e, [t, n]) => (e.on("end", n).on("error", n), 
    t);
    function Lt(e, t) {
        e.beforeRedirects.proxy && e.beforeRedirects.proxy(e), e.beforeRedirects.config && e.beforeRedirects.config(e, t);
    }
    function kt(e, t, n) {
        let r = t;
        if (!r && !1 !== r) {
            const e = Ye.a.getProxyForUrl(n);
            e && (r = new URL(e));
        }
        if (r) {
            if (r.username && (r.auth = (r.username || "") + ":" + (r.password || "")), r.auth) {
                (r.auth.username || r.auth.password) && (r.auth = (r.auth.username || "") + ":" + (r.auth.password || ""));
                const t = Buffer.from(r.auth, "utf8").toString("base64");
                e.headers["Proxy-Authorization"] = "Basic " + t;
            }
            e.headers.host = e.hostname + (e.port ? ":" + e.port : "");
            const t = r.hostname || r.host;
            e.hostname = t, e.host = t, e.port = r.port, e.path = n, r.protocol && (e.protocol = r.protocol.includes(":") ? r.protocol : r.protocol + ":");
        }
        e.beforeRedirects.proxy = function(e) {
            kt(e, t, e.href);
        };
    }
    const Mt = "undefined" != typeof process && "process" === V.kindOf(process), Pt = (e, t) => (({address: e, family: t}) => {
        if (!V.isString(e)) throw TypeError("address must be a string");
        return {
            address: e,
            family: t || (e.indexOf(".") < 0 ? 6 : 4)
        };
    })(V.isObject(e) ? e : {
        address: e,
        family: t
    });
    var xt = Mt && function(e) {
        return t = async function(t, n, r) {
            let {data: i, lookup: o, family: a} = e;
            const {responseType: s, responseEncoding: l} = e, c = e.method.toUpperCase();
            let u, d, h = !1;
            if (o) {
                const e = vt(o, e => V.isArray(e) ? e : [ e ]);
                o = (t, n, r) => {
                    e(t, n, (e, t, i) => {
                        if (e) return r(e);
                        const o = V.isArray(t) ? t.map(e => Pt(e)) : [ Pt(t, i) ];
                        n.all ? r(e, o) : r(e, o[0].address, o[0].family);
                    });
                };
            }
            const p = new lt.EventEmitter, f = () => {
                e.cancelToken && e.cancelToken.unsubscribe(_), e.signal && e.signal.removeEventListener("abort", _), 
                p.removeAllListeners();
            };
            function _(t) {
                p.emit("abort", !t || t.type ? new We(null, e, d) : t);
            }
            r((e, t) => {
                u = !0, t && (h = !0, f());
            }), p.once("abort", n), (e.cancelToken || e.signal) && (e.cancelToken && e.cancelToken.subscribe(_), 
            e.signal && (e.signal.aborted ? _() : e.signal.addEventListener("abort", _)));
            const m = He(e.baseURL, e.url, e.allowAbsoluteUrls), g = new URL(m, Oe.hasBrowserEnv ? Oe.origin : void 0), v = g.protocol || Rt[0];
            if ("data:" === v) {
                if (e.maxContentLength > -1 && function(e) {
                    if (!e || "string" != typeof e) return 0;
                    if (!e.startsWith("data:")) return 0;
                    const t = e.indexOf(",");
                    if (t < 0) return 0;
                    const n = e.slice(5, t), r = e.slice(t + 1);
                    if (/;base64/i.test(n)) {
                        let e = r.length;
                        const t = r.length;
                        for (let n = 0; n < t; n++) if (37 === r.charCodeAt(n) && n + 2 < t) {
                            const t = r.charCodeAt(n + 1), i = r.charCodeAt(n + 2);
                            (t >= 48 && t <= 57 || t >= 65 && t <= 70 || t >= 97 && t <= 102) && (i >= 48 && i <= 57 || i >= 65 && i <= 70 || i >= 97 && i <= 102) && (e -= 2, 
                            n += 2);
                        }
                        let n = 0, i = t - 1;
                        const o = e => e >= 2 && 37 === r.charCodeAt(e - 2) && 51 === r.charCodeAt(e - 1) && (68 === r.charCodeAt(e) || 100 === r.charCodeAt(e));
                        i >= 0 && (61 === r.charCodeAt(i) ? (n++, i--) : o(i) && (n++, i -= 3)), 1 === n && i >= 0 && (61 === r.charCodeAt(i) || o(i)) && n++;
                        const a = 3 * Math.floor(e / 4) - (n || 0);
                        return a > 0 ? a : 0;
                    }
                    return Buffer.byteLength(r, "utf8");
                }(String(e.url || m || "")) > e.maxContentLength) return n(new Q("maxContentLength size of " + e.maxContentLength + " exceeded", Q.ERR_BAD_RESPONSE, e));
                let r;
                if ("GET" !== c) return Be(t, n, {
                    status: 405,
                    statusText: "method not allowed",
                    headers: {},
                    config: e
                });
                try {
                    r = function(e, t, n) {
                        const r = n && n.Blob || Oe.classes.Blob, i = tt(e);
                        if (void 0 === t && r && (t = !0), "data" === i) {
                            e = i.length ? e.slice(i.length + 1) : e;
                            const n = nt.exec(e);
                            if (!n) throw new Q("Invalid URL", Q.ERR_INVALID_URL);
                            const o = n[1], a = n[2], s = n[3], l = Buffer.from(decodeURIComponent(s), a ? "base64" : "utf8");
                            if (t) {
                                if (!r) throw new Q("Blob is not supported", Q.ERR_NOT_SUPPORT);
                                return new r([ l ], {
                                    type: o
                                });
                            }
                            return l;
                        }
                        throw new Q("Unsupported protocol " + i, Q.ERR_NOT_SUPPORT);
                    }(e.url, "blob" === s, {
                        Blob: e.env && e.env.Blob
                    });
                } catch (t) {
                    throw Q.from(t, Q.ERR_BAD_REQUEST, e);
                }
                return "text" === s ? (r = r.toString(l), l && "utf8" !== l || (r = V.stripBOM(r))) : "stream" === s && (r = it.a.Readable.from(r)), 
                Be(t, n, {
                    data: r,
                    status: 200,
                    statusText: "OK",
                    headers: new xe,
                    config: e
                });
            }
            if (-1 === Rt.indexOf(v)) return n(new Q("Unsupported protocol " + v, Q.ERR_BAD_REQUEST, e));
            const y = xe.from(e.headers).normalize();
            y.set("User-Agent", "axios/1.12.2", !1);
            const {onUploadProgress: E, onDownloadProgress: b} = e, w = e.maxRate;
            let S = void 0, T = void 0;
            if (V.isSpecCompliantForm(i)) {
                const e = y.getContentType(/boundary=([-_\w\d]{10,70})/i);
                i = _t(i, e => {
                    y.set(e);
                }, {
                    tag: "axios-1.12.2-boundary",
                    boundary: e && e[1] || void 0
                });
            } else if (V.isFormData(i) && V.isFunction(i.getHeaders)) {
                if (y.set(i.getHeaders()), !y.hasContentLength()) try {
                    const e = await Je.a.promisify(i.getLength).call(i);
                    Number.isFinite(e) && e >= 0 && y.setContentLength(e);
                } catch (e) {}
            } else if (V.isBlob(i) || V.isFile(i)) i.size && y.setContentType(i.type || "application/octet-stream"), 
            y.setContentLength(i.size || 0), i = it.a.Readable.from(ut(i)); else if (i && !V.isStream(i)) {
                if (Buffer.isBuffer(i)) ; else if (V.isArrayBuffer(i)) i = Buffer.from(new Uint8Array(i)); else {
                    if (!V.isString(i)) return n(new Q("Data after transformation must be a string, an ArrayBuffer, a Buffer, or a Stream", Q.ERR_BAD_REQUEST, e));
                    i = Buffer.from(i, "utf-8");
                }
                if (y.setContentLength(i.length, !1), e.maxBodyLength > -1 && i.length > e.maxBodyLength) return n(new Q("Request body larger than maxBodyLength limit", Q.ERR_BAD_REQUEST, e));
            }
            const A = V.toFiniteNumber(y.getContentLength());
            V.isArray(w) ? (S = w[0], T = w[1]) : S = T = w, i && (E || S) && (V.isStream(i) || (i = it.a.Readable.from(i, {
                objectMode: !1
            })), i = it.a.pipeline([ i, new st({
                maxRate: V.toFiniteNumber(S)
            }) ], V.noop), E && i.on("progress", Dt(i, wt(A, bt(St(E), !1, 3)))));
            let O, C = void 0;
            e.auth && (C = (e.auth.username || "") + ":" + (e.auth.password || "")), !C && g.username && (C = g.username + ":" + g.password), 
            C && y.delete("authorization");
            try {
                O = de(g.pathname + g.search, e.params, e.paramsSerializer).replace(/^\?/, "");
            } catch (t) {
                const r = new Error(t.message);
                return r.config = e, r.url = e.url, r.exists = !0, n(r);
            }
            y.set("Accept-Encoding", "gzip, compress, deflate" + (Ot ? ", br" : ""), !1);
            const N = {
                path: O,
                method: c,
                headers: y.toJSON(),
                agents: {
                    http: e.httpAgent,
                    https: e.httpsAgent
                },
                auth: C,
                protocol: v,
                family: a,
                beforeRedirect: Lt,
                beforeRedirects: {}
            };
            let I;
            !V.isUndefined(o) && (N.lookup = o), e.socketPath ? N.socketPath = e.socketPath : (N.hostname = g.hostname.startsWith("[") ? g.hostname.slice(1, -1) : g.hostname, 
            N.port = g.port, kt(N, e.proxy, v + "//" + g.hostname + (g.port ? ":" + g.port : "") + N.path));
            const R = It.test(N.protocol);
            if (N.agent = R ? e.httpsAgent : e.httpAgent, e.transport ? I = e.transport : 0 === e.maxRedirects ? I = R ? Ve.a : Ge.a : (e.maxRedirects && (N.maxRedirects = e.maxRedirects), 
            e.beforeRedirect && (N.beforeRedirects.config = e.beforeRedirect), I = R ? Nt : Ct), 
            e.maxBodyLength > -1 ? N.maxBodyLength = e.maxBodyLength : N.maxBodyLength = 1 / 0, 
            e.insecureHTTPParser && (N.insecureHTTPParser = e.insecureHTTPParser), d = I.request(N, function(r) {
                if (d.destroyed) return;
                const i = [ r ], o = +r.headers["content-length"];
                if (b || T) {
                    const e = new st({
                        maxRate: V.toFiniteNumber(T)
                    });
                    b && e.on("progress", Dt(e, wt(o, bt(St(b), !0, 3)))), i.push(e);
                }
                let a = r;
                const u = r.req || d;
                if (!1 !== e.decompress && r.headers["content-encoding"]) switch ("HEAD" !== c && 204 !== r.statusCode || delete r.headers["content-encoding"], 
                (r.headers["content-encoding"] || "").toLowerCase()) {
                  case "gzip":
                  case "x-gzip":
                  case "compress":
                  case "x-compress":
                    i.push(et.a.createUnzip(Tt)), delete r.headers["content-encoding"];
                    break;

                  case "deflate":
                    i.push(new gt), i.push(et.a.createUnzip(Tt)), delete r.headers["content-encoding"];
                    break;

                  case "br":
                    Ot && (i.push(et.a.createBrotliDecompress(At)), delete r.headers["content-encoding"]);
                }
                a = i.length > 1 ? it.a.pipeline(i, V.noop) : i[0];
                const _ = it.a.finished(a, () => {
                    _(), f();
                }), m = {
                    status: r.statusCode,
                    statusText: r.statusMessage,
                    headers: new xe(r.headers),
                    config: e,
                    request: u
                };
                if ("stream" === s) m.data = a, Be(t, n, m); else {
                    const r = [];
                    let i = 0;
                    a.on("data", function(t) {
                        r.push(t), i += t.length, e.maxContentLength > -1 && i > e.maxContentLength && (h = !0, 
                        a.destroy(), n(new Q("maxContentLength size of " + e.maxContentLength + " exceeded", Q.ERR_BAD_RESPONSE, e, u)));
                    }), a.on("aborted", function() {
                        if (h) return;
                        const t = new Q("stream has been aborted", Q.ERR_BAD_RESPONSE, e, u);
                        a.destroy(t), n(t);
                    }), a.on("error", function(t) {
                        d.destroyed || n(Q.from(t, null, e, u));
                    }), a.on("end", function() {
                        try {
                            let e = 1 === r.length ? r[0] : Buffer.concat(r);
                            "arraybuffer" !== s && (e = e.toString(l), l && "utf8" !== l || (e = V.stripBOM(e))), 
                            m.data = e;
                        } catch (t) {
                            return n(Q.from(t, null, e, m.request, m));
                        }
                        Be(t, n, m);
                    });
                }
                p.once("abort", e => {
                    a.destroyed || (a.emit("error", e), a.destroy());
                });
            }), p.once("abort", e => {
                n(e), d.destroy(e);
            }), d.on("error", function(t) {
                n(Q.from(t, null, e, d));
            }), d.on("socket", function(e) {
                e.setKeepAlive(!0, 6e4);
            }), e.timeout) {
                const t = parseInt(e.timeout, 10);
                if (Number.isNaN(t)) return void n(new Q("error trying to parse `config.timeout` to int", Q.ERR_BAD_OPTION_VALUE, e, d));
                d.setTimeout(t, function() {
                    if (u) return;
                    let t = e.timeout ? "timeout of " + e.timeout + "ms exceeded" : "timeout exceeded";
                    const r = e.transitional || pe;
                    e.timeoutErrorMessage && (t = e.timeoutErrorMessage), n(new Q(t, r.clarifyTimeoutError ? Q.ETIMEDOUT : Q.ECONNABORTED, e, d)), 
                    _();
                });
            }
            if (V.isStream(i)) {
                let t = !1, n = !1;
                i.on("end", () => {
                    t = !0;
                }), i.once("error", e => {
                    n = !0, d.destroy(e);
                }), i.on("close", () => {
                    t || n || _(new We("Request stream has been aborted", e, d));
                }), i.pipe(d);
            } else d.end(i);
        }, new Promise((e, n) => {
            let r, i;
            const o = (e, t) => {
                i || (i = !0, r && r(e, t));
            }, a = e => {
                o(e, !0), n(e);
            };
            t(t => {
                o(t), e(t);
            }, a, e => r = e).catch(a);
        });
        var t;
    };
    var Ft, jt, Ut = Oe.hasStandardBrowserEnv ? (Ft = new URL(Oe.origin), jt = Oe.navigator && /(msie|trident)/i.test(Oe.navigator.userAgent), 
    e => (e = new URL(e, Oe.origin), Ft.protocol === e.protocol && Ft.host === e.host && (jt || Ft.port === e.port))) : () => !0, Wt = Oe.hasStandardBrowserEnv ? {
        write(e, t, n, r, i, o) {
            const a = [ e + "=" + encodeURIComponent(t) ];
            V.isNumber(n) && a.push("expires=" + new Date(n).toGMTString()), V.isString(r) && a.push("path=" + r), 
            V.isString(i) && a.push("domain=" + i), !0 === o && a.push("secure"), document.cookie = a.join("; ");
        },
        read(e) {
            const t = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"));
            return t ? decodeURIComponent(t[3]) : null;
        },
        remove(e) {
            this.write(e, "", Date.now() - 864e5);
        }
    } : {
        write() {},
        read: () => null,
        remove() {}
    };
    const Bt = e => e instanceof xe ? {
        ...e
    } : e;
    function Ht(e, t) {
        t = t || {};
        const n = {};
        function r(e, t, n, r) {
            return V.isPlainObject(e) && V.isPlainObject(t) ? V.merge.call({
                caseless: r
            }, e, t) : V.isPlainObject(t) ? V.merge({}, t) : V.isArray(t) ? t.slice() : t;
        }
        function i(e, t, n, i) {
            return V.isUndefined(t) ? V.isUndefined(e) ? void 0 : r(void 0, e, 0, i) : r(e, t, 0, i);
        }
        function o(e, t) {
            if (!V.isUndefined(t)) return r(void 0, t);
        }
        function a(e, t) {
            return V.isUndefined(t) ? V.isUndefined(e) ? void 0 : r(void 0, e) : r(void 0, t);
        }
        function s(n, i, o) {
            return o in t ? r(n, i) : o in e ? r(void 0, n) : void 0;
        }
        const l = {
            url: o,
            method: o,
            data: o,
            baseURL: a,
            transformRequest: a,
            transformResponse: a,
            paramsSerializer: a,
            timeout: a,
            timeoutMessage: a,
            withCredentials: a,
            withXSRFToken: a,
            adapter: a,
            responseType: a,
            xsrfCookieName: a,
            xsrfHeaderName: a,
            onUploadProgress: a,
            onDownloadProgress: a,
            decompress: a,
            maxContentLength: a,
            maxBodyLength: a,
            beforeRedirect: a,
            transport: a,
            httpAgent: a,
            httpsAgent: a,
            cancelToken: a,
            socketPath: a,
            responseEncoding: a,
            validateStatus: s,
            headers: (e, t, n) => i(Bt(e), Bt(t), 0, !0)
        };
        return V.forEach(Object.keys({
            ...e,
            ...t
        }), function(r) {
            const o = l[r] || i, a = o(e[r], t[r], r);
            V.isUndefined(a) && o !== s || (n[r] = a);
        }), n;
    }
    var $t = e => {
        const t = Ht({}, e);
        let {data: n, withXSRFToken: r, xsrfHeaderName: i, xsrfCookieName: o, headers: a, auth: s} = t;
        if (t.headers = a = xe.from(a), t.url = de(He(t.baseURL, t.url, t.allowAbsoluteUrls), e.params, e.paramsSerializer), 
        s && a.set("Authorization", "Basic " + btoa((s.username || "") + ":" + (s.password ? unescape(encodeURIComponent(s.password)) : ""))), 
        V.isFormData(n)) if (Oe.hasStandardBrowserEnv || Oe.hasStandardBrowserWebWorkerEnv) a.setContentType(void 0); else if (V.isFunction(n.getHeaders)) {
            const e = n.getHeaders(), t = [ "content-type", "content-length" ];
            Object.entries(e).forEach(([e, n]) => {
                t.includes(e.toLowerCase()) && a.set(e, n);
            });
        }
        if (Oe.hasStandardBrowserEnv && (r && V.isFunction(r) && (r = r(t)), r || !1 !== r && Ut(t.url))) {
            const e = i && o && Wt.read(o);
            e && a.set(i, e);
        }
        return t;
    };
    var Yt = "undefined" != typeof XMLHttpRequest && function(e) {
        return new Promise(function(t, n) {
            const r = $t(e);
            let i = r.data;
            const o = xe.from(r.headers).normalize();
            let a, s, l, c, u, {responseType: d, onUploadProgress: h, onDownloadProgress: p} = r;
            function f() {
                c && c(), u && u(), r.cancelToken && r.cancelToken.unsubscribe(a), r.signal && r.signal.removeEventListener("abort", a);
            }
            let _ = new XMLHttpRequest;
            function m() {
                if (!_) return;
                const r = xe.from("getAllResponseHeaders" in _ && _.getAllResponseHeaders());
                Be(function(e) {
                    t(e), f();
                }, function(e) {
                    n(e), f();
                }, {
                    data: d && "text" !== d && "json" !== d ? _.response : _.responseText,
                    status: _.status,
                    statusText: _.statusText,
                    headers: r,
                    config: e,
                    request: _
                }), _ = null;
            }
            _.open(r.method.toUpperCase(), r.url, !0), _.timeout = r.timeout, "onloadend" in _ ? _.onloadend = m : _.onreadystatechange = function() {
                _ && 4 === _.readyState && (0 !== _.status || _.responseURL && 0 === _.responseURL.indexOf("file:")) && setTimeout(m);
            }, _.onabort = function() {
                _ && (n(new Q("Request aborted", Q.ECONNABORTED, e, _)), _ = null);
            }, _.onerror = function(t) {
                const r = t && t.message ? t.message : "Network Error", i = new Q(r, Q.ERR_NETWORK, e, _);
                i.event = t || null, n(i), _ = null;
            }, _.ontimeout = function() {
                let t = r.timeout ? "timeout of " + r.timeout + "ms exceeded" : "timeout exceeded";
                const i = r.transitional || pe;
                r.timeoutErrorMessage && (t = r.timeoutErrorMessage), n(new Q(t, i.clarifyTimeoutError ? Q.ETIMEDOUT : Q.ECONNABORTED, e, _)), 
                _ = null;
            }, void 0 === i && o.setContentType(null), "setRequestHeader" in _ && V.forEach(o.toJSON(), function(e, t) {
                _.setRequestHeader(t, e);
            }), V.isUndefined(r.withCredentials) || (_.withCredentials = !!r.withCredentials), 
            d && "json" !== d && (_.responseType = r.responseType), p && ([l, u] = bt(p, !0), 
            _.addEventListener("progress", l)), h && _.upload && ([s, c] = bt(h), _.upload.addEventListener("progress", s), 
            _.upload.addEventListener("loadend", c)), (r.cancelToken || r.signal) && (a = t => {
                _ && (n(!t || t.type ? new We(null, e, _) : t), _.abort(), _ = null);
            }, r.cancelToken && r.cancelToken.subscribe(a), r.signal && (r.signal.aborted ? a() : r.signal.addEventListener("abort", a)));
            const g = tt(r.url);
            g && -1 === Oe.protocols.indexOf(g) ? n(new Q("Unsupported protocol " + g + ":", Q.ERR_BAD_REQUEST, e)) : _.send(i || null);
        });
    };
    var zt = (e, t) => {
        const {length: n} = e = e ? e.filter(Boolean) : [];
        if (t || n) {
            let n, r = new AbortController;
            const i = function(e) {
                if (!n) {
                    n = !0, a();
                    const t = e instanceof Error ? e : this.reason;
                    r.abort(t instanceof Q ? t : new We(t instanceof Error ? t.message : t));
                }
            };
            let o = t && setTimeout(() => {
                o = null, i(new Q(`timeout ${t} of ms exceeded`, Q.ETIMEDOUT));
            }, t);
            const a = () => {
                e && (o && clearTimeout(o), o = null, e.forEach(e => {
                    e.unsubscribe ? e.unsubscribe(i) : e.removeEventListener("abort", i);
                }), e = null);
            };
            e.forEach(e => e.addEventListener("abort", i));
            const {signal: s} = r;
            return s.unsubscribe = () => V.asap(a), s;
        }
    };
    const Gt = function*(e, t) {
        let n = e.byteLength;
        if (!t || n < t) return void (yield e);
        let r, i = 0;
        for (;i < n; ) r = i + t, yield e.slice(i, r), i = r;
    }, qt = async function*(e) {
        if (e[Symbol.asyncIterator]) return void (yield* e);
        const t = e.getReader();
        try {
            for (;;) {
                const {done: e, value: n} = await t.read();
                if (e) break;
                yield n;
            }
        } finally {
            await t.cancel();
        }
    }, Vt = (e, t, n, r) => {
        const i = async function*(e, t) {
            for await (const n of qt(e)) yield* Gt(n, t);
        }(e, t);
        let o, a = 0, s = e => {
            o || (o = !0, r && r(e));
        };
        return new ReadableStream({
            async pull(e) {
                try {
                    const {done: t, value: r} = await i.next();
                    if (t) return s(), void e.close();
                    let o = r.byteLength;
                    if (n) {
                        let e = a += o;
                        n(e);
                    }
                    e.enqueue(new Uint8Array(r));
                } catch (e) {
                    throw s(e), e;
                }
            },
            cancel: e => (s(e), i.return())
        }, {
            highWaterMark: 2
        });
    }, {isFunction: Kt} = V, Jt = (({Request: e, Response: t}) => ({
        Request: e,
        Response: t
    }))(V.global), {ReadableStream: Xt, TextEncoder: Qt} = V.global, Zt = (e, ...t) => {
        try {
            return !!e(...t);
        } catch (e) {
            return !1;
        }
    }, en = e => {
        e = V.merge.call({
            skipUndefined: !0
        }, Jt, e);
        const {fetch: t, Request: n, Response: r} = e, i = t ? Kt(t) : "function" == typeof fetch, o = Kt(n), a = Kt(r);
        if (!i) return !1;
        const s = i && Kt(Xt), l = i && ("function" == typeof Qt ? (c = new Qt, e => c.encode(e)) : async e => new Uint8Array(await new n(e).arrayBuffer()));
        var c;
        const u = o && s && Zt(() => {
            let e = !1;
            const t = new n(Oe.origin, {
                body: new Xt,
                method: "POST",
                get duplex() {
                    return e = !0, "half";
                }
            }).headers.has("Content-Type");
            return e && !t;
        }), d = a && s && Zt(() => V.isReadableStream(new r("").body)), h = {
            stream: d && (e => e.body)
        };
        i && [ "text", "arrayBuffer", "blob", "formData", "stream" ].forEach(e => {
            !h[e] && (h[e] = (t, n) => {
                let r = t && t[e];
                if (r) return r.call(t);
                throw new Q(`Response type '${e}' is not supported`, Q.ERR_NOT_SUPPORT, n);
            });
        });
        const p = async (e, t) => {
            const r = V.toFiniteNumber(e.getContentLength());
            return null == r ? (async e => {
                if (null == e) return 0;
                if (V.isBlob(e)) return e.size;
                if (V.isSpecCompliantForm(e)) {
                    const t = new n(Oe.origin, {
                        method: "POST",
                        body: e
                    });
                    return (await t.arrayBuffer()).byteLength;
                }
                return V.isArrayBufferView(e) || V.isArrayBuffer(e) ? e.byteLength : (V.isURLSearchParams(e) && (e += ""), 
                V.isString(e) ? (await l(e)).byteLength : void 0);
            })(t) : r;
        };
        return async e => {
            let {url: i, method: a, data: s, signal: l, cancelToken: c, timeout: f, onDownloadProgress: _, onUploadProgress: m, responseType: g, headers: v, withCredentials: y = "same-origin", fetchOptions: E} = $t(e), b = t || fetch;
            g = g ? (g + "").toLowerCase() : "text";
            let w = zt([ l, c && c.toAbortSignal() ], f), S = null;
            const T = w && w.unsubscribe && (() => {
                w.unsubscribe();
            });
            let A;
            try {
                if (m && u && "get" !== a && "head" !== a && 0 !== (A = await p(v, s))) {
                    let e, t = new n(i, {
                        method: "POST",
                        body: s,
                        duplex: "half"
                    });
                    if (V.isFormData(s) && (e = t.headers.get("content-type")) && v.setContentType(e), 
                    t.body) {
                        const [e, n] = wt(A, bt(St(m)));
                        s = Vt(t.body, 65536, e, n);
                    }
                }
                V.isString(y) || (y = y ? "include" : "omit");
                const t = o && "credentials" in n.prototype, l = {
                    ...E,
                    signal: w,
                    method: a.toUpperCase(),
                    headers: v.normalize().toJSON(),
                    body: s,
                    duplex: "half",
                    credentials: t ? y : void 0
                };
                S = o && new n(i, l);
                let c = await (o ? b(S, E) : b(i, l));
                const f = d && ("stream" === g || "response" === g);
                if (d && (_ || f && T)) {
                    const e = {};
                    [ "status", "statusText", "headers" ].forEach(t => {
                        e[t] = c[t];
                    });
                    const t = V.toFiniteNumber(c.headers.get("content-length")), [n, i] = _ && wt(t, bt(St(_), !0)) || [];
                    c = new r(Vt(c.body, 65536, n, () => {
                        i && i(), T && T();
                    }), e);
                }
                g = g || "text";
                let O = await h[V.findKey(h, g) || "text"](c, e);
                return !f && T && T(), await new Promise((t, n) => {
                    Be(t, n, {
                        data: O,
                        headers: xe.from(c.headers),
                        status: c.status,
                        statusText: c.statusText,
                        config: e,
                        request: S
                    });
                });
            } catch (t) {
                if (T && T(), t && "TypeError" === t.name && /Load failed|fetch/i.test(t.message)) throw Object.assign(new Q("Network Error", Q.ERR_NETWORK, e, S), {
                    cause: t.cause || t
                });
                throw Q.from(t, t && t.code, e, S);
            }
        };
    }, tn = new Map, nn = e => {
        let t = e ? e.env : {};
        const {fetch: n, Request: r, Response: i} = t, o = [ r, i, n ];
        let a, s, l = o.length, c = tn;
        for (;l--; ) a = o[l], s = c.get(a), void 0 === s && c.set(a, s = l ? new Map : en(t)), 
        c = s;
        return s;
    };
    nn();
    const rn = {
        http: xt,
        xhr: Yt,
        fetch: {
            get: nn
        }
    };
    V.forEach(rn, (e, t) => {
        if (e) {
            try {
                Object.defineProperty(e, "name", {
                    value: t
                });
            } catch (e) {}
            Object.defineProperty(e, "adapterName", {
                value: t
            });
        }
    });
    const on = e => "- " + e, an = e => V.isFunction(e) || null === e || !1 === e;
    var sn = (e, t) => {
        e = V.isArray(e) ? e : [ e ];
        const {length: n} = e;
        let r, i;
        const o = {};
        for (let a = 0; a < n; a++) {
            let n;
            if (r = e[a], i = r, !an(r) && (i = rn[(n = String(r)).toLowerCase()], void 0 === i)) throw new Q(`Unknown adapter '${n}'`);
            if (i && (V.isFunction(i) || (i = i.get(t)))) break;
            o[n || "#" + a] = i;
        }
        if (!i) {
            const e = Object.entries(o).map(([e, t]) => `adapter ${e} ` + (!1 === t ? "is not supported by the environment" : "is not available in the build"));
            let t = n ? e.length > 1 ? "since :\n" + e.map(on).join("\n") : " " + on(e[0]) : "as no adapter specified";
            throw new Q("There is no suitable adapter to dispatch the request " + t, "ERR_NOT_SUPPORT");
        }
        return i;
    };
    function ln(e) {
        if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted) throw new We(null, e);
    }
    function cn(e) {
        ln(e), e.headers = xe.from(e.headers), e.data = Fe.call(e, e.transformRequest), 
        -1 !== [ "post", "put", "patch" ].indexOf(e.method) && e.headers.setContentType("application/x-www-form-urlencoded", !1);
        return sn(e.adapter || Ie.adapter, e)(e).then(function(t) {
            return ln(e), t.data = Fe.call(e, e.transformResponse, t), t.headers = xe.from(t.headers), 
            t;
        }, function(t) {
            return je(t) || (ln(e), t && t.response && (t.response.data = Fe.call(e, e.transformResponse, t.response), 
            t.response.headers = xe.from(t.response.headers))), Promise.reject(t);
        });
    }
    const un = {};
    [ "object", "boolean", "number", "function", "string", "symbol" ].forEach((e, t) => {
        un[e] = function(n) {
            return typeof n === e || "a" + (t < 1 ? "n " : " ") + e;
        };
    });
    const dn = {};
    un.transitional = function(e, t, n) {
        function r(e, t) {
            return "[Axios v1.12.2] Transitional option '" + e + "'" + t + (n ? ". " + n : "");
        }
        return (n, i, o) => {
            if (!1 === e) throw new Q(r(i, " has been removed" + (t ? " in " + t : "")), Q.ERR_DEPRECATED);
            return t && !dn[i] && (dn[i] = !0, console.warn(r(i, " has been deprecated since v" + t + " and will be removed in the near future"))), 
            !e || e(n, i, o);
        };
    }, un.spelling = function(e) {
        return (t, n) => (console.warn(`${n} is likely a misspelling of ${e}`), !0);
    };
    var hn = {
        assertOptions: function(e, t, n) {
            if ("object" != typeof e) throw new Q("options must be an object", Q.ERR_BAD_OPTION_VALUE);
            const r = Object.keys(e);
            let i = r.length;
            for (;i-- > 0; ) {
                const o = r[i], a = t[o];
                if (a) {
                    const t = e[o], n = void 0 === t || a(t, o, e);
                    if (!0 !== n) throw new Q("option " + o + " must be " + n, Q.ERR_BAD_OPTION_VALUE);
                } else if (!0 !== n) throw new Q("Unknown option " + o, Q.ERR_BAD_OPTION);
            }
        },
        validators: un
    };
    const pn = hn.validators;
    class fn {
        constructor(e) {
            this.defaults = e || {}, this.interceptors = {
                request: new he,
                response: new he
            };
        }
        async request(e, t) {
            try {
                return await this._request(e, t);
            } catch (e) {
                if (e instanceof Error) {
                    let t = {};
                    Error.captureStackTrace ? Error.captureStackTrace(t) : t = new Error;
                    const n = t.stack ? t.stack.replace(/^.+\n/, "") : "";
                    try {
                        e.stack ? n && !String(e.stack).endsWith(n.replace(/^.+\n.+\n/, "")) && (e.stack += "\n" + n) : e.stack = n;
                    } catch (e) {}
                }
                throw e;
            }
        }
        _request(e, t) {
            "string" == typeof e ? (t = t || {}).url = e : t = e || {}, t = Ht(this.defaults, t);
            const {transitional: n, paramsSerializer: r, headers: i} = t;
            void 0 !== n && hn.assertOptions(n, {
                silentJSONParsing: pn.transitional(pn.boolean),
                forcedJSONParsing: pn.transitional(pn.boolean),
                clarifyTimeoutError: pn.transitional(pn.boolean)
            }, !1), null != r && (V.isFunction(r) ? t.paramsSerializer = {
                serialize: r
            } : hn.assertOptions(r, {
                encode: pn.function,
                serialize: pn.function
            }, !0)), void 0 !== t.allowAbsoluteUrls || (void 0 !== this.defaults.allowAbsoluteUrls ? t.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : t.allowAbsoluteUrls = !0), 
            hn.assertOptions(t, {
                baseUrl: pn.spelling("baseURL"),
                withXsrfToken: pn.spelling("withXSRFToken")
            }, !0), t.method = (t.method || this.defaults.method || "get").toLowerCase();
            let o = i && V.merge(i.common, i[t.method]);
            i && V.forEach([ "delete", "get", "head", "post", "put", "patch", "common" ], e => {
                delete i[e];
            }), t.headers = xe.concat(o, i);
            const a = [];
            let s = !0;
            this.interceptors.request.forEach(function(e) {
                "function" == typeof e.runWhen && !1 === e.runWhen(t) || (s = s && e.synchronous, 
                a.unshift(e.fulfilled, e.rejected));
            });
            const l = [];
            let c;
            this.interceptors.response.forEach(function(e) {
                l.push(e.fulfilled, e.rejected);
            });
            let u, d = 0;
            if (!s) {
                const e = [ cn.bind(this), void 0 ];
                for (e.unshift(...a), e.push(...l), u = e.length, c = Promise.resolve(t); d < u; ) c = c.then(e[d++], e[d++]);
                return c;
            }
            u = a.length;
            let h = t;
            for (;d < u; ) {
                const e = a[d++], t = a[d++];
                try {
                    h = e(h);
                } catch (e) {
                    t.call(this, e);
                    break;
                }
            }
            try {
                c = cn.call(this, h);
            } catch (e) {
                return Promise.reject(e);
            }
            for (d = 0, u = l.length; d < u; ) c = c.then(l[d++], l[d++]);
            return c;
        }
        getUri(e) {
            return de(He((e = Ht(this.defaults, e)).baseURL, e.url, e.allowAbsoluteUrls), e.params, e.paramsSerializer);
        }
    }
    V.forEach([ "delete", "get", "head", "options" ], function(e) {
        fn.prototype[e] = function(t, n) {
            return this.request(Ht(n || {}, {
                method: e,
                url: t,
                data: (n || {}).data
            }));
        };
    }), V.forEach([ "post", "put", "patch" ], function(e) {
        function t(t) {
            return function(n, r, i) {
                return this.request(Ht(i || {}, {
                    method: e,
                    headers: t ? {
                        "Content-Type": "multipart/form-data"
                    } : {},
                    url: n,
                    data: r
                }));
            };
        }
        fn.prototype[e] = t(), fn.prototype[e + "Form"] = t(!0);
    });
    var _n = fn;
    class mn {
        constructor(e) {
            if ("function" != typeof e) throw new TypeError("executor must be a function.");
            let t;
            this.promise = new Promise(function(e) {
                t = e;
            });
            const n = this;
            this.promise.then(e => {
                if (!n._listeners) return;
                let t = n._listeners.length;
                for (;t-- > 0; ) n._listeners[t](e);
                n._listeners = null;
            }), this.promise.then = e => {
                let t;
                const r = new Promise(e => {
                    n.subscribe(e), t = e;
                }).then(e);
                return r.cancel = function() {
                    n.unsubscribe(t);
                }, r;
            }, e(function(e, r, i) {
                n.reason || (n.reason = new We(e, r, i), t(n.reason));
            });
        }
        throwIfRequested() {
            if (this.reason) throw this.reason;
        }
        subscribe(e) {
            this.reason ? e(this.reason) : this._listeners ? this._listeners.push(e) : this._listeners = [ e ];
        }
        unsubscribe(e) {
            if (!this._listeners) return;
            const t = this._listeners.indexOf(e);
            -1 !== t && this._listeners.splice(t, 1);
        }
        toAbortSignal() {
            const e = new AbortController, t = t => {
                e.abort(t);
            };
            return this.subscribe(t), e.signal.unsubscribe = () => this.unsubscribe(t), e.signal;
        }
        static source() {
            let e;
            return {
                token: new mn(function(t) {
                    e = t;
                }),
                cancel: e
            };
        }
    }
    var gn = mn;
    const vn = {
        Continue: 100,
        SwitchingProtocols: 101,
        Processing: 102,
        EarlyHints: 103,
        Ok: 200,
        Created: 201,
        Accepted: 202,
        NonAuthoritativeInformation: 203,
        NoContent: 204,
        ResetContent: 205,
        PartialContent: 206,
        MultiStatus: 207,
        AlreadyReported: 208,
        ImUsed: 226,
        MultipleChoices: 300,
        MovedPermanently: 301,
        Found: 302,
        SeeOther: 303,
        NotModified: 304,
        UseProxy: 305,
        Unused: 306,
        TemporaryRedirect: 307,
        PermanentRedirect: 308,
        BadRequest: 400,
        Unauthorized: 401,
        PaymentRequired: 402,
        Forbidden: 403,
        NotFound: 404,
        MethodNotAllowed: 405,
        NotAcceptable: 406,
        ProxyAuthenticationRequired: 407,
        RequestTimeout: 408,
        Conflict: 409,
        Gone: 410,
        LengthRequired: 411,
        PreconditionFailed: 412,
        PayloadTooLarge: 413,
        UriTooLong: 414,
        UnsupportedMediaType: 415,
        RangeNotSatisfiable: 416,
        ExpectationFailed: 417,
        ImATeapot: 418,
        MisdirectedRequest: 421,
        UnprocessableEntity: 422,
        Locked: 423,
        FailedDependency: 424,
        TooEarly: 425,
        UpgradeRequired: 426,
        PreconditionRequired: 428,
        TooManyRequests: 429,
        RequestHeaderFieldsTooLarge: 431,
        UnavailableForLegalReasons: 451,
        InternalServerError: 500,
        NotImplemented: 501,
        BadGateway: 502,
        ServiceUnavailable: 503,
        GatewayTimeout: 504,
        HttpVersionNotSupported: 505,
        VariantAlsoNegotiates: 506,
        InsufficientStorage: 507,
        LoopDetected: 508,
        NotExtended: 510,
        NetworkAuthenticationRequired: 511
    };
    Object.entries(vn).forEach(([e, t]) => {
        vn[t] = e;
    });
    var yn = vn;
    const En = function e(t) {
        const n = new _n(t), r = i(_n.prototype.request, n);
        return V.extend(r, _n.prototype, n, {
            allOwnKeys: !0
        }), V.extend(r, n, null, {
            allOwnKeys: !0
        }), r.create = function(n) {
            return e(Ht(t, n));
        }, r;
    }(Ie);
    En.Axios = _n, En.CanceledError = We, En.CancelToken = gn, En.isCancel = je, En.VERSION = "1.12.2", 
    En.toFormData = oe, En.AxiosError = Q, En.Cancel = En.CanceledError, En.all = function(e) {
        return Promise.all(e);
    }, En.spread = function(e) {
        return function(t) {
            return e.apply(null, t);
        };
    }, En.isAxiosError = function(e) {
        return V.isObject(e) && !0 === e.isAxiosError;
    }, En.mergeConfig = Ht, En.AxiosHeaders = xe, En.formToJSON = e => Ce(V.isHTMLForm(e) ? new FormData(e) : e), 
    En.getAdapter = sn, En.HttpStatusCode = yn, En.default = En;
    var bn = En;
    const {Axios: wn, AxiosError: Sn, CanceledError: Tn, isCancel: An, CancelToken: On, VERSION: Cn, all: Nn, Cancel: In, isAxiosError: Rn, spread: Dn, toFormData: Ln, AxiosHeaders: kn, HttpStatusCode: Mn, formToJSON: Pn, getAdapter: xn, mergeConfig: Fn} = bn;
}
