// analysis/pretty/main.js:97309; webpack module 1268
function(e, t) {
    (function() {
        var t, n, r, i, o, a;
        "undefined" != typeof performance && null !== performance && performance.now ? e.exports = function() {
            return performance.now();
        } : "undefined" != typeof process && null !== process && process.hrtime ? (e.exports = function() {
            return (t() - o) / 1e6;
        }, n = process.hrtime, i = (t = function() {
            var e;
            return 1e9 * (e = n())[0] + e[1];
        })(), a = 1e9 * process.uptime(), o = i - a) : Date.now ? (e.exports = function() {
            return Date.now() - r;
        }, r = Date.now()) : (e.exports = function() {
            return (new Date).getTime() - r;
        }, r = (new Date).getTime());
    }).call(this);
}
