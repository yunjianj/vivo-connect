// analysis/pretty/main.js:122241; webpack module 1592
function(e, t, n) {
    "use strict";
    e.exports = {
        detect: function(e) {
            var t = "RIFF" === e.toString("ascii", 0, 4), n = "WEBP" === e.toString("ascii", 8, 12), r = "VP8" === e.toString("ascii", 12, 15);
            return t && n && r;
        },
        calculate: function(e) {
            var t = e.toString("ascii", 12, 16);
            if (e = e.slice(20, 30), "VP8X" === t) {
                var n = e[0];
                return !(!(0 == (192 & n)) || !(0 == (1 & n))) && function(e) {
                    return {
                        width: 1 + e.readUIntLE(4, 3),
                        height: 1 + e.readUIntLE(7, 3)
                    };
                }(e);
            }
            if ("VP8 " === t && 47 !== e[0]) return function(e) {
                return {
                    width: 16383 & e.readInt16LE(6),
                    height: 16383 & e.readInt16LE(8)
                };
            }(e);
            var r = e.toString("hex", 3, 6);
            return "VP8L" === t && "9d012a" !== r && function(e) {
                return {
                    width: 1 + ((63 & e[2]) << 8 | e[1]),
                    height: 1 + ((15 & e[4]) << 10 | e[3] << 2 | (192 & e[2]) >> 6)
                };
            }(e);
        }
    };
}
