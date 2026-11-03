// analysis/pretty/main.js:96037; webpack module 1220
function(e, t, n) {
    "use strict";
    e.exports = function(e, t, n) {
        var r = " ", i = e.level, o = e.dataLevel, a = e.schema[t], s = e.schemaPath + e.util.getProperty(t), l = e.errSchemaPath + "/" + t, c = !e.opts.allErrors, u = "data" + (o || "");
        if (!1 === e.opts.format) return c && (r += " if (true) { "), r;
        var d, h = e.opts.$data && a && a.$data;
        h ? (r += " var schema" + i + " = " + e.util.getData(a.$data, o, e.dataPathArr) + "; ", 
        d = "schema" + i) : d = a;
        var p = e.opts.unknownFormats, f = Array.isArray(p);
        if (h) {
            r += " var " + (_ = "format" + i) + " = formats[" + d + "]; var " + (m = "isObject" + i) + " = typeof " + _ + " == 'object' && !(" + _ + " instanceof RegExp) && " + _ + ".validate; var " + (g = "formatType" + i) + " = " + m + " && " + _ + ".type || 'string'; if (" + m + ") { ", 
            e.async && (r += " var async" + i + " = " + _ + ".async; "), r += " " + _ + " = " + _ + ".validate; } if (  ", 
            h && (r += " (" + d + " !== undefined && typeof " + d + " != 'string') || "), r += " (", 
            "ignore" != p && (r += " (" + d + " && !" + _ + " ", f && (r += " && self._opts.unknownFormats.indexOf(" + d + ") == -1 "), 
            r += ") || "), r += " (" + _ + " && " + g + " == '" + n + "' && !(typeof " + _ + " == 'function' ? ", 
            e.async ? r += " (async" + i + " ? await " + _ + "(" + u + ") : " + _ + "(" + u + ")) " : r += " " + _ + "(" + u + ") ", 
            r += " : " + _ + ".test(" + u + "))))) {";
        } else {
            var _;
            if (!(_ = e.formats[a])) {
                if ("ignore" == p) return e.logger.warn('unknown format "' + a + '" ignored in schema at path "' + e.errSchemaPath + '"'), 
                c && (r += " if (true) { "), r;
                if (f && p.indexOf(a) >= 0) return c && (r += " if (true) { "), r;
                throw new Error('unknown format "' + a + '" is used in schema at path "' + e.errSchemaPath + '"');
            }
            var m, g = (m = "object" == typeof _ && !(_ instanceof RegExp) && _.validate) && _.type || "string";
            if (m) {
                var v = !0 === _.async;
                _ = _.validate;
            }
            if (g != n) return c && (r += " if (true) { "), r;
            if (v) {
                if (!e.async) throw new Error("async format in sync schema");
                r += " if (!(await " + (y = "formats" + e.util.getProperty(a) + ".validate") + "(" + u + "))) { ";
            } else {
                r += " if (! ";
                var y = "formats" + e.util.getProperty(a);
                m && (y += ".validate"), r += "function" == typeof _ ? " " + y + "(" + u + ") " : " " + y + ".test(" + u + ") ", 
                r += ") { ";
            }
        }
        var E = E || [];
        E.push(r), r = "", !1 !== e.createErrors ? (r += " { keyword: 'format' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(l) + " , params: { format:  ", 
        r += h ? "" + d : "" + e.util.toQuotedString(a), r += "  } ", !1 !== e.opts.messages && (r += " , message: 'should match format \"", 
        r += h ? "' + " + d + " + '" : "" + e.util.escapeQuotes(a), r += "\"' "), e.opts.verbose && (r += " , schema:  ", 
        r += h ? "validate.schema" + s : "" + e.util.toQuotedString(a), r += "         , parentSchema: validate.schema" + e.schemaPath + " , data: " + u + " "), 
        r += " } ") : r += " {} ";
        var b = r;
        return r = E.pop(), !e.compositeRule && c ? e.async ? r += " throw new ValidationError([" + b + "]); " : r += " validate.errors = [" + b + "]; return false; " : r += " var err = " + b + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", 
        r += " } ", c && (r += " else { "), r;
    };
}
