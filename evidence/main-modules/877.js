// analysis/pretty/main.js:77731; webpack module 877
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.callRef = t.getValidate = void 0;
    const r = n(189), i = n(59), o = n(14), a = n(85), s = n(254), l = n(18), c = {
        keyword: "$ref",
        schemaType: "string",
        code(e) {
            const {gen: t, schema: n, it: i} = e, {baseId: a, schemaEnv: l, validateName: c, opts: h, self: p} = i, {root: f} = l;
            if (("#" === n || "#/" === n) && a === f.baseId) return function() {
                if (l === f) return d(e, c, l, l.$async);
                const n = t.scopeValue("root", {
                    ref: f
                });
                return d(e, o._`${n}.validate`, f, f.$async);
            }();
            const _ = s.resolveRef.call(p, f, a, n);
            if (void 0 === _) throw new r.default(i.opts.uriResolver, a, n);
            return _ instanceof s.SchemaEnv ? function(t) {
                const n = u(e, t);
                d(e, n, t, t.$async);
            }(_) : function(r) {
                const i = t.scopeValue("schema", !0 === h.code.source ? {
                    ref: r,
                    code: (0, o.stringify)(r)
                } : {
                    ref: r
                }), a = t.name("valid"), s = e.subschema({
                    schema: r,
                    dataTypes: [],
                    schemaPath: o.nil,
                    topSchemaRef: i,
                    errSchemaPath: n
                }, a);
                e.mergeEvaluated(s), e.ok(a);
            }(_);
        }
    };
    function u(e, t) {
        const {gen: n} = e;
        return t.validate ? n.scopeValue("validate", {
            ref: t.validate
        }) : o._`${n.scopeValue("wrapper", {
            ref: t
        })}.validate`;
    }
    function d(e, t, n, r) {
        const {gen: s, it: c} = e, {allErrors: u, schemaEnv: d, opts: h} = c, p = h.passContext ? a.default.this : o.nil;
        function f(e) {
            const t = o._`${e}.errors`;
            s.assign(a.default.vErrors, o._`${a.default.vErrors} === null ? ${t} : ${a.default.vErrors}.concat(${t})`), 
            s.assign(a.default.errors, o._`${a.default.vErrors}.length`);
        }
        function _(e) {
            var t;
            if (!c.opts.unevaluated) return;
            const r = null === (t = null == n ? void 0 : n.validate) || void 0 === t ? void 0 : t.evaluated;
            if (!0 !== c.props) if (r && !r.dynamicProps) void 0 !== r.props && (c.props = l.mergeEvaluated.props(s, r.props, c.props)); else {
                const t = s.var("props", o._`${e}.evaluated.props`);
                c.props = l.mergeEvaluated.props(s, t, c.props, o.Name);
            }
            if (!0 !== c.items) if (r && !r.dynamicItems) void 0 !== r.items && (c.items = l.mergeEvaluated.items(s, r.items, c.items)); else {
                const t = s.var("items", o._`${e}.evaluated.items`);
                c.items = l.mergeEvaluated.items(s, t, c.items, o.Name);
            }
        }
        r ? function() {
            if (!d.$async) throw new Error("async schema referenced by sync schema");
            const n = s.let("valid");
            s.try(() => {
                s.code(o._`await ${(0, i.callValidateCode)(e, t, p)}`), _(t), u || s.assign(n, !0);
            }, e => {
                s.if(o._`!(${e} instanceof ${c.ValidationError})`, () => s.throw(e)), f(e), u || s.assign(n, !1);
            }), e.ok(n);
        }() : e.result((0, i.callValidateCode)(e, t, p), () => _(t), () => f(t));
    }
    t.getValidate = u, t.callRef = d, t.default = c;
}
