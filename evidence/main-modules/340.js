// analysis/pretty/main.js:36838; webpack module 340
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.sendTask10534 = void 0;
    const r = n(0).__importDefault(n(284));
    t.sendTask10534 = function(e) {
        r.default.sendTask({
            eventId: "W688|10534",
            params: e
        });
    }, t.default = function(e, t) {
        console.log("normalTrackReport", e, t), r.default.sendTask({
            eventId: e,
            params: t || {}
        });
    };
}
