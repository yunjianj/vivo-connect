// analysis/pretty/main.js:79472; webpack module 916
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.assignDefaults = void 0;
    const r = n(13), i = n(19);
    function o(e, t, n) {
        const {gen: o, compositeRule: a, data: s, opts: l} = e;
        if (void 0 === n) return;
        const c = r._`${s}${(0, r.getProperty)(t)}`;
        if (a) return void (0, i.checkStrictMode)(e, "default is ignored for: " + c);
        let u = r._`${c} === undefined`;
        "empty" === l.useDefaults && (u = r._`${u} || ${c} === null || ${c} === ""`), o.if(u, r._`${c} = ${(0, 
        r.stringify)(n)}`);
    }
    t.assignDefaults = function(e, t) {
        const {properties: n, items: r} = e.schema;
        if ("object" === t && n) for (const t in n) o(e, t, n[t].default); else "array" === t && Array.isArray(r) && r.forEach((t, n) => o(e, n, t.default));
    };
}
