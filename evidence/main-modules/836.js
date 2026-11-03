// analysis/pretty/main.js:75245; webpack module 836
function(e, t, n) {
    var r;
    e.exports = (r = n(16), n(31), r.pad.ZeroPadding = {
        pad: function(e, t) {
            var n = 4 * t;
            e.clamp(), e.sigBytes += n - (e.sigBytes % n || n);
        },
        unpad: function(e) {
            var t = e.words, n = e.sigBytes - 1;
            for (n = e.sigBytes - 1; n >= 0; n--) if (t[n >>> 2] >>> 24 - n % 4 * 8 & 255) {
                e.sigBytes = n + 1;
                break;
            }
        }
    }, r.pad.ZeroPadding);
}
