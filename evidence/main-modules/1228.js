// analysis/pretty/main.js:96378; webpack module 1228
function(e, t, n) {
    "use strict";
    e.exports = function(e, t, n) {
        var r = " ", i = e.level, o = e.dataLevel, a = e.schema[t], s = e.schemaPath + e.util.getProperty(t), l = e.errSchemaPath + "/" + t, c = !e.opts.allErrors, u = "data" + (o || ""), d = "errs__" + i, h = e.util.copy(e);
        h.level++;
        var p = "valid" + h.level;
        if (r += "var " + d + " = errors;", e.opts.strictKeywords ? "object" == typeof a && Object.keys(a).length > 0 || !1 === a : e.util.schemaHasRules(a, e.RULES.all)) {
            h.schema = a, h.schemaPath = s, h.errSchemaPath = l;
            var f = "key" + i, _ = "idx" + i, m = "i" + i, g = "' + " + f + " + '", v = "data" + (h.dataLevel = e.dataLevel + 1), y = "dataProperties" + i, E = e.opts.ownProperties, b = e.baseId;
            E && (r += " var " + y + " = undefined; "), r += E ? " " + y + " = " + y + " || Object.keys(" + u + "); for (var " + _ + "=0; " + _ + "<" + y + ".length; " + _ + "++) { var " + f + " = " + y + "[" + _ + "]; " : " for (var " + f + " in " + u + ") { ", 
            r += " var startErrs" + i + " = errors; ";
            var w = f, S = e.compositeRule;
            e.compositeRule = h.compositeRule = !0;
            var T = e.validate(h);
            h.baseId = b, e.util.varOccurences(T, v) < 2 ? r += " " + e.util.varReplace(T, v, w) + " " : r += " var " + v + " = " + w + "; " + T + " ", 
            e.compositeRule = h.compositeRule = S, r += " if (!" + p + ") { for (var " + m + "=startErrs" + i + "; " + m + "<errors; " + m + "++) { vErrors[" + m + "].propertyName = " + f + "; }   var err =   ", 
            !1 !== e.createErrors ? (r += " { keyword: 'propertyNames' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(l) + " , params: { propertyName: '" + g + "' } ", 
            !1 !== e.opts.messages && (r += " , message: 'property name \\'" + g + "\\' is invalid' "), 
            e.opts.verbose && (r += " , schema: validate.schema" + s + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + u + " "), 
            r += " } ") : r += " {} ", r += ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", 
            !e.compositeRule && c && (e.async ? r += " throw new ValidationError(vErrors); " : r += " validate.errors = vErrors; return false; "), 
            c && (r += " break; "), r += " } }";
        }
        return c && (r += "  if (" + d + " == errors) {"), r;
    };
}
