// analysis/pretty/main.js:42707; webpack module 404
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    const r = n(60), i = n(13), o = n(86), a = n(19), s = {
        keyword: "additionalProperties",
        type: [ "object" ],
        schemaType: [ "boolean", "object" ],
        allowUndefined: !0,
        trackErrors: !0,
        error: {
            message: "must NOT have additional properties",
            params: ({params: e}) => i._`{additionalProperty: ${e.additionalProperty}}`
        },
        code(e) {
            const {gen: t, schema: n, parentSchema: s, data: l, errsCount: c, it: u} = e;
            if (!c) throw new Error("ajv implementation error");
            const {allErrors: d, opts: h} = u;
            if (u.props = !0, "all" !== h.removeAdditional && (0, a.alwaysValidSchema)(u, n)) return;
            const p = (0, r.allSchemaProperties)(s.properties), f = (0, r.allSchemaProperties)(s.patternProperties);
            function _(e) {
                t.code(i._`delete ${l}[${e}]`);
            }
            function m(r) {
                if ("all" === h.removeAdditional || h.removeAdditional && !1 === n) _(r); else {
                    if (!1 === n) return e.setParams({
                        additionalProperty: r
                    }), e.error(), void (d || t.break());
                    if ("object" == typeof n && !(0, a.alwaysValidSchema)(u, n)) {
                        const n = t.name("valid");
                        "failing" === h.removeAdditional ? (g(r, n, !1), t.if((0, i.not)(n), () => {
                            e.reset(), _(r);
                        })) : (g(r, n), d || t.if((0, i.not)(n), () => t.break()));
                    }
                }
            }
            function g(t, n, r) {
                const i = {
                    keyword: "additionalProperties",
                    dataProp: t,
                    dataPropType: a.Type.Str
                };
                !1 === r && Object.assign(i, {
                    compositeRule: !0,
                    createErrors: !1,
                    allErrors: !1
                }), e.subschema(i, n);
            }
            t.forIn("key", l, n => {
                p.length || f.length ? t.if(function(n) {
                    let o;
                    if (p.length > 8) {
                        const e = (0, a.schemaRefOrVal)(u, s.properties, "properties");
                        o = (0, r.isOwnProperty)(t, e, n);
                    } else o = p.length ? (0, i.or)(...p.map(e => i._`${n} === ${e}`)) : i.nil;
                    return f.length && (o = (0, i.or)(o, ...f.map(t => i._`${(0, r.usePattern)(e, t)}.test(${n})`))), 
                    (0, i.not)(o);
                }(n), () => m(n)) : m(n);
            }), e.ok(i._`${c} === ${o.default.errors}`);
        }
    };
    t.default = s;
}
