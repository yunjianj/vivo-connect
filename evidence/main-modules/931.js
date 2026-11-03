// analysis/pretty/main.js:79903; webpack module 931
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    const r = n(60), i = n(19), o = n(13), a = {
        keyword: "pattern",
        type: "string",
        schemaType: "string",
        $data: !0,
        error: {
            message: ({schemaCode: e}) => o.str`must match pattern "${e}"`,
            params: ({schemaCode: e}) => o._`{pattern: ${e}}`
        },
        code(e) {
            const {gen: t, data: n, $data: a, schema: s, schemaCode: l, it: c} = e, u = c.opts.unicodeRegExp ? "u" : "";
            if (a) {
                const {regExp: r} = c.opts.code, a = "new RegExp" === r.code ? o._`new RegExp` : (0, 
                i.useFunc)(t, r), s = t.let("valid");
                t.try(() => t.assign(s, o._`${a}(${l}, ${u}).test(${n})`), () => t.assign(s, !1)), 
                e.fail$data(o._`!${s}`);
            } else {
                const t = (0, r.usePattern)(e, s);
                e.fail$data(o._`!${t}.test(${n})`);
            }
        }
    };
    t.default = a;
}
