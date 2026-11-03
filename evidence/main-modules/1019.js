// analysis/pretty/main.js:82031; webpack module 1019
function(e, t, n) {
    "use strict";
    const r = n(51), {MESSAGE: i} = n(27), o = n(202);
    e.exports = r(e => {
        const t = o(Object.assign({}, e, {
            level: void 0,
            message: void 0,
            splat: void 0
        })), n = e.padding && e.padding[e.level] || "";
        return e[i] = "{}" !== t ? `${e.level}:${n} ${e.message} ${t}` : `${e.level}:${n} ${e.message}`, 
        e;
    });
}
