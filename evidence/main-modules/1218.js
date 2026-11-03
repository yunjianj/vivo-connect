// analysis/pretty/main.js:95958; webpack module 1218
function(e, t, n) {
    "use strict";
    e.exports = function(e, t, n) {
        var r = " ", i = e.level, o = e.dataLevel, a = e.schema[t], s = e.schemaPath + e.util.getProperty(t), l = e.errSchemaPath + "/" + t, c = !e.opts.allErrors, u = "data" + (o || ""), d = "errs__" + i, h = e.util.copy(e), p = "";
        h.level++;
        var f = "valid" + h.level, _ = {}, m = {}, g = e.opts.ownProperties;
        for (b in a) if ("__proto__" != b) {
            var v = a[b], y = Array.isArray(v) ? m : _;
            y[b] = v;
        }
        r += "var " + d + " = errors;";
        var E = e.errorPath;
        for (var b in r += "var missing" + i + ";", m) if ((y = m[b]).length) {
            if (r += " if ( " + u + e.util.getProperty(b) + " !== undefined ", g && (r += " && Object.prototype.hasOwnProperty.call(" + u + ", '" + e.util.escapeQuotes(b) + "') "), 
            c) {
                r += " && ( ";
                var w = y;
                if (w) for (var S = -1, T = w.length - 1; S < T; ) {
                    R = w[S += 1], S && (r += " || "), r += " ( ( " + (M = u + (k = e.util.getProperty(R))) + " === undefined ", 
                    g && (r += " || ! Object.prototype.hasOwnProperty.call(" + u + ", '" + e.util.escapeQuotes(R) + "') "), 
                    r += ") && (missing" + i + " = " + e.util.toQuotedString(e.opts.jsonPointers ? R : k) + ") ) ";
                }
                r += ")) {  ";
                var A = "missing" + i, O = "' + " + A + " + '";
                e.opts._errorDataPathProperty && (e.errorPath = e.opts.jsonPointers ? e.util.getPathExpr(E, A, !0) : E + " + " + A);
                var C = C || [];
                C.push(r), r = "", !1 !== e.createErrors ? (r += " { keyword: 'dependencies' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(l) + " , params: { property: '" + e.util.escapeQuotes(b) + "', missingProperty: '" + O + "', depsCount: " + y.length + ", deps: '" + e.util.escapeQuotes(1 == y.length ? y[0] : y.join(", ")) + "' } ", 
                !1 !== e.opts.messages && (r += " , message: 'should have ", 1 == y.length ? r += "property " + e.util.escapeQuotes(y[0]) : r += "properties " + e.util.escapeQuotes(y.join(", ")), 
                r += " when property " + e.util.escapeQuotes(b) + " is present' "), e.opts.verbose && (r += " , schema: validate.schema" + s + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + u + " "), 
                r += " } ") : r += " {} ";
                var N = r;
                r = C.pop(), !e.compositeRule && c ? e.async ? r += " throw new ValidationError([" + N + "]); " : r += " validate.errors = [" + N + "]; return false; " : r += " var err = " + N + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ";
            } else {
                r += " ) { ";
                var I = y;
                if (I) for (var R, D = -1, L = I.length - 1; D < L; ) {
                    R = I[D += 1];
                    var k = e.util.getProperty(R), M = (O = e.util.escapeQuotes(R), u + k);
                    e.opts._errorDataPathProperty && (e.errorPath = e.util.getPath(E, R, e.opts.jsonPointers)), 
                    r += " if ( " + M + " === undefined ", g && (r += " || ! Object.prototype.hasOwnProperty.call(" + u + ", '" + e.util.escapeQuotes(R) + "') "), 
                    r += ") {  var err =   ", !1 !== e.createErrors ? (r += " { keyword: 'dependencies' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(l) + " , params: { property: '" + e.util.escapeQuotes(b) + "', missingProperty: '" + O + "', depsCount: " + y.length + ", deps: '" + e.util.escapeQuotes(1 == y.length ? y[0] : y.join(", ")) + "' } ", 
                    !1 !== e.opts.messages && (r += " , message: 'should have ", 1 == y.length ? r += "property " + e.util.escapeQuotes(y[0]) : r += "properties " + e.util.escapeQuotes(y.join(", ")), 
                    r += " when property " + e.util.escapeQuotes(b) + " is present' "), e.opts.verbose && (r += " , schema: validate.schema" + s + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + u + " "), 
                    r += " } ") : r += " {} ", r += ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; } ";
                }
            }
            r += " }   ", c && (p += "}", r += " else { ");
        }
        e.errorPath = E;
        var P = h.baseId;
        for (var b in _) {
            v = _[b];
            (e.opts.strictKeywords ? "object" == typeof v && Object.keys(v).length > 0 || !1 === v : e.util.schemaHasRules(v, e.RULES.all)) && (r += " " + f + " = true; if ( " + u + e.util.getProperty(b) + " !== undefined ", 
            g && (r += " && Object.prototype.hasOwnProperty.call(" + u + ", '" + e.util.escapeQuotes(b) + "') "), 
            r += ") { ", h.schema = v, h.schemaPath = s + e.util.getProperty(b), h.errSchemaPath = l + "/" + e.util.escapeFragment(b), 
            r += "  " + e.validate(h) + " ", h.baseId = P, r += " }  ", c && (r += " if (" + f + ") { ", 
            p += "}"));
        }
        return c && (r += "   " + p + " if (" + d + " == errors) {"), r;
    };
}
