// analysis/pretty/main.js:124387; webpack module 1658
function(e, t, n) {
    e.exports = function(e, t, n) {
        return h(p(e, t, n));
    }, e.exports.compileUnsafe = p, e.exports.compileToken = y;
    var r = n(1659), i = n(172), o = i.isTag, a = n(1660), s = n(1661), l = n(173), c = l.trueFunc, u = l.falseFunc, d = n(785);
    function h(e) {
        return function(t) {
            return o(t) && e(t);
        };
    }
    function p(e, t, n) {
        return y(r(e, t), t, n);
    }
    function f(e) {
        return "pseudo" === e.type && ("scope" === e.name || Array.isArray(e.data) && e.data.some(function(e) {
            return e.some(f);
        }));
    }
    var _ = {
        type: "descendant"
    }, m = {
        type: "pseudo",
        name: "scope"
    }, g = {}, v = i.getParent;
    function y(e, t, n) {
        (e = e.filter(function(e) {
            return e.length > 0;
        })).forEach(s);
        var r = Array.isArray(n);
        return (n = t && t.context || n) && !r && (n = [ n ]), function(e, t) {
            var n = !!t && !!t.length && t.every(function(e) {
                return e === g || !!v(e);
            });
            e.forEach(function(e) {
                if (e.length > 0 && E(e[0]) && "descendant" !== e[0].type) ; else {
                    if (!n || f(e)) return;
                    e.unshift(_);
                }
                e.unshift(m);
            });
        }(e, n), e.map(function(e) {
            return function(e, t, n, r) {
                var i = r && "scope" === e[0].name && "descendant" === e[1].type;
                return e.reduce(function(e, r, o) {
                    return e === u ? e : a[r.type](e, r, t, n, i && 1 === o);
                }, t && t.rootFunc || c);
            }(e, t, n, r);
        }).reduce(b, u);
    }
    function E(e) {
        return d[e.type] < 0;
    }
    function b(e, t) {
        return t === u || e === c ? e : e === u || t === c ? t : function(n) {
            return e(n) || t(n);
        };
    }
    var w = n(370).filters, S = i.existsOne, T = (o = i.isTag, i.getChildren);
    function A(e) {
        return e.some(E);
    }
    w.not = function(e, t, n, r) {
        var i = {
            xmlMode: !(!n || !n.xmlMode),
            strict: !(!n || !n.strict)
        };
        if (i.strict && (t.length > 1 || t.some(A))) throw new SyntaxError("complex selectors in :not aren't allowed in strict mode");
        var o = y(t, i, r);
        return o === u ? e : o === c ? u : function(t) {
            return !o(t) && e(t);
        };
    }, w.has = function(e, t, n) {
        var r = {
            xmlMode: !(!n || !n.xmlMode),
            strict: !(!n || !n.strict)
        }, i = t.some(A) ? [ g ] : null, a = y(t, r, i);
        return a === u ? u : a === c ? function(t) {
            return T(t).some(o) && e(t);
        } : (a = h(a), i ? function(t) {
            return e(t) && (i[0] = t, S(a, T(t)));
        } : function(t) {
            return e(t) && S(a, T(t));
        });
    }, w.matches = function(e, t, n, r) {
        return y(t, {
            xmlMode: !(!n || !n.xmlMode),
            strict: !(!n || !n.strict),
            rootFunc: e
        }, r);
    };
}
