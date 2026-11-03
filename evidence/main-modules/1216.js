// analysis/pretty/main.js:95918; webpack module 1216
function(e, t, n) {
    "use strict";
    e.exports = function(e, t, n) {
        var r = " ", i = e.level, o = e.dataLevel, a = e.schema[t], s = e.schemaPath + e.util.getProperty(t), l = e.errSchemaPath + "/" + t, c = !e.opts.allErrors, u = "data" + (o || ""), d = "valid" + i, h = e.opts.$data && a && a.$data;
        h && (r += " var schema" + i + " = " + e.util.getData(a.$data, o, e.dataPathArr) + "; "), 
        h || (r += " var schema" + i + " = validate.schema" + s + ";"), r += "var " + d + " = equal(" + u + ", schema" + i + "); if (!" + d + ") {   ";
        var p = p || [];
        p.push(r), r = "", !1 !== e.createErrors ? (r += " { keyword: 'const' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(l) + " , params: { allowedValue: schema" + i + " } ", 
        !1 !== e.opts.messages && (r += " , message: 'should be equal to constant' "), e.opts.verbose && (r += " , schema: validate.schema" + s + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + u + " "), 
        r += " } ") : r += " {} ";
        var f = r;
        return r = p.pop(), !e.compositeRule && c ? e.async ? r += " throw new ValidationError([" + f + "]); " : r += " validate.errors = [" + f + "]; return false; " : r += " var err = " + f + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", 
        r += " }", c && (r += " else { "), r;
    };
}
