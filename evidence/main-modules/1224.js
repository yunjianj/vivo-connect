// analysis/pretty/main.js:96189; webpack module 1224
function(e, t, n) {
    "use strict";
    e.exports = function(e, t, n) {
        var r = " ", i = e.level, o = e.dataLevel, a = e.schema[t], s = e.schemaPath + e.util.getProperty(t), l = e.errSchemaPath + "/" + t, c = !e.opts.allErrors, u = "data" + (o || ""), d = "errs__" + i, h = e.util.copy(e);
        h.level++;
        var p = "valid" + h.level;
        if (e.opts.strictKeywords ? "object" == typeof a && Object.keys(a).length > 0 || !1 === a : e.util.schemaHasRules(a, e.RULES.all)) {
            h.schema = a, h.schemaPath = s, h.errSchemaPath = l, r += " var " + d + " = errors;  ";
            var f, _ = e.compositeRule;
            e.compositeRule = h.compositeRule = !0, h.createErrors = !1, h.opts.allErrors && (f = h.opts.allErrors, 
            h.opts.allErrors = !1), r += " " + e.validate(h) + " ", h.createErrors = !0, f && (h.opts.allErrors = f), 
            e.compositeRule = h.compositeRule = _, r += " if (" + p + ") {   ";
            var m = m || [];
            m.push(r), r = "", !1 !== e.createErrors ? (r += " { keyword: 'not' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(l) + " , params: {} ", 
            !1 !== e.opts.messages && (r += " , message: 'should NOT be valid' "), e.opts.verbose && (r += " , schema: validate.schema" + s + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + u + " "), 
            r += " } ") : r += " {} ";
            var g = r;
            r = m.pop(), !e.compositeRule && c ? e.async ? r += " throw new ValidationError([" + g + "]); " : r += " validate.errors = [" + g + "]; return false; " : r += " var err = " + g + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", 
            r += " } else {  errors = " + d + "; if (vErrors !== null) { if (" + d + ") vErrors.length = " + d + "; else vErrors = null; } ", 
            e.opts.allErrors && (r += " } ");
        } else r += "  var err =   ", !1 !== e.createErrors ? (r += " { keyword: 'not' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(l) + " , params: {} ", 
        !1 !== e.opts.messages && (r += " , message: 'should NOT be valid' "), e.opts.verbose && (r += " , schema: validate.schema" + s + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + u + " "), 
        r += " } ") : r += " {} ", r += ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", 
        c && (r += " if (false) { ");
        return r;
    };
}
