// analysis/pretty/main.js:76676; webpack module 857
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.attemptifySync = t.attemptifyAsync = void 0;
    const r = n(143);
    t.attemptifyAsync = (e, t = r.NOOP) => function() {
        return e.apply(void 0, arguments).catch(t);
    };
    t.attemptifySync = (e, t = r.NOOP) => function() {
        try {
            return e.apply(void 0, arguments);
        } catch (e) {
            return t(e);
        }
    };
}
