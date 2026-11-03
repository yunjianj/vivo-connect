// analysis/pretty/main.js:102432; webpack module 1374
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.throttleExecuteNoTrailing_500 = t.throttleExecuteNoTrailing = t.throttleExecute = void 0;
    const r = n(25), i = e => {
        e();
    };
    t.throttleExecute = r.throttle(i, 3e3, {
        leading: !0,
        trailing: !0
    }), t.throttleExecuteNoTrailing = r.throttle(i, 3e3, {
        leading: !0,
        trailing: !1
    }), t.throttleExecuteNoTrailing_500 = r.throttle(i, 500, {
        leading: !0,
        trailing: !1
    });
}
