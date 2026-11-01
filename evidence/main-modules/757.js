// analysis/pretty/main.js:69367; webpack module 757
function(e, t, n) {
    "use strict";
    var r = this && this.__createBinding || (Object.create ? function(e, t, n, r) {
        void 0 === r && (r = n), Object.defineProperty(e, r, {
            enumerable: !0,
            get: function() {
                return t[n];
            }
        });
    } : function(e, t, n, r) {
        void 0 === r && (r = n), e[r] = t[n];
    }), i = this && this.__exportStar || function(e, t) {
        for (var n in e) "default" === n || Object.prototype.hasOwnProperty.call(t, n) || r(t, e, n);
    };
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.DomHandler = void 0;
    var o = n(758);
    i(n(758), t);
    var a = /\s+/g, s = {
        normalizeWhitespace: !1,
        withStartIndices: !1,
        withEndIndices: !1
    }, l = function() {
        function e(e, t, n) {
            this.dom = [], this._done = !1, this._tagStack = [], this._lastNode = null, this._parser = null, 
            "function" == typeof t && (n = t, t = s), "object" == typeof e && (t = e, e = void 0), 
            this._callback = null != e ? e : null, this._options = null != t ? t : s, this._elementCB = null != n ? n : null;
        }
        return e.prototype.onparserinit = function(e) {
            this._parser = e;
        }, e.prototype.onreset = function() {
            var e;
            this.dom = [], this._done = !1, this._tagStack = [], this._lastNode = null, this._parser = null !== (e = this._parser) && void 0 !== e ? e : null;
        }, e.prototype.onend = function() {
            this._done || (this._done = !0, this._parser = null, this.handleCallback(null));
        }, e.prototype.onerror = function(e) {
            this.handleCallback(e);
        }, e.prototype.onclosetag = function() {
            this._lastNode = null;
            var e = this._tagStack.pop();
            e && this._parser && (this._options.withEndIndices && (e.endIndex = this._parser.endIndex), 
            this._elementCB && this._elementCB(e));
        }, e.prototype.onopentag = function(e, t) {
            var n = new o.Element(e, t);
            this.addNode(n), this._tagStack.push(n);
        }, e.prototype.ontext = function(e) {
            var t = this._options.normalizeWhitespace, n = this._lastNode;
            if (n && "text" === n.type) t ? n.data = (n.data + e).replace(a, " ") : n.data += e; else {
                t && (e = e.replace(a, " "));
                var r = new o.Text(e);
                this.addNode(r), this._lastNode = r;
            }
        }, e.prototype.oncomment = function(e) {
            if (this._lastNode && "comment" === this._lastNode.type) this._lastNode.data += e; else {
                var t = new o.Comment(e);
                this.addNode(t), this._lastNode = t;
            }
        }, e.prototype.oncommentend = function() {
            this._lastNode = null;
        }, e.prototype.oncdatastart = function() {
            var e = new o.Text(""), t = new o.NodeWithChildren("cdata", [ e ]);
            this.addNode(t), e.parent = t, this._lastNode = e;
        }, e.prototype.oncdataend = function() {
            this._lastNode = null;
        }, e.prototype.onprocessinginstruction = function(e, t) {
            var n = new o.ProcessingInstruction(e, t);
            this.addNode(n);
        }, e.prototype.handleCallback = function(e) {
            if ("function" == typeof this._callback) this._callback(e, this.dom); else if (e) throw e;
        }, e.prototype.addNode = function(e) {
            var t = this._tagStack[this._tagStack.length - 1], n = t ? t.children : this.dom, r = n[n.length - 1];
            this._parser && (this._options.withStartIndices && (e.startIndex = this._parser.startIndex), 
            this._options.withEndIndices && (e.endIndex = this._parser.endIndex)), n.push(e), 
            r && (e.prev = r, r.next = e), t && (e.parent = t), this._lastNode = null;
        }, e.prototype.addDataNode = function(e) {
            this.addNode(e), this._lastNode = e;
        }, e;
    }();
    t.DomHandler = l, t.default = l;
}
