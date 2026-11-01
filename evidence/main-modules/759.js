// analysis/pretty/main.js:69652; webpack module 759
function(e, t, n) {
    "use strict";
    var r, i = this && this.__extends || (r = function(e, t) {
        return (r = Object.setPrototypeOf || {
            __proto__: []
        } instanceof Array && function(e, t) {
            e.__proto__ = t;
        } || function(e, t) {
            for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
        })(e, t);
    }, function(e, t) {
        function n() {
            this.constructor = e;
        }
        r(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, 
        new n);
    }), o = this && this.__importDefault || function(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    }, a = this && this.__importStar || function(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e) for (var n in e) Object.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        return t.default = e, t;
    };
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var s = o(n(757)), l = a(n(760)), c = n(364), u = function(e) {
        function t(t, n) {
            return "object" == typeof t && null !== t && (n = t = void 0), e.call(this, t, n) || this;
        }
        return i(t, e), t.prototype.onend = function() {
            var e = {}, t = h(m, this.dom);
            if (t) if ("feed" === t.name) {
                var n = t.children;
                e.type = "atom", _(e, "id", "id", n), _(e, "title", "title", n);
                var r = f("href", h("link", n));
                r && (e.link = r), _(e, "description", "subtitle", n), (i = p("updated", n)) && (e.updated = new Date(i)), 
                _(e, "author", "email", n, !0), e.items = d("entry", n).map(function(e) {
                    var t = {}, n = e.children;
                    _(t, "id", "id", n), _(t, "title", "title", n);
                    var r = f("href", h("link", n));
                    r && (t.link = r);
                    var i = p("summary", n) || p("content", n);
                    i && (t.description = i);
                    var o = p("updated", n);
                    return o && (t.pubDate = new Date(o)), t;
                });
            } else {
                var i;
                n = h("channel", t.children).children;
                e.type = t.name.substr(0, 3), e.id = "", _(e, "title", "title", n), _(e, "link", "link", n), 
                _(e, "description", "description", n), (i = p("lastBuildDate", n)) && (e.updated = new Date(i)), 
                _(e, "author", "managingEditor", n, !0), e.items = d("item", t.children).map(function(e) {
                    var t = {}, n = e.children;
                    _(t, "id", "guid", n), _(t, "title", "title", n), _(t, "link", "link", n), _(t, "description", "description", n);
                    var r = p("pubDate", n);
                    return r && (t.pubDate = new Date(r)), t;
                });
            }
            this.feed = e, this.handleCallback(t ? null : Error("couldn't find root of feed"));
        }, t;
    }(s.default);
    function d(e, t) {
        return l.getElementsByTagName(e, t, !0);
    }
    function h(e, t) {
        return l.getElementsByTagName(e, t, !0, 1)[0];
    }
    function p(e, t, n) {
        return void 0 === n && (n = !1), l.getText(l.getElementsByTagName(e, t, n, 1)).trim();
    }
    function f(e, t) {
        return t ? t.attribs[e] : null;
    }
    function _(e, t, n, r, i) {
        void 0 === i && (i = !1);
        var o = p(n, r, i);
        o && (e[t] = o);
    }
    function m(e) {
        return "rss" === e || "feed" === e || "rdf:RDF" === e;
    }
    t.FeedHandler = u;
    var g = {
        xmlMode: !0
    };
    t.parseFeed = function(e, t) {
        void 0 === t && (t = g);
        var n = new u(t);
        return new c.Parser(n, t).end(e), n.feed;
    };
}
