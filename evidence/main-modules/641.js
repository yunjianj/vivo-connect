// analysis/pretty/main.js:58326; webpack module 641
function(e, t, n) {
    "use strict";
    e.exports = function(e, t) {
        t || (t = {}), "function" == typeof t && (t = {
            cmp: t
        });
        var n, r = "boolean" == typeof t.cycles && t.cycles, i = t.cmp && (n = t.cmp, function(e) {
            return function(t, r) {
                var i = {
                    key: t,
                    value: e[t]
                }, o = {
                    key: r,
                    value: e[r]
                };
                return n(i, o);
            };
        }), o = [];
        return function e(t) {
            if (t && t.toJSON && "function" == typeof t.toJSON && (t = t.toJSON()), void 0 !== t) {
                if ("number" == typeof t) return isFinite(t) ? "" + t : "null";
                if ("object" != typeof t) return JSON.stringify(t);
                var n, a;
                if (Array.isArray(t)) {
                    for (a = "[", n = 0; n < t.length; n++) n && (a += ","), a += e(t[n]) || "null";
                    return a + "]";
                }
                if (null === t) return "null";
                if (-1 !== o.indexOf(t)) {
                    if (r) return JSON.stringify("__cycle__");
                    throw new TypeError("Converting circular structure to JSON");
                }
                var s = o.push(t) - 1, l = Object.keys(t).sort(i && i(t));
                for (a = "", n = 0; n < l.length; n++) {
                    var c = l[n], u = e(t[c]);
                    u && (a && (a += ","), a += JSON.stringify(c) + ":" + u);
                }
                return o.splice(s, 1), "{" + a + "}";
            }
        }(e);
    };
}
