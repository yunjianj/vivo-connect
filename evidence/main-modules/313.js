// analysis/pretty/main.js:34194; webpack module 313
function(e, t, n) {
    (function() {
        var t, r, i = {}.hasOwnProperty;
        r = n(57), t = n(29), e.exports = function(e) {
            function n(e, r, i, o, a, s) {
                if (n.__super__.constructor.call(this, e), null == r) throw new Error("Missing DTD element name. " + this.debugInfo());
                if (null == i) throw new Error("Missing DTD attribute name. " + this.debugInfo(r));
                if (!o) throw new Error("Missing DTD attribute type. " + this.debugInfo(r));
                if (!a) throw new Error("Missing DTD attribute default. " + this.debugInfo(r));
                if (0 !== a.indexOf("#") && (a = "#" + a), !a.match(/^(#REQUIRED|#IMPLIED|#FIXED|#DEFAULT)$/)) throw new Error("Invalid default value type; expected: #REQUIRED, #IMPLIED, #FIXED or #DEFAULT. " + this.debugInfo(r));
                if (s && !a.match(/^(#FIXED|#DEFAULT)$/)) throw new Error("Default value only applies to #FIXED or #DEFAULT. " + this.debugInfo(r));
                this.elementName = this.stringify.name(r), this.type = t.AttributeDeclaration, this.attributeName = this.stringify.name(i), 
                this.attributeType = this.stringify.dtdAttType(o), s && (this.defaultValue = this.stringify.dtdAttDefault(s)), 
                this.defaultValueType = a;
            }
            return function(e, t) {
                for (var n in t) i.call(t, n) && (e[n] = t[n]);
                function r() {
                    this.constructor = e;
                }
                r.prototype = t.prototype, e.prototype = new r, e.__super__ = t.prototype;
            }(n, e), n.prototype.toString = function(e) {
                return this.options.writer.dtdAttList(this, this.options.writer.filterOptions(e));
            }, n;
        }(r);
    }).call(this);
}
