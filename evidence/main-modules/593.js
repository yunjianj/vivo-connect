// analysis/pretty/main.js:56459; webpack module 593
function(e, t) {
    e.exports = function e(t, n) {
        if (t && n) return e(t)(n);
        if ("function" != typeof t) throw new TypeError("need wrapper function");
        return Object.keys(t).forEach(function(e) {
            r[e] = t[e];
        }), r;
        function r() {
            for (var e = new Array(arguments.length), n = 0; n < e.length; n++) e[n] = arguments[n];
            var r = t.apply(this, e), i = e[e.length - 1];
            return "function" == typeof r && r !== i && Object.keys(i).forEach(function(e) {
                r[e] = i[e];
            }), r;
        }
    };
}
