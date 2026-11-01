// analysis/pretty/main.js:108290; webpack module 1459
function(e, t, n) {
    "use strict";
    var r = n(37).Buffer, i = n(9).Stream, o = n(15), a = n(5), s = n(114), l = n(351), c = n(352), u = {
        "ws:": 80,
        "wss:": 443
    }, d = function(e, t, n) {
        this._client = e, this._http = new c("response"), this._origin = "object" == typeof e.url ? e.url : o.parse(e.url), 
        this._url = "object" == typeof t ? t : o.parse(t), this._options = n || {}, this._state = 0, 
        this.readable = this.writable = !0, this._paused = !1, this._headers = new l, this._headers.set("Host", this._origin.host), 
        this._headers.set("Connection", "keep-alive"), this._headers.set("Proxy-Connection", "keep-alive");
        var i = this._url.auth && r.from(this._url.auth, "utf8").toString("base64");
        i && this._headers.set("Proxy-Authorization", "Basic " + i);
    };
    a.inherits(d, i);
    var h = {
        setHeader: function(e, t) {
            return 0 === this._state && (this._headers.set(e, t), !0);
        },
        start: function() {
            if (0 !== this._state) return !1;
            this._state = 1;
            var e = this._origin, t = e.port || u[e.protocol], n = [ "CONNECT " + e.hostname + ":" + t + " HTTP/1.1", this._headers.toString(), "" ];
            return this.emit("data", r.from(n.join("\r\n"), "utf8")), !0;
        },
        pause: function() {
            this._paused = !0;
        },
        resume: function() {
            this._paused = !1, this.emit("drain");
        },
        write: function(e) {
            if (!this.writable) return !1;
            if (this._http.parse(e), !this._http.isComplete()) return !this._paused;
            if (this.statusCode = this._http.statusCode, this.headers = this._http.headers, 
            200 === this.statusCode) this.emit("connect", new s.ConnectEvent); else {
                var t = "Can't establish a connection to the server at " + this._origin.href;
                this.emit("error", new Error(t));
            }
            return this.end(), !this._paused;
        },
        end: function(e) {
            this.writable && (void 0 !== e && this.write(e), this.readable = this.writable = !1, 
            this.emit("close"), this.emit("end"));
        },
        destroy: function() {
            this.end();
        }
    };
    for (var p in h) d.prototype[p] = h[p];
    e.exports = d;
}
