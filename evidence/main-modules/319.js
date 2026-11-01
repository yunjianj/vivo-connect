// analysis/pretty/main.js:34377; webpack module 319
function(e, t, n) {
    (function() {
        var t, r, i = {}.hasOwnProperty;
        t = n(29), r = n(217), e.exports = function(e) {
            function n(e, r, i) {
                if (n.__super__.constructor.call(this, e), null == r) throw new Error("Missing instruction target. " + this.debugInfo());
                this.type = t.ProcessingInstruction, this.target = this.stringify.insTarget(r), 
                this.name = this.target, i && (this.value = this.stringify.insValue(i));
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
                return this.options.writer.processingInstruction(this, this.options.writer.filterOptions(e));
            }, n.prototype.isEqualNode = function(e) {
                return !!n.__super__.isEqualNode.apply(this, arguments).isEqualNode(e) && e.target === this.target;
            }, n;
        }(r);
    }).call(this);
}
