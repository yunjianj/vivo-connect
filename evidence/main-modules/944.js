// analysis/pretty/main.js:80318; webpack module 944
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    const r = n(190), i = n(60), o = n(19), a = n(404), s = {
        keyword: "properties",
        type: "object",
        schemaType: "object",
        code(e) {
            const {gen: t, schema: n, parentSchema: s, data: l, it: c} = e;
            "all" === c.opts.removeAdditional && void 0 === s.additionalProperties && a.default.code(new r.KeywordCxt(c, a.default, "additionalProperties"));
            const u = (0, i.allSchemaProperties)(n);
            for (const e of u) c.definedProperties.add(e);
            c.opts.unevaluated && u.length && !0 !== c.props && (c.props = o.mergeEvaluated.props(t, (0, 
            o.toHash)(u), c.props));
            const d = u.filter(e => !(0, o.alwaysValidSchema)(c, n[e]));
            if (0 === d.length) return;
            const h = t.name("valid");
            for (const n of d) p(n) ? f(n) : (t.if((0, i.propertyInData)(t, l, n, c.opts.ownProperties)), 
            f(n), c.allErrors || t.else().var(h, !0), t.endIf()), e.it.definedProperties.add(n), 
            e.ok(h);
            function p(e) {
                return c.opts.useDefaults && !c.compositeRule && void 0 !== n[e].default;
            }
            function f(t) {
                e.subschema({
                    keyword: "properties",
                    schemaProp: t,
                    dataProp: t
                }, h);
            }
        }
    };
    t.default = s;
}
