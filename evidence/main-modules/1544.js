// analysis/pretty/main.js:117942; webpack module 1544
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    const r = n(0), i = r.__importDefault(n(70)), o = n(53), a = r.__importStar(n(1545));
    class s extends i.default {
        constructor(e) {
            super(e);
        }
    }
    Object.keys(a).forEach(e => {
        const t = a[e];
        "function" == typeof t && (s.prototype[e] = t);
    });
    const l = new s(o.V_TALK_DB);
    e.exports = l;
}
