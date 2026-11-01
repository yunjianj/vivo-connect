// analysis/pretty/main.js:108340; webpack module 1460
function(e, t, n) {
    "use strict";
    var r = n(5), i = n(352), o = n(114), a = n(710), s = n(1461), l = n(707), c = function(e) {
        o.call(this, null, null, e), this._http = new i("request");
    };
    r.inherits(c, o);
    var u = {
        EVENTS: [ "open", "message", "error", "close", "ping", "pong" ],
        _bindEventListeners: function() {
            this.messages.on("error", function() {}), this.on("error", function() {});
        },
        parse: function(e) {
            if (this._delegate) return this._delegate.parse(e);
            if (this._http.parse(e), this._http.isComplete()) {
                this.method = this._http.method, this.url = this._http.url, this.headers = this._http.headers, 
                this.body = this._http.body;
                var t = this;
                this._delegate = c.http(this, this._options), this._delegate.messages = this.messages, 
                this._delegate.io = this.io, this._open(), this.EVENTS.forEach(function(e) {
                    this._delegate.on(e, function(n) {
                        t.emit(e, n);
                    });
                }, this), this.protocol = this._delegate.protocol, this.version = this._delegate.version, 
                this.parse(this._http.body), this.emit("connect", new o.ConnectEvent);
            }
        },
        _open: function() {
            this.__queue.forEach(function(e) {
                this._delegate[e[0]].apply(this._delegate, e[1]);
            }, this), this.__queue = [];
        }
    };
    for (var d in [ "addExtension", "setHeader", "start", "frame", "text", "binary", "ping", "close" ].forEach(function(e) {
        u[e] = function() {
            return this._delegate ? this._delegate[e].apply(this._delegate, arguments) : (this.__queue.push([ e, arguments ]), 
            !0);
        };
    }), u) c.prototype[d] = u[d];
    c.isSecureRequest = function(e) {
        if (e.connection && void 0 !== e.connection.authorized) return !0;
        if (e.socket && e.socket.secure) return !0;
        var t = e.headers;
        return !!t && ("on" === t.https || ("on" === t["x-forwarded-ssl"] || ("https" === t["x-forwarded-scheme"] || "https" === t["x-forwarded-proto"])));
    }, c.determineUrl = function(e) {
        return (this.isSecureRequest(e) ? "wss:" : "ws:") + "//" + e.headers.host + e.url;
    }, c.http = function(e, t) {
        void 0 === (t = t || {}).requireMasking && (t.requireMasking = !0);
        var n = e.headers, r = n["sec-websocket-version"], i = n["sec-websocket-key"], o = n["sec-websocket-key1"], c = n["sec-websocket-key2"], u = this.determineUrl(e);
        return r || i ? new l(e, u, t) : o || c ? new s(e, u, t) : new a(e, u, t);
    }, e.exports = c;
}
