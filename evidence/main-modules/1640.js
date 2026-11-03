// analysis/pretty/main.js:123853; webpack module 1640
function(e, t, n) {
    function r(e) {
        this._cbs = e || {};
    }
    e.exports = r;
    var i = n(170).EVENTS;
    Object.keys(i).forEach(function(e) {
        if (0 === i[e]) e = "on" + e, r.prototype[e] = function() {
            this._cbs[e] && this._cbs[e]();
        }; else if (1 === i[e]) e = "on" + e, r.prototype[e] = function(t) {
            this._cbs[e] && this._cbs[e](t);
        }; else {
            if (2 !== i[e]) throw Error("wrong number of arguments");
            e = "on" + e, r.prototype[e] = function(t, n) {
                this._cbs[e] && this._cbs[e](t, n);
            };
        }
    });
}
