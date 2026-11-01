// analysis/pretty/main.js:99760; webpack module 1305
function(e, t, n) {
    var r = n(7), i = Math.pow(2, 32) - 1;
    e.exports = function() {
        return Math.abs(r.randomBytes(4).readInt32BE() / i);
    };
}
