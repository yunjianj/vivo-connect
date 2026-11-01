// analysis/pretty/main.js:121992; webpack module 1586
function(e, t, n) {
    "use strict";
    var r = {
        ICON: 32,
        "ICN#": 32,
        "icm#": 16,
        icm4: 16,
        icm8: 16,
        "ics#": 16,
        ics4: 16,
        ics8: 16,
        is32: 16,
        s8mk: 16,
        icp4: 16,
        icl4: 32,
        icl8: 32,
        il32: 32,
        l8mk: 32,
        icp5: 32,
        ic11: 32,
        ich4: 48,
        ich8: 48,
        ih32: 48,
        h8mk: 48,
        icp6: 64,
        ic12: 32,
        it32: 128,
        t8mk: 128,
        ic07: 128,
        ic08: 256,
        ic13: 256,
        ic09: 512,
        ic14: 512,
        ic10: 1024
    };
    function i(e, t) {
        var n = t + 4;
        return [ e.toString("ascii", t, n), e.readUInt32BE(n) ];
    }
    function o(e) {
        var t = r[e];
        return {
            width: t,
            height: t,
            type: e
        };
    }
    e.exports = {
        detect: function(e) {
            return "icns" === e.toString("ascii", 0, 4);
        },
        calculate: function(e) {
            var t, n, r, a = e.length, s = 8, l = e.readUInt32BE(4);
            if (n = o((t = i(e, s))[0]), (s += t[1]) === l) return n;
            for (r = {
                width: n.width,
                height: n.height,
                images: [ n ]
            }; s < l && s < a; ) n = o((t = i(e, s))[0]), s += t[1], r.images.push(n);
            return r;
        }
    };
}
