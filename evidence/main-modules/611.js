// analysis/pretty/main.js:57233; webpack module 611
function(e, t, n) {
    var r = n(1136);
    e.exports = function(e) {
        var t = !1;
        return r(function() {
            t = !0;
        }), function(n, i) {
            t ? e(n, i) : r(function() {
                e(n, i);
            });
        };
    };
}
