// analysis/pretty/main.js:97055; webpack module 1264
function(e, t, n) {
    "use strict";
    var r = n(303), i = n(210), o = n(635), a = n(37).Buffer;
    function s(e) {
        this.request = e, this.boundary = r(), this.chunked = !1, this.body = null;
    }
    s.prototype.isChunked = function(e) {
        var t = this, n = !1, r = e.data || e;
        return r.forEach || t.request.emit("error", new Error("Argument error, options.multipart.")), 
        void 0 !== e.chunked && (n = e.chunked), "chunked" === t.request.getHeader("transfer-encoding") && (n = !0), 
        n || r.forEach(function(e) {
            void 0 === e.body && t.request.emit("error", new Error("Body attribute missing in multipart.")), 
            o(e.body) && (n = !0);
        }), n;
    }, s.prototype.setHeaders = function(e) {
        e && !this.request.hasHeader("transfer-encoding") && this.request.setHeader("transfer-encoding", "chunked");
        var t = this.request.getHeader("content-type");
        t && -1 !== t.indexOf("multipart") ? -1 !== t.indexOf("boundary") ? this.boundary = t.replace(/.*boundary=([^\s;]+).*/, "$1") : this.request.setHeader("content-type", t + "; boundary=" + this.boundary) : this.request.setHeader("content-type", "multipart/related; boundary=" + this.boundary);
    }, s.prototype.build = function(e, t) {
        var n = this, r = t ? new i : [];
        function o(e) {
            return "number" == typeof e && (e = e.toString()), t ? r.append(e) : r.push(a.from(e));
        }
        return n.request.preambleCRLF && o("\r\n"), e.forEach(function(e) {
            var t = "--" + n.boundary + "\r\n";
            Object.keys(e).forEach(function(n) {
                "body" !== n && (t += n + ": " + e[n] + "\r\n");
            }), o(t += "\r\n"), o(e.body), o("\r\n");
        }), o("--" + n.boundary + "--"), n.request.postambleCRLF && o("\r\n"), r;
    }, s.prototype.onRequest = function(e) {
        var t = this.isChunked(e), n = e.data || e;
        this.setHeaders(t), this.chunked = t, this.body = this.build(n, t);
    }, t.Multipart = s;
}
