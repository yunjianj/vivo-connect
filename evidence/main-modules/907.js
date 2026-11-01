// analysis/pretty/main.js:78641; webpack module 907
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    const r = n(14), i = n(908), o = n(254), a = n(189), s = n(18), l = {
        keyword: "discriminator",
        type: "object",
        schemaType: "object",
        error: {
            message: ({params: {discrError: e, tagName: t}}) => e === i.DiscrError.Tag ? `tag "${t}" must be string` : `value of tag "${t}" must be in oneOf`,
            params: ({params: {discrError: e, tag: t, tagName: n}}) => r._`{error: ${e}, tag: ${n}, tagValue: ${t}}`
        },
        code(e) {
            const {gen: t, data: n, schema: l, parentSchema: c, it: u} = e, {oneOf: d} = c;
            if (!u.opts.discriminator) throw new Error("discriminator: requires discriminator option");
            const h = l.propertyName;
            if ("string" != typeof h) throw new Error("discriminator: requires propertyName");
            if (l.mapping) throw new Error("discriminator: mapping is not supported");
            if (!d) throw new Error("discriminator: requires oneOf keyword");
            const p = t.let("valid", !1), f = t.const("tag", r._`${n}${(0, r.getProperty)(h)}`);
            function _(n) {
                const i = t.name("valid"), o = e.subschema({
                    keyword: "oneOf",
                    schemaProp: n
                }, i);
                return e.mergeEvaluated(o, r.Name), i;
            }
            t.if(r._`typeof ${f} == "string"`, () => function() {
                const n = function() {
                    var e;
                    const t = {}, n = i(c);
                    let r = !0;
                    for (let t = 0; t < d.length; t++) {
                        let c = d[t];
                        if ((null == c ? void 0 : c.$ref) && !(0, s.schemaHasRulesButRef)(c, u.self.RULES)) {
                            const e = c.$ref;
                            if (c = o.resolveRef.call(u.self, u.schemaEnv.root, u.baseId, e), c instanceof o.SchemaEnv && (c = c.schema), 
                            void 0 === c) throw new a.default(u.opts.uriResolver, u.baseId, e);
                        }
                        const p = null === (e = null == c ? void 0 : c.properties) || void 0 === e ? void 0 : e[h];
                        if ("object" != typeof p) throw new Error(`discriminator: oneOf subschemas (or referenced schemas) must have "properties/${h}"`);
                        r = r && (n || i(c)), l(p, t);
                    }
                    if (!r) throw new Error(`discriminator: "${h}" must be required`);
                    return t;
                    function i({required: e}) {
                        return Array.isArray(e) && e.includes(h);
                    }
                    function l(e, t) {
                        if (e.const) p(e.const, t); else {
                            if (!e.enum) throw new Error(`discriminator: "properties/${h}" must have "const" or "enum"`);
                            for (const n of e.enum) p(n, t);
                        }
                    }
                    function p(e, n) {
                        if ("string" != typeof e || e in t) throw new Error(`discriminator: "${h}" values must be unique strings`);
                        t[e] = n;
                    }
                }();
                t.if(!1);
                for (const e in n) t.elseIf(r._`${f} === ${e}`), t.assign(p, _(n[e]));
                t.else(), e.error(!1, {
                    discrError: i.DiscrError.Mapping,
                    tag: f,
                    tagName: h
                }), t.endIf();
            }(), () => e.error(!1, {
                discrError: i.DiscrError.Tag,
                tag: f,
                tagName: h
            })), e.ok(p);
        }
    };
    t.default = l;
}
