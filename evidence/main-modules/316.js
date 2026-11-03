// analysis/pretty/main.js:34291; webpack module 316
function(e, t, n) {
    (function() {
        var t, r, i = {}.hasOwnProperty;
        r = n(57), t = n(29), e.exports = function(e) {
            function n(e, r, i) {
                if (n.__super__.constructor.call(this, e), null == r) throw new Error("Missing DTD notation name. " + this.debugInfo(r));
                if (!i.pubID && !i.sysID) throw new Error("Public or system identifiers are required for an external entity. " + this.debugInfo(r));
                this.name = this.stringify.name(r), this.type = t.NotationDeclaration, null != i.pubID && (this.pubID = this.stringify.dtdPubID(i.pubID)), 
                null != i.sysID && (this.sysID = this.stringify.dtdSysID(i.sysID));
            }
            return function(e, t) {
                for (var n in t) i.call(t, n) && (e[n] = t[n]);
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
            }), n.prototype.toString = function(e) {
                return this.options.writer.dtdNotation(this, this.options.writer.filterOptions(e));
            }, n;
        }(r);
    }).call(this);
}
