// analysis/pretty/main.js:59056; webpack module 654
function(e, t, n) {
    (function() {
        var t;
        t = n(29), n(57), e.exports = function() {
            function e(e, n, r) {
                if (this.parent = e, this.parent && (this.options = this.parent.options, this.stringify = this.parent.stringify), 
                null == n) throw new Error("Missing attribute name. " + this.debugInfo(n));
                this.name = this.stringify.name(n), this.value = this.stringify.attValue(r), this.type = t.Attribute, 
                this.isId = !1, this.schemaTypeInfo = null;
            }
            return Object.defineProperty(e.prototype, "nodeType", {
                get: function() {
                    return this.type;
                }
            }), Object.defineProperty(e.prototype, "ownerElement", {
                get: function() {
                    return this.parent;
                }
            }), Object.defineProperty(e.prototype, "textContent", {
                get: function() {
                    return this.value;
                },
                set: function(e) {
                    return this.value = e || "";
                }
            }), Object.defineProperty(e.prototype, "namespaceURI", {
                get: function() {
                    return "";
                }
            }), Object.defineProperty(e.prototype, "prefix", {
                get: function() {
                    return "";
                }
            }), Object.defineProperty(e.prototype, "localName", {
                get: function() {
                    return this.name;
                }
            }), Object.defineProperty(e.prototype, "specified", {
                get: function() {
                    return !0;
                }
            }), e.prototype.clone = function() {
                return Object.create(this);
            }, e.prototype.toString = function(e) {
                return this.options.writer.attribute(this, this.options.writer.filterOptions(e));
            }, e.prototype.debugInfo = function(e) {
                return null == (e = e || this.name) ? "parent: <" + this.parent.name + ">" : "attribute: {" + e + "}, parent: <" + this.parent.name + ">";
            }, e.prototype.isEqualNode = function(e) {
                return e.namespaceURI === this.namespaceURI && (e.prefix === this.prefix && (e.localName === this.localName && e.value === this.value));
            }, e;
        }();
    }).call(this);
}
