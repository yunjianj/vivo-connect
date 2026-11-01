// analysis/pretty/main.js:96117; webpack module 1222
function(e, t, n) {
    "use strict";
    e.exports = function(e, t, n) {
        var r = " ", i = e.level, o = e.dataLevel, a = e.schema[t], s = e.schemaPath + e.util.getProperty(t), l = e.errSchemaPath + "/" + t, c = !e.opts.allErrors, u = "data" + (o || ""), d = "valid" + i, h = "errs__" + i, p = e.util.copy(e), f = "";
        p.level++;
        var _ = "valid" + p.level, m = "i" + i, g = p.dataLevel = e.dataLevel + 1, v = "data" + g, y = e.baseId;
        if (r += "var " + h + " = errors;var " + d + ";", Array.isArray(a)) {
            var E = e.schema.additionalItems;
            if (!1 === E) {
                r += " " + d + " = " + u + ".length <= " + a.length + "; ";
                var b = l;
                l = e.errSchemaPath + "/additionalItems", r += "  if (!" + d + ") {   ";
                var w = w || [];
                w.push(r), r = "", !1 !== e.createErrors ? (r += " { keyword: 'additionalItems' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(l) + " , params: { limit: " + a.length + " } ", 
                !1 !== e.opts.messages && (r += " , message: 'should NOT have more than " + a.length + " items' "), 
                e.opts.verbose && (r += " , schema: false , parentSchema: validate.schema" + e.schemaPath + " , data: " + u + " "), 
                r += " } ") : r += " {} ";
                var S = r;
                r = w.pop(), !e.compositeRule && c ? e.async ? r += " throw new ValidationError([" + S + "]); " : r += " validate.errors = [" + S + "]; return false; " : r += " var err = " + S + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", 
                r += " } ", l = b, c && (f += "}", r += " else { ");
            }
            var T = a;
            if (T) for (var A, O = -1, C = T.length - 1; O < C; ) if (A = T[O += 1], e.opts.strictKeywords ? "object" == typeof A && Object.keys(A).length > 0 || !1 === A : e.util.schemaHasRules(A, e.RULES.all)) {
                r += " " + _ + " = true; if (" + u + ".length > " + O + ") { ";
                var N = u + "[" + O + "]";
                p.schema = A, p.schemaPath = s + "[" + O + "]", p.errSchemaPath = l + "/" + O, p.errorPath = e.util.getPathExpr(e.errorPath, O, e.opts.jsonPointers, !0), 
                p.dataPathArr[g] = O;
                var I = e.validate(p);
                p.baseId = y, e.util.varOccurences(I, v) < 2 ? r += " " + e.util.varReplace(I, v, N) + " " : r += " var " + v + " = " + N + "; " + I + " ", 
                r += " }  ", c && (r += " if (" + _ + ") { ", f += "}");
            }
            if ("object" == typeof E && (e.opts.strictKeywords ? "object" == typeof E && Object.keys(E).length > 0 || !1 === E : e.util.schemaHasRules(E, e.RULES.all))) {
                p.schema = E, p.schemaPath = e.schemaPath + ".additionalItems", p.errSchemaPath = e.errSchemaPath + "/additionalItems", 
                r += " " + _ + " = true; if (" + u + ".length > " + a.length + ") {  for (var " + m + " = " + a.length + "; " + m + " < " + u + ".length; " + m + "++) { ", 
                p.errorPath = e.util.getPathExpr(e.errorPath, m, e.opts.jsonPointers, !0);
                N = u + "[" + m + "]";
                p.dataPathArr[g] = m;
                I = e.validate(p);
                p.baseId = y, e.util.varOccurences(I, v) < 2 ? r += " " + e.util.varReplace(I, v, N) + " " : r += " var " + v + " = " + N + "; " + I + " ", 
                c && (r += " if (!" + _ + ") break; "), r += " } }  ", c && (r += " if (" + _ + ") { ", 
                f += "}");
            }
        } else if (e.opts.strictKeywords ? "object" == typeof a && Object.keys(a).length > 0 || !1 === a : e.util.schemaHasRules(a, e.RULES.all)) {
            p.schema = a, p.schemaPath = s, p.errSchemaPath = l, r += "  for (var " + m + " = 0; " + m + " < " + u + ".length; " + m + "++) { ", 
            p.errorPath = e.util.getPathExpr(e.errorPath, m, e.opts.jsonPointers, !0);
            N = u + "[" + m + "]";
            p.dataPathArr[g] = m;
            I = e.validate(p);
            p.baseId = y, e.util.varOccurences(I, v) < 2 ? r += " " + e.util.varReplace(I, v, N) + " " : r += " var " + v + " = " + N + "; " + I + " ", 
            c && (r += " if (!" + _ + ") break; "), r += " }";
        }
        return c && (r += " " + f + " if (" + h + " == errors) {"), r;
    };
}
