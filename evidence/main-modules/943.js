// analysis/pretty/main.js:80285; webpack module 943
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    const r = n(13), i = n(19), o = {
        keyword: "propertyNames",
        type: "object",
        schemaType: [ "object", "boolean" ],
        error: {
            message: "property name must be valid",
            params: ({params: e}) => r._`{propertyName: ${e.propertyName}}`
        },
        code(e) {
            const {gen: t, schema: n, data: o, it: a} = e;
            if ((0, i.alwaysValidSchema)(a, n)) return;
            const s = t.name("valid");
            t.forIn("key", o, n => {
                e.setParams({
                    propertyName: n
                }), e.subschema({
                    keyword: "propertyNames",
                    data: n,
                    dataTypes: [ "string" ],
                    propertyName: n,
                    compositeRule: !0
                }, s), t.if((0, r.not)(s), () => {
                    e.error(!0), a.allErrors || t.break();
                });
            }), e.ok(s);
        }
    };
    t.default = o;
}
