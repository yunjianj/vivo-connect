// analysis/pretty/main.js:16381; webpack module 97
function(e, t, n) {
    var r, i, o;
    e.exports = (o = n(16), i = (r = o).lib.WordArray, r.enc.Base64 = {
        stringify: function(e) {
            var t = e.words, n = e.sigBytes, r = this._map;
            e.clamp();
            for (var i = [], o = 0; o < n; o += 3) for (var a = (t[o >>> 2] >>> 24 - o % 4 * 8 & 255) << 16 | (t[o + 1 >>> 2] >>> 24 - (o + 1) % 4 * 8 & 255) << 8 | t[o + 2 >>> 2] >>> 24 - (o + 2) % 4 * 8 & 255, s = 0; s < 4 && o + .75 * s < n; s++) i.push(r.charAt(a >>> 6 * (3 - s) & 63));
            var l = r.charAt(64);
            if (l) for (;i.length % 4; ) i.push(l);
            return i.join("");
        },
        parse: function(e) {
            var t = e.length, n = this._map, r = this._reverseMap;
            if (!r) {
                r = this._reverseMap = [];
                for (var o = 0; o < n.length; o++) r[n.charCodeAt(o)] = o;
            }
            var a = n.charAt(64);
            if (a) {
                var s = e.indexOf(a);
                -1 !== s && (t = s);
            }
            return function(e, t, n) {
                for (var r = [], o = 0, a = 0; a < t; a++) if (a % 4) {
                    var s = n[e.charCodeAt(a - 1)] << a % 4 * 2, l = n[e.charCodeAt(a)] >>> 6 - a % 4 * 2, c = s | l;
                    r[o >>> 2] |= c << 24 - o % 4 * 8, o++;
                }
                return i.create(r, o);
            }(e, t, r);
        },
        _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
    }, o.enc.Base64);
}
