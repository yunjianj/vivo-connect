// analysis/pretty/main.js:59215; webpack module 657
function(e, t, n) {
    (function() {
        var t, r, i, o = {}.hasOwnProperty;
        i = n(79).assign, t = n(29), n(311), n(312), n(309), n(310), n(307), n(317), n(318), 
        n(319), n(655), n(313), n(315), n(314), n(316), r = n(218), e.exports = function() {
            function e(e) {
                var t, n, r;
                for (t in e || (e = {}), this.options = e, n = e.writer || {}) o.call(n, t) && (r = n[t], 
                this["_" + t] = this[t], this[t] = r);
            }
            return e.prototype.filterOptions = function(e) {
                var t, n, o, a, s, l, c, u;
                return e || (e = {}), e = i({}, this.options, e), (t = {
                    writer: this
                }).pretty = e.pretty || !1, t.allowEmpty = e.allowEmpty || !1, t.indent = null != (n = e.indent) ? n : "  ", 
                t.newline = null != (o = e.newline) ? o : "\n", t.offset = null != (a = e.offset) ? a : 0, 
                t.dontPrettyTextNodes = null != (s = null != (l = e.dontPrettyTextNodes) ? l : e.dontprettytextnodes) ? s : 0, 
                t.spaceBeforeSlash = null != (c = null != (u = e.spaceBeforeSlash) ? u : e.spacebeforeslash) ? c : "", 
                !0 === t.spaceBeforeSlash && (t.spaceBeforeSlash = " "), t.suppressPrettyCount = 0, 
                t.user = {}, t.state = r.None, t;
            }, e.prototype.indent = function(e, t, n) {
                var r;
                return !t.pretty || t.suppressPrettyCount ? "" : t.pretty && (r = (n || 0) + t.offset + 1) > 0 ? new Array(r).join(t.indent) : "";
            }, e.prototype.endline = function(e, t, n) {
                return !t.pretty || t.suppressPrettyCount ? "" : t.newline;
            }, e.prototype.attribute = function(e, t, n) {
                var r;
                return this.openAttribute(e, t, n), r = " " + e.name + '="' + e.value + '"', this.closeAttribute(e, t, n), 
                r;
            }, e.prototype.cdata = function(e, t, n) {
                var i;
                return this.openNode(e, t, n), t.state = r.OpenTag, i = this.indent(e, t, n) + "<![CDATA[", 
                t.state = r.InsideTag, i += e.value, t.state = r.CloseTag, i += "]]>" + this.endline(e, t, n), 
                t.state = r.None, this.closeNode(e, t, n), i;
            }, e.prototype.comment = function(e, t, n) {
                var i;
                return this.openNode(e, t, n), t.state = r.OpenTag, i = this.indent(e, t, n) + "\x3c!-- ", 
                t.state = r.InsideTag, i += e.value, t.state = r.CloseTag, i += " --\x3e" + this.endline(e, t, n), 
                t.state = r.None, this.closeNode(e, t, n), i;
            }, e.prototype.declaration = function(e, t, n) {
                var i;
                return this.openNode(e, t, n), t.state = r.OpenTag, i = this.indent(e, t, n) + "<?xml", 
                t.state = r.InsideTag, i += ' version="' + e.version + '"', null != e.encoding && (i += ' encoding="' + e.encoding + '"'), 
                null != e.standalone && (i += ' standalone="' + e.standalone + '"'), t.state = r.CloseTag, 
                i += t.spaceBeforeSlash + "?>", i += this.endline(e, t, n), t.state = r.None, this.closeNode(e, t, n), 
                i;
            }, e.prototype.docType = function(e, t, n) {
                var i, o, a, s, l;
                if (n || (n = 0), this.openNode(e, t, n), t.state = r.OpenTag, s = this.indent(e, t, n), 
                s += "<!DOCTYPE " + e.root().name, e.pubID && e.sysID ? s += ' PUBLIC "' + e.pubID + '" "' + e.sysID + '"' : e.sysID && (s += ' SYSTEM "' + e.sysID + '"'), 
                e.children.length > 0) {
                    for (s += " [", s += this.endline(e, t, n), t.state = r.InsideTag, o = 0, a = (l = e.children).length; o < a; o++) i = l[o], 
                    s += this.writeChildNode(i, t, n + 1);
                    t.state = r.CloseTag, s += "]";
                }
                return t.state = r.CloseTag, s += t.spaceBeforeSlash + ">", s += this.endline(e, t, n), 
                t.state = r.None, this.closeNode(e, t, n), s;
            }, e.prototype.element = function(e, n, i) {
                var a, s, l, c, u, d, h, p, f, _, m, g, v, y;
                for (f in i || (i = 0), _ = !1, m = "", this.openNode(e, n, i), n.state = r.OpenTag, 
                m += this.indent(e, n, i) + "<" + e.name, g = e.attribs) o.call(g, f) && (a = g[f], 
                m += this.attribute(a, n, i));
                if (c = 0 === (l = e.children.length) ? null : e.children[0], 0 === l || e.children.every(function(e) {
                    return (e.type === t.Text || e.type === t.Raw) && "" === e.value;
                })) n.allowEmpty ? (m += ">", n.state = r.CloseTag, m += "</" + e.name + ">" + this.endline(e, n, i)) : (n.state = r.CloseTag, 
                m += n.spaceBeforeSlash + "/>" + this.endline(e, n, i)); else if (!n.pretty || 1 !== l || c.type !== t.Text && c.type !== t.Raw || null == c.value) {
                    if (n.dontPrettyTextNodes) for (u = 0, h = (v = e.children).length; u < h; u++) if (((s = v[u]).type === t.Text || s.type === t.Raw) && null != s.value) {
                        n.suppressPrettyCount++, _ = !0;
                        break;
                    }
                    for (m += ">" + this.endline(e, n, i), n.state = r.InsideTag, d = 0, p = (y = e.children).length; d < p; d++) s = y[d], 
                    m += this.writeChildNode(s, n, i + 1);
                    n.state = r.CloseTag, m += this.indent(e, n, i) + "</" + e.name + ">", _ && n.suppressPrettyCount--, 
                    m += this.endline(e, n, i), n.state = r.None;
                } else m += ">", n.state = r.InsideTag, n.suppressPrettyCount++, _ = !0, m += this.writeChildNode(c, n, i + 1), 
                n.suppressPrettyCount--, _ = !1, n.state = r.CloseTag, m += "</" + e.name + ">" + this.endline(e, n, i);
                return this.closeNode(e, n, i), m;
            }, e.prototype.writeChildNode = function(e, n, r) {
                switch (e.type) {
                  case t.CData:
                    return this.cdata(e, n, r);

                  case t.Comment:
                    return this.comment(e, n, r);

                  case t.Element:
                    return this.element(e, n, r);

                  case t.Raw:
                    return this.raw(e, n, r);

                  case t.Text:
                    return this.text(e, n, r);

                  case t.ProcessingInstruction:
                    return this.processingInstruction(e, n, r);

                  case t.Dummy:
                    return "";

                  case t.Declaration:
                    return this.declaration(e, n, r);

                  case t.DocType:
                    return this.docType(e, n, r);

                  case t.AttributeDeclaration:
                    return this.dtdAttList(e, n, r);

                  case t.ElementDeclaration:
                    return this.dtdElement(e, n, r);

                  case t.EntityDeclaration:
                    return this.dtdEntity(e, n, r);

                  case t.NotationDeclaration:
                    return this.dtdNotation(e, n, r);

                  default:
                    throw new Error("Unknown XML node type: " + e.constructor.name);
                }
            }, e.prototype.processingInstruction = function(e, t, n) {
                var i;
                return this.openNode(e, t, n), t.state = r.OpenTag, i = this.indent(e, t, n) + "<?", 
                t.state = r.InsideTag, i += e.target, e.value && (i += " " + e.value), t.state = r.CloseTag, 
                i += t.spaceBeforeSlash + "?>", i += this.endline(e, t, n), t.state = r.None, this.closeNode(e, t, n), 
                i;
            }, e.prototype.raw = function(e, t, n) {
                var i;
                return this.openNode(e, t, n), t.state = r.OpenTag, i = this.indent(e, t, n), t.state = r.InsideTag, 
                i += e.value, t.state = r.CloseTag, i += this.endline(e, t, n), t.state = r.None, 
                this.closeNode(e, t, n), i;
            }, e.prototype.text = function(e, t, n) {
                var i;
                return this.openNode(e, t, n), t.state = r.OpenTag, i = this.indent(e, t, n), t.state = r.InsideTag, 
                i += e.value, t.state = r.CloseTag, i += this.endline(e, t, n), t.state = r.None, 
                this.closeNode(e, t, n), i;
            }, e.prototype.dtdAttList = function(e, t, n) {
                var i;
                return this.openNode(e, t, n), t.state = r.OpenTag, i = this.indent(e, t, n) + "<!ATTLIST", 
                t.state = r.InsideTag, i += " " + e.elementName + " " + e.attributeName + " " + e.attributeType, 
                "#DEFAULT" !== e.defaultValueType && (i += " " + e.defaultValueType), e.defaultValue && (i += ' "' + e.defaultValue + '"'), 
                t.state = r.CloseTag, i += t.spaceBeforeSlash + ">" + this.endline(e, t, n), t.state = r.None, 
                this.closeNode(e, t, n), i;
            }, e.prototype.dtdElement = function(e, t, n) {
                var i;
                return this.openNode(e, t, n), t.state = r.OpenTag, i = this.indent(e, t, n) + "<!ELEMENT", 
                t.state = r.InsideTag, i += " " + e.name + " " + e.value, t.state = r.CloseTag, 
                i += t.spaceBeforeSlash + ">" + this.endline(e, t, n), t.state = r.None, this.closeNode(e, t, n), 
                i;
            }, e.prototype.dtdEntity = function(e, t, n) {
                var i;
                return this.openNode(e, t, n), t.state = r.OpenTag, i = this.indent(e, t, n) + "<!ENTITY", 
                t.state = r.InsideTag, e.pe && (i += " %"), i += " " + e.name, e.value ? i += ' "' + e.value + '"' : (e.pubID && e.sysID ? i += ' PUBLIC "' + e.pubID + '" "' + e.sysID + '"' : e.sysID && (i += ' SYSTEM "' + e.sysID + '"'), 
                e.nData && (i += " NDATA " + e.nData)), t.state = r.CloseTag, i += t.spaceBeforeSlash + ">" + this.endline(e, t, n), 
                t.state = r.None, this.closeNode(e, t, n), i;
            }, e.prototype.dtdNotation = function(e, t, n) {
                var i;
                return this.openNode(e, t, n), t.state = r.OpenTag, i = this.indent(e, t, n) + "<!NOTATION", 
                t.state = r.InsideTag, i += " " + e.name, e.pubID && e.sysID ? i += ' PUBLIC "' + e.pubID + '" "' + e.sysID + '"' : e.pubID ? i += ' PUBLIC "' + e.pubID + '"' : e.sysID && (i += ' SYSTEM "' + e.sysID + '"'), 
                t.state = r.CloseTag, i += t.spaceBeforeSlash + ">" + this.endline(e, t, n), t.state = r.None, 
                this.closeNode(e, t, n), i;
            }, e.prototype.openNode = function(e, t, n) {}, e.prototype.closeNode = function(e, t, n) {}, 
            e.prototype.openAttribute = function(e, t, n) {}, e.prototype.closeAttribute = function(e, t, n) {}, 
            e;
        }();
    }).call(this);
}
