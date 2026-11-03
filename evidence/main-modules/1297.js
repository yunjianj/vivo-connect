// analysis/pretty/main.js:99291; webpack module 1297
function(e, t, n) {
    (function() {
        var t, r, i, o, a, s, l, c, u, d, h, p, f, _, m, g, v, y, E, b, w, S, T, A = {}.hasOwnProperty;
        T = n(79), w = T.isObject, b = T.isFunction, S = T.isPlainObject, E = T.getValue, 
        t = n(29), p = n(653), f = n(307), o = n(309), a = n(310), m = n(317), y = n(318), 
        _ = n(319), d = n(311), h = n(312), s = n(313), c = n(314), l = n(315), u = n(316), 
        i = n(654), v = n(656), g = n(320), r = n(218), e.exports = function() {
            function e(e, n, r) {
                var i;
                this.name = "?xml", this.type = t.Document, e || (e = {}), i = {}, e.writer ? S(e.writer) && (i = e.writer, 
                e.writer = new g) : e.writer = new g, this.options = e, this.writer = e.writer, 
                this.writerOptions = this.writer.filterOptions(i), this.stringify = new v(e), this.onDataCallback = n || function() {}, 
                this.onEndCallback = r || function() {}, this.currentNode = null, this.currentLevel = -1, 
                this.openTags = {}, this.documentStarted = !1, this.documentCompleted = !1, this.root = null;
            }
            return e.prototype.createChildNode = function(e) {
                var n, r, i, o, a, s, l, c;
                switch (e.type) {
                  case t.CData:
                    this.cdata(e.value);
                    break;

                  case t.Comment:
                    this.comment(e.value);
                    break;

                  case t.Element:
                    for (r in i = {}, l = e.attribs) A.call(l, r) && (n = l[r], i[r] = n.value);
                    this.node(e.name, i);
                    break;

                  case t.Dummy:
                    this.dummy();
                    break;

                  case t.Raw:
                    this.raw(e.value);
                    break;

                  case t.Text:
                    this.text(e.value);
                    break;

                  case t.ProcessingInstruction:
                    this.instruction(e.target, e.value);
                    break;

                  default:
                    throw new Error("This XML node type is not supported in a JS object: " + e.constructor.name);
                }
                for (a = 0, s = (c = e.children).length; a < s; a++) o = c[a], this.createChildNode(o), 
                o.type === t.Element && this.up();
                return this;
            }, e.prototype.dummy = function() {
                return this;
            }, e.prototype.node = function(e, t, n) {
                var r;
                if (null == e) throw new Error("Missing node name.");
                if (this.root && -1 === this.currentLevel) throw new Error("Document can only have one root node. " + this.debugInfo(e));
                return this.openCurrent(), e = E(e), null == t && (t = {}), t = E(t), w(t) || (n = (r = [ t, n ])[0], 
                t = r[1]), this.currentNode = new f(this, e, t), this.currentNode.children = !1, 
                this.currentLevel++, this.openTags[this.currentLevel] = this.currentNode, null != n && this.text(n), 
                this;
            }, e.prototype.element = function(e, n, r) {
                var i, o, a, s, l, c;
                if (this.currentNode && this.currentNode.type === t.DocType) this.dtdElement.apply(this, arguments); else if (Array.isArray(e) || w(e) || b(e)) for (s = this.options.noValidation, 
                this.options.noValidation = !0, (c = new p(this.options).element("TEMP_ROOT")).element(e), 
                this.options.noValidation = s, o = 0, a = (l = c.children).length; o < a; o++) i = l[o], 
                this.createChildNode(i), i.type === t.Element && this.up(); else this.node(e, n, r);
                return this;
            }, e.prototype.attribute = function(e, t) {
                var n, r;
                if (!this.currentNode || this.currentNode.children) throw new Error("att() can only be used immediately after an ele() call in callback mode. " + this.debugInfo(e));
                if (null != e && (e = E(e)), w(e)) for (n in e) A.call(e, n) && (r = e[n], this.attribute(n, r)); else b(t) && (t = t.apply()), 
                this.options.keepNullAttributes && null == t ? this.currentNode.attribs[e] = new i(this, e, "") : null != t && (this.currentNode.attribs[e] = new i(this, e, t));
                return this;
            }, e.prototype.text = function(e) {
                var t;
                return this.openCurrent(), t = new y(this, e), this.onData(this.writer.text(t, this.writerOptions, this.currentLevel + 1), this.currentLevel + 1), 
                this;
            }, e.prototype.cdata = function(e) {
                var t;
                return this.openCurrent(), t = new o(this, e), this.onData(this.writer.cdata(t, this.writerOptions, this.currentLevel + 1), this.currentLevel + 1), 
                this;
            }, e.prototype.comment = function(e) {
                var t;
                return this.openCurrent(), t = new a(this, e), this.onData(this.writer.comment(t, this.writerOptions, this.currentLevel + 1), this.currentLevel + 1), 
                this;
            }, e.prototype.raw = function(e) {
                var t;
                return this.openCurrent(), t = new m(this, e), this.onData(this.writer.raw(t, this.writerOptions, this.currentLevel + 1), this.currentLevel + 1), 
                this;
            }, e.prototype.instruction = function(e, t) {
                var n, r, i, o, a;
                if (this.openCurrent(), null != e && (e = E(e)), null != t && (t = E(t)), Array.isArray(e)) for (n = 0, 
                o = e.length; n < o; n++) r = e[n], this.instruction(r); else if (w(e)) for (r in e) A.call(e, r) && (i = e[r], 
                this.instruction(r, i)); else b(t) && (t = t.apply()), a = new _(this, e, t), this.onData(this.writer.processingInstruction(a, this.writerOptions, this.currentLevel + 1), this.currentLevel + 1);
                return this;
            }, e.prototype.declaration = function(e, t, n) {
                var r;
                if (this.openCurrent(), this.documentStarted) throw new Error("declaration() must be the first node.");
                return r = new d(this, e, t, n), this.onData(this.writer.declaration(r, this.writerOptions, this.currentLevel + 1), this.currentLevel + 1), 
                this;
            }, e.prototype.doctype = function(e, t, n) {
                if (this.openCurrent(), null == e) throw new Error("Missing root node name.");
                if (this.root) throw new Error("dtd() must come before the root node.");
                return this.currentNode = new h(this, t, n), this.currentNode.rootNodeName = e, 
                this.currentNode.children = !1, this.currentLevel++, this.openTags[this.currentLevel] = this.currentNode, 
                this;
            }, e.prototype.dtdElement = function(e, t) {
                var n;
                return this.openCurrent(), n = new l(this, e, t), this.onData(this.writer.dtdElement(n, this.writerOptions, this.currentLevel + 1), this.currentLevel + 1), 
                this;
            }, e.prototype.attList = function(e, t, n, r, i) {
                var o;
                return this.openCurrent(), o = new s(this, e, t, n, r, i), this.onData(this.writer.dtdAttList(o, this.writerOptions, this.currentLevel + 1), this.currentLevel + 1), 
                this;
            }, e.prototype.entity = function(e, t) {
                var n;
                return this.openCurrent(), n = new c(this, !1, e, t), this.onData(this.writer.dtdEntity(n, this.writerOptions, this.currentLevel + 1), this.currentLevel + 1), 
                this;
            }, e.prototype.pEntity = function(e, t) {
                var n;
                return this.openCurrent(), n = new c(this, !0, e, t), this.onData(this.writer.dtdEntity(n, this.writerOptions, this.currentLevel + 1), this.currentLevel + 1), 
                this;
            }, e.prototype.notation = function(e, t) {
                var n;
                return this.openCurrent(), n = new u(this, e, t), this.onData(this.writer.dtdNotation(n, this.writerOptions, this.currentLevel + 1), this.currentLevel + 1), 
                this;
            }, e.prototype.up = function() {
                if (this.currentLevel < 0) throw new Error("The document node has no parent.");
                return this.currentNode ? (this.currentNode.children ? this.closeNode(this.currentNode) : this.openNode(this.currentNode), 
                this.currentNode = null) : this.closeNode(this.openTags[this.currentLevel]), delete this.openTags[this.currentLevel], 
                this.currentLevel--, this;
            }, e.prototype.end = function() {
                for (;this.currentLevel >= 0; ) this.up();
                return this.onEnd();
            }, e.prototype.openCurrent = function() {
                if (this.currentNode) return this.currentNode.children = !0, this.openNode(this.currentNode);
            }, e.prototype.openNode = function(e) {
                var n, i, o, a;
                if (!e.isOpen) {
                    if (this.root || 0 !== this.currentLevel || e.type !== t.Element || (this.root = e), 
                    i = "", e.type === t.Element) {
                        for (o in this.writerOptions.state = r.OpenTag, i = this.writer.indent(e, this.writerOptions, this.currentLevel) + "<" + e.name, 
                        a = e.attribs) A.call(a, o) && (n = a[o], i += this.writer.attribute(n, this.writerOptions, this.currentLevel));
                        i += (e.children ? ">" : "/>") + this.writer.endline(e, this.writerOptions, this.currentLevel), 
                        this.writerOptions.state = r.InsideTag;
                    } else this.writerOptions.state = r.OpenTag, i = this.writer.indent(e, this.writerOptions, this.currentLevel) + "<!DOCTYPE " + e.rootNodeName, 
                    e.pubID && e.sysID ? i += ' PUBLIC "' + e.pubID + '" "' + e.sysID + '"' : e.sysID && (i += ' SYSTEM "' + e.sysID + '"'), 
                    e.children ? (i += " [", this.writerOptions.state = r.InsideTag) : (this.writerOptions.state = r.CloseTag, 
                    i += ">"), i += this.writer.endline(e, this.writerOptions, this.currentLevel);
                    return this.onData(i, this.currentLevel), e.isOpen = !0;
                }
            }, e.prototype.closeNode = function(e) {
                var n;
                if (!e.isClosed) return n = "", this.writerOptions.state = r.CloseTag, n = e.type === t.Element ? this.writer.indent(e, this.writerOptions, this.currentLevel) + "</" + e.name + ">" + this.writer.endline(e, this.writerOptions, this.currentLevel) : this.writer.indent(e, this.writerOptions, this.currentLevel) + "]>" + this.writer.endline(e, this.writerOptions, this.currentLevel), 
                this.writerOptions.state = r.None, this.onData(n, this.currentLevel), e.isClosed = !0;
            }, e.prototype.onData = function(e, t) {
                return this.documentStarted = !0, this.onDataCallback(e, t + 1);
            }, e.prototype.onEnd = function() {
                return this.documentCompleted = !0, this.onEndCallback();
            }, e.prototype.debugInfo = function(e) {
                return null == e ? "" : "node: <" + e + ">";
            }, e.prototype.ele = function() {
                return this.element.apply(this, arguments);
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
            }, e.prototype.dec = function(e, t, n) {
                return this.declaration(e, t, n);
            }, e.prototype.dtd = function(e, t, n) {
                return this.doctype(e, t, n);
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
            }, e.prototype.att = function() {
                return this.currentNode && this.currentNode.type === t.DocType ? this.attList.apply(this, arguments) : this.attribute.apply(this, arguments);
            }, e.prototype.a = function() {
                return this.currentNode && this.currentNode.type === t.DocType ? this.attList.apply(this, arguments) : this.attribute.apply(this, arguments);
            }, e.prototype.ent = function(e, t) {
                return this.entity(e, t);
            }, e.prototype.pent = function(e, t) {
                return this.pEntity(e, t);
            }, e.prototype.not = function(e, t) {
                return this.notation(e, t);
            }, e;
        }();
    }).call(this);
}
