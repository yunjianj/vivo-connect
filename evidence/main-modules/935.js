// analysis/pretty/main.js:80028; webpack module 935
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    const r = n(193), i = n(13), o = n(19), a = n(258), s = {
        keyword: "uniqueItems",
        type: "array",
        schemaType: "boolean",
        $data: !0,
        error: {
            message: ({params: {i: e, j: t}}) => i.str`must NOT have duplicate items (items ## ${t} and ${e} are identical)`,
            params: ({params: {i: e, j: t}}) => i._`{i: ${e}, j: ${t}}`
        },
        code(e) {
            const {gen: t, data: n, $data: s, schema: l, parentSchema: c, schemaCode: u, it: d} = e;
            if (!s && !l) return;
            const h = t.let("valid"), p = c.items ? (0, r.getSchemaTypes)(c.items) : [];
            function f(o, a) {
                const s = t.name("item"), l = (0, r.checkDataTypes)(p, s, d.opts.strictNumbers, r.DataType.Wrong), c = t.const("indices", i._`{}`);
                t.for(i._`;${o}--;`, () => {
                    t.let(s, i._`${n}[${o}]`), t.if(l, i._`continue`), p.length > 1 && t.if(i._`typeof ${s} == "string"`, i._`${s} += "_"`), 
                    t.if(i._`typeof ${c}[${s}] == "number"`, () => {
                        t.assign(a, i._`${c}[${s}]`), e.error(), t.assign(h, !1).break();
                    }).code(i._`${c}[${s}] = ${o}`);
                });
            }
            function _(r, s) {
                const l = (0, o.useFunc)(t, a.default), c = t.name("outer");
                t.label(c).for(i._`;${r}--;`, () => t.for(i._`${s} = ${r}; ${s}--;`, () => t.if(i._`${l}(${n}[${r}], ${n}[${s}])`, () => {
                    e.error(), t.assign(h, !1).break(c);
                })));
            }
            e.block$data(h, function() {
                const r = t.let("i", i._`${n}.length`), o = t.let("j");
                e.setParams({
                    i: r,
                    j: o
                }), t.assign(h, !0), t.if(i._`${r} > 1`, () => (p.length > 0 && !p.some(e => "object" === e || "array" === e) ? f : _)(r, o));
            }, i._`${u} === false`), e.ok(h);
        }
    };
    t.default = s;
}
