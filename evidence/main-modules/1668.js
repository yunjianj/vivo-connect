// analysis/pretty/main.js:127241; webpack module 1668
function(e, t, n) {
    var r = n(245), i = n(369), o = r.update, a = r.evaluate, s = n(171), l = s.domEach, c = s.cloneDom, u = s.isHtml, d = Array.prototype.slice, h = {
        flatten: n(276),
        bind: n(368),
        forEach: n(246)
    };
    t._makeDomArray = function(e, t) {
        return null == e ? [] : e.cheerio ? t ? c(e.get(), e.options) : e.get() : Array.isArray(e) ? h.flatten(e.map(function(e) {
            return this._makeDomArray(e, t);
        }, this)) : "string" == typeof e ? a(e, this.options) : t ? c([ e ]) : [ e ];
    };
    var p = function(e) {
        return function() {
            var t = d.call(arguments), n = this.length - 1;
            return l(this, function(r, o) {
                var a, s;
                s = "function" == typeof t[0] ? t[0].call(o, r, i.html(o.children)) : t, a = this._makeDomArray(s, r < n), 
                e(a, o.children, o);
            });
        };
    }, f = function(e, t, n, r, i) {
        var o, a, s, l, c, u = [ t, n ].concat(r), d = e[t - 1] || null, h = e[t] || null;
        for (o = 0, a = r.length; o < a; ++o) s = (c = (l = r[o]).parent || l.root) && c.children.indexOf(r[o]), 
        c && s > -1 && (c.children.splice(s, 1), i === c && t > s && u[0]--), l.root = null, 
        l.parent = i, l.prev && (l.prev.next = l.next || null), l.next && (l.next.prev = l.prev || null), 
        l.prev = r[o - 1] || d, l.next = r[o + 1] || h;
        return d && (d.next = r[0]), h && (h.prev = r[r.length - 1]), e.splice.apply(e, u);
    };
    t.appendTo = function(e) {
        return e.cheerio || (e = this.constructor.call(this.constructor, e, null, this._originalRoot)), 
        e.append(this), this;
    }, t.prependTo = function(e) {
        return e.cheerio || (e = this.constructor.call(this.constructor, e, null, this._originalRoot)), 
        e.prepend(this), this;
    }, t.append = p(function(e, t, n) {
        f(t, t.length, 0, e, n);
    }), t.prepend = p(function(e, t, n) {
        f(t, 0, 0, e, n);
    }), t.wrap = function(e) {
        var t = "function" == typeof e && e, n = this.length - 1;
        return h.forEach(this, h.bind(function(r, i) {
            var a, s, l = r.parent || r.root, c = l.children;
            l && (t && (e = t.call(r, i)), "string" != typeof e || u(e) || (e = this.parents().last().find(e).clone()), 
            a = this._makeDomArray(e, i < n).slice(0, 1), s = c.indexOf(r), o([ r ], a[0]), 
            f(c, s, 0, a, l));
        }, this)), this;
    }, t.after = function() {
        var e = d.call(arguments), t = this.length - 1;
        return l(this, function(n, r) {
            var o = r.parent || r.root;
            if (o) {
                var a, s, l = o.children, c = l.indexOf(r);
                c < 0 || (a = "function" == typeof e[0] ? e[0].call(r, n, i.html(r.children)) : e, 
                s = this._makeDomArray(a, n < t), f(l, c + 1, 0, s, o));
            }
        }), this;
    }, t.insertAfter = function(e) {
        var t = [], n = this;
        return "string" == typeof e && (e = this.constructor.call(this.constructor, e, null, this._originalRoot)), 
        e = this._makeDomArray(e), n.remove(), l(e, function(e, r) {
            var i = n._makeDomArray(n.clone()), o = r.parent || r.root;
            if (o) {
                var a = o.children, s = a.indexOf(r);
                s < 0 || (f(a, s + 1, 0, i, o), t.push(i));
            }
        }), this.constructor.call(this.constructor, this._makeDomArray(t));
    }, t.before = function() {
        var e = d.call(arguments), t = this.length - 1;
        return l(this, function(n, r) {
            var o = r.parent || r.root;
            if (o) {
                var a, s, l = o.children, c = l.indexOf(r);
                c < 0 || (a = "function" == typeof e[0] ? e[0].call(r, n, i.html(r.children)) : e, 
                s = this._makeDomArray(a, n < t), f(l, c, 0, s, o));
            }
        }), this;
    }, t.insertBefore = function(e) {
        var t = [], n = this;
        return "string" == typeof e && (e = this.constructor.call(this.constructor, e, null, this._originalRoot)), 
        e = this._makeDomArray(e), n.remove(), l(e, function(e, r) {
            var i = n._makeDomArray(n.clone()), o = r.parent || r.root;
            if (o) {
                var a = o.children, s = a.indexOf(r);
                s < 0 || (f(a, s, 0, i, o), t.push(i));
            }
        }), this.constructor.call(this.constructor, this._makeDomArray(t));
    }, t.remove = function(e) {
        var t = this;
        return e && (t = t.filter(e)), l(t, function(e, t) {
            var n = t.parent || t.root;
            if (n) {
                var r = n.children, i = r.indexOf(t);
                i < 0 || (r.splice(i, 1), t.prev && (t.prev.next = t.next), t.next && (t.next.prev = t.prev), 
                t.prev = t.next = t.parent = t.root = null);
            }
        }), this;
    }, t.replaceWith = function(e) {
        var t = this;
        return l(this, function(n, r) {
            var i = r.parent || r.root;
            if (i) {
                var a, s = i.children, l = t._makeDomArray("function" == typeof e ? e.call(r, n, r) : e);
                o(l, null), a = s.indexOf(r), f(s, a, 1, l, i), r.parent = r.prev = r.next = r.root = null;
            }
        }), this;
    }, t.empty = function() {
        return l(this, function(e, t) {
            h.forEach(t.children, function(e) {
                e.next = e.prev = e.parent = null;
            }), t.children.length = 0;
        }), this;
    }, t.html = function(e) {
        if (void 0 === e) return this[0] && this[0].children ? i.html(this[0].children, this.options) : null;
        var t = this.options;
        return l(this, function(n, r) {
            h.forEach(r.children, function(e) {
                e.next = e.prev = e.parent = null;
            });
            var i = e.cheerio ? e.clone().get() : a("" + e, t);
            o(i, r);
        }), this;
    }, t.toString = function() {
        return i.html(this, this.options);
    }, t.text = function(e) {
        return void 0 === e ? i.text(this) : "function" == typeof e ? l(this, function(n, r) {
            var o = [ r ];
            return t.text.call(o, e.call(r, n, i.text(o)));
        }) : (l(this, function(t, n) {
            h.forEach(n.children, function(e) {
                e.next = e.prev = e.parent = null;
            }), o({
                data: "" + e,
                type: "text",
                parent: n,
                prev: null,
                next: null,
                children: []
            }, n);
        }), this);
    }, t.clone = function() {
        return this._make(c(this.get(), this.options));
    };
}
