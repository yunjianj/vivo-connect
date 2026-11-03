// analysis/pretty/main.js:56741; webpack module 602
function(e, t, n) {
    /*! crc32.js (C) 2014-present SheetJS -- http://sheetjs.com */
    var r;
    r = function(e) {
        e.version = "1.2.2";
        var t = function() {
            for (var e = 0, t = new Array(256), n = 0; 256 != n; ++n) e = 1 & (e = 1 & (e = 1 & (e = 1 & (e = 1 & (e = 1 & (e = 1 & (e = 1 & (e = n) ? -306674912 ^ e >>> 1 : e >>> 1) ? -306674912 ^ e >>> 1 : e >>> 1) ? -306674912 ^ e >>> 1 : e >>> 1) ? -306674912 ^ e >>> 1 : e >>> 1) ? -306674912 ^ e >>> 1 : e >>> 1) ? -306674912 ^ e >>> 1 : e >>> 1) ? -306674912 ^ e >>> 1 : e >>> 1) ? -306674912 ^ e >>> 1 : e >>> 1, 
            t[n] = e;
            return "undefined" != typeof Int32Array ? new Int32Array(t) : t;
        }(), n = function(e) {
            var t = 0, n = 0, r = 0, i = "undefined" != typeof Int32Array ? new Int32Array(4096) : new Array(4096);
            for (r = 0; 256 != r; ++r) i[r] = e[r];
            for (r = 0; 256 != r; ++r) for (n = e[r], t = 256 + r; t < 4096; t += 256) n = i[t] = n >>> 8 ^ e[255 & n];
            var o = [];
            for (r = 1; 16 != r; ++r) o[r - 1] = "undefined" != typeof Int32Array ? i.subarray(256 * r, 256 * r + 256) : i.slice(256 * r, 256 * r + 256);
            return o;
        }(t), r = n[0], i = n[1], o = n[2], a = n[3], s = n[4], l = n[5], c = n[6], u = n[7], d = n[8], h = n[9], p = n[10], f = n[11], _ = n[12], m = n[13], g = n[14];
        e.table = t, e.bstr = function(e, n) {
            for (var r = -1 ^ n, i = 0, o = e.length; i < o; ) r = r >>> 8 ^ t[255 & (r ^ e.charCodeAt(i++))];
            return ~r;
        }, e.buf = function(e, n) {
            for (var v = -1 ^ n, y = e.length - 15, E = 0; E < y; ) v = g[e[E++] ^ 255 & v] ^ m[e[E++] ^ v >> 8 & 255] ^ _[e[E++] ^ v >> 16 & 255] ^ f[e[E++] ^ v >>> 24] ^ p[e[E++]] ^ h[e[E++]] ^ d[e[E++]] ^ u[e[E++]] ^ c[e[E++]] ^ l[e[E++]] ^ s[e[E++]] ^ a[e[E++]] ^ o[e[E++]] ^ i[e[E++]] ^ r[e[E++]] ^ t[e[E++]];
            for (y += 15; E < y; ) v = v >>> 8 ^ t[255 & (v ^ e[E++])];
            return ~v;
        }, e.str = function(e, n) {
            for (var r = -1 ^ n, i = 0, o = e.length, a = 0, s = 0; i < o; ) (a = e.charCodeAt(i++)) < 128 ? r = r >>> 8 ^ t[255 & (r ^ a)] : a < 2048 ? r = (r = r >>> 8 ^ t[255 & (r ^ (192 | a >> 6 & 31))]) >>> 8 ^ t[255 & (r ^ (128 | 63 & a))] : a >= 55296 && a < 57344 ? (a = 64 + (1023 & a), 
            s = 1023 & e.charCodeAt(i++), r = (r = (r = (r = r >>> 8 ^ t[255 & (r ^ (240 | a >> 8 & 7))]) >>> 8 ^ t[255 & (r ^ (128 | a >> 2 & 63))]) >>> 8 ^ t[255 & (r ^ (128 | s >> 6 & 15 | (3 & a) << 4))]) >>> 8 ^ t[255 & (r ^ (128 | 63 & s))]) : r = (r = (r = r >>> 8 ^ t[255 & (r ^ (224 | a >> 12 & 15))]) >>> 8 ^ t[255 & (r ^ (128 | a >> 6 & 63))]) >>> 8 ^ t[255 & (r ^ (128 | 63 & a))];
            return ~r;
        };
    }, "undefined" == typeof DO_NOT_EXPORT_CRC ? r(t) : r({});
}
