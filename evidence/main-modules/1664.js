// analysis/pretty/main.js:125572; webpack module 1664
function(e, t, n) {
    var r = n(783), i = n(171), o = i.domEach, a = n(170).DomUtils.uniqueSort, s = i.isTag, l = {
        bind: n(368),
        forEach: n(246),
        reject: n(1665),
        filter: n(1666),
        reduce: n(1667)
    };
    t.find = function(e) {
        var t, n = l.reduce(this, function(e, t) {
            return e.concat(l.filter(t.children, s));
        }, []), i = this.constructor.contains;
        if (e && "string" != typeof e) return t = e.cheerio ? e.get() : [ e ], this._make(t.filter(function(e) {
            var t, n;
            for (t = 0, n = this.length; t < n; ++t) if (i(this[t], e)) return !0;
        }, this));
        var o = {
            __proto__: this.options,
            context: this.toArray()
        };
        return this._make(r(e, n, o));
    }, t.parent = function(e) {
        var n = [];
        return o(this, function(e, t) {
            var r = t.parent;
            r && n.indexOf(r) < 0 && n.push(r);
        }), arguments.length && (n = t.filter.call(n, e, this)), this._make(n);
    }, t.parents = function(e) {
        var t = [];
        return this.get().reverse().forEach(function(n) {
            u(this, n.parent, e, 1 / 0).forEach(function(e) {
                -1 === t.indexOf(e) && t.push(e);
            });
        }, this), this._make(t);
    }, t.parentsUntil = function(e, t) {
        var n, i, o = [];
        return "string" == typeof e ? n = r(e, this.parents().toArray(), this.options)[0] : e && e.cheerio ? i = e.toArray() : e && (n = e), 
        this.toArray().reverse().forEach(function(e) {
            for (;(e = e.parent) && (n && e !== n || i && -1 === i.indexOf(e) || !n && !i); ) s(e) && -1 === o.indexOf(e) && o.push(e);
        }, this), this._make(t ? r(t, o, this.options) : o);
    }, t.closest = function(e) {
        var t = [];
        return e ? (o(this, function(n, r) {
            var i = u(this, r, e, 1)[0];
            i && t.indexOf(i) < 0 && t.push(i);
        }.bind(this)), this._make(t)) : this._make(t);
    }, t.next = function(e) {
        if (!this[0]) return this;
        var n = [];
        return l.forEach(this, function(e) {
            for (;e = e.next; ) if (s(e)) return void n.push(e);
        }), e ? t.filter.call(n, e, this) : this._make(n);
    }, t.nextAll = function(e) {
        if (!this[0]) return this;
        var n = [];
        return l.forEach(this, function(e) {
            for (;e = e.next; ) s(e) && -1 === n.indexOf(e) && n.push(e);
        }), e ? t.filter.call(n, e, this) : this._make(n);
    }, t.nextUntil = function(e, n) {
        if (!this[0]) return this;
        var i, o, a = [];
        return "string" == typeof e ? i = r(e, this.nextAll().get(), this.options)[0] : e && e.cheerio ? o = e.get() : e && (i = e), 
        l.forEach(this, function(e) {
            for (;(e = e.next) && (i && e !== i || o && -1 === o.indexOf(e) || !i && !o); ) s(e) && -1 === a.indexOf(e) && a.push(e);
        }), n ? t.filter.call(a, n, this) : this._make(a);
    }, t.prev = function(e) {
        if (!this[0]) return this;
        var n = [];
        return l.forEach(this, function(e) {
            for (;e = e.prev; ) if (s(e)) return void n.push(e);
        }), e ? t.filter.call(n, e, this) : this._make(n);
    }, t.prevAll = function(e) {
        if (!this[0]) return this;
        var n = [];
        return l.forEach(this, function(e) {
            for (;e = e.prev; ) s(e) && -1 === n.indexOf(e) && n.push(e);
        }), e ? t.filter.call(n, e, this) : this._make(n);
    }, t.prevUntil = function(e, n) {
        if (!this[0]) return this;
        var i, o, a = [];
        return "string" == typeof e ? i = r(e, this.prevAll().get(), this.options)[0] : e && e.cheerio ? o = e.get() : e && (i = e), 
        l.forEach(this, function(e) {
            for (;(e = e.prev) && (i && e !== i || o && -1 === o.indexOf(e) || !i && !o); ) s(e) && -1 === a.indexOf(e) && a.push(e);
        }), n ? t.filter.call(a, n, this) : this._make(a);
    }, t.siblings = function(e) {
        var n = this.parent(), r = l.filter(n ? n.children() : this.siblingsAndMe(), l.bind(function(e) {
            return s(e) && !this.is(e);
        }, this));
        return void 0 !== e ? t.filter.call(r, e, this) : this._make(r);
    }, t.children = function(e) {
        var n = l.reduce(this, function(e, t) {
            return e.concat(l.filter(t.children, s));
        }, []);
        return void 0 === e ? this._make(n) : t.filter.call(n, e, this);
    }, t.contents = function() {
        return this._make(l.reduce(this, function(e, t) {
            return e.push.apply(e, t.children), e;
        }, []));
    }, t.each = function(e) {
        for (var t = 0, n = this.length; t < n && !1 !== e.call(this[t], t, this[t]); ) ++t;
        return this;
    }, t.map = function(e) {
        return this._make(l.reduce(this, function(t, n, r) {
            var i = e.call(n, r, n);
            return null == i ? t : t.concat(i);
        }, []));
    };
    var c = function(e) {
        return function(t, n) {
            var i;
            return n = n || this, i = "string" == typeof t ? r.compile(t, n.options) : "function" == typeof t ? function(e, n) {
                return t.call(e, n, e);
            } : t.cheerio ? t.is.bind(t) : function(e) {
                return t === e;
            }, n._make(e(this, i));
        };
    };
    function u(e, n, r, i) {
        for (var o = []; n && o.length < i; ) r && !t.filter.call([ n ], r, e).length || o.push(n), 
        n = n.parent;
        return o;
    }
    t.filter = c(l.filter), t.not = c(l.reject), t.has = function(e) {
        var n = this;
        return t.filter.call(this, function() {
            return n._make(this).find(e).length > 0;
        });
    }, t.first = function() {
        return this.length > 1 ? this._make(this[0]) : this;
    }, t.last = function() {
        return this.length > 1 ? this._make(this[this.length - 1]) : this;
    }, t.eq = function(e) {
        return 0 === (e = +e) && this.length <= 1 ? this : (e < 0 && (e = this.length + e), 
        this[e] ? this._make(this[e]) : this._make([]));
    }, t.get = function(e) {
        return null == e ? Array.prototype.slice.call(this) : this[e < 0 ? this.length + e : e];
    }, t.index = function(e) {
        var t, n;
        return 0 === arguments.length ? (t = this.parent().children(), n = this[0]) : "string" == typeof e ? (t = this._make(e), 
        n = this[0]) : (t = this, n = e.cheerio ? e[0] : e), t.get().indexOf(n);
    }, t.slice = function() {
        return this._make([].slice.apply(this, arguments));
    }, t.end = function() {
        return this.prevObject || this._make([]);
    }, t.add = function(e, t) {
        for (var n = this._make(e, t), r = a(n.get().concat(this.get())), i = 0; i < r.length; ++i) n[i] = r[i];
        return n.length = r.length, n;
    }, t.addBack = function(e) {
        return this.add(arguments.length ? this.prevObject.filter(e) : this.prevObject);
    };
}
