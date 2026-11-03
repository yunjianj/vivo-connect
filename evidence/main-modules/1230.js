// analysis/pretty/main.js:96486; webpack module 1230
function(e, t, n) {
    "use strict";
    e.exports = function(e, t, n) {
        var r, i = " ", o = e.level, a = e.dataLevel, s = e.schema[t], l = e.schemaPath + e.util.getProperty(t), c = e.errSchemaPath + "/" + t, u = !e.opts.allErrors, d = "data" + (a || ""), h = "valid" + o, p = e.opts.$data && s && s.$data;
        if (p ? (i += " var schema" + o + " = " + e.util.getData(s.$data, a, e.dataPathArr) + "; ", 
        r = "schema" + o) : r = s, (s || p) && !1 !== e.opts.uniqueItems) {
            p && (i += " var " + h + "; if (" + r + " === false || " + r + " === undefined) " + h + " = true; else if (typeof " + r + " != 'boolean') " + h + " = false; else { "), 
            i += " var i = " + d + ".length , " + h + " = true , j; if (i > 1) { ";
            var f = e.schema.items && e.schema.items.type, _ = Array.isArray(f);
            if (!f || "object" == f || "array" == f || _ && (f.indexOf("object") >= 0 || f.indexOf("array") >= 0)) i += " outer: for (;i--;) { for (j = i; j--;) { if (equal(" + d + "[i], " + d + "[j])) { " + h + " = false; break outer; } } } "; else {
                i += " var itemIndices = {}, item; for (;i--;) { var item = " + d + "[i]; ";
                var m = "checkDataType" + (_ ? "s" : "");
                i += " if (" + e.util[m](f, "item", e.opts.strictNumbers, !0) + ") continue; ", 
                _ && (i += " if (typeof item == 'string') item = '\"' + item; "), i += " if (typeof itemIndices[item] == 'number') { " + h + " = false; j = itemIndices[item]; break; } itemIndices[item] = i; } ";
            }
            i += " } ", p && (i += "  }  "), i += " if (!" + h + ") {   ";
            var g = g || [];
            g.push(i), i = "", !1 !== e.createErrors ? (i += " { keyword: 'uniqueItems' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(c) + " , params: { i: i, j: j } ", 
            !1 !== e.opts.messages && (i += " , message: 'should NOT have duplicate items (items ## ' + j + ' and ' + i + ' are identical)' "), 
            e.opts.verbose && (i += " , schema:  ", i += p ? "validate.schema" + l : "" + s, 
            i += "         , parentSchema: validate.schema" + e.schemaPath + " , data: " + d + " "), 
            i += " } ") : i += " {} ";
            var v = i;
            i = g.pop(), !e.compositeRule && u ? e.async ? i += " throw new ValidationError([" + v + "]); " : i += " validate.errors = [" + v + "]; return false; " : i += " var err = " + v + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", 
            i += " } ", u && (i += " else { ");
        } else u && (i += " if (true) { ");
        return i;
    };
}
