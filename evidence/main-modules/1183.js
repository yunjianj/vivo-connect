// analysis/pretty/main.js:93300; webpack module 1183
function(e, t, n) {
    var r = n(44), i = n(17).Buffer, o = n(294), a = n(293).newInvalidAsn1Error;
    function s(e) {
        if (!e || !i.isBuffer(e)) throw new TypeError("data must be a node Buffer");
        this._buf = e, this._size = e.length, this._len = 0, this._offset = 0;
    }
    Object.defineProperty(s.prototype, "length", {
        enumerable: !0,
        get: function() {
            return this._len;
        }
    }), Object.defineProperty(s.prototype, "offset", {
        enumerable: !0,
        get: function() {
            return this._offset;
        }
    }), Object.defineProperty(s.prototype, "remain", {
        get: function() {
            return this._size - this._offset;
        }
    }), Object.defineProperty(s.prototype, "buffer", {
        get: function() {
            return this._buf.slice(this._offset);
        }
    }), s.prototype.readByte = function(e) {
        if (this._size - this._offset < 1) return null;
        var t = 255 & this._buf[this._offset];
        return e || (this._offset += 1), t;
    }, s.prototype.peek = function() {
        return this.readByte(!0);
    }, s.prototype.readLength = function(e) {
        if (void 0 === e && (e = this._offset), e >= this._size) return null;
        var t = 255 & this._buf[e++];
        if (null === t) return null;
        if (128 == (128 & t)) {
            if (0 === (t &= 127)) throw a("Indefinite length not supported");
            if (t > 4) throw a("encoding too long");
            if (this._size - e < t) return null;
            this._len = 0;
            for (var n = 0; n < t; n++) this._len = (this._len << 8) + (255 & this._buf[e++]);
        } else this._len = t;
        return e;
    }, s.prototype.readSequence = function(e) {
        var t = this.peek();
        if (null === t) return null;
        if (void 0 !== e && e !== t) throw a("Expected 0x" + e.toString(16) + ": got 0x" + t.toString(16));
        var n = this.readLength(this._offset + 1);
        return null === n ? null : (this._offset = n, t);
    }, s.prototype.readInt = function() {
        return this._readTag(o.Integer);
    }, s.prototype.readBoolean = function() {
        return 0 !== this._readTag(o.Boolean);
    }, s.prototype.readEnumeration = function() {
        return this._readTag(o.Enumeration);
    }, s.prototype.readString = function(e, t) {
        e || (e = o.OctetString);
        var n = this.peek();
        if (null === n) return null;
        if (n !== e) throw a("Expected 0x" + e.toString(16) + ": got 0x" + n.toString(16));
        var r = this.readLength(this._offset + 1);
        if (null === r) return null;
        if (this.length > this._size - r) return null;
        if (this._offset = r, 0 === this.length) return t ? i.alloc(0) : "";
        var s = this._buf.slice(this._offset, this._offset + this.length);
        return this._offset += this.length, t ? s : s.toString("utf8");
    }, s.prototype.readOID = function(e) {
        e || (e = o.OID);
        var t = this.readString(e, !0);
        if (null === t) return null;
        for (var n = [], r = 0, i = 0; i < t.length; i++) {
            var a = 255 & t[i];
            r <<= 7, r += 127 & a, 0 == (128 & a) && (n.push(r), r = 0);
        }
        return r = n.shift(), n.unshift(r % 40), n.unshift(r / 40 >> 0), n.join(".");
    }, s.prototype._readTag = function(e) {
        r.ok(void 0 !== e);
        var t = this.peek();
        if (null === t) return null;
        if (t !== e) throw a("Expected 0x" + e.toString(16) + ": got 0x" + t.toString(16));
        var n = this.readLength(this._offset + 1);
        if (null === n) return null;
        if (this.length > 4) throw a("Integer too long: " + this.length);
        if (this.length > this._size - n) return null;
        this._offset = n;
        for (var i = this._buf[this._offset], o = 0, s = 0; s < this.length; s++) o <<= 8, 
        o |= 255 & this._buf[this._offset++];
        return 128 == (128 & i) && 4 !== s && (o -= 1 << 8 * s), o >> 0;
    }, e.exports = s;
}
