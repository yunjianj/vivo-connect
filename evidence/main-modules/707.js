// analysis/pretty/main.js:63222; webpack module 707
function(e, t, n) {
    "use strict";
    var r = n(37).Buffer, i = n(7), o = n(5), a = n(1452), s = n(114), l = n(1457), c = n(1458), u = function(e, t, n) {
        if (s.apply(this, arguments), this._extensions = new a, this._stage = 0, this._masking = this._options.masking, 
        this._protocols = this._options.protocols || [], this._requireMasking = this._options.requireMasking, 
        this._pingCallbacks = {}, "string" == typeof this._protocols && (this._protocols = this._protocols.split(/ *, */)), 
        this._request) {
            var r = this._request.headers["sec-websocket-protocol"], i = this._protocols;
            void 0 !== r && ("string" == typeof r && (r = r.split(/ *, */)), this.protocol = r.filter(function(e) {
                return i.indexOf(e) >= 0;
            })[0]), this.version = "hybi-" + u.VERSION;
        }
    };
    o.inherits(u, s), u.VERSION = "13", u.mask = function(e, t, n) {
        if (!t || 0 === t.length) return e;
        n = n || 0;
        for (var r = 0, i = e.length - n; r < i; r++) e[n + r] = e[n + r] ^ t[r % 4];
        return e;
    }, u.generateAccept = function(e) {
        var t = i.createHash("sha1");
        return t.update(e + u.GUID), t.digest("base64");
    }, u.GUID = "258EAFA5-E914-47DA-95CA-C5AB0DC85B11";
    var d = {
        FIN: 128,
        MASK: 128,
        RSV1: 64,
        RSV2: 32,
        RSV3: 16,
        OPCODE: 15,
        LENGTH: 127,
        OPCODES: {
            continuation: 0,
            text: 1,
            binary: 2,
            close: 8,
            ping: 9,
            pong: 10
        },
        OPCODE_CODES: [ 0, 1, 2, 8, 9, 10 ],
        MESSAGE_OPCODES: [ 0, 1, 2 ],
        OPENING_OPCODES: [ 1, 2 ],
        ERRORS: {
            normal_closure: 1e3,
            going_away: 1001,
            protocol_error: 1002,
            unacceptable: 1003,
            encoding_error: 1007,
            policy_violation: 1008,
            too_large: 1009,
            extension_error: 1010,
            unexpected_condition: 1011
        },
        ERROR_CODES: [ 1e3, 1001, 1002, 1003, 1007, 1008, 1009, 1010, 1011 ],
        DEFAULT_ERROR_CODE: 1e3,
        MIN_RESERVED_ERROR: 3e3,
        MAX_RESERVED_ERROR: 4999,
        UTF8_MATCH: /^([\x00-\x7F]|[\xC2-\xDF][\x80-\xBF]|\xE0[\xA0-\xBF][\x80-\xBF]|[\xE1-\xEC\xEE\xEF][\x80-\xBF]{2}|\xED[\x80-\x9F][\x80-\xBF]|\xF0[\x90-\xBF][\x80-\xBF]{2}|[\xF1-\xF3][\x80-\xBF]{3}|\xF4[\x80-\x8F][\x80-\xBF]{2})*$/,
        addExtension: function(e) {
            return this._extensions.add(e), !0;
        },
        parse: function(e) {
            this._reader.put(e);
            for (var t = !0; t; ) switch (this._stage) {
              case 0:
                (t = this._reader.read(1)) && this._parseOpcode(t[0]);
                break;

              case 1:
                (t = this._reader.read(1)) && this._parseLength(t[0]);
                break;

              case 2:
                (t = this._reader.read(this._frame.lengthBytes)) && this._parseExtendedLength(t);
                break;

              case 3:
                (t = this._reader.read(4)) && (this._stage = 4, this._frame.maskingKey = t);
                break;

              case 4:
                (t = this._reader.read(this._frame.length)) && (this._stage = 0, this._emitFrame(t));
                break;

              default:
                t = null;
            }
        },
        text: function(e) {
            return !(this.readyState > 1) && this.frame(e, "text");
        },
        binary: function(e) {
            return !(this.readyState > 1) && this.frame(e, "binary");
        },
        ping: function(e, t) {
            return !(this.readyState > 1) && (e = e || "", t && (this._pingCallbacks[e] = t), 
            this.frame(e, "ping"));
        },
        pong: function(e) {
            return !(this.readyState > 1) && (e = e || "", this.frame(e, "pong"));
        },
        close: function(e, t) {
            return e = e || "", t = t || this.ERRORS.normal_closure, this.readyState <= 0 ? (this.readyState = 3, 
            this.emit("close", new s.CloseEvent(t, e)), !0) : 1 === this.readyState && (this.readyState = 2, 
            this._extensions.close(function() {
                this.frame(e, "close", t);
            }, this), !0);
        },
        frame: function(e, t, n) {
            if (this.readyState <= 0) return this._queue([ e, t, n ]);
            if (this.readyState > 2) return !1;
            e instanceof Array && (e = r.from(e)), "number" == typeof e && (e = e.toString());
            var o, a, s = new c, u = "string" == typeof e;
            s.rsv1 = s.rsv2 = s.rsv3 = !1, s.opcode = this.OPCODES[t || (u ? "text" : "binary")], 
            o = u ? r.from(e, "utf8") : e, n && (a = o, (o = r.allocUnsafe(2 + a.length)).writeUInt16BE(n, 0), 
            a.copy(o, 2)), s.data = o;
            var d = function(e) {
                var t = new l;
                t.final = !0, t.rsv1 = e.rsv1, t.rsv2 = e.rsv2, t.rsv3 = e.rsv3, t.opcode = e.opcode, 
                t.masked = !!this._masking, t.length = e.data.length, t.payload = e.data, t.masked && (t.maskingKey = i.randomBytes(4)), 
                this._sendFrame(t);
            };
            return this.MESSAGE_OPCODES.indexOf(s.opcode) >= 0 ? this._extensions.processOutgoingMessage(s, function(e, t) {
                if (e) return this._fail("extension_error", e.message);
                d.call(this, t);
            }, this) : d.call(this, s), !0;
        },
        _sendFrame: function(e) {
            var t = e.length, n = t <= 125 ? 2 : t <= 65535 ? 4 : 10, i = n + (e.masked ? 4 : 0), o = r.allocUnsafe(i + t), a = e.masked ? this.MASK : 0;
            o[0] = (e.final ? this.FIN : 0) | (e.rsv1 ? this.RSV1 : 0) | (e.rsv2 ? this.RSV2 : 0) | (e.rsv3 ? this.RSV3 : 0) | e.opcode, 
            t <= 125 ? o[1] = a | t : t <= 65535 ? (o[1] = 126 | a, o.writeUInt16BE(t, 2)) : (o[1] = 127 | a, 
            o.writeUInt32BE(Math.floor(t / 4294967296), 2), o.writeUInt32BE(t % 4294967296, 6)), 
            e.payload.copy(o, i), e.masked && (e.maskingKey.copy(o, n), u.mask(o, e.maskingKey, i)), 
            this._write(o);
        },
        _handshakeResponse: function() {
            var e = this._request.headers["sec-websocket-key"], t = this._request.headers["sec-websocket-version"];
            if (t !== u.VERSION) throw new Error("Unsupported WebSocket version: " + t);
            if ("string" != typeof e) throw new Error("Missing handshake request header: Sec-WebSocket-Key");
            this._headers.set("Upgrade", "websocket"), this._headers.set("Connection", "Upgrade"), 
            this._headers.set("Sec-WebSocket-Accept", u.generateAccept(e)), this.protocol && this._headers.set("Sec-WebSocket-Protocol", this.protocol);
            var n = this._extensions.generateResponse(this._request.headers["sec-websocket-extensions"]);
            n && this._headers.set("Sec-WebSocket-Extensions", n);
            var i = [ "HTTP/1.1 101 Switching Protocols", this._headers.toString(), "" ];
            return r.from(i.join("\r\n"), "utf8");
        },
        _shutdown: function(e, t, n) {
            delete this._frame, delete this._message, this._stage = 5;
            var r = 1 === this.readyState;
            this.readyState = 2, this._extensions.close(function() {
                r && this.frame(t, "close", e), this.readyState = 3, n && this.emit("error", new Error(t)), 
                this.emit("close", new s.CloseEvent(e, t));
            }, this);
        },
        _fail: function(e, t) {
            this.readyState > 1 || this._shutdown(this.ERRORS[e], t, !0);
        },
        _parseOpcode: function(e) {
            var t = [ this.RSV1, this.RSV2, this.RSV3 ].map(function(t) {
                return (e & t) === t;
            }), n = this._frame = new l;
            return n.final = (e & this.FIN) === this.FIN, n.rsv1 = t[0], n.rsv2 = t[1], n.rsv3 = t[2], 
            n.opcode = e & this.OPCODE, this._stage = 1, this._extensions.validFrameRsv(n) ? this.OPCODE_CODES.indexOf(n.opcode) < 0 ? this._fail("protocol_error", "Unrecognized frame opcode: " + n.opcode) : this.MESSAGE_OPCODES.indexOf(n.opcode) < 0 && !n.final ? this._fail("protocol_error", "Received fragmented control frame: opcode = " + n.opcode) : this._message && this.OPENING_OPCODES.indexOf(n.opcode) >= 0 ? this._fail("protocol_error", "Received new data frame but previous continuous frame is unfinished") : void 0 : this._fail("protocol_error", "One or more reserved bits are on: reserved1 = " + (n.rsv1 ? 1 : 0) + ", reserved2 = " + (n.rsv2 ? 1 : 0) + ", reserved3 = " + (n.rsv3 ? 1 : 0));
        },
        _parseLength: function(e) {
            var t = this._frame;
            if (t.masked = (e & this.MASK) === this.MASK, t.length = e & this.LENGTH, t.length >= 0 && t.length <= 125) {
                if (this._stage = t.masked ? 3 : 4, !this._checkFrameLength()) return;
            } else this._stage = 2, t.lengthBytes = 126 === t.length ? 2 : 8;
            if (this._requireMasking && !t.masked) return this._fail("unacceptable", "Received unmasked frame but masking is required");
        },
        _parseExtendedLength: function(e) {
            var t = this._frame;
            if (t.length = this._readUInt(e), this._stage = t.masked ? 3 : 4, this.MESSAGE_OPCODES.indexOf(t.opcode) < 0 && t.length > 125) return this._fail("protocol_error", "Received control frame having too long payload: " + t.length);
            this._checkFrameLength();
        },
        _checkFrameLength: function() {
            return !((this._message ? this._message.length : 0) + this._frame.length > this._maxLength) || (this._fail("too_large", "WebSocket frame length too large"), 
            !1);
        },
        _emitFrame: function(e) {
            var t, n, r, i, o, a = this._frame, l = a.payload = u.mask(e, a.maskingKey), d = a.opcode;
            if (delete this._frame, d === this.OPCODES.continuation) {
                if (!this._message) return this._fail("protocol_error", "Received unexpected continuation frame");
                this._message.pushFrame(a);
            }
            if (d !== this.OPCODES.text && d !== this.OPCODES.binary || (this._message = new c, 
            this._message.pushFrame(a)), a.final && this.MESSAGE_OPCODES.indexOf(d) >= 0) return this._emitMessage(this._message);
            d === this.OPCODES.close && (n = l.length >= 2 ? l.readUInt16BE(0) : null, r = l.length > 2 ? this._encode(l.slice(2)) : null, 
            0 !== l.length && !(null !== n && n >= this.MIN_RESERVED_ERROR && n <= this.MAX_RESERVED_ERROR) && this.ERROR_CODES.indexOf(n) < 0 && (n = this.ERRORS.protocol_error), 
            (l.length > 125 || l.length > 2 && !r) && (n = this.ERRORS.protocol_error), this._shutdown(n || this.DEFAULT_ERROR_CODE, r || "")), 
            d === this.OPCODES.ping && (this.frame(l, "pong"), this.emit("ping", new s.PingEvent(l.toString()))), 
            d === this.OPCODES.pong && (o = (i = this._pingCallbacks)[t = this._encode(l)], 
            delete i[t], o && o(), this.emit("pong", new s.PongEvent(l.toString())));
        },
        _emitMessage: function(e) {
            (e = this._message).read(), delete this._message, this._extensions.processIncomingMessage(e, function(e, t) {
                if (e) return this._fail("extension_error", e.message);
                var n = t.data;
                if (t.opcode === this.OPCODES.text && (n = this._encode(n)), null === n) return this._fail("encoding_error", "Could not decode a text frame as UTF-8");
                this.emit("message", new s.MessageEvent(n));
            }, this);
        },
        _encode: function(e) {
            try {
                var t = e.toString("binary", 0, e.length);
                if (!this.UTF8_MATCH.test(t)) return null;
            } catch (e) {}
            return e.toString("utf8", 0, e.length);
        },
        _readUInt: function(e) {
            return 2 === e.length ? e.readUInt16BE(0) : 4294967296 * e.readUInt32BE(0) + e.readUInt32BE(4);
        }
    };
    for (var h in d) u.prototype[h] = d[h];
    e.exports = u;
}
