// analysis/pretty/main.js:81830; webpack module 1003
function(e, t) {
    e.exports = function(e) {
        var t = [ "red", "yellow", "green", "blue", "magenta" ];
        return function(n, r, i) {
            return " " === n ? n : e[t[r++ % t.length]](n);
        };
    };
}
