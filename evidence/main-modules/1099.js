// analysis/pretty/main.js:88527; webpack module 1099
function(e, t, n) {
    "use strict";
    const {Buffer: r} = n(47), i = Symbol.for("BufferList");
    function o(e) {
        if (!(this instanceof o)) return new o(e);
        o._init.call(this, e);
    }
    o._init = function(e) {
        Object.defineProperty(this, i, {
            value: !0
        }), this._bufs = [], this.length = 0, e && this.append(e);
    }, o.prototype._new = function(e) {
        return new o(e);
    }, o.prototype._offset = function(e) {
        if (0 === e) return [ 0, 0 ];
        let t = 0;
        for (let n = 0; n < this._bufs.length; n++) {
            const r = t + this._bufs[n].length;
            if (e < r || n === this._bufs.length - 1) return [ n, e - t ];
            t = r;
        }
    }, o.prototype._reverseOffset = function(e) {
        const t = e[0];
        let n = e[1];
        for (let e = 0; e < t; e++) n += this._bufs[e].length;
        return n;
    }, o.prototype.get = function(e) {
        if (e > this.length || e < 0) return;
        const t = this._offset(e);
        return this._bufs[t[0]][t[1]];
    }, o.prototype.slice = function(e, t) {
        return "number" == typeof e && e < 0 && (e += this.length), "number" == typeof t && t < 0 && (t += this.length), 
        this.copy(null, 0, e, t);
    }, o.prototype.copy = function(e, t, n, i) {
        if (("number" != typeof n || n < 0) && (n = 0), ("number" != typeof i || i > this.length) && (i = this.length), 
        n >= this.length) return e || r.alloc(0);
        if (i <= 0) return e || r.alloc(0);
        const o = !!e, a = this._offset(n), s = i - n;
        let l = s, c = o && t || 0, u = a[1];
        if (0 === n && i === this.length) {
            if (!o) return 1 === this._bufs.length ? this._bufs[0] : r.concat(this._bufs, this.length);
            for (let t = 0; t < this._bufs.length; t++) this._bufs[t].copy(e, c), c += this._bufs[t].length;
            return e;
        }
        if (l <= this._bufs[a[0]].length - u) return o ? this._bufs[a[0]].copy(e, t, u, u + l) : this._bufs[a[0]].slice(u, u + l);
        o || (e = r.allocUnsafe(s));
        for (let t = a[0]; t < this._bufs.length; t++) {
            const n = this._bufs[t].length - u;
            if (!(l > n)) {
                this._bufs[t].copy(e, c, u, u + l), c += n;
                break;
            }
            this._bufs[t].copy(e, c, u), c += n, l -= n, u && (u = 0);
        }
        return e.length > c ? e.slice(0, c) : e;
    }, o.prototype.shallowSlice = function(e, t) {
        if (e = e || 0, t = "number" != typeof t ? this.length : t, e < 0 && (e += this.length), 
        t < 0 && (t += this.length), e === t) return this._new();
        const n = this._offset(e), r = this._offset(t), i = this._bufs.slice(n[0], r[0] + 1);
        return 0 === r[1] ? i.pop() : i[i.length - 1] = i[i.length - 1].slice(0, r[1]), 
        0 !== n[1] && (i[0] = i[0].slice(n[1])), this._new(i);
    }, o.prototype.toString = function(e, t, n) {
        return this.slice(t, n).toString(e);
    }, o.prototype.consume = function(e) {
        if (e = Math.trunc(e), Number.isNaN(e) || e <= 0) return this;
        for (;this._bufs.length; ) {
            if (!(e >= this._bufs[0].length)) {
                this._bufs[0] = this._bufs[0].slice(e), this.length -= e;
                break;
            }
            e -= this._bufs[0].length, this.length -= this._bufs[0].length, this._bufs.shift();
        }
        return this;
    }, o.prototype.duplicate = function() {
        const e = this._new();
        for (let t = 0; t < this._bufs.length; t++) e.append(this._bufs[t]);
        return e;
    }, o.prototype.append = function(e) {
        if (null == e) return this;
        if (e.buffer) this._appendBuffer(r.from(e.buffer, e.byteOffset, e.byteLength)); else if (Array.isArray(e)) for (let t = 0; t < e.length; t++) this.append(e[t]); else if (this._isBufferList(e)) for (let t = 0; t < e._bufs.length; t++) this.append(e._bufs[t]); else "number" == typeof e && (e = e.toString()), 
        this._appendBuffer(r.from(e));
        return this;
    }, o.prototype._appendBuffer = function(e) {
        this._bufs.push(e), this.length += e.length;
    }, o.prototype.indexOf = function(e, t, n) {
        if (void 0 === n && "string" == typeof t && (n = t, t = void 0), "function" == typeof e || Array.isArray(e)) throw new TypeError('The "value" argument must be one of type string, Buffer, BufferList, or Uint8Array.');
        if ("number" == typeof e ? e = r.from([ e ]) : "string" == typeof e ? e = r.from(e, n) : this._isBufferList(e) ? e = e.slice() : Array.isArray(e.buffer) ? e = r.from(e.buffer, e.byteOffset, e.byteLength) : r.isBuffer(e) || (e = r.from(e)), 
        t = Number(t || 0), isNaN(t) && (t = 0), t < 0 && (t = this.length + t), t < 0 && (t = 0), 
        0 === e.length) return t > this.length ? this.length : t;
        const i = this._offset(t);
        let o = i[0], a = i[1];
        for (;o < this._bufs.length; o++) {
            const t = this._bufs[o];
            for (;a < t.length; ) {
                if (t.length - a >= e.length) {
                    const n = t.indexOf(e, a);
                    if (-1 !== n) return this._reverseOffset([ o, n ]);
                    a = t.length - e.length + 1;
                } else {
                    const t = this._reverseOffset([ o, a ]);
                    if (this._match(t, e)) return t;
                    a++;
                }
            }
            a = 0;
        }
        return -1;
    }, o.prototype._match = function(e, t) {
        if (this.length - e < t.length) return !1;
        for (let n = 0; n < t.length; n++) if (this.get(e + n) !== t[n]) return !1;
        return !0;
    }, function() {
        const e = {
            readDoubleBE: 8,
            readDoubleLE: 8,
            readFloatBE: 4,
            readFloatLE: 4,
            readInt32BE: 4,
            readInt32LE: 4,
            readUInt32BE: 4,
            readUInt32LE: 4,
            readInt16BE: 2,
            readInt16LE: 2,
            readUInt16BE: 2,
            readUInt16LE: 2,
            readInt8: 1,
            readUInt8: 1,
            readIntBE: null,
            readIntLE: null,
            readUIntBE: null,
            readUIntLE: null
        };
        for (const t in e) !function(t) {
            o.prototype[t] = null === e[t] ? function(e, n) {
                return this.slice(e, e + n)[t](0, n);
            } : function(n = 0) {
                return this.slice(n, n + e[t])[t](0);
            };
        }(t);
    }(), o.prototype._isBufferList = function(e) {
        return e instanceof o || o.isBufferList(e);
    }, o.isBufferList = function(e) {
        return null != e && e[i];
    }, e.exports = o;
}
