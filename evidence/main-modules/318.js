// analysis/pretty/main.js:34341; webpack module 318
function(e, t, n) {
    (function() {
        var t, r, i = {}.hasOwnProperty;
        t = n(29), r = n(217), e.exports = function(e) {
            function n(e, r) {
                if (n.__super__.constructor.call(this, e), null == r) throw new Error("Missing element text. " + this.debugInfo());
                this.name = "#text", this.type = t.Text, this.value = this.stringify.text(r);
            }
            return function(e, t) {
                for (var n in t) i.call(t, n) && (e[n] = t[n]);
                function r() {
                    this.constructor = e;
                }
                r.prototype = t.prototype, e.prototype = new r, e.__super__ = t.prototype;
            }(n, e), Object.defineProperty(n.prototype, "isElementContentWhitespace", {
                get: function() {
                    throw new Error("This DOM method is not implemented." + this.debugInfo());
                }
            }), Object.defineProperty(n.prototype, "wholeText", {
                get: function() {
                    var e, t, n;
                    for (n = "", t = this.previousSibling; t; ) n = t.data + n, t = t.previousSibling;
                    for (n += this.data, e = this.nextSibling; e; ) n += e.data, e = e.nextSibling;
                    return n;
                }
            }), n.prototype.clone = function() {
                return Object.create(this);
            }, n.prototype.toString = function(e) {
                return this.options.writer.text(this, this.options.writer.filterOptions(e));
            }, n.prototype.splitText = function(e) {
                throw new Error("This DOM method is not implemented." + this.debugInfo());
            }, n.prototype.replaceWholeText = function(e) {
                throw new Error("This DOM method is not implemented." + this.debugInfo());
            }, n;
        }(r);
    }).call(this);
}
