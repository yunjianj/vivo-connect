// analysis/pretty/main.js:81085; webpack module 985
function(e, t, n) {
    "use strict";
    const r = n(986), i = new WeakMap, o = (e, t = {}) => {
        if ("function" != typeof e) throw new TypeError("Expected a function");
        let n, o = 0;
        const a = e.displayName || e.name || "<anonymous>", s = function(...r) {
            if (i.set(s, ++o), 1 === o) n = e.apply(this, r), e = null; else if (!0 === t.throw) throw new Error(`Function \`${a}\` can only be called once`);
            return n;
        };
        return r(s, e), i.set(s, o), s;
    };
    e.exports = o, e.exports.default = o, e.exports.callCount = e => {
        if (!i.has(e)) throw new Error(`The given function \`${e.name}\` is not wrapped by the \`onetime\` package`);
        return i.get(e);
    };
}
