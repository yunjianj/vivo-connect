// analysis/pretty/main.js:121977; webpack module 1585
function(e, t, n) {
    "use strict";
    var r = /^GIF8[79]a/;
    e.exports = {
        detect: function(e) {
            var t = e.toString("ascii", 0, 6);
            return r.test(t);
        },
        calculate: function(e) {
            return {
                width: e.readUInt16LE(6),
                height: e.readUInt16LE(8)
            };
        }
    };
}
