// analysis/pretty/main.js:24384; webpack module 183
function(e, t, n) {
    var r, i, o, a, s, l;
    e.exports = (l = n(16), i = (r = l).lib, o = i.Base, a = i.WordArray, (s = r.x64 = {}).Word = o.extend({
        init: function(e, t) {
            this.high = e, this.low = t;
        }
    }), s.WordArray = o.extend({
        init: function(e, t) {
            e = this.words = e || [], this.sigBytes = null != t ? t : 8 * e.length;
        },
        toX32: function() {
            for (var e = this.words, t = e.length, n = [], r = 0; r < t; r++) {
                var i = e[r];
                n.push(i.high), n.push(i.low);
            }
            return a.create(n, this.sigBytes);
        },
        clone: function() {
            for (var e = o.clone.call(this), t = e.words = this.words.slice(0), n = t.length, r = 0; r < n; r++) t[r] = t[r].clone();
            return e;
        }
    }), l);
}
