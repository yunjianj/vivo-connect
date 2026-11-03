// analysis/pretty/main.js:95827; webpack module 1212
function(e, t, n) {
    "use strict";
    e.exports = function(e, t, n) {
        var r, i, o = " ", a = e.level, s = e.dataLevel, l = e.schema[t], c = e.errSchemaPath + "/" + t, u = !e.opts.allErrors, d = "data" + (s || ""), h = "valid" + a;
        if ("#" == l || "#/" == l) e.isRoot ? (r = e.async, i = "validate") : (r = !0 === e.root.schema.$async, 
        i = "root.refVal[0]"); else {
            var p = e.resolveRef(e.baseId, l, e.isRoot);
            if (void 0 === p) {
                var f = e.MissingRefError.message(e.baseId, l);
                if ("fail" == e.opts.missingRefs) {
                    e.logger.error(f), (v = v || []).push(o), o = "", !1 !== e.createErrors ? (o += " { keyword: '$ref' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(c) + " , params: { ref: '" + e.util.escapeQuotes(l) + "' } ", 
                    !1 !== e.opts.messages && (o += " , message: 'can\\'t resolve reference " + e.util.escapeQuotes(l) + "' "), 
                    e.opts.verbose && (o += " , schema: " + e.util.toQuotedString(l) + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + d + " "), 
                    o += " } ") : o += " {} ";
                    var _ = o;
                    o = v.pop(), !e.compositeRule && u ? e.async ? o += " throw new ValidationError([" + _ + "]); " : o += " validate.errors = [" + _ + "]; return false; " : o += " var err = " + _ + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", 
                    u && (o += " if (false) { ");
                } else {
                    if ("ignore" != e.opts.missingRefs) throw new e.MissingRefError(e.baseId, l, f);
                    e.logger.warn(f), u && (o += " if (true) { ");
                }
            } else if (p.inline) {
                var m = e.util.copy(e);
                m.level++;
                var g = "valid" + m.level;
                m.schema = p.schema, m.schemaPath = "", m.errSchemaPath = l, o += " " + e.validate(m).replace(/validate\.schema/g, p.code) + " ", 
                u && (o += " if (" + g + ") { ");
            } else r = !0 === p.$async || e.async && !1 !== p.$async, i = p.code;
        }
        if (i) {
            var v;
            (v = v || []).push(o), o = "", e.opts.passContext ? o += " " + i + ".call(this, " : o += " " + i + "( ", 
            o += " " + d + ", (dataPath || '')", '""' != e.errorPath && (o += " + " + e.errorPath);
            var y = o += " , " + (s ? "data" + (s - 1 || "") : "parentData") + " , " + (s ? e.dataPathArr[s] : "parentDataProperty") + ", rootData)  ";
            if (o = v.pop(), r) {
                if (!e.async) throw new Error("async schema referenced by sync schema");
                u && (o += " var " + h + "; "), o += " try { await " + y + "; ", u && (o += " " + h + " = true; "), 
                o += " } catch (e) { if (!(e instanceof ValidationError)) throw e; if (vErrors === null) vErrors = e.errors; else vErrors = vErrors.concat(e.errors); errors = vErrors.length; ", 
                u && (o += " " + h + " = false; "), o += " } ", u && (o += " if (" + h + ") { ");
            } else o += " if (!" + y + ") { if (vErrors === null) vErrors = " + i + ".errors; else vErrors = vErrors.concat(" + i + ".errors); errors = vErrors.length; } ", 
            u && (o += " else { ");
        }
        return o;
    };
}
