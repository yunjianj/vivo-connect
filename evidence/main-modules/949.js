// analysis/pretty/main.js:80468; webpack module 949
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    const r = n(19), i = {
        keyword: "allOf",
        schemaType: "array",
        code(e) {
            const {gen: t, schema: n, it: i} = e;
            if (!Array.isArray(n)) throw new Error("ajv implementation error");
            const o = t.name("valid");
            n.forEach((t, n) => {
                if ((0, r.alwaysValidSchema)(i, t)) return;
                const a = e.subschema({
                    keyword: "allOf",
                    schemaProp: n
                }, o);
                e.ok(o), e.mergeEvaluated(a);
            });
        }
    };
    t.default = i;
}
