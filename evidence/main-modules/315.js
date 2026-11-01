// analysis/pretty/main.js:34271; webpack module 315
function(e, t, n) {
    (function() {
        var t, r, i = {}.hasOwnProperty;
        r = n(57), t = n(29), e.exports = function(e) {
            function n(e, r, i) {
                if (n.__super__.constructor.call(this, e), null == r) throw new Error("Missing DTD element name. " + this.debugInfo());
                i || (i = "(#PCDATA)"), Array.isArray(i) && (i = "(" + i.join(",") + ")"), this.name = this.stringify.name(r), 
                this.type = t.ElementDeclaration, this.value = this.stringify.dtdElementValue(i);
            }
            return function(e, t) {
                for (var n in t) i.call(t, n) && (e[n] = t[n]);
                function r() {
                    this.constructor = e;
                }
                r.prototype = t.prototype, e.prototype = new r, e.__super__ = t.prototype;
            }(n, e), n.prototype.toString = function(e) {
                return this.options.writer.dtdElement(this, this.options.writer.filterOptions(e));
            }, n;
        }(r);
    }).call(this);
}
