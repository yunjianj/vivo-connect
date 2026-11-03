// analysis/pretty/main.js:79867; webpack module 929
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    const r = n(13), i = n(19), o = n(930), a = {
        keyword: [ "maxLength", "minLength" ],
        type: "string",
        schemaType: "number",
        $data: !0,
        error: {
            message({keyword: e, schemaCode: t}) {
                const n = "maxLength" === e ? "more" : "fewer";
                return r.str`must NOT have ${n} than ${t} characters`;
            },
            params: ({schemaCode: e}) => r._`{limit: ${e}}`
        },
        code(e) {
            const {keyword: t, data: n, schemaCode: a, it: s} = e, l = "maxLength" === t ? r.operators.GT : r.operators.LT, c = !1 === s.opts.unicode ? r._`${n}.length` : r._`${(0, 
            i.useFunc)(e.gen, o.default)}(${n})`;
            e.fail$data(r._`${c} ${l} ${a}`);
        }
    };
    t.default = a;
}
