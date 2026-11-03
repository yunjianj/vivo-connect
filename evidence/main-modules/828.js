// analysis/pretty/main.js:75126; webpack module 828
function(e, t, n) {
    var r;
    e.exports = (r = n(16), n(31), r.mode.CFB = function() {
        var e = r.lib.BlockCipherMode.extend();
        function t(e, t, n, r) {
            var i, o = this._iv;
            o ? (i = o.slice(0), this._iv = void 0) : i = this._prevBlock, r.encryptBlock(i, 0);
            for (var a = 0; a < n; a++) e[t + a] ^= i[a];
        }
        return e.Encryptor = e.extend({
            processBlock: function(e, n) {
                var r = this._cipher, i = r.blockSize;
                t.call(this, e, n, i, r), this._prevBlock = e.slice(n, n + i);
            }
        }), e.Decryptor = e.extend({
            processBlock: function(e, n) {
                var r = this._cipher, i = r.blockSize, o = e.slice(n, n + i);
                t.call(this, e, n, i, r), this._prevBlock = o;
            }
        }), e;
    }(), r.mode.CFB);
}
