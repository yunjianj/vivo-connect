// analysis/pretty/main.js:69447; webpack module 758
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
    }), t.cloneNode = t.Element = t.NodeWithChildren = t.ProcessingInstruction = t.Comment = t.Text = t.DataNode = t.Node = void 0;
    var a = new Map([ [ "tag", 1 ], [ "script", 1 ], [ "style", 1 ], [ "directive", 1 ], [ "text", 3 ], [ "cdata", 4 ], [ "comment", 8 ] ]), s = function() {
        function e(e) {
            this.type = e, this.parent = null, this.prev = null, this.next = null, this.startIndex = null, 
            this.endIndex = null;
        }
        return Object.defineProperty(e.prototype, "nodeType", {
            get: function() {
                var e;
                return null !== (e = a.get(this.type)) && void 0 !== e ? e : 1;
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
            return void 0 === e && (e = !1), f(this, e);
        }, e;
    }();
    t.Node = s;
    var l = function(e) {
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
    }(s);
    t.DataNode = l;
    var c = function(e) {
        function t(t) {
            return e.call(this, "text", t) || this;
        }
        return i(t, e), t;
    }(l);
    t.Text = c;
    var u = function(e) {
        function t(t) {
            return e.call(this, "comment", t) || this;
        }
        return i(t, e), t;
    }(l);
    t.Comment = u;
    var d = function(e) {
        function t(t, n) {
            var r = e.call(this, "directive", n) || this;
            return r.name = t, r;
        }
        return i(t, e), t;
    }(l);
    t.ProcessingInstruction = d;
    var h = function(e) {
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
    }(s);
    t.NodeWithChildren = h;
    var p = function(e) {
        function t(t, n, r) {
            void 0 === r && (r = []);
            var i = e.call(this, "script" === t ? "script" : "style" === t ? "style" : "tag", r) || this;
            return i.name = t, i.attribs = n, i.attribs = n, i;
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
                    return {
                        name: t,
                        value: e.attribs[t]
                    };
                });
            },
            enumerable: !1,
            configurable: !0
        }), t;
    }(h);
    function f(e, t) {
        switch (void 0 === t && (t = !1), e.type) {
          case "text":
            return new c(e.data);

          case "directive":
            var n = e;
            return new d(n.name, n.data);

          case "comment":
            return new u(e.data);

          case "tag":
          case "script":
          case "style":
            var r = e, i = t ? _(r.children) : [], a = new p(r.name, o({}, r.attribs), i);
            return i.forEach(function(e) {
                return e.parent = a;
            }), a;

          case "cdata":
            i = t ? _(e.children) : [];
            var s = new h("cdata", i);
            return i.forEach(function(e) {
                return e.parent = s;
            }), s;

          case "doctype":
            throw new Error("Not implemented yet: ElementType.Doctype case");
        }
    }
    function _(e) {
        for (var t = e.map(function(e) {
            return f(e, !0);
        }), n = 1; n < t.length; n++) t[n].prev = t[n - 1], t[n - 1].next = t[n];
        return t;
    }
    t.Element = p, t.cloneNode = f;
}
