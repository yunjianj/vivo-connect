// analysis/pretty/main.js:40409; webpack module 369
function(e, t, n) {
    var r = n(779), i = n(783), o = n(245), a = {
        merge: n(1662),
        defaults: n(207)
    };
    function s(e, t, n) {
        if (t) "string" == typeof t && (t = i(t, e._root, n)); else {
            if (!e._root || !e._root.children) return "";
            t = e._root.children;
        }
        return r(t, n);
    }
    t.load = function(e, r) {
        var i = n(367);
        r = a.defaults(r || {}, i.prototype.options);
        var s = o(e, r), l = function(e, t, n, o) {
            return this instanceof l ? (o = a.defaults(o || {}, r), i.call(this, e, t, n || s, o)) : new l(e, t, n, o);
        };
        return l.prototype = Object.create(i.prototype), l.prototype.constructor = l, l.fn = l.prototype, 
        l.prototype._originalRoot = s, a.merge(l, t), l._root = s, l._options = r, l;
    }, t.html = function(e, t) {
        var r = n(367);
        return "[object Object]" !== Object.prototype.toString.call(e) || t || "length" in e || "type" in e || (t = e, 
        e = void 0), s(this, e, t = a.defaults(t || {}, this._options, r.prototype.options));
    }, t.xml = function(e) {
        return s(this, e, a.defaults({
            xmlMode: !0
        }, this._options));
    }, t.text = function(e) {
        e || (e = this.root());
        for (var n, r = "", i = e.length, o = 0; o < i; o++) "text" === (n = e[o]).type ? r += n.data : n.children && "comment" !== n.type && (r += t.text(n.children));
        return r;
    }, t.parseHTML = function(e, t, n) {
        var r;
        return e && "string" == typeof e ? ("boolean" == typeof t && (n = t), r = this.load(e), 
        n || r("script").remove(), r.root()[0].children.slice()) : null;
    }, t.root = function() {
        return this(this._root);
    }, t.contains = function(e, t) {
        if (t === e) return !1;
        for (;t && t !== t.parent; ) if ((t = t.parent) === e) return !0;
        return !1;
    };
}
