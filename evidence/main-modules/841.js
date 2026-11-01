// analysis/pretty/main.js:75920; webpack module 841
function(e, t, n) {
    var r;
    e.exports = (r = n(16), n(97), n(98), n(84), n(31), function() {
        var e = r, t = e.lib.StreamCipher, n = e.algo, i = n.RC4 = t.extend({
            _doReset: function() {
                for (var e = this._key, t = e.words, n = e.sigBytes, r = this._S = [], i = 0; i < 256; i++) r[i] = i;
                i = 0;
                for (var o = 0; i < 256; i++) {
                    var a = i % n, s = t[a >>> 2] >>> 24 - a % 4 * 8 & 255;
                    o = (o + r[i] + s) % 256;
                    var l = r[i];
                    r[i] = r[o], r[o] = l;
                }
                this._i = this._j = 0;
            },
            _doProcessBlock: function(e, t) {
                e[t] ^= o.call(this);
            },
            keySize: 8,
            ivSize: 0
        });
        function o() {
            for (var e = this._S, t = this._i, n = this._j, r = 0, i = 0; i < 4; i++) {
                n = (n + e[t = (t + 1) % 256]) % 256;
                var o = e[t];
                e[t] = e[n], e[n] = o, r |= e[(e[t] + e[n]) % 256] << 24 - 8 * i;
            }
            return this._i = t, this._j = n, r;
        }
        e.RC4 = t._createHelper(i);
        var a = n.RC4Drop = i.extend({
            cfg: i.cfg.extend({
                drop: 192
            }),
            _doReset: function() {
                i._doReset.call(this);
                for (var e = this.cfg.drop; e > 0; e--) o.call(this);
            }
        });
        e.RC4Drop = t._createHelper(a);
    }(), r.RC4);
}
