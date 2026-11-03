// analysis/pretty/main.js:33890; webpack module 307
function(e, t, n) {
    (function() {
        var t, r, i, o, a, s, l, c, u = {}.hasOwnProperty;
        c = n(79), l = c.isObject, s = c.isFunction, a = c.getValue, o = n(57), t = n(29), 
        r = n(654), i = n(308), e.exports = function(e) {
            function n(e, r, i) {
                var o, a, s, l;
                if (n.__super__.constructor.call(this, e), null == r) throw new Error("Missing element name. " + this.debugInfo());
                if (this.name = this.stringify.name(r), this.type = t.Element, this.attribs = {}, 
                this.schemaTypeInfo = null, null != i && this.attribute(i), e.type === t.Document && (this.isRoot = !0, 
                this.documentObject = e, e.rootObject = this, e.children)) for (a = 0, s = (l = e.children).length; a < s; a++) if ((o = l[a]).type === t.DocType) {
                    o.name = this.name;
                    break;
                }
            }
            return function(e, t) {
                for (var n in t) u.call(t, n) && (e[n] = t[n]);
                function r() {
                    this.constructor = e;
                }
                r.prototype = t.prototype, e.prototype = new r, e.__super__ = t.prototype;
            }(n, e), Object.defineProperty(n.prototype, "tagName", {
                get: function() {
                    return this.name;
                }
            }), Object.defineProperty(n.prototype, "namespaceURI", {
                get: function() {
                    return "";
                }
            }), Object.defineProperty(n.prototype, "prefix", {
                get: function() {
                    return "";
                }
            }), Object.defineProperty(n.prototype, "localName", {
                get: function() {
                    return this.name;
                }
            }), Object.defineProperty(n.prototype, "id", {
                get: function() {
                    throw new Error("This DOM method is not implemented." + this.debugInfo());
                }
            }), Object.defineProperty(n.prototype, "className", {
                get: function() {
                    throw new Error("This DOM method is not implemented." + this.debugInfo());
                }
            }), Object.defineProperty(n.prototype, "classList", {
                get: function() {
                    throw new Error("This DOM method is not implemented." + this.debugInfo());
                }
            }), Object.defineProperty(n.prototype, "attributes", {
                get: function() {
                    return this.attributeMap && this.attributeMap.nodes || (this.attributeMap = new i(this.attribs)), 
                    this.attributeMap;
                }
            }), n.prototype.clone = function() {
                var e, t, n, r;
                for (t in (n = Object.create(this)).isRoot && (n.documentObject = null), n.attribs = {}, 
                r = this.attribs) u.call(r, t) && (e = r[t], n.attribs[t] = e.clone());
                return n.children = [], this.children.forEach(function(e) {
                    var t;
                    return (t = e.clone()).parent = n, n.children.push(t);
                }), n;
            }, n.prototype.attribute = function(e, t) {
                var n, i;
                if (null != e && (e = a(e)), l(e)) for (n in e) u.call(e, n) && (i = e[n], this.attribute(n, i)); else s(t) && (t = t.apply()), 
                this.options.keepNullAttributes && null == t ? this.attribs[e] = new r(this, e, "") : null != t && (this.attribs[e] = new r(this, e, t));
                return this;
            }, n.prototype.removeAttribute = function(e) {
                var t, n, r;
                if (null == e) throw new Error("Missing attribute name. " + this.debugInfo());
                if (e = a(e), Array.isArray(e)) for (n = 0, r = e.length; n < r; n++) t = e[n], 
                delete this.attribs[t]; else delete this.attribs[e];
                return this;
            }, n.prototype.toString = function(e) {
                return this.options.writer.element(this, this.options.writer.filterOptions(e));
            }, n.prototype.att = function(e, t) {
                return this.attribute(e, t);
            }, n.prototype.a = function(e, t) {
                return this.attribute(e, t);
            }, n.prototype.getAttribute = function(e) {
                return this.attribs.hasOwnProperty(e) ? this.attribs[e].value : null;
            }, n.prototype.setAttribute = function(e, t) {
                throw new Error("This DOM method is not implemented." + this.debugInfo());
            }, n.prototype.getAttributeNode = function(e) {
                return this.attribs.hasOwnProperty(e) ? this.attribs[e] : null;
            }, n.prototype.setAttributeNode = function(e) {
                throw new Error("This DOM method is not implemented." + this.debugInfo());
            }, n.prototype.removeAttributeNode = function(e) {
                throw new Error("This DOM method is not implemented." + this.debugInfo());
            }, n.prototype.getElementsByTagName = function(e) {
                throw new Error("This DOM method is not implemented." + this.debugInfo());
            }, n.prototype.getAttributeNS = function(e, t) {
                throw new Error("This DOM method is not implemented." + this.debugInfo());
            }, n.prototype.setAttributeNS = function(e, t, n) {
                throw new Error("This DOM method is not implemented." + this.debugInfo());
            }, n.prototype.removeAttributeNS = function(e, t) {
                throw new Error("This DOM method is not implemented." + this.debugInfo());
            }, n.prototype.getAttributeNodeNS = function(e, t) {
                throw new Error("This DOM method is not implemented." + this.debugInfo());
            }, n.prototype.setAttributeNodeNS = function(e) {
                throw new Error("This DOM method is not implemented." + this.debugInfo());
            }, n.prototype.getElementsByTagNameNS = function(e, t) {
                throw new Error("This DOM method is not implemented." + this.debugInfo());
            }, n.prototype.hasAttribute = function(e) {
                return this.attribs.hasOwnProperty(e);
            }, n.prototype.hasAttributeNS = function(e, t) {
                throw new Error("This DOM method is not implemented." + this.debugInfo());
            }, n.prototype.setIdAttribute = function(e, t) {
                return this.attribs.hasOwnProperty(e) ? this.attribs[e].isId : t;
            }, n.prototype.setIdAttributeNS = function(e, t, n) {
                throw new Error("This DOM method is not implemented." + this.debugInfo());
            }, n.prototype.setIdAttributeNode = function(e, t) {
                throw new Error("This DOM method is not implemented." + this.debugInfo());
            }, n.prototype.getElementsByTagName = function(e) {
                throw new Error("This DOM method is not implemented." + this.debugInfo());
            }, n.prototype.getElementsByTagNameNS = function(e, t) {
                throw new Error("This DOM method is not implemented." + this.debugInfo());
            }, n.prototype.getElementsByClassName = function(e) {
                throw new Error("This DOM method is not implemented." + this.debugInfo());
            }, n.prototype.isEqualNode = function(e) {
                var t, r, i;
                if (!n.__super__.isEqualNode.apply(this, arguments).isEqualNode(e)) return !1;
                if (e.namespaceURI !== this.namespaceURI) return !1;
                if (e.prefix !== this.prefix) return !1;
                if (e.localName !== this.localName) return !1;
                if (e.attribs.length !== this.attribs.length) return !1;
                for (t = r = 0, i = this.attribs.length - 1; 0 <= i ? r <= i : r >= i; t = 0 <= i ? ++r : --r) if (!this.attribs[t].isEqualNode(e.attribs[t])) return !1;
                return !0;
            }, n;
        }(o);
    }).call(this);
}
