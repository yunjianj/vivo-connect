// analysis/pretty/main.js:58367; webpack module 642
function(e, t, n) {
    "use strict";
    e.exports = function(e, t, n) {
        var r = "", i = !0 === e.schema.$async, o = e.util.schemaHasRulesExcept(e.schema, e.RULES.all, "$ref"), a = e.self._getId(e.schema);
        if (e.opts.strictKeywords) {
            var s = e.util.schemaUnknownRules(e.schema, e.RULES.keywords);
            if (s) {
                var l = "unknown keyword: " + s;
                if ("log" !== e.opts.strictKeywords) throw new Error(l);
                e.logger.warn(l);
            }
        }
        if (e.isTop && (r += " var validate = ", i && (e.async = !0, r += "async "), r += "function(data, dataPath, parentData, parentDataProperty, rootData) { 'use strict'; ", 
        a && (e.opts.sourceCode || e.opts.processCode) && (r += " /*# sourceURL=" + a + " */ ")), 
        "boolean" == typeof e.schema || !o && !e.schema.$ref) {
            var c = e.level, u = e.dataLevel, d = e.schema["false schema"], h = e.schemaPath + e.util.getProperty("false schema"), p = e.errSchemaPath + "/false schema", f = !e.opts.allErrors, _ = "data" + (u || ""), m = "valid" + c;
            if (!1 === e.schema) {
                e.isTop ? f = !0 : r += " var " + m + " = false; ", (J = J || []).push(r), r = "", 
                !1 !== e.createErrors ? (r += " { keyword: 'false schema' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(p) + " , params: {} ", 
                !1 !== e.opts.messages && (r += " , message: 'boolean schema is false' "), e.opts.verbose && (r += " , schema: false , parentSchema: validate.schema" + e.schemaPath + " , data: " + _ + " "), 
                r += " } ") : r += " {} ";
                var g = r;
                r = J.pop(), !e.compositeRule && f ? e.async ? r += " throw new ValidationError([" + g + "]); " : r += " validate.errors = [" + g + "]; return false; " : r += " var err = " + g + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ";
            } else e.isTop ? r += i ? " return data; " : " validate.errors = null; return true; " : r += " var " + m + " = true; ";
            return e.isTop && (r += " }; return validate; "), r;
        }
        if (e.isTop) {
            var v = e.isTop;
            c = e.level = 0, u = e.dataLevel = 0, _ = "data";
            if (e.rootId = e.resolve.fullPath(e.self._getId(e.root.schema)), e.baseId = e.baseId || e.rootId, 
            delete e.isTop, e.dataPathArr = [ "" ], void 0 !== e.schema.default && e.opts.useDefaults && e.opts.strictDefaults) {
                var y = "default is ignored in the schema root";
                if ("log" !== e.opts.strictDefaults) throw new Error(y);
                e.logger.warn(y);
            }
            r += " var vErrors = null; ", r += " var errors = 0;     ", r += " if (rootData === undefined) rootData = data; ";
        } else {
            c = e.level, _ = "data" + ((u = e.dataLevel) || "");
            if (a && (e.baseId = e.resolve.url(e.baseId, a)), i && !e.async) throw new Error("async schema in sync schema");
            r += " var errs_" + c + " = errors;";
        }
        m = "valid" + c, f = !e.opts.allErrors;
        var E = "", b = "", w = e.schema.type, S = Array.isArray(w);
        if (w && e.opts.nullable && !0 === e.schema.nullable && (S ? -1 == w.indexOf("null") && (w = w.concat("null")) : "null" != w && (w = [ w, "null" ], 
        S = !0)), S && 1 == w.length && (w = w[0], S = !1), e.schema.$ref && o) {
            if ("fail" == e.opts.extendRefs) throw new Error('$ref: validation keywords used in schema at path "' + e.errSchemaPath + '" (see option extendRefs)');
            !0 !== e.opts.extendRefs && (o = !1, e.logger.warn('$ref: keywords ignored in schema at path "' + e.errSchemaPath + '"'));
        }
        if (e.schema.$comment && e.opts.$comment && (r += " " + e.RULES.all.$comment.code(e, "$comment")), 
        w) {
            if (e.opts.coerceTypes) var T = e.util.coerceToTypes(e.opts.coerceTypes, w);
            var A = e.RULES.types[w];
            if (T || S || !0 === A || A && !X(A)) {
                h = e.schemaPath + ".type", p = e.errSchemaPath + "/type", h = e.schemaPath + ".type", 
                p = e.errSchemaPath + "/type";
                var O = S ? "checkDataTypes" : "checkDataType";
                if (r += " if (" + e.util[O](w, _, e.opts.strictNumbers, !0) + ") { ", T) {
                    var C = "dataType" + c, N = "coerced" + c;
                    r += " var " + C + " = typeof " + _ + "; var " + N + " = undefined; ", "array" == e.opts.coerceTypes && (r += " if (" + C + " == 'object' && Array.isArray(" + _ + ") && " + _ + ".length == 1) { " + _ + " = " + _ + "[0]; " + C + " = typeof " + _ + "; if (" + e.util.checkDataType(e.schema.type, _, e.opts.strictNumbers) + ") " + N + " = " + _ + "; } "), 
                    r += " if (" + N + " !== undefined) ; ";
                    var I = T;
                    if (I) for (var R, D = -1, L = I.length - 1; D < L; ) "string" == (R = I[D += 1]) ? r += " else if (" + C + " == 'number' || " + C + " == 'boolean') " + N + " = '' + " + _ + "; else if (" + _ + " === null) " + N + " = ''; " : "number" == R || "integer" == R ? (r += " else if (" + C + " == 'boolean' || " + _ + " === null || (" + C + " == 'string' && " + _ + " && " + _ + " == +" + _ + " ", 
                    "integer" == R && (r += " && !(" + _ + " % 1)"), r += ")) " + N + " = +" + _ + "; ") : "boolean" == R ? r += " else if (" + _ + " === 'false' || " + _ + " === 0 || " + _ + " === null) " + N + " = false; else if (" + _ + " === 'true' || " + _ + " === 1) " + N + " = true; " : "null" == R ? r += " else if (" + _ + " === '' || " + _ + " === 0 || " + _ + " === false) " + N + " = null; " : "array" == e.opts.coerceTypes && "array" == R && (r += " else if (" + C + " == 'string' || " + C + " == 'number' || " + C + " == 'boolean' || " + _ + " == null) " + N + " = [" + _ + "]; ");
                    r += " else {   ", (J = J || []).push(r), r = "", !1 !== e.createErrors ? (r += " { keyword: 'type' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(p) + " , params: { type: '", 
                    r += S ? "" + w.join(",") : "" + w, r += "' } ", !1 !== e.opts.messages && (r += " , message: 'should be ", 
                    r += S ? "" + w.join(",") : "" + w, r += "' "), e.opts.verbose && (r += " , schema: validate.schema" + h + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + _ + " "), 
                    r += " } ") : r += " {} ";
                    g = r;
                    r = J.pop(), !e.compositeRule && f ? e.async ? r += " throw new ValidationError([" + g + "]); " : r += " validate.errors = [" + g + "]; return false; " : r += " var err = " + g + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", 
                    r += " } if (" + N + " !== undefined) {  ";
                    var k = u ? "data" + (u - 1 || "") : "parentData";
                    r += " " + _ + " = " + N + "; ", u || (r += "if (" + k + " !== undefined)"), r += " " + k + "[" + (u ? e.dataPathArr[u] : "parentDataProperty") + "] = " + N + "; } ";
                } else {
                    (J = J || []).push(r), r = "", !1 !== e.createErrors ? (r += " { keyword: 'type' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(p) + " , params: { type: '", 
                    r += S ? "" + w.join(",") : "" + w, r += "' } ", !1 !== e.opts.messages && (r += " , message: 'should be ", 
                    r += S ? "" + w.join(",") : "" + w, r += "' "), e.opts.verbose && (r += " , schema: validate.schema" + h + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + _ + " "), 
                    r += " } ") : r += " {} ";
                    g = r;
                    r = J.pop(), !e.compositeRule && f ? e.async ? r += " throw new ValidationError([" + g + "]); " : r += " validate.errors = [" + g + "]; return false; " : r += " var err = " + g + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ";
                }
                r += " } ";
            }
        }
        if (e.schema.$ref && !o) r += " " + e.RULES.all.$ref.code(e, "$ref") + " ", f && (r += " } if (errors === ", 
        r += v ? "0" : "errs_" + c, r += ") { ", b += "}"); else {
            var M = e.RULES;
            if (M) for (var P = -1, x = M.length - 1; P < x; ) if (X(A = M[P += 1])) {
                if (A.type && (r += " if (" + e.util.checkDataType(A.type, _, e.opts.strictNumbers) + ") { "), 
                e.opts.useDefaults) if ("object" == A.type && e.schema.properties) {
                    d = e.schema.properties;
                    var F = Object.keys(d);
                    if (F) for (var j, U = -1, W = F.length - 1; U < W; ) {
                        if (void 0 !== ($ = d[j = F[U += 1]]).default) {
                            var B = _ + e.util.getProperty(j);
                            if (e.compositeRule) {
                                if (e.opts.strictDefaults) {
                                    y = "default is ignored for: " + B;
                                    if ("log" !== e.opts.strictDefaults) throw new Error(y);
                                    e.logger.warn(y);
                                }
                            } else r += " if (" + B + " === undefined ", "empty" == e.opts.useDefaults && (r += " || " + B + " === null || " + B + " === '' "), 
                            r += " ) " + B + " = ", "shared" == e.opts.useDefaults ? r += " " + e.useDefault($.default) + " " : r += " " + JSON.stringify($.default) + " ", 
                            r += "; ";
                        }
                    }
                } else if ("array" == A.type && Array.isArray(e.schema.items)) {
                    var H = e.schema.items;
                    if (H) {
                        D = -1;
                        for (var $, Y = H.length - 1; D < Y; ) if (void 0 !== ($ = H[D += 1]).default) {
                            B = _ + "[" + D + "]";
                            if (e.compositeRule) {
                                if (e.opts.strictDefaults) {
                                    y = "default is ignored for: " + B;
                                    if ("log" !== e.opts.strictDefaults) throw new Error(y);
                                    e.logger.warn(y);
                                }
                            } else r += " if (" + B + " === undefined ", "empty" == e.opts.useDefaults && (r += " || " + B + " === null || " + B + " === '' "), 
                            r += " ) " + B + " = ", "shared" == e.opts.useDefaults ? r += " " + e.useDefault($.default) + " " : r += " " + JSON.stringify($.default) + " ", 
                            r += "; ";
                        }
                    }
                }
                var z = A.rules;
                if (z) for (var G, q = -1, V = z.length - 1; q < V; ) if (Q(G = z[q += 1])) {
                    var K = G.code(e, G.keyword, A.type);
                    K && (r += " " + K + " ", f && (E += "}"));
                }
                if (f && (r += " " + E + " ", E = ""), A.type && (r += " } ", w && w === A.type && !T)) {
                    r += " else { ";
                    var J;
                    h = e.schemaPath + ".type", p = e.errSchemaPath + "/type";
                    (J = J || []).push(r), r = "", !1 !== e.createErrors ? (r += " { keyword: 'type' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(p) + " , params: { type: '", 
                    r += S ? "" + w.join(",") : "" + w, r += "' } ", !1 !== e.opts.messages && (r += " , message: 'should be ", 
                    r += S ? "" + w.join(",") : "" + w, r += "' "), e.opts.verbose && (r += " , schema: validate.schema" + h + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + _ + " "), 
                    r += " } ") : r += " {} ";
                    g = r;
                    r = J.pop(), !e.compositeRule && f ? e.async ? r += " throw new ValidationError([" + g + "]); " : r += " validate.errors = [" + g + "]; return false; " : r += " var err = " + g + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", 
                    r += " } ";
                }
                f && (r += " if (errors === ", r += v ? "0" : "errs_" + c, r += ") { ", b += "}");
            }
        }
        function X(e) {
            for (var t = e.rules, n = 0; n < t.length; n++) if (Q(t[n])) return !0;
        }
        function Q(t) {
            return void 0 !== e.schema[t.keyword] || t.implements && function(t) {
                for (var n = t.implements, r = 0; r < n.length; r++) if (void 0 !== e.schema[n[r]]) return !0;
            }(t);
        }
        return f && (r += " " + b + " "), v ? (i ? (r += " if (errors === 0) return data;           ", 
        r += " else throw new ValidationError(vErrors); ") : (r += " validate.errors = vErrors; ", 
        r += " return errors === 0;       "), r += " }; return validate;") : r += " var " + m + " = errors === errs_" + c + ";", 
        r;
    };
}
