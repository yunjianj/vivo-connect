// analysis/pretty/main.js:78150; webpack module 891
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    const r = n(397), i = {
        keyword: "prefixItems",
        type: "array",
        schemaType: [ "array" ],
        before: "uniqueItems",
        code: e => (0, r.validateTuple)(e, "items")
    };
    t.default = i;
}
