// analysis/pretty/main.js:75159; webpack module 830
function(e, t, n) {
    var r;
    e.exports = (r = n(16), n(31), 
    /** @preserve
	 * Counter block mode compatible with  Dr Brian Gladman fileenc.c
	 * derived from CryptoJS.mode.CTR
	 * Jan Hruby jhruby.web@gmail.com
	 */
    r.mode.CTRGladman = function() {
        var e = r.lib.BlockCipherMode.extend();
        function t(e) {
            if (255 == (e >> 24 & 255)) {
                var t = e >> 16 & 255, n = e >> 8 & 255, r = 255 & e;
                255 === t ? (t = 0, 255 === n ? (n = 0, 255 === r ? r = 0 : ++r) : ++n) : ++t, e = 0, 
                e += t << 16, e += n << 8, e += r;
            } else e += 1 << 24;
            return e;
        }
        var n = e.Encryptor = e.extend({
            processBlock: function(e, n) {
                var r = this._cipher, i = r.blockSize, o = this._iv, a = this._counter;
                o && (a = this._counter = o.slice(0), this._iv = void 0), function(e) {
                    0 === (e[0] = t(e[0])) && (e[1] = t(e[1]));
                }(a);
                var s = a.slice(0);
                r.encryptBlock(s, 0);
                for (var l = 0; l < i; l++) e[n + l] ^= s[l];
            }
        });
        return e.Decryptor = n, e;
    }(), r.mode.CTRGladman);
}
