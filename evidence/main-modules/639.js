// analysis/pretty/main.js:58304; webpack module 639
function(e, t, n) {
    "use strict";
    var r = String.prototype.replace, i = /%20/g;
    e.exports = {
        default: "RFC3986",
        formatters: {
            RFC1738: function(e) {
                return r.call(e, i, "+");
            },
            RFC3986: function(e) {
                return String(e);
            }
        },
        RFC1738: "RFC1738",
        RFC3986: "RFC3986"
    };
}
