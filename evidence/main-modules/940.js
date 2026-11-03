// analysis/pretty/main.js:80147; webpack module 940
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    const r = n(13), i = n(19), o = n(60), a = n(402), s = {
        keyword: "items",
        type: "array",
        schemaType: [ "object", "boolean" ],
        before: "uniqueItems",
        error: {
            message: ({params: {len: e}}) => r.str`must NOT have more than ${e} items`,
            params: ({params: {len: e}}) => r._`{limit: ${e}}`
        },
        code(e) {
            const {schema: t, parentSchema: n, it: r} = e, {prefixItems: s} = n;
            r.items = !0, (0, i.alwaysValidSchema)(r, t) || (s ? (0, a.validateAdditionalItems)(e, s) : e.ok((0, 
            o.validateArray)(e)));
        }
    };
    t.default = s;
}
