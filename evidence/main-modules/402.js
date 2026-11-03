// analysis/pretty/main.js:42633; webpack module 402
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.validateAdditionalItems = void 0;
    const r = n(13), i = n(19), o = {
        keyword: "additionalItems",
        type: "array",
        schemaType: [ "boolean", "object" ],
        before: "uniqueItems",
        error: {
            message: ({params: {len: e}}) => r.str`must NOT have more than ${e} items`,
            params: ({params: {len: e}}) => r._`{limit: ${e}}`
        },
        code(e) {
            const {parentSchema: t, it: n} = e, {items: r} = t;
            Array.isArray(r) ? a(e, r) : (0, i.checkStrictMode)(n, '"additionalItems" is ignored when "items" is not an array of schemas');
        }
    };
    function a(e, t) {
        const {gen: n, schema: o, data: a, keyword: s, it: l} = e;
        l.items = !0;
        const c = n.const("len", r._`${a}.length`);
        if (!1 === o) e.setParams({
            len: t.length
        }), e.pass(r._`${c} <= ${t.length}`); else if ("object" == typeof o && !(0, i.alwaysValidSchema)(l, o)) {
            const o = n.var("valid", r._`${c} <= ${t.length}`);
            n.if((0, r.not)(o), () => function(o) {
                n.forRange("i", t.length, c, t => {
                    e.subschema({
                        keyword: s,
                        dataProp: t,
                        dataPropType: i.Type.Num
                    }, o), l.allErrors || n.if((0, r.not)(o), () => n.break());
                });
            }(o)), e.ok(o);
        }
    }
    t.validateAdditionalItems = a, t.default = o;
}
