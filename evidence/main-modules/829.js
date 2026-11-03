// analysis/pretty/main.js:75147; webpack module 829
function(e, t, n) {
    var r, i, o;
    e.exports = (o = n(16), n(31), o.mode.CTR = (r = o.lib.BlockCipherMode.extend(), 
    i = r.Encryptor = r.extend({
        processBlock: function(e, t) {
            var n = this._cipher, r = n.blockSize, i = this._iv, o = this._counter;
            i && (o = this._counter = i.slice(0), this._iv = void 0);
            var a = o.slice(0);
            n.encryptBlock(a, 0), o[r - 1] = o[r - 1] + 1 | 0;
            for (var s = 0; s < r; s++) e[t + s] ^= a[s];
        }
    }), r.Decryptor = i, r), o.mode.CTR);
}
