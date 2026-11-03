// analysis/pretty/main.js:76844; webpack module 864
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.MissingRefError = t.ValidationError = t.CodeGen = t.Name = t.nil = t.stringify = t.str = t._ = t.KeywordCxt = t.Ajv = void 0;
    const r = n(865), i = n(874), o = n(907), a = n(909), s = [ "/properties" ], l = "http://json-schema.org/draft-07/schema";
    class c extends r.default {
        _addVocabularies() {
            super._addVocabularies(), i.default.forEach(e => this.addVocabulary(e)), this.opts.discriminator && this.addKeyword(o.default);
        }
        _addDefaultMetaSchema() {
            if (super._addDefaultMetaSchema(), !this.opts.meta) return;
            const e = this.opts.$data ? this.$dataMetaSchema(a, s) : a;
            this.addMetaSchema(e, l, !1), this.refs["http://json-schema.org/schema"] = l;
        }
        defaultMeta() {
            return this.opts.defaultMeta = super.defaultMeta() || (this.getSchema(l) ? l : void 0);
        }
    }
    t.Ajv = c, e.exports = t = c, e.exports.Ajv = c, Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = c;
    var u = n(184);
    Object.defineProperty(t, "KeywordCxt", {
        enumerable: !0,
        get: function() {
            return u.KeywordCxt;
        }
    });
    var d = n(14);
    Object.defineProperty(t, "_", {
        enumerable: !0,
        get: function() {
            return d._;
        }
    }), Object.defineProperty(t, "str", {
        enumerable: !0,
        get: function() {
            return d.str;
        }
    }), Object.defineProperty(t, "stringify", {
        enumerable: !0,
        get: function() {
            return d.stringify;
        }
    }), Object.defineProperty(t, "nil", {
        enumerable: !0,
        get: function() {
            return d.nil;
        }
    }), Object.defineProperty(t, "Name", {
        enumerable: !0,
        get: function() {
            return d.Name;
        }
    }), Object.defineProperty(t, "CodeGen", {
        enumerable: !0,
        get: function() {
            return d.CodeGen;
        }
    });
    var h = n(253);
    Object.defineProperty(t, "ValidationError", {
        enumerable: !0,
        get: function() {
            return h.default;
        }
    });
    var p = n(189);
    Object.defineProperty(t, "MissingRefError", {
        enumerable: !0,
        get: function() {
            return p.default;
        }
    });
}
