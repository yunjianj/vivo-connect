// analysis/pretty/main.js:75211; webpack module 833
function(e, t, n) {
    var r;
    e.exports = (r = n(16), n(31), r.pad.AnsiX923 = {
        pad: function(e, t) {
            var n = e.sigBytes, r = 4 * t, i = r - n % r, o = n + i - 1;
            e.clamp(), e.words[o >>> 2] |= i << 24 - o % 4 * 8, e.sigBytes += i;
        },
        unpad: function(e) {
            var t = 255 & e.words[e.sigBytes - 1 >>> 2];
            e.sigBytes -= t;
        }
    }, r.pad.Ansix923);
}
