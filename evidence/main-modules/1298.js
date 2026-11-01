// analysis/pretty/main.js:99498; webpack module 1298
function(e, t, n) {
    (function() {
        var t, r, i, o = {}.hasOwnProperty;
        t = n(29), i = n(657), r = n(218), e.exports = function(e) {
            function n(e, t) {
                this.stream = e, n.__super__.constructor.call(this, t);
            }
            return function(e, t) {
                for (var n in t) o.call(t, n) && (e[n] = t[n]);
                function r() {
                    this.constructor = e;
                }
                r.prototype = t.prototype, e.prototype = new r, e.__super__ = t.prototype;
            }(n, e), n.prototype.endline = function(e, t, i) {
                return e.isLastRootNode && t.state === r.CloseTag ? "" : n.__super__.endline.call(this, e, t, i);
            }, n.prototype.document = function(e, t) {
                var n, r, i, o, a, s, l, c, u;
                for (r = i = 0, a = (l = e.children).length; i < a; r = ++i) (n = l[r]).isLastRootNode = r === e.children.length - 1;
                for (t = this.filterOptions(t), u = [], o = 0, s = (c = e.children).length; o < s; o++) n = c[o], 
                u.push(this.writeChildNode(n, t, 0));
                return u;
            }, n.prototype.attribute = function(e, t, r) {
                return this.stream.write(n.__super__.attribute.call(this, e, t, r));
            }, n.prototype.cdata = function(e, t, r) {
                return this.stream.write(n.__super__.cdata.call(this, e, t, r));
            }, n.prototype.comment = function(e, t, r) {
                return this.stream.write(n.__super__.comment.call(this, e, t, r));
            }, n.prototype.declaration = function(e, t, r) {
                return this.stream.write(n.__super__.declaration.call(this, e, t, r));
            }, n.prototype.docType = function(e, t, n) {
                var i, o, a, s;
                if (n || (n = 0), this.openNode(e, t, n), t.state = r.OpenTag, this.stream.write(this.indent(e, t, n)), 
                this.stream.write("<!DOCTYPE " + e.root().name), e.pubID && e.sysID ? this.stream.write(' PUBLIC "' + e.pubID + '" "' + e.sysID + '"') : e.sysID && this.stream.write(' SYSTEM "' + e.sysID + '"'), 
                e.children.length > 0) {
                    for (this.stream.write(" ["), this.stream.write(this.endline(e, t, n)), t.state = r.InsideTag, 
                    o = 0, a = (s = e.children).length; o < a; o++) i = s[o], this.writeChildNode(i, t, n + 1);
                    t.state = r.CloseTag, this.stream.write("]");
                }
                return t.state = r.CloseTag, this.stream.write(t.spaceBeforeSlash + ">"), this.stream.write(this.endline(e, t, n)), 
                t.state = r.None, this.closeNode(e, t, n);
            }, n.prototype.element = function(e, n, i) {
                var a, s, l, c, u, d, h, p, f;
                for (h in i || (i = 0), this.openNode(e, n, i), n.state = r.OpenTag, this.stream.write(this.indent(e, n, i) + "<" + e.name), 
                p = e.attribs) o.call(p, h) && (a = p[h], this.attribute(a, n, i));
                if (c = 0 === (l = e.children.length) ? null : e.children[0], 0 === l || e.children.every(function(e) {
                    return (e.type === t.Text || e.type === t.Raw) && "" === e.value;
                })) n.allowEmpty ? (this.stream.write(">"), n.state = r.CloseTag, this.stream.write("</" + e.name + ">")) : (n.state = r.CloseTag, 
                this.stream.write(n.spaceBeforeSlash + "/>")); else if (!n.pretty || 1 !== l || c.type !== t.Text && c.type !== t.Raw || null == c.value) {
                    for (this.stream.write(">" + this.endline(e, n, i)), n.state = r.InsideTag, u = 0, 
                    d = (f = e.children).length; u < d; u++) s = f[u], this.writeChildNode(s, n, i + 1);
                    n.state = r.CloseTag, this.stream.write(this.indent(e, n, i) + "</" + e.name + ">");
                } else this.stream.write(">"), n.state = r.InsideTag, n.suppressPrettyCount++, !0, 
                this.writeChildNode(c, n, i + 1), n.suppressPrettyCount--, !1, n.state = r.CloseTag, 
                this.stream.write("</" + e.name + ">");
                return this.stream.write(this.endline(e, n, i)), n.state = r.None, this.closeNode(e, n, i);
            }, n.prototype.processingInstruction = function(e, t, r) {
                return this.stream.write(n.__super__.processingInstruction.call(this, e, t, r));
            }, n.prototype.raw = function(e, t, r) {
                return this.stream.write(n.__super__.raw.call(this, e, t, r));
            }, n.prototype.text = function(e, t, r) {
                return this.stream.write(n.__super__.text.call(this, e, t, r));
            }, n.prototype.dtdAttList = function(e, t, r) {
                return this.stream.write(n.__super__.dtdAttList.call(this, e, t, r));
            }, n.prototype.dtdElement = function(e, t, r) {
                return this.stream.write(n.__super__.dtdElement.call(this, e, t, r));
            }, n.prototype.dtdEntity = function(e, t, r) {
                return this.stream.write(n.__super__.dtdEntity.call(this, e, t, r));
            }, n.prototype.dtdNotation = function(e, t, r) {
                return this.stream.write(n.__super__.dtdNotation.call(this, e, t, r));
            }, n;
        }(i);
    }).call(this);
}
