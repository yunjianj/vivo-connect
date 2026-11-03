// analysis/pretty/main.js:24988; webpack module 188
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.getSchemaRefs = t.resolveUrl = t.normalizeId = t._getFullPath = t.getFullPath = t.inlineRef = void 0;
    const r = n(18), i = n(99), o = n(870), a = new Set([ "type", "format", "pattern", "maxLength", "minLength", "maxProperties", "minProperties", "maxItems", "minItems", "maximum", "minimum", "uniqueItems", "multipleOf", "required", "enum", "const" ]);
    t.inlineRef = function(e, t = !0) {
        return "boolean" == typeof e || (!0 === t ? !l(e) : !!t && function e(t) {
            let n = 0;
            for (const i in t) {
                if ("$ref" === i) return 1 / 0;
                if (n++, !a.has(i) && ("object" == typeof t[i] && (0, r.eachItem)(t[i], t => n += e(t)), 
                n === 1 / 0)) return 1 / 0;
            }
            return n;
        }(e) <= t);
    };
    const s = new Set([ "$ref", "$recursiveRef", "$recursiveAnchor", "$dynamicRef", "$dynamicAnchor" ]);
    function l(e) {
        for (const t in e) {
            if (s.has(t)) return !0;
            const n = e[t];
            if (Array.isArray(n) && n.some(l)) return !0;
            if ("object" == typeof n && l(n)) return !0;
        }
        return !1;
    }
    function c(e, t = "", n) {
        !1 !== n && (t = h(t));
        const r = e.parse(t);
        return u(e, r);
    }
    function u(e, t) {
        return e.serialize(t).split("#")[0] + "#";
    }
    t.getFullPath = c, t._getFullPath = u;
    const d = /#\/?$/;
    function h(e) {
        return e ? e.replace(d, "") : "";
    }
    t.normalizeId = h, t.resolveUrl = function(e, t, n) {
        return n = h(n), e.resolve(t, n);
    };
    const p = /^[a-z_][-a-z0-9._]*$/i;
    t.getSchemaRefs = function(e, t) {
        if ("boolean" == typeof e) return {};
        const {schemaId: n, uriResolver: r} = this.opts, a = h(e[n] || t), s = {
            "": a
        }, l = c(r, a, !1), u = {}, d = new Set;
        return o(e, {
            allKeys: !0
        }, (e, t, r, i) => {
            if (void 0 === i) return;
            const o = l + t;
            let a = s[i];
            function c(t) {
                const n = this.opts.uriResolver.resolve;
                if (t = h(a ? n(a, t) : t), d.has(t)) throw _(t);
                d.add(t);
                let r = this.refs[t];
                return "string" == typeof r && (r = this.refs[r]), "object" == typeof r ? f(e, r.schema, t) : t !== h(o) && ("#" === t[0] ? (f(e, u[t], t), 
                u[t] = e) : this.refs[t] = o), t;
            }
            function m(e) {
                if ("string" == typeof e) {
                    if (!p.test(e)) throw new Error(`invalid anchor "${e}"`);
                    c.call(this, "#" + e);
                }
            }
            "string" == typeof e[n] && (a = c.call(this, e[n])), m.call(this, e.$anchor), m.call(this, e.$dynamicAnchor), 
            s[t] = a;
        }), u;
        function f(e, t, n) {
            if (void 0 !== t && !i(e, t)) throw _(n);
        }
        function _(e) {
            return new Error(`reference "${e}" resolves to more than one schema`);
        }
    };
}
