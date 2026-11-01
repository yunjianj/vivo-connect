// analysis/pretty/main.js:75235; webpack module 835
function(e, t, n) {
    var r;
    e.exports = (r = n(16), n(31), r.pad.Iso97971 = {
        pad: function(e, t) {
            e.concat(r.lib.WordArray.create([ 2147483648 ], 1)), r.pad.ZeroPadding.pad(e, t);
        },
        unpad: function(e) {
            r.pad.ZeroPadding.unpad(e), e.sigBytes--;
        }
    }, r.pad.Iso97971);
}
