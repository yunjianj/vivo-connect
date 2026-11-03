// analysis/pretty/main.js:43252; webpack module 417
function(e, t, n) {
    "use strict";
    const {format: r} = n(5);
    t.warn = {
        deprecated: e => () => {
            throw new Error(r("{ %s } was removed in winston@3.0.0.", e));
        },
        useFormat: e => () => {
            throw new Error([ r("{ %s } was removed in winston@3.0.0.", e), "Use a custom winston.format = winston.format(function) instead." ].join("\n"));
        },
        forFunctions(e, n, r) {
            r.forEach(r => {
                e[r] = t.warn[n](r);
            });
        },
        moved(e, t, n) {
            function i() {
                return () => {
                    throw new Error([ r("winston.%s was moved in winston@3.0.0.", n), r("Use a winston.%s instead.", t) ].join("\n"));
                };
            }
            Object.defineProperty(e, n, {
                get: i,
                set: i
            });
        },
        forProperties(e, n, r) {
            r.forEach(r => {
                const i = t.warn[n](r);
                Object.defineProperty(e, r, {
                    get: i,
                    set: i
                });
            });
        }
    };
}
