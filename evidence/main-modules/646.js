// analysis/pretty/main.js:58607; webpack module 646
function(e, t, n) {
    "use strict";
    e.exports = function(e, t, n) {
        var r, i = " ", o = e.level, a = e.dataLevel, s = e.schema[t], l = e.schemaPath + e.util.getProperty(t), c = e.errSchemaPath + "/" + t, u = !e.opts.allErrors, d = "data" + (a || ""), h = e.opts.$data && s && s.$data;
        if (h ? (i += " var schema" + o + " = " + e.util.getData(s.$data, a, e.dataPathArr) + "; ", 
        r = "schema" + o) : r = s, !h && "number" != typeof s) throw new Error(t + " must be number");
        i += "if ( ", h && (i += " (" + r + " !== undefined && typeof " + r + " != 'number') || "), 
        i += " Object.keys(" + d + ").length " + ("maxProperties" == t ? ">" : "<") + " " + r + ") { ";
        var p = t, f = f || [];
        f.push(i), i = "", !1 !== e.createErrors ? (i += " { keyword: '" + (p || "_limitProperties") + "' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(c) + " , params: { limit: " + r + " } ", 
        !1 !== e.opts.messages && (i += " , message: 'should NOT have ", i += "maxProperties" == t ? "more" : "fewer", 
        i += " than ", i += h ? "' + " + r + " + '" : "" + s, i += " properties' "), e.opts.verbose && (i += " , schema:  ", 
        i += h ? "validate.schema" + l : "" + s, i += "         , parentSchema: validate.schema" + e.schemaPath + " , data: " + d + " "), 
        i += " } ") : i += " {} ";
        var _ = i;
        return i = f.pop(), !e.compositeRule && u ? e.async ? i += " throw new ValidationError([" + _ + "]); " : i += " validate.errors = [" + _ + "]; return false; " : i += " var err = " + _ + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", 
        i += "} ", u && (i += " else { "), i;
    };
}
