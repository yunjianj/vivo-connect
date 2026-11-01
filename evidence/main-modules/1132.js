// analysis/pretty/main.js:91109; webpack module 1132
function(e, t, n) {
    "use strict";
    e.exports = function(e, t) {
        var n = e.reduce, r = e.all;
        function i() {
            return r(this);
        }
        e.prototype.each = function(e) {
            return n(this, e, t, 0)._then(i, void 0, void 0, this, void 0);
        }, e.prototype.mapSeries = function(e) {
            return n(this, e, t, t);
        }, e.each = function(e, r) {
            return n(e, r, t, 0)._then(i, void 0, void 0, e, void 0);
        }, e.mapSeries = function(e, r) {
            return n(e, r, t, t);
        };
    };
}
