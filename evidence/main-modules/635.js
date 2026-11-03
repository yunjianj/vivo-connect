// analysis/pretty/main.js:58176; webpack module 635
function(e, t, n) {
    var r = n(9);
    function i(e) {
        return e instanceof r.Stream;
    }
    function o(e) {
        return i(e) && "function" == typeof e._read && "object" == typeof e._readableState;
    }
    function a(e) {
        return i(e) && "function" == typeof e._write && "object" == typeof e._writableState;
    }
    e.exports = i, e.exports.isReadable = o, e.exports.isWritable = a, e.exports.isDuplex = function(e) {
        return o(e) && a(e);
    };
}
