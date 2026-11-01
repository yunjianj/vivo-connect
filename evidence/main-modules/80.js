// analysis/pretty/main.js:14803; webpack module 80
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.default = {
        commonLog: (e, t = "info") => {
            var n;
            "browser" === process.type ? null === global || void 0 === global || global.__log[t](e) : null === (n = null === window || void 0 === window ? void 0 : window._log) || void 0 === n || n[t](e);
        }
    };
}
