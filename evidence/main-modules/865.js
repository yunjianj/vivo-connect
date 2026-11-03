// analysis/pretty/main.js:76919; webpack module 865
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.CodeGen = t.Name = t.nil = t.stringify = t.str = t._ = t.KeywordCxt = void 0;
    var r = n(184);
    Object.defineProperty(t, "KeywordCxt", {
        enumerable: !0,
        get: function() {
            return r.KeywordCxt;
        }
    });
    var i = n(14);
    Object.defineProperty(t, "_", {
        enumerable: !0,
        get: function() {
            return i._;
        }
    }), Object.defineProperty(t, "str", {
        enumerable: !0,
        get: function() {
            return i.str;
        }
    }), Object.defineProperty(t, "stringify", {
        enumerable: !0,
        get: function() {
            return i.stringify;
        }
    }), Object.defineProperty(t, "nil", {
        enumerable: !0,
        get: function() {
            return i.nil;
        }
    }), Object.defineProperty(t, "Name", {
        enumerable: !0,
        get: function() {
            return i.Name;
        }
    }), Object.defineProperty(t, "CodeGen", {
        enumerable: !0,
        get: function() {
            return i.CodeGen;
        }
    });
    const o = n(253), a = n(189), s = n(392), l = n(254), c = n(14), u = n(188), d = n(187), h = n(18), p = n(871), f = n(872), _ = (e, t) => new RegExp(e, t);
    _.code = "new RegExp";
    const m = [ "removeAdditional", "useDefaults", "coerceTypes" ], g = new Set([ "validate", "serialize", "parse", "wrapper", "root", "schema", "keyword", "pattern", "formats", "validate$data", "func", "obj", "Error" ]), v = {
        errorDataPath: "",
        format: "`validateFormats: false` can be used instead.",
        nullable: '"nullable" keyword is supported by default.',
        jsonPointers: "Deprecated jsPropertySyntax can be used instead.",
        extendRefs: "Deprecated ignoreKeywordsWithRef can be used instead.",
        missingRefs: "Pass empty schema with $id that should be ignored to ajv.addSchema.",
        processCode: "Use option `code: {process: (code, schemaEnv: object) => string}`",
        sourceCode: "Use option `code: {source: true}`",
        strictDefaults: "It is default now, see option `strict`.",
        strictKeywords: "It is default now, see option `strict`.",
        uniqueItems: '"uniqueItems" keyword is always validated.',
        unknownFormats: "Disable strict mode or pass `true` to `ajv.addFormat` (or `formats` option).",
        cache: "Map is used as cache, schema object as key.",
        serialize: "Map is used as cache, schema object as key.",
        ajvErrors: "It is default now."
    }, y = {
        ignoreKeywordsWithRef: "",
        jsPropertySyntax: "",
        unicode: '"minLength"/"maxLength" account for unicode characters by default.'
    };
    function E(e) {
        var t, n, r, i, o, a, s, l, c, u, d, h, p, m, g, v, y, E, b, w, S, T, A, O, C;
        const N = e.strict, I = null === (t = e.code) || void 0 === t ? void 0 : t.optimize, R = !0 === I || void 0 === I ? 1 : I || 0, D = null !== (r = null === (n = e.code) || void 0 === n ? void 0 : n.regExp) && void 0 !== r ? r : _, L = null !== (i = e.uriResolver) && void 0 !== i ? i : f.default;
        return {
            strictSchema: null === (a = null !== (o = e.strictSchema) && void 0 !== o ? o : N) || void 0 === a || a,
            strictNumbers: null === (l = null !== (s = e.strictNumbers) && void 0 !== s ? s : N) || void 0 === l || l,
            strictTypes: null !== (u = null !== (c = e.strictTypes) && void 0 !== c ? c : N) && void 0 !== u ? u : "log",
            strictTuples: null !== (h = null !== (d = e.strictTuples) && void 0 !== d ? d : N) && void 0 !== h ? h : "log",
            strictRequired: null !== (m = null !== (p = e.strictRequired) && void 0 !== p ? p : N) && void 0 !== m && m,
            code: e.code ? {
                ...e.code,
                optimize: R,
                regExp: D
            } : {
                optimize: R,
                regExp: D
            },
            loopRequired: null !== (g = e.loopRequired) && void 0 !== g ? g : 200,
            loopEnum: null !== (v = e.loopEnum) && void 0 !== v ? v : 200,
            meta: null === (y = e.meta) || void 0 === y || y,
            messages: null === (E = e.messages) || void 0 === E || E,
            inlineRefs: null === (b = e.inlineRefs) || void 0 === b || b,
            schemaId: null !== (w = e.schemaId) && void 0 !== w ? w : "$id",
            addUsedSchema: null === (S = e.addUsedSchema) || void 0 === S || S,
            validateSchema: null === (T = e.validateSchema) || void 0 === T || T,
            validateFormats: null === (A = e.validateFormats) || void 0 === A || A,
            unicodeRegExp: null === (O = e.unicodeRegExp) || void 0 === O || O,
            int32range: null === (C = e.int32range) || void 0 === C || C,
            uriResolver: L
        };
    }
    class b {
        constructor(e = {}) {
            this.schemas = {}, this.refs = {}, this.formats = {}, this._compilations = new Set, 
            this._loading = {}, this._cache = new Map, e = this.opts = {
                ...e,
                ...E(e)
            };
            const {es5: t, lines: n} = this.opts.code;
            this.scope = new c.ValueScope({
                scope: {},
                prefixes: g,
                es5: t,
                lines: n
            }), this.logger = function(e) {
                if (!1 === e) return N;
                if (void 0 === e) return console;
                if (e.log && e.warn && e.error) return e;
                throw new Error("logger must implement log, warn and error methods");
            }(e.logger);
            const r = e.validateFormats;
            e.validateFormats = !1, this.RULES = (0, s.getRules)(), w.call(this, v, e, "NOT SUPPORTED"), 
            w.call(this, y, e, "DEPRECATED", "warn"), this._metaOpts = C.call(this), e.formats && A.call(this), 
            this._addVocabularies(), this._addDefaultMetaSchema(), e.keywords && O.call(this, e.keywords), 
            "object" == typeof e.meta && this.addMetaSchema(e.meta), T.call(this), e.validateFormats = r;
        }
        _addVocabularies() {
            this.addKeyword("$async");
        }
        _addDefaultMetaSchema() {
            const {$data: e, meta: t, schemaId: n} = this.opts;
            let r = p;
            "id" === n && (r = {
                ...p
            }, r.id = r.$id, delete r.$id), t && e && this.addMetaSchema(r, r[n], !1);
        }
        defaultMeta() {
            const {meta: e, schemaId: t} = this.opts;
            return this.opts.defaultMeta = "object" == typeof e ? e[t] || e : void 0;
        }
        validate(e, t) {
            let n;
            if ("string" == typeof e) {
                if (n = this.getSchema(e), !n) throw new Error(`no schema with key or ref "${e}"`);
            } else n = this.compile(e);
            const r = n(t);
            return "$async" in n || (this.errors = n.errors), r;
        }
        compile(e, t) {
            const n = this._addSchema(e, t);
            return n.validate || this._compileSchemaEnv(n);
        }
        compileAsync(e, t) {
            if ("function" != typeof this.opts.loadSchema) throw new Error("options.loadSchema should be a function");
            const {loadSchema: n} = this.opts;
            return r.call(this, e, t);
            async function r(e, t) {
                await i.call(this, e.$schema);
                const n = this._addSchema(e, t);
                return n.validate || o.call(this, n);
            }
            async function i(e) {
                e && !this.getSchema(e) && await r.call(this, {
                    $ref: e
                }, !0);
            }
            async function o(e) {
                try {
                    return this._compileSchemaEnv(e);
                } catch (t) {
                    if (!(t instanceof a.default)) throw t;
                    return s.call(this, t), await l.call(this, t.missingSchema), o.call(this, e);
                }
            }
            function s({missingSchema: e, missingRef: t}) {
                if (this.refs[e]) throw new Error(`AnySchema ${e} is loaded but ${t} cannot be resolved`);
            }
            async function l(e) {
                const n = await c.call(this, e);
                this.refs[e] || await i.call(this, n.$schema), this.refs[e] || this.addSchema(n, e, t);
            }
            async function c(e) {
                const t = this._loading[e];
                if (t) return t;
                try {
                    return await (this._loading[e] = n(e));
                } finally {
                    delete this._loading[e];
                }
            }
        }
        addSchema(e, t, n, r = this.opts.validateSchema) {
            if (Array.isArray(e)) {
                for (const t of e) this.addSchema(t, void 0, n, r);
                return this;
            }
            let i;
            if ("object" == typeof e) {
                const {schemaId: t} = this.opts;
                if (i = e[t], void 0 !== i && "string" != typeof i) throw new Error(`schema ${t} must be string`);
            }
            return t = (0, u.normalizeId)(t || i), this._checkUnique(t), this.schemas[t] = this._addSchema(e, n, t, r, !0), 
            this;
        }
        addMetaSchema(e, t, n = this.opts.validateSchema) {
            return this.addSchema(e, t, !0, n), this;
        }
        validateSchema(e, t) {
            if ("boolean" == typeof e) return !0;
            let n;
            if (n = e.$schema, void 0 !== n && "string" != typeof n) throw new Error("$schema must be a string");
            if (n = n || this.opts.defaultMeta || this.defaultMeta(), !n) return this.logger.warn("meta-schema not available"), 
            this.errors = null, !0;
            const r = this.validate(n, e);
            if (!r && t) {
                const e = "schema is invalid: " + this.errorsText();
                if ("log" !== this.opts.validateSchema) throw new Error(e);
                this.logger.error(e);
            }
            return r;
        }
        getSchema(e) {
            let t;
            for (;"string" == typeof (t = S.call(this, e)); ) e = t;
            if (void 0 === t) {
                const {schemaId: n} = this.opts, r = new l.SchemaEnv({
                    schema: {},
                    schemaId: n
                });
                if (t = l.resolveSchema.call(this, r, e), !t) return;
                this.refs[e] = t;
            }
            return t.validate || this._compileSchemaEnv(t);
        }
        removeSchema(e) {
            if (e instanceof RegExp) return this._removeAllSchemas(this.schemas, e), this._removeAllSchemas(this.refs, e), 
            this;
            switch (typeof e) {
              case "undefined":
                return this._removeAllSchemas(this.schemas), this._removeAllSchemas(this.refs), 
                this._cache.clear(), this;

              case "string":
                {
                    const t = S.call(this, e);
                    return "object" == typeof t && this._cache.delete(t.schema), delete this.schemas[e], 
                    delete this.refs[e], this;
                }

              case "object":
                {
                    const t = e;
                    this._cache.delete(t);
                    let n = e[this.opts.schemaId];
                    return n && (n = (0, u.normalizeId)(n), delete this.schemas[n], delete this.refs[n]), 
                    this;
                }

              default:
                throw new Error("ajv.removeSchema: invalid parameter");
            }
        }
        addVocabulary(e) {
            for (const t of e) this.addKeyword(t);
            return this;
        }
        addKeyword(e, t) {
            let n;
            if ("string" == typeof e) n = e, "object" == typeof t && (this.logger.warn("these parameters are deprecated, see docs for addKeyword"), 
            t.keyword = n); else {
                if ("object" != typeof e || void 0 !== t) throw new Error("invalid addKeywords parameters");
                if (n = (t = e).keyword, Array.isArray(n) && !n.length) throw new Error("addKeywords: keyword must be string or non-empty array");
            }
            if (R.call(this, n, t), !t) return (0, h.eachItem)(n, e => D.call(this, e)), this;
            k.call(this, t);
            const r = {
                ...t,
                type: (0, d.getJSONTypes)(t.type),
                schemaType: (0, d.getJSONTypes)(t.schemaType)
            };
            return (0, h.eachItem)(n, 0 === r.type.length ? e => D.call(this, e, r) : e => r.type.forEach(t => D.call(this, e, r, t))), 
            this;
        }
        getKeyword(e) {
            const t = this.RULES.all[e];
            return "object" == typeof t ? t.definition : !!t;
        }
        removeKeyword(e) {
            const {RULES: t} = this;
            delete t.keywords[e], delete t.all[e];
            for (const n of t.rules) {
                const t = n.rules.findIndex(t => t.keyword === e);
                t >= 0 && n.rules.splice(t, 1);
            }
            return this;
        }
        addFormat(e, t) {
            return "string" == typeof t && (t = new RegExp(t)), this.formats[e] = t, this;
        }
        errorsText(e = this.errors, {separator: t = ", ", dataVar: n = "data"} = {}) {
            return e && 0 !== e.length ? e.map(e => `${n}${e.instancePath} ${e.message}`).reduce((e, n) => e + t + n) : "No errors";
        }
        $dataMetaSchema(e, t) {
            const n = this.RULES.all;
            e = JSON.parse(JSON.stringify(e));
            for (const r of t) {
                const t = r.split("/").slice(1);
                let i = e;
                for (const e of t) i = i[e];
                for (const e in n) {
                    const t = n[e];
                    if ("object" != typeof t) continue;
                    const {$data: r} = t.definition, o = i[e];
                    r && o && (i[e] = P(o));
                }
            }
            return e;
        }
        _removeAllSchemas(e, t) {
            for (const n in e) {
                const r = e[n];
                t && !t.test(n) || ("string" == typeof r ? delete e[n] : r && !r.meta && (this._cache.delete(r.schema), 
                delete e[n]));
            }
        }
        _addSchema(e, t, n, r = this.opts.validateSchema, i = this.opts.addUsedSchema) {
            let o;
            const {schemaId: a} = this.opts;
            if ("object" == typeof e) o = e[a]; else {
                if (this.opts.jtd) throw new Error("schema must be object");
                if ("boolean" != typeof e) throw new Error("schema must be object or boolean");
            }
            let s = this._cache.get(e);
            if (void 0 !== s) return s;
            n = (0, u.normalizeId)(o || n);
            const c = u.getSchemaRefs.call(this, e, n);
            return s = new l.SchemaEnv({
                schema: e,
                schemaId: a,
                meta: t,
                baseId: n,
                localRefs: c
            }), this._cache.set(s.schema, s), i && !n.startsWith("#") && (n && this._checkUnique(n), 
            this.refs[n] = s), r && this.validateSchema(e, !0), s;
        }
        _checkUnique(e) {
            if (this.schemas[e] || this.refs[e]) throw new Error(`schema with key or id "${e}" already exists`);
        }
        _compileSchemaEnv(e) {
            if (e.meta ? this._compileMetaSchema(e) : l.compileSchema.call(this, e), !e.validate) throw new Error("ajv implementation error");
            return e.validate;
        }
        _compileMetaSchema(e) {
            const t = this.opts;
            this.opts = this._metaOpts;
            try {
                l.compileSchema.call(this, e);
            } finally {
                this.opts = t;
            }
        }
    }
    function w(e, t, n, r = "error") {
        for (const i in e) {
            const o = i;
            o in t && this.logger[r](`${n}: option ${i}. ${e[o]}`);
        }
    }
    function S(e) {
        return e = (0, u.normalizeId)(e), this.schemas[e] || this.refs[e];
    }
    function T() {
        const e = this.opts.schemas;
        if (e) if (Array.isArray(e)) this.addSchema(e); else for (const t in e) this.addSchema(e[t], t);
    }
    function A() {
        for (const e in this.opts.formats) {
            const t = this.opts.formats[e];
            t && this.addFormat(e, t);
        }
    }
    function O(e) {
        if (Array.isArray(e)) this.addVocabulary(e); else {
            this.logger.warn("keywords option as map is deprecated, pass array");
            for (const t in e) {
                const n = e[t];
                n.keyword || (n.keyword = t), this.addKeyword(n);
            }
        }
    }
    function C() {
        const e = {
            ...this.opts
        };
        for (const t of m) delete e[t];
        return e;
    }
    b.ValidationError = o.default, b.MissingRefError = a.default, t.default = b;
    const N = {
        log() {},
        warn() {},
        error() {}
    };
    const I = /^[a-z_$][a-z0-9_$:-]*$/i;
    function R(e, t) {
        const {RULES: n} = this;
        if ((0, h.eachItem)(e, e => {
            if (n.keywords[e]) throw new Error(`Keyword ${e} is already defined`);
            if (!I.test(e)) throw new Error(`Keyword ${e} has invalid name`);
        }), t && t.$data && !("code" in t) && !("validate" in t)) throw new Error('$data keyword must have "code" or "validate" function');
    }
    function D(e, t, n) {
        var r;
        const i = null == t ? void 0 : t.post;
        if (n && i) throw new Error('keyword with "post" flag cannot have "type"');
        const {RULES: o} = this;
        let a = i ? o.post : o.rules.find(({type: e}) => e === n);
        if (a || (a = {
            type: n,
            rules: []
        }, o.rules.push(a)), o.keywords[e] = !0, !t) return;
        const s = {
            keyword: e,
            definition: {
                ...t,
                type: (0, d.getJSONTypes)(t.type),
                schemaType: (0, d.getJSONTypes)(t.schemaType)
            }
        };
        t.before ? L.call(this, a, s, t.before) : a.rules.push(s), o.all[e] = s, null === (r = t.implements) || void 0 === r || r.forEach(e => this.addKeyword(e));
    }
    function L(e, t, n) {
        const r = e.rules.findIndex(e => e.keyword === n);
        r >= 0 ? e.rules.splice(r, 0, t) : (e.rules.push(t), this.logger.warn(`rule ${n} is not defined`));
    }
    function k(e) {
        let {metaSchema: t} = e;
        void 0 !== t && (e.$data && this.opts.$data && (t = P(t)), e.validateSchema = this.compile(t, !0));
    }
    const M = {
        $ref: "https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#"
    };
    function P(e) {
        return {
            anyOf: [ e, M ]
        };
    }
}
