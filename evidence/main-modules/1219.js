// analysis/pretty/main.js:96018; webpack module 1219
function(e, t, n) {
    "use strict";
    e.exports = function(e, t, n) {
        var r = " ", i = e.level, o = e.dataLevel, a = e.schema[t], s = e.schemaPath + e.util.getProperty(t), l = e.errSchemaPath + "/" + t, c = !e.opts.allErrors, u = "data" + (o || ""), d = "valid" + i, h = e.opts.$data && a && a.$data;
        h && (r += " var schema" + i + " = " + e.util.getData(a.$data, o, e.dataPathArr) + "; ");
        var p = "i" + i, f = "schema" + i;
        h || (r += " var " + f + " = validate.schema" + s + ";"), r += "var " + d + ";", 
        h && (r += " if (schema" + i + " === undefined) " + d + " = true; else if (!Array.isArray(schema" + i + ")) " + d + " = false; else {"), 
        r += d + " = false;for (var " + p + "=0; " + p + "<" + f + ".length; " + p + "++) if (equal(" + u + ", " + f + "[" + p + "])) { " + d + " = true; break; }", 
        h && (r += "  }  "), r += " if (!" + d + ") {   ";
        var _ = _ || [];
        _.push(r), r = "", !1 !== e.createErrors ? (r += " { keyword: 'enum' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(l) + " , params: { allowedValues: schema" + i + " } ", 
        !1 !== e.opts.messages && (r += " , message: 'should be equal to one of the allowed values' "), 
        e.opts.verbose && (r += " , schema: validate.schema" + s + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + u + " "), 
        r += " } ") : r += " {} ";
        var m = r;
        return r = _.pop(), !e.compositeRule && c ? e.async ? r += " throw new ValidationError([" + m + "]); " : r += " validate.errors = [" + m + "]; return false; " : r += " var err = " + m + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", 
        r += " }", c && (r += " else { "), r;
    };
}
