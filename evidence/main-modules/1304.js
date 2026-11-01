// analysis/pretty/main.js:99753; webpack module 1304
function(e, t, n) {
    var r = n(661), i = n(8), o = r(process.pid.toString(36), 2), a = i.hostname(), s = a.length, l = r(a.split("").reduce(function(e, t) {
        return +e + t.charCodeAt(0);
    }, +s + 36).toString(36), 2);
    e.exports = function() {
        return o + l;
    };
}
