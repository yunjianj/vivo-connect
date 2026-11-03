// analysis/pretty/main.js:68781; webpack module 750
function(e, t, n) {
    "use strict";
    function r(e, t) {
        var n = e.readUInt8(t);
        return 0 === n ? 256 : n;
    }
    function i(e, t) {
        var n = 6 + 16 * t;
        return {
            width: r(e, n),
            height: r(e, n + 1)
        };
    }
    e.exports = {
        detect: function(e) {
            return 0 === e.readUInt16LE(0) && 1 === e.readUInt16LE(2);
        },
        calculate: function(e) {
            var t, n = e.readUInt16LE(4), r = i(e, 0);
            if (1 === n) return r;
            for (r.images = [ {
                width: r.width,
                height: r.height
            } ], t = 1; t < n; t += 1) r.images.push(i(e, t));
            return r;
        }
    };
}
