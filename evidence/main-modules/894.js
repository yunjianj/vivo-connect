// analysis/pretty/main.js:78239; webpack module 894
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.validateSchemaDeps = t.validatePropertyDeps = t.error = void 0;
    const r = n(14), i = n(18), o = n(59);
    t.error = {
        message: ({params: {property: e, depsCount: t, deps: n}}) => {
            const i = 1 === t ? "property" : "properties";
            return r.str`must have ${i} ${n} when property ${e} is present`;
        },
        params: ({params: {property: e, depsCount: t, deps: n, missingProperty: i}}) => r._`{property: ${e},
    missingProperty: ${i},
    depsCount: ${t},
    deps: ${n}}`
    };
    const a = {
        keyword: "dependencies",
        type: "object",
        schemaType: "object",
        error: t.error,
        code(e) {
            const [t, n] = function({schema: e}) {
                const t = {}, n = {};
                for (const r in e) {
                    if ("__proto__" === r) continue;
                    (Array.isArray(e[r]) ? t : n)[r] = e[r];
                }
                return [ t, n ];
            }(e);
            s(e, t), l(e, n);
        }
    };
    function s(e, t = e.schema) {
        const {gen: n, data: i, it: a} = e;
        if (0 === Object.keys(t).length) return;
        const s = n.let("missing");
        for (const l in t) {
            const c = t[l];
            if (0 === c.length) continue;
            const u = (0, o.propertyInData)(n, i, l, a.opts.ownProperties);
            e.setParams({
                property: l,
                depsCount: c.length,
                deps: c.join(", ")
            }), a.allErrors ? n.if(u, () => {
                for (const t of c) (0, o.checkReportMissingProp)(e, t);
            }) : (n.if(r._`${u} && (${(0, o.checkMissingProp)(e, c, s)})`), (0, o.reportMissingProp)(e, s), 
            n.else());
        }
    }
    function l(e, t = e.schema) {
        const {gen: n, data: r, keyword: a, it: s} = e, l = n.name("valid");
        for (const c in t) (0, i.alwaysValidSchema)(s, t[c]) || (n.if((0, o.propertyInData)(n, r, c, s.opts.ownProperties), () => {
            const t = e.subschema({
                keyword: a,
                schemaProp: c
            }, l);
            e.mergeValidEvaluated(t, l);
        }, () => n.var(l, !0)), e.ok(l));
    }
    t.validatePropertyDeps = s, t.validateSchemaDeps = l, t.default = a;
}
