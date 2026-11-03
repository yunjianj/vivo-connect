// analysis/pretty/main.js:132066; webpack module 1718
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.clearStore = void 0;
    const r = n(0).__importDefault(n(6));
    t.clearStore = e => {
        e.forEach(e => {
            r.default.removeItem(e);
        });
    };
}
