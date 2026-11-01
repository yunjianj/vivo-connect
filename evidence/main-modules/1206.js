// analysis/pretty/main.js:95603; webpack module 1206
function(e, t, n) {
    "use strict";
    e.exports = function(e) {
        for (var t, n = 0, r = e.length, i = 0; i < r; ) n++, (t = e.charCodeAt(i++)) >= 55296 && t <= 56319 && i < r && 56320 == (64512 & (t = e.charCodeAt(i))) && i++;
        return n;
    };
}
