// analysis/pretty/main.js:34320; webpack module 317
function(e, t, n) {
    (function() {
        var t, r, i = {}.hasOwnProperty;
        t = n(29), r = n(57), e.exports = function(e) {
            function n(e, r) {
                if (n.__super__.constructor.call(this, e), null == r) throw new Error("Missing raw text. " + this.debugInfo());
                this.type = t.Raw, this.value = this.stringify.raw(r);
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
                return this.options.writer.raw(this, this.options.writer.filterOptions(e));
            }, n;
        }(r);
    }).call(this);
}
