// analysis/pretty/main.js:34073; webpack module 310
function(e, t, n) {
    (function() {
        var t, r, i = {}.hasOwnProperty;
        t = n(29), r = n(217), e.exports = function(e) {
            function n(e, r) {
                if (n.__super__.constructor.call(this, e), null == r) throw new Error("Missing comment text. " + this.debugInfo());
                this.name = "#comment", this.type = t.Comment, this.value = this.stringify.comment(r);
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
                return this.options.writer.comment(this, this.options.writer.filterOptions(e));
            }, n;
        }(r);
    }).call(this);
}
