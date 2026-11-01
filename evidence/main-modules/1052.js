// analysis/pretty/main.js:83647; webpack module 1052
function(e, t, n) {
    "use strict";
    var r = Object.prototype.toString;
    e.exports = function(e) {
        if ("string" == typeof e.displayName && e.constructor.name) return e.displayName;
        if ("string" == typeof e.name && e.name) return e.name;
        if ("object" == typeof e && e.constructor && "string" == typeof e.constructor.name) return e.constructor.name;
        var t = e.toString(), n = r.call(e).slice(8, -1);
        return (t = "Function" === n ? t.substring(t.indexOf("(") + 1, t.indexOf(")")) : n) || "anonymous";
    };
}
