// analysis/pretty/main.js:128020; webpack module 1674
function(e, t, n) {
    "use strict";
    var r = n(244);
    e.exports = function(e) {
        function t(t, i, o) {
            o = o || {};
            var a = r.parseCSS(i), s = [], l = "style";
            if (o.styleAttributeName && (l = o.styleAttributeName), a.forEach(function(i) {
                for (var a, c = i[0], u = i[1], d = new r.Selector(c), h = d.parsed(), p = function(e) {
                    if (0 === e.length) return;
                    var t = e[e.length - 1].pseudos;
                    if (!t) return;
                    for (var r = 0; r < t.length; r++) if (n(t[r])) return t[r].name;
                }(h), f = 0; f < h.length; ++f) {
                    var _ = h[f];
                    if (_.pseudos) for (var m = 0; m < _.pseudos.length; ++m) {
                        var g = _.pseudos[m];
                        if (e.ignoredPseudos.indexOf(g.name) >= 0) return;
                    }
                }
                if (p) {
                    var v = h[h.length - 1], y = v.pseudos;
                    v.pseudos = function(e) {
                        return e.filter(function(e) {
                            return !n(e);
                        });
                    }(v.pseudos), c = h.toString(), v.pseudos = y;
                }
                try {
                    a = t(c);
                } catch (e) {
                    return;
                }
                a.each(function() {
                    var n = this;
                    if (!(n.name && e.nonVisualElements.indexOf(n.name.toUpperCase()) >= 0)) {
                        if (p) {
                            var i = "pseudo" + p, a = n[i];
                            a || ((a = n[i] = t("<span />").get(0)).pseudoElementType = p, a.pseudoElementParent = n, 
                            n[i] = a), n = a;
                        }
                        if (!n.styleProps) {
                            if (n.styleProps = {}, t(n).attr(l)) {
                                var c = "* { " + t(n).attr(l) + " } ";
                                h(r.parseCSS(c)[0][1], new r.Selector("<style>", !0));
                            }
                            s.push(n);
                        }
                        h(u, d);
                    }
                    function h(t, i) {
                        for (var a = 0, s = t.length; a < s; a++) if ("property" == t[a].type) {
                            var l = t[a].name, c = t[a].value, u = null !== t[a].value.match(/!important$/);
                            u && !o.preserveImportant && (c = c.replace(/\s*!important$/, ""));
                            var d = [ t[a].position.start.line, t[a].position.start.col ], h = new r.Property(l, c, i, u ? 2 : 0, d), p = n.styleProps[l];
                            e.excludedProperties.indexOf(l) < 0 && (p && p.compare(h) === h || !p) && (p && p.selector !== i ? delete n.styleProps[l] : p && (h.nextProp = p), 
                            n.styleProps[l] = h);
                        }
                    }
                });
            }), s.forEach(function(e) {
                Object.keys(e.styleProps).length;
                var n = [];
                Object.keys(e.styleProps).forEach(function(t) {
                    for (var r = e.styleProps[t]; void 0 !== r; ) n.push(r), r = r.nextProp;
                }), n.sort(function(e, t) {
                    return e.compareFunc(t);
                });
                var r = n.filter(function(e) {
                    return "content" !== e.prop;
                }).map(function(e) {
                    return e.prop + ": " + e.value.replace(/["]/g, "'") + ";";
                }).join(" ");
                r && t(e).attr(l, r);
            }), o.inlinePseudoElements && s.forEach(function(e) {
                if (e.pseudoElementType && e.styleProps.content) {
                    var n = function(e) {
                        if ("none" === e || "normal" === e) return "";
                        var t = e.match(/^\s*url\s*\(\s*(.*?)\s*\)\s*$/i);
                        if (t) {
                            return {
                                img: t[1].replace(/^['"]|['"]$/g, "")
                            };
                        }
                        return e = (e = e.slice(1, e.length - 1)).replace(/\\/g, "");
                    }(e.styleProps.content.value);
                    n.img ? (e.name = "img", t(e).attr("src", n.img)) : t(e).text(n);
                    var r = e.pseudoElementParent;
                    "before" === e.pseudoElementType ? t(r).prepend(e) : t(r).append(e);
                }
            }), o.applyWidthAttributes && s.forEach(function(e) {
                d(e, "width");
            }), o.applyHeightAttributes && s.forEach(function(e) {
                d(e, "height");
            }), o.applyAttributesTableElements && s.forEach(function(n) {
                if (!n.name) return;
                var r = n.name.toUpperCase(), i = Object.keys(e.styleToAttribute);
                if (e.tableElements.indexOf(r) > -1) for (var o in n.styleProps) i.indexOf(n.styleProps[o].prop) > -1 && t(n).attr(e.styleToAttribute[n.styleProps[o].prop], n.styleProps[o].value);
            }), o.insertPreservedExtraCss && o.extraCss) {
                var c = r.getPreservedText(o.extraCss, {
                    mediaQueries: o.preserveMediaQueries,
                    fontFaces: o.preserveFontFaces
                });
                if (c) {
                    var u = null;
                    !0 !== o.insertPreservedExtraCss ? u = t(o.insertPreservedExtraCss) : ((u = t("head")).length || (u = t("body")), 
                    u.length || (u = t.root())), u.first().append("<style>" + c + "</style>");
                }
            }
            function d(n, r) {
                if (n.name) {
                    var i = n.name.toUpperCase();
                    if (e[r + "Elements"].indexOf(i) > -1) for (var o in n.styleProps) if (n.styleProps[o].prop === r) {
                        if (n.styleProps[o].value.match(/px/)) {
                            var a = n.styleProps[o].value.replace("px", "");
                            return void t(n).attr(r, a);
                        }
                        if (e.tableElements.indexOf(i) > -1 && n.styleProps[o].value.match(/\%/)) return void t(n).attr(r, n.styleProps[o].value);
                    }
                }
            }
        }
        function n(e) {
            return "before" === e.name || "after" === e.name;
        }
        return e.ignoredPseudos = [ "hover", "active", "focus", "visited", "link" ], e.widthElements = [ "TABLE", "TD", "IMG" ], 
        e.heightElements = [ "TABLE", "TD", "IMG" ], e.tableElements = [ "TABLE", "TD", "TH", "TR", "TD", "CAPTION", "COLGROUP", "COL", "THEAD", "TBODY", "TFOOT" ], 
        e.nonVisualElements = [ "HEAD", "TITLE", "BASE", "LINK", "STYLE", "META", "SCRIPT", "NOSCRIPT" ], 
        e.styleToAttribute = {
            "background-color": "bgcolor",
            "background-image": "background",
            "text-align": "align",
            "vertical-align": "valign"
        }, e.excludedProperties = [], e.juiceDocument = function(e, n) {
            n = r.getDefaultOptions(n);
            var i = function(e, t) {
                return function(e, t) {
                    var n, i, o, a = [];
                    return e("style").each(function() {
                        if (1 === (n = (o = this).childNodes).length) {
                            if (i = n[0].data, t.applyStyleTags && void 0 === e(o).attr("data-embed") && a.push(i), 
                            t.removeStyleTags && void 0 === e(o).attr("data-embed")) {
                                var s = r.getPreservedText(o.childNodes[0].nodeValue, {
                                    mediaQueries: t.preserveMediaQueries,
                                    fontFaces: t.preserveFontFaces
                                });
                                s ? o.childNodes[0].nodeValue = s : e(o).remove();
                            }
                            e(o).removeAttr("data-embed");
                        }
                    }), a;
                }(e, t).join("\n");
            }(e, n);
            return i += "\n" + n.extraCss, t(e, i, n), e;
        }, e.inlineDocument = t, e;
    };
}
