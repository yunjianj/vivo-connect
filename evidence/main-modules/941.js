// analysis/pretty/main.js:80168; webpack module 941
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    const r = n(13), i = n(19), o = {
        keyword: "contains",
        type: "array",
        schemaType: [ "object", "boolean" ],
        before: "uniqueItems",
        trackErrors: !0,
        error: {
            message: ({params: {min: e, max: t}}) => void 0 === t ? r.str`must contain at least ${e} valid item(s)` : r.str`must contain at least ${e} and no more than ${t} valid item(s)`,
            params: ({params: {min: e, max: t}}) => void 0 === t ? r._`{minContains: ${e}}` : r._`{minContains: ${e}, maxContains: ${t}}`
        },
        code(e) {
            const {gen: t, schema: n, parentSchema: o, data: a, it: s} = e;
            let l, c;
            const {minContains: u, maxContains: d} = o;
            s.opts.next ? (l = void 0 === u ? 1 : u, c = d) : l = 1;
            const h = t.const("len", r._`${a}.length`);
            if (e.setParams({
                min: l,
                max: c
            }), void 0 === c && 0 === l) return void (0, i.checkStrictMode)(s, '"minContains" == 0 without "maxContains": "contains" keyword ignored');
            if (void 0 !== c && l > c) return (0, i.checkStrictMode)(s, '"minContains" > "maxContains" is always invalid'), 
            void e.fail();
            if ((0, i.alwaysValidSchema)(s, n)) {
                let t = r._`${h} >= ${l}`;
                return void 0 !== c && (t = r._`${t} && ${h} <= ${c}`), void e.pass(t);
            }
            s.items = !0;
            const p = t.name("valid");
            function f() {
                const e = t.name("_valid"), n = t.let("count", 0);
                _(e, () => t.if(e, () => function(e) {
                    t.code(r._`${e}++`), void 0 === c ? t.if(r._`${e} >= ${l}`, () => t.assign(p, !0).break()) : (t.if(r._`${e} > ${c}`, () => t.assign(p, !1).break()), 
                    1 === l ? t.assign(p, !0) : t.if(r._`${e} >= ${l}`, () => t.assign(p, !0)));
                }(n)));
            }
            function _(n, r) {
                t.forRange("i", 0, h, t => {
                    e.subschema({
                        keyword: "contains",
                        dataProp: t,
                        dataPropType: i.Type.Num,
                        compositeRule: !0
                    }, n), r();
                });
            }
            void 0 === c && 1 === l ? _(p, () => t.if(p, () => t.break())) : 0 === l ? (t.let(p, !0), 
            void 0 !== c && t.if(r._`${a}.length > 0`, f)) : (t.let(p, !1), f()), e.result(p, () => e.reset());
        }
    };
    t.default = o;
}
