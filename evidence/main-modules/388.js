// analysis/pretty/main.js:41752; webpack module 388
function(e, t, n) {
    var r, i, o, a, s, l, c, u;
    e.exports = (u = n(16), i = (r = u).lib, o = i.WordArray, a = i.Hasher, s = r.algo, 
    l = [], c = s.SHA1 = a.extend({
        _doReset: function() {
            this._hash = new o.init([ 1732584193, 4023233417, 2562383102, 271733878, 3285377520 ]);
        },
        _doProcessBlock: function(e, t) {
            for (var n = this._hash.words, r = n[0], i = n[1], o = n[2], a = n[3], s = n[4], c = 0; c < 80; c++) {
                if (c < 16) l[c] = 0 | e[t + c]; else {
                    var u = l[c - 3] ^ l[c - 8] ^ l[c - 14] ^ l[c - 16];
                    l[c] = u << 1 | u >>> 31;
                }
                var d = (r << 5 | r >>> 27) + s + l[c];
                d += c < 20 ? 1518500249 + (i & o | ~i & a) : c < 40 ? 1859775393 + (i ^ o ^ a) : c < 60 ? (i & o | i & a | o & a) - 1894007588 : (i ^ o ^ a) - 899497514, 
                s = a, a = o, o = i << 30 | i >>> 2, i = r, r = d;
            }
            n[0] = n[0] + r | 0, n[1] = n[1] + i | 0, n[2] = n[2] + o | 0, n[3] = n[3] + a | 0, 
            n[4] = n[4] + s | 0;
        },
        _doFinalize: function() {
            var e = this._data, t = e.words, n = 8 * this._nDataBytes, r = 8 * e.sigBytes;
            return t[r >>> 5] |= 128 << 24 - r % 32, t[14 + (r + 64 >>> 9 << 4)] = Math.floor(n / 4294967296), 
            t[15 + (r + 64 >>> 9 << 4)] = n, e.sigBytes = 4 * t.length, this._process(), this._hash;
        },
        clone: function() {
            var e = a.clone.call(this);
            return e._hash = this._hash.clone(), e;
        }
    }), r.SHA1 = a._createHelper(c), r.HmacSHA1 = a._createHmacHelper(c), u.SHA1);
}
