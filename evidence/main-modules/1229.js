// analysis/pretty/main.js:96403; webpack module 1229
function(e, t, n) {
    "use strict";
    e.exports = function(e, t, n) {
        var r = " ", i = e.level, o = e.dataLevel, a = e.schema[t], s = e.schemaPath + e.util.getProperty(t), l = e.errSchemaPath + "/" + t, c = !e.opts.allErrors, u = "data" + (o || ""), d = "valid" + i, h = e.opts.$data && a && a.$data;
        h && (r += " var schema" + i + " = " + e.util.getData(a.$data, o, e.dataPathArr) + "; ");
        var p = "schema" + i;
        if (!h) if (a.length < e.opts.loopRequired && e.schema.properties && Object.keys(e.schema.properties).length) {
            var f = [], _ = a;
            if (_) for (var m, g = -1, v = _.length - 1; g < v; ) {
                m = _[g += 1];
                var y = e.schema.properties[m];
                y && (e.opts.strictKeywords ? "object" == typeof y && Object.keys(y).length > 0 || !1 === y : e.util.schemaHasRules(y, e.RULES.all)) || (f[f.length] = m);
            }
        } else f = a;
        if (h || f.length) {
            var E = e.errorPath, b = h || f.length >= e.opts.loopRequired, w = e.opts.ownProperties;
            if (c) if (r += " var missing" + i + "; ", b) {
                h || (r += " var " + p + " = validate.schema" + s + "; ");
                var S = "' + " + (I = "schema" + i + "[" + (O = "i" + i) + "]") + " + '";
                e.opts._errorDataPathProperty && (e.errorPath = e.util.getPathExpr(E, I, e.opts.jsonPointers)), 
                r += " var " + d + " = true; ", h && (r += " if (schema" + i + " === undefined) " + d + " = true; else if (!Array.isArray(schema" + i + ")) " + d + " = false; else {"), 
                r += " for (var " + O + " = 0; " + O + " < " + p + ".length; " + O + "++) { " + d + " = " + u + "[" + p + "[" + O + "]] !== undefined ", 
                w && (r += " &&   Object.prototype.hasOwnProperty.call(" + u + ", " + p + "[" + O + "]) "), 
                r += "; if (!" + d + ") break; } ", h && (r += "  }  "), r += "  if (!" + d + ") {   ", 
                (N = N || []).push(r), r = "", !1 !== e.createErrors ? (r += " { keyword: 'required' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(l) + " , params: { missingProperty: '" + S + "' } ", 
                !1 !== e.opts.messages && (r += " , message: '", e.opts._errorDataPathProperty ? r += "is a required property" : r += "should have required property \\'" + S + "\\'", 
                r += "' "), e.opts.verbose && (r += " , schema: validate.schema" + s + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + u + " "), 
                r += " } ") : r += " {} ";
                var T = r;
                r = N.pop(), !e.compositeRule && c ? e.async ? r += " throw new ValidationError([" + T + "]); " : r += " validate.errors = [" + T + "]; return false; " : r += " var err = " + T + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", 
                r += " } else { ";
            } else {
                r += " if ( ";
                var A = f;
                if (A) for (var O = -1, C = A.length - 1; O < C; ) {
                    D = A[O += 1], O && (r += " || "), r += " ( ( " + (P = u + (M = e.util.getProperty(D))) + " === undefined ", 
                    w && (r += " || ! Object.prototype.hasOwnProperty.call(" + u + ", '" + e.util.escapeQuotes(D) + "') "), 
                    r += ") && (missing" + i + " = " + e.util.toQuotedString(e.opts.jsonPointers ? D : M) + ") ) ";
                }
                r += ") {  ";
                var N;
                S = "' + " + (I = "missing" + i) + " + '";
                e.opts._errorDataPathProperty && (e.errorPath = e.opts.jsonPointers ? e.util.getPathExpr(E, I, !0) : E + " + " + I), 
                (N = N || []).push(r), r = "", !1 !== e.createErrors ? (r += " { keyword: 'required' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(l) + " , params: { missingProperty: '" + S + "' } ", 
                !1 !== e.opts.messages && (r += " , message: '", e.opts._errorDataPathProperty ? r += "is a required property" : r += "should have required property \\'" + S + "\\'", 
                r += "' "), e.opts.verbose && (r += " , schema: validate.schema" + s + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + u + " "), 
                r += " } ") : r += " {} ";
                T = r;
                r = N.pop(), !e.compositeRule && c ? e.async ? r += " throw new ValidationError([" + T + "]); " : r += " validate.errors = [" + T + "]; return false; " : r += " var err = " + T + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", 
                r += " } else { ";
            } else if (b) {
                h || (r += " var " + p + " = validate.schema" + s + "; ");
                var I;
                S = "' + " + (I = "schema" + i + "[" + (O = "i" + i) + "]") + " + '";
                e.opts._errorDataPathProperty && (e.errorPath = e.util.getPathExpr(E, I, e.opts.jsonPointers)), 
                h && (r += " if (" + p + " && !Array.isArray(" + p + ")) {  var err =   ", !1 !== e.createErrors ? (r += " { keyword: 'required' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(l) + " , params: { missingProperty: '" + S + "' } ", 
                !1 !== e.opts.messages && (r += " , message: '", e.opts._errorDataPathProperty ? r += "is a required property" : r += "should have required property \\'" + S + "\\'", 
                r += "' "), e.opts.verbose && (r += " , schema: validate.schema" + s + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + u + " "), 
                r += " } ") : r += " {} ", r += ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; } else if (" + p + " !== undefined) { "), 
                r += " for (var " + O + " = 0; " + O + " < " + p + ".length; " + O + "++) { if (" + u + "[" + p + "[" + O + "]] === undefined ", 
                w && (r += " || ! Object.prototype.hasOwnProperty.call(" + u + ", " + p + "[" + O + "]) "), 
                r += ") {  var err =   ", !1 !== e.createErrors ? (r += " { keyword: 'required' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(l) + " , params: { missingProperty: '" + S + "' } ", 
                !1 !== e.opts.messages && (r += " , message: '", e.opts._errorDataPathProperty ? r += "is a required property" : r += "should have required property \\'" + S + "\\'", 
                r += "' "), e.opts.verbose && (r += " , schema: validate.schema" + s + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + u + " "), 
                r += " } ") : r += " {} ", r += ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; } } ", 
                h && (r += "  }  ");
            } else {
                var R = f;
                if (R) for (var D, L = -1, k = R.length - 1; L < k; ) {
                    D = R[L += 1];
                    var M = e.util.getProperty(D), P = (S = e.util.escapeQuotes(D), u + M);
                    e.opts._errorDataPathProperty && (e.errorPath = e.util.getPath(E, D, e.opts.jsonPointers)), 
                    r += " if ( " + P + " === undefined ", w && (r += " || ! Object.prototype.hasOwnProperty.call(" + u + ", '" + e.util.escapeQuotes(D) + "') "), 
                    r += ") {  var err =   ", !1 !== e.createErrors ? (r += " { keyword: 'required' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(l) + " , params: { missingProperty: '" + S + "' } ", 
                    !1 !== e.opts.messages && (r += " , message: '", e.opts._errorDataPathProperty ? r += "is a required property" : r += "should have required property \\'" + S + "\\'", 
                    r += "' "), e.opts.verbose && (r += " , schema: validate.schema" + s + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + u + " "), 
                    r += " } ") : r += " {} ", r += ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; } ";
                }
            }
            e.errorPath = E;
        } else c && (r += " if (true) {");
        return r;
    };
}
