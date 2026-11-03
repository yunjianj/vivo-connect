// analysis/pretty/main.js:39943; webpack module 363
function(e, t) {
    function n(e) {
        var t = [].slice.call(arguments, 1);
        t.unshift("[" + e + "]"), process.stderr.write(t.join(" ") + "\n");
    }
    e.exports = function(e) {
        return n.bind(null, e);
    };
}
