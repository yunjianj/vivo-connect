// analysis/pretty/main.js:91095; webpack module 1131
function(e, t, n) {
    "use strict";
    e.exports = function(e) {
        var t = e._SomePromiseArray;
        function n(e) {
            var n = new t(e), r = n.promise();
            return n.setHowMany(1), n.setUnwrap(), n.init(), r;
        }
        e.any = function(e) {
            return n(e);
        }, e.prototype.any = function() {
            return n(this);
        };
    };
}
