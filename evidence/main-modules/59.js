// analysis/pretty/main.js:12647; webpack module 59
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.validateUnion = t.validateArray = t.usePattern = t.callValidateCode = t.schemaProperties = t.allSchemaProperties = t.noPropertyInData = t.propertyInData = t.isOwnProperty = t.hasPropFunc = t.reportMissingProp = t.checkMissingProp = t.checkReportMissingProp = void 0;
    const r = n(14), i = n(18), o = n(85), a = n(18);
    function s(e) {
        return e.scopeValue("func", {
            ref: Object.prototype.hasOwnProperty,
            code: r._`Object.prototype.hasOwnProperty`
        });
    }
    function l(e, t, n) {
        return r._`${s(e)}.call(${t}, ${n})`;
    }
    function c(e, t, n, i) {
        const o = r._`${t}${(0, r.getProperty)(n)} === undefined`;
        return i ? (0, r.or)(o, (0, r.not)(l(e, t, n))) : o;
    }
    function u(e) {
        return e ? Object.keys(e).filter(e => "__proto__" !== e) : [];
    }
    t.checkReportMissingProp = function(e, t) {
        const {gen: n, data: i, it: o} = e;
        n.if(c(n, i, t, o.opts.ownProperties), () => {
            e.setParams({
                missingProperty: r._`${t}`
            }, !0), e.error();
        });
    }, t.checkMissingProp = function({gen: e, data: t, it: {opts: n}}, i, o) {
        return (0, r.or)(...i.map(i => (0, r.and)(c(e, t, i, n.ownProperties), r._`${o} = ${i}`)));
    }, t.reportMissingProp = function(e, t) {
        e.setParams({
            missingProperty: t
        }, !0), e.error();
    }, t.hasPropFunc = s, t.isOwnProperty = l, t.propertyInData = function(e, t, n, i) {
        const o = r._`${t}${(0, r.getProperty)(n)} !== undefined`;
        return i ? r._`${o} && ${l(e, t, n)}` : o;
    }, t.noPropertyInData = c, t.allSchemaProperties = u, t.schemaProperties = function(e, t) {
        return u(t).filter(n => !(0, i.alwaysValidSchema)(e, t[n]));
    }, t.callValidateCode = function({schemaCode: e, data: t, it: {gen: n, topSchemaRef: i, schemaPath: a, errorPath: s}, it: l}, c, u, d) {
        const h = d ? r._`${e}, ${t}, ${i}${a}` : t, p = [ [ o.default.instancePath, (0, 
        r.strConcat)(o.default.instancePath, s) ], [ o.default.parentData, l.parentData ], [ o.default.parentDataProperty, l.parentDataProperty ], [ o.default.rootData, o.default.rootData ] ];
        l.opts.dynamicRef && p.push([ o.default.dynamicAnchors, o.default.dynamicAnchors ]);
        const f = r._`${h}, ${n.object(...p)}`;
        return u !== r.nil ? r._`${c}.call(${u}, ${f})` : r._`${c}(${f})`;
    };
    const d = r._`new RegExp`;
    t.usePattern = function({gen: e, it: {opts: t}}, n) {
        const i = t.unicodeRegExp ? "u" : "", {regExp: o} = t.code, s = o(n, i);
        return e.scopeValue("pattern", {
            key: s.toString(),
            ref: s,
            code: r._`${"new RegExp" === o.code ? d : (0, a.useFunc)(e, o)}(${n}, ${i})`
        });
    }, t.validateArray = function(e) {
        const {gen: t, data: n, keyword: o, it: a} = e, s = t.name("valid");
        if (a.allErrors) {
            const e = t.let("valid", !0);
            return l(() => t.assign(e, !1)), e;
        }
        return t.var(s, !0), l(() => t.break()), s;
        function l(a) {
            const l = t.const("len", r._`${n}.length`);
            t.forRange("i", 0, l, n => {
                e.subschema({
                    keyword: o,
                    dataProp: n,
                    dataPropType: i.Type.Num
                }, s), t.if((0, r.not)(s), a);
            });
        }
    }, t.validateUnion = function(e) {
        const {gen: t, schema: n, keyword: o, it: a} = e;
        if (!Array.isArray(n)) throw new Error("ajv implementation error");
        if (n.some(e => (0, i.alwaysValidSchema)(a, e)) && !a.opts.unevaluated) return;
        const s = t.let("valid", !1), l = t.name("_valid");
        t.block(() => n.forEach((n, i) => {
            const a = e.subschema({
                keyword: o,
                schemaProp: i,
                compositeRule: !0
            }, l);
            t.assign(s, r._`${s} || ${l}`);
            e.mergeValidEvaluated(a, l) || t.if((0, r.not)(s));
        })), e.result(s, () => e.reset(), () => e.error(!0));
    };
}
