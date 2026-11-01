// analysis/pretty/main.js:80353; webpack module 945
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    const r = n(60), i = n(13), o = n(19), a = n(19), s = {
        keyword: "patternProperties",
        type: "object",
        schemaType: "object",
        code(e) {
            const {gen: t, schema: n, data: s, parentSchema: l, it: c} = e, {opts: u} = c, d = (0, 
            r.allSchemaProperties)(n), h = d.filter(e => (0, o.alwaysValidSchema)(c, n[e]));
            if (0 === d.length || h.length === d.length && (!c.opts.unevaluated || !0 === c.props)) return;
            const p = u.strictSchema && !u.allowMatchingProperties && l.properties, f = t.name("valid");
            !0 === c.props || c.props instanceof i.Name || (c.props = (0, a.evaluatedPropsToName)(t, c.props));
            const {props: _} = c;
            function m(e) {
                for (const t in p) new RegExp(e).test(t) && (0, o.checkStrictMode)(c, `property ${t} matches pattern ${e} (use allowMatchingProperties)`);
            }
            function g(n) {
                t.forIn("key", s, o => {
                    t.if(i._`${(0, r.usePattern)(e, n)}.test(${o})`, () => {
                        const r = h.includes(n);
                        r || e.subschema({
                            keyword: "patternProperties",
                            schemaProp: n,
                            dataProp: o,
                            dataPropType: a.Type.Str
                        }, f), c.opts.unevaluated && !0 !== _ ? t.assign(i._`${_}[${o}]`, !0) : r || c.allErrors || t.if((0, 
                        i.not)(f), () => t.break());
                    });
                });
            }
            !function() {
                for (const e of d) p && m(e), c.allErrors ? g(e) : (t.var(f, !0), g(e), t.if(f));
            }();
        }
    };
    t.default = s;
}
