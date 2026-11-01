// analysis/pretty/main.js:120801; webpack module 1577
function(e, t) {
    var n = /&(?:amp|lt|gt|quot|#39|#96);/g, r = RegExp(n.source), i = "object" == typeof global && global && global.Object === Object && global, o = "object" == typeof self && self && self.Object === Object && self, a = i || o || Function("return this")();
    var s, l = (s = {
        "&amp;": "&",
        "&lt;": "<",
        "&gt;": ">",
        "&quot;": '"',
        "&#39;": "'",
        "&#96;": "`"
    }, function(e) {
        return null == s ? void 0 : s[e];
    }), c = Object.prototype.toString, u = a.Symbol, d = u ? u.prototype : void 0, h = d ? d.toString : void 0;
    function p(e) {
        if ("string" == typeof e) return e;
        if (function(e) {
            return "symbol" == typeof e || function(e) {
                return !!e && "object" == typeof e;
            }(e) && "[object Symbol]" == c.call(e);
        }(e)) return h ? h.call(e) : "";
        var t = e + "";
        return "0" == t && 1 / e == -1 / 0 ? "-0" : t;
    }
    e.exports = function(e) {
        var t;
        return (e = null == (t = e) ? "" : p(t)) && r.test(e) ? e.replace(n, l) : e;
    };
}
