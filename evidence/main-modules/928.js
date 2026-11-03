// analysis/pretty/main.js:79847; webpack module 928
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    const r = n(13), i = {
        keyword: "multipleOf",
        type: "number",
        schemaType: "number",
        $data: !0,
        error: {
            message: ({schemaCode: e}) => r.str`must be multiple of ${e}`,
            params: ({schemaCode: e}) => r._`{multipleOf: ${e}}`
        },
        code(e) {
            const {gen: t, data: n, schemaCode: i, it: o} = e, a = o.opts.multipleOfPrecision, s = t.let("res"), l = a ? r._`Math.abs(Math.round(${s}) - ${s}) > 1e-${a}` : r._`${s} !== parseInt(${s})`;
            e.fail$data(r._`(${i} === 0 || (${s} = ${n}/${i}, ${l}))`);
        }
    };
    t.default = i;
}
