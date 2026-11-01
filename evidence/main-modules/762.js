// analysis/pretty/main.js:69825; webpack module 762
function(e, t, n) {
    "use strict";
    var r, i = this && this.__extends || (r = function(e, t) {
        return (r = Object.setPrototypeOf || {
            __proto__: []
        } instanceof Array && function(e, t) {
            e.__proto__ = t;
        } || function(e, t) {
            for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
        })(e, t);
    }, function(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
        function n() {
            this.constructor = e;
        }
        r(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, 
        new n);
    }), o = this && this.__assign || function() {
        return (o = Object.assign || function(e) {
            for (var t, n = 1, r = arguments.length; n < r; n++) for (var i in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
            return e;
        }).apply(this, arguments);
    };
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.cloneNode = t.hasChildren = t.isDocument = t.isDirective = t.isComment = t.isText = t.isCDATA = t.isTag = t.Element = t.Document = t.NodeWithChildren = t.ProcessingInstruction = t.Comment = t.Text = t.DataNode = t.Node = void 0;
    var a = n(169), s = new Map([ [ a.ElementType.Tag, 1 ], [ a.ElementType.Script, 1 ], [ a.ElementType.Style, 1 ], [ a.ElementType.Directive, 1 ], [ a.ElementType.Text, 3 ], [ a.ElementType.CDATA, 4 ], [ a.ElementType.Comment, 8 ], [ a.ElementType.Root, 9 ] ]), l = function() {
        function e(e) {
            this.type = e, this.parent = null, this.prev = null, this.next = null, this.startIndex = null, 
            this.endIndex = null;
        }
        return Object.defineProperty(e.prototype, "nodeType", {
            get: function() {
                var e;
                return null !== (e = s.get(this.type)) && void 0 !== e ? e : 1;
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(e.prototype, "parentNode", {
            get: function() {
                return this.parent;
            },
            set: function(e) {
                this.parent = e;
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(e.prototype, "previousSibling", {
            get: function() {
                return this.prev;
            },
            set: function(e) {
                this.prev = e;
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(e.prototype, "nextSibling", {
            get: function() {
                return this.next;
            },
            set: function(e) {
                this.next = e;
            },
            enumerable: !1,
            configurable: !0
        }), e.prototype.cloneNode = function(e) {
            return void 0 === e && (e = !1), w(this, e);
        }, e;
    }();
    t.Node = l;
    var c = function(e) {
        function t(t, n) {
            var r = e.call(this, t) || this;
            return r.data = n, r;
        }
        return i(t, e), Object.defineProperty(t.prototype, "nodeValue", {
            get: function() {
                return this.data;
            },
            set: function(e) {
                this.data = e;
            },
            enumerable: !1,
            configurable: !0
        }), t;
    }(l);
    t.DataNode = c;
    var u = function(e) {
        function t(t) {
            return e.call(this, a.ElementType.Text, t) || this;
        }
        return i(t, e), t;
    }(c);
    t.Text = u;
    var d = function(e) {
        function t(t) {
            return e.call(this, a.ElementType.Comment, t) || this;
        }
        return i(t, e), t;
    }(c);
    t.Comment = d;
    var h = function(e) {
        function t(t, n) {
            var r = e.call(this, a.ElementType.Directive, n) || this;
            return r.name = t, r;
        }
        return i(t, e), t;
    }(c);
    t.ProcessingInstruction = h;
    var p = function(e) {
        function t(t, n) {
            var r = e.call(this, t) || this;
            return r.children = n, r;
        }
        return i(t, e), Object.defineProperty(t.prototype, "firstChild", {
            get: function() {
                var e;
                return null !== (e = this.children[0]) && void 0 !== e ? e : null;
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(t.prototype, "lastChild", {
            get: function() {
                return this.children.length > 0 ? this.children[this.children.length - 1] : null;
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(t.prototype, "childNodes", {
            get: function() {
                return this.children;
            },
            set: function(e) {
                this.children = e;
            },
            enumerable: !1,
            configurable: !0
        }), t;
    }(l);
    t.NodeWithChildren = p;
    var f = function(e) {
        function t(t) {
            return e.call(this, a.ElementType.Root, t) || this;
        }
        return i(t, e), t;
    }(p);
    t.Document = f;
    var _ = function(e) {
        function t(t, n, r, i) {
            void 0 === r && (r = []), void 0 === i && (i = "script" === t ? a.ElementType.Script : "style" === t ? a.ElementType.Style : a.ElementType.Tag);
            var o = e.call(this, i, r) || this;
            return o.name = t, o.attribs = n, o;
        }
        return i(t, e), Object.defineProperty(t.prototype, "tagName", {
            get: function() {
                return this.name;
            },
            set: function(e) {
                this.name = e;
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(t.prototype, "attributes", {
            get: function() {
                var e = this;
                return Object.keys(this.attribs).map(function(t) {
                    var n, r;
                    return {
                        name: t,
                        value: e.attribs[t],
                        namespace: null === (n = e["x-attribsNamespace"]) || void 0 === n ? void 0 : n[t],
                        prefix: null === (r = e["x-attribsPrefix"]) || void 0 === r ? void 0 : r[t]
                    };
                });
            },
            enumerable: !1,
            configurable: !0
        }), t;
    }(p);
    function m(e) {
        return (0, a.isTag)(e);
    }
    function g(e) {
        return e.type === a.ElementType.CDATA;
    }
    function v(e) {
        return e.type === a.ElementType.Text;
    }
    function y(e) {
        return e.type === a.ElementType.Comment;
    }
    function E(e) {
        return e.type === a.ElementType.Directive;
    }
    function b(e) {
        return e.type === a.ElementType.Root;
    }
    function w(e, t) {
        var n;
        if (void 0 === t && (t = !1), v(e)) n = new u(e.data); else if (y(e)) n = new d(e.data); else if (m(e)) {
            var r = t ? S(e.children) : [], i = new _(e.name, o({}, e.attribs), r);
            r.forEach(function(e) {
                return e.parent = i;
            }), null != e.namespace && (i.namespace = e.namespace), e["x-attribsNamespace"] && (i["x-attribsNamespace"] = o({}, e["x-attribsNamespace"])), 
            e["x-attribsPrefix"] && (i["x-attribsPrefix"] = o({}, e["x-attribsPrefix"])), n = i;
        } else if (g(e)) {
            r = t ? S(e.children) : [];
            var s = new p(a.ElementType.CDATA, r);
            r.forEach(function(e) {
                return e.parent = s;
            }), n = s;
        } else if (b(e)) {
            r = t ? S(e.children) : [];
            var l = new f(r);
            r.forEach(function(e) {
                return e.parent = l;
            }), e["x-mode"] && (l["x-mode"] = e["x-mode"]), n = l;
        } else {
            if (!E(e)) throw new Error("Not implemented yet: ".concat(e.type));
            var c = new h(e.name, e.data);
            null != e["x-name"] && (c["x-name"] = e["x-name"], c["x-publicId"] = e["x-publicId"], 
            c["x-systemId"] = e["x-systemId"]), n = c;
        }
        return n.startIndex = e.startIndex, n.endIndex = e.endIndex, null != e.sourceCodeLocation && (n.sourceCodeLocation = e.sourceCodeLocation), 
        n;
    }
    function S(e) {
        for (var t = e.map(function(e) {
            return w(e, !0);
        }), n = 1; n < t.length; n++) t[n].prev = t[n - 1], t[n - 1].next = t[n];
        return t;
    }
    t.Element = _, t.isTag = m, t.isCDATA = g, t.isText = v, t.isComment = y, t.isDirective = E, 
    t.isDocument = b, t.hasChildren = function(e) {
        return Object.prototype.hasOwnProperty.call(e, "children");
    }, t.cloneNode = w;
}
