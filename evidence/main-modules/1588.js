// analysis/pretty/main.js:122104; webpack module 1588
function(e, t, n) {
    "use strict";
    e.exports = {
        detect: function(e) {
            if ("PNG\r\n\n" === e.toString("ascii", 1, 8)) {
                var t = e.toString("ascii", 12, 16);
                if ("CgBI" === t && (t = e.toString("ascii", 28, 32)), "IHDR" !== t) throw new TypeError("invalid png");
                return !0;
            }
        },
        calculate: function(e) {
            return "CgBI" === e.toString("ascii", 12, 16) ? {
                width: e.readUInt32BE(32),
                height: e.readUInt32BE(36)
            } : {
                width: e.readUInt32BE(16),
                height: e.readUInt32BE(20)
            };
        }
    };
}
