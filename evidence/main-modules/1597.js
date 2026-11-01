// analysis/pretty/main.js:122391; webpack module 1597
function(e, t, n) {
    "use strict";
    var r = /[|\\{}()[\]^$+*?.]/g;
    e.exports = function(e) {
        if ("string" != typeof e) throw new TypeError("Expected a string");
        return e.replace(r, "\\$&");
    };
}
