// analysis/pretty/main.js:96830; webpack module 1258
function(e, t, n) {
    "use strict";
    var r = n(299), i = n(303), o = n(290), a = o.md5, s = o.toBase64;
    function l(e) {
        this.request = e, this.hasAuth = !1, this.sentAuth = !1, this.bearerToken = null, 
        this.user = null, this.pass = null;
    }
    l.prototype.basic = function(e, t, n) {
        if (("string" != typeof e || void 0 !== t && "string" != typeof t) && this.request.emit("error", new Error("auth() received invalid user or password")), 
        this.user = e, this.pass = t, this.hasAuth = !0, n || void 0 === n) {
            var r = "Basic " + s(e + ":" + (t || ""));
            return this.sentAuth = !0, r;
        }
    }, l.prototype.bearer = function(e, t) {
        if (this.bearerToken = e, this.hasAuth = !0, t || void 0 === t) {
            "function" == typeof e && (e = e());
            var n = "Bearer " + (e || "");
            return this.sentAuth = !0, n;
        }
    }, l.prototype.digest = function(e, t, n) {
        for (var r = {}, o = /([a-z0-9_-]+)=(?:"([^"]+)"|([a-z0-9_-]+))/gi; ;) {
            var s = o.exec(n);
            if (!s) break;
            r[s[1]] = s[2] || s[3];
        }
        var l = /(^|,)\s*auth\s*($|,)/.test(r.qop) && "auth", c = l && "00000001", u = l && i().replace(/-/g, ""), d = function(e, t, n, r, i, o) {
            var s = a(t + ":" + n + ":" + r);
            return e && "md5-sess" === e.toLowerCase() ? a(s + ":" + i + ":" + o) : s;
        }(r.algorithm, this.user, r.realm, this.pass, r.nonce, u), h = a(e + ":" + t), p = a(l ? d + ":" + r.nonce + ":" + c + ":" + u + ":" + l + ":" + h : d + ":" + r.nonce + ":" + h), f = {
            username: this.user,
            realm: r.realm,
            nonce: r.nonce,
            uri: t,
            qop: l,
            response: p,
            nc: c,
            cnonce: u,
            algorithm: r.algorithm,
            opaque: r.opaque
        };
        for (var _ in n = [], f) f[_] && ("qop" === _ || "nc" === _ || "algorithm" === _ ? n.push(_ + "=" + f[_]) : n.push(_ + '="' + f[_] + '"'));
        return n = "Digest " + n.join(", "), this.sentAuth = !0, n;
    }, l.prototype.onRequest = function(e, t, n, r) {
        var i, o = this.request;
        void 0 === r && void 0 === e ? this.request.emit("error", new Error("no auth mechanism defined")) : i = void 0 !== r ? this.bearer(r, n) : this.basic(e, t, n), 
        i && o.setHeader("authorization", i);
    }, l.prototype.onResponse = function(e) {
        var t = this.request;
        if (!this.hasAuth || this.sentAuth) return null;
        var n = r(e.headers).get("www-authenticate"), i = n && n.split(" ")[0].toLowerCase();
        switch (t.debug("reauth", i), i) {
          case "basic":
            return this.basic(this.user, this.pass, !0);

          case "bearer":
            return this.bearer(this.bearerToken, !0);

          case "digest":
            return this.digest(t.method, t.path, n);
        }
    }, t.Auth = l;
}
