// analysis/pretty/main.js:96643; webpack module 1234
function(e, t, n) {
    "use strict";
    e.exports = function(e, t, n) {
        var r, i, o = " ", a = e.level, s = e.dataLevel, l = e.schema[t], c = e.schemaPath + e.util.getProperty(t), u = e.errSchemaPath + "/" + t, d = !e.opts.allErrors, h = "data" + (s || ""), p = "valid" + a, f = "errs__" + a, _ = e.opts.$data && l && l.$data;
        _ ? (o += " var schema" + a + " = " + e.util.getData(l.$data, s, e.dataPathArr) + "; ", 
        i = "schema" + a) : i = l;
        var m, g, v, y, E, b = "definition" + a, w = this.definition, S = "";
        if (_ && w.$data) {
            E = "keywordValidate" + a;
            var T = w.validateSchema;
            o += " var " + b + " = RULES.custom['" + t + "'].definition; var " + E + " = " + b + ".validate;";
        } else {
            if (!(y = e.useCustomRule(this, l, e.schema, e))) return;
            i = "validate.schema" + c, E = y.code, m = w.compile, g = w.inline, v = w.macro;
        }
        var A = E + ".errors", O = "i" + a, C = "ruleErr" + a, N = w.async;
        if (N && !e.async) throw new Error("async keyword in sync schema");
        if (g || v || (o += A + " = null;"), o += "var " + f + " = errors;var " + p + ";", 
        _ && w.$data && (S += "}", o += " if (" + i + " === undefined) { " + p + " = true; } else { ", 
        T && (S += "}", o += " " + p + " = " + b + ".validateSchema(" + i + "); if (" + p + ") { ")), 
        g) w.statements ? o += " " + y.validate + " " : o += " " + p + " = " + y.validate + "; "; else if (v) {
            var I = e.util.copy(e);
            S = "";
            I.level++;
            var R = "valid" + I.level;
            I.schema = y.validate, I.schemaPath = "";
            var D = e.compositeRule;
            e.compositeRule = I.compositeRule = !0;
            var L = e.validate(I).replace(/validate\.schema/g, E);
            e.compositeRule = I.compositeRule = D, o += " " + L;
        } else {
            (x = x || []).push(o), o = "", o += "  " + E + ".call( ", e.opts.passContext ? o += "this" : o += "self", 
            m || !1 === w.schema ? o += " , " + h + " " : o += " , " + i + " , " + h + " , validate.schema" + e.schemaPath + " ", 
            o += " , (dataPath || '')", '""' != e.errorPath && (o += " + " + e.errorPath);
            var k = s ? "data" + (s - 1 || "") : "parentData", M = s ? e.dataPathArr[s] : "parentDataProperty", P = o += " , " + k + " , " + M + " , rootData )  ";
            o = x.pop(), !1 === w.errors ? (o += " " + p + " = ", N && (o += "await "), o += P + "; ") : o += N ? " var " + (A = "customErrors" + a) + " = null; try { " + p + " = await " + P + "; } catch (e) { " + p + " = false; if (e instanceof ValidationError) " + A + " = e.errors; else throw e; } " : " " + A + " = null; " + p + " = " + P + "; ";
        }
        if (w.modifying && (o += " if (" + k + ") " + h + " = " + k + "[" + M + "];"), o += "" + S, 
        w.valid) d && (o += " if (true) { "); else {
            var x;
            o += " if ( ", void 0 === w.valid ? (o += " !", o += v ? "" + R : "" + p) : o += " " + !w.valid + " ", 
            o += ") { ", r = this.keyword, (x = x || []).push(o), o = "", (x = x || []).push(o), 
            o = "", !1 !== e.createErrors ? (o += " { keyword: '" + (r || "custom") + "' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(u) + " , params: { keyword: '" + this.keyword + "' } ", 
            !1 !== e.opts.messages && (o += " , message: 'should pass \"" + this.keyword + "\" keyword validation' "), 
            e.opts.verbose && (o += " , schema: validate.schema" + c + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + h + " "), 
            o += " } ") : o += " {} ";
            var F = o;
            o = x.pop(), !e.compositeRule && d ? e.async ? o += " throw new ValidationError([" + F + "]); " : o += " validate.errors = [" + F + "]; return false; " : o += " var err = " + F + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ";
            var j = o;
            o = x.pop(), g ? w.errors ? "full" != w.errors && (o += "  for (var " + O + "=" + f + "; " + O + "<errors; " + O + "++) { var " + C + " = vErrors[" + O + "]; if (" + C + ".dataPath === undefined) " + C + ".dataPath = (dataPath || '') + " + e.errorPath + "; if (" + C + ".schemaPath === undefined) { " + C + '.schemaPath = "' + u + '"; } ', 
            e.opts.verbose && (o += " " + C + ".schema = " + i + "; " + C + ".data = " + h + "; "), 
            o += " } ") : !1 === w.errors ? o += " " + j + " " : (o += " if (" + f + " == errors) { " + j + " } else {  for (var " + O + "=" + f + "; " + O + "<errors; " + O + "++) { var " + C + " = vErrors[" + O + "]; if (" + C + ".dataPath === undefined) " + C + ".dataPath = (dataPath || '') + " + e.errorPath + "; if (" + C + ".schemaPath === undefined) { " + C + '.schemaPath = "' + u + '"; } ', 
            e.opts.verbose && (o += " " + C + ".schema = " + i + "; " + C + ".data = " + h + "; "), 
            o += " } } ") : v ? (o += "   var err =   ", !1 !== e.createErrors ? (o += " { keyword: '" + (r || "custom") + "' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(u) + " , params: { keyword: '" + this.keyword + "' } ", 
            !1 !== e.opts.messages && (o += " , message: 'should pass \"" + this.keyword + "\" keyword validation' "), 
            e.opts.verbose && (o += " , schema: validate.schema" + c + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + h + " "), 
            o += " } ") : o += " {} ", o += ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", 
            !e.compositeRule && d && (e.async ? o += " throw new ValidationError(vErrors); " : o += " validate.errors = vErrors; return false; ")) : !1 === w.errors ? o += " " + j + " " : (o += " if (Array.isArray(" + A + ")) { if (vErrors === null) vErrors = " + A + "; else vErrors = vErrors.concat(" + A + "); errors = vErrors.length;  for (var " + O + "=" + f + "; " + O + "<errors; " + O + "++) { var " + C + " = vErrors[" + O + "]; if (" + C + ".dataPath === undefined) " + C + ".dataPath = (dataPath || '') + " + e.errorPath + ";  " + C + '.schemaPath = "' + u + '";  ', 
            e.opts.verbose && (o += " " + C + ".schema = " + i + "; " + C + ".data = " + h + "; "), 
            o += " } } else { " + j + " } "), o += " } ", d && (o += " else { ");
        }
        return o;
    };
}
