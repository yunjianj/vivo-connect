// analysis/pretty/main.js:77489; webpack module 869
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.extendSubschemaMode = t.extendSubschemaData = t.getSubschema = void 0;
    const r = n(14), i = n(18);
    t.getSubschema = function(e, {keyword: t, schemaProp: n, schema: o, schemaPath: a, errSchemaPath: s, topSchemaRef: l}) {
        if (void 0 !== t && void 0 !== o) throw new Error('both "keyword" and "schema" passed, only one allowed');
        if (void 0 !== t) {
            const o = e.schema[t];
            return void 0 === n ? {
                schema: o,
                schemaPath: r._`${e.schemaPath}${(0, r.getProperty)(t)}`,
                errSchemaPath: `${e.errSchemaPath}/${t}`
            } : {
                schema: o[n],
                schemaPath: r._`${e.schemaPath}${(0, r.getProperty)(t)}${(0, r.getProperty)(n)}`,
                errSchemaPath: `${e.errSchemaPath}/${t}/${(0, i.escapeFragment)(n)}`
            };
        }
        if (void 0 !== o) {
            if (void 0 === a || void 0 === s || void 0 === l) throw new Error('"schemaPath", "errSchemaPath" and "topSchemaRef" are required with "schema"');
            return {
                schema: o,
                schemaPath: a,
                topSchemaRef: l,
                errSchemaPath: s
            };
        }
        throw new Error('either "keyword" or "schema" must be passed');
    }, t.extendSubschemaData = function(e, t, {dataProp: n, dataPropType: o, data: a, dataTypes: s, propertyName: l}) {
        if (void 0 !== a && void 0 !== n) throw new Error('both "data" and "dataProp" passed, only one allowed');
        const {gen: c} = t;
        if (void 0 !== n) {
            const {errorPath: a, dataPathArr: s, opts: l} = t;
            u(c.let("data", r._`${t.data}${(0, r.getProperty)(n)}`, !0)), e.errorPath = r.str`${a}${(0, 
            i.getErrorPath)(n, o, l.jsPropertySyntax)}`, e.parentDataProperty = r._`${n}`, e.dataPathArr = [ ...s, e.parentDataProperty ];
        }
        if (void 0 !== a) {
            u(a instanceof r.Name ? a : c.let("data", a, !0)), void 0 !== l && (e.propertyName = l);
        }
        function u(n) {
            e.data = n, e.dataLevel = t.dataLevel + 1, e.dataTypes = [], t.definedProperties = new Set, 
            e.parentData = t.data, e.dataNames = [ ...t.dataNames, n ];
        }
        s && (e.dataTypes = s);
    }, t.extendSubschemaMode = function(e, {jtdDiscriminator: t, jtdMetadata: n, compositeRule: r, createErrors: i, allErrors: o}) {
        void 0 !== r && (e.compositeRule = r), void 0 !== i && (e.createErrors = i), void 0 !== o && (e.allErrors = o), 
        e.jtdDiscriminator = t, e.jtdMetadata = n;
    };
}
