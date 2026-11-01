// analysis/pretty/main.js:59108; webpack module 655
function(e, t, n) {
    (function() {
        var t, r, i = {}.hasOwnProperty;
        r = n(57), t = n(29), e.exports = function(e) {
            function n(e) {
                n.__super__.constructor.call(this, e), this.type = t.Dummy;
            }
            return function(e, t) {
                for (var n in t) i.call(t, n) && (e[n] = t[n]);
                function r() {
                    this.constructor = e;
                }
                r.prototype = t.prototype, e.prototype = new r, e.__super__ = t.prototype;
            }(n, e), n.prototype.clone = function() {
                return Object.create(this);
            }, n.prototype.toString = function(e) {
                return "";
            }, n;
        }(r);
    }).call(this);
}
