// analysis/pretty/main.js:80728; webpack module 959
function(e, t, n) {
    "use strict";
    const r = (e, t, n, r) => {
        if ("length" === n || "prototype" === n) return;
        if ("arguments" === n || "caller" === n) return;
        const o = Object.getOwnPropertyDescriptor(e, n), a = Object.getOwnPropertyDescriptor(t, n);
        !i(o, a) && r || Object.defineProperty(e, n, a);
    }, i = function(e, t) {
        return void 0 === e || e.configurable || e.writable === t.writable && e.enumerable === t.enumerable && e.configurable === t.configurable && (e.writable || e.value === t.value);
    }, o = (e, t) => `/* Wrapped ${e}*/\n${t}`, a = Object.getOwnPropertyDescriptor(Function.prototype, "toString"), s = Object.getOwnPropertyDescriptor(Function.prototype.toString, "name");
    e.exports = (e, t, {ignoreNonConfigurable: n = !1} = {}) => {
        const {name: i} = e;
        for (const i of Reflect.ownKeys(t)) r(e, t, i, n);
        return ((e, t) => {
            const n = Object.getPrototypeOf(t);
            n !== Object.getPrototypeOf(e) && Object.setPrototypeOf(e, n);
        })(e, t), ((e, t, n) => {
            const r = "" === n ? "" : `with ${n.trim()}() `, i = o.bind(null, r, t.toString());
            Object.defineProperty(i, "name", s), Object.defineProperty(e, "toString", {
                ...a,
                value: i
            });
        })(e, t, i), e;
    };
}
