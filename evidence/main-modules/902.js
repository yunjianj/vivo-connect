// analysis/pretty/main.js:78507; webpack module 902
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    const r = n(14), i = n(18), o = {
        keyword: "if",
        schemaType: [ "object", "boolean" ],
        trackErrors: !0,
        error: {
            message: ({params: e}) => r.str`must match "${e.ifClause}" schema`,
            params: ({params: e}) => r._`{failingKeyword: ${e.ifClause}}`
        },
        code(e) {
            const {gen: t, parentSchema: n, it: o} = e;
            void 0 === n.then && void 0 === n.else && (0, i.checkStrictMode)(o, '"if" without "then" and "else" is ignored');
            const s = a(o, "then"), l = a(o, "else");
            if (!s && !l) return;
            const c = t.let("valid", !0), u = t.name("_valid");
            if (function() {
                const t = e.subschema({
                    keyword: "if",
                    compositeRule: !0,
                    createErrors: !1,
                    allErrors: !1
                }, u);
                e.mergeEvaluated(t);
            }(), e.reset(), s && l) {
                const n = t.let("ifClause");
                e.setParams({
                    ifClause: n
                }), t.if(u, d("then", n), d("else", n));
            } else s ? t.if(u, d("then")) : t.if((0, r.not)(u), d("else"));
            function d(n, i) {
                return () => {
                    const o = e.subschema({
                        keyword: n
                    }, u);
                    t.assign(c, u), e.mergeValidEvaluated(o, c), i ? t.assign(i, r._`${n}`) : e.setParams({
                        ifClause: n
                    });
                };
            }
            e.pass(c, () => e.error(!0));
        }
    };
    function a(e, t) {
        const n = e.schema[t];
        return void 0 !== n && !(0, i.alwaysValidSchema)(e, n);
    }
    t.default = o;
}
