// analysis/pretty/main.js:80134; webpack module 939
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    const r = n(403), i = {
        keyword: "prefixItems",
        type: "array",
        schemaType: [ "array" ],
        before: "uniqueItems",
        code: e => (0, r.validateTuple)(e, "items")
    };
    t.default = i;
}
