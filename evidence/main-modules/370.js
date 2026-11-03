// analysis/pretty/main.js:40452; webpack module 370
function(e, t, n) {
    var r = n(172), i = r.isTag, o = r.getText, a = r.getParent, s = r.getChildren, l = r.getSiblings, c = r.hasAttrib, u = r.getName, d = r.getAttributeValue, h = n(1655), p = n(784).rules.equals, f = n(173), _ = f.trueFunc, m = f.falseFunc;
    function g(e, t) {
        var n = {
            name: e,
            value: t
        };
        return function(e) {
            return p(e, n);
        };
    }
    function v(e) {
        return function(t) {
            return !!a(t) && e(t);
        };
    }
    var y = {
        contains: function(e, t) {
            return function(n) {
                return e(n) && o(n).indexOf(t) >= 0;
            };
        },
        icontains: function(e, t) {
            var n = t.toLowerCase();
            return function(t) {
                return e(t) && o(t).toLowerCase().indexOf(n) >= 0;
            };
        },
        "nth-child": function(e, t) {
            var n = h(t);
            return n === m ? n : n === _ ? v(e) : function(t) {
                for (var r = l(t), o = 0, a = 0; o < r.length; o++) if (i(r[o])) {
                    if (r[o] === t) break;
                    a++;
                }
                return n(a) && e(t);
            };
        },
        "nth-last-child": function(e, t) {
            var n = h(t);
            return n === m ? n : n === _ ? v(e) : function(t) {
                for (var r = l(t), o = 0, a = r.length - 1; a >= 0; a--) if (i(r[a])) {
                    if (r[a] === t) break;
                    o++;
                }
                return n(o) && e(t);
            };
        },
        "nth-of-type": function(e, t) {
            var n = h(t);
            return n === m ? n : n === _ ? v(e) : function(t) {
                for (var r = l(t), o = 0, a = 0; a < r.length; a++) if (i(r[a])) {
                    if (r[a] === t) break;
                    u(r[a]) === u(t) && o++;
                }
                return n(o) && e(t);
            };
        },
        "nth-last-of-type": function(e, t) {
            var n = h(t);
            return n === m ? n : n === _ ? v(e) : function(t) {
                for (var r = l(t), o = 0, a = r.length - 1; a >= 0; a--) if (i(r[a])) {
                    if (r[a] === t) break;
                    u(r[a]) === u(t) && o++;
                }
                return n(o) && e(t);
            };
        },
        root: function(e) {
            return function(t) {
                return !a(t) && e(t);
            };
        },
        scope: function(e, t, n, r) {
            return r && 0 !== r.length ? 1 === r.length ? function(t) {
                return r[0] === t && e(t);
            } : function(t) {
                return r.indexOf(t) >= 0 && e(t);
            } : y.root(e);
        },
        checkbox: g("type", "checkbox"),
        file: g("type", "file"),
        password: g("type", "password"),
        radio: g("type", "radio"),
        reset: g("type", "reset"),
        image: g("type", "image"),
        submit: g("type", "submit")
    }, E = {
        empty: function(e) {
            return !s(e).some(function(e) {
                return i(e) || "text" === e.type;
            });
        },
        "first-child": function(e) {
            return function(e) {
                for (var t = 0; e && t < e.length; t++) if (i(e[t])) return e[t];
            }(l(e)) === e;
        },
        "last-child": function(e) {
            for (var t = l(e), n = t.length - 1; n >= 0; n--) {
                if (t[n] === e) return !0;
                if (i(t[n])) break;
            }
            return !1;
        },
        "first-of-type": function(e) {
            for (var t = l(e), n = 0; n < t.length; n++) if (i(t[n])) {
                if (t[n] === e) return !0;
                if (u(t[n]) === u(e)) break;
            }
            return !1;
        },
        "last-of-type": function(e) {
            for (var t = l(e), n = t.length - 1; n >= 0; n--) if (i(t[n])) {
                if (t[n] === e) return !0;
                if (u(t[n]) === u(e)) break;
            }
            return !1;
        },
        "only-of-type": function(e) {
            for (var t = l(e), n = 0, r = t.length; n < r; n++) if (i(t[n])) {
                if (t[n] === e) continue;
                if (u(t[n]) === u(e)) return !1;
            }
            return !0;
        },
        "only-child": function(e) {
            for (var t = l(e), n = 0; n < t.length; n++) if (i(t[n]) && t[n] !== e) return !1;
            return !0;
        },
        link: function(e) {
            return c(e, "href");
        },
        visited: m,
        selected: function(e) {
            if (c(e, "selected")) return !0;
            if ("option" !== u(e)) return !1;
            var t = a(e);
            if (!t || "select" !== u(t) || c(t, "multiple")) return !1;
            for (var n = s(t), r = !1, o = 0; o < n.length; o++) if (i(n[o])) if (n[o] === e) r = !0; else {
                if (!r) return !1;
                if (c(n[o], "selected")) return !1;
            }
            return r;
        },
        disabled: function(e) {
            return c(e, "disabled");
        },
        enabled: function(e) {
            return !c(e, "disabled");
        },
        checked: function(e) {
            return c(e, "checked") || E.selected(e);
        },
        required: function(e) {
            return c(e, "required");
        },
        optional: function(e) {
            return !c(e, "required");
        },
        parent: function(e) {
            return !E.empty(e);
        },
        header: function(e) {
            var t = u(e);
            return "h1" === t || "h2" === t || "h3" === t || "h4" === t || "h5" === t || "h6" === t;
        },
        button: function(e) {
            var t = u(e);
            return "button" === t || "input" === t && "button" === d(e, "type");
        },
        input: function(e) {
            var t = u(e);
            return "input" === t || "textarea" === t || "select" === t || "button" === t;
        },
        text: function(e) {
            var t;
            return "input" === u(e) && (!(t = d(e, "type")) || "text" === t.toLowerCase());
        }
    };
    function b(e, t, n) {
        if (null === n) {
            if (e.length > 1 && "scope" !== t) throw new SyntaxError("pseudo-selector :" + t + " requires an argument");
        } else if (1 === e.length) throw new SyntaxError("pseudo-selector :" + t + " doesn't have any arguments");
    }
    var w = /^(?:(?:nth|last|first|only)-(?:child|of-type)|root|empty|(?:en|dis)abled|checked|not)$/;
    e.exports = {
        compile: function(e, t, n, r) {
            var i = t.name, o = t.data;
            if (n && n.strict && !w.test(i)) throw SyntaxError(":" + i + " isn't part of CSS3");
            if ("function" == typeof y[i]) return b(y[i], i, o), y[i](e, o, n, r);
            if ("function" == typeof E[i]) {
                var a = E[i];
                return b(a, i, o), e === _ ? a : function(t) {
                    return a(t, o) && e(t);
                };
            }
            throw new SyntaxError("unmatched pseudo-class :" + i);
        },
        filters: y,
        pseudos: E
    };
}
