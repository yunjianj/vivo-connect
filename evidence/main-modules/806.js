// analysis/pretty/main.js:73666; webpack module 806
function(e, t, n) {
    var r, i, o, a = n(15), s = a.URL, l = n(39), c = n(43), u = n(9).Writable, d = n(44), h = n(1164);
    r = "undefined" != typeof process, i = "undefined" != typeof window && "undefined" != typeof document, 
    o = M(Error.captureStackTrace), r || !i && o || console.warn("The follow-redirects package should be excluded from browser builds.");
    var p = !1;
    try {
        d(new s(""));
    } catch (e) {
        p = "ERR_INVALID_URL" === e.code;
    }
    var f = [ "Authorization", "Proxy-Authorization", "Cookie" ], _ = [ "auth", "host", "hostname", "href", "path", "pathname", "port", "protocol", "query", "search", "hash" ], m = [ "abort", "aborted", "connect", "error", "socket", "timeout" ], g = Object.create(null);
    m.forEach(function(e) {
        g[e] = function(t, n, r) {
            this._redirectable.emit(e, t, n, r);
        };
    });
    var v = D("ERR_INVALID_URL", "Invalid URL", TypeError), y = D("ERR_FR_REDIRECTION_FAILURE", "Redirected request failed"), E = D("ERR_FR_TOO_MANY_REDIRECTS", "Maximum number of redirects exceeded", y), b = D("ERR_FR_MAX_BODY_LENGTH_EXCEEDED", "Request body larger than maxBodyLength limit"), w = D("ERR_STREAM_WRITE_AFTER_END", "write after end"), S = u.prototype.destroy || O;
    function T(e, t) {
        u.call(this), this._sanitizeOptions(e), this._options = e, this._ended = !1, this._ending = !1, 
        this._redirectCount = 0, this._redirects = [], this._requestBodyLength = 0, this._requestBodyBuffers = [], 
        t && this.on("response", t);
        var n = this;
        this._onNativeResponse = function(e) {
            try {
                n._processResponse(e);
            } catch (e) {
                n.emit("error", e instanceof y ? e : new y({
                    cause: e
                }));
            }
        }, this._headerFilter = new RegExp("^(?:" + f.concat(e.sensitiveHeaders).map(P).join("|") + ")$", "i"), 
        this._performRequest();
    }
    function A(e) {
        var t = {
            maxRedirects: 21,
            maxBodyLength: 10485760
        }, n = {};
        return Object.keys(e).forEach(function(r) {
            var i = r + ":", o = n[i] = e[r], a = t[r] = Object.create(o);
            Object.defineProperties(a, {
                request: {
                    value: function(e, r, o) {
                        var a;
                        return a = e, s && a instanceof s ? e = I(e) : k(e) ? e = I(C(e)) : (o = r, r = N(e), 
                        e = {
                            protocol: i
                        }), M(r) && (o = r, r = null), (r = Object.assign({
                            maxRedirects: t.maxRedirects,
                            maxBodyLength: t.maxBodyLength
                        }, e, r)).nativeProtocols = n, k(r.host) || k(r.hostname) || (r.hostname = "::1"), 
                        d.equal(r.protocol, i, "protocol mismatch"), h("options", r), new T(r, o);
                    },
                    configurable: !0,
                    enumerable: !0,
                    writable: !0
                },
                get: {
                    value: function(e, t, n) {
                        var r = a.request(e, t, n);
                        return r.end(), r;
                    },
                    configurable: !0,
                    enumerable: !0,
                    writable: !0
                }
            });
        }), t;
    }
    function O() {}
    function C(e) {
        var t;
        if (p) t = new s(e); else if (!k((t = N(a.parse(e))).protocol)) throw new v({
            input: e
        });
        return t;
    }
    function N(e) {
        if (/^\[/.test(e.hostname) && !/^\[[:0-9a-f]+\]$/i.test(e.hostname)) throw new v({
            input: e.href || e
        });
        if (/^\[/.test(e.host) && !/^\[[:0-9a-f]+\](:\d+)?$/i.test(e.host)) throw new v({
            input: e.href || e
        });
        return e;
    }
    function I(e, t) {
        var n = t || {};
        for (var r of _) n[r] = e[r];
        return n.hostname.startsWith("[") && (n.hostname = n.hostname.slice(1, -1)), "" !== n.port && (n.port = Number(n.port)), 
        n.path = n.search ? n.pathname + n.search : n.pathname, n;
    }
    function R(e, t) {
        var n;
        for (var r in t) e.test(r) && (n = t[r], delete t[r]);
        return null == n ? void 0 : String(n).trim();
    }
    function D(e, t, n) {
        function r(n) {
            M(Error.captureStackTrace) && Error.captureStackTrace(this, this.constructor), Object.assign(this, n || {}), 
            this.code = e, this.message = this.cause ? t + ": " + this.cause.message : t;
        }
        return r.prototype = new (n || Error), Object.defineProperties(r.prototype, {
            constructor: {
                value: r,
                enumerable: !1
            },
            name: {
                value: "Error [" + e + "]",
                enumerable: !1
            }
        }), r;
    }
    function L(e, t) {
        for (var n of m) e.removeListener(n, g[n]);
        e.on("error", O), e.destroy(t);
    }
    function k(e) {
        return "string" == typeof e || e instanceof String;
    }
    function M(e) {
        return "function" == typeof e;
    }
    function P(e) {
        return e.replace(/[\]\\/()*+?.$]/g, "\\$&");
    }
    T.prototype = Object.create(u.prototype), T.prototype.abort = function() {
        L(this._currentRequest), this._currentRequest.abort(), this.emit("abort");
    }, T.prototype.destroy = function(e) {
        return L(this._currentRequest, e), S.call(this, e), this;
    }, T.prototype.write = function(e, t, n) {
        if (this._ending) throw new w;
        if (!k(e) && ("object" != typeof (r = e) || !("length" in r))) throw new TypeError("data should be a string, Buffer or Uint8Array");
        var r;
        M(t) && (n = t, t = null), 0 !== e.length ? this._requestBodyLength + e.length <= this._options.maxBodyLength ? (this._requestBodyLength += e.length, 
        this._requestBodyBuffers.push({
            data: e,
            encoding: t
        }), this._currentRequest.write(e, t, n)) : (this.emit("error", new b), this.abort()) : n && n();
    }, T.prototype.end = function(e, t, n) {
        if (M(e) ? (n = e, e = t = null) : M(t) && (n = t, t = null), e) {
            var r = this, i = this._currentRequest;
            this.write(e, t, function() {
                r._ended = !0, i.end(null, null, n);
            }), this._ending = !0;
        } else this._ended = this._ending = !0, this._currentRequest.end(null, null, n);
    }, T.prototype.setHeader = function(e, t) {
        this._options.headers[e] = t, this._currentRequest.setHeader(e, t);
    }, T.prototype.removeHeader = function(e) {
        delete this._options.headers[e], this._currentRequest.removeHeader(e);
    }, T.prototype.setTimeout = function(e, t) {
        var n = this;
        function r(t) {
            t.setTimeout(e), t.removeListener("timeout", t.destroy), t.addListener("timeout", t.destroy);
        }
        function i(t) {
            n._timeout && clearTimeout(n._timeout), n._timeout = setTimeout(function() {
                n.emit("timeout"), o();
            }, e), r(t);
        }
        function o() {
            n._timeout && (clearTimeout(n._timeout), n._timeout = null), n.removeListener("abort", o), 
            n.removeListener("error", o), n.removeListener("response", o), n.removeListener("close", o), 
            t && n.removeListener("timeout", t), n.socket || n._currentRequest.removeListener("socket", i);
        }
        return t && this.on("timeout", t), this.socket ? i(this.socket) : this._currentRequest.once("socket", i), 
        this.on("socket", r), this.on("abort", o), this.on("error", o), this.on("response", o), 
        this.on("close", o), this;
    }, [ "flushHeaders", "getHeader", "setNoDelay", "setSocketKeepAlive" ].forEach(function(e) {
        T.prototype[e] = function(t, n) {
            return this._currentRequest[e](t, n);
        };
    }), [ "aborted", "connection", "socket" ].forEach(function(e) {
        Object.defineProperty(T.prototype, e, {
            get: function() {
                return this._currentRequest[e];
            }
        });
    }), T.prototype._sanitizeOptions = function(e) {
        if (e.headers || (e.headers = {}), e.sensitiveHeaders instanceof Array || (e.sensitiveHeaders = []), 
        e.host && (e.hostname || (e.hostname = e.host), delete e.host), !e.pathname && e.path) {
            var t = e.path.indexOf("?");
            t < 0 ? e.pathname = e.path : (e.pathname = e.path.substring(0, t), e.search = e.path.substring(t));
        }
    }, T.prototype._performRequest = function() {
        var e = this._options.protocol, t = this._options.nativeProtocols[e];
        if (!t) throw new TypeError("Unsupported protocol " + e);
        if (this._options.agents) {
            var n = e.slice(0, -1);
            this._options.agent = this._options.agents[n];
        }
        var r = this._currentRequest = t.request(this._options, this._onNativeResponse);
        for (var i of (r._redirectable = this, m)) r.on(i, g[i]);
        if (this._currentUrl = /^\//.test(this._options.path) ? a.format(this._options) : this._options.path, 
        this._isRedirect) {
            var o = 0, s = this, l = this._requestBodyBuffers;
            !function e(t) {
                if (r === s._currentRequest) if (t) s.emit("error", t); else if (o < l.length) {
                    var n = l[o++];
                    r.finished || r.write(n.data, n.encoding, e);
                } else s._ended && r.end();
            }();
        }
    }, T.prototype._processResponse = function(e) {
        var t = e.statusCode;
        this._options.trackRedirects && this._redirects.push({
            url: this._currentUrl,
            headers: e.headers,
            statusCode: t
        });
        var n, r = e.headers.location;
        if (!r || !1 === this._options.followRedirects || t < 300 || t >= 400) return e.responseUrl = this._currentUrl, 
        e.redirects = this._redirects, this.emit("response", e), void (this._requestBodyBuffers = []);
        if (L(this._currentRequest), e.destroy(), ++this._redirectCount > this._options.maxRedirects) throw new E;
        var i = this._options.beforeRedirect;
        i && (n = Object.assign({
            Host: e.req.getHeader("host")
        }, this._options.headers));
        var o = this._options.method;
        ((301 === t || 302 === t) && "POST" === this._options.method || 303 === t && !/^(?:GET|HEAD)$/.test(this._options.method)) && (this._options.method = "GET", 
        this._requestBodyBuffers = [], R(/^content-/i, this._options.headers));
        var l, c, u = R(/^host$/i, this._options.headers), f = C(this._currentUrl), _ = u || f.host, m = /^\w+:/.test(r) ? this._currentUrl : a.format(Object.assign(f, {
            host: _
        })), g = (l = r, c = m, p ? new s(l, c) : C(a.resolve(c, l)));
        if (h("redirecting to", g.href), this._isRedirect = !0, I(g, this._options), (g.protocol !== f.protocol && "https:" !== g.protocol || g.host !== _ && !function(e, t) {
            d(k(e) && k(t));
            var n = e.length - t.length - 1;
            return n > 0 && "." === e[n] && e.endsWith(t);
        }(g.host, _)) && R(this._headerFilter, this._options.headers), M(i)) {
            var v = {
                headers: e.headers,
                statusCode: t
            }, y = {
                url: m,
                method: o,
                headers: n
            };
            i(this._options, v, y), this._sanitizeOptions(this._options);
        }
        this._performRequest();
    }, e.exports = A({
        http: l,
        https: c
    }), e.exports.wrap = A;
}
