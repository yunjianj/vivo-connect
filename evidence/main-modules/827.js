// analysis/pretty/main.js:75099; webpack module 827
function(e, t, n) {
    var r, i, o, a, s, l, c, u, d;
    e.exports = (d = n(16), n(250), n(251), i = (r = d).lib, o = i.Base, a = i.WordArray, 
    s = r.algo, l = s.SHA256, c = s.HMAC, u = s.PBKDF2 = o.extend({
        cfg: o.extend({
            keySize: 4,
            hasher: l,
            iterations: 25e4
        }),
        init: function(e) {
            this.cfg = this.cfg.extend(e);
        },
        compute: function(e, t) {
            for (var n = this.cfg, r = c.create(n.hasher, e), i = a.create(), o = a.create([ 1 ]), s = i.words, l = o.words, u = n.keySize, d = n.iterations; s.length < u; ) {
                var h = r.update(t).finalize(o);
                r.reset();
                for (var p = h.words, f = p.length, _ = h, m = 1; m < d; m++) {
                    _ = r.finalize(_), r.reset();
                    for (var g = _.words, v = 0; v < f; v++) p[v] ^= g[v];
                }
                i.concat(h), l[0]++;
            }
            return i.sigBytes = 4 * u, i;
        }
    }), r.PBKDF2 = function(e, t, n) {
        return u.create(n).compute(e, t);
    }, d.PBKDF2);
}
