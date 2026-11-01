// analysis/pretty/main.js:40113; webpack module 367
function(e, t, n) {
    var r = n(245), i = n(171).isHtml, o = {
        extend: n(782),
        bind: n(368),
        forEach: n(246),
        defaults: n(207)
    }, a = [ n(1648), n(1664), n(1668), n(1669), n(1671) ], s = e.exports = function(e, t, n, a) {
        return this instanceof s ? (this.options = o.defaults(a || {}, this.options), e ? (n && ("string" == typeof n && (n = r(n, this.options)), 
        this._root = s.call(this, n)), e.cheerio ? e : (l(e) && (e = [ e ]), Array.isArray(e) ? (o.forEach(e, o.bind(function(e, t) {
            this[t] = e;
        }, this)), this.length = e.length, this) : "string" == typeof e && i(e) ? s.call(this, r(e, this.options).children) : (t ? "string" == typeof t ? i(t) ? (t = r(t, this.options), 
        t = s.call(this, t)) : (e = [ t, e ].join(" "), t = this._root) : t.cheerio || (t = s.call(this, t)) : t = this._root, 
        t ? t.find(e) : this))) : this) : new s(e, t, n, a);
    };
    o.extend(s, n(369)), s.prototype.cheerio = "[cheerio object]", s.prototype.options = {
        withDomLvl1: !0,
        normalizeWhitespace: !1,
        xmlMode: !1,
        decodeEntities: !0
    }, s.prototype.length = 0, s.prototype.splice = Array.prototype.splice, s.prototype._make = function(e, t) {
        var n = new this.constructor(e, t, this._root, this.options);
        return n.prevObject = this, n;
    }, s.prototype.toArray = function() {
        return this.get();
    }, a.forEach(function(e) {
        o.extend(s.prototype, e);
    });
    var l = function(e) {
        return e.name || "text" === e.type || "comment" === e.type;
    };
}
