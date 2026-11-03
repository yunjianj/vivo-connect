// analysis/pretty/main.js:78408; webpack module 898
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    const r = n(18), i = {
        keyword: "not",
        schemaType: [ "object", "boolean" ],
        trackErrors: !0,
        code(e) {
            const {gen: t, schema: n, it: i} = e;
            if ((0, r.alwaysValidSchema)(i, n)) return void e.fail();
            const o = t.name("valid");
            e.subschema({
                keyword: "not",
                compositeRule: !0,
                createErrors: !1,
                allErrors: !1
            }, o), e.failResult(o, () => e.reset(), () => e.error());
        },
        error: {
            message: "must NOT be valid"
        }
    };
    t.default = i;
}
