// analysis/pretty/main.js:122124; webpack module 1589
function(e, t, n) {
    "use strict";
    e.exports = {
        detect: function(e) {
            return "8BPS" === e.toString("ascii", 0, 4);
        },
        calculate: function(e) {
            return {
                width: e.readUInt32BE(18),
                height: e.readUInt32BE(14)
            };
        }
    };
}
