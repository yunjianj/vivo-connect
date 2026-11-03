// analysis/pretty/main.js:43056; webpack module 411
function(e, t, n) {
    "use strict";
    const r = n(412), {warn: i} = n(417);
    t.version = n(1024).version, t.transports = n(1025), t.config = n(273), t.addColors = r.levels, 
    t.format = r.format, t.createLogger = n(430), t.ExceptionHandler = n(431), t.RejectionHandler = n(435), 
    t.Container = n(1054), t.Transport = n(120), t.loggers = new t.Container;
    const o = t.createLogger();
    Object.keys(t.config.npm.levels).concat([ "log", "query", "stream", "add", "remove", "clear", "profile", "startTimer", "handleExceptions", "unhandleExceptions", "handleRejections", "unhandleRejections", "configure", "child" ]).forEach(e => t[e] = (...t) => o[e](...t)), 
    Object.defineProperty(t, "level", {
        get: () => o.level,
        set(e) {
            o.level = e;
        }
    }), Object.defineProperty(t, "exceptions", {
        get: () => o.exceptions
    }), [ "exitOnError" ].forEach(e => {
        Object.defineProperty(t, e, {
            get: () => o[e],
            set(t) {
                o[e] = t;
            }
        });
    }), Object.defineProperty(t, "default", {
        get: () => ({
            exceptionHandlers: o.exceptionHandlers,
            rejectionHandlers: o.rejectionHandlers,
            transports: o.transports
        })
    }), i.deprecated(t, "setLevels"), i.forFunctions(t, "useFormat", [ "cli" ]), i.forProperties(t, "useFormat", [ "padLevels", "stripColors" ]), 
    i.forFunctions(t, "deprecated", [ "addRewriter", "addFilter", "clone", "extend" ]), 
    i.forProperties(t, "deprecated", [ "emitErrs", "levelLength" ]), i.moved(t, "createLogger", "Logger");
}
