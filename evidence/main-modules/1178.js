// analysis/pretty/main.js:92995; webpack module 1178
function(e, t, n) {
    var r = t, i = n(15), o = n(291), a = n(7), s = n(1179)(1e3);
    function l(e, t, n) {
        return a.createHmac("sha256", e).update(t, "utf8").digest(n);
    }
    function c(e, t) {
        return a.createHash("sha256").update(e, "utf8").digest(t);
    }
    function u(e) {
        return e.replace(/[!'()*]/g, function(e) {
            return "%" + e.charCodeAt(0).toString(16).toUpperCase();
        });
    }
    function d(e) {
        return u(encodeURIComponent(e));
    }
    var h = {
        authorization: !0,
        connection: !0,
        "x-amzn-trace-id": !0,
        "user-agent": !0,
        expect: !0,
        "presigned-expires": !0,
        range: !0
    };
    function p(e, t) {
        "string" == typeof e && (e = i.parse(e));
        var n = e.headers = Object.assign({}, e.headers || {}), r = (!this.service || !this.region) && this.matchHost(e.hostname || e.host || n.Host || n.host);
        this.request = e, this.credentials = t || this.defaultCredentials(), this.service = e.service || r[0] || "", 
        this.region = e.region || r[1] || "us-east-1", "email" === this.service && (this.service = "ses"), 
        !e.method && e.body && (e.method = "POST"), n.Host || n.host || (n.Host = e.hostname || e.host || this.createHost(), 
        e.port && (n.Host += ":" + e.port)), e.hostname || e.host || (e.hostname = n.Host || n.host), 
        this.isCodeCommitGit = "codecommit" === this.service && "GIT" === e.method, this.extraHeadersToIgnore = e.extraHeadersToIgnore || Object.create(null), 
        this.extraHeadersToInclude = e.extraHeadersToInclude || Object.create(null);
    }
    p.prototype.matchHost = function(e) {
        var t = ((e || "").match(/([^\.]{1,63})\.(?:([^\.]{0,63})\.)?amazonaws\.com(\.cn)?$/) || []).slice(1, 3);
        if ("es" !== t[1] && "aoss" !== t[1] || (t = t.reverse()), "s3" == t[1]) t[0] = "s3", 
        t[1] = "us-east-1"; else for (var n = 0; n < 2; n++) if (/^s3-/.test(t[n])) {
            t[1] = t[n].slice(3), t[0] = "s3";
            break;
        }
        return t;
    }, p.prototype.isSingleRegion = function() {
        return [ "s3", "sdb" ].indexOf(this.service) >= 0 && "us-east-1" === this.region || [ "cloudfront", "ls", "route53", "iam", "importexport", "sts" ].indexOf(this.service) >= 0;
    }, p.prototype.createHost = function() {
        var e = this.isSingleRegion() ? "" : "." + this.region;
        return ("ses" === this.service ? "email" : this.service) + e + ".amazonaws.com";
    }, p.prototype.prepareRequest = function() {
        this.parsePath();
        var e, t = this.request, n = t.headers;
        t.signQuery ? (this.parsedPath.query = e = this.parsedPath.query || {}, this.credentials.sessionToken && (e["X-Amz-Security-Token"] = this.credentials.sessionToken), 
        "s3" !== this.service || e["X-Amz-Expires"] || (e["X-Amz-Expires"] = 86400), e["X-Amz-Date"] ? this.datetime = e["X-Amz-Date"] : e["X-Amz-Date"] = this.getDateTime(), 
        e["X-Amz-Algorithm"] = "AWS4-HMAC-SHA256", e["X-Amz-Credential"] = this.credentials.accessKeyId + "/" + this.credentialString(), 
        e["X-Amz-SignedHeaders"] = this.signedHeaders()) : (t.doNotModifyHeaders || this.isCodeCommitGit || (!t.body || n["Content-Type"] || n["content-type"] || (n["Content-Type"] = "application/x-www-form-urlencoded; charset=utf-8"), 
        !t.body || n["Content-Length"] || n["content-length"] || (n["Content-Length"] = Buffer.byteLength(t.body)), 
        !this.credentials.sessionToken || n["X-Amz-Security-Token"] || n["x-amz-security-token"] || (n["X-Amz-Security-Token"] = this.credentials.sessionToken), 
        "s3" !== this.service || n["X-Amz-Content-Sha256"] || n["x-amz-content-sha256"] || (n["X-Amz-Content-Sha256"] = c(this.request.body || "", "hex")), 
        n["X-Amz-Date"] || n["x-amz-date"] ? this.datetime = n["X-Amz-Date"] || n["x-amz-date"] : n["X-Amz-Date"] = this.getDateTime()), 
        delete n.Authorization, delete n.authorization);
    }, p.prototype.sign = function() {
        return this.parsedPath || this.prepareRequest(), this.request.signQuery ? this.parsedPath.query["X-Amz-Signature"] = this.signature() : this.request.headers.Authorization = this.authHeader(), 
        this.request.path = this.formatPath(), this.request;
    }, p.prototype.getDateTime = function() {
        if (!this.datetime) {
            var e = this.request.headers, t = new Date(e.Date || e.date || new Date);
            this.datetime = t.toISOString().replace(/[:\-]|\.\d{3}/g, ""), this.isCodeCommitGit && (this.datetime = this.datetime.slice(0, -1));
        }
        return this.datetime;
    }, p.prototype.getDate = function() {
        return this.getDateTime().substr(0, 8);
    }, p.prototype.authHeader = function() {
        return [ "AWS4-HMAC-SHA256 Credential=" + this.credentials.accessKeyId + "/" + this.credentialString(), "SignedHeaders=" + this.signedHeaders(), "Signature=" + this.signature() ].join(", ");
    }, p.prototype.signature = function() {
        var e, t, n, r = this.getDate(), i = [ this.credentials.secretAccessKey, r, this.region, this.service ].join(), o = s.get(i);
        return o || (e = l("AWS4" + this.credentials.secretAccessKey, r), t = l(e, this.region), 
        n = l(t, this.service), o = l(n, "aws4_request"), s.set(i, o)), l(o, this.stringToSign(), "hex");
    }, p.prototype.stringToSign = function() {
        return [ "AWS4-HMAC-SHA256", this.getDateTime(), this.credentialString(), c(this.canonicalString(), "hex") ].join("\n");
    }, p.prototype.canonicalString = function() {
        this.parsedPath || this.prepareRequest();
        var e, t = this.parsedPath.path, n = this.parsedPath.query, r = this.request.headers, i = "", o = "s3" !== this.service, a = "s3" === this.service || this.request.doNotEncodePath, s = "s3" === this.service, l = "s3" === this.service;
        if (e = "s3" === this.service && this.request.signQuery ? "UNSIGNED-PAYLOAD" : this.isCodeCommitGit ? "" : r["X-Amz-Content-Sha256"] || r["x-amz-content-sha256"] || c(this.request.body || "", "hex"), 
        n) {
            var u = Object.keys(n).reduce(function(e, t) {
                return t ? (e[d(t)] = Array.isArray(n[t]) && l ? n[t][0] : n[t], e) : e;
            }, {}), h = [];
            Object.keys(u).sort().forEach(function(e) {
                Array.isArray(u[e]) ? u[e].map(d).sort().forEach(function(t) {
                    h.push(e + "=" + t);
                }) : h.push(e + "=" + d(u[e]));
            }), i = h.join("&");
        }
        return "/" !== t && (o && (t = t.replace(/\/{2,}/g, "/")), "/" !== (t = t.split("/").reduce(function(e, t) {
            return o && ".." === t ? e.pop() : o && "." === t || (a && (t = decodeURIComponent(t.replace(/\+/g, " "))), 
            e.push(d(t))), e;
        }, []).join("/"))[0] && (t = "/" + t), s && (t = t.replace(/%2F/g, "/"))), [ this.request.method || "GET", t, i, this.canonicalHeaders() + "\n", this.signedHeaders(), e ].join("\n");
    }, p.prototype.filterHeaders = function() {
        var e = this.request.headers, t = this.extraHeadersToInclude, n = this.extraHeadersToIgnore;
        this.filteredHeaders = Object.keys(e).map(function(t) {
            return [ t.toLowerCase(), e[t] ];
        }).filter(function(e) {
            return t[e[0]] || null == h[e[0]] && !n[e[0]];
        }).sort(function(e, t) {
            return e[0] < t[0] ? -1 : 1;
        });
    }, p.prototype.canonicalHeaders = function() {
        return this.filteredHeaders || this.filterHeaders(), this.filteredHeaders.map(function(e) {
            return e[0] + ":" + e[1].toString().trim().replace(/\s+/g, " ");
        }).join("\n");
    }, p.prototype.signedHeaders = function() {
        return this.filteredHeaders || this.filterHeaders(), this.filteredHeaders.map(function(e) {
            return e[0];
        }).join(";");
    }, p.prototype.credentialString = function() {
        return [ this.getDate(), this.region, this.service, "aws4_request" ].join("/");
    }, p.prototype.defaultCredentials = function() {
        var e = process.env;
        return {
            accessKeyId: e.AWS_ACCESS_KEY_ID || e.AWS_ACCESS_KEY,
            secretAccessKey: e.AWS_SECRET_ACCESS_KEY || e.AWS_SECRET_KEY,
            sessionToken: e.AWS_SESSION_TOKEN
        };
    }, p.prototype.parsePath = function() {
        var e = this.request.path || "/";
        /[^0-9A-Za-z;,/?:@&=+$\-_.!~*'()#%]/.test(e) && (e = encodeURI(decodeURI(e)));
        var t = e.indexOf("?"), n = null;
        t >= 0 && (n = o.parse(e.slice(t + 1)), e = e.slice(0, t)), this.parsedPath = {
            path: e,
            query: n
        };
    }, p.prototype.formatPath = function() {
        var e = this.parsedPath.path, t = this.parsedPath.query;
        return t ? (null != t[""] && delete t[""], e + "?" + u(o.stringify(t))) : e;
    }, r.RequestSigner = p, r.sign = function(e, t) {
        return new p(e, t).sign();
    };
}
