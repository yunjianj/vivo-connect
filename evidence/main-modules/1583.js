// analysis/pretty/main.js:121956; webpack module 1583
function(e, t, n) {
    "use strict";
    e.exports = {
        detect: function(e) {
            return 0 === e.readUInt16LE(0) && 2 === e.readUInt16LE(2);
        },
        calculate: n(750).calculate
    };
}
