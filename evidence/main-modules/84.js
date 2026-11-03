// analysis/pretty/main.js:14843; webpack module 84
function(e, t, n) {
    var r, i, o, a, s, l, c, u;
    e.exports = (u = n(16), n(388), n(251), i = (r = u).lib, o = i.Base, a = i.WordArray, 
    s = r.algo, l = s.MD5, c = s.EvpKDF = o.extend({
        cfg: o.extend({
            keySize: 4,
            hasher: l,
            iterations: 1
        }),
        init: function(e) {
            this.cfg = this.cfg.extend(e);
        },
        compute: function(e, t) {
            for (var n, r = this.cfg, i = r.hasher.create(), o = a.create(), s = o.words, l = r.keySize, c = r.iterations; s.length < l; ) {
                n && i.update(n), n = i.update(e).finalize(t), i.reset();
                for (var u = 1; u < c; u++) n = i.finalize(n), i.reset();
                o.concat(n);
            }
            return o.sigBytes = 4 * l, o;
        }
    }), r.EvpKDF = function(e, t, n) {
        return c.create(n).compute(e, t);
    }, u.EvpKDF);
}
