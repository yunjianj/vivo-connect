// analysis/pretty/main.js:93388; webpack module 1184
function(e, t, n) {
    var r = n(44), i = n(17).Buffer, o = n(294), a = n(293).newInvalidAsn1Error, s = {
        size: 1024,
        growthFactor: 8
    };
    function l(e) {
        var t, n;
        t = s, n = e || {}, r.ok(t), r.equal(typeof t, "object"), r.ok(n), r.equal(typeof n, "object"), 
        Object.getOwnPropertyNames(t).forEach(function(e) {
            if (!n[e]) {
                var r = Object.getOwnPropertyDescriptor(t, e);
                Object.defineProperty(n, e, r);
            }
        }), e = n, this._buf = i.alloc(e.size || 1024), this._size = this._buf.length, this._offset = 0, 
        this._options = e, this._seq = [];
    }
    Object.defineProperty(l.prototype, "buffer", {
        get: function() {
            if (this._seq.length) throw a(this._seq.length + " unended sequence(s)");
            return this._buf.slice(0, this._offset);
        }
    }), l.prototype.writeByte = function(e) {
        if ("number" != typeof e) throw new TypeError("argument must be a Number");
        this._ensure(1), this._buf[this._offset++] = e;
    }, l.prototype.writeInt = function(e, t) {
        if ("number" != typeof e) throw new TypeError("argument must be a Number");
        "number" != typeof t && (t = o.Integer);
        for (var n = 4; (0 == (4286578688 & e) || -8388608 == (4286578688 & e)) && n > 1; ) n--, 
        e <<= 8;
        if (n > 4) throw a("BER ints cannot be > 0xffffffff");
        for (this._ensure(2 + n), this._buf[this._offset++] = t, this._buf[this._offset++] = n; n-- > 0; ) this._buf[this._offset++] = (4278190080 & e) >>> 24, 
        e <<= 8;
    }, l.prototype.writeNull = function() {
        this.writeByte(o.Null), this.writeByte(0);
    }, l.prototype.writeEnumeration = function(e, t) {
        if ("number" != typeof e) throw new TypeError("argument must be a Number");
        return "number" != typeof t && (t = o.Enumeration), this.writeInt(e, t);
    }, l.prototype.writeBoolean = function(e, t) {
        if ("boolean" != typeof e) throw new TypeError("argument must be a Boolean");
        "number" != typeof t && (t = o.Boolean), this._ensure(3), this._buf[this._offset++] = t, 
        this._buf[this._offset++] = 1, this._buf[this._offset++] = e ? 255 : 0;
    }, l.prototype.writeString = function(e, t) {
        if ("string" != typeof e) throw new TypeError("argument must be a string (was: " + typeof e + ")");
        "number" != typeof t && (t = o.OctetString);
        var n = i.byteLength(e);
        this.writeByte(t), this.writeLength(n), n && (this._ensure(n), this._buf.write(e, this._offset), 
        this._offset += n);
    }, l.prototype.writeBuffer = function(e, t) {
        if ("number" != typeof t) throw new TypeError("tag must be a number");
        if (!i.isBuffer(e)) throw new TypeError("argument must be a buffer");
        this.writeByte(t), this.writeLength(e.length), this._ensure(e.length), e.copy(this._buf, this._offset, 0, e.length), 
        this._offset += e.length;
    }, l.prototype.writeStringArray = function(e) {
        if (!e instanceof Array) throw new TypeError("argument must be an Array[String]");
        var t = this;
        e.forEach(function(e) {
            t.writeString(e);
        });
    }, l.prototype.writeOID = function(e, t) {
        if ("string" != typeof e) throw new TypeError("argument must be a string");
        if ("number" != typeof t && (t = o.OID), !/^([0-9]+\.){3,}[0-9]+$/.test(e)) throw new Error("argument is not a valid OID string");
        var n = e.split("."), r = [];
        r.push(40 * parseInt(n[0], 10) + parseInt(n[1], 10)), n.slice(2).forEach(function(e) {
            !function(e, t) {
                t < 128 ? e.push(t) : t < 16384 ? (e.push(t >>> 7 | 128), e.push(127 & t)) : t < 2097152 ? (e.push(t >>> 14 | 128), 
                e.push(255 & (t >>> 7 | 128)), e.push(127 & t)) : t < 268435456 ? (e.push(t >>> 21 | 128), 
                e.push(255 & (t >>> 14 | 128)), e.push(255 & (t >>> 7 | 128)), e.push(127 & t)) : (e.push(255 & (t >>> 28 | 128)), 
                e.push(255 & (t >>> 21 | 128)), e.push(255 & (t >>> 14 | 128)), e.push(255 & (t >>> 7 | 128)), 
                e.push(127 & t));
            }(r, parseInt(e, 10));
        });
        var i = this;
        this._ensure(2 + r.length), this.writeByte(t), this.writeLength(r.length), r.forEach(function(e) {
            i.writeByte(e);
        });
    }, l.prototype.writeLength = function(e) {
        if ("number" != typeof e) throw new TypeError("argument must be a Number");
        if (this._ensure(4), e <= 127) this._buf[this._offset++] = e; else if (e <= 255) this._buf[this._offset++] = 129, 
        this._buf[this._offset++] = e; else if (e <= 65535) this._buf[this._offset++] = 130, 
        this._buf[this._offset++] = e >> 8, this._buf[this._offset++] = e; else {
            if (!(e <= 16777215)) throw a("Length too long (> 4 bytes)");
            this._buf[this._offset++] = 131, this._buf[this._offset++] = e >> 16, this._buf[this._offset++] = e >> 8, 
            this._buf[this._offset++] = e;
        }
    }, l.prototype.startSequence = function(e) {
        "number" != typeof e && (e = o.Sequence | o.Constructor), this.writeByte(e), this._seq.push(this._offset), 
        this._ensure(3), this._offset += 3;
    }, l.prototype.endSequence = function() {
        var e = this._seq.pop(), t = e + 3, n = this._offset - t;
        if (n <= 127) this._shift(t, n, -2), this._buf[e] = n; else if (n <= 255) this._shift(t, n, -1), 
        this._buf[e] = 129, this._buf[e + 1] = n; else if (n <= 65535) this._buf[e] = 130, 
        this._buf[e + 1] = n >> 8, this._buf[e + 2] = n; else {
            if (!(n <= 16777215)) throw a("Sequence too long");
            this._shift(t, n, 1), this._buf[e] = 131, this._buf[e + 1] = n >> 16, this._buf[e + 2] = n >> 8, 
            this._buf[e + 3] = n;
        }
    }, l.prototype._shift = function(e, t, n) {
        r.ok(void 0 !== e), r.ok(void 0 !== t), r.ok(n), this._buf.copy(this._buf, e + n, e, e + t), 
        this._offset += n;
    }, l.prototype._ensure = function(e) {
        if (r.ok(e), this._size - this._offset < e) {
            var t = this._size * this._options.growthFactor;
            t - this._offset < e && (t += e);
            var n = i.alloc(t);
            this._buf.copy(n, 0, 0, this._offset), this._buf = n, this._size = t;
        }
    }, e.exports = l;
}
