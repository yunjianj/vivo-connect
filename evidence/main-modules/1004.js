// analysis/pretty/main.js:81837; webpack module 1004
function(e, t) {
    e.exports = function(e) {
        var t = [ "underline", "inverse", "grey", "yellow", "red", "green", "blue", "white", "cyan", "magenta", "brightYellow", "brightRed", "brightGreen", "brightBlue", "brightWhite", "brightCyan", "brightMagenta" ];
        return function(n, r, i) {
            return " " === n ? n : e[t[Math.round(Math.random() * (t.length - 2))]](n);
        };
    };
}
