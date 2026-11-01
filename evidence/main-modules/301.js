// analysis/pretty/main.js:33641; webpack module 301
function(e, t, n) {
    "use strict";
    var r = n(1205), i = n(99), o = n(130), a = n(640), s = n(1207);
    function l(e, t, n) {
        var r = this._refs[n];
        if ("string" == typeof r) {
            if (!this._refs[r]) return l.call(this, e, t, r);
            r = this._refs[r];
        }
        if ((r = r || this._schemas[n]) instanceof a) return f(r.schema, this._opts.inlineRefs) ? r.schema : r.validate || this._compile(r);
        var i, o, s, u = c.call(this, t, n);
        return u && (i = u.schema, t = u.root, s = u.baseId), i instanceof a ? o = i.validate || e.call(this, i.schema, t, void 0, s) : void 0 !== i && (o = f(i, this._opts.inlineRefs) ? i : e.call(this, i, t, void 0, s)), 
        o;
    }
    function c(e, t) {
        var n = r.parse(t), i = m(n), o = _(this._getId(e.schema));
        if (0 === Object.keys(e.schema).length || i !== o) {
            var s = v(i), l = this._refs[s];
            if ("string" == typeof l) return u.call(this, e, l, n);
            if (l instanceof a) l.validate || this._compile(l), e = l; else {
                if (!((l = this._schemas[s]) instanceof a)) return;
                if (l.validate || this._compile(l), s == v(t)) return {
                    schema: l,
                    root: e,
                    baseId: o
                };
                e = l;
            }
            if (!e.schema) return;
            o = _(this._getId(e.schema));
        }
        return h.call(this, n, o, e.schema, e);
    }
    function u(e, t, n) {
        var r = c.call(this, e, t);
        if (r) {
            var i = r.schema, o = r.baseId;
            e = r.root;
            var a = this._getId(i);
            return a && (o = y(o, a)), h.call(this, n, o, i, e);
        }
    }
    e.exports = l, l.normalizeId = v, l.fullPath = _, l.url = y, l.ids = function(e) {
        var t = v(this._getId(e)), n = {
            "": t
        }, a = {
            "": _(t, !1)
        }, l = {}, c = this;
        return s(e, {
            allKeys: !0
        }, function(e, t, s, u, d, h, p) {
            if ("" !== t) {
                var f = c._getId(e), _ = n[u], m = a[u] + "/" + d;
                if (void 0 !== p && (m += "/" + ("number" == typeof p ? p : o.escapeFragment(p))), 
                "string" == typeof f) {
                    f = _ = v(_ ? r.resolve(_, f) : f);
                    var g = c._refs[f];
                    if ("string" == typeof g && (g = c._refs[g]), g && g.schema) {
                        if (!i(e, g.schema)) throw new Error('id "' + f + '" resolves to more than one schema');
                    } else if (f != v(m)) if ("#" == f[0]) {
                        if (l[f] && !i(e, l[f])) throw new Error('id "' + f + '" resolves to more than one schema');
                        l[f] = e;
                    } else c._refs[f] = m;
                }
                n[t] = _, a[t] = m;
            }
        }), l;
    }, l.inlineRef = f, l.schema = c;
    var d = o.toHash([ "properties", "patternProperties", "enum", "dependencies", "definitions" ]);
    function h(e, t, n, r) {
        if (e.fragment = e.fragment || "", "/" == e.fragment.slice(0, 1)) {
            for (var i = e.fragment.split("/"), a = 1; a < i.length; a++) {
                var s = i[a];
                if (s) {
                    if (void 0 === (n = n[s = o.unescapeFragment(s)])) break;
                    var l;
                    if (!d[s] && ((l = this._getId(n)) && (t = y(t, l)), n.$ref)) {
                        var u = y(t, n.$ref), h = c.call(this, r, u);
                        h && (n = h.schema, r = h.root, t = h.baseId);
                    }
                }
            }
            return void 0 !== n && n !== r.schema ? {
                schema: n,
                root: r,
                baseId: t
            } : void 0;
        }
    }
    var p = o.toHash([ "type", "format", "pattern", "maxLength", "minLength", "maxProperties", "minProperties", "maxItems", "minItems", "maximum", "minimum", "uniqueItems", "multipleOf", "required", "enum" ]);
    function f(e, t) {
        return !1 !== t && (void 0 === t || !0 === t ? function e(t) {
            var n;
            if (Array.isArray(t)) {
                for (var r = 0; r < t.length; r++) if ("object" == typeof (n = t[r]) && !e(n)) return !1;
            } else for (var i in t) {
                if ("$ref" == i) return !1;
                if ("object" == typeof (n = t[i]) && !e(n)) return !1;
            }
            return !0;
        }(e) : t ? function e(t) {
            var n, r = 0;
            if (Array.isArray(t)) {
                for (var i = 0; i < t.length; i++) if ("object" == typeof (n = t[i]) && (r += e(n)), 
                r == 1 / 0) return 1 / 0;
            } else for (var o in t) {
                if ("$ref" == o) return 1 / 0;
                if (p[o]) r++; else if ("object" == typeof (n = t[o]) && (r += e(n) + 1), r == 1 / 0) return 1 / 0;
            }
            return r;
        }(e) <= t : void 0);
    }
    function _(e, t) {
        return !1 !== t && (e = v(e)), m(r.parse(e));
    }
    function m(e) {
        return r.serialize(e).split("#")[0] + "#";
    }
    var g = /#\/?$/;
    function v(e) {
        return e ? e.replace(g, "") : "";
    }
    function y(e, t) {
        return t = v(t), r.resolve(e, t);
    }
}
