// analysis/pretty/main.js:24406; webpack module 184
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.getData = t.KeywordCxt = t.validateFunctionCode = void 0;
    const r = n(866), i = n(187), o = n(393), a = n(187), s = n(867), l = n(868), c = n(869), u = n(14), d = n(85), h = n(188), p = n(18), f = n(185);
    function _({gen: e, validateName: t, schema: n, schemaEnv: r, opts: i}, o) {
        i.code.es5 ? e.func(t, u._`${d.default.data}, ${d.default.valCxt}`, r.$async, () => {
            e.code(u._`"use strict"; ${m(n, i)}`), function(e, t) {
                e.if(d.default.valCxt, () => {
                    e.var(d.default.instancePath, u._`${d.default.valCxt}.${d.default.instancePath}`), 
                    e.var(d.default.parentData, u._`${d.default.valCxt}.${d.default.parentData}`), e.var(d.default.parentDataProperty, u._`${d.default.valCxt}.${d.default.parentDataProperty}`), 
                    e.var(d.default.rootData, u._`${d.default.valCxt}.${d.default.rootData}`), t.dynamicRef && e.var(d.default.dynamicAnchors, u._`${d.default.valCxt}.${d.default.dynamicAnchors}`);
                }, () => {
                    e.var(d.default.instancePath, u._`""`), e.var(d.default.parentData, u._`undefined`), 
                    e.var(d.default.parentDataProperty, u._`undefined`), e.var(d.default.rootData, d.default.data), 
                    t.dynamicRef && e.var(d.default.dynamicAnchors, u._`{}`);
                });
            }(e, i), e.code(o);
        }) : e.func(t, u._`${d.default.data}, ${function(e) {
            return u._`{${d.default.instancePath}="", ${d.default.parentData}, ${d.default.parentDataProperty}, ${d.default.rootData}=${d.default.data}${e.dynamicRef ? u._`, ${d.default.dynamicAnchors}={}` : u.nil}}={}`;
        }(i)}`, r.$async, () => e.code(m(n, i)).code(o));
    }
    function m(e, t) {
        const n = "object" == typeof e && e[t.schemaId];
        return n && (t.code.source || t.code.process) ? u._`/*# sourceURL=${n} */` : u.nil;
    }
    function g(e, t) {
        y(e) && (E(e), v(e)) ? function(e, t) {
            const {schema: n, gen: r, opts: i} = e;
            i.$comment && n.$comment && w(e);
            (function(e) {
                const t = e.schema[e.opts.schemaId];
                t && (e.baseId = (0, h.resolveUrl)(e.opts.uriResolver, e.baseId, t));
            })(e), function(e) {
                if (e.schema.$async && !e.schemaEnv.$async) throw new Error("async schema in sync schema");
            }(e);
            const o = r.const("_errs", d.default.errors);
            b(e, o), r.var(t, u._`${o} === ${d.default.errors}`);
        }(e, t) : (0, r.boolOrEmptySchema)(e, t);
    }
    function v({schema: e, self: t}) {
        if ("boolean" == typeof e) return !e;
        for (const n in e) if (t.RULES.all[n]) return !0;
        return !1;
    }
    function y(e) {
        return "boolean" != typeof e.schema;
    }
    function E(e) {
        (0, p.checkUnknownRules)(e), function(e) {
            const {schema: t, errSchemaPath: n, opts: r, self: i} = e;
            t.$ref && r.ignoreKeywordsWithRef && (0, p.schemaHasRulesButRef)(t, i.RULES) && i.logger.warn(`$ref: keywords ignored in schema at path "${n}"`);
        }(e);
    }
    function b(e, t) {
        if (e.opts.jtd) return S(e, [], !1, t);
        const n = (0, i.getSchemaTypes)(e.schema);
        S(e, n, !(0, i.coerceAndCheckDataType)(e, n), t);
    }
    function w({gen: e, schemaEnv: t, schema: n, errSchemaPath: r, opts: i}) {
        const o = n.$comment;
        if (!0 === i.$comment) e.code(u._`${d.default.self}.logger.log(${o})`); else if ("function" == typeof i.$comment) {
            const n = u.str`${r}/$comment`, i = e.scopeValue("root", {
                ref: t.root
            });
            e.code(u._`${d.default.self}.opts.$comment(${o}, ${n}, ${i}.schema)`);
        }
    }
    function S(e, t, n, r) {
        const {gen: i, schema: s, data: l, allErrors: c, opts: h, self: f} = e, {RULES: _} = f;
        function m(p) {
            (0, o.shouldUseGroup)(s, p) && (p.type ? (i.if((0, a.checkDataType)(p.type, l, h.strictNumbers)), 
            T(e, p), 1 === t.length && t[0] === p.type && n && (i.else(), (0, a.reportTypeError)(e)), 
            i.endIf()) : T(e, p), c || i.if(u._`${d.default.errors} === ${r || 0}`));
        }
        !s.$ref || !h.ignoreKeywordsWithRef && (0, p.schemaHasRulesButRef)(s, _) ? (h.jtd || function(e, t) {
            if (e.schemaEnv.meta || !e.opts.strictTypes) return;
            (function(e, t) {
                if (!t.length) return;
                if (!e.dataTypes.length) return void (e.dataTypes = t);
                t.forEach(t => {
                    A(e.dataTypes, t) || O(e, `type "${t}" not allowed by context "${e.dataTypes.join(",")}"`);
                }), function(e, t) {
                    const n = [];
                    for (const r of e.dataTypes) A(t, r) ? n.push(r) : t.includes("integer") && "number" === r && n.push("integer");
                    e.dataTypes = n;
                }(e, t);
            })(e, t), e.opts.allowUnionTypes || function(e, t) {
                t.length > 1 && (2 !== t.length || !t.includes("null")) && O(e, "use allowUnionTypes to allow union type keyword");
            }(e, t);
            !function(e, t) {
                const n = e.self.RULES.all;
                for (const r in n) {
                    const i = n[r];
                    if ("object" == typeof i && (0, o.shouldUseRule)(e.schema, i)) {
                        const {type: n} = i.definition;
                        n.length && !n.some(e => {
                            return r = e, (n = t).includes(r) || "number" === r && n.includes("integer");
                            var n, r;
                        }) && O(e, `missing type "${n.join(",")}" for keyword "${r}"`);
                    }
                }
            }(e, e.dataTypes);
        }(e, t), i.block(() => {
            for (const e of _.rules) m(e);
            m(_.post);
        })) : i.block(() => N(e, "$ref", _.all.$ref.definition));
    }
    function T(e, t) {
        const {gen: n, schema: r, opts: {useDefaults: i}} = e;
        i && (0, s.assignDefaults)(e, t.type), n.block(() => {
            for (const n of t.rules) (0, o.shouldUseRule)(r, n) && N(e, n.keyword, n.definition, t.type);
        });
    }
    function A(e, t) {
        return e.includes(t) || "integer" === t && e.includes("number");
    }
    function O(e, t) {
        t += ` at "${e.schemaEnv.baseId + e.errSchemaPath}" (strictTypes)`, (0, p.checkStrictMode)(e, t, e.opts.strictTypes);
    }
    t.validateFunctionCode = function(e) {
        y(e) && (E(e), v(e)) ? function(e) {
            const {schema: t, opts: n, gen: r} = e;
            _(e, () => {
                n.$comment && t.$comment && w(e), function(e) {
                    const {schema: t, opts: n} = e;
                    void 0 !== t.default && n.useDefaults && n.strictSchema && (0, p.checkStrictMode)(e, "default is ignored in the schema root");
                }(e), r.let(d.default.vErrors, null), r.let(d.default.errors, 0), n.unevaluated && function(e) {
                    const {gen: t, validateName: n} = e;
                    e.evaluated = t.const("evaluated", u._`${n}.evaluated`), t.if(u._`${e.evaluated}.dynamicProps`, () => t.assign(u._`${e.evaluated}.props`, u._`undefined`)), 
                    t.if(u._`${e.evaluated}.dynamicItems`, () => t.assign(u._`${e.evaluated}.items`, u._`undefined`));
                }(e), b(e), function(e) {
                    const {gen: t, schemaEnv: n, validateName: r, ValidationError: i, opts: o} = e;
                    n.$async ? t.if(u._`${d.default.errors} === 0`, () => t.return(d.default.data), () => t.throw(u._`new ${i}(${d.default.vErrors})`)) : (t.assign(u._`${r}.errors`, d.default.vErrors), 
                    o.unevaluated && function({gen: e, evaluated: t, props: n, items: r}) {
                        n instanceof u.Name && e.assign(u._`${t}.props`, n);
                        r instanceof u.Name && e.assign(u._`${t}.items`, r);
                    }(e), t.return(u._`${d.default.errors} === 0`));
                }(e);
            });
        }(e) : _(e, () => (0, r.topBoolOrEmptySchema)(e));
    };
    class C {
        constructor(e, t, n) {
            if ((0, l.validateKeywordUsage)(e, t, n), this.gen = e.gen, this.allErrors = e.allErrors, 
            this.keyword = n, this.data = e.data, this.schema = e.schema[n], this.$data = t.$data && e.opts.$data && this.schema && this.schema.$data, 
            this.schemaValue = (0, p.schemaRefOrVal)(e, this.schema, n, this.$data), this.schemaType = t.schemaType, 
            this.parentSchema = e.schema, this.params = {}, this.it = e, this.def = t, this.$data) this.schemaCode = e.gen.const("vSchema", D(this.$data, e)); else if (this.schemaCode = this.schemaValue, 
            !(0, l.validSchemaType)(this.schema, t.schemaType, t.allowUndefined)) throw new Error(`${n} value must be ${JSON.stringify(t.schemaType)}`);
            ("code" in t ? t.trackErrors : !1 !== t.errors) && (this.errsCount = e.gen.const("_errs", d.default.errors));
        }
        result(e, t, n) {
            this.failResult((0, u.not)(e), t, n);
        }
        failResult(e, t, n) {
            this.gen.if(e), n ? n() : this.error(), t ? (this.gen.else(), t(), this.allErrors && this.gen.endIf()) : this.allErrors ? this.gen.endIf() : this.gen.else();
        }
        pass(e, t) {
            this.failResult((0, u.not)(e), void 0, t);
        }
        fail(e) {
            if (void 0 === e) return this.error(), void (this.allErrors || this.gen.if(!1));
            this.gen.if(e), this.error(), this.allErrors ? this.gen.endIf() : this.gen.else();
        }
        fail$data(e) {
            if (!this.$data) return this.fail(e);
            const {schemaCode: t} = this;
            this.fail(u._`${t} !== undefined && (${(0, u.or)(this.invalid$data(), e)})`);
        }
        error(e, t, n) {
            if (t) return this.setParams(t), this._error(e, n), void this.setParams({});
            this._error(e, n);
        }
        _error(e, t) {
            (e ? f.reportExtraError : f.reportError)(this, this.def.error, t);
        }
        $dataError() {
            (0, f.reportError)(this, this.def.$dataError || f.keyword$DataError);
        }
        reset() {
            if (void 0 === this.errsCount) throw new Error('add "trackErrors" to keyword definition');
            (0, f.resetErrorsCount)(this.gen, this.errsCount);
        }
        ok(e) {
            this.allErrors || this.gen.if(e);
        }
        setParams(e, t) {
            t ? Object.assign(this.params, e) : this.params = e;
        }
        block$data(e, t, n = u.nil) {
            this.gen.block(() => {
                this.check$data(e, n), t();
            });
        }
        check$data(e = u.nil, t = u.nil) {
            if (!this.$data) return;
            const {gen: n, schemaCode: r, schemaType: i, def: o} = this;
            n.if((0, u.or)(u._`${r} === undefined`, t)), e !== u.nil && n.assign(e, !0), (i.length || o.validateSchema) && (n.elseIf(this.invalid$data()), 
            this.$dataError(), e !== u.nil && n.assign(e, !1)), n.else();
        }
        invalid$data() {
            const {gen: e, schemaCode: t, schemaType: n, def: r, it: i} = this;
            return (0, u.or)(function() {
                if (n.length) {
                    if (!(t instanceof u.Name)) throw new Error("ajv implementation error");
                    const e = Array.isArray(n) ? n : [ n ];
                    return u._`${(0, a.checkDataTypes)(e, t, i.opts.strictNumbers, a.DataType.Wrong)}`;
                }
                return u.nil;
            }(), function() {
                if (r.validateSchema) {
                    const n = e.scopeValue("validate$data", {
                        ref: r.validateSchema
                    });
                    return u._`!${n}(${t})`;
                }
                return u.nil;
            }());
        }
        subschema(e, t) {
            const n = (0, c.getSubschema)(this.it, e);
            (0, c.extendSubschemaData)(n, this.it, e), (0, c.extendSubschemaMode)(n, e);
            const r = {
                ...this.it,
                ...n,
                items: void 0,
                props: void 0
            };
            return g(r, t), r;
        }
        mergeEvaluated(e, t) {
            const {it: n, gen: r} = this;
            n.opts.unevaluated && (!0 !== n.props && void 0 !== e.props && (n.props = p.mergeEvaluated.props(r, e.props, n.props, t)), 
            !0 !== n.items && void 0 !== e.items && (n.items = p.mergeEvaluated.items(r, e.items, n.items, t)));
        }
        mergeValidEvaluated(e, t) {
            const {it: n, gen: r} = this;
            if (n.opts.unevaluated && (!0 !== n.props || !0 !== n.items)) return r.if(t, () => this.mergeEvaluated(e, u.Name)), 
            !0;
        }
    }
    function N(e, t, n, r) {
        const i = new C(e, n, t);
        "code" in n ? n.code(i, r) : i.$data && n.validate ? (0, l.funcKeywordCode)(i, n) : "macro" in n ? (0, 
        l.macroKeywordCode)(i, n) : (n.compile || n.validate) && (0, l.funcKeywordCode)(i, n);
    }
    t.KeywordCxt = C;
    const I = /^\/(?:[^~]|~0|~1)*$/, R = /^([0-9]+)(#|\/(?:[^~]|~0|~1)*)?$/;
    function D(e, {dataLevel: t, dataNames: n, dataPathArr: r}) {
        let i, o;
        if ("" === e) return d.default.rootData;
        if ("/" === e[0]) {
            if (!I.test(e)) throw new Error("Invalid JSON-pointer: " + e);
            i = e, o = d.default.rootData;
        } else {
            const a = R.exec(e);
            if (!a) throw new Error("Invalid JSON-pointer: " + e);
            const s = +a[1];
            if (i = a[2], "#" === i) {
                if (s >= t) throw new Error(l("property/index", s));
                return r[t - s];
            }
            if (s > t) throw new Error(l("data", s));
            if (o = n[t - s], !i) return o;
        }
        let a = o;
        const s = i.split("/");
        for (const e of s) e && (o = u._`${o}${(0, u.getProperty)((0, p.unescapeJsonPointer)(e))}`, 
        a = u._`${a} && ${o}`);
        return a;
        function l(e, n) {
            return `Cannot access ${e} ${n} levels up, current level is ${t}`;
        }
    }
    t.getData = D;
}
