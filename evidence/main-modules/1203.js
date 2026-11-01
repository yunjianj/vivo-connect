// analysis/pretty/main.js:94708; webpack module 1203
function(e, t, n) {
    "use strict";
    var r = n(1204), i = n(301), o = n(1208), a = n(640), s = n(641), l = n(1209), c = n(1210), u = n(1231), d = n(130);
    e.exports = g, g.prototype.validate = function(e, t) {
        var n;
        if ("string" == typeof e) {
            if (!(n = this.getSchema(e))) throw new Error('no schema with key or ref "' + e + '"');
        } else {
            var r = this._addSchema(e);
            n = r.validate || this._compile(r);
        }
        var i = n(t);
        !0 !== n.$async && (this.errors = n.errors);
        return i;
    }, g.prototype.compile = function(e, t) {
        var n = this._addSchema(e, void 0, t);
        return n.validate || this._compile(n);
    }, g.prototype.addSchema = function(e, t, n, r) {
        if (Array.isArray(e)) {
            for (var o = 0; o < e.length; o++) this.addSchema(e[o], void 0, n, r);
            return this;
        }
        var a = this._getId(e);
        if (void 0 !== a && "string" != typeof a) throw new Error("schema id must be string");
        return S(this, t = i.normalizeId(t || a)), this._schemas[t] = this._addSchema(e, n, r, !0), 
        this;
    }, g.prototype.addMetaSchema = function(e, t, n) {
        return this.addSchema(e, t, n, !0), this;
    }, g.prototype.validateSchema = function(e, t) {
        var n = e.$schema;
        if (void 0 !== n && "string" != typeof n) throw new Error("$schema must be a string");
        if (!(n = n || this._opts.defaultMeta || function(e) {
            var t = e._opts.meta;
            return e._opts.defaultMeta = "object" == typeof t ? e._getId(t) || t : e.getSchema(f) ? f : void 0, 
            e._opts.defaultMeta;
        }(this))) return this.logger.warn("meta-schema not available"), this.errors = null, 
        !0;
        var r = this.validate(n, e);
        if (!r && t) {
            var i = "schema is invalid: " + this.errorsText();
            if ("log" != this._opts.validateSchema) throw new Error(i);
            this.logger.error(i);
        }
        return r;
    }, g.prototype.getSchema = function(e) {
        var t = v(this, e);
        switch (typeof t) {
          case "object":
            return t.validate || this._compile(t);

          case "string":
            return this.getSchema(t);

          case "undefined":
            return function(e, t) {
                var n = i.schema.call(e, {
                    schema: {}
                }, t);
                if (n) {
                    var o = n.schema, s = n.root, l = n.baseId, c = r.call(e, o, s, void 0, l);
                    return e._fragments[t] = new a({
                        ref: t,
                        fragment: !0,
                        schema: o,
                        root: s,
                        baseId: l,
                        validate: c
                    }), c;
                }
            }(this, e);
        }
    }, g.prototype.removeSchema = function(e) {
        if (e instanceof RegExp) return y(this, this._schemas, e), y(this, this._refs, e), 
        this;
        switch (typeof e) {
          case "undefined":
            return y(this, this._schemas), y(this, this._refs), this._cache.clear(), this;

          case "string":
            var t = v(this, e);
            return t && this._cache.del(t.cacheKey), delete this._schemas[e], delete this._refs[e], 
            this;

          case "object":
            var n = this._opts.serialize, r = n ? n(e) : e;
            this._cache.del(r);
            var o = this._getId(e);
            o && (o = i.normalizeId(o), delete this._schemas[o], delete this._refs[o]);
        }
        return this;
    }, g.prototype.addFormat = function(e, t) {
        "string" == typeof t && (t = new RegExp(t));
        return this._formats[e] = t, this;
    }, g.prototype.errorsText = function(e, t) {
        if (!(e = e || this.errors)) return "No errors";
        for (var n = void 0 === (t = t || {}).separator ? ", " : t.separator, r = void 0 === t.dataVar ? "data" : t.dataVar, i = "", o = 0; o < e.length; o++) {
            var a = e[o];
            a && (i += r + a.dataPath + " " + a.message + n);
        }
        return i.slice(0, -n.length);
    }, g.prototype._addSchema = function(e, t, n, r) {
        if ("object" != typeof e && "boolean" != typeof e) throw new Error("schema should be object or boolean");
        var o = this._opts.serialize, s = o ? o(e) : e, l = this._cache.get(s);
        if (l) return l;
        r = r || !1 !== this._opts.addUsedSchema;
        var c = i.normalizeId(this._getId(e));
        c && r && S(this, c);
        var u, d = !1 !== this._opts.validateSchema && !t;
        d && !(u = c && c == i.normalizeId(e.$schema)) && this.validateSchema(e, !0);
        var h = i.ids.call(this, e), p = new a({
            id: c,
            schema: e,
            localRefs: h,
            cacheKey: s,
            meta: n
        });
        "#" != c[0] && r && (this._refs[c] = p);
        this._cache.put(s, p), d && u && this.validateSchema(e, !0);
        return p;
    }, g.prototype._compile = function(e, t) {
        if (e.compiling) return e.validate = o, o.schema = e.schema, o.errors = null, o.root = t || o, 
        !0 === e.schema.$async && (o.$async = !0), o;
        var n, i;
        e.compiling = !0, e.meta && (n = this._opts, this._opts = this._metaOpts);
        try {
            i = r.call(this, e.schema, t, e.localRefs);
        } catch (t) {
            throw delete e.validate, t;
        } finally {
            e.compiling = !1, e.meta && (this._opts = n);
        }
        return e.validate = i, e.refs = i.refs, e.refVal = i.refVal, e.root = i.root, i;
        function o() {
            var t = e.validate, n = t.apply(this, arguments);
            return o.errors = t.errors, n;
        }
    }, g.prototype.compileAsync = n(1232);
    var h = n(1233);
    g.prototype.addKeyword = h.add, g.prototype.getKeyword = h.get, g.prototype.removeKeyword = h.remove, 
    g.prototype.validateKeyword = h.validate;
    var p = n(302);
    g.ValidationError = p.Validation, g.MissingRefError = p.MissingRef, g.$dataMetaSchema = u;
    var f = "http://json-schema.org/draft-07/schema", _ = [ "removeAdditional", "useDefaults", "coerceTypes", "strictDefaults" ], m = [ "/properties" ];
    function g(e) {
        if (!(this instanceof g)) return new g(e);
        e = this._opts = d.copy(e) || {}, function(e) {
            var t = e._opts.logger;
            if (!1 === t) e.logger = {
                log: T,
                warn: T,
                error: T
            }; else {
                if (void 0 === t && (t = console), !("object" == typeof t && t.log && t.warn && t.error)) throw new Error("logger must implement log, warn and error methods");
                e.logger = t;
            }
        }(this), this._schemas = {}, this._refs = {}, this._fragments = {}, this._formats = l(e.format), 
        this._cache = e.cache || new o, this._loadingSchemas = {}, this._compilations = [], 
        this.RULES = c(), this._getId = function(e) {
            switch (e.schemaId) {
              case "auto":
                return w;

              case "id":
                return E;

              default:
                return b;
            }
        }(e), e.loopRequired = e.loopRequired || 1 / 0, "property" == e.errorDataPath && (e._errorDataPathProperty = !0), 
        void 0 === e.serialize && (e.serialize = s), this._metaOpts = function(e) {
            for (var t = d.copy(e._opts), n = 0; n < _.length; n++) delete t[_[n]];
            return t;
        }(this), e.formats && function(e) {
            for (var t in e._opts.formats) {
                var n = e._opts.formats[t];
                e.addFormat(t, n);
            }
        }(this), e.keywords && function(e) {
            for (var t in e._opts.keywords) {
                var n = e._opts.keywords[t];
                e.addKeyword(t, n);
            }
        }(this), function(e) {
            var t;
            e._opts.$data && (t = n(1236), e.addMetaSchema(t, t.$id, !0));
            if (!1 === e._opts.meta) return;
            var r = n(647);
            e._opts.$data && (r = u(r, m));
            e.addMetaSchema(r, f, !0), e._refs["http://json-schema.org/schema"] = f;
        }(this), "object" == typeof e.meta && this.addMetaSchema(e.meta), e.nullable && this.addKeyword("nullable", {
            metaSchema: {
                type: "boolean"
            }
        }), function(e) {
            var t = e._opts.schemas;
            if (!t) return;
            if (Array.isArray(t)) e.addSchema(t); else for (var n in t) e.addSchema(t[n], n);
        }(this);
    }
    function v(e, t) {
        return t = i.normalizeId(t), e._schemas[t] || e._refs[t] || e._fragments[t];
    }
    function y(e, t, n) {
        for (var r in t) {
            var i = t[r];
            i.meta || n && !n.test(r) || (e._cache.del(i.cacheKey), delete t[r]);
        }
    }
    function E(e) {
        return e.$id && this.logger.warn("schema $id ignored", e.$id), e.id;
    }
    function b(e) {
        return e.id && this.logger.warn("schema id ignored", e.id), e.$id;
    }
    function w(e) {
        if (e.$id && e.id && e.$id != e.id) throw new Error("schema $id is different from id");
        return e.$id || e.id;
    }
    function S(e, t) {
        if (e._schemas[t] || e._refs[t]) throw new Error('schema with key or id "' + t + '" already exists');
    }
    function T() {}
}
