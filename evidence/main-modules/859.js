// analysis/pretty/main.js:76711; webpack module 859
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.retryifySync = t.retryifyAsync = void 0;
    const r = n(860);
    t.retryifyAsync = (e, t) => function(n) {
        return function i() {
            return r.default.schedule().then(r => e.apply(void 0, arguments).then(e => (r(), 
            e), e => {
                if (r(), Date.now() >= n) throw e;
                if (t(e)) {
                    const e = Math.round(100 + 400 * Math.random());
                    return new Promise(t => setTimeout(t, e)).then(() => i.apply(void 0, arguments));
                }
                throw e;
            }));
        };
    };
    t.retryifySync = (e, t) => function(n) {
        return function r() {
            try {
                return e.apply(void 0, arguments);
            } catch (e) {
                if (Date.now() > n) throw e;
                if (t(e)) return r.apply(void 0, arguments);
                throw e;
            }
        };
    };
}
