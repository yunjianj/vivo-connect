// analysis/pretty/main.js:25067; webpack module 189
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    const r = n(188);
    class i extends Error {
        constructor(e, t, n, i) {
            super(i || `can't resolve reference ${n} from id ${t}`), this.missingRef = (0, r.resolveUrl)(e, t, n), 
            this.missingSchema = (0, r.normalizeId)((0, r.getFullPath)(e, this.missingRef));
        }
    }
    t.default = i;
}
