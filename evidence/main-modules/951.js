// analysis/pretty/main.js:80542; webpack module 951
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    const r = n(19), i = {
        keyword: [ "then", "else" ],
        schemaType: [ "object", "boolean" ],
        code({keyword: e, parentSchema: t, it: n}) {
            void 0 === t.if && (0, r.checkStrictMode)(n, `"${e}" without "if" is ignored`);
        }
    };
    t.default = i;
}
