// analysis/pretty/main.js:60249; webpack module 659
function(e, t) {
    (function() {
        "use strict";
        var e;
        e = new RegExp(/(?!xmlns)^.*:/), t.normalize = function(e) {
            return e.toLowerCase();
        }, t.firstCharLowerCase = function(e) {
            return e.charAt(0).toLowerCase() + e.slice(1);
        }, t.stripPrefix = function(t) {
            return t.replace(e, "");
        }, t.parseNumbers = function(e) {
            return isNaN(e) || (e = e % 1 == 0 ? parseInt(e, 10) : parseFloat(e)), e;
        }, t.parseBooleans = function(e) {
            return /^(?:true|false)$/i.test(e) && (e = "true" === e.toLowerCase()), e;
        };
    }).call(this);
}
