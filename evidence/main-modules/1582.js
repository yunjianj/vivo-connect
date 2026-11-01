// analysis/pretty/main.js:121943; webpack module 1582
function(e, t, n) {
    "use strict";
    e.exports = {
        detect: function(e) {
            return "BM" === e.toString("ascii", 0, 2);
        },
        calculate: function(e) {
            return {
                width: e.readUInt32LE(18),
                height: Math.abs(e.readInt32LE(22))
            };
        }
    };
}
