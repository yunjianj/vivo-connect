// analysis/pretty/main.js:63480; webpack module 710
function(e, t, n) {
    "use strict";
    var r = n(37).Buffer, i = n(114), o = function(e, t, n) {
        i.apply(this, arguments), this._stage = 0, this.version = "hixie-75", this._headers.set("Upgrade", "WebSocket"), 
        this._headers.set("Connection", "Upgrade"), this._headers.set("WebSocket-Origin", this._request.headers.origin), 
        this._headers.set("WebSocket-Location", this.url);
    };
    n(5).inherits(o, i);
    var a = {
        close: function() {
            return 3 !== this.readyState && (this.readyState = 3, this.emit("close", new i.CloseEvent(null, null)), 
            !0);
        },
        parse: function(e) {
            this.readyState > 1 || (this._reader.put(e), this._reader.eachByte(function(e) {
                var t;
                switch (this._stage) {
                  case -1:
                    this._body.push(e), this._sendHandshakeBody();
                    break;

                  case 0:
                    this._parseLeadingByte(e);
                    break;

                  case 1:
                    if (this._length = (127 & e) + 128 * this._length, this._closing && 0 === this._length) return this.close();
                    128 != (128 & e) && (0 === this._length ? this._stage = 0 : (this._skipped = 0, 
                    this._stage = 2));
                    break;

                  case 2:
                    if (255 === e) this._stage = 0, t = r.from(this._buffer).toString("utf8", 0, this._buffer.length), 
                    this.emit("message", new i.MessageEvent(t)); else if (this._length) this._skipped += 1, 
                    this._skipped === this._length && (this._stage = 0); else if (this._buffer.push(e), 
                    this._buffer.length > this._maxLength) return this.close();
                }
            }, this));
        },
        frame: function(e) {
            if (0 === this.readyState) return this._queue([ e ]);
            if (this.readyState > 1) return !1;
            "string" != typeof e && (e = e.toString());
            var t = r.byteLength(e), n = r.allocUnsafe(t + 2);
            return n[0] = 0, n.write(e, 1), n[n.length - 1] = 255, this._write(n), !0;
        },
        _handshakeResponse: function() {
            var e = [ "HTTP/1.1 101 Web Socket Protocol Handshake", this._headers.toString(), "" ];
            return r.from(e.join("\r\n"), "utf8");
        },
        _parseLeadingByte: function(e) {
            128 == (128 & e) ? (this._length = 0, this._stage = 1) : (delete this._length, delete this._skipped, 
            this._buffer = [], this._stage = 2);
        }
    };
    for (var s in a) o.prototype[s] = a[s];
    e.exports = o;
}
