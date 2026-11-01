// analysis/pretty/main.js:100440; webpack module 1328
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.DigestTransform = t.HttpExecutor = t.HttpError = void 0, t.createHttpError = h, 
    t.parseJson = function(e) {
        return e.then(e => null == e || 0 === e.length ? null : JSON.parse(e));
    }, t.configureRequestOptionsFromUrl = g, t.configureRequestUrl = v, t.safeGetHeader = E, 
    t.configureRequestOptions = b, t.safeStringifyJson = w;
    const r = n(7), i = n(149), o = n(4), a = n(9), s = n(15), l = n(325), c = n(224), u = n(664), d = (0, 
    i.default)("electron-builder");
    function h(e, t = null) {
        return new f(e.statusCode || -1, `${e.statusCode} ${e.statusMessage}` + (null == t ? "" : "\n" + JSON.stringify(t, null, "  ")) + "\nHeaders: " + w(e.headers), t);
    }
    const p = new Map([ [ 429, "Too many requests" ], [ 400, "Bad request" ], [ 403, "Forbidden" ], [ 404, "Not found" ], [ 405, "Method not allowed" ], [ 406, "Not acceptable" ], [ 408, "Request timeout" ], [ 413, "Request entity too large" ], [ 500, "Internal server error" ], [ 502, "Bad gateway" ], [ 503, "Service unavailable" ], [ 504, "Gateway timeout" ], [ 505, "HTTP version not supported" ] ]);
    class f extends Error {
        constructor(e, t = "HTTP error: " + (p.get(e) || e), n = null) {
            super(t), this.statusCode = e, this.description = n, this.name = "HttpError", this.code = "HTTP_ERROR_" + e;
        }
        isServerError() {
            return this.statusCode >= 500 && this.statusCode <= 599;
        }
    }
    t.HttpError = f;
    class _ {
        constructor() {
            this.maxRedirects = 10;
        }
        request(e, t = new l.CancellationToken, n) {
            b(e);
            const r = null == n ? void 0 : JSON.stringify(n), i = r ? Buffer.from(r) : void 0;
            if (null != i) {
                d(r);
                const {headers: t, ...n} = e;
                e = {
                    method: "post",
                    headers: {
                        "Content-Type": "application/json",
                        "Content-Length": i.length,
                        ...t
                    },
                    ...n
                };
            }
            return this.doApiRequest(e, t, e => e.end(i));
        }
        doApiRequest(e, t, n, r = 0) {
            return d.enabled && d("Request: " + w(e)), t.createPromise((i, o, a) => {
                const s = this.createRequest(e, a => {
                    try {
                        this.handleResponse(a, e, t, i, o, r, n);
                    } catch (e) {
                        o(e);
                    }
                });
                this.addErrorAndTimeoutHandlers(s, o, e.timeout), this.addRedirectHandlers(s, e, o, r, e => {
                    this.doApiRequest(e, t, n, r).then(i).catch(o);
                }), n(s, o), a(() => s.abort());
            });
        }
        addRedirectHandlers(e, t, n, r, i) {}
        addErrorAndTimeoutHandlers(e, t, n = 6e4) {
            this.addTimeOutHandler(e, t, n), e.on("error", t), e.on("aborted", () => {
                t(new Error("Request has been aborted by the server"));
            });
        }
        handleResponse(e, t, n, r, i, o, a) {
            var s;
            if (d.enabled && d(`Response: ${e.statusCode} ${e.statusMessage}, request options: ${w(t)}`), 
            404 === e.statusCode) return void i(h(e, `method: ${t.method || "GET"} url: ${t.protocol || "https:"}//${t.hostname}${t.port ? ":" + t.port : ""}${t.path}\n\nPlease double check that your authentication token is correct. Due to security reasons, actual status maybe not reported, but 404.\n`));
            if (204 === e.statusCode) return void r();
            const l = null !== (s = e.statusCode) && void 0 !== s ? s : 0, c = l >= 300 && l < 400, u = E(e, "location");
            if (c && null != u) return o > this.maxRedirects ? void i(this.createMaxRedirectError()) : void this.doApiRequest(_.prepareRedirectUrlOptions(u, t), n, a, o).then(r).catch(i);
            e.setEncoding("utf8");
            let p = "";
            e.on("error", i), e.on("data", e => p += e), e.on("end", () => {
                try {
                    if (null != e.statusCode && e.statusCode >= 400) {
                        const n = E(e, "content-type"), r = null != n && (Array.isArray(n) ? null != n.find(e => e.includes("json")) : n.includes("json"));
                        i(h(e, `method: ${t.method || "GET"} url: ${t.protocol || "https:"}//${t.hostname}${t.port ? ":" + t.port : ""}${t.path}\n\n          Data:\n          ${r ? JSON.stringify(JSON.parse(p)) : p}\n          `));
                    } else r(0 === p.length ? null : p);
                } catch (e) {
                    i(e);
                }
            });
        }
        async downloadToBuffer(e, t) {
            return await t.cancellationToken.createPromise((n, r, i) => {
                const o = [], a = {
                    headers: t.headers || void 0,
                    redirect: "manual"
                };
                v(e, a), b(a), this.doDownload(a, {
                    destination: null,
                    options: t,
                    onCancel: i,
                    callback: e => {
                        null == e ? n(Buffer.concat(o)) : r(e);
                    },
                    responseHandler: (e, t) => {
                        let n = 0;
                        e.on("data", e => {
                            n += e.length, n > 524288e3 ? t(new Error("Maximum allowed size is 500 MB")) : o.push(e);
                        }), e.on("end", () => {
                            t(null);
                        });
                    }
                }, 0);
            });
        }
        doDownload(e, t, n) {
            const r = this.createRequest(e, r => {
                if (r.statusCode >= 400) return void t.callback(new Error(`Cannot download "${e.protocol || "https:"}//${e.hostname}${e.path}", status ${r.statusCode}: ${r.statusMessage}`));
                r.on("error", t.callback);
                const i = E(r, "location");
                null == i ? null == t.responseHandler ? function(e, t) {
                    if (!function(e, t, n) {
                        if (null != e && null != t && e !== t) return n(new Error(`checksum mismatch: expected ${t} but got ${e} (X-Checksum-Sha2 header)`)), 
                        !1;
                        return !0;
                    }(E(t, "X-Checksum-Sha2"), e.options.sha2, e.callback)) return;
                    const n = [];
                    if (null != e.options.onProgress) {
                        const r = E(t, "content-length");
                        null != r && n.push(new u.ProgressCallbackTransform(parseInt(r, 10), e.options.cancellationToken, e.options.onProgress));
                    }
                    const r = e.options.sha512;
                    null != r ? n.push(new y(r, "sha512", 128 !== r.length || r.includes("+") || r.includes("Z") || r.includes("=") ? "base64" : "hex")) : null != e.options.sha2 && n.push(new y(e.options.sha2, "sha256", "hex"));
                    const i = (0, o.createWriteStream)(e.destination);
                    n.push(i);
                    let a = t;
                    for (const t of n) t.on("error", t => {
                        i.close(), e.options.cancellationToken.cancelled || e.callback(t);
                    }), a = a.pipe(t);
                    i.on("finish", () => {
                        i.close(e.callback);
                    });
                }(t, r) : t.responseHandler(r, t.callback) : n < this.maxRedirects ? this.doDownload(_.prepareRedirectUrlOptions(i, e), t, n++) : t.callback(this.createMaxRedirectError());
            });
            this.addErrorAndTimeoutHandlers(r, t.callback, e.timeout), this.addRedirectHandlers(r, e, t.callback, n, e => {
                this.doDownload(e, t, n++);
            }), r.end();
        }
        createMaxRedirectError() {
            return new Error(`Too many redirects (> ${this.maxRedirects})`);
        }
        addTimeOutHandler(e, t, n) {
            e.on("socket", r => {
                r.setTimeout(n, () => {
                    e.abort(), t(new Error("Request timed out"));
                });
            });
        }
        static prepareRedirectUrlOptions(e, t) {
            const n = g(e, {
                ...t
            }), r = n.headers;
            if (null == r ? void 0 : r.authorization) {
                const n = _.reconstructOriginalUrl(t), i = m(e, t);
                _.isCrossOriginRedirect(n, i) && (d.enabled && d(`Given the cross-origin redirect (from ${n.host} to ${i.host}), the Authorization header will be stripped out.`), 
                delete r.authorization);
            }
            return n;
        }
        static reconstructOriginalUrl(e) {
            const t = e.protocol || "https:";
            if (!e.hostname) throw new Error("Missing hostname in request options");
            const n = e.hostname, r = e.port ? ":" + e.port : "", i = e.path || "/";
            return new s.URL(`${t}//${n}${r}${i}`);
        }
        static isCrossOriginRedirect(e, t) {
            if (e.hostname.toLowerCase() !== t.hostname.toLowerCase()) return !0;
            if ("http:" === e.protocol && [ "80", "" ].includes(e.port) && "https:" === t.protocol && [ "443", "" ].includes(t.port)) return !1;
            if (e.protocol !== t.protocol) return !0;
            return e.port !== t.port;
        }
        static retryOnServerError(e, t = 3) {
            for (let n = 0; ;n++) try {
                return e();
            } catch (e) {
                if (n < t && (e instanceof f && e.isServerError() || "EPIPE" === e.code)) continue;
                throw e;
            }
        }
    }
    function m(e, t) {
        try {
            return new s.URL(e);
        } catch {
            const n = t.hostname, r = `${t.protocol || "https:"}//${n}${t.port ? ":" + t.port : ""}`;
            return new s.URL(e, r);
        }
    }
    function g(e, t) {
        const n = b(t);
        return v(m(e, t), n), n;
    }
    function v(e, t) {
        t.protocol = e.protocol, t.hostname = e.hostname, e.port ? t.port = e.port : t.port && delete t.port, 
        t.path = e.pathname + e.search;
    }
    t.HttpExecutor = _;
    class y extends a.Transform {
        get actual() {
            return this._actual;
        }
        constructor(e, t = "sha512", n = "base64") {
            super(), this.expected = e, this.algorithm = t, this.encoding = n, this._actual = null, 
            this.isValidateOnEnd = !0, this.digester = (0, r.createHash)(t);
        }
        _transform(e, t, n) {
            this.digester.update(e), n(null, e);
        }
        _flush(e) {
            if (this._actual = this.digester.digest(this.encoding), this.isValidateOnEnd) try {
                this.validate();
            } catch (t) {
                return void e(t);
            }
            e(null);
        }
        validate() {
            if (null == this._actual) throw (0, c.newError)("Not finished yet", "ERR_STREAM_NOT_FINISHED");
            if (this._actual !== this.expected) throw (0, c.newError)(`${this.algorithm} checksum mismatch, expected ${this.expected}, got ${this._actual}`, "ERR_CHECKSUM_MISMATCH");
            return null;
        }
    }
    function E(e, t) {
        const n = e.headers[t];
        return null == n ? null : Array.isArray(n) ? 0 === n.length ? null : n[n.length - 1] : n;
    }
    function b(e, t, n) {
        null != n && (e.method = n), e.headers = {
            ...e.headers
        };
        const r = e.headers;
        return null != t && (r.authorization = t.startsWith("Basic") || t.startsWith("Bearer") ? t : "token " + t), 
        null == r["User-Agent"] && (r["User-Agent"] = "electron-builder"), null != n && "GET" !== n && null != r["Cache-Control"] || (r["Cache-Control"] = "no-cache"), 
        null == e.protocol && null != process.versions.electron && (e.protocol = "https:"), 
        e;
    }
    function w(e, t) {
        return JSON.stringify(e, (e, n) => e.endsWith("Authorization") || e.endsWith("authorization") || e.endsWith("Password") || e.endsWith("PASSWORD") || e.endsWith("Token") || e.includes("password") || e.includes("token") || null != t && t.has(e) ? "<stripped sensitive data>" : n, 2);
    }
    t.DigestTransform = y;
}
