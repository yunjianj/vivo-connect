// analysis/pretty/main.js:12238; webpack module 57
function(e, t, n) {
    (function() {
        var t, r, i, o, a, s, l, c, u, d, h, p, f, _, m, g, v, y = {}.hasOwnProperty;
        v = n(79), g = v.isObject, m = v.isFunction, _ = v.isEmpty, f = v.getValue, c = null, 
        i = null, o = null, a = null, s = null, h = null, p = null, d = null, l = null, 
        r = null, u = null, t = null, e.exports = function() {
            function e(e) {
                this.parent = e, this.parent && (this.options = this.parent.options, this.stringify = this.parent.stringify), 
                this.value = null, this.children = [], this.baseURI = null, c || (c = n(307), i = n(309), 
                o = n(310), a = n(311), s = n(312), h = n(317), p = n(318), d = n(319), l = n(655), 
                r = n(29), u = n(1295), n(308), t = n(1296));
            }
            return Object.defineProperty(e.prototype, "nodeName", {
                get: function() {
                    return this.name;
                }
            }), Object.defineProperty(e.prototype, "nodeType", {
                get: function() {
                    return this.type;
                }
            }), Object.defineProperty(e.prototype, "nodeValue", {
                get: function() {
                    return this.value;
                }
            }), Object.defineProperty(e.prototype, "parentNode", {
                get: function() {
                    return this.parent;
                }
            }), Object.defineProperty(e.prototype, "childNodes", {
                get: function() {
                    return this.childNodeList && this.childNodeList.nodes || (this.childNodeList = new u(this.children)), 
                    this.childNodeList;
                }
            }), Object.defineProperty(e.prototype, "firstChild", {
                get: function() {
                    return this.children[0] || null;
                }
            }), Object.defineProperty(e.prototype, "lastChild", {
                get: function() {
                    return this.children[this.children.length - 1] || null;
                }
            }), Object.defineProperty(e.prototype, "previousSibling", {
                get: function() {
                    var e;
                    return e = this.parent.children.indexOf(this), this.parent.children[e - 1] || null;
                }
            }), Object.defineProperty(e.prototype, "nextSibling", {
                get: function() {
                    var e;
                    return e = this.parent.children.indexOf(this), this.parent.children[e + 1] || null;
                }
            }), Object.defineProperty(e.prototype, "ownerDocument", {
                get: function() {
                    return this.document() || null;
                }
            }), Object.defineProperty(e.prototype, "textContent", {
                get: function() {
                    var e, t, n, i, o;
                    if (this.nodeType === r.Element || this.nodeType === r.DocumentFragment) {
                        for (o = "", t = 0, n = (i = this.children).length; t < n; t++) (e = i[t]).textContent && (o += e.textContent);
                        return o;
                    }
                    return null;
                },
                set: function(e) {
                    throw new Error("This DOM method is not implemented." + this.debugInfo());
                }
            }), e.prototype.setParent = function(e) {
                var t, n, r, i, o;
                for (this.parent = e, e && (this.options = e.options, this.stringify = e.stringify), 
                o = [], n = 0, r = (i = this.children).length; n < r; n++) t = i[n], o.push(t.setParent(this));
                return o;
            }, e.prototype.element = function(e, t, n) {
                var r, i, o, a, s, l, c, u, d, h, p;
                if (l = null, null === t && null == n && (t = (d = [ {}, null ])[0], n = d[1]), 
                null == t && (t = {}), t = f(t), g(t) || (n = (h = [ t, n ])[0], t = h[1]), null != e && (e = f(e)), 
                Array.isArray(e)) for (o = 0, c = e.length; o < c; o++) i = e[o], l = this.element(i); else if (m(e)) l = this.element(e.apply()); else if (g(e)) {
                    for (s in e) if (y.call(e, s)) if (p = e[s], m(p) && (p = p.apply()), !this.options.ignoreDecorators && this.stringify.convertAttKey && 0 === s.indexOf(this.stringify.convertAttKey)) l = this.attribute(s.substr(this.stringify.convertAttKey.length), p); else if (!this.options.separateArrayItems && Array.isArray(p) && _(p)) l = this.dummy(); else if (g(p) && _(p)) l = this.element(s); else if (this.options.keepNullNodes || null != p) if (!this.options.separateArrayItems && Array.isArray(p)) for (a = 0, 
                    u = p.length; a < u; a++) i = p[a], (r = {})[s] = i, l = this.element(r); else g(p) ? !this.options.ignoreDecorators && this.stringify.convertTextKey && 0 === s.indexOf(this.stringify.convertTextKey) ? l = this.element(p) : (l = this.element(s)).element(p) : l = this.element(s, p); else l = this.dummy();
                } else l = this.options.keepNullNodes || null !== n ? !this.options.ignoreDecorators && this.stringify.convertTextKey && 0 === e.indexOf(this.stringify.convertTextKey) ? this.text(n) : !this.options.ignoreDecorators && this.stringify.convertCDataKey && 0 === e.indexOf(this.stringify.convertCDataKey) ? this.cdata(n) : !this.options.ignoreDecorators && this.stringify.convertCommentKey && 0 === e.indexOf(this.stringify.convertCommentKey) ? this.comment(n) : !this.options.ignoreDecorators && this.stringify.convertRawKey && 0 === e.indexOf(this.stringify.convertRawKey) ? this.raw(n) : !this.options.ignoreDecorators && this.stringify.convertPIKey && 0 === e.indexOf(this.stringify.convertPIKey) ? this.instruction(e.substr(this.stringify.convertPIKey.length), n) : this.node(e, t, n) : this.dummy();
                if (null == l) throw new Error("Could not create any elements with: " + e + ". " + this.debugInfo());
                return l;
            }, e.prototype.insertBefore = function(e, t, n) {
                var r, i, o, a, s;
                if (null != e ? e.type : void 0) return a = t, (o = e).setParent(this), a ? (i = children.indexOf(a), 
                s = children.splice(i), children.push(o), Array.prototype.push.apply(children, s)) : children.push(o), 
                o;
                if (this.isRoot) throw new Error("Cannot insert elements at root level. " + this.debugInfo(e));
                return i = this.parent.children.indexOf(this), s = this.parent.children.splice(i), 
                r = this.parent.element(e, t, n), Array.prototype.push.apply(this.parent.children, s), 
                r;
            }, e.prototype.insertAfter = function(e, t, n) {
                var r, i, o;
                if (this.isRoot) throw new Error("Cannot insert elements at root level. " + this.debugInfo(e));
                return i = this.parent.children.indexOf(this), o = this.parent.children.splice(i + 1), 
                r = this.parent.element(e, t, n), Array.prototype.push.apply(this.parent.children, o), 
                r;
            }, e.prototype.remove = function() {
                var e;
                if (this.isRoot) throw new Error("Cannot remove the root element. " + this.debugInfo());
                return e = this.parent.children.indexOf(this), [].splice.apply(this.parent.children, [ e, e - e + 1 ].concat([])), 
                this.parent;
            }, e.prototype.node = function(e, t, n) {
                var r, i;
                return null != e && (e = f(e)), t || (t = {}), t = f(t), g(t) || (n = (i = [ t, n ])[0], 
                t = i[1]), r = new c(this, e, t), null != n && r.text(n), this.children.push(r), 
                r;
            }, e.prototype.text = function(e) {
                var t;
                return g(e) && this.element(e), t = new p(this, e), this.children.push(t), this;
            }, e.prototype.cdata = function(e) {
                var t;
                return t = new i(this, e), this.children.push(t), this;
            }, e.prototype.comment = function(e) {
                var t;
                return t = new o(this, e), this.children.push(t), this;
            }, e.prototype.commentBefore = function(e) {
                var t, n;
                return t = this.parent.children.indexOf(this), n = this.parent.children.splice(t), 
                this.parent.comment(e), Array.prototype.push.apply(this.parent.children, n), this;
            }, e.prototype.commentAfter = function(e) {
                var t, n;
                return t = this.parent.children.indexOf(this), n = this.parent.children.splice(t + 1), 
                this.parent.comment(e), Array.prototype.push.apply(this.parent.children, n), this;
            }, e.prototype.raw = function(e) {
                var t;
                return t = new h(this, e), this.children.push(t), this;
            }, e.prototype.dummy = function() {
                return new l(this);
            }, e.prototype.instruction = function(e, t) {
                var n, r, i, o, a;
                if (null != e && (e = f(e)), null != t && (t = f(t)), Array.isArray(e)) for (o = 0, 
                a = e.length; o < a; o++) n = e[o], this.instruction(n); else if (g(e)) for (n in e) y.call(e, n) && (r = e[n], 
                this.instruction(n, r)); else m(t) && (t = t.apply()), i = new d(this, e, t), this.children.push(i);
                return this;
            }, e.prototype.instructionBefore = function(e, t) {
                var n, r;
                return n = this.parent.children.indexOf(this), r = this.parent.children.splice(n), 
                this.parent.instruction(e, t), Array.prototype.push.apply(this.parent.children, r), 
                this;
            }, e.prototype.instructionAfter = function(e, t) {
                var n, r;
                return n = this.parent.children.indexOf(this), r = this.parent.children.splice(n + 1), 
                this.parent.instruction(e, t), Array.prototype.push.apply(this.parent.children, r), 
                this;
            }, e.prototype.declaration = function(e, t, n) {
                var i, o;
                return i = this.document(), o = new a(i, e, t, n), 0 === i.children.length ? i.children.unshift(o) : i.children[0].type === r.Declaration ? i.children[0] = o : i.children.unshift(o), 
                i.root() || i;
            }, e.prototype.dtd = function(e, t) {
                var n, i, o, a, l, c, u, d, h;
                for (n = this.document(), i = new s(n, e, t), o = a = 0, c = (d = n.children).length; a < c; o = ++a) if (d[o].type === r.DocType) return n.children[o] = i, 
                i;
                for (o = l = 0, u = (h = n.children).length; l < u; o = ++l) if (h[o].isRoot) return n.children.splice(o, 0, i), 
                i;
                return n.children.push(i), i;
            }, e.prototype.up = function() {
                if (this.isRoot) throw new Error("The root node has no parent. Use doc() if you need to get the document object.");
                return this.parent;
            }, e.prototype.root = function() {
                var e;
                for (e = this; e; ) {
                    if (e.type === r.Document) return e.rootObject;
                    if (e.isRoot) return e;
                    e = e.parent;
                }
            }, e.prototype.document = function() {
                var e;
                for (e = this; e; ) {
                    if (e.type === r.Document) return e;
                    e = e.parent;
                }
            }, e.prototype.end = function(e) {
                return this.document().end(e);
            }, e.prototype.prev = function() {
                var e;
                if ((e = this.parent.children.indexOf(this)) < 1) throw new Error("Already at the first node. " + this.debugInfo());
                return this.parent.children[e - 1];
            }, e.prototype.next = function() {
                var e;
                if (-1 === (e = this.parent.children.indexOf(this)) || e === this.parent.children.length - 1) throw new Error("Already at the last node. " + this.debugInfo());
                return this.parent.children[e + 1];
            }, e.prototype.importDocument = function(e) {
                var t;
                return (t = e.root().clone()).parent = this, t.isRoot = !1, this.children.push(t), 
                this;
            }, e.prototype.debugInfo = function(e) {
                var t, n;
                return null != (e = e || this.name) || (null != (t = this.parent) ? t.name : void 0) ? null == e ? "parent: <" + this.parent.name + ">" : (null != (n = this.parent) ? n.name : void 0) ? "node: <" + e + ">, parent: <" + this.parent.name + ">" : "node: <" + e + ">" : "";
            }, e.prototype.ele = function(e, t, n) {
                return this.element(e, t, n);
            }, e.prototype.nod = function(e, t, n) {
                return this.node(e, t, n);
            }, e.prototype.txt = function(e) {
                return this.text(e);
            }, e.prototype.dat = function(e) {
                return this.cdata(e);
            }, e.prototype.com = function(e) {
                return this.comment(e);
            }, e.prototype.ins = function(e, t) {
                return this.instruction(e, t);
            }, e.prototype.doc = function() {
                return this.document();
            }, e.prototype.dec = function(e, t, n) {
                return this.declaration(e, t, n);
            }, e.prototype.e = function(e, t, n) {
                return this.element(e, t, n);
            }, e.prototype.n = function(e, t, n) {
                return this.node(e, t, n);
            }, e.prototype.t = function(e) {
                return this.text(e);
            }, e.prototype.d = function(e) {
                return this.cdata(e);
            }, e.prototype.c = function(e) {
                return this.comment(e);
            }, e.prototype.r = function(e) {
                return this.raw(e);
            }, e.prototype.i = function(e, t) {
                return this.instruction(e, t);
            }, e.prototype.u = function() {
                return this.up();
            }, e.prototype.importXMLBuilder = function(e) {
                return this.importDocument(e);
            }, e.prototype.replaceChild = function(e, t) {
                throw new Error("This DOM method is not implemented." + this.debugInfo());
            }, e.prototype.removeChild = function(e) {
                throw new Error("This DOM method is not implemented." + this.debugInfo());
            }, e.prototype.appendChild = function(e) {
                throw new Error("This DOM method is not implemented." + this.debugInfo());
            }, e.prototype.hasChildNodes = function() {
                return 0 !== this.children.length;
            }, e.prototype.cloneNode = function(e) {
                throw new Error("This DOM method is not implemented." + this.debugInfo());
            }, e.prototype.normalize = function() {
                throw new Error("This DOM method is not implemented." + this.debugInfo());
            }, e.prototype.isSupported = function(e, t) {
                return !0;
            }, e.prototype.hasAttributes = function() {
                return 0 !== this.attribs.length;
            }, e.prototype.compareDocumentPosition = function(e) {
                var n;
                return this, this === e ? 0 : this.document() !== e.document() ? (n = t.Disconnected | t.ImplementationSpecific, 
                Math.random() < .5 ? n |= t.Preceding : n |= t.Following, n) : this.isAncestor(e) ? t.Contains | t.Preceding : this.isDescendant(e) ? t.Contains | t.Following : this.isPreceding(e) ? t.Preceding : t.Following;
            }, e.prototype.isSameNode = function(e) {
                throw new Error("This DOM method is not implemented." + this.debugInfo());
            }, e.prototype.lookupPrefix = function(e) {
                throw new Error("This DOM method is not implemented." + this.debugInfo());
            }, e.prototype.isDefaultNamespace = function(e) {
                throw new Error("This DOM method is not implemented." + this.debugInfo());
            }, e.prototype.lookupNamespaceURI = function(e) {
                throw new Error("This DOM method is not implemented." + this.debugInfo());
            }, e.prototype.isEqualNode = function(e) {
                var t, n, r;
                if (e.nodeType !== this.nodeType) return !1;
                if (e.children.length !== this.children.length) return !1;
                for (t = n = 0, r = this.children.length - 1; 0 <= r ? n <= r : n >= r; t = 0 <= r ? ++n : --n) if (!this.children[t].isEqualNode(e.children[t])) return !1;
                return !0;
            }, e.prototype.getFeature = function(e, t) {
                throw new Error("This DOM method is not implemented." + this.debugInfo());
            }, e.prototype.setUserData = function(e, t, n) {
                throw new Error("This DOM method is not implemented." + this.debugInfo());
            }, e.prototype.getUserData = function(e) {
                throw new Error("This DOM method is not implemented." + this.debugInfo());
            }, e.prototype.contains = function(e) {
                return !!e && (e === this || this.isDescendant(e));
            }, e.prototype.isDescendant = function(e) {
                var t, n, r, i;
                for (n = 0, r = (i = this.children).length; n < r; n++) {
                    if (e === (t = i[n])) return !0;
                    if (t.isDescendant(e)) return !0;
                }
                return !1;
            }, e.prototype.isAncestor = function(e) {
                return e.isDescendant(this);
            }, e.prototype.isPreceding = function(e) {
                var t, n;
                return t = this.treePosition(e), n = this.treePosition(this), -1 !== t && -1 !== n && t < n;
            }, e.prototype.isFollowing = function(e) {
                var t, n;
                return t = this.treePosition(e), n = this.treePosition(this), -1 !== t && -1 !== n && t > n;
            }, e.prototype.treePosition = function(e) {
                var t, n;
                return n = 0, t = !1, this.foreachTreeNode(this.document(), function(r) {
                    if (n++, !t && r === e) return t = !0;
                }), t ? n : -1;
            }, e.prototype.foreachTreeNode = function(e, t) {
                var n, r, i, o, a;
                for (e || (e = this.document()), r = 0, i = (o = e.children).length; r < i; r++) {
                    if (a = t(n = o[r])) return a;
                    if (a = this.foreachTreeNode(n, t)) return a;
                }
            }, e;
        }();
    }).call(this);
}
