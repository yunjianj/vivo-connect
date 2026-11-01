// analysis/pretty/main.js:42356; webpack module 397
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.validateTuple = void 0;
    const r = n(14), i = n(18), o = n(59), a = {
        keyword: "items",
        type: "array",
        schemaType: [ "object", "array", "boolean" ],
        before: "uniqueItems",
        code(e) {
            const {schema: t, it: n} = e;
            if (Array.isArray(t)) return s(e, "additionalItems", t);
            n.items = !0, (0, i.alwaysValidSchema)(n, t) || e.ok((0, o.validateArray)(e));
        }
    };
    function s(e, t, n = e.schema) {
        const {gen: o, parentSchema: a, data: s, keyword: l, it: c} = e;
        !function(e) {
            const {opts: r, errSchemaPath: o} = c, a = n.length, s = a === e.minItems && (a === e.maxItems || !1 === e[t]);
            if (r.strictTuples && !s) {
                const e = `"${l}" is ${a}-tuple, but minItems or maxItems/${t} are not specified or different at path "${o}"`;
                (0, i.checkStrictMode)(c, e, r.strictTuples);
            }
        }(a), c.opts.unevaluated && n.length && !0 !== c.items && (c.items = i.mergeEvaluated.items(o, n.length, c.items));
        const u = o.name("valid"), d = o.const("len", r._`${s}.length`);
        n.forEach((t, n) => {
            (0, i.alwaysValidSchema)(c, t) || (o.if(r._`${d} > ${n}`, () => e.subschema({
                keyword: l,
                schemaProp: n,
                dataProp: n
            }, u)), e.ok(u));
        });
    }
    t.validateTuple = s, t.default = a;
}
