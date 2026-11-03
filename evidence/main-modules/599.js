// analysis/pretty/main.js:56696; webpack module 599
function(e, t, n) {
    var r = n(9).Stream, i = n(38).PassThrough, o = e.exports = {};
    o.isStream = function(e) {
        return e instanceof r;
    }, o.normalizeInputSource = function(e) {
        if (null === e) return Buffer.alloc(0);
        if ("string" == typeof e) return Buffer.from(e);
        if (o.isStream(e) && !e._readableState) {
            var t = new i;
            return e.pipe(t), t;
        }
        return e;
    };
}
