// analysis/pretty/main.js:78578; webpack module 905
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    const r = n(14), i = {
        keyword: "format",
        type: [ "number", "string" ],
        schemaType: "string",
        $data: !0,
        error: {
            message: ({schemaCode: e}) => r.str`must match format "${e}"`,
            params: ({schemaCode: e}) => r._`{format: ${e}}`
        },
        code(e, t) {
            const {gen: n, data: i, $data: o, schema: a, schemaCode: s, it: l} = e, {opts: c, errSchemaPath: u, schemaEnv: d, self: h} = l;
            c.validateFormats && (o ? function() {
                const o = n.scopeValue("formats", {
                    ref: h.formats,
                    code: c.code.formats
                }), a = n.const("fDef", r._`${o}[${s}]`), l = n.let("fType"), u = n.let("format");
                n.if(r._`typeof ${a} == "object" && !(${a} instanceof RegExp)`, () => n.assign(l, r._`${a}.type || "string"`).assign(u, r._`${a}.validate`), () => n.assign(l, r._`"string"`).assign(u, a)), 
                e.fail$data((0, r.or)(!1 === c.strictSchema ? r.nil : r._`${s} && !${u}`, function() {
                    const e = d.$async ? r._`(${a}.async ? await ${u}(${i}) : ${u}(${i}))` : r._`${u}(${i})`, n = r._`(typeof ${u} == "function" ? ${e} : ${u}.test(${i}))`;
                    return r._`${u} && ${u} !== true && ${l} === ${t} && !${n}`;
                }()));
            }() : function() {
                const o = h.formats[a];
                if (!o) return void function() {
                    if (!1 === c.strictSchema) return void h.logger.warn(e());
                    throw new Error(e());
                    function e() {
                        return `unknown format "${a}" ignored in schema at path "${u}"`;
                    }
                }();
                if (!0 === o) return;
                const [s, l, p] = function(e) {
                    const t = e instanceof RegExp ? (0, r.regexpCode)(e) : c.code.formats ? r._`${c.code.formats}${(0, 
                    r.getProperty)(a)}` : void 0, i = n.scopeValue("formats", {
                        key: a,
                        ref: e,
                        code: t
                    });
                    if ("object" == typeof e && !(e instanceof RegExp)) return [ e.type || "string", e.validate, r._`${i}.validate` ];
                    return [ "string", e, i ];
                }(o);
                s === t && e.pass(function() {
                    if ("object" == typeof o && !(o instanceof RegExp) && o.async) {
                        if (!d.$async) throw new Error("async format in sync schema");
                        return r._`await ${p}(${i})`;
                    }
                    return "function" == typeof l ? r._`${p}(${i})` : r._`${p}.test(${i})`;
                }());
            }());
        }
    };
    t.default = i;
}
