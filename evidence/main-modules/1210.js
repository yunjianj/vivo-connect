// analysis/pretty/main.js:95748; webpack module 1210
function(e, t, n) {
    "use strict";
    var r = n(1211), i = n(130).toHash;
    e.exports = function() {
        var e = [ {
            type: "number",
            rules: [ {
                maximum: [ "exclusiveMaximum" ]
            }, {
                minimum: [ "exclusiveMinimum" ]
            }, "multipleOf", "format" ]
        }, {
            type: "string",
            rules: [ "maxLength", "minLength", "pattern", "format" ]
        }, {
            type: "array",
            rules: [ "maxItems", "minItems", "items", "contains", "uniqueItems" ]
        }, {
            type: "object",
            rules: [ "maxProperties", "minProperties", "required", "dependencies", "propertyNames", {
                properties: [ "additionalProperties", "patternProperties" ]
            } ]
        }, {
            rules: [ "$ref", "const", "enum", "not", "anyOf", "oneOf", "allOf", "if" ]
        } ], t = [ "type", "$comment" ];
        return e.all = i(t), e.types = i([ "number", "integer", "string", "array", "object", "boolean", "null" ]), 
        e.forEach(function(n) {
            n.rules = n.rules.map(function(n) {
                var i;
                if ("object" == typeof n) {
                    var o = Object.keys(n)[0];
                    i = n[o], n = o, i.forEach(function(n) {
                        t.push(n), e.all[n] = !0;
                    });
                }
                return t.push(n), e.all[n] = {
                    keyword: n,
                    code: r[n],
                    implements: i
                };
            }), e.all.$comment = {
                keyword: "$comment",
                code: r.$comment
            }, n.type && (e.types[n.type] = n);
        }), e.keywords = i(t.concat([ "$schema", "$id", "id", "$data", "$async", "title", "description", "default", "definitions", "examples", "readOnly", "writeOnly", "contentMediaType", "contentEncoding", "additionalItems", "then", "else" ])), 
        e.custom = {}, e;
    };
}
