// analysis/pretty/main.js:122054; webpack module 1587
function(e, t, n) {
    "use strict";
    var r = n(751);
    function i(e) {
        return "45786966" === e.toString("hex", 2, 6);
    }
    function o(e, t) {
        return {
            height: e.readUInt16BE(t),
            width: e.readUInt16BE(t + 2)
        };
    }
    function a(e, t) {
        var n = e.slice(2, t), i = n.toString("hex", 6, 8), o = "4d4d" === i;
        if (o || "4949" === i) return function(e, t) {
            for (var n, i, o = r(e, 16, 14, t), a = 0; a < o; a++) {
                if (i = (n = 16 + 12 * a) + 12, n > e.length) return;
                var s = e.slice(n, i);
                if (274 === r(s, 16, 0, t)) {
                    if (3 !== r(s, 16, 2, t)) return;
                    if (1 !== r(s, 32, 4, t)) return;
                    return r(s, 16, 8, t);
                }
            }
        }(n, o);
    }
    function s(e, t) {
        if (t > e.length) throw new TypeError("Corrupt JPG, exceeded buffer limits");
        if (255 !== e[t]) throw new TypeError("Invalid JPG, marker table corrupted");
    }
    e.exports = {
        detect: function(e) {
            return "ffd8" === e.toString("hex", 0, 2);
        },
        calculate: function(e) {
            var t, n, r;
            for (e = e.slice(4); e.length; ) {
                if (n = e.readUInt16BE(0), i(e) && (t = a(e, n)), s(e, n), 192 === (r = e[n + 1]) || 193 === r || 194 === r) {
                    var l = o(e, n + 5);
                    return t ? {
                        width: l.width,
                        height: l.height,
                        orientation: t
                    } : l;
                }
                e = e.slice(n + 2);
            }
            throw new TypeError("Invalid JPG, no size found");
        }
    };
}
