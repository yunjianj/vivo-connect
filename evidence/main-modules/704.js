// analysis/pretty/main.js:62990; webpack module 704
function(e, t, n) {
    var r = n(10);
    e.exports = function(e) {
        return e = e || {}, function() {
            var t = r.execFile.apply(r, arguments);
            return e.bufferStdout || t.stdout.removeAllListeners("data"), e.bufferStderr || t.stderr.removeAllListeners("data"), 
            t;
        };
    };
}
