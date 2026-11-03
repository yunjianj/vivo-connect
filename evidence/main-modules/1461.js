// analysis/pretty/main.js:108390; webpack module 1461
function(e, t, n) {
    "use strict";
    var r = n(37).Buffer, i = n(114), o = n(710), a = n(7), s = n(5), l = function(e) {
        return parseInt((e.match(/[0-9]/g) || []).join(""), 10);
    }, c = function(e) {
        return (e.match(/ /g) || []).length;
    }, u = function(e, t, n) {
        o.apply(this, arguments), this._stage = -1, this._body = [], this.version = "hixie-76", 
        this._headers.clear(), this._headers.set("Upgrade", "WebSocket"), this._headers.set("Connection", "Upgrade"), 
        this._headers.set("Sec-WebSocket-Origin", this._request.headers.origin), this._headers.set("Sec-WebSocket-Location", this.url);
    };
    s.inherits(u, o);
    var d = {
        BODY_SIZE: 8,
        start: function() {
            return !!o.prototype.start.call(this) && (this._started = !0, this._sendHandshakeBody(), 
            !0);
        },
        close: function() {
            return 3 !== this.readyState && (1 === this.readyState && this._write(r.from([ 255, 0 ])), 
            this.readyState = 3, this.emit("close", new i.CloseEvent(null, null)), !0);
        },
        _handshakeResponse: function() {
            var e = (s = this._request.headers)["sec-websocket-key1"], t = s["sec-websocket-key2"];
            if (!e) throw new Error("Missing required header: Sec-WebSocket-Key1");
            if (!t) throw new Error("Missing required header: Sec-WebSocket-Key2");
            var n = l(e), i = c(e), o = l(t), a = c(t);
            if (n % i != 0 || o % a != 0) throw new Error("Client sent invalid Sec-WebSocket-Key headers");
            this._keyValues = [ n / i, o / a ];
            var s = [ "HTTP/1.1 101 WebSocket Protocol Handshake", this._headers.toString(), "" ];
            return r.from(s.join("\r\n"), "binary");
        },
        _handshakeSignature: function() {
            if (this._body.length < this.BODY_SIZE) return null;
            var e = a.createHash("md5"), t = r.allocUnsafe(8 + this.BODY_SIZE);
            return t.writeUInt32BE(this._keyValues[0], 0), t.writeUInt32BE(this._keyValues[1], 4), 
            r.from(this._body).copy(t, 8, 0, this.BODY_SIZE), e.update(t), r.from(e.digest("binary"), "binary");
        },
        _sendHandshakeBody: function() {
            if (this._started) {
                var e = this._handshakeSignature();
                e && (this._write(e), this._stage = 0, this._open(), this._body.length > this.BODY_SIZE && this.parse(this._body.slice(this.BODY_SIZE)));
            }
        },
        _parseLeadingByte: function(e) {
            if (255 !== e) return o.prototype._parseLeadingByte.call(this, e);
            this._closing = !0, this._length = 0, this._stage = 1;
        }
    };
    for (var h in d) u.prototype[h] = d[h];
    e.exports = u;
}
