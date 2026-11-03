// analysis/pretty/main.js:78558; webpack module 903
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    const r = n(18), i = {
        keyword: [ "then", "else" ],
        schemaType: [ "object", "boolean" ],
        code({keyword: e, parentSchema: t, it: n}) {
            void 0 === t.if && (0, r.checkStrictMode)(n, `"${e}" without "if" is ignored`);
        }
    };
    t.default = i;
}
