// analysis/pretty/main.js:95910; webpack module 1215
function(e, t, n) {
    "use strict";
    e.exports = function(e, t, n) {
        var r = " ", i = e.schema[t], o = e.errSchemaPath + "/" + t, a = (e.opts.allErrors, 
        e.util.toQuotedString(i));
        return !0 === e.opts.$comment ? r += " console.log(" + a + ");" : "function" == typeof e.opts.$comment && (r += " self._opts.$comment(" + a + ", " + e.util.toQuotedString(o) + ", validate.root.schema);"), 
        r;
    };
}
