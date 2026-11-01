// analysis/pretty/main.js:34052; webpack module 309
function(e, t, n) {
    (function() {
        var t, r, i = {}.hasOwnProperty;
        t = n(29), r = n(217), e.exports = function(e) {
            function n(e, r) {
                if (n.__super__.constructor.call(this, e), null == r) throw new Error("Missing CDATA text. " + this.debugInfo());
                this.name = "#cdata-section", this.type = t.CData, this.value = this.stringify.cdata(r);
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
                return this.options.writer.cdata(this, this.options.writer.filterOptions(e));
            }, n;
        }(r);
    }).call(this);
}
