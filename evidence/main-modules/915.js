// analysis/pretty/main.js:79443; webpack module 915
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.boolOrEmptySchema = t.topBoolOrEmptySchema = void 0;
    const r = n(191), i = n(13), o = n(86), a = {
        message: "boolean schema is false"
    };
    function s(e, t) {
        const {gen: n, data: i} = e, o = {
            gen: n,
            keyword: "false schema",
            data: i,
            schema: !1,
            schemaCode: !1,
            schemaValue: !1,
            params: {},
            it: e
        };
        (0, r.reportError)(o, a, void 0, t);
    }
    t.topBoolOrEmptySchema = function(e) {
        const {gen: t, schema: n, validateName: r} = e;
        !1 === n ? s(e, !1) : "object" == typeof n && !0 === n.$async ? t.return(o.default.data) : (t.assign(i._`${r}.errors`, null), 
        t.return(!0));
    }, t.boolOrEmptySchema = function(e, t) {
        const {gen: n, schema: r} = e;
        !1 === r ? (n.var(t, !1), s(e)) : n.var(t, !0);
    };
}
