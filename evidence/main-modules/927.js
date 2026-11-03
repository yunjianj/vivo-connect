// analysis/pretty/main.js:79806; webpack module 927
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    const r = n(13), i = r.operators, o = {
        maximum: {
            okStr: "<=",
            ok: i.LTE,
            fail: i.GT
        },
        minimum: {
            okStr: ">=",
            ok: i.GTE,
            fail: i.LT
        },
        exclusiveMaximum: {
            okStr: "<",
            ok: i.LT,
            fail: i.GTE
        },
        exclusiveMinimum: {
            okStr: ">",
            ok: i.GT,
            fail: i.LTE
        }
    }, a = {
        message: ({keyword: e, schemaCode: t}) => r.str`must be ${o[e].okStr} ${t}`,
        params: ({keyword: e, schemaCode: t}) => r._`{comparison: ${o[e].okStr}, limit: ${t}}`
    }, s = {
        keyword: Object.keys(o),
        type: "number",
        schemaType: "number",
        $data: !0,
        error: a,
        code(e) {
            const {keyword: t, data: n, schemaCode: i} = e;
            e.fail$data(r._`${n} ${o[t].fail} ${i} || isNaN(${n})`);
        }
    };
    t.default = s;
}
