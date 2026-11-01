// analysis/pretty/main.js:122203; webpack module 1591
function(e, t, n) {
    "use strict";
    var r = n(4), i = n(751);
    function o(e, t) {
        var n = i(e, 16, 8, t);
        return (i(e, 16, 10, t) << 16) + n;
    }
    function a(e) {
        if (e.length > 24) return e.slice(12);
    }
    e.exports = {
        detect: function(e) {
            var t = e.toString("hex", 0, 4);
            return "49492a00" === t || "4d4d002a" === t;
        },
        calculate: function(e, t) {
            if (!t) throw new TypeError("Tiff doesn't support buffer");
            var n = "BE" === function(e) {
                var t = e.toString("ascii", 0, 2);
                return "II" === t ? "LE" : "MM" === t ? "BE" : void 0;
            }(e), s = function(e, t) {
                for (var n, r, s, l = {}; e && e.length && (n = i(e, 16, 0, t), r = i(e, 16, 2, t), 
                s = i(e, 32, 4, t), 0 !== n); ) 1 !== s || 3 !== r && 4 !== r || (l[n] = o(e, t)), 
                e = a(e);
                return l;
            }(function(e, t, n) {
                var o = i(e, 32, 4, n), a = 1024, s = r.statSync(t).size;
                o + a > s && (a = s - o - 10);
                var l = Buffer.alloc(a), c = r.openSync(t, "r");
                return r.readSync(c, l, 0, a, o), l.slice(2);
            }(e, t, n), n), l = s[256], c = s[257];
            if (!l || !c) throw new TypeError("Invalid Tiff, missing tags");
            return {
                width: l,
                height: c
            };
        }
    };
}
