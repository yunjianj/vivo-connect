// analysis/pretty/main.js:80071; webpack module 936
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    const r = n(13), i = n(19), o = n(258), a = {
        keyword: "const",
        $data: !0,
        error: {
            message: "must be equal to constant",
            params: ({schemaCode: e}) => r._`{allowedValue: ${e}}`
        },
        code(e) {
            const {gen: t, data: n, $data: a, schemaCode: s, schema: l} = e;
            a || l && "object" == typeof l ? e.fail$data(r._`!${(0, i.useFunc)(t, o.default)}(${n}, ${s})`) : e.fail(r._`${l} !== ${n}`);
        }
    };
    t.default = a;
}
