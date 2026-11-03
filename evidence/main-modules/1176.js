// analysis/pretty/main.js:92487; webpack module 1176
function(e, t, n) {
    "use strict";
    var r = n(39), i = n(43), o = n(15), a = n(5), s = n(9), l = n(30), c = n(1177), u = n(1178), d = n(1180), h = n(128), p = n(299), f = n(1194), _ = n(1195), m = n(289), g = n(635), v = n(636).strict, y = n(290), E = n(624), b = n(1197), w = n(1198).Querystring, S = n(1201).Har, T = n(1258).Auth, A = n(1261).OAuth, O = n(1263), C = n(1264).Multipart, N = n(1265).Redirect, I = n(1266).Tunnel, R = n(1268), D = n(37).Buffer, L = y.safeStringify, k = y.isReadStream, M = y.toBase64, P = y.defer, x = y.copy, F = y.version, j = E.jar(), U = {};
    function W() {
        return {
            uri: this.uri,
            method: this.method,
            headers: this.headers
        };
    }
    function B() {
        return {
            statusCode: this.statusCode,
            body: this.body,
            headers: this.headers,
            request: W.call(this.request)
        };
    }
    function H(e) {
        e.har && (this._har = new S(this), e = this._har.options(e)), s.Stream.call(this);
        var t = Object.keys(H.prototype), n = function(e, t) {
            var n = {};
            for (var r in t) {
                -1 === e.indexOf(r) && (n[r] = t[r]);
            }
            return n;
        }(t, e);
        m(this, n), e = function(e, t) {
            var n = {};
            for (var r in t) {
                var i = !(-1 === e.indexOf(r)), o = "function" == typeof t[r];
                i && o || (n[r] = t[r]);
            }
            return n;
        }(t, e), this.readable = !0, this.writable = !0, e.method && (this.explicitMethod = !0), 
        this._qs = new w(this), this._auth = new T(this), this._oauth = new A(this), this._multipart = new C(this), 
        this._redirect = new N(this), this._tunnel = new I(this), this.init(e);
    }
    function $() {
        H.debug && console.error("REQUEST %s", a.format.apply(a, arguments));
    }
    a.inherits(H, s.Stream), H.debug = process.env.NODE_DEBUG && /\brequest\b/.test(process.env.NODE_DEBUG), 
    H.prototype.debug = $, H.prototype.init = function(e) {
        var t = this;
        for (var n in e || (e = {}), t.headers = t.headers ? x(t.headers) : {}, t.headers) void 0 === t.headers[n] && delete t.headers[n];
        if (p.httpify(t, t.headers), t.method || (t.method = e.method || "GET"), t.localAddress || (t.localAddress = e.localAddress), 
        t._qs.init(e), $(e), t.pool || !1 === t.pool || (t.pool = U), t.dests = t.dests || [], 
        t.__isRequestRequest = !0, !t._callback && t.callback && (t._callback = t.callback, 
        t.callback = function() {
            t._callbackCalled || (t._callbackCalled = !0, t._callback.apply(t, arguments));
        }, t.on("error", t.callback.bind()), t.on("complete", t.callback.bind(t, null))), 
        !t.uri && t.url && (t.uri = t.url, delete t.url), t.baseUrl) {
            if ("string" != typeof t.baseUrl) return t.emit("error", new Error("options.baseUrl must be a string"));
            if ("string" != typeof t.uri) return t.emit("error", new Error("options.uri must be a string when using options.baseUrl"));
            if (0 === t.uri.indexOf("//") || -1 !== t.uri.indexOf("://")) return t.emit("error", new Error("options.uri must be a path when using options.baseUrl"));
            var a = t.baseUrl.lastIndexOf("/") === t.baseUrl.length - 1, s = 0 === t.uri.indexOf("/");
            a && s ? t.uri = t.baseUrl + t.uri.slice(1) : a || s ? t.uri = t.baseUrl + t.uri : "" === t.uri ? t.uri = t.baseUrl : t.uri = t.baseUrl + "/" + t.uri, 
            delete t.baseUrl;
        }
        if (!t.uri) return t.emit("error", new Error("options.uri is a required argument"));
        if ("string" == typeof t.uri && (t.uri = o.parse(t.uri)), t.uri.href || (t.uri.href = o.format(t.uri)), 
        "unix:" === t.uri.protocol) return t.emit("error", new Error("`unix://` URL scheme is no longer supported. Please use the format `http://unix:SOCKET:PATH`"));
        if ("unix" === t.uri.host && t.enableUnixSocket(), !1 === t.strictSSL && (t.rejectUnauthorized = !1), 
        t.uri.pathname || (t.uri.pathname = "/"), !(t.uri.host || t.uri.hostname && t.uri.port || t.uri.isUnix)) {
            var l = 'Invalid URI "' + o.format(t.uri) + '"';
            return 0 === Object.keys(e).length && (l += ". This can be caused by a crappy redirection."), 
            t.abort(), t.emit("error", new Error(l));
        }
        if (t.hasOwnProperty("proxy") || (t.proxy = b(t.uri)), t.tunnel = t._tunnel.isEnabled(), 
        t.proxy && t._tunnel.setup(e), t._redirect.onRequest(e), t.setHost = !1, !t.hasHeader("host")) {
            var c = t.originalHostHeaderName || "host";
            t.setHeader(c, t.uri.host), t.uri.port && ("80" === t.uri.port && "http:" === t.uri.protocol || "443" === t.uri.port && "https:" === t.uri.protocol) && t.setHeader(c, t.uri.hostname), 
            t.setHost = !0;
        }
        if (t.jar(t._jar || e.jar), t.uri.port || ("http:" === t.uri.protocol ? t.uri.port = 80 : "https:" === t.uri.protocol && (t.uri.port = 443)), 
        t.proxy && !t.tunnel ? (t.port = t.proxy.port, t.host = t.proxy.hostname) : (t.port = t.uri.port, 
        t.host = t.uri.hostname), e.form && t.form(e.form), e.formData) {
            var u = e.formData, d = t.form(), _ = function(e, t) {
                t && t.hasOwnProperty("value") && t.hasOwnProperty("options") ? d.append(e, t.value, t.options) : d.append(e, t);
            };
            for (var m in u) if (u.hasOwnProperty(m)) {
                var y = u[m];
                if (y instanceof Array) for (var E = 0; E < y.length; E++) _(m, y[E]); else _(m, y);
            }
        }
        if (e.qs && t.qs(e.qs), t.uri.path ? t.path = t.uri.path : t.path = t.uri.pathname + (t.uri.search || ""), 
        0 === t.path.length && (t.path = "/"), e.aws && t.aws(e.aws), e.hawk && t.hawk(e.hawk), 
        e.httpSignature && t.httpSignature(e.httpSignature), e.auth && (Object.prototype.hasOwnProperty.call(e.auth, "username") && (e.auth.user = e.auth.username), 
        Object.prototype.hasOwnProperty.call(e.auth, "password") && (e.auth.pass = e.auth.password), 
        t.auth(e.auth.user, e.auth.pass, e.auth.sendImmediately, e.auth.bearer)), t.gzip && !t.hasHeader("accept-encoding") && t.setHeader("accept-encoding", "gzip, deflate"), 
        t.uri.auth && !t.hasHeader("authorization")) {
            var w = t.uri.auth.split(":").map(function(e) {
                return t._qs.unescape(e);
            });
            t.auth(w[0], w.slice(1).join(":"), !0);
        }
        if (!t.tunnel && t.proxy && t.proxy.auth && !t.hasHeader("proxy-authorization")) {
            var S = t.proxy.auth.split(":").map(function(e) {
                return t._qs.unescape(e);
            }), T = "Basic " + M(S.join(":"));
            t.setHeader("proxy-authorization", T);
        }
        function A() {
            var e;
            (v(t.body) && (t.body = D.from(t.body)), t.hasHeader("content-length")) || ((e = "string" == typeof t.body ? D.byteLength(t.body) : Array.isArray(t.body) ? t.body.reduce(function(e, t) {
                return e + t.length;
            }, 0) : t.body.length) ? t.setHeader("content-length", e) : t.emit("error", new Error("Argument error, options.body.")));
        }
        t.proxy && !t.tunnel && (t.path = t.uri.protocol + "//" + t.uri.host + t.path), 
        e.json && t.json(e.json), e.multipart && t.multipart(e.multipart), e.time && (t.timing = !0, 
        t.elapsedTime = t.elapsedTime || 0), t.body && !g(t.body) && A(), e.oauth ? t.oauth(e.oauth) : t._oauth.params && t.hasHeader("authorization") && t.oauth(t._oauth.params);
        var O = t.proxy && !t.tunnel ? t.proxy.protocol : t.uri.protocol, C = {
            "http:": r,
            "https:": i
        }, N = t.httpModules || {};
        if (t.httpModule = N[O] || C[O], !t.httpModule) return t.emit("error", new Error("Invalid protocol: " + O));
        if (e.ca && (t.ca = e.ca), !t.agent) if (e.agentOptions && (t.agentOptions = e.agentOptions), 
        e.agentClass) t.agentClass = e.agentClass; else if (e.forever) {
            var I = F();
            0 === I.major && I.minor <= 10 ? t.agentClass = "http:" === O ? f : f.SSL : (t.agentClass = t.httpModule.Agent, 
            t.agentOptions = t.agentOptions || {}, t.agentOptions.keepAlive = !0);
        } else t.agentClass = t.httpModule.Agent;
        !1 === t.pool ? t.agent = !1 : t.agent = t.agent || t.getNewAgent(), t.on("pipe", function(e) {
            if (t.ntick && t._started && t.emit("error", new Error("You cannot pipe to this stream after the outbound request has started.")), 
            t.src = e, k(e)) t.hasHeader("content-type") || t.setHeader("content-type", h.lookup(e.path)); else {
                if (e.headers) for (var n in e.headers) t.hasHeader(n) || t.setHeader(n, e.headers[n]);
                t._json && !t.hasHeader("content-type") && t.setHeader("content-type", "application/json"), 
                e.method && !t.explicitMethod && (t.method = e.method);
            }
        }), P(function() {
            if (!t._aborted) {
                var e = function() {
                    if (t._form && (t._auth.hasAuth ? t._auth.hasAuth && t._auth.sentAuth && t._form.pipe(t) : t._form.pipe(t)), 
                    t._multipart && t._multipart.chunked && t._multipart.body.pipe(t), t.body) g(t.body) ? t.body.pipe(t) : (A(), 
                    Array.isArray(t.body) ? t.body.forEach(function(e) {
                        t.write(e);
                    }) : t.write(t.body), t.end()); else if (t.requestBodyStream) console.warn("options.requestBodyStream is deprecated, please pass the request object to stream.pipe."), 
                    t.requestBodyStream.pipe(t); else if (!t.src) {
                        if (t._auth.hasAuth && !t._auth.sentAuth) return void t.end();
                        "GET" !== t.method && void 0 !== t.method && t.setHeader("content-length", 0), t.end();
                    }
                };
                t._form && !t.hasHeader("content-length") ? (t.setHeader(t._form.getHeaders(), !0), 
                t._form.getLength(function(n, r) {
                    n || isNaN(r) || t.setHeader("content-length", r), e();
                })) : e(), t.ntick = !0;
            }
        });
    }, H.prototype.getNewAgent = function() {
        var e = this.agentClass, t = {};
        if (this.agentOptions) for (var n in this.agentOptions) t[n] = this.agentOptions[n];
        this.ca && (t.ca = this.ca), this.ciphers && (t.ciphers = this.ciphers), this.secureProtocol && (t.secureProtocol = this.secureProtocol), 
        this.secureOptions && (t.secureOptions = this.secureOptions), void 0 !== this.rejectUnauthorized && (t.rejectUnauthorized = this.rejectUnauthorized), 
        this.cert && this.key && (t.key = this.key, t.cert = this.cert), this.pfx && (t.pfx = this.pfx), 
        this.passphrase && (t.passphrase = this.passphrase);
        var r = "";
        e !== this.httpModule.Agent && (r += e.name);
        var i = this.proxy;
        return "string" == typeof i && (i = o.parse(i)), (i && "https:" === i.protocol || "https:" === this.uri.protocol) && (t.ca && (r && (r += ":"), 
        r += t.ca), void 0 !== t.rejectUnauthorized && (r && (r += ":"), r += t.rejectUnauthorized), 
        t.cert && (r && (r += ":"), r += t.cert.toString("ascii") + t.key.toString("ascii")), 
        t.pfx && (r && (r += ":"), r += t.pfx.toString("ascii")), t.ciphers && (r && (r += ":"), 
        r += t.ciphers), t.secureProtocol && (r && (r += ":"), r += t.secureProtocol), t.secureOptions && (r && (r += ":"), 
        r += t.secureOptions)), this.pool === U && !r && 0 === Object.keys(t).length && this.httpModule.globalAgent ? this.httpModule.globalAgent : (r = this.uri.protocol + r, 
        this.pool[r] || (this.pool[r] = new e(t), this.pool.maxSockets && (this.pool[r].maxSockets = this.pool.maxSockets)), 
        this.pool[r]);
    }, H.prototype.start = function() {
        var e = this;
        if (e.timing) var t = (new Date).getTime(), n = R();
        if (!e._aborted) {
            e._started = !0, e.method = e.method || "GET", e.href = e.uri.href, e.src && e.src.stat && e.src.stat.size && !e.hasHeader("content-length") && e.setHeader("content-length", e.src.stat.size), 
            e._aws && e.aws(e._aws, !0);
            var r, i = x(e);
            delete i.auth, $("make request", e.uri.href), delete i.timeout;
            try {
                e.req = e.httpModule.request(i);
            } catch (t) {
                return void e.emit("error", t);
            }
            e.timing && (e.startTime = t, e.startTimeNow = n, e.timings = {}), e.timeout && !e.timeoutTimer && (e.timeout < 0 ? r = 0 : "number" == typeof e.timeout && isFinite(e.timeout) && (r = e.timeout)), 
            e.req.on("response", e.onRequestResponse.bind(e)), e.req.on("error", e.onRequestError.bind(e)), 
            e.req.on("drain", function() {
                e.emit("drain");
            }), e.req.on("socket", function(t) {
                var n = t._connecting || t.connecting;
                if (e.timing && (e.timings.socket = R() - e.startTimeNow, n)) {
                    var i = function() {
                        e.timings.lookup = R() - e.startTimeNow;
                    }, o = function() {
                        e.timings.connect = R() - e.startTimeNow;
                    };
                    t.once("lookup", i), t.once("connect", o), e.req.once("error", function() {
                        t.removeListener("lookup", i), t.removeListener("connect", o);
                    });
                }
                var a = function() {
                    e.req.setTimeout(r, function() {
                        if (e.req) {
                            e.abort();
                            var t = new Error("ESOCKETTIMEDOUT");
                            t.code = "ESOCKETTIMEDOUT", t.connect = !1, e.emit("error", t);
                        }
                    });
                };
                if (void 0 !== r) if (n) {
                    var s = function() {
                        t.removeListener("connect", s), e.clearTimeout(), a();
                    };
                    t.on("connect", s), e.req.on("error", function(e) {
                        t.removeListener("connect", s);
                    }), e.timeoutTimer = setTimeout(function() {
                        t.removeListener("connect", s), e.abort();
                        var n = new Error("ETIMEDOUT");
                        n.code = "ETIMEDOUT", n.connect = !0, e.emit("error", n);
                    }, r);
                } else a();
                e.emit("socket", t);
            }), e.emit("request", e.req);
        }
    }, H.prototype.onRequestError = function(e) {
        if (!this._aborted) {
            if (this.req && this.req._reusedSocket && "ECONNRESET" === e.code && this.agent.addRequestNoreuse) return this.agent = {
                addRequest: this.agent.addRequestNoreuse.bind(this.agent)
            }, this.start(), void this.req.end();
            this.clearTimeout(), this.emit("error", e);
        }
    }, H.prototype.onRequestResponse = function(e) {
        var t = this;
        if (t.timing && (t.timings.response = R() - t.startTimeNow), $("onRequestResponse", t.uri.href, e.statusCode, e.headers), 
        e.on("end", function() {
            t.timing && (t.timings.end = R() - t.startTimeNow, e.timingStart = t.startTime, 
            t.timings.socket || (t.timings.socket = 0), t.timings.lookup || (t.timings.lookup = t.timings.socket), 
            t.timings.connect || (t.timings.connect = t.timings.lookup), t.timings.response || (t.timings.response = t.timings.connect), 
            $("elapsed time", t.timings.end), t.elapsedTime += Math.round(t.timings.end), e.elapsedTime = t.elapsedTime, 
            e.timings = t.timings, e.timingPhases = {
                wait: t.timings.socket,
                dns: t.timings.lookup - t.timings.socket,
                tcp: t.timings.connect - t.timings.lookup,
                firstByte: t.timings.response - t.timings.connect,
                download: t.timings.end - t.timings.response,
                total: t.timings.end
            }), $("response end", t.uri.href, e.statusCode, e.headers);
        }), t._aborted) return $("aborted", t.uri.href), void e.resume();
        if (t.response = e, e.request = t, e.toJSON = B, t.httpModule !== i || !t.strictSSL || e.hasOwnProperty("socket") && e.socket.authorized) {
            t.originalHost = t.getHeader("host"), t.originalHostHeaderName || (t.originalHostHeaderName = t.hasHeader("host")), 
            t.setHost && t.removeHeader("host"), t.clearTimeout();
            var n = t._jar && t._jar.setCookie ? t._jar : j, r = function(e) {
                try {
                    n.setCookie(e, t.uri.href, {
                        ignoreError: !0
                    });
                } catch (e) {
                    t.emit("error", e);
                }
            };
            if (e.caseless = p(e.headers), e.caseless.has("set-cookie") && !t._disableCookies) {
                var o = e.caseless.has("set-cookie");
                Array.isArray(e.headers[o]) ? e.headers[o].forEach(r) : r(e.headers[o]);
            }
            if (!t._redirect.onResponse(e)) {
                e.on("close", function() {
                    t._ended || t.response.emit("end");
                }), e.once("end", function() {
                    t._ended = !0;
                });
                var a, s;
                if (!t.gzip || (s = e.statusCode, "HEAD" === t.method || s >= 100 && s < 200 || 204 === s || 304 === s)) a = e; else {
                    var c = e.headers["content-encoding"] || "identity";
                    c = c.trim().toLowerCase();
                    var u = {
                        flush: l.Z_SYNC_FLUSH,
                        finishFlush: l.Z_SYNC_FLUSH
                    };
                    "gzip" === c ? (a = l.createGunzip(u), e.pipe(a)) : "deflate" === c ? (a = l.createInflate(u), 
                    e.pipe(a)) : ("identity" !== c && $("ignoring unrecognized Content-Encoding " + c), 
                    a = e);
                }
                t.encoding && (0 !== t.dests.length ? console.error("Ignoring encoding parameter as this stream is being piped to another stream which makes the encoding option invalid.") : a.setEncoding(t.encoding)), 
                t._paused && a.pause(), t.responseContent = a, t.emit("response", e), t.dests.forEach(function(e) {
                    t.pipeDest(e);
                }), a.on("data", function(n) {
                    t.timing && !t.responseStarted && (t.responseStartTime = (new Date).getTime(), e.responseStartTime = t.responseStartTime), 
                    t._destdata = !0, t.emit("data", n);
                }), a.once("end", function(e) {
                    t.emit("end", e);
                }), a.on("error", function(e) {
                    t.emit("error", e);
                }), a.on("close", function() {
                    t.emit("close");
                }), t.callback ? t.readResponseBody(e) : t.on("end", function() {
                    t._aborted ? $("aborted", t.uri.href) : t.emit("complete", e);
                }), $("finish init function", t.uri.href);
            }
        } else {
            $("strict ssl error", t.uri.href);
            var d = e.hasOwnProperty("socket") ? e.socket.authorizationError : t.uri.href + " does not support SSL";
            t.emit("error", new Error("SSL Error: " + d));
        }
    }, H.prototype.readResponseBody = function(e) {
        var t = this;
        $("reading response's body");
        var n = [], r = 0, i = [];
        t.on("data", function(e) {
            D.isBuffer(e) ? e.length && (r += e.length, n.push(e)) : i.push(e);
        }), t.on("end", function() {
            if ($("end event", t.uri.href), t._aborted) return $("aborted", t.uri.href), n = [], 
            void (r = 0);
            if (r ? ($("has body", t.uri.href, r), e.body = D.concat(n, r), null !== t.encoding && (e.body = e.body.toString(t.encoding)), 
            n = [], r = 0) : i.length && ("utf8" === t.encoding && i[0].length > 0 && "\ufeff" === i[0][0] && (i[0] = i[0].substring(1)), 
            e.body = i.join("")), t._json) try {
                e.body = JSON.parse(e.body, t._jsonReviver);
            } catch (e) {
                $("invalid JSON received", t.uri.href);
            }
            $("emitting complete", t.uri.href), void 0 !== e.body || t._json || (e.body = null === t.encoding ? D.alloc(0) : ""), 
            t.emit("complete", e, e.body);
        });
    }, H.prototype.abort = function() {
        this._aborted = !0, this.req ? this.req.abort() : this.response && this.response.destroy(), 
        this.clearTimeout(), this.emit("abort");
    }, H.prototype.pipeDest = function(e) {
        var t = this.response;
        if (e.headers && !e.headersSent) {
            if (t.caseless.has("content-type")) {
                var n = t.caseless.has("content-type");
                e.setHeader ? e.setHeader(n, t.headers[n]) : e.headers[n] = t.headers[n];
            }
            if (t.caseless.has("content-length")) {
                var r = t.caseless.has("content-length");
                e.setHeader ? e.setHeader(r, t.headers[r]) : e.headers[r] = t.headers[r];
            }
        }
        if (e.setHeader && !e.headersSent) {
            for (var i in t.headers) this.gzip && "content-encoding" === i || e.setHeader(i, t.headers[i]);
            e.statusCode = t.statusCode;
        }
        this.pipefilter && this.pipefilter(t, e);
    }, H.prototype.qs = function(e, t) {
        var n;
        for (var r in n = !t && this.uri.query ? this._qs.parse(this.uri.query) : {}, e) n[r] = e[r];
        var i = this._qs.stringify(n);
        return "" === i || (this.uri = o.parse(this.uri.href.split("?")[0] + "?" + i), this.url = this.uri, 
        this.path = this.uri.path, "unix" === this.uri.host && this.enableUnixSocket()), 
        this;
    }, H.prototype.form = function(e) {
        var t = this;
        return e ? (/^application\/x-www-form-urlencoded\b/.test(t.getHeader("content-type")) || t.setHeader("content-type", "application/x-www-form-urlencoded"), 
        t.body = "string" == typeof e ? t._qs.rfc3986(e.toString("utf8")) : t._qs.stringify(e).toString("utf8"), 
        t) : (t._form = new _, t._form.on("error", function(e) {
            e.message = "form-data: " + e.message, t.emit("error", e), t.abort();
        }), t._form);
    }, H.prototype.multipart = function(e) {
        return this._multipart.onRequest(e), this._multipart.chunked || (this.body = this._multipart.body), 
        this;
    }, H.prototype.json = function(e) {
        return this.hasHeader("accept") || this.setHeader("accept", "application/json"), 
        "function" == typeof this.jsonReplacer && (this._jsonReplacer = this.jsonReplacer), 
        this._json = !0, "boolean" == typeof e ? void 0 !== this.body && (/^application\/x-www-form-urlencoded\b/.test(this.getHeader("content-type")) ? this.body = this._qs.rfc3986(this.body) : this.body = L(this.body, this._jsonReplacer), 
        this.hasHeader("content-type") || this.setHeader("content-type", "application/json")) : (this.body = L(e, this._jsonReplacer), 
        this.hasHeader("content-type") || this.setHeader("content-type", "application/json")), 
        "function" == typeof this.jsonReviver && (this._jsonReviver = this.jsonReviver), 
        this;
    }, H.prototype.getHeader = function(e, t) {
        var n, r;
        return t || (t = this.headers), Object.keys(t).forEach(function(i) {
            i.length === e.length && (r = new RegExp(e, "i"), i.match(r) && (n = t[i]));
        }), n;
    }, H.prototype.enableUnixSocket = function() {
        var e = this.uri.path.split(":"), t = e[0], n = e[1];
        this.socketPath = t, this.uri.pathname = n, this.uri.path = n, this.uri.host = t, 
        this.uri.hostname = t, this.uri.isUnix = !0;
    }, H.prototype.auth = function(e, t, n, r) {
        return this._auth.onRequest(e, t, n, r), this;
    }, H.prototype.aws = function(e, t) {
        if (!t) return this._aws = e, this;
        if (4 === e.sign_version || "4" === e.sign_version) {
            var n = {
                host: this.uri.host,
                path: this.uri.path,
                method: this.method,
                headers: this.headers,
                body: this.body
            };
            e.service && (n.service = e.service);
            var r = u.sign(n, {
                accessKeyId: e.key,
                secretAccessKey: e.secret,
                sessionToken: e.session
            });
            this.setHeader("authorization", r.headers.Authorization), this.setHeader("x-amz-date", r.headers["X-Amz-Date"]), 
            r.headers["X-Amz-Security-Token"] && this.setHeader("x-amz-security-token", r.headers["X-Amz-Security-Token"]);
        } else {
            var i = new Date;
            this.setHeader("date", i.toUTCString());
            var o = {
                key: e.key,
                secret: e.secret,
                verb: this.method.toUpperCase(),
                date: i,
                contentType: this.getHeader("content-type") || "",
                md5: this.getHeader("content-md5") || "",
                amazonHeaders: c.canonicalizeHeaders(this.headers)
            }, a = this.uri.path;
            e.bucket && a ? o.resource = "/" + e.bucket + a : e.bucket && !a ? o.resource = "/" + e.bucket : !e.bucket && a ? o.resource = a : e.bucket || a || (o.resource = "/"), 
            o.resource = c.canonicalizeResource(o.resource), this.setHeader("authorization", c.authorization(o));
        }
        return this;
    }, H.prototype.httpSignature = function(e) {
        var t = this;
        return d.signRequest({
            getHeader: function(e) {
                return t.getHeader(e, t.headers);
            },
            setHeader: function(e, n) {
                t.setHeader(e, n);
            },
            method: t.method,
            path: t.path
        }, e), $("httpSignature authorization", t.getHeader("authorization")), t;
    }, H.prototype.hawk = function(e) {
        this.setHeader("Authorization", O.header(this.uri, this.method, e));
    }, H.prototype.oauth = function(e) {
        return this._oauth.onRequest(e), this;
    }, H.prototype.jar = function(e) {
        var t;
        if (0 === this._redirect.redirectsFollowed && (this.originalCookieHeader = this.getHeader("cookie")), 
        e) {
            var n = e.getCookieString ? e : j, r = this.uri.href;
            n && (t = n.getCookieString(r));
        } else t = !1, this._disableCookies = !0;
        return t && t.length && (this.originalCookieHeader ? this.setHeader("cookie", this.originalCookieHeader + "; " + t) : this.setHeader("cookie", t)), 
        this._jar = e, this;
    }, H.prototype.pipe = function(e, t) {
        if (!this.response) return this.dests.push(e), s.Stream.prototype.pipe.call(this, e, t), 
        e;
        if (this._destdata) this.emit("error", new Error("You cannot pipe after data has been emitted from the response.")); else {
            if (!this._ended) return s.Stream.prototype.pipe.call(this, e, t), this.pipeDest(e), 
            e;
            this.emit("error", new Error("You cannot pipe after the response has been ended."));
        }
    }, H.prototype.write = function() {
        var e = this;
        if (!e._aborted) return e._started || e.start(), e.req ? e.req.write.apply(e.req, arguments) : void 0;
    }, H.prototype.end = function(e) {
        this._aborted || (e && this.write(e), this._started || this.start(), this.req && this.req.end());
    }, H.prototype.pause = function() {
        var e = this;
        e.responseContent ? e.responseContent.pause.apply(e.responseContent, arguments) : e._paused = !0;
    }, H.prototype.resume = function() {
        var e = this;
        e.responseContent ? e.responseContent.resume.apply(e.responseContent, arguments) : e._paused = !1;
    }, H.prototype.destroy = function() {
        this.clearTimeout(), this._ended ? this.response && this.response.destroy() : this.end();
    }, H.prototype.clearTimeout = function() {
        this.timeoutTimer && (clearTimeout(this.timeoutTimer), this.timeoutTimer = null);
    }, H.defaultProxyHeaderWhiteList = I.defaultProxyHeaderWhiteList.slice(), H.defaultProxyHeaderExclusiveList = I.defaultProxyHeaderExclusiveList.slice(), 
    H.prototype.toJSON = W, e.exports = H;
}
