// analysis/pretty/main.js:24851; webpack module 187
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.reportTypeError = t.checkDataTypes = t.checkDataType = t.coerceAndCheckDataType = t.getJSONTypes = t.getSchemaTypes = t.DataType = void 0;
    const r = n(392), i = n(393), o = n(185), a = n(14), s = n(18);
    var l;
    function c(e) {
        const t = Array.isArray(e) ? e : e ? [ e ] : [];
        if (t.every(r.isJSONType)) return t;
        throw new Error("type must be JSONType or JSONType[]: " + t.join(","));
    }
    !function(e) {
        e[e.Correct = 0] = "Correct", e[e.Wrong = 1] = "Wrong";
    }(l || (t.DataType = l = {})), t.getSchemaTypes = function(e) {
        const t = c(e.type);
        if (t.includes("null")) {
            if (!1 === e.nullable) throw new Error("type: null contradicts nullable: false");
        } else {
            if (!t.length && void 0 !== e.nullable) throw new Error('"nullable" cannot be used without "type"');
            !0 === e.nullable && t.push("null");
        }
        return t;
    }, t.getJSONTypes = c, t.coerceAndCheckDataType = function(e, t) {
        const {gen: n, data: r, opts: o} = e, s = function(e, t) {
            return t ? e.filter(e => u.has(e) || "array" === t && "array" === e) : [];
        }(t, o.coerceTypes), c = t.length > 0 && !(0 === s.length && 1 === t.length && (0, 
        i.schemaHasRulesForType)(e, t[0]));
        if (c) {
            const i = h(t, r, o.strictNumbers, l.Wrong);
            n.if(i, () => {
                s.length ? function(e, t, n) {
                    const {gen: r, data: i, opts: o} = e, s = r.let("dataType", a._`typeof ${i}`), l = r.let("coerced", a._`undefined`);
                    "array" === o.coerceTypes && r.if(a._`${s} == 'object' && Array.isArray(${i}) && ${i}.length == 1`, () => r.assign(i, a._`${i}[0]`).assign(s, a._`typeof ${i}`).if(h(t, i, o.strictNumbers), () => r.assign(l, i)));
                    r.if(a._`${l} !== undefined`);
                    for (const e of n) (u.has(e) || "array" === e && "array" === o.coerceTypes) && c(e);
                    function c(e) {
                        switch (e) {
                          case "string":
                            return void r.elseIf(a._`${s} == "number" || ${s} == "boolean"`).assign(l, a._`"" + ${i}`).elseIf(a._`${i} === null`).assign(l, a._`""`);

                          case "number":
                            return void r.elseIf(a._`${s} == "boolean" || ${i} === null
              || (${s} == "string" && ${i} && ${i} == +${i})`).assign(l, a._`+${i}`);

                          case "integer":
                            return void r.elseIf(a._`${s} === "boolean" || ${i} === null
              || (${s} === "string" && ${i} && ${i} == +${i} && !(${i} % 1))`).assign(l, a._`+${i}`);

                          case "boolean":
                            return void r.elseIf(a._`${i} === "false" || ${i} === 0 || ${i} === null`).assign(l, !1).elseIf(a._`${i} === "true" || ${i} === 1`).assign(l, !0);

                          case "null":
                            return r.elseIf(a._`${i} === "" || ${i} === 0 || ${i} === false`), void r.assign(l, null);

                          case "array":
                            r.elseIf(a._`${s} === "string" || ${s} === "number"
              || ${s} === "boolean" || ${i} === null`).assign(l, a._`[${i}]`);
                        }
                    }
                    r.else(), f(e), r.endIf(), r.if(a._`${l} !== undefined`, () => {
                        r.assign(i, l), function({gen: e, parentData: t, parentDataProperty: n}, r) {
                            e.if(a._`${t} !== undefined`, () => e.assign(a._`${t}[${n}]`, r));
                        }(e, l);
                    });
                }(e, t, s) : f(e);
            });
        }
        return c;
    };
    const u = new Set([ "string", "number", "integer", "boolean", "null" ]);
    function d(e, t, n, r = l.Correct) {
        const i = r === l.Correct ? a.operators.EQ : a.operators.NEQ;
        let o;
        switch (e) {
          case "null":
            return a._`${t} ${i} null`;

          case "array":
            o = a._`Array.isArray(${t})`;
            break;

          case "object":
            o = a._`${t} && typeof ${t} == "object" && !Array.isArray(${t})`;
            break;

          case "integer":
            o = s(a._`!(${t} % 1) && !isNaN(${t})`);
            break;

          case "number":
            o = s();
            break;

          default:
            return a._`typeof ${t} ${i} ${e}`;
        }
        return r === l.Correct ? o : (0, a.not)(o);
        function s(e = a.nil) {
            return (0, a.and)(a._`typeof ${t} == "number"`, e, n ? a._`isFinite(${t})` : a.nil);
        }
    }
    function h(e, t, n, r) {
        if (1 === e.length) return d(e[0], t, n, r);
        let i;
        const o = (0, s.toHash)(e);
        if (o.array && o.object) {
            const e = a._`typeof ${t} != "object"`;
            i = o.null ? e : a._`!${t} || ${e}`, delete o.null, delete o.array, delete o.object;
        } else i = a.nil;
        o.number && delete o.integer;
        for (const e in o) i = (0, a.and)(i, d(e, t, n, r));
        return i;
    }
    t.checkDataType = d, t.checkDataTypes = h;
    const p = {
        message: ({schema: e}) => "must be " + e,
        params: ({schema: e, schemaValue: t}) => "string" == typeof e ? a._`{type: ${e}}` : a._`{type: ${t}}`
    };
    function f(e) {
        const t = function(e) {
            const {gen: t, data: n, schema: r} = e, i = (0, s.schemaRefOrVal)(e, r, "type");
            return {
                gen: t,
                keyword: "type",
                data: n,
                schema: r.type,
                schemaCode: i,
                schemaValue: i,
                parentSchema: r,
                params: {},
                it: e
            };
        }(e);
        (0, o.reportError)(t, p);
    }
    t.reportTypeError = f;
}
