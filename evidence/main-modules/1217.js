// analysis/pretty/main.js:95932; webpack module 1217
function(e, t, n) {
    "use strict";
    e.exports = function(e, t, n) {
        var r = " ", i = e.level, o = e.dataLevel, a = e.schema[t], s = e.schemaPath + e.util.getProperty(t), l = e.errSchemaPath + "/" + t, c = !e.opts.allErrors, u = "data" + (o || ""), d = "valid" + i, h = "errs__" + i, p = e.util.copy(e);
        p.level++;
        var f = "valid" + p.level, _ = "i" + i, m = p.dataLevel = e.dataLevel + 1, g = "data" + m, v = e.baseId, y = e.opts.strictKeywords ? "object" == typeof a && Object.keys(a).length > 0 || !1 === a : e.util.schemaHasRules(a, e.RULES.all);
        if (r += "var " + h + " = errors;var " + d + ";", y) {
            var E = e.compositeRule;
            e.compositeRule = p.compositeRule = !0, p.schema = a, p.schemaPath = s, p.errSchemaPath = l, 
            r += " var " + f + " = false; for (var " + _ + " = 0; " + _ + " < " + u + ".length; " + _ + "++) { ", 
            p.errorPath = e.util.getPathExpr(e.errorPath, _, e.opts.jsonPointers, !0);
            var b = u + "[" + _ + "]";
            p.dataPathArr[m] = _;
            var w = e.validate(p);
            p.baseId = v, e.util.varOccurences(w, g) < 2 ? r += " " + e.util.varReplace(w, g, b) + " " : r += " var " + g + " = " + b + "; " + w + " ", 
            r += " if (" + f + ") break; }  ", e.compositeRule = p.compositeRule = E, r += "  if (!" + f + ") {";
        } else r += " if (" + u + ".length == 0) {";
        var S = S || [];
        S.push(r), r = "", !1 !== e.createErrors ? (r += " { keyword: 'contains' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(l) + " , params: {} ", 
        !1 !== e.opts.messages && (r += " , message: 'should contain a valid item' "), e.opts.verbose && (r += " , schema: validate.schema" + s + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + u + " "), 
        r += " } ") : r += " {} ";
        var T = r;
        return r = S.pop(), !e.compositeRule && c ? e.async ? r += " throw new ValidationError([" + T + "]); " : r += " validate.errors = [" + T + "]; return false; " : r += " var err = " + T + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", 
        r += " } else { ", y && (r += "  errors = " + h + "; if (vErrors !== null) { if (" + h + ") vErrors.length = " + h + "; else vErrors = null; } "), 
        e.opts.allErrors && (r += " } "), r;
    };
}
