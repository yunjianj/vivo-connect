// analysis/pretty/main.js:79954; webpack module 933
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    const r = n(60), i = n(13), o = n(19), a = {
        keyword: "required",
        type: "object",
        schemaType: "array",
        $data: !0,
        error: {
            message: ({params: {missingProperty: e}}) => i.str`must have required property '${e}'`,
            params: ({params: {missingProperty: e}}) => i._`{missingProperty: ${e}}`
        },
        code(e) {
            const {gen: t, schema: n, schemaCode: a, data: s, $data: l, it: c} = e, {opts: u} = c;
            if (!l && 0 === n.length) return;
            const d = n.length >= u.loopRequired;
            if (c.allErrors ? function() {
                if (d || l) e.block$data(i.nil, h); else for (const t of n) (0, r.checkReportMissingProp)(e, t);
            }() : function() {
                const o = t.let("missing");
                if (d || l) {
                    const n = t.let("valid", !0);
                    e.block$data(n, () => function(n, o) {
                        e.setParams({
                            missingProperty: n
                        }), t.forOf(n, a, () => {
                            t.assign(o, (0, r.propertyInData)(t, s, n, u.ownProperties)), t.if((0, i.not)(o), () => {
                                e.error(), t.break();
                            });
                        }, i.nil);
                    }(o, n)), e.ok(n);
                } else t.if((0, r.checkMissingProp)(e, n, o)), (0, r.reportMissingProp)(e, o), t.else();
            }(), u.strictRequired) {
                const t = e.parentSchema.properties, {definedProperties: r} = e.it;
                for (const e of n) if (void 0 === (null == t ? void 0 : t[e]) && !r.has(e)) {
                    const t = `required property "${e}" is not defined at "${c.schemaEnv.baseId + c.errSchemaPath}" (strictRequired)`;
                    (0, o.checkStrictMode)(c, t, c.opts.strictRequired);
                }
            }
            function h() {
                t.forOf("prop", a, n => {
                    e.setParams({
                        missingProperty: n
                    }), t.if((0, r.noPropertyInData)(t, s, n, u.ownProperties), () => e.error());
                });
            }
        }
    };
    t.default = a;
}
