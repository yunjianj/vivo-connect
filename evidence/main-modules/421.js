// analysis/pretty/main.js:43383; webpack module 421
function(e, t, n) {
    "use strict";
    var r = n(101).codes.ERR_INVALID_OPT_VALUE;
    e.exports = {
        getHighWaterMark: function(e, t, n, i) {
            var o = function(e, t, n) {
                return null != e.highWaterMark ? e.highWaterMark : t ? e[n] : null;
            }(t, i, n);
            if (null != o) {
                if (!isFinite(o) || Math.floor(o) !== o || o < 0) throw new r(i ? n : "highWaterMark", o);
                return Math.floor(o);
            }
            return e.objectMode ? 16 : 16384;
        }
    };
}
