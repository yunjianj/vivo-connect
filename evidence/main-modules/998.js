// analysis/pretty/main.js:81720; webpack module 998
function(e, t, n) {
    "use strict";
    e.exports = function(e, t) {
        var n = (t = t || process.argv || []).indexOf("--"), r = /^-{1,2}/.test(e) ? "" : "--", i = t.indexOf(r + e);
        return -1 !== i && (-1 === n || i < n);
    };
}
