// analysis/pretty/main.js:83109; webpack module 1039
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = function(e) {
        if ((0, r.default)(e)) return function(e) {
            var t = -1, n = e.length;
            return function() {
                return ++t < n ? {
                    value: e[t],
                    key: t
                } : null;
            };
        }(e);
        var t = (0, i.default)(e);
        return t ? function(e) {
            var t = -1;
            return function() {
                var n = e.next();
                return n.done ? null : (t++, {
                    value: n.value,
                    key: t
                });
            };
        }(t) : (n = e, o = n ? Object.keys(n) : [], a = -1, s = o.length, function e() {
            var t = o[++a];
            return "__proto__" === t ? e() : a < s ? {
                value: n[t],
                key: t
            } : null;
        });
        var n, o, a, s;
    };
    var r = o(n(271)), i = o(n(1040));
    function o(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    }
    e.exports = t.default;
}
