// analysis/pretty/main.js:18897; webpack module 142
function(e, t, n) {
    "use strict";
    var r = this && this.__createBinding || (Object.create ? function(e, t, n, r) {
        void 0 === r && (r = n);
        var i = Object.getOwnPropertyDescriptor(t, n);
        i && !("get" in i ? !t.__esModule : i.writable || i.configurable) || (i = {
            enumerable: !0,
            get: function() {
                return t[n];
            }
        }), Object.defineProperty(e, r, i);
    } : function(e, t, n, r) {
        void 0 === r && (r = n), e[r] = t[n];
    }), i = this && this.__exportStar || function(e, t) {
        for (var n in e) "default" === n || Object.prototype.hasOwnProperty.call(t, n) || r(t, e, n);
    };
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.DomHandler = void 0;
    var o = n(169), a = n(762);
    i(n(762), t);
    var s = /\s+/g, l = {
        normalizeWhitespace: !1,
        withStartIndices: !1,
        withEndIndices: !1,
        xmlMode: !1
    }, c = function() {
        function e(e, t, n) {
            this.dom = [], this.root = new a.Document(this.dom), this.done = !1, this.tagStack = [ this.root ], 
            this.lastNode = null, this.parser = null, "function" == typeof t && (n = t, t = l), 
            "object" == typeof e && (t = e, e = void 0), this.callback = null != e ? e : null, 
            this.options = null != t ? t : l, this.elementCB = null != n ? n : null;
        }
        return e.prototype.onparserinit = function(e) {
            this.parser = e;
        }, e.prototype.onreset = function() {
            this.dom = [], this.root = new a.Document(this.dom), this.done = !1, this.tagStack = [ this.root ], 
            this.lastNode = null, this.parser = null;
        }, e.prototype.onend = function() {
            this.done || (this.done = !0, this.parser = null, this.handleCallback(null));
        }, e.prototype.onerror = function(e) {
            this.handleCallback(e);
        }, e.prototype.onclosetag = function() {
            this.lastNode = null;
            var e = this.tagStack.pop();
            this.options.withEndIndices && (e.endIndex = this.parser.endIndex), this.elementCB && this.elementCB(e);
        }, e.prototype.onopentag = function(e, t) {
            var n = this.options.xmlMode ? o.ElementType.Tag : void 0, r = new a.Element(e, t, void 0, n);
            this.addNode(r), this.tagStack.push(r);
        }, e.prototype.ontext = function(e) {
            var t = this.options.normalizeWhitespace, n = this.lastNode;
            if (n && n.type === o.ElementType.Text) t ? n.data = (n.data + e).replace(s, " ") : n.data += e, 
            this.options.withEndIndices && (n.endIndex = this.parser.endIndex); else {
                t && (e = e.replace(s, " "));
                var r = new a.Text(e);
                this.addNode(r), this.lastNode = r;
            }
        }, e.prototype.oncomment = function(e) {
            if (this.lastNode && this.lastNode.type === o.ElementType.Comment) this.lastNode.data += e; else {
                var t = new a.Comment(e);
                this.addNode(t), this.lastNode = t;
            }
        }, e.prototype.oncommentend = function() {
            this.lastNode = null;
        }, e.prototype.oncdatastart = function() {
            var e = new a.Text(""), t = new a.NodeWithChildren(o.ElementType.CDATA, [ e ]);
            this.addNode(t), e.parent = t, this.lastNode = e;
        }, e.prototype.oncdataend = function() {
            this.lastNode = null;
        }, e.prototype.onprocessinginstruction = function(e, t) {
            var n = new a.ProcessingInstruction(e, t);
            this.addNode(n);
        }, e.prototype.handleCallback = function(e) {
            if ("function" == typeof this.callback) this.callback(e, this.dom); else if (e) throw e;
        }, e.prototype.addNode = function(e) {
            var t = this.tagStack[this.tagStack.length - 1], n = t.children[t.children.length - 1];
            this.options.withStartIndices && (e.startIndex = this.parser.startIndex), this.options.withEndIndices && (e.endIndex = this.parser.endIndex), 
            t.children.push(e), n && (e.prev = n, n.next = e), e.parent = t, this.lastNode = null;
        }, e;
    }();
    t.DomHandler = c, t.default = c;
}
