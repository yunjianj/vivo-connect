// analysis/pretty/main.js:24682; webpack module 185
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.extendErrors = t.resetErrorsCount = t.reportExtraError = t.reportError = t.keyword$DataError = t.keywordError = void 0;
    const r = n(14), i = n(18), o = n(85);
    function a(e, t) {
        const n = e.const("err", t);
        e.if(r._`${o.default.vErrors} === null`, () => e.assign(o.default.vErrors, r._`[${n}]`), r._`${o.default.vErrors}.push(${n})`), 
        e.code(r._`${o.default.errors}++`);
    }
    function s(e, t) {
        const {gen: n, validateName: i, schemaEnv: o} = e;
        o.$async ? n.throw(r._`new ${e.ValidationError}(${t})`) : (n.assign(r._`${i}.errors`, t), 
        n.return(!1));
    }
    t.keywordError = {
        message: ({keyword: e}) => r.str`must pass "${e}" keyword validation`
    }, t.keyword$DataError = {
        message: ({keyword: e, schemaType: t}) => t ? r.str`"${e}" keyword must be ${t} ($data)` : r.str`"${e}" keyword is invalid ($data)`
    }, t.reportError = function(e, n = t.keywordError, i, o) {
        const {it: l} = e, {gen: u, compositeRule: d, allErrors: h} = l, p = c(e, n, i);
        (null != o ? o : d || h) ? a(u, p) : s(l, r._`[${p}]`);
    }, t.reportExtraError = function(e, n = t.keywordError, r) {
        const {it: i} = e, {gen: l, compositeRule: u, allErrors: d} = i;
        a(l, c(e, n, r)), u || d || s(i, o.default.vErrors);
    }, t.resetErrorsCount = function(e, t) {
        e.assign(o.default.errors, t), e.if(r._`${o.default.vErrors} !== null`, () => e.if(t, () => e.assign(r._`${o.default.vErrors}.length`, t), () => e.assign(o.default.vErrors, null)));
    }, t.extendErrors = function({gen: e, keyword: t, schemaValue: n, data: i, errsCount: a, it: s}) {
        if (void 0 === a) throw new Error("ajv implementation error");
        const l = e.name("err");
        e.forRange("i", a, o.default.errors, a => {
            e.const(l, r._`${o.default.vErrors}[${a}]`), e.if(r._`${l}.instancePath === undefined`, () => e.assign(r._`${l}.instancePath`, (0, 
            r.strConcat)(o.default.instancePath, s.errorPath))), e.assign(r._`${l}.schemaPath`, r.str`${s.errSchemaPath}/${t}`), 
            s.opts.verbose && (e.assign(r._`${l}.schema`, n), e.assign(r._`${l}.data`, i));
        });
    };
    const l = {
        keyword: new r.Name("keyword"),
        schemaPath: new r.Name("schemaPath"),
        params: new r.Name("params"),
        propertyName: new r.Name("propertyName"),
        message: new r.Name("message"),
        schema: new r.Name("schema"),
        parentSchema: new r.Name("parentSchema")
    };
    function c(e, t, n) {
        const {createErrors: i} = e.it;
        return !1 === i ? r._`{}` : function(e, t, n = {}) {
            const {gen: i, it: a} = e, s = [ u(a, n), d(e, n) ];
            return function(e, {params: t, message: n}, i) {
                const {keyword: a, data: s, schemaValue: c, it: u} = e, {opts: d, propertyName: h, topSchemaRef: p, schemaPath: f} = u;
                i.push([ l.keyword, a ], [ l.params, "function" == typeof t ? t(e) : t || r._`{}` ]), 
                d.messages && i.push([ l.message, "function" == typeof n ? n(e) : n ]);
                d.verbose && i.push([ l.schema, c ], [ l.parentSchema, r._`${p}${f}` ], [ o.default.data, s ]);
                h && i.push([ l.propertyName, h ]);
            }(e, t, s), i.object(...s);
        }(e, t, n);
    }
    function u({errorPath: e}, {instancePath: t}) {
        const n = t ? r.str`${e}${(0, i.getErrorPath)(t, i.Type.Str)}` : e;
        return [ o.default.instancePath, (0, r.strConcat)(o.default.instancePath, n) ];
    }
    function d({keyword: e, it: {errSchemaPath: t}}, {schemaPath: n, parentSchema: o}) {
        let a = o ? t : r.str`${t}/${e}`;
        return n && (a = r.str`${a}${(0, i.getErrorPath)(n, i.Type.Str)}`), [ l.schemaPath, a ];
    }
}
