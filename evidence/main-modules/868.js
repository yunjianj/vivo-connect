// analysis/pretty/main.js:77411; webpack module 868
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.validateKeywordUsage = t.validSchemaType = t.funcKeywordCode = t.macroKeywordCode = void 0;
    const r = n(14), i = n(85), o = n(59), a = n(185);
    function s(e) {
        const {gen: t, data: n, it: i} = e;
        t.if(i.parentData, () => t.assign(n, r._`${i.parentData}[${i.parentDataProperty}]`));
    }
    function l(e, t, n) {
        if (void 0 === n) throw new Error(`keyword "${t}" failed to compile`);
        return e.scopeValue("keyword", "function" == typeof n ? {
            ref: n
        } : {
            ref: n,
            code: (0, r.stringify)(n)
        });
    }
    t.macroKeywordCode = function(e, t) {
        const {gen: n, keyword: i, schema: o, parentSchema: a, it: s} = e, c = t.macro.call(s.self, o, a, s), u = l(n, i, c);
        !1 !== s.opts.validateSchema && s.self.validateSchema(c, !0);
        const d = n.name("valid");
        e.subschema({
            schema: c,
            schemaPath: r.nil,
            errSchemaPath: `${s.errSchemaPath}/${i}`,
            topSchemaRef: u,
            compositeRule: !0
        }, d), e.pass(d, () => e.error(!0));
    }, t.funcKeywordCode = function(e, t) {
        var n;
        const {gen: c, keyword: u, schema: d, parentSchema: h, $data: p, it: f} = e;
        !function({schemaEnv: e}, t) {
            if (t.async && !e.$async) throw new Error("async keyword in sync schema");
        }(f, t);
        const _ = !p && t.compile ? t.compile.call(f.self, d, h, f) : t.validate, m = l(c, u, _), g = c.let("valid");
        function v(n = (t.async ? r._`await ` : r.nil)) {
            const a = f.opts.passContext ? i.default.this : i.default.self, s = !("compile" in t && !p || !1 === t.schema);
            c.assign(g, r._`${n}${(0, o.callValidateCode)(e, m, a, s)}`, t.modifying);
        }
        function y(e) {
            var n;
            c.if((0, r.not)(null !== (n = t.valid) && void 0 !== n ? n : g), e);
        }
        e.block$data(g, function() {
            if (!1 === t.errors) v(), t.modifying && s(e), y(() => e.error()); else {
                const n = t.async ? function() {
                    const e = c.let("ruleErrs", null);
                    return c.try(() => v(r._`await `), t => c.assign(g, !1).if(r._`${t} instanceof ${f.ValidationError}`, () => c.assign(e, r._`${t}.errors`), () => c.throw(t))), 
                    e;
                }() : function() {
                    const e = r._`${m}.errors`;
                    return c.assign(e, null), v(r.nil), e;
                }();
                t.modifying && s(e), y(() => function(e, t) {
                    const {gen: n} = e;
                    n.if(r._`Array.isArray(${t})`, () => {
                        n.assign(i.default.vErrors, r._`${i.default.vErrors} === null ? ${t} : ${i.default.vErrors}.concat(${t})`).assign(i.default.errors, r._`${i.default.vErrors}.length`), 
                        (0, a.extendErrors)(e);
                    }, () => e.error());
                }(e, n));
            }
        }), e.ok(null !== (n = t.valid) && void 0 !== n ? n : g);
    }, t.validSchemaType = function(e, t, n = !1) {
        return !t.length || t.some(t => "array" === t ? Array.isArray(e) : "object" === t ? e && "object" == typeof e && !Array.isArray(e) : typeof e == t || n && void 0 === e);
    }, t.validateKeywordUsage = function({schema: e, opts: t, self: n, errSchemaPath: r}, i, o) {
        if (Array.isArray(i.keyword) ? !i.keyword.includes(o) : i.keyword !== o) throw new Error("ajv implementation error");
        const a = i.dependencies;
        if (null == a ? void 0 : a.some(t => !Object.prototype.hasOwnProperty.call(e, t))) throw new Error(`parent schema must have dependencies of ${o}: ${a.join(",")}`);
        if (i.validateSchema) {
            if (!i.validateSchema(e[o])) {
                const e = `keyword "${o}" value is invalid at path "${r}": ` + n.errorsText(i.validateSchema.errors);
                if ("log" !== t.validateSchema) throw new Error(e);
                n.logger.error(e);
            }
        }
    };
}
