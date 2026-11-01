// analysis/pretty/main.js:58935; webpack module 653
function(e, t, n) {
    (function() {
        var t, r, i, o, a, s, l, c = {}.hasOwnProperty;
        l = n(79).isPlainObject, i = n(652), r = n(1292), o = n(57), t = n(29), s = n(656), 
        a = n(320), e.exports = function(e) {
            function n(e) {
                n.__super__.constructor.call(this, null), this.name = "#document", this.type = t.Document, 
                this.documentURI = null, this.domConfig = new r, e || (e = {}), e.writer || (e.writer = new a), 
                this.options = e, this.stringify = new s(e);
            }
            return function(e, t) {
                for (var n in t) c.call(t, n) && (e[n] = t[n]);
                function r() {
                    this.constructor = e;
                }
                r.prototype = t.prototype, e.prototype = new r, e.__super__ = t.prototype;
            }(n, e), Object.defineProperty(n.prototype, "implementation", {
                value: new i
            }), Object.defineProperty(n.prototype, "doctype", {
                get: function() {
                    var e, n, r, i;
                    for (n = 0, r = (i = this.children).length; n < r; n++) if ((e = i[n]).type === t.DocType) return e;
                    return null;
                }
            }), Object.defineProperty(n.prototype, "documentElement", {
                get: function() {
                    return this.rootObject || null;
                }
            }), Object.defineProperty(n.prototype, "inputEncoding", {
                get: function() {
                    return null;
                }
            }), Object.defineProperty(n.prototype, "strictErrorChecking", {
                get: function() {
                    return !1;
                }
            }), Object.defineProperty(n.prototype, "xmlEncoding", {
                get: function() {
                    return 0 !== this.children.length && this.children[0].type === t.Declaration ? this.children[0].encoding : null;
                }
            }), Object.defineProperty(n.prototype, "xmlStandalone", {
                get: function() {
                    return 0 !== this.children.length && this.children[0].type === t.Declaration && "yes" === this.children[0].standalone;
                }
            }), Object.defineProperty(n.prototype, "xmlVersion", {
                get: function() {
                    return 0 !== this.children.length && this.children[0].type === t.Declaration ? this.children[0].version : "1.0";
                }
            }), Object.defineProperty(n.prototype, "URL", {
                get: function() {
                    return this.documentURI;
                }
            }), Object.defineProperty(n.prototype, "origin", {
                get: function() {
                    return null;
                }
            }), Object.defineProperty(n.prototype, "compatMode", {
                get: function() {
                    return null;
                }
            }), Object.defineProperty(n.prototype, "characterSet", {
                get: function() {
                    return null;
                }
            }), Object.defineProperty(n.prototype, "contentType", {
                get: function() {
                    return null;
                }
            }), n.prototype.end = function(e) {
                var t;
                return t = {}, e ? l(e) && (t = e, e = this.options.writer) : e = this.options.writer, 
                e.document(this, e.filterOptions(t));
            }, n.prototype.toString = function(e) {
                return this.options.writer.document(this, this.options.writer.filterOptions(e));
            }, n.prototype.createElement = function(e) {
                throw new Error("This DOM method is not implemented." + this.debugInfo());
            }, n.prototype.createDocumentFragment = function() {
                throw new Error("This DOM method is not implemented." + this.debugInfo());
            }, n.prototype.createTextNode = function(e) {
                throw new Error("This DOM method is not implemented." + this.debugInfo());
            }, n.prototype.createComment = function(e) {
                throw new Error("This DOM method is not implemented." + this.debugInfo());
            }, n.prototype.createCDATASection = function(e) {
                throw new Error("This DOM method is not implemented." + this.debugInfo());
            }, n.prototype.createProcessingInstruction = function(e, t) {
                throw new Error("This DOM method is not implemented." + this.debugInfo());
            }, n.prototype.createAttribute = function(e) {
                throw new Error("This DOM method is not implemented." + this.debugInfo());
            }, n.prototype.createEntityReference = function(e) {
                throw new Error("This DOM method is not implemented." + this.debugInfo());
            }, n.prototype.getElementsByTagName = function(e) {
                throw new Error("This DOM method is not implemented." + this.debugInfo());
            }, n.prototype.importNode = function(e, t) {
                throw new Error("This DOM method is not implemented." + this.debugInfo());
            }, n.prototype.createElementNS = function(e, t) {
                throw new Error("This DOM method is not implemented." + this.debugInfo());
            }, n.prototype.createAttributeNS = function(e, t) {
                throw new Error("This DOM method is not implemented." + this.debugInfo());
            }, n.prototype.getElementsByTagNameNS = function(e, t) {
                throw new Error("This DOM method is not implemented." + this.debugInfo());
            }, n.prototype.getElementById = function(e) {
                throw new Error("This DOM method is not implemented." + this.debugInfo());
            }, n.prototype.adoptNode = function(e) {
                throw new Error("This DOM method is not implemented." + this.debugInfo());
            }, n.prototype.normalizeDocument = function() {
                throw new Error("This DOM method is not implemented." + this.debugInfo());
            }, n.prototype.renameNode = function(e, t, n) {
                throw new Error("This DOM method is not implemented." + this.debugInfo());
            }, n.prototype.getElementsByClassName = function(e) {
                throw new Error("This DOM method is not implemented." + this.debugInfo());
            }, n.prototype.createEvent = function(e) {
                throw new Error("This DOM method is not implemented." + this.debugInfo());
            }, n.prototype.createRange = function() {
                throw new Error("This DOM method is not implemented." + this.debugInfo());
            }, n.prototype.createNodeIterator = function(e, t, n) {
                throw new Error("This DOM method is not implemented." + this.debugInfo());
            }, n.prototype.createTreeWalker = function(e, t, n) {
                throw new Error("This DOM method is not implemented." + this.debugInfo());
            }, n;
        }(o);
    }).call(this);
}
