// analysis/pretty/main.js:124364; webpack module 1657
function(e, t, n) {
    e.exports = function(e) {
        var t = e[0], n = e[1] - 1;
        if (n < 0 && t <= 0) return o;
        if (-1 === t) return function(e) {
            return e <= n;
        };
        if (0 === t) return function(e) {
            return e === n;
        };
        if (1 === t) return n < 0 ? i : function(e) {
            return e >= n;
        };
        var r = n % t;
        r < 0 && (r += t);
        if (t > 1) return function(e) {
            return e >= n && e % t === r;
        };
        return t *= -1, function(e) {
            return e <= n && e % t === r;
        };
    };
    var r = n(173), i = r.trueFunc, o = r.falseFunc;
}
