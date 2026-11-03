// analysis/pretty/main.js:122888; webpack module 1608
function(e, t, n) {
    "use strict";
    var r = this && this.__assign || function() {
        return (r = Object.assign || function(e) {
            for (var t, n = 1, r = arguments.length; n < r; n++) for (var i in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
            return e;
        }).apply(this, arguments);
    }, i = this && this.__createBinding || (Object.create ? function(e, t, n, r) {
        void 0 === r && (r = n), Object.defineProperty(e, r, {
            enumerable: !0,
            get: function() {
                return t[n];
            }
        });
    } : function(e, t, n, r) {
        void 0 === r && (r = n), e[r] = t[n];
    }), o = this && this.__setModuleDefault || (Object.create ? function(e, t) {
        Object.defineProperty(e, "default", {
            enumerable: !0,
            value: t
        });
    } : function(e, t) {
        e.default = t;
    }), a = this && this.__importStar || function(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e) for (var n in e) "default" !== n && Object.prototype.hasOwnProperty.call(e, n) && i(t, e, n);
        return o(t, e), t;
    };
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var s = a(n(169)), l = n(1609), c = n(1610), u = new Set([ "style", "script", "xmp", "iframe", "noembed", "noframes", "plaintext", "noscript" ]);
    var d = new Set([ "area", "base", "basefont", "br", "col", "command", "embed", "frame", "hr", "img", "input", "isindex", "keygen", "link", "meta", "param", "source", "track", "wbr" ]);
    function h(e, t) {
        void 0 === t && (t = {});
        for (var n = ("length" in e ? e : [ e ]), r = "", i = 0; i < n.length; i++) r += p(n[i], t);
        return r;
    }
    function p(e, t) {
        switch (e.type) {
          case s.Root:
            return h(e.children, t);

          case s.Directive:
          case s.Doctype:
            return "<" + e.data + ">";

          case s.Comment:
            return function(e) {
                return "\x3c!--" + e.data + "--\x3e";
            }(e);

          case s.CDATA:
            return function(e) {
                return "<![CDATA[" + e.children[0].data + "]]>";
            }(e);

          case s.Script:
          case s.Style:
          case s.Tag:
            return function(e, t) {
                var n;
                "foreign" === t.xmlMode && (e.name = null !== (n = c.elementNames.get(e.name)) && void 0 !== n ? n : e.name, 
                e.parent && f.has(e.parent.name) && (t = r(r({}, t), {
                    xmlMode: !1
                })));
                !t.xmlMode && _.has(e.name) && (t = r(r({}, t), {
                    xmlMode: "foreign"
                }));
                var i = "<" + e.name, o = function(e, t) {
                    if (e) return Object.keys(e).map(function(n) {
                        var r, i, o = null !== (r = e[n]) && void 0 !== r ? r : "";
                        return "foreign" === t.xmlMode && (n = null !== (i = c.attributeNames.get(n)) && void 0 !== i ? i : n), 
                        t.emptyAttrs || t.xmlMode || "" !== o ? n + '="' + (!1 !== t.decodeEntities ? l.encodeXML(o) : o.replace(/"/g, "&quot;")) + '"' : n;
                    }).join(" ");
                }(e.attribs, t);
                o && (i += " " + o);
                0 === e.children.length && (t.xmlMode ? !1 !== t.selfClosingTags : t.selfClosingTags && d.has(e.name)) ? (t.xmlMode || (i += " "), 
                i += "/>") : (i += ">", e.children.length > 0 && (i += h(e.children, t)), !t.xmlMode && d.has(e.name) || (i += "</" + e.name + ">"));
                return i;
            }(e, t);

          case s.Text:
            return function(e, t) {
                var n = e.data || "";
                !1 === t.decodeEntities || !t.xmlMode && e.parent && u.has(e.parent.name) || (n = l.encodeXML(n));
                return n;
            }(e, t);
        }
    }
    t.default = h;
    var f = new Set([ "mi", "mo", "mn", "ms", "mtext", "annotation-xml", "foreignObject", "desc", "title" ]), _ = new Set([ "svg", "math" ]);
}
