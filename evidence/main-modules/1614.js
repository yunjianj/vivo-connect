// analysis/pretty/main.js:123194; webpack module 1614
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.getFeed = void 0;
    var r = n(761), i = n(766);
    t.getFeed = function(e) {
        var t = l(d, e);
        return t ? "feed" === t.name ? function(e) {
            var t, n = e.children, r = {
                type: "atom",
                items: (0, i.getElementsByTagName)("entry", n).map(function(e) {
                    var t, n = e.children, r = {
                        media: s(n)
                    };
                    u(r, "id", "id", n), u(r, "title", "title", n);
                    var i = null === (t = l("link", n)) || void 0 === t ? void 0 : t.attribs.href;
                    i && (r.link = i);
                    var o = c("summary", n) || c("content", n);
                    o && (r.description = o);
                    var a = c("updated", n);
                    return a && (r.pubDate = new Date(a)), r;
                })
            };
            u(r, "id", "id", n), u(r, "title", "title", n);
            var o = null === (t = l("link", n)) || void 0 === t ? void 0 : t.attribs.href;
            o && (r.link = o);
            u(r, "description", "subtitle", n);
            var a = c("updated", n);
            a && (r.updated = new Date(a));
            return u(r, "author", "email", n, !0), r;
        }(t) : function(e) {
            var t, n, r = null !== (n = null === (t = l("channel", e.children)) || void 0 === t ? void 0 : t.children) && void 0 !== n ? n : [], o = {
                type: e.name.substr(0, 3),
                id: "",
                items: (0, i.getElementsByTagName)("item", e.children).map(function(e) {
                    var t = e.children, n = {
                        media: s(t)
                    };
                    u(n, "id", "guid", t), u(n, "title", "title", t), u(n, "link", "link", t), u(n, "description", "description", t);
                    var r = c("pubDate", t);
                    return r && (n.pubDate = new Date(r)), n;
                })
            };
            u(o, "title", "title", r), u(o, "link", "link", r), u(o, "description", "description", r);
            var a = c("lastBuildDate", r);
            a && (o.updated = new Date(a));
            return u(o, "author", "managingEditor", r, !0), o;
        }(t) : null;
    };
    var o = [ "url", "type", "lang" ], a = [ "fileSize", "bitrate", "framerate", "samplingrate", "channels", "duration", "height", "width" ];
    function s(e) {
        return (0, i.getElementsByTagName)("media:content", e).map(function(e) {
            for (var t = e.attribs, n = {
                medium: t.medium,
                isDefault: !!t.isDefault
            }, r = 0, i = o; r < i.length; r++) {
                t[c = i[r]] && (n[c] = t[c]);
            }
            for (var s = 0, l = a; s < l.length; s++) {
                var c;
                t[c = l[s]] && (n[c] = parseInt(t[c], 10));
            }
            return t.expression && (n.expression = t.expression), n;
        });
    }
    function l(e, t) {
        return (0, i.getElementsByTagName)(e, t, !0, 1)[0];
    }
    function c(e, t, n) {
        return void 0 === n && (n = !1), (0, r.textContent)((0, i.getElementsByTagName)(e, t, n, 1)).trim();
    }
    function u(e, t, n, r, i) {
        void 0 === i && (i = !1);
        var o = c(n, r, i);
        o && (e[t] = o);
    }
    function d(e) {
        return "rss" === e || "feed" === e || "rdf:RDF" === e;
    }
}
