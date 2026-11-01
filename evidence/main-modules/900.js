// analysis/pretty/main.js:78448; webpack module 900
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    const r = n(14), i = n(18), o = {
        keyword: "oneOf",
        schemaType: "array",
        trackErrors: !0,
        error: {
            message: "must match exactly one schema in oneOf",
            params: ({params: e}) => r._`{passingSchemas: ${e.passing}}`
        },
        code(e) {
            const {gen: t, schema: n, parentSchema: o, it: a} = e;
            if (!Array.isArray(n)) throw new Error("ajv implementation error");
            if (a.opts.discriminator && o.discriminator) return;
            const s = n, l = t.let("valid", !1), c = t.let("passing", null), u = t.name("_valid");
            e.setParams({
                passing: c
            }), t.block(function() {
                s.forEach((n, o) => {
                    let s;
                    (0, i.alwaysValidSchema)(a, n) ? t.var(u, !0) : s = e.subschema({
                        keyword: "oneOf",
                        schemaProp: o,
                        compositeRule: !0
                    }, u), o > 0 && t.if(r._`${u} && ${l}`).assign(l, !1).assign(c, r._`[${c}, ${o}]`).else(), 
                    t.if(u, () => {
                        t.assign(l, !0), t.assign(c, o), s && e.mergeEvaluated(s, r.Name);
                    });
                });
            }), e.result(l, () => e.reset(), () => e.error(!0));
        }
    };
    t.default = o;
}
