// analysis/pretty/main.js:105270; webpack module 1429
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.throttlePrintLog = void 0;
    const r = n(25);
    t.throttlePrintLog = r.throttle(e => {
        e();
    }, 3e3, {
        leading: !0,
        trailing: !0
    });
}
