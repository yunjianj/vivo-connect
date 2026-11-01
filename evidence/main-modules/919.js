// analysis/pretty/main.js:79619; webpack module 919
function(e, t, n) {
    "use strict";
    var r = e.exports = function(e, t, n) {
        "function" == typeof t && (n = t, t = {}), function e(t, n, i, o, a, s, l, c, u, d) {
            if (o && "object" == typeof o && !Array.isArray(o)) {
                for (var h in n(o, a, s, l, c, u, d), o) {
                    var p = o[h];
                    if (Array.isArray(p)) {
                        if (h in r.arrayKeywords) for (var f = 0; f < p.length; f++) e(t, n, i, p[f], a + "/" + h + "/" + f, s, a, h, o, f);
                    } else if (h in r.propsKeywords) {
                        if (p && "object" == typeof p) for (var _ in p) e(t, n, i, p[_], a + "/" + h + "/" + _.replace(/~/g, "~0").replace(/\//g, "~1"), s, a, h, o, _);
                    } else (h in r.keywords || t.allKeys && !(h in r.skipKeywords)) && e(t, n, i, p, a + "/" + h, s, a, h, o);
                }
                i(o, a, s, l, c, u, d);
            }
        }(t, "function" == typeof (n = t.cb || n) ? n : n.pre || function() {}, n.post || function() {}, e, "", e);
    };
    r.keywords = {
        additionalItems: !0,
        items: !0,
        contains: !0,
        additionalProperties: !0,
        propertyNames: !0,
        not: !0,
        if: !0,
        then: !0,
        else: !0
    }, r.arrayKeywords = {
        items: !0,
        allOf: !0,
        anyOf: !0,
        oneOf: !0
    }, r.propsKeywords = {
        $defs: !0,
        definitions: !0,
        properties: !0,
        patternProperties: !0,
        dependencies: !0
    }, r.skipKeywords = {
        default: !0,
        enum: !0,
        const: !0,
        required: !0,
        maximum: !0,
        minimum: !0,
        exclusiveMaximum: !0,
        exclusiveMinimum: !0,
        multipleOf: !0,
        maxLength: !0,
        minLength: !0,
        pattern: !0,
        format: !0,
        maxItems: !0,
        minItems: !0,
        uniqueItems: !0,
        maxProperties: !0,
        minProperties: !0
    };
}
