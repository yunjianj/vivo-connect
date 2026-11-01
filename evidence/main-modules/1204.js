// analysis/pretty/main.js:94930; webpack module 1204
function(e, t, n) {
    "use strict";
    var r = n(301), i = n(130), o = n(302), a = n(641), s = n(642), l = i.ucs2length, c = n(99), u = o.Validation;
    function d(e, t, n) {
        var r = p.call(this, e, t, n);
        return r >= 0 ? {
            index: r,
            compiling: !0
        } : (r = this._compilations.length, this._compilations[r] = {
            schema: e,
            root: t,
            baseId: n
        }, {
            index: r,
            compiling: !1
        });
    }
    function h(e, t, n) {
        var r = p.call(this, e, t, n);
        r >= 0 && this._compilations.splice(r, 1);
    }
    function p(e, t, n) {
        for (var r = 0; r < this._compilations.length; r++) {
            var i = this._compilations[r];
            if (i.schema == e && i.root == t && i.baseId == n) return r;
        }
        return -1;
    }
    function f(e, t) {
        return "var pattern" + e + " = new RegExp(" + i.toQuotedString(t[e]) + ");";
    }
    function _(e) {
        return "var default" + e + " = defaults[" + e + "];";
    }
    function m(e, t) {
        return void 0 === t[e] ? "" : "var refVal" + e + " = refVal[" + e + "];";
    }
    function g(e) {
        return "var customRule" + e + " = customRules[" + e + "];";
    }
    function v(e, t) {
        if (!e.length) return "";
        for (var n = "", r = 0; r < e.length; r++) n += t(r, e);
        return n;
    }
    e.exports = function e(t, n, p, y) {
        var E = this, b = this._opts, w = [ void 0 ], S = {}, T = [], A = {}, O = [], C = {}, N = [];
        n = n || {
            schema: t,
            refVal: w,
            refs: S
        };
        var I = d.call(this, t, n, y), R = this._compilations[I.index];
        if (I.compiling) return R.callValidate = function e() {
            var t = R.validate, n = t.apply(this, arguments);
            return e.errors = t.errors, n;
        };
        var D = this._formats, L = this.RULES;
        try {
            var k = P(t, n, p, y);
            R.validate = k;
            var M = R.callValidate;
            return M && (M.schema = k.schema, M.errors = null, M.refs = k.refs, M.refVal = k.refVal, 
            M.root = k.root, M.$async = k.$async, b.sourceCode && (M.source = k.source)), k;
        } finally {
            h.call(this, t, n, y);
        }
        function P(t, a, d, h) {
            var p = !a || a && a.schema == t;
            if (a.schema != n.schema) return e.call(E, t, a, d, h);
            var y, A = !0 === t.$async, C = s({
                isTop: !0,
                schema: t,
                isRoot: p,
                baseId: h,
                root: a,
                schemaPath: "",
                errSchemaPath: "#",
                errorPath: '""',
                MissingRefError: o.MissingRef,
                RULES: L,
                validate: s,
                util: i,
                resolve: r,
                resolveRef: x,
                usePattern: U,
                useDefault: W,
                useCustomRule: B,
                opts: b,
                formats: D,
                logger: E.logger,
                self: E
            });
            C = v(w, m) + v(T, f) + v(O, _) + v(N, g) + C, b.processCode && (C = b.processCode(C, t));
            try {
                y = new Function("self", "RULES", "formats", "root", "refVal", "defaults", "customRules", "equal", "ucs2length", "ValidationError", C)(E, L, D, n, w, O, N, c, l, u), 
                w[0] = y;
            } catch (e) {
                throw E.logger.error("Error compiling schema, function code:", C), e;
            }
            return y.schema = t, y.errors = null, y.refs = S, y.refVal = w, y.root = p ? y : a, 
            A && (y.$async = !0), !0 === b.sourceCode && (y.source = {
                code: C,
                patterns: T,
                defaults: O
            }), y;
        }
        function x(t, i, o) {
            i = r.url(t, i);
            var a, s, l = S[i];
            if (void 0 !== l) return j(a = w[l], s = "refVal[" + l + "]");
            if (!o && n.refs) {
                var c = n.refs[i];
                if (void 0 !== c) return j(a = n.refVal[c], s = F(i, a));
            }
            s = F(i);
            var u = r.call(E, P, n, i);
            if (void 0 === u) {
                var d = p && p[i];
                d && (u = r.inlineRef(d, b.inlineRefs) ? d : e.call(E, d, n, p, t));
            }
            if (void 0 !== u) return function(e, t) {
                var n = S[e];
                w[n] = t;
            }(i, u), j(u, s);
            !function(e) {
                delete S[e];
            }(i);
        }
        function F(e, t) {
            var n = w.length;
            return w[n] = t, S[e] = n, "refVal" + n;
        }
        function j(e, t) {
            return "object" == typeof e || "boolean" == typeof e ? {
                code: t,
                schema: e,
                inline: !0
            } : {
                code: t,
                $async: e && !!e.$async
            };
        }
        function U(e) {
            var t = A[e];
            return void 0 === t && (t = A[e] = T.length, T[t] = e), "pattern" + t;
        }
        function W(e) {
            switch (typeof e) {
              case "boolean":
              case "number":
                return "" + e;

              case "string":
                return i.toQuotedString(e);

              case "object":
                if (null === e) return "null";
                var t = a(e), n = C[t];
                return void 0 === n && (n = C[t] = O.length, O[n] = e), "default" + n;
            }
        }
        function B(e, t, n, r) {
            if (!1 !== E._opts.validateSchema) {
                var i = e.definition.dependencies;
                if (i && !i.every(function(e) {
                    return Object.prototype.hasOwnProperty.call(n, e);
                })) throw new Error("parent schema must have all required keywords: " + i.join(","));
                var o = e.definition.validateSchema;
                if (o) if (!o(t)) {
                    var a = "keyword schema is invalid: " + E.errorsText(o.errors);
                    if ("log" != E._opts.validateSchema) throw new Error(a);
                    E.logger.error(a);
                }
            }
            var s, l = e.definition.compile, c = e.definition.inline, u = e.definition.macro;
            if (l) s = l.call(E, t, n, r); else if (u) s = u.call(E, t, n, r), !1 !== b.validateSchema && E.validateSchema(s, !0); else if (c) s = c.call(E, r, e.keyword, t, n); else if (!(s = e.definition.validate)) return;
            if (void 0 === s) throw new Error('custom keyword "' + e.keyword + '"failed to compile');
            var d = N.length;
            return N[d] = s, {
                code: "customRule" + d,
                validate: s
            };
        }
    };
}
