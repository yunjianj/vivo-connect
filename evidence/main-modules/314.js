// analysis/pretty/main.js:34220; webpack module 314
function(e, t, n) {
    (function() {
        var t, r, i, o = {}.hasOwnProperty;
        i = n(79).isObject, r = n(57), t = n(29), e.exports = function(e) {
            function n(e, r, o, a) {
                if (n.__super__.constructor.call(this, e), null == o) throw new Error("Missing DTD entity name. " + this.debugInfo(o));
                if (null == a) throw new Error("Missing DTD entity value. " + this.debugInfo(o));
                if (this.pe = !!r, this.name = this.stringify.name(o), this.type = t.EntityDeclaration, 
                i(a)) {
                    if (!a.pubID && !a.sysID) throw new Error("Public and/or system identifiers are required for an external entity. " + this.debugInfo(o));
                    if (a.pubID && !a.sysID) throw new Error("System identifier is required for a public external entity. " + this.debugInfo(o));
                    if (this.internal = !1, null != a.pubID && (this.pubID = this.stringify.dtdPubID(a.pubID)), 
                    null != a.sysID && (this.sysID = this.stringify.dtdSysID(a.sysID)), null != a.nData && (this.nData = this.stringify.dtdNData(a.nData)), 
                    this.pe && this.nData) throw new Error("Notation declaration is not allowed in a parameter entity. " + this.debugInfo(o));
                } else this.value = this.stringify.dtdEntityValue(a), this.internal = !0;
            }
            return function(e, t) {
                for (var n in t) o.call(t, n) && (e[n] = t[n]);
                function r() {
                    this.constructor = e;
                }
                r.prototype = t.prototype, e.prototype = new r, e.__super__ = t.prototype;
            }(n, e), Object.defineProperty(n.prototype, "publicId", {
                get: function() {
                    return this.pubID;
                }
            }), Object.defineProperty(n.prototype, "systemId", {
                get: function() {
                    return this.sysID;
                }
            }), Object.defineProperty(n.prototype, "notationName", {
                get: function() {
                    return this.nData || null;
                }
            }), Object.defineProperty(n.prototype, "inputEncoding", {
                get: function() {
                    return null;
                }
            }), Object.defineProperty(n.prototype, "xmlEncoding", {
                get: function() {
                    return null;
                }
            }), Object.defineProperty(n.prototype, "xmlVersion", {
                get: function() {
                    return null;
                }
            }), n.prototype.toString = function(e) {
                return this.options.writer.dtdEntity(this, this.options.writer.filterOptions(e));
            }, n;
        }(r);
    }).call(this);
}
