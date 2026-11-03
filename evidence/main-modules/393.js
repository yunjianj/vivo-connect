// analysis/pretty/main.js:42030; webpack module 393
function(e, t, n) {
    "use strict";
    function r(e, t) {
        return t.rules.some(t => i(e, t));
    }
    function i(e, t) {
        var n;
        return void 0 !== e[t.keyword] || (null === (n = t.definition.implements) || void 0 === n ? void 0 : n.some(t => void 0 !== e[t]));
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.shouldUseRule = t.shouldUseGroup = t.schemaHasRulesForType = void 0, t.schemaHasRulesForType = function({schema: e, self: t}, n) {
        const i = t.RULES.types[n];
        return i && !0 !== i && r(e, i);
    }, t.shouldUseGroup = r, t.shouldUseRule = i;
}
