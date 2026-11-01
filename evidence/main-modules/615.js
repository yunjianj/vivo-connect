// analysis/pretty/main.js:57272; webpack module 615
function(e, t, n) {
    var r = n(610), i = n(613), o = n(614);
    function a(e, t) {
        return e < t ? -1 : e > t ? 1 : 0;
    }
    e.exports = function(e, t, n, a) {
        var s = i(e, n);
        return r(e, t, s, function n(i, o) {
            i ? a(i, o) : (s.index++, s.index < (s.keyedList || e).length ? r(e, t, s, n) : a(null, s.results));
        }), o.bind(s, a);
    }, e.exports.ascending = a, e.exports.descending = function(e, t) {
        return -1 * a(e, t);
    };
}
