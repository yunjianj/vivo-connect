// analysis/pretty/main.js:96514; webpack module 1231
function(e, t, n) {
    "use strict";
    var r = [ "multipleOf", "maximum", "exclusiveMaximum", "minimum", "exclusiveMinimum", "maxLength", "minLength", "pattern", "additionalItems", "maxItems", "minItems", "uniqueItems", "maxProperties", "minProperties", "required", "additionalProperties", "enum", "format", "const" ];
    e.exports = function(e, t) {
        for (var n = 0; n < t.length; n++) {
            e = JSON.parse(JSON.stringify(e));
            var i, o = t[n].split("/"), a = e;
            for (i = 1; i < o.length; i++) a = a[o[i]];
            for (i = 0; i < r.length; i++) {
                var s = r[i], l = a[s];
                l && (a[s] = {
                    anyOf: [ l, {
                        $ref: "https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#"
                    } ]
                });
            }
        }
        return e;
    };
}
