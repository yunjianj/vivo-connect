// analysis/pretty/main.js:61986; webpack module 692
function(e, t, n) {
    var r = n(1402), i = n(111).bufferAllocUnsafe;
    function o(e, t, n) {
        this.maskBytes = e, this.frameHeader = t, this.config = n, this.maxReceivedFrameSize = n.maxReceivedFrameSize, 
        this.protocolError = !1, this.frameTooLarge = !1, this.invalidCloseFrameLength = !1, 
        this.parseState = 1, this.closeStatus = -1;
    }
    o.prototype.addData = function(e) {
        if (1 === this.parseState && e.length >= 2) {
            e.joinInto(this.frameHeader, 0, 0, 2), e.advance(2);
            var t = this.frameHeader[0], n = this.frameHeader[1];
            if (this.fin = Boolean(128 & t), this.rsv1 = Boolean(64 & t), this.rsv2 = Boolean(32 & t), 
            this.rsv3 = Boolean(16 & t), this.mask = Boolean(128 & n), this.opcode = 15 & t, 
            this.length = 127 & n, this.opcode >= 8) {
                if (this.length > 125) return this.protocolError = !0, this.dropReason = "Illegal control frame longer than 125 bytes.", 
                !0;
                if (!this.fin) return this.protocolError = !0, this.dropReason = "Control frames must not be fragmented.", 
                !0;
            }
            126 === this.length ? this.parseState = 2 : 127 === this.length ? this.parseState = 3 : this.parseState = 4;
        }
        if (2 === this.parseState) e.length >= 2 && (e.joinInto(this.frameHeader, 2, 0, 2), 
        e.advance(2), this.length = this.frameHeader.readUInt16BE(2), this.parseState = 4); else if (3 === this.parseState && e.length >= 8) {
            e.joinInto(this.frameHeader, 2, 0, 8), e.advance(8);
            var o = [ this.frameHeader.readUInt32BE(2), this.frameHeader.readUInt32BE(6) ];
            if (0 !== o[0]) return this.protocolError = !0, this.dropReason = "Unsupported 64-bit length frame received", 
            !0;
            this.length = o[1], this.parseState = 4;
        }
        if (4 === this.parseState && (this.mask ? e.length >= 4 && (e.joinInto(this.maskBytes, 0, 0, 4), 
        e.advance(4), this.parseState = 5) : this.parseState = 5), 5 === this.parseState) {
            if (this.length > this.maxReceivedFrameSize) return this.frameTooLarge = !0, this.dropReason = "Frame size of " + this.length.toString(10) + " bytes exceeds maximum accepted frame size", 
            !0;
            if (0 === this.length) return this.binaryPayload = i(0), this.parseState = 6, !0;
            if (e.length >= this.length) return this.binaryPayload = e.take(this.length), e.advance(this.length), 
            this.mask && r.unmask(this.binaryPayload, this.maskBytes), 8 === this.opcode && (1 === this.length && (this.binaryPayload = i(0), 
            this.invalidCloseFrameLength = !0), this.length >= 2 && (this.closeStatus = this.binaryPayload.readUInt16BE(0), 
            this.binaryPayload = this.binaryPayload.slice(2))), this.parseState = 6, !0;
        }
        return !1;
    }, o.prototype.throwAwayPayload = function(e) {
        return e.length >= this.length && (e.advance(this.length), this.parseState = 6, 
        !0);
    }, o.prototype.toBuffer = function(e) {
        var t, n, o, a = 2, s = 0, l = 0;
        this.fin && (s |= 128), this.rsv1 && (s |= 64), this.rsv2 && (s |= 32), this.rsv3 && (s |= 16), 
        this.mask && (l |= 128), s |= 15 & this.opcode, 8 === this.opcode ? (this.length = 2, 
        this.binaryPayload && (this.length += this.binaryPayload.length), (n = i(this.length)).writeUInt16BE(this.closeStatus, 0), 
        this.length > 2 && this.binaryPayload.copy(n, 2)) : this.binaryPayload ? (n = this.binaryPayload, 
        this.length = n.length) : this.length = 0, this.length <= 125 ? l |= 127 & this.length : this.length > 125 && this.length <= 65535 ? (l |= 126, 
        a += 2) : this.length > 65535 && (l |= 127, a += 8);
        var c = i(this.length + a + (this.mask ? 4 : 0));
        return c[0] = s, c[1] = l, o = 2, this.length > 125 && this.length <= 65535 ? (c.writeUInt16BE(this.length, o), 
        o += 2) : this.length > 65535 && (c.writeUInt32BE(0, o), c.writeUInt32BE(this.length, o + 4), 
        o += 8), this.mask ? (t = e ? 0 : 4294967295 * Math.random() >>> 0, this.maskBytes.writeUInt32BE(t, 0), 
        this.maskBytes.copy(c, o), o += 4, n && r.mask(n, this.maskBytes, c, o, this.length)) : n && n.copy(c, o), 
        c;
    }, o.prototype.toString = function() {
        return "Opcode: " + this.opcode + ", fin: " + this.fin + ", length: " + this.length + ", hasPayload: " + Boolean(this.binaryPayload) + ", masked: " + this.mask;
    }, e.exports = o;
}
