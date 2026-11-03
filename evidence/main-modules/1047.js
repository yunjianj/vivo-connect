// analysis/pretty/main.js:83327; webpack module 1047
function(e, t, n) {
    "use strict";
    const r = n(39), i = n(43), {Stream: o} = n(38), a = n(120), s = n(202);
    e.exports = class extends a {
        constructor(e = {}) {
            super(e), this.options = e, this.name = e.name || "http", this.ssl = !!e.ssl, this.host = e.host || "localhost", 
            this.port = e.port, this.auth = e.auth, this.path = e.path || "", this.agent = e.agent, 
            this.headers = e.headers || {}, this.headers["content-type"] = "application/json", 
            this.batch = e.batch || !1, this.batchInterval = e.batchInterval || 5e3, this.batchCount = e.batchCount || 10, 
            this.batchOptions = [], this.batchTimeoutID = -1, this.batchCallback = {}, this.port || (this.port = this.ssl ? 443 : 80);
        }
        log(e, t) {
            this._request(e, (t, n) => {
                n && 200 !== n.statusCode && (t = new Error("Invalid HTTP Status Code: " + n.statusCode)), 
                t ? this.emit("warn", t) : this.emit("logged", e);
            }), t && setImmediate(t);
        }
        query(e, t) {
            "function" == typeof e && (t = e, e = {}), (e = {
                method: "query",
                params: this.normalizeQuery(e)
            }).params.path && (e.path = e.params.path, delete e.params.path), e.params.auth && (e.auth = e.params.auth, 
            delete e.params.auth), this._request(e, (e, n, r) => {
                if (n && 200 !== n.statusCode && (e = new Error("Invalid HTTP Status Code: " + n.statusCode)), 
                e) return t(e);
                if ("string" == typeof r) try {
                    r = JSON.parse(r);
                } catch (e) {
                    return t(e);
                }
                t(null, r);
            });
        }
        stream(e = {}) {
            const t = new o;
            (e = {
                method: "stream",
                params: e
            }).params.path && (e.path = e.params.path, delete e.params.path), e.params.auth && (e.auth = e.params.auth, 
            delete e.params.auth);
            let n = "";
            const r = this._request(e);
            return t.destroy = () => r.destroy(), r.on("data", e => {
                const r = (e = (n + e).split(/\n+/)).length - 1;
                let i = 0;
                for (;i < r; i++) try {
                    t.emit("log", JSON.parse(e[i]));
                } catch (e) {
                    t.emit("error", e);
                }
                n = e[r];
            }), r.on("error", e => t.emit("error", e)), t;
        }
        _request(e, t) {
            const n = (e = e || {}).auth || this.auth, r = e.path || this.path || "";
            delete e.auth, delete e.path, this.batch ? this._doBatch(e, t, n, r) : this._doRequest(e, t, n, r);
        }
        _doBatch(e, t, n, r) {
            if (this.batchOptions.push(e), 1 === this.batchOptions.length) {
                const e = this;
                this.batchCallback = t, this.batchTimeoutID = setTimeout(function() {
                    e.batchTimeoutID = -1, e._doBatchRequest(e.batchCallback, n, r);
                }, this.batchInterval);
            }
            this.batchOptions.length === this.batchCount && this._doBatchRequest(this.batchCallback, n, r);
        }
        _doBatchRequest(e, t, n) {
            this.batchTimeoutID > 0 && (clearTimeout(this.batchTimeoutID), this.batchTimeoutID = -1);
            const r = this.batchOptions.slice();
            this.batchOptions = [], this._doRequest(r, e, t, n);
        }
        _doRequest(e, t, n, o) {
            const a = Object.assign({}, this.headers);
            n && n.bearer && (a.Authorization = "Bearer " + n.bearer);
            const l = (this.ssl ? i : r).request({
                ...this.options,
                method: "POST",
                host: this.host,
                port: this.port,
                path: "/" + o.replace(/^\//, ""),
                headers: a,
                auth: n && n.username && n.password ? `${n.username}:${n.password}` : "",
                agent: this.agent
            });
            l.on("error", t), l.on("response", e => e.on("end", () => t(null, e)).resume()), 
            l.end(Buffer.from(s(e), "utf8"));
        }
    };
}
