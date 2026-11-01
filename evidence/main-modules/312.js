// analysis/pretty/main.js:34115; webpack module 312
function(e, t, n) {
    (function() {
        var t, r, i, o, a, s, l, c, u = {}.hasOwnProperty;
        c = n(79).isObject, l = n(57), t = n(29), r = n(313), o = n(314), i = n(315), a = n(316), 
        s = n(308), e.exports = function(e) {
            function n(e, r, i) {
                var o, a, s, l, u, d;
                if (n.__super__.constructor.call(this, e), this.type = t.DocType, e.children) for (a = 0, 
                s = (l = e.children).length; a < s; a++) if ((o = l[a]).type === t.Element) {
                    this.name = o.name;
                    break;
                }
                this.documentObject = e, c(r) && (r = (u = r).pubID, i = u.sysID), null == i && (i = (d = [ r, i ])[0], 
                r = d[1]), null != r && (this.pubID = this.stringify.dtdPubID(r)), null != i && (this.sysID = this.stringify.dtdSysID(i));
            }
            return function(e, t) {
                for (var n in t) u.call(t, n) && (e[n] = t[n]);
                function r() {
                    this.constructor = e;
                }
                r.prototype = t.prototype, e.prototype = new r, e.__super__ = t.prototype;
            }(n, e), Object.defineProperty(n.prototype, "entities", {
                get: function() {
                    var e, n, r, i, o;
                    for (i = {}, n = 0, r = (o = this.children).length; n < r; n++) (e = o[n]).type !== t.EntityDeclaration || e.pe || (i[e.name] = e);
                    return new s(i);
                }
            }), Object.defineProperty(n.prototype, "notations", {
                get: function() {
                    var e, n, r, i, o;
                    for (i = {}, n = 0, r = (o = this.children).length; n < r; n++) (e = o[n]).type === t.NotationDeclaration && (i[e.name] = e);
                    return new s(i);
                }
            }), Object.defineProperty(n.prototype, "publicId", {
                get: function() {
                    return this.pubID;
                }
            }), Object.defineProperty(n.prototype, "systemId", {
                get: function() {
                    return this.sysID;
                }
            }), Object.defineProperty(n.prototype, "internalSubset", {
                get: function() {
                    throw new Error("This DOM method is not implemented." + this.debugInfo());
                }
            }), n.prototype.element = function(e, t) {
                var n;
                return n = new i(this, e, t), this.children.push(n), this;
            }, n.prototype.attList = function(e, t, n, i, o) {
                var a;
                return a = new r(this, e, t, n, i, o), this.children.push(a), this;
            }, n.prototype.entity = function(e, t) {
                var n;
                return n = new o(this, !1, e, t), this.children.push(n), this;
            }, n.prototype.pEntity = function(e, t) {
                var n;
                return n = new o(this, !0, e, t), this.children.push(n), this;
            }, n.prototype.notation = function(e, t) {
                var n;
                return n = new a(this, e, t), this.children.push(n), this;
            }, n.prototype.toString = function(e) {
                return this.options.writer.docType(this, this.options.writer.filterOptions(e));
            }, n.prototype.ele = function(e, t) {
                return this.element(e, t);
            }, n.prototype.att = function(e, t, n, r, i) {
                return this.attList(e, t, n, r, i);
            }, n.prototype.ent = function(e, t) {
                return this.entity(e, t);
            }, n.prototype.pent = function(e, t) {
                return this.pEntity(e, t);
            }, n.prototype.not = function(e, t) {
                return this.notation(e, t);
            }, n.prototype.up = function() {
                return this.root() || this.documentObject;
            }, n.prototype.isEqualNode = function(e) {
                return !!n.__super__.isEqualNode.apply(this, arguments).isEqualNode(e) && (e.name === this.name && (e.publicId === this.publicId && e.systemId === this.systemId));
            }, n;
        }(l);
    }).call(this);
}
