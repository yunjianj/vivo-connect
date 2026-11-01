// analysis/pretty/main.js:75200; webpack module 832
function(e, t, n) {
    var r, i;
    e.exports = (i = n(16), n(31), i.mode.ECB = ((r = i.lib.BlockCipherMode.extend()).Encryptor = r.extend({
        processBlock: function(e, t) {
            this._cipher.encryptBlock(e, t);
        }
    }), r.Decryptor = r.extend({
        processBlock: function(e, t) {
            this._cipher.decryptBlock(e, t);
        }
    }), r), i.mode.ECB);
}
