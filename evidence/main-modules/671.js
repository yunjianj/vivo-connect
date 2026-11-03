// analysis/pretty/main.js:60654; webpack module 671
function(e, t) {
    var n = /[\\^$.*+?()[\]{}|]/g, r = RegExp(n.source), i = "object" == typeof global && global && global.Object === Object && global, o = "object" == typeof self && self && self.Object === Object && self, a = i || o || Function("return this")(), s = Object.prototype.toString, l = a.Symbol, c = l ? l.prototype : void 0, u = c ? c.toString : void 0;
    function d(e) {
        if ("string" == typeof e) return e;
        if (function(e) {
            return "symbol" == typeof e || function(e) {
                return !!e && "object" == typeof e;
            }(e) && "[object Symbol]" == s.call(e);
        }(e)) return u ? u.call(e) : "";
        var t = e + "";
        return "0" == t && 1 / e == -1 / 0 ? "-0" : t;
    }
    e.exports = function(e) {
        var t;
        return (e = null == (t = e) ? "" : d(t)) && r.test(e) ? e.replace(n, "\\$&") : e;
    };
}
