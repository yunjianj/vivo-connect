// analysis/pretty/main.js:74752; webpack module 815
function(e, t, n) {
    var r = {
        "./darwin/arm64/node_sqlite3.node": 816,
        "./darwin/x64/node_sqlite3.node": 385,
        "./win32/ia32/node_sqlite3.node": 386,
        "./win32/x64/node_sqlite3.node": 387
    };
    function i(e) {
        var t = o(e);
        return n(t);
    }
    function o(e) {
        if (!n.o(r, e)) {
            var t = new Error("Cannot find module '" + e + "'");
            throw t.code = "MODULE_NOT_FOUND", t;
        }
        return r[e];
    }
    i.keys = function() {
        return Object.keys(r);
    }, i.resolve = o, e.exports = i, i.id = 815;
}
