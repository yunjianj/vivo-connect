// analysis/pretty/main.js:4007; webpack module 18
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.checkStrictMode = t.getErrorPath = t.Type = t.useFunc = t.setEvaluated = t.evaluatedPropsToName = t.mergeEvaluated = t.eachItem = t.unescapeJsonPointer = t.escapeJsonPointer = t.escapeFragment = t.unescapeFragment = t.schemaRefOrVal = t.schemaHasRulesButRef = t.schemaHasRules = t.checkUnknownRules = t.alwaysValidSchema = t.toHash = void 0;
    const r = n(14), i = n(186);
    function o(e, t = e.schema) {
        const {opts: n, self: r} = e;
        if (!n.strictSchema) return;
        if ("boolean" == typeof t) return;
        const i = r.RULES.keywords;
        for (const n in t) i[n] || f(e, `unknown keyword: "${n}"`);
    }
    function a(e, t) {
        if ("boolean" == typeof e) return !e;
        for (const n in e) if (t[n]) return !0;
        return !1;
    }
    function s(e) {
        return "number" == typeof e ? "" + e : e.replace(/~/g, "~0").replace(/\//g, "~1");
    }
    function l(e) {
        return e.replace(/~1/g, "/").replace(/~0/g, "~");
    }
    function c({mergeNames: e, mergeToName: t, mergeValues: n, resultToName: i}) {
        return (o, a, s, l) => {
            const c = void 0 === s ? a : s instanceof r.Name ? (a instanceof r.Name ? e(o, a, s) : t(o, a, s), 
            s) : a instanceof r.Name ? (t(o, s, a), a) : n(a, s);
            return l !== r.Name || c instanceof r.Name ? c : i(o, c);
        };
    }
    function u(e, t) {
        if (!0 === t) return e.var("props", !0);
        const n = e.var("props", r._`{}`);
        return void 0 !== t && d(e, n, t), n;
    }
    function d(e, t, n) {
        Object.keys(n).forEach(n => e.assign(r._`${t}${(0, r.getProperty)(n)}`, !0));
    }
    t.toHash = function(e) {
        const t = {};
        for (const n of e) t[n] = !0;
        return t;
    }, t.alwaysValidSchema = function(e, t) {
        return "boolean" == typeof t ? t : 0 === Object.keys(t).length || (o(e, t), !a(t, e.self.RULES.all));
    }, t.checkUnknownRules = o, t.schemaHasRules = a, t.schemaHasRulesButRef = function(e, t) {
        if ("boolean" == typeof e) return !e;
        for (const n in e) if ("$ref" !== n && t.all[n]) return !0;
        return !1;
    }, t.schemaRefOrVal = function({topSchemaRef: e, schemaPath: t}, n, i, o) {
        if (!o) {
            if ("number" == typeof n || "boolean" == typeof n) return n;
            if ("string" == typeof n) return r._`${n}`;
        }
        return r._`${e}${t}${(0, r.getProperty)(i)}`;
    }, t.unescapeFragment = function(e) {
        return l(decodeURIComponent(e));
    }, t.escapeFragment = function(e) {
        return encodeURIComponent(s(e));
    }, t.escapeJsonPointer = s, t.unescapeJsonPointer = l, t.eachItem = function(e, t) {
        if (Array.isArray(e)) for (const n of e) t(n); else t(e);
    }, t.mergeEvaluated = {
        props: c({
            mergeNames: (e, t, n) => e.if(r._`${n} !== true && ${t} !== undefined`, () => {
                e.if(r._`${t} === true`, () => e.assign(n, !0), () => e.assign(n, r._`${n} || {}`).code(r._`Object.assign(${n}, ${t})`));
            }),
            mergeToName: (e, t, n) => e.if(r._`${n} !== true`, () => {
                !0 === t ? e.assign(n, !0) : (e.assign(n, r._`${n} || {}`), d(e, n, t));
            }),
            mergeValues: (e, t) => !0 === e || {
                ...e,
                ...t
            },
            resultToName: u
        }),
        items: c({
            mergeNames: (e, t, n) => e.if(r._`${n} !== true && ${t} !== undefined`, () => e.assign(n, r._`${t} === true ? true : ${n} > ${t} ? ${n} : ${t}`)),
            mergeToName: (e, t, n) => e.if(r._`${n} !== true`, () => e.assign(n, !0 === t || r._`${n} > ${t} ? ${n} : ${t}`)),
            mergeValues: (e, t) => !0 === e || Math.max(e, t),
            resultToName: (e, t) => e.var("items", t)
        })
    }, t.evaluatedPropsToName = u, t.setEvaluated = d;
    const h = {};
    var p;
    function f(e, t, n = e.opts.strictSchema) {
        if (n) {
            if (t = "strict mode: " + t, !0 === n) throw new Error(t);
            e.self.logger.warn(t);
        }
    }
    t.useFunc = function(e, t) {
        return e.scopeValue("func", {
            ref: t,
            code: h[t.code] || (h[t.code] = new i._Code(t.code))
        });
    }, function(e) {
        e[e.Num = 0] = "Num", e[e.Str = 1] = "Str";
    }(p || (t.Type = p = {})), t.getErrorPath = function(e, t, n) {
        if (e instanceof r.Name) {
            const i = t === p.Num;
            return n ? i ? r._`"[" + ${e} + "]"` : r._`"['" + ${e} + "']"` : i ? r._`"/" + ${e}` : r._`"/" + ${e}.replace(/~/g, "~0").replace(/\\//g, "~1")`;
        }
        return n ? (0, r.getProperty)(e).toString() : "/" + s(e);
    }, t.checkStrictMode = f;
}
