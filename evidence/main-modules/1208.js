// analysis/pretty/main.js:95663; webpack module 1208
function(e, t, n) {
    "use strict";
    var r = e.exports = function() {
        this._cache = {};
    };
    r.prototype.put = function(e, t) {
        this._cache[e] = t;
    }, r.prototype.get = function(e) {
        return this._cache[e];
    }, r.prototype.del = function(e) {
        delete this._cache[e];
    }, r.prototype.clear = function() {
        this._cache = {};
    };
}
