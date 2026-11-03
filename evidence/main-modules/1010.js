// analysis/pretty/main.js:81922; webpack module 1010
function(e, t, n) {
    "use strict";
    const r = n(51), {LEVEL: i, MESSAGE: o} = n(27);
    e.exports = r((e, {stack: t, cause: n}) => {
        if (e instanceof Error) {
            const r = Object.assign({}, e, {
                level: e.level,
                [i]: e[i] || e.level,
                message: e.message,
                [o]: e[o] || e.message
            });
            return t && (r.stack = e.stack), n && (r.cause = e.cause), r;
        }
        if (!(e.message instanceof Error)) return e;
        const r = e.message;
        return Object.assign(e, r), e.message = r.message, e[o] = r.message, t && (e.stack = r.stack), 
        n && (e.cause = r.cause), e;
    });
}
