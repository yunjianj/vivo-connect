// analysis/pretty/main.js:30427; webpack module 254
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.resolveSchema = t.getCompilingSchema = t.resolveRef = t.compileSchema = t.SchemaEnv = void 0;
    const r = n(14), i = n(253), o = n(85), a = n(188), s = n(18), l = n(184);
    class c {
        constructor(e) {
            var t;
            let n;
            this.refs = {}, this.dynamicAnchors = {}, "object" == typeof e.schema && (n = e.schema), 
            this.schema = e.schema, this.schemaId = e.schemaId, this.root = e.root || this, 
            this.baseId = null !== (t = e.baseId) && void 0 !== t ? t : (0, a.normalizeId)(null == n ? void 0 : n[e.schemaId || "$id"]), 
            this.schemaPath = e.schemaPath, this.localRefs = e.localRefs, this.meta = e.meta, 
            this.$async = null == n ? void 0 : n.$async, this.refs = {};
        }
    }
    function u(e) {
        const t = h.call(this, e);
        if (t) return t;
        const n = (0, a.getFullPath)(this.opts.uriResolver, e.root.baseId), {es5: s, lines: c} = this.opts.code, {ownProperties: u} = this.opts, d = new r.CodeGen(this.scope, {
            es5: s,
            lines: c,
            ownProperties: u
        });
        let p;
        e.$async && (p = d.scopeValue("Error", {
            ref: i.default,
            code: r._`require("ajv/dist/runtime/validation_error").default`
        }));
        const f = d.scopeName("validate");
        e.validateName = f;
        const _ = {
            gen: d,
            allErrors: this.opts.allErrors,
            data: o.default.data,
            parentData: o.default.parentData,
            parentDataProperty: o.default.parentDataProperty,
            dataNames: [ o.default.data ],
            dataPathArr: [ r.nil ],
            dataLevel: 0,
            dataTypes: [],
            definedProperties: new Set,
            topSchemaRef: d.scopeValue("schema", !0 === this.opts.code.source ? {
                ref: e.schema,
                code: (0, r.stringify)(e.schema)
            } : {
                ref: e.schema
            }),
            validateName: f,
            ValidationError: p,
            schema: e.schema,
            schemaEnv: e,
            rootId: n,
            baseId: e.baseId || n,
            schemaPath: r.nil,
            errSchemaPath: e.schemaPath || (this.opts.jtd ? "" : "#"),
            errorPath: r._`""`,
            opts: this.opts,
            self: this
        };
        let m;
        try {
            this._compilations.add(e), (0, l.validateFunctionCode)(_), d.optimize(this.opts.code.optimize);
            const t = d.toString();
            m = `${d.scopeRefs(o.default.scope)}return ${t}`, this.opts.code.process && (m = this.opts.code.process(m, e));
            const n = new Function("" + o.default.self, "" + o.default.scope, m)(this, this.scope.get());
            if (this.scope.value(f, {
                ref: n
            }), n.errors = null, n.schema = e.schema, n.schemaEnv = e, e.$async && (n.$async = !0), 
            !0 === this.opts.code.source && (n.source = {
                validateName: f,
                validateCode: t,
                scopeValues: d._values
            }), this.opts.unevaluated) {
                const {props: e, items: t} = _;
                n.evaluated = {
                    props: e instanceof r.Name ? void 0 : e,
                    items: t instanceof r.Name ? void 0 : t,
                    dynamicProps: e instanceof r.Name,
                    dynamicItems: t instanceof r.Name
                }, n.source && (n.source.evaluated = (0, r.stringify)(n.evaluated));
            }
            return e.validate = n, e;
        } catch (t) {
            throw delete e.validate, delete e.validateName, m && this.logger.error("Error compiling schema, function code:", m), 
            t;
        } finally {
            this._compilations.delete(e);
        }
    }
    function d(e) {
        return (0, a.inlineRef)(e.schema, this.opts.inlineRefs) ? e.schema : e.validate ? e : u.call(this, e);
    }
    function h(e) {
        for (const r of this._compilations) if (n = e, (t = r).schema === n.schema && t.root === n.root && t.baseId === n.baseId) return r;
        var t, n;
    }
    function p(e, t) {
        let n;
        for (;"string" == typeof (n = this.refs[t]); ) t = n;
        return n || this.schemas[t] || f.call(this, e, t);
    }
    function f(e, t) {
        const n = this.opts.uriResolver.parse(t), r = (0, a._getFullPath)(this.opts.uriResolver, n);
        let i = (0, a.getFullPath)(this.opts.uriResolver, e.baseId, void 0);
        if (Object.keys(e.schema).length > 0 && r === i) return m.call(this, n, e);
        const o = (0, a.normalizeId)(r), s = this.refs[o] || this.schemas[o];
        if ("string" == typeof s) {
            const t = f.call(this, e, s);
            if ("object" != typeof (null == t ? void 0 : t.schema)) return;
            return m.call(this, n, t);
        }
        if ("object" == typeof (null == s ? void 0 : s.schema)) {
            if (s.validate || u.call(this, s), o === (0, a.normalizeId)(t)) {
                const {schema: t} = s, {schemaId: n} = this.opts, r = t[n];
                return r && (i = (0, a.resolveUrl)(this.opts.uriResolver, i, r)), new c({
                    schema: t,
                    schemaId: n,
                    root: e,
                    baseId: i
                });
            }
            return m.call(this, n, s);
        }
    }
    t.SchemaEnv = c, t.compileSchema = u, t.resolveRef = function(e, t, n) {
        var r;
        n = (0, a.resolveUrl)(this.opts.uriResolver, t, n);
        const i = e.refs[n];
        if (i) return i;
        let o = p.call(this, e, n);
        if (void 0 === o) {
            const i = null === (r = e.localRefs) || void 0 === r ? void 0 : r[n], {schemaId: a} = this.opts;
            i && (o = new c({
                schema: i,
                schemaId: a,
                root: e,
                baseId: t
            }));
        }
        return void 0 !== o ? e.refs[n] = d.call(this, o) : void 0;
    }, t.getCompilingSchema = h, t.resolveSchema = f;
    const _ = new Set([ "properties", "patternProperties", "enum", "dependencies", "definitions" ]);
    function m(e, {baseId: t, schema: n, root: r}) {
        var i;
        if ("/" !== (null === (i = e.fragment) || void 0 === i ? void 0 : i[0])) return;
        for (const r of e.fragment.slice(1).split("/")) {
            if ("boolean" == typeof n) return;
            const e = n[(0, s.unescapeFragment)(r)];
            if (void 0 === e) return;
            const i = "object" == typeof (n = e) && n[this.opts.schemaId];
            !_.has(r) && i && (t = (0, a.resolveUrl)(this.opts.uriResolver, t, i));
        }
        let o;
        if ("boolean" != typeof n && n.$ref && !(0, s.schemaHasRulesButRef)(n, this.RULES)) {
            const e = (0, a.resolveUrl)(this.opts.uriResolver, t, n.$ref);
            o = f.call(this, r, e);
        }
        const {schemaId: l} = this.opts;
        return o = o || new c({
            schema: n,
            schemaId: l,
            root: r,
            baseId: t
        }), o.schema !== o.root.schema ? o : void 0;
    }
}
