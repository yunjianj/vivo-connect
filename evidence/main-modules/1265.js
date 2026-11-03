// analysis/pretty/main.js:97088; webpack module 1265
function(e, t, n) {
    "use strict";
    var r = n(15), i = /^https?:/;
    function o(e) {
        this.request = e, this.followRedirect = !0, this.followRedirects = !0, this.followAllRedirects = !1, 
        this.followOriginalHttpMethod = !1, this.allowRedirect = function() {
            return !0;
        }, this.maxRedirects = 10, this.redirects = [], this.redirectsFollowed = 0, this.removeRefererHeader = !1;
    }
    o.prototype.onRequest = function(e) {
        void 0 !== e.maxRedirects && (this.maxRedirects = e.maxRedirects), "function" == typeof e.followRedirect && (this.allowRedirect = e.followRedirect), 
        void 0 !== e.followRedirect && (this.followRedirects = !!e.followRedirect), void 0 !== e.followAllRedirects && (this.followAllRedirects = e.followAllRedirects), 
        (this.followRedirects || this.followAllRedirects) && (this.redirects = this.redirects || []), 
        void 0 !== e.removeRefererHeader && (this.removeRefererHeader = e.removeRefererHeader), 
        void 0 !== e.followOriginalHttpMethod && (this.followOriginalHttpMethod = e.followOriginalHttpMethod);
    }, o.prototype.redirectTo = function(e) {
        var t = this.request, n = null;
        if (e.statusCode >= 300 && e.statusCode < 400 && e.caseless.has("location")) {
            var r = e.caseless.get("location");
            if (t.debug("redirect", r), this.followAllRedirects) n = r; else if (this.followRedirects) switch (t.method) {
              case "PATCH":
              case "PUT":
              case "POST":
              case "DELETE":
                break;

              default:
                n = r;
            }
        } else if (401 === e.statusCode) {
            var i = t._auth.onResponse(e);
            i && (t.setHeader("authorization", i), n = t.uri);
        }
        return n;
    }, o.prototype.onResponse = function(e) {
        var t = this.request, n = this.redirectTo(e);
        if (!n || !this.allowRedirect.call(t, e)) return !1;
        if (t.debug("redirect to", n), e.resume && e.resume(), this.redirectsFollowed >= this.maxRedirects) return t.emit("error", new Error("Exceeded maxRedirects. Probably stuck in a redirect loop " + t.uri.href)), 
        !1;
        this.redirectsFollowed += 1, i.test(n) || (n = r.resolve(t.uri.href, n));
        var o = t.uri;
        return t.uri = r.parse(n), t.uri.protocol !== o.protocol && delete t.agent, this.redirects.push({
            statusCode: e.statusCode,
            redirectUri: n
        }), this.followAllRedirects && "HEAD" !== t.method && 401 !== e.statusCode && 307 !== e.statusCode && (t.method = this.followOriginalHttpMethod ? t.method : "GET"), 
        delete t.src, delete t.req, delete t._started, 401 !== e.statusCode && 307 !== e.statusCode && (delete t.body, 
        delete t._form, t.headers && (t.removeHeader("host"), t.removeHeader("content-type"), 
        t.removeHeader("content-length"), t.uri.hostname !== t.originalHost.split(":")[0] && t.removeHeader("authorization"))), 
        this.removeRefererHeader || t.setHeader("referer", o.href), t.emit("redirect"), 
        t.init(), !0;
    }, t.Redirect = o;
}
