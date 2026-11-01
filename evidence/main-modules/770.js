// analysis/pretty/main.js:70678; webpack module 770
function(e, t, n) {
    var r = n(82), i = /\s+/g, o = n(771), a = n(1625);
    function s(e, t, n) {
        "object" == typeof e ? (n = t, t = e, e = null) : "function" == typeof t && (n = t, 
        t = l), this._callback = e, this._options = t || l, this._elementCB = n, this.dom = [], 
        this._done = !1, this._tagStack = [], this._parser = this._parser || null;
    }
    var l = {
        normalizeWhitespace: !1,
        withStartIndices: !1,
        withEndIndices: !1
    };
    s.prototype.onparserinit = function(e) {
        this._parser = e;
    }, s.prototype.onreset = function() {
        s.call(this, this._callback, this._options, this._elementCB);
    }, s.prototype.onend = function() {
        this._done || (this._done = !0, this._parser = null, this._handleCallback(null));
    }, s.prototype._handleCallback = s.prototype.onerror = function(e) {
        if ("function" == typeof this._callback) this._callback(e, this.dom); else if (e) throw e;
    }, s.prototype.onclosetag = function() {
        var e = this._tagStack.pop();
        this._options.withEndIndices && e && (e.endIndex = this._parser.endIndex), this._elementCB && this._elementCB(e);
    }, s.prototype._createDomElement = function(e) {
        if (!this._options.withDomLvl1) return e;
        var t;
        for (var n in t = "tag" === e.type ? Object.create(a) : Object.create(o), e) e.hasOwnProperty(n) && (t[n] = e[n]);
        return t;
    }, s.prototype._addDomElement = function(e) {
        var t = this._tagStack[this._tagStack.length - 1], n = t ? t.children : this.dom, r = n[n.length - 1];
        e.next = null, this._options.withStartIndices && (e.startIndex = this._parser.startIndex), 
        this._options.withEndIndices && (e.endIndex = this._parser.endIndex), r ? (e.prev = r, 
        r.next = e) : e.prev = null, n.push(e), e.parent = t || null;
    }, s.prototype.onopentag = function(e, t) {
        var n = {
            type: "script" === e ? r.Script : "style" === e ? r.Style : r.Tag,
            name: e,
            attribs: t,
            children: []
        }, i = this._createDomElement(n);
        this._addDomElement(i), this._tagStack.push(i);
    }, s.prototype.ontext = function(e) {
        var t, n = this._options.normalizeWhitespace || this._options.ignoreWhitespace;
        if (!this._tagStack.length && this.dom.length && (t = this.dom[this.dom.length - 1]).type === r.Text) n ? t.data = (t.data + e).replace(i, " ") : t.data += e; else if (this._tagStack.length && (t = this._tagStack[this._tagStack.length - 1]) && (t = t.children[t.children.length - 1]) && t.type === r.Text) n ? t.data = (t.data + e).replace(i, " ") : t.data += e; else {
            n && (e = e.replace(i, " "));
            var o = this._createDomElement({
                data: e,
                type: r.Text
            });
            this._addDomElement(o);
        }
    }, s.prototype.oncomment = function(e) {
        var t = this._tagStack[this._tagStack.length - 1];
        if (t && t.type === r.Comment) t.data += e; else {
            var n = {
                data: e,
                type: r.Comment
            }, i = this._createDomElement(n);
            this._addDomElement(i), this._tagStack.push(i);
        }
    }, s.prototype.oncdatastart = function() {
        var e = {
            children: [ {
                data: "",
                type: r.Text
            } ],
            type: r.CDATA
        }, t = this._createDomElement(e);
        this._addDomElement(t), this._tagStack.push(t);
    }, s.prototype.oncommentend = s.prototype.oncdataend = function() {
        this._tagStack.pop();
    }, s.prototype.onprocessinginstruction = function(e, t) {
        var n = this._createDomElement({
            name: e,
            data: t,
            type: r.Directive
        });
        this._addDomElement(n);
    }, e.exports = s;
}
