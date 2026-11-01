// analysis/pretty/main.js:78105; webpack module 889
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    const r = n(14), i = n(18), o = n(255), a = {
        keyword: "enum",
        schemaType: "array",
        $data: !0,
        error: {
            message: "must be equal to one of the allowed values",
            params: ({schemaCode: e}) => r._`{allowedValues: ${e}}`
        },
        code(e) {
            const {gen: t, data: n, $data: a, schema: s, schemaCode: l, it: c} = e;
            if (!a && 0 === s.length) throw new Error("enum must have non-empty array");
            const u = s.length >= c.opts.loopEnum;
            let d;
            const h = () => null != d ? d : d = (0, i.useFunc)(t, o.default);
            let p;
            if (u || a) p = t.let("valid"), e.block$data(p, function() {
                t.assign(p, !1), t.forOf("v", l, e => t.if(r._`${h()}(${n}, ${e})`, () => t.assign(p, !0).break()));
            }); else {
                if (!Array.isArray(s)) throw new Error("ajv implementation error");
                const e = t.const("vSchema", l);
                p = (0, r.or)(...s.map((t, i) => function(e, t) {
                    const i = s[t];
                    return "object" == typeof i && null !== i ? r._`${h()}(${n}, ${e}[${t}])` : r._`${n} === ${i}`;
                }(e, i)));
            }
            e.pass(p);
        }
    };
    t.default = a;
}
