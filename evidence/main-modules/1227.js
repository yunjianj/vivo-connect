// analysis/pretty/main.js:96255; webpack module 1227
function(e, t, n) {
    "use strict";
    e.exports = function(e, t, n) {
        var r = " ", i = e.level, o = e.dataLevel, a = e.schema[t], s = e.schemaPath + e.util.getProperty(t), l = e.errSchemaPath + "/" + t, c = !e.opts.allErrors, u = "data" + (o || ""), d = "errs__" + i, h = e.util.copy(e), p = "";
        h.level++;
        var f = "valid" + h.level, _ = "key" + i, m = "idx" + i, g = h.dataLevel = e.dataLevel + 1, v = "data" + g, y = "dataProperties" + i, E = Object.keys(a || {}).filter(k), b = e.schema.patternProperties || {}, w = Object.keys(b).filter(k), S = e.schema.additionalProperties, T = E.length || w.length, A = !1 === S, O = "object" == typeof S && Object.keys(S).length, C = e.opts.removeAdditional, N = A || O || C, I = e.opts.ownProperties, R = e.baseId, D = e.schema.required;
        if (D && (!e.opts.$data || !D.$data) && D.length < e.opts.loopRequired) var L = e.util.toHash(D);
        function k(e) {
            return "__proto__" !== e;
        }
        if (r += "var " + d + " = errors;var " + f + " = true;", I && (r += " var " + y + " = undefined;"), 
        N) {
            if (r += I ? " " + y + " = " + y + " || Object.keys(" + u + "); for (var " + m + "=0; " + m + "<" + y + ".length; " + m + "++) { var " + _ + " = " + y + "[" + m + "]; " : " for (var " + _ + " in " + u + ") { ", 
            T) {
                if (r += " var isAdditional" + i + " = !(false ", E.length) if (E.length > 8) r += " || validate.schema" + s + ".hasOwnProperty(" + _ + ") "; else {
                    var M = E;
                    if (M) for (var P = -1, x = M.length - 1; P < x; ) K = M[P += 1], r += " || " + _ + " == " + e.util.toQuotedString(K) + " ";
                }
                if (w.length) {
                    var F = w;
                    if (F) for (var j = -1, U = F.length - 1; j < U; ) oe = F[j += 1], r += " || " + e.usePattern(oe) + ".test(" + _ + ") ";
                }
                r += " ); if (isAdditional" + i + ") { ";
            }
            if ("all" == C) r += " delete " + u + "[" + _ + "]; "; else {
                var W = e.errorPath, B = "' + " + _ + " + '";
                if (e.opts._errorDataPathProperty && (e.errorPath = e.util.getPathExpr(e.errorPath, _, e.opts.jsonPointers)), 
                A) if (C) r += " delete " + u + "[" + _ + "]; "; else {
                    r += " " + f + " = false; ";
                    var H = l;
                    l = e.errSchemaPath + "/additionalProperties", (ne = ne || []).push(r), r = "", 
                    !1 !== e.createErrors ? (r += " { keyword: 'additionalProperties' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(l) + " , params: { additionalProperty: '" + B + "' } ", 
                    !1 !== e.opts.messages && (r += " , message: '", e.opts._errorDataPathProperty ? r += "is an invalid additional property" : r += "should NOT have additional properties", 
                    r += "' "), e.opts.verbose && (r += " , schema: false , parentSchema: validate.schema" + e.schemaPath + " , data: " + u + " "), 
                    r += " } ") : r += " {} ";
                    var $ = r;
                    r = ne.pop(), !e.compositeRule && c ? e.async ? r += " throw new ValidationError([" + $ + "]); " : r += " validate.errors = [" + $ + "]; return false; " : r += " var err = " + $ + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", 
                    l = H, c && (r += " break; ");
                } else if (O) if ("failing" == C) {
                    r += " var " + d + " = errors;  ";
                    var Y = e.compositeRule;
                    e.compositeRule = h.compositeRule = !0, h.schema = S, h.schemaPath = e.schemaPath + ".additionalProperties", 
                    h.errSchemaPath = e.errSchemaPath + "/additionalProperties", h.errorPath = e.opts._errorDataPathProperty ? e.errorPath : e.util.getPathExpr(e.errorPath, _, e.opts.jsonPointers);
                    var z = u + "[" + _ + "]";
                    h.dataPathArr[g] = _;
                    var G = e.validate(h);
                    h.baseId = R, e.util.varOccurences(G, v) < 2 ? r += " " + e.util.varReplace(G, v, z) + " " : r += " var " + v + " = " + z + "; " + G + " ", 
                    r += " if (!" + f + ") { errors = " + d + "; if (validate.errors !== null) { if (errors) validate.errors.length = errors; else validate.errors = null; } delete " + u + "[" + _ + "]; }  ", 
                    e.compositeRule = h.compositeRule = Y;
                } else {
                    h.schema = S, h.schemaPath = e.schemaPath + ".additionalProperties", h.errSchemaPath = e.errSchemaPath + "/additionalProperties", 
                    h.errorPath = e.opts._errorDataPathProperty ? e.errorPath : e.util.getPathExpr(e.errorPath, _, e.opts.jsonPointers);
                    z = u + "[" + _ + "]";
                    h.dataPathArr[g] = _;
                    G = e.validate(h);
                    h.baseId = R, e.util.varOccurences(G, v) < 2 ? r += " " + e.util.varReplace(G, v, z) + " " : r += " var " + v + " = " + z + "; " + G + " ", 
                    c && (r += " if (!" + f + ") break; ");
                }
                e.errorPath = W;
            }
            T && (r += " } "), r += " }  ", c && (r += " if (" + f + ") { ", p += "}");
        }
        var q = e.opts.useDefaults && !e.compositeRule;
        if (E.length) {
            var V = E;
            if (V) for (var K, J = -1, X = V.length - 1; J < X; ) {
                var Q = a[K = V[J += 1]];
                if (e.opts.strictKeywords ? "object" == typeof Q && Object.keys(Q).length > 0 || !1 === Q : e.util.schemaHasRules(Q, e.RULES.all)) {
                    var Z = e.util.getProperty(K), ee = (z = u + Z, q && void 0 !== Q.default);
                    h.schema = Q, h.schemaPath = s + Z, h.errSchemaPath = l + "/" + e.util.escapeFragment(K), 
                    h.errorPath = e.util.getPath(e.errorPath, K, e.opts.jsonPointers), h.dataPathArr[g] = e.util.toQuotedString(K);
                    G = e.validate(h);
                    if (h.baseId = R, e.util.varOccurences(G, v) < 2) {
                        G = e.util.varReplace(G, v, z);
                        var te = z;
                    } else {
                        te = v;
                        r += " var " + v + " = " + z + "; ";
                    }
                    if (ee) r += " " + G + " "; else {
                        if (L && L[K]) {
                            r += " if ( " + te + " === undefined ", I && (r += " || ! Object.prototype.hasOwnProperty.call(" + u + ", '" + e.util.escapeQuotes(K) + "') "), 
                            r += ") { " + f + " = false; ";
                            W = e.errorPath, H = l;
                            var ne, re = e.util.escapeQuotes(K);
                            e.opts._errorDataPathProperty && (e.errorPath = e.util.getPath(W, K, e.opts.jsonPointers)), 
                            l = e.errSchemaPath + "/required", (ne = ne || []).push(r), r = "", !1 !== e.createErrors ? (r += " { keyword: 'required' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(l) + " , params: { missingProperty: '" + re + "' } ", 
                            !1 !== e.opts.messages && (r += " , message: '", e.opts._errorDataPathProperty ? r += "is a required property" : r += "should have required property \\'" + re + "\\'", 
                            r += "' "), e.opts.verbose && (r += " , schema: validate.schema" + s + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + u + " "), 
                            r += " } ") : r += " {} ";
                            $ = r;
                            r = ne.pop(), !e.compositeRule && c ? e.async ? r += " throw new ValidationError([" + $ + "]); " : r += " validate.errors = [" + $ + "]; return false; " : r += " var err = " + $ + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", 
                            l = H, e.errorPath = W, r += " } else { ";
                        } else c ? (r += " if ( " + te + " === undefined ", I && (r += " || ! Object.prototype.hasOwnProperty.call(" + u + ", '" + e.util.escapeQuotes(K) + "') "), 
                        r += ") { " + f + " = true; } else { ") : (r += " if (" + te + " !== undefined ", 
                        I && (r += " &&   Object.prototype.hasOwnProperty.call(" + u + ", '" + e.util.escapeQuotes(K) + "') "), 
                        r += " ) { ");
                        r += " " + G + " } ";
                    }
                }
                c && (r += " if (" + f + ") { ", p += "}");
            }
        }
        if (w.length) {
            var ie = w;
            if (ie) for (var oe, ae = -1, se = ie.length - 1; ae < se; ) {
                Q = b[oe = ie[ae += 1]];
                if (e.opts.strictKeywords ? "object" == typeof Q && Object.keys(Q).length > 0 || !1 === Q : e.util.schemaHasRules(Q, e.RULES.all)) {
                    h.schema = Q, h.schemaPath = e.schemaPath + ".patternProperties" + e.util.getProperty(oe), 
                    h.errSchemaPath = e.errSchemaPath + "/patternProperties/" + e.util.escapeFragment(oe), 
                    r += I ? " " + y + " = " + y + " || Object.keys(" + u + "); for (var " + m + "=0; " + m + "<" + y + ".length; " + m + "++) { var " + _ + " = " + y + "[" + m + "]; " : " for (var " + _ + " in " + u + ") { ", 
                    r += " if (" + e.usePattern(oe) + ".test(" + _ + ")) { ", h.errorPath = e.util.getPathExpr(e.errorPath, _, e.opts.jsonPointers);
                    z = u + "[" + _ + "]";
                    h.dataPathArr[g] = _;
                    G = e.validate(h);
                    h.baseId = R, e.util.varOccurences(G, v) < 2 ? r += " " + e.util.varReplace(G, v, z) + " " : r += " var " + v + " = " + z + "; " + G + " ", 
                    c && (r += " if (!" + f + ") break; "), r += " } ", c && (r += " else " + f + " = true; "), 
                    r += " }  ", c && (r += " if (" + f + ") { ", p += "}");
                }
            }
        }
        return c && (r += " " + p + " if (" + d + " == errors) {"), r;
    };
}
