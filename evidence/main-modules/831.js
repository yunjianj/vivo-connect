// analysis/pretty/main.js:75190; webpack module 831
function(e, t, n) {
    var r, i, o;
    e.exports = (o = n(16), n(31), o.mode.OFB = (r = o.lib.BlockCipherMode.extend(), 
    i = r.Encryptor = r.extend({
        processBlock: function(e, t) {
            var n = this._cipher, r = n.blockSize, i = this._iv, o = this._keystream;
            i && (o = this._keystream = i.slice(0), this._iv = void 0), n.encryptBlock(o, 0);
            for (var a = 0; a < r; a++) e[t + a] ^= o[a];
        }
    }), r.Decryptor = i, r), o.mode.OFB);
}
