// analysis/pretty/main.js:121964; webpack module 1584
function(e, t, n) {
    "use strict";
    e.exports = {
        detect: function(e) {
            return 542327876 === e.readUInt32LE(0);
        },
        calculate: function(e) {
            return {
                height: e.readUInt32LE(12),
                width: e.readUInt32LE(16)
            };
        }
    };
}
