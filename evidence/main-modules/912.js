// analysis/pretty/main.js:78860; webpack module 912
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.formatLimitDefinition = void 0;
    const r = n(913), i = n(13), o = i.operators, a = {
        formatMaximum: {
            okStr: "<=",
            ok: o.LTE,
            fail: o.GT
        },
        formatMinimum: {
            okStr: ">=",
            ok: o.GTE,
            fail: o.LT
        },
        formatExclusiveMaximum: {
            okStr: "<",
            ok: o.LT,
            fail: o.GTE
        },
        formatExclusiveMinimum: {
            okStr: ">",
            ok: o.GT,
            fail: o.LTE
        }
    }, s = {
        message: ({keyword: e, schemaCode: t}) => i.str`should be ${a[e].okStr} ${t}`,
        params: ({keyword: e, schemaCode: t}) => i._`{comparison: ${a[e].okStr}, limit: ${t}}`
    };
    t.formatLimitDefinition = {
        keyword: Object.keys(a),
        type: "string",
        schemaType: "string",
        $data: !0,
        error: s,
        code(e) {
            const {gen: t, data: n, schemaCode: o, keyword: s, it: l} = e, {opts: c, self: u} = l;
            if (!c.validateFormats) return;
            const d = new r.KeywordCxt(l, u.RULES.all.format.definition, "format");
            function h(e) {
                return i._`${e}.compare(${n}, ${o}) ${a[s].fail} 0`;
            }
            d.$data ? function() {
                const n = t.scopeValue("formats", {
                    ref: u.formats,
                    code: c.code.formats
                }), r = t.const("fmt", i._`${n}[${d.schemaCode}]`);
                e.fail$data(i.or(i._`typeof ${r} != "object"`, i._`${r} instanceof RegExp`, i._`typeof ${r}.compare != "function"`, h(r)));
            }() : function() {
                const n = d.schema, r = u.formats[n];
                if (!r || !0 === r) return;
                if ("object" != typeof r || r instanceof RegExp || "function" != typeof r.compare) throw new Error(`"${s}": format "${n}" does not define "compare" function`);
                const o = t.scopeValue("formats", {
                    key: n,
                    ref: r,
                    code: c.code.formats ? i._`${c.code.formats}${i.getProperty(n)}` : void 0
                });
                e.fail$data(h(o));
            }();
        },
        dependencies: [ "format" ]
    };
    t.default = e => (e.addKeyword(t.formatLimitDefinition), e);
}
