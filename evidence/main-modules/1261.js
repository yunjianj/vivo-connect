// analysis/pretty/main.js:96902; webpack module 1261
function(e, t, n) {
    "use strict";
    var r = n(15), i = n(637), o = n(299), a = n(303), s = n(1262), l = n(7), c = n(37).Buffer;
    function u(e) {
        this.request = e, this.params = null;
    }
    u.prototype.buildParams = function(e, t, n, r, i, o) {
        var l = {};
        for (var c in e) l["oauth_" + c] = e[c];
        l.oauth_version || (l.oauth_version = "1.0"), l.oauth_timestamp || (l.oauth_timestamp = Math.floor(Date.now() / 1e3).toString()), 
        l.oauth_nonce || (l.oauth_nonce = a().replace(/-/g, "")), l.oauth_signature_method || (l.oauth_signature_method = "HMAC-SHA1");
        var u = l.oauth_consumer_secret || l.oauth_private_key;
        delete l.oauth_consumer_secret, delete l.oauth_private_key;
        var d = l.oauth_token_secret;
        delete l.oauth_token_secret;
        var h = l.oauth_realm;
        delete l.oauth_realm, delete l.oauth_transport_method;
        var p = t.protocol + "//" + t.host + t.pathname, f = o.parse([].concat(r, i, o.stringify(l)).join("&"));
        return l.oauth_signature = s.sign(l.oauth_signature_method, n, p, f, u, d), h && (l.realm = h), 
        l;
    }, u.prototype.buildBodyHash = function(e, t) {
        [ "HMAC-SHA1", "RSA-SHA1" ].indexOf(e.signature_method || "HMAC-SHA1") < 0 && this.request.emit("error", new Error("oauth: " + e.signature_method + " signature_method not supported with body_hash signing."));
        var n = l.createHash("sha1");
        n.update(t || "");
        var r = n.digest("hex");
        return c.from(r, "hex").toString("base64");
    }, u.prototype.concatParams = function(e, t, n) {
        n = n || "";
        var r = Object.keys(e).filter(function(e) {
            return "realm" !== e && "oauth_signature" !== e;
        }).sort();
        return e.realm && r.splice(0, 0, "realm"), r.push("oauth_signature"), r.map(function(t) {
            return t + "=" + n + s.rfc3986(e[t]) + n;
        }).join(t);
    }, u.prototype.onRequest = function(e) {
        this.params = e;
        var t, n, a = this.request.uri || {}, s = this.request.method || "", l = o(this.request.headers), c = this.request.body || "", u = this.request.qsLib || i, d = l.get("content-type") || "", h = "application/x-www-form-urlencoded", p = e.transport_method || "header";
        d.slice(0, h.length) === h && (d = h, t = c), a.query && (n = a.query), "body" !== p || "POST" === s && d === h || this.request.emit("error", new Error("oauth: transport_method of body requires POST and content-type " + h)), 
        t || "boolean" != typeof e.body_hash || (e.body_hash = this.buildBodyHash(e, this.request.body.toString()));
        var f = this.buildParams(e, a, s, n, t, u);
        switch (p) {
          case "header":
            this.request.setHeader("Authorization", "OAuth " + this.concatParams(f, ",", '"'));
            break;

          case "query":
            var _ = this.request.uri.href += (n ? "&" : "?") + this.concatParams(f, "&");
            this.request.uri = r.parse(_), this.request.path = this.request.uri.path;
            break;

          case "body":
            this.request.body = (t ? t + "&" : "") + this.concatParams(f, "&");
            break;

          default:
            this.request.emit("error", new Error("oauth: transport_method invalid"));
        }
    }, t.OAuth = u;
}
