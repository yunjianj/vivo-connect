// analysis/pretty/main.js:98384; webpack module 1279
function(e, t, n) {
    "use strict";
    var r = n(17).Buffer;
    t._dbcs = a;
    for (var i = new Array(256), o = 0; o < 256; o++) i[o] = -1;
    function a(e, t) {
        if (this.encodingName = e.encodingName, !e) throw new Error("DBCS codec is called without the data.");
        if (!e.table) throw new Error("Encoding '" + this.encodingName + "' has no data.");
        var n = e.table();
        this.decodeTables = [], this.decodeTables[0] = i.slice(0), this.decodeTableSeq = [];
        for (var r = 0; r < n.length; r++) this._addDecodeChunk(n[r]);
        if ("function" == typeof e.gb18030) {
            this.gb18030 = e.gb18030();
            var o = this.decodeTables.length;
            this.decodeTables.push(i.slice(0));
            var a = this.decodeTables.length;
            this.decodeTables.push(i.slice(0));
            var s = this.decodeTables[0];
            for (r = 129; r <= 254; r++) for (var l = this.decodeTables[-1e3 - s[r]], c = 48; c <= 57; c++) {
                if (-1 === l[c]) l[c] = -1e3 - o; else if (l[c] > -1e3) throw new Error("gb18030 decode tables conflict at byte 2");
                for (var u = this.decodeTables[-1e3 - l[c]], d = 129; d <= 254; d++) {
                    if (-1 === u[d]) u[d] = -1e3 - a; else {
                        if (u[d] === -1e3 - a) continue;
                        if (u[d] > -1e3) throw new Error("gb18030 decode tables conflict at byte 3");
                    }
                    for (var h = this.decodeTables[-1e3 - u[d]], p = 48; p <= 57; p++) -1 === h[p] && (h[p] = -2);
                }
            }
        }
        this.defaultCharUnicode = t.defaultCharUnicode, this.encodeTable = [], this.encodeTableSeq = [];
        var f = {};
        if (e.encodeSkipVals) for (r = 0; r < e.encodeSkipVals.length; r++) {
            var _ = e.encodeSkipVals[r];
            if ("number" == typeof _) f[_] = !0; else for (c = _.from; c <= _.to; c++) f[c] = !0;
        }
        if (this._fillEncodeTable(0, 0, f), e.encodeAdd) for (var m in e.encodeAdd) Object.prototype.hasOwnProperty.call(e.encodeAdd, m) && this._setEncodeChar(m.charCodeAt(0), e.encodeAdd[m]);
        this.defCharSB = this.encodeTable[0][t.defaultCharSingleByte.charCodeAt(0)], -1 === this.defCharSB && (this.defCharSB = this.encodeTable[0]["?"]), 
        -1 === this.defCharSB && (this.defCharSB = "?".charCodeAt(0));
    }
    function s(e, t) {
        this.leadSurrogate = -1, this.seqObj = void 0, this.encodeTable = t.encodeTable, 
        this.encodeTableSeq = t.encodeTableSeq, this.defaultCharSingleByte = t.defCharSB, 
        this.gb18030 = t.gb18030;
    }
    function l(e, t) {
        this.nodeIdx = 0, this.prevBytes = [], this.decodeTables = t.decodeTables, this.decodeTableSeq = t.decodeTableSeq, 
        this.defaultCharUnicode = t.defaultCharUnicode, this.gb18030 = t.gb18030;
    }
    function c(e, t) {
        if (e[0] > t) return -1;
        for (var n = 0, r = e.length; n < r - 1; ) {
            var i = n + (r - n + 1 >> 1);
            e[i] <= t ? n = i : r = i;
        }
        return n;
    }
    a.prototype.encoder = s, a.prototype.decoder = l, a.prototype._getDecodeTrieNode = function(e) {
        for (var t = []; e > 0; e >>>= 8) t.push(255 & e);
        0 == t.length && t.push(0);
        for (var n = this.decodeTables[0], r = t.length - 1; r > 0; r--) {
            var o = n[t[r]];
            if (-1 == o) n[t[r]] = -1e3 - this.decodeTables.length, this.decodeTables.push(n = i.slice(0)); else {
                if (!(o <= -1e3)) throw new Error("Overwrite byte in " + this.encodingName + ", addr: " + e.toString(16));
                n = this.decodeTables[-1e3 - o];
            }
        }
        return n;
    }, a.prototype._addDecodeChunk = function(e) {
        var t = parseInt(e[0], 16), n = this._getDecodeTrieNode(t);
        t &= 255;
        for (var r = 1; r < e.length; r++) {
            var i = e[r];
            if ("string" == typeof i) for (var o = 0; o < i.length; ) {
                var a = i.charCodeAt(o++);
                if (55296 <= a && a < 56320) {
                    var s = i.charCodeAt(o++);
                    if (!(56320 <= s && s < 57344)) throw new Error("Incorrect surrogate pair in " + this.encodingName + " at chunk " + e[0]);
                    n[t++] = 65536 + 1024 * (a - 55296) + (s - 56320);
                } else if (4080 < a && a <= 4095) {
                    for (var l = 4095 - a + 2, c = [], u = 0; u < l; u++) c.push(i.charCodeAt(o++));
                    n[t++] = -10 - this.decodeTableSeq.length, this.decodeTableSeq.push(c);
                } else n[t++] = a;
            } else {
                if ("number" != typeof i) throw new Error("Incorrect type '" + typeof i + "' given in " + this.encodingName + " at chunk " + e[0]);
                var d = n[t - 1] + 1;
                for (o = 0; o < i; o++) n[t++] = d++;
            }
        }
        if (t > 255) throw new Error("Incorrect chunk in " + this.encodingName + " at addr " + e[0] + ": too long" + t);
    }, a.prototype._getEncodeBucket = function(e) {
        var t = e >> 8;
        return void 0 === this.encodeTable[t] && (this.encodeTable[t] = i.slice(0)), this.encodeTable[t];
    }, a.prototype._setEncodeChar = function(e, t) {
        var n = this._getEncodeBucket(e), r = 255 & e;
        n[r] <= -10 ? this.encodeTableSeq[-10 - n[r]][-1] = t : -1 == n[r] && (n[r] = t);
    }, a.prototype._setEncodeSequence = function(e, t) {
        var n, r = e[0], i = this._getEncodeBucket(r), o = 255 & r;
        i[o] <= -10 ? n = this.encodeTableSeq[-10 - i[o]] : (n = {}, -1 !== i[o] && (n[-1] = i[o]), 
        i[o] = -10 - this.encodeTableSeq.length, this.encodeTableSeq.push(n));
        for (var a = 1; a < e.length - 1; a++) {
            var s = n[r];
            "object" == typeof s ? n = s : (n = n[r] = {}, void 0 !== s && (n[-1] = s));
        }
        n[r = e[e.length - 1]] = t;
    }, a.prototype._fillEncodeTable = function(e, t, n) {
        for (var r = this.decodeTables[e], i = !1, o = {}, a = 0; a < 256; a++) {
            var s = r[a], l = t + a;
            if (!n[l]) if (s >= 0) this._setEncodeChar(s, l), i = !0; else if (s <= -1e3) {
                var c = -1e3 - s;
                if (!o[c]) {
                    var u = l << 8 >>> 0;
                    this._fillEncodeTable(c, u, n) ? i = !0 : o[c] = !0;
                }
            } else s <= -10 && (this._setEncodeSequence(this.decodeTableSeq[-10 - s], l), i = !0);
        }
        return i;
    }, s.prototype.write = function(e) {
        for (var t = r.alloc(e.length * (this.gb18030 ? 4 : 3)), n = this.leadSurrogate, i = this.seqObj, o = -1, a = 0, s = 0; ;) {
            if (-1 === o) {
                if (a == e.length) break;
                var l = e.charCodeAt(a++);
            } else {
                l = o;
                o = -1;
            }
            if (55296 <= l && l < 57344) if (l < 56320) {
                if (-1 === n) {
                    n = l;
                    continue;
                }
                n = l, l = -1;
            } else -1 !== n ? (l = 65536 + 1024 * (n - 55296) + (l - 56320), n = -1) : l = -1; else -1 !== n && (o = l, 
            l = -1, n = -1);
            var u = -1;
            if (void 0 !== i && -1 != l) {
                var d = i[l];
                if ("object" == typeof d) {
                    i = d;
                    continue;
                }
                "number" == typeof d ? u = d : null == d && void 0 !== (d = i[-1]) && (u = d, o = l), 
                i = void 0;
            } else if (l >= 0) {
                var h = this.encodeTable[l >> 8];
                if (void 0 !== h && (u = h[255 & l]), u <= -10) {
                    i = this.encodeTableSeq[-10 - u];
                    continue;
                }
                if (-1 == u && this.gb18030) {
                    var p = c(this.gb18030.uChars, l);
                    if (-1 != p) {
                        u = this.gb18030.gbChars[p] + (l - this.gb18030.uChars[p]);
                        t[s++] = 129 + Math.floor(u / 12600), u %= 12600, t[s++] = 48 + Math.floor(u / 1260), 
                        u %= 1260, t[s++] = 129 + Math.floor(u / 10), u %= 10, t[s++] = 48 + u;
                        continue;
                    }
                }
            }
            -1 === u && (u = this.defaultCharSingleByte), u < 256 ? t[s++] = u : u < 65536 ? (t[s++] = u >> 8, 
            t[s++] = 255 & u) : u < 16777216 ? (t[s++] = u >> 16, t[s++] = u >> 8 & 255, t[s++] = 255 & u) : (t[s++] = u >>> 24, 
            t[s++] = u >>> 16 & 255, t[s++] = u >>> 8 & 255, t[s++] = 255 & u);
        }
        return this.seqObj = i, this.leadSurrogate = n, t.slice(0, s);
    }, s.prototype.end = function() {
        if (-1 !== this.leadSurrogate || void 0 !== this.seqObj) {
            var e = r.alloc(10), t = 0;
            if (this.seqObj) {
                var n = this.seqObj[-1];
                void 0 !== n && (n < 256 ? e[t++] = n : (e[t++] = n >> 8, e[t++] = 255 & n)), this.seqObj = void 0;
            }
            return -1 !== this.leadSurrogate && (e[t++] = this.defaultCharSingleByte, this.leadSurrogate = -1), 
            e.slice(0, t);
        }
    }, s.prototype.findIdx = c, l.prototype.write = function(e) {
        for (var t = r.alloc(2 * e.length), n = this.nodeIdx, i = this.prevBytes, o = this.prevBytes.length, a = -this.prevBytes.length, s = 0, l = 0; s < e.length; s++) {
            var u, d = s >= 0 ? e[s] : i[s + o];
            if ((u = this.decodeTables[n][d]) >= 0) ; else if (-1 === u) u = this.defaultCharUnicode.charCodeAt(0), 
            s = a; else if (-2 === u) {
                if (s >= 3) var h = 12600 * (e[s - 3] - 129) + 1260 * (e[s - 2] - 48) + 10 * (e[s - 1] - 129) + (d - 48); else h = 12600 * (i[s - 3 + o] - 129) + 1260 * ((s - 2 >= 0 ? e[s - 2] : i[s - 2 + o]) - 48) + 10 * ((s - 1 >= 0 ? e[s - 1] : i[s - 1 + o]) - 129) + (d - 48);
                var p = c(this.gb18030.gbChars, h);
                u = this.gb18030.uChars[p] + h - this.gb18030.gbChars[p];
            } else {
                if (u <= -1e3) {
                    n = -1e3 - u;
                    continue;
                }
                if (!(u <= -10)) throw new Error("iconv-lite internal error: invalid decoding table value " + u + " at " + n + "/" + d);
                for (var f = this.decodeTableSeq[-10 - u], _ = 0; _ < f.length - 1; _++) u = f[_], 
                t[l++] = 255 & u, t[l++] = u >> 8;
                u = f[f.length - 1];
            }
            if (u >= 65536) {
                var m = 55296 | (u -= 65536) >> 10;
                t[l++] = 255 & m, t[l++] = m >> 8, u = 56320 | 1023 & u;
            }
            t[l++] = 255 & u, t[l++] = u >> 8, n = 0, a = s + 1;
        }
        return this.nodeIdx = n, this.prevBytes = a >= 0 ? Array.prototype.slice.call(e, a) : i.slice(a + o).concat(Array.prototype.slice.call(e)), 
        t.slice(0, l).toString("ucs2");
    }, l.prototype.end = function() {
        for (var e = ""; this.prevBytes.length > 0; ) {
            e += this.defaultCharUnicode;
            var t = this.prevBytes.slice(1);
            this.prevBytes = [], this.nodeIdx = 0, t.length > 0 && (e += this.write(t));
        }
        return this.prevBytes = [], this.nodeIdx = 0, e;
    };
}
