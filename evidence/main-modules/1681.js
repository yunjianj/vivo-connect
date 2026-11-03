// analysis/pretty/main.js:128792; webpack module 1681
function(e, t, n) {
    "use strict";
    const r = (e, t) => {
        t[0] = 128;
        for (var n = t.length; n > 1; n--) t[n - 1] = 255 & e, e = Math.floor(e / 256);
    }, i = (e, t) => {
        t[0] = 255;
        var n = !1;
        e *= -1;
        for (var r = t.length; r > 1; r--) {
            var i = 255 & e;
            e = Math.floor(e / 256), n ? t[r - 1] = s(i) : 0 === i ? t[r - 1] = 0 : (n = !0, 
            t[r - 1] = l(i));
        }
    }, o = e => {
        for (var t = e.length, n = 0, r = !1, i = t - 1; i > -1; i--) {
            var o, a = e[i];
            r ? o = s(a) : 0 === a ? o = a : (r = !0, o = l(a)), 0 !== o && (n -= o * Math.pow(256, t - i - 1));
        }
        return n;
    }, a = e => {
        for (var t = e.length, n = 0, r = t - 1; r > -1; r--) {
            var i = e[r];
            0 !== i && (n += i * Math.pow(256, t - r - 1));
        }
        return n;
    }, s = e => 255 & (255 ^ e), l = e => 1 + (255 ^ e) & 255;
    e.exports = {
        encode: (e, t) => {
            if (!Number.isSafeInteger(e)) throw Error("cannot encode number outside of javascript safe integer range");
            return e < 0 ? i(e, t) : r(e, t), t;
        },
        parse: e => {
            const t = e[0], n = 128 === t ? a(e.slice(1, e.length)) : 255 === t ? o(e) : null;
            if (null === n) throw Error("invalid base256 encoding");
            if (!Number.isSafeInteger(n)) throw Error("parsed number outside of javascript safe integer range");
            return n;
        }
    };
}
