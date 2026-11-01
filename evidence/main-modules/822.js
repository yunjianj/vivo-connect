// analysis/pretty/main.js:74887; webpack module 822
function(e, t, n) {
    var r, i, o;
    e.exports = (o = n(16), i = (r = o).lib.WordArray, r.enc.Base64url = {
        stringify: function(e, t) {
            void 0 === t && (t = !0);
            var n = e.words, r = e.sigBytes, i = t ? this._safe_map : this._map;
            e.clamp();
            for (var o = [], a = 0; a < r; a += 3) for (var s = (n[a >>> 2] >>> 24 - a % 4 * 8 & 255) << 16 | (n[a + 1 >>> 2] >>> 24 - (a + 1) % 4 * 8 & 255) << 8 | n[a + 2 >>> 2] >>> 24 - (a + 2) % 4 * 8 & 255, l = 0; l < 4 && a + .75 * l < r; l++) o.push(i.charAt(s >>> 6 * (3 - l) & 63));
            var c = i.charAt(64);
            if (c) for (;o.length % 4; ) o.push(c);
            return o.join("");
        },
        parse: function(e, t) {
            void 0 === t && (t = !0);
            var n = e.length, r = t ? this._safe_map : this._map, o = this._reverseMap;
            if (!o) {
                o = this._reverseMap = [];
                for (var a = 0; a < r.length; a++) o[r.charCodeAt(a)] = a;
            }
            var s = r.charAt(64);
            if (s) {
                var l = e.indexOf(s);
                -1 !== l && (n = l);
            }
            return function(e, t, n) {
                for (var r = [], o = 0, a = 0; a < t; a++) if (a % 4) {
                    var s = n[e.charCodeAt(a - 1)] << a % 4 * 2, l = n[e.charCodeAt(a)] >>> 6 - a % 4 * 2, c = s | l;
                    r[o >>> 2] |= c << 24 - o % 4 * 8, o++;
                }
                return i.create(r, o);
            }(e, n, o);
        },
        _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
        _safe_map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_"
    }, o.enc.Base64url);
}
