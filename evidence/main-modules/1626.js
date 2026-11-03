// analysis/pretty/main.js:123444; webpack module 1626
function(e, t, n) {
    var r = n(770), i = n(772);
    function o(e, t) {
        this.init(e, t);
    }
    function a(e, t) {
        return i.getElementsByTagName(e, t, !0);
    }
    function s(e, t) {
        return i.getElementsByTagName(e, t, !0, 1)[0];
    }
    function l(e, t, n) {
        return i.getText(i.getElementsByTagName(e, t, n, 1)).trim();
    }
    function c(e, t, n, r, i) {
        var o = l(n, r, i);
        o && (e[t] = o);
    }
    n(22)(o, r), o.prototype.init = r;
    var u = function(e) {
        return "rss" === e || "feed" === e || "rdf:RDF" === e;
    };
    o.prototype.onend = function() {
        var e, t, n = {}, i = s(u, this.dom);
        i && ("feed" === i.name ? (t = i.children, n.type = "atom", c(n, "id", "id", t), 
        c(n, "title", "title", t), (e = s("link", t)) && (e = e.attribs) && (e = e.href) && (n.link = e), 
        c(n, "description", "subtitle", t), (e = l("updated", t)) && (n.updated = new Date(e)), 
        c(n, "author", "email", t, !0), n.items = a("entry", t).map(function(e) {
            var t, n = {};
            return c(n, "id", "id", e = e.children), c(n, "title", "title", e), (t = s("link", e)) && (t = t.attribs) && (t = t.href) && (n.link = t), 
            (t = l("summary", e) || l("content", e)) && (n.description = t), (t = l("updated", e)) && (n.pubDate = new Date(t)), 
            n;
        })) : (t = s("channel", i.children).children, n.type = i.name.substr(0, 3), n.id = "", 
        c(n, "title", "title", t), c(n, "link", "link", t), c(n, "description", "description", t), 
        (e = l("lastBuildDate", t)) && (n.updated = new Date(e)), c(n, "author", "managingEditor", t, !0), 
        n.items = a("item", i.children).map(function(e) {
            var t, n = {};
            return c(n, "id", "guid", e = e.children), c(n, "title", "title", e), c(n, "link", "link", e), 
            c(n, "description", "description", e), (t = l("pubDate", e)) && (n.pubDate = new Date(t)), 
            n;
        }))), this.dom = n, r.prototype._handleCallback.call(this, i ? null : Error("couldn't find root of feed"));
    }, e.exports = o;
}
