// analysis/pretty/main.js:96088; webpack module 1221
function(e, t, n) {
    "use strict";
    e.exports = function(e, t, n) {
        var r = " ", i = e.level, o = e.dataLevel, a = e.schema[t], s = e.schemaPath + e.util.getProperty(t), l = e.errSchemaPath + "/" + t, c = !e.opts.allErrors, u = "data" + (o || ""), d = "valid" + i, h = "errs__" + i, p = e.util.copy(e);
        p.level++;
        var f = "valid" + p.level, _ = e.schema.then, m = e.schema.else, g = void 0 !== _ && (e.opts.strictKeywords ? "object" == typeof _ && Object.keys(_).length > 0 || !1 === _ : e.util.schemaHasRules(_, e.RULES.all)), v = void 0 !== m && (e.opts.strictKeywords ? "object" == typeof m && Object.keys(m).length > 0 || !1 === m : e.util.schemaHasRules(m, e.RULES.all)), y = p.baseId;
        if (g || v) {
            var E;
            p.createErrors = !1, p.schema = a, p.schemaPath = s, p.errSchemaPath = l, r += " var " + h + " = errors; var " + d + " = true;  ";
            var b = e.compositeRule;
            e.compositeRule = p.compositeRule = !0, r += "  " + e.validate(p) + " ", p.baseId = y, 
            p.createErrors = !0, r += "  errors = " + h + "; if (vErrors !== null) { if (" + h + ") vErrors.length = " + h + "; else vErrors = null; }  ", 
            e.compositeRule = p.compositeRule = b, g ? (r += " if (" + f + ") {  ", p.schema = e.schema.then, 
            p.schemaPath = e.schemaPath + ".then", p.errSchemaPath = e.errSchemaPath + "/then", 
            r += "  " + e.validate(p) + " ", p.baseId = y, r += " " + d + " = " + f + "; ", 
            g && v ? r += " var " + (E = "ifClause" + i) + " = 'then'; " : E = "'then'", r += " } ", 
            v && (r += " else { ")) : r += " if (!" + f + ") { ", v && (p.schema = e.schema.else, 
            p.schemaPath = e.schemaPath + ".else", p.errSchemaPath = e.errSchemaPath + "/else", 
            r += "  " + e.validate(p) + " ", p.baseId = y, r += " " + d + " = " + f + "; ", 
            g && v ? r += " var " + (E = "ifClause" + i) + " = 'else'; " : E = "'else'", r += " } "), 
            r += " if (!" + d + ") {   var err =   ", !1 !== e.createErrors ? (r += " { keyword: 'if' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(l) + " , params: { failingKeyword: " + E + " } ", 
            !1 !== e.opts.messages && (r += " , message: 'should match \"' + " + E + " + '\" schema' "), 
            e.opts.verbose && (r += " , schema: validate.schema" + s + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + u + " "), 
            r += " } ") : r += " {} ", r += ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", 
            !e.compositeRule && c && (e.async ? r += " throw new ValidationError(vErrors); " : r += " validate.errors = vErrors; return false; "), 
            r += " }   ", c && (r += " else { ");
        } else c && (r += " if (true) { ");
        return r;
    };
}
