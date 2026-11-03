// analysis/pretty/main.js:97495; webpack module 1273
function(e, t, n) {
    "use strict";
    var r = n(17).Buffer;
    function i(e, t) {
        this.iconv = t, this.bomAware = !0, this.isLE = e.isLE;
    }
    function o(e, t) {
        this.isLE = t.isLE, this.highSurrogate = 0;
    }
    function a(e, t) {
        this.isLE = t.isLE, this.badChar = t.iconv.defaultCharUnicode.charCodeAt(0), this.overflow = [];
    }
    function s(e, t, n, r) {
        if ((n < 0 || n > 1114111) && (n = r), n >= 65536) {
            var i = 55296 | (n -= 65536) >> 10;
            e[t++] = 255 & i, e[t++] = i >> 8;
            n = 56320 | 1023 & n;
        }
        return e[t++] = 255 & n, e[t++] = n >> 8, t;
    }
    function l(e, t) {
        this.iconv = t;
    }
    function c(e, t) {
        void 0 === (e = e || {}).addBOM && (e.addBOM = !0), this.encoder = t.iconv.getEncoder(e.defaultEncoding || "utf-32le", e);
    }
    function u(e, t) {
        this.decoder = null, this.initialBufs = [], this.initialBufsLen = 0, this.options = e || {}, 
        this.iconv = t.iconv;
    }
    function d(e, t) {
        var n = [], r = 0, i = 0, o = 0, a = 0, s = 0;
        e: for (var l = 0; l < e.length; l++) for (var c = e[l], u = 0; u < c.length; u++) if (n.push(c[u]), 
        4 === n.length) {
            if (0 === r) {
                if (255 === n[0] && 254 === n[1] && 0 === n[2] && 0 === n[3]) return "utf-32le";
                if (0 === n[0] && 0 === n[1] && 254 === n[2] && 255 === n[3]) return "utf-32be";
            }
            if ((0 !== n[0] || n[1] > 16) && o++, (0 !== n[3] || n[2] > 16) && i++, 0 !== n[0] || 0 !== n[1] || 0 === n[2] && 0 === n[3] || s++, 
            0 === n[0] && 0 === n[1] || 0 !== n[2] || 0 !== n[3] || a++, n.length = 0, ++r >= 100) break e;
        }
        return s - o > a - i ? "utf-32be" : s - o < a - i ? "utf-32le" : t || "utf-32le";
    }
    t._utf32 = i, t.utf32le = {
        type: "_utf32",
        isLE: !0
    }, t.utf32be = {
        type: "_utf32",
        isLE: !1
    }, t.ucs4le = "utf32le", t.ucs4be = "utf32be", i.prototype.encoder = o, i.prototype.decoder = a, 
    o.prototype.write = function(e) {
        for (var t = r.from(e, "ucs2"), n = r.alloc(2 * t.length), i = this.isLE ? n.writeUInt32LE : n.writeUInt32BE, o = 0, a = 0; a < t.length; a += 2) {
            var s = t.readUInt16LE(a), l = 55296 <= s && s < 56320, c = 56320 <= s && s < 57344;
            if (this.highSurrogate) {
                if (!l && c) {
                    var u = 65536 + (this.highSurrogate - 55296 << 10 | s - 56320);
                    i.call(n, u, o), o += 4, this.highSurrogate = 0;
                    continue;
                }
                i.call(n, this.highSurrogate, o), o += 4;
            }
            l ? this.highSurrogate = s : (i.call(n, s, o), o += 4, this.highSurrogate = 0);
        }
        return o < n.length && (n = n.slice(0, o)), n;
    }, o.prototype.end = function() {
        if (this.highSurrogate) {
            var e = r.alloc(4);
            return this.isLE ? e.writeUInt32LE(this.highSurrogate, 0) : e.writeUInt32BE(this.highSurrogate, 0), 
            this.highSurrogate = 0, e;
        }
    }, a.prototype.write = function(e) {
        if (0 === e.length) return "";
        var t = 0, n = 0, i = r.alloc(e.length + 4), o = 0, a = this.isLE, l = this.overflow, c = this.badChar;
        if (l.length > 0) {
            for (;t < e.length && l.length < 4; t++) l.push(e[t]);
            4 === l.length && (n = a ? l[t] | l[t + 1] << 8 | l[t + 2] << 16 | l[t + 3] << 24 : l[t + 3] | l[t + 2] << 8 | l[t + 1] << 16 | l[t] << 24, 
            l.length = 0, o = s(i, o, n, c));
        }
        for (;t < e.length - 3; t += 4) o = s(i, o, n = a ? e[t] | e[t + 1] << 8 | e[t + 2] << 16 | e[t + 3] << 24 : e[t + 3] | e[t + 2] << 8 | e[t + 1] << 16 | e[t] << 24, c);
        for (;t < e.length; t++) l.push(e[t]);
        return i.slice(0, o).toString("ucs2");
    }, a.prototype.end = function() {
        this.overflow.length = 0;
    }, t.utf32 = l, t.ucs4 = "utf32", l.prototype.encoder = c, l.prototype.decoder = u, 
    c.prototype.write = function(e) {
        return this.encoder.write(e);
    }, c.prototype.end = function() {
        return this.encoder.end();
    }, u.prototype.write = function(e) {
        if (!this.decoder) {
            if (this.initialBufs.push(e), this.initialBufsLen += e.length, this.initialBufsLen < 32) return "";
            var t = d(this.initialBufs, this.options.defaultEncoding);
            this.decoder = this.iconv.getDecoder(t, this.options);
            for (var n = "", r = 0; r < this.initialBufs.length; r++) n += this.decoder.write(this.initialBufs[r]);
            return this.initialBufs.length = this.initialBufsLen = 0, n;
        }
        return this.decoder.write(e);
    }, u.prototype.end = function() {
        if (!this.decoder) {
            var e = d(this.initialBufs, this.options.defaultEncoding);
            this.decoder = this.iconv.getDecoder(e, this.options);
            for (var t = "", n = 0; n < this.initialBufs.length; n++) t += this.decoder.write(this.initialBufs[n]);
            var r = this.decoder.end();
            return r && (t += r), this.initialBufs.length = this.initialBufsLen = 0, t;
        }
        return this.decoder.end();
    };
}
