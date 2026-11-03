// analysis/pretty/main.js:96215; webpack module 1225
function(e, t, n) {
    "use strict";
    e.exports = function(e, t, n) {
        var r = " ", i = e.level, o = e.dataLevel, a = e.schema[t], s = e.schemaPath + e.util.getProperty(t), l = e.errSchemaPath + "/" + t, c = !e.opts.allErrors, u = "data" + (o || ""), d = "valid" + i, h = "errs__" + i, p = e.util.copy(e), f = "";
        p.level++;
        var _ = "valid" + p.level, m = p.baseId, g = "prevValid" + i, v = "passingSchemas" + i;
        r += "var " + h + " = errors , " + g + " = false , " + d + " = false , " + v + " = null; ";
        var y = e.compositeRule;
        e.compositeRule = p.compositeRule = !0;
        var E = a;
        if (E) for (var b, w = -1, S = E.length - 1; w < S; ) b = E[w += 1], (e.opts.strictKeywords ? "object" == typeof b && Object.keys(b).length > 0 || !1 === b : e.util.schemaHasRules(b, e.RULES.all)) ? (p.schema = b, 
        p.schemaPath = s + "[" + w + "]", p.errSchemaPath = l + "/" + w, r += "  " + e.validate(p) + " ", 
        p.baseId = m) : r += " var " + _ + " = true; ", w && (r += " if (" + _ + " && " + g + ") { " + d + " = false; " + v + " = [" + v + ", " + w + "]; } else { ", 
        f += "}"), r += " if (" + _ + ") { " + d + " = " + g + " = true; " + v + " = " + w + "; }";
        return e.compositeRule = p.compositeRule = y, r += f + "if (!" + d + ") {   var err =   ", 
        !1 !== e.createErrors ? (r += " { keyword: 'oneOf' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(l) + " , params: { passingSchemas: " + v + " } ", 
        !1 !== e.opts.messages && (r += " , message: 'should match exactly one schema in oneOf' "), 
        e.opts.verbose && (r += " , schema: validate.schema" + s + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + u + " "), 
        r += " } ") : r += " {} ", r += ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", 
        !e.compositeRule && c && (e.async ? r += " throw new ValidationError(vErrors); " : r += " validate.errors = vErrors; return false; "), 
        r += "} else {  errors = " + h + "; if (vErrors !== null) { if (" + h + ") vErrors.length = " + h + "; else vErrors = null; }", 
        e.opts.allErrors && (r += " } "), r;
    };
}
