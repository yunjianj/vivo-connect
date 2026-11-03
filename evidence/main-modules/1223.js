// analysis/pretty/main.js:96170; webpack module 1223
function(e, t, n) {
    "use strict";
    e.exports = function(e, t, n) {
        var r, i = " ", o = e.level, a = e.dataLevel, s = e.schema[t], l = e.schemaPath + e.util.getProperty(t), c = e.errSchemaPath + "/" + t, u = !e.opts.allErrors, d = "data" + (a || ""), h = e.opts.$data && s && s.$data;
        if (h ? (i += " var schema" + o + " = " + e.util.getData(s.$data, a, e.dataPathArr) + "; ", 
        r = "schema" + o) : r = s, !h && "number" != typeof s) throw new Error(t + " must be number");
        i += "var division" + o + ";if (", h && (i += " " + r + " !== undefined && ( typeof " + r + " != 'number' || "), 
        i += " (division" + o + " = " + d + " / " + r + ", ", e.opts.multipleOfPrecision ? i += " Math.abs(Math.round(division" + o + ") - division" + o + ") > 1e-" + e.opts.multipleOfPrecision + " " : i += " division" + o + " !== parseInt(division" + o + ") ", 
        i += " ) ", h && (i += "  )  "), i += " ) {   ";
        var p = p || [];
        p.push(i), i = "", !1 !== e.createErrors ? (i += " { keyword: 'multipleOf' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(c) + " , params: { multipleOf: " + r + " } ", 
        !1 !== e.opts.messages && (i += " , message: 'should be multiple of ", i += h ? "' + " + r : r + "'"), 
        e.opts.verbose && (i += " , schema:  ", i += h ? "validate.schema" + l : "" + s, 
        i += "         , parentSchema: validate.schema" + e.schemaPath + " , data: " + d + " "), 
        i += " } ") : i += " {} ";
        var f = i;
        return i = p.pop(), !e.compositeRule && u ? e.async ? i += " throw new ValidationError([" + f + "]); " : i += " validate.errors = [" + f + "]; return false; " : i += " var err = " + f + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", 
        i += "} ", u && (i += " else { "), i;
    };
}
