// analysis/pretty/main.js:17388; webpack module 113
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.NetRequest = void 0;
    const r = n(0), i = r.__importDefault(n(71)), o = n(2), a = n(25), s = r.__importDefault(n(103)), l = n(37).Buffer;
    class c {
        constructor(e, t) {
            this.eventMap = new Map, this.options = {}, this.result = {
                isRes: !1,
                timer: null
            }, this.options = e, this.start(t);
        }
        abort() {
            var e;
            global.__log.info("net-request abort()"), null === (e = this.request) || void 0 === e || e.abort();
        }
        destroy() {
            global.__log.info("net-request destroy()"), this.abort();
        }
        end() {
            var e;
            global.__log.info("net-request end()"), null === (e = this.request) || void 0 === e || e.end();
        }
        start(e) {
            const t = this.options, n = this.getUrlByOptions(t), r = i.default(), a = o.session.fromPartition(r, {
                cache: !1
            });
            if (this.request = o.net.request({
                url: n,
                method: t.method,
                strictSSL: t.strictSSL,
                rejectUnauthorized: t.rejectUnauthorized,
                session: a
            }), "POST" == t.method && (this.request.chunkedEncoding = !0), this.request.setHeader("connection", "close"), 
            t.headers) for (const [e, n] of Object.entries(t.headers || {})) this.request.setHeader(e, "" + n);
            t.json ? this.request.end(JSON.stringify(t.json)) : "GET" == this.options.method && this.request.end(), 
            this.request.on("response", t => {
                global.__log.info("net-request response: " + JSON.stringify(t)), this.emit("response", t), 
                this.result.isRes = !0, this.removeTimeout();
                let n = new Uint8Array, r = [], i = 0;
                t.on("data", t => {
                    this.emit("data", t), e && (i += t.length, r.push(t));
                }), t.on("end", () => {
                    this.emit("end"), global.__log.info("net-request response end"), n = l.concat(r, i), 
                    global.__log.info(`net-request response endchunk.length: ${n.length}, buffers.length: ${r.length}`), 
                    t.body = this.getBody(n, this.options.json), e && e(null, t, t.body), this.emit("complete", t, t.body), 
                    r = [];
                }), t.on("aborted", () => {
                    global.__log.info("net-request response aborted");
                }), t.on("error", e => {
                    global.__log.info(`net-request response error ${e} ${JSON.stringify(e)}`), this.emit("error", e);
                });
            }), this.request.on("error", t => {
                this.removeTimeout(), global.__log.info(`net-request req error ${t} ${JSON.stringify(t)}`), 
                this.emit("error", t), e && e(t, null, null);
            }), this.request.on("abort", () => {
                this.removeTimeout(), global.__log.info("net-request req abort"), this.emit("abort");
            }), this.request.on("close", () => {
                global.__log.info("net-request req close"), this.emit("close");
            }), this.request.on("finish", () => {
                global.__log.info("net-request req finish"), this.emit("finish"), this.addTimeout();
            });
        }
        addTimeout() {
            const e = this.options.timeout || 18e4;
            this.result.timer = setTimeout(() => {
                var t;
                this.result.isRes || (global.__log.info("net-request timeout " + e), null === (t = this.request) || void 0 === t || t.abort());
            }, e);
        }
        removeTimeout() {
            this.result.timer && clearTimeout(this.result.timer);
        }
        getUrlByOptions(e) {
            return a.isString(e) ? e : e.url || e.uri;
        }
        getBody(e, t) {
            let n = (new TextDecoder).decode(e);
            if (t) try {
                n = JSON.parse(n);
            } catch (e) {
                console.log(e);
            }
            return n;
        }
        on(e, t) {
            return this.eventMap.set(e, t), this;
        }
        emit(e, ...t) {
            const n = this.eventMap.get(e);
            n && (n.apply(null, t), "response" == e && this.eventMap.delete(e));
        }
    }
    t.NetRequest = c;
    class u {
        static getInstance() {
            return u.instance || (u.instance = new u), u.instance;
        }
        transformRequestParam(e) {
            return {
                uri: e.uri.toString(),
                strictSSL: e.strictSSL,
                headers: e.headers
            };
        }
        get(e) {
            if (global.__log.info("net-request get start"), "darwin" == process.platform) {
                return this.start("GET", e);
            }
            return s.default.get(e);
        }
        post(e, t) {
            if (global.__log.info("net-request post start"), "darwin" == process.platform) {
                return this.start("POST", e, t);
            }
            return s.default.post(e, t);
        }
        start(e, t, n) {
            a.isString(t) ? t = {
                url: t
            } : t.method = e;
            return new c(t, n);
        }
    }
    t.default = u.getInstance();
}
