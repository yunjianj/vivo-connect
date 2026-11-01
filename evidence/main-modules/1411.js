// analysis/pretty/main.js:103795; webpack module 1411
function(e, t, n) {
    var r = n(636).strict;
    e.exports = function(e) {
        if (r(e)) {
            var t = Buffer.from(e.buffer);
            return e.byteLength !== e.buffer.byteLength && (t = t.slice(e.byteOffset, e.byteOffset + e.byteLength)), 
            t;
        }
        return Buffer.from(e);
    };
}
