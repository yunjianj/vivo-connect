// analysis/pretty/main.js:30358; webpack module 251
function(e, t, n) {
    var r, i, o, a;
    e.exports = (r = n(16), o = (i = r).lib.Base, a = i.enc.Utf8, void (i.algo.HMAC = o.extend({
        init: function(e, t) {
            e = this._hasher = new e.init, "string" == typeof t && (t = a.parse(t));
            var n = e.blockSize, r = 4 * n;
            t.sigBytes > r && (t = e.finalize(t)), t.clamp();
            for (var i = this._oKey = t.clone(), o = this._iKey = t.clone(), s = i.words, l = o.words, c = 0; c < n; c++) s[c] ^= 1549556828, 
            l[c] ^= 909522486;
            i.sigBytes = o.sigBytes = r, this.reset();
        },
        reset: function() {
            var e = this._hasher;
            e.reset(), e.update(this._iKey);
        },
        update: function(e) {
            return this._hasher.update(e), this;
        },
        finalize: function(e) {
            var t = this._hasher, n = t.finalize(e);
            return t.reset(), t.finalize(this._oKey.clone().concat(n));
        }
    })));
}
