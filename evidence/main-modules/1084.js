// analysis/pretty/main.js:87735; webpack module 1084
function(e, t) {
    e.exports = function(e, t) {
        for (var r = [], i = 0; i < e.length; i++) {
            var o = t(e[i], i);
            n(o) ? r.push.apply(r, o) : r.push(o);
        }
        return r;
    };
    var n = Array.isArray || function(e) {
        return "[object Array]" === Object.prototype.toString.call(e);
    };
}
