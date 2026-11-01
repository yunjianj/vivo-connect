// analysis/pretty/main.js:75223; webpack module 834
function(e, t, n) {
    var r;
    e.exports = (r = n(16), n(31), r.pad.Iso10126 = {
        pad: function(e, t) {
            var n = 4 * t, i = n - e.sigBytes % n;
            e.concat(r.lib.WordArray.random(i - 1)).concat(r.lib.WordArray.create([ i << 24 ], 1));
        },
        unpad: function(e) {
            var t = 255 & e.words[e.sigBytes - 1 >>> 2];
            e.sigBytes -= t;
        }
    }, r.pad.Iso10126);
}
