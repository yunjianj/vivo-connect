// analysis/pretty/main.js:17514; webpack module 114
function(e, t, n) {
    "use strict";
    var r = n(37).Buffer, i = n(12).EventEmitter, o = n(5), a = n(1448), s = n(351), l = n(1449), c = function(e, t, n) {
        i.call(this), c.validateOptions(n || {}, [ "maxLength", "masking", "requireMasking", "protocols" ]), 
        this._request = e, this._reader = new l, this._options = n || {}, this._maxLength = this._options.maxLength || this.MAX_LENGTH, 
        this._headers = new s, this.__queue = [], this.readyState = 0, this.url = t, this.io = new a.IO(this), 
        this.messages = new a.Messages(this), this._bindEventListeners();
    };
    o.inherits(c, i), c.isWebSocket = function(e) {
        var t = e.headers.connection || "", n = e.headers.upgrade || "";
        return "GET" === e.method && t.toLowerCase().split(/ *, */).indexOf("upgrade") >= 0 && "websocket" === n.toLowerCase();
    }, c.validateOptions = function(e, t) {
        for (var n in e) if (t.indexOf(n) < 0) throw new Error("Unrecognized option: " + n);
    };
    var u = {
        MAX_LENGTH: 67108863,
        STATES: [ "connecting", "open", "closing", "closed" ],
        _bindEventListeners: function() {
            var e = this;
            this.messages.on("error", function() {}), this.on("message", function(t) {
                var n = e.messages;
                n.readable && n.emit("data", t.data);
            }), this.on("error", function(t) {
                var n = e.messages;
                n.readable && n.emit("error", t);
            }), this.on("close", function() {
                var t = e.messages;
                t.readable && (t.readable = t.writable = !1, t.emit("end"));
            });
        },
        getState: function() {
            return this.STATES[this.readyState] || null;
        },
        addExtension: function(e) {
            return !1;
        },
        setHeader: function(e, t) {
            return !(this.readyState > 0) && (this._headers.set(e, t), !0);
        },
        start: function() {
            if (0 !== this.readyState) return !1;
            if (!c.isWebSocket(this._request)) return this._failHandshake(new Error("Not a WebSocket request"));
            var e;
            try {
                e = this._handshakeResponse();
            } catch (e) {
                return this._failHandshake(e);
            }
            return this._write(e), -1 !== this._stage && this._open(), !0;
        },
        _failHandshake: function(e) {
            var t = new s;
            return t.set("Content-Type", "text/plain"), t.set("Content-Length", r.byteLength(e.message, "utf8")), 
            t = [ "HTTP/1.1 400 Bad Request", t.toString(), e.message ], this._write(r.from(t.join("\r\n"), "utf8")), 
            this._fail("protocol_error", e.message), !1;
        },
        text: function(e) {
            return this.frame(e);
        },
        binary: function(e) {
            return !1;
        },
        ping: function() {
            return !1;
        },
        pong: function() {
            return !1;
        },
        close: function(e, t) {
            return 1 === this.readyState && (this.readyState = 3, this.emit("close", new c.CloseEvent(null, null)), 
            !0);
        },
        _open: function() {
            this.readyState = 1, this.__queue.forEach(function(e) {
                this.frame.apply(this, e);
            }, this), this.__queue = [], this.emit("open", new c.OpenEvent);
        },
        _queue: function(e) {
            return this.__queue.push(e), !0;
        },
        _write: function(e) {
            var t = this.io;
            t.readable && t.emit("data", e);
        },
        _fail: function(e, t) {
            this.readyState = 2, this.emit("error", new Error(t)), this.close();
        }
    };
    for (var d in u) c.prototype[d] = u[d];
    c.ConnectEvent = function() {}, c.OpenEvent = function() {}, c.CloseEvent = function(e, t) {
        this.code = e, this.reason = t;
    }, c.MessageEvent = function(e) {
        this.data = e;
    }, c.PingEvent = function(e) {
        this.data = e;
    }, c.PongEvent = function(e) {
        this.data = e;
    }, e.exports = c;
}
