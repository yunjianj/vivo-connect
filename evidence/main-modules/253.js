// analysis/pretty/main.js:30416; webpack module 253
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    class r extends Error {
        constructor(e) {
            super("validation failed"), this.errors = e, this.ajv = this.validation = !0;
        }
    }
    t.default = r;
}
