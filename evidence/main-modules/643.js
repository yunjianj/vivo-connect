// analysis/pretty/main.js:58523; webpack module 643
function(e, t, n) {
    "use strict";
    e.exports = function(e, t, n) {
        var r, i = " ", o = e.level, a = e.dataLevel, s = e.schema[t], l = e.schemaPath + e.util.getProperty(t), c = e.errSchemaPath + "/" + t, u = !e.opts.allErrors, d = "data" + (a || ""), h = e.opts.$data && s && s.$data;
        h ? (i += " var schema" + o + " = " + e.util.getData(s.$data, a, e.dataPathArr) + "; ", 
        r = "schema" + o) : r = s;
        var p = "maximum" == t, f = p ? "exclusiveMaximum" : "exclusiveMinimum", _ = e.schema[f], m = e.opts.$data && _ && _.$data, g = p ? "<" : ">", v = p ? ">" : "<", y = void 0;
        if (!h && "number" != typeof s && void 0 !== s) throw new Error(t + " must be number");
        if (!m && void 0 !== _ && "number" != typeof _ && "boolean" != typeof _) throw new Error(f + " must be number or boolean");
        if (m) {
            var E = e.util.getData(_.$data, a, e.dataPathArr), b = "exclusive" + o, w = "exclType" + o, S = "exclIsNumber" + o, T = "' + " + (C = "op" + o) + " + '";
            i += " var schemaExcl" + o + " = " + E + "; ", i += " var " + b + "; var " + w + " = typeof " + (E = "schemaExcl" + o) + "; if (" + w + " != 'boolean' && " + w + " != 'undefined' && " + w + " != 'number') { ";
            var A;
            y = f;
            (A = A || []).push(i), i = "", !1 !== e.createErrors ? (i += " { keyword: '" + (y || "_exclusiveLimit") + "' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(c) + " , params: {} ", 
            !1 !== e.opts.messages && (i += " , message: '" + f + " should be boolean' "), e.opts.verbose && (i += " , schema: validate.schema" + l + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + d + " "), 
            i += " } ") : i += " {} ";
            var O = i;
            i = A.pop(), !e.compositeRule && u ? e.async ? i += " throw new ValidationError([" + O + "]); " : i += " validate.errors = [" + O + "]; return false; " : i += " var err = " + O + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", 
            i += " } else if ( ", h && (i += " (" + r + " !== undefined && typeof " + r + " != 'number') || "), 
            i += " " + w + " == 'number' ? ( (" + b + " = " + r + " === undefined || " + E + " " + g + "= " + r + ") ? " + d + " " + v + "= " + E + " : " + d + " " + v + " " + r + " ) : ( (" + b + " = " + E + " === true) ? " + d + " " + v + "= " + r + " : " + d + " " + v + " " + r + " ) || " + d + " !== " + d + ") { var op" + o + " = " + b + " ? '" + g + "' : '" + g + "='; ", 
            void 0 === s && (y = f, c = e.errSchemaPath + "/" + f, r = E, h = m);
        } else {
            T = g;
            if ((S = "number" == typeof _) && h) {
                var C = "'" + T + "'";
                i += " if ( ", h && (i += " (" + r + " !== undefined && typeof " + r + " != 'number') || "), 
                i += " ( " + r + " === undefined || " + _ + " " + g + "= " + r + " ? " + d + " " + v + "= " + _ + " : " + d + " " + v + " " + r + " ) || " + d + " !== " + d + ") { ";
            } else {
                S && void 0 === s ? (b = !0, y = f, c = e.errSchemaPath + "/" + f, r = _, v += "=") : (S && (r = Math[p ? "min" : "max"](_, s)), 
                _ === (!S || r) ? (b = !0, y = f, c = e.errSchemaPath + "/" + f, v += "=") : (b = !1, 
                T += "="));
                C = "'" + T + "'";
                i += " if ( ", h && (i += " (" + r + " !== undefined && typeof " + r + " != 'number') || "), 
                i += " " + d + " " + v + " " + r + " || " + d + " !== " + d + ") { ";
            }
        }
        y = y || t, (A = A || []).push(i), i = "", !1 !== e.createErrors ? (i += " { keyword: '" + (y || "_limit") + "' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(c) + " , params: { comparison: " + C + ", limit: " + r + ", exclusive: " + b + " } ", 
        !1 !== e.opts.messages && (i += " , message: 'should be " + T + " ", i += h ? "' + " + r : r + "'"), 
        e.opts.verbose && (i += " , schema:  ", i += h ? "validate.schema" + l : "" + s, 
        i += "         , parentSchema: validate.schema" + e.schemaPath + " , data: " + d + " "), 
        i += " } ") : i += " {} ";
        O = i;
        return i = A.pop(), !e.compositeRule && u ? e.async ? i += " throw new ValidationError([" + O + "]); " : i += " validate.errors = [" + O + "]; return false; " : i += " var err = " + O + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", 
        i += " } ", u && (i += " else { "), i;
    };
}
