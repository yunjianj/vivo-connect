// analysis/pretty/main.js:124477; webpack module 1659
function(e, t, n) {
    "use strict";
    e.exports = function(e, t) {
        var n = [];
        if ("" !== (e = function e(t, n, i) {
            var h, m, g, v, y = [], E = !1;
            function b() {
                var e = n.match(r)[0];
                return n = n.substr(e.length), p(e);
            }
            function w(e) {
                for (;f(n.charAt(e)); ) e++;
                n = n.substr(e);
            }
            function S(e) {
                for (var t = 0; "\\" === n.charAt(--e); ) t++;
                return 1 == (1 & t);
            }
            w(0);
            for (;"" !== n; ) if (f(m = n.charAt(0))) E = !0, w(1); else if (m in s) y.push({
                type: s[m]
            }), E = !1, w(1); else if ("," === m) {
                if (0 === y.length) throw new SyntaxError("empty sub-selector");
                t.push(y), y = [], E = !1, w(1);
            } else if (E && (y.length > 0 && y.push({
                type: "descendant"
            }), E = !1), "*" === m) n = n.substr(1), y.push({
                type: "universal"
            }); else if (m in l) n = n.substr(1), y.push({
                type: "attribute",
                name: l[m][0],
                action: l[m][1],
                value: b(),
                ignoreCase: !1
            }); else if ("[" === m) {
                if (n = n.substr(1), !(h = n.match(o))) throw new SyntaxError("Malformed attribute selector: " + n);
                n = n.substr(h[0].length), g = p(h[1]), i && ("lowerCaseAttributeNames" in i ? !i.lowerCaseAttributeNames : i.xmlMode) || (g = g.toLowerCase()), 
                y.push({
                    type: "attribute",
                    name: g,
                    action: a[h[2]],
                    value: p(h[4] || h[5] || ""),
                    ignoreCase: !!h[6]
                });
            } else if (":" === m) {
                if (":" === n.charAt(1)) {
                    n = n.substr(2), y.push({
                        type: "pseudo-element",
                        name: b().toLowerCase()
                    });
                    continue;
                }
                if (n = n.substr(1), g = b().toLowerCase(), h = null, "(" === n.charAt(0)) if (g in c) {
                    var T = (v = n.charAt(1)) in d;
                    if (n = n.substr(T + 1), n = e(h = [], n, i), T) {
                        if (n.charAt(0) !== v) throw new SyntaxError("unmatched quotes in :" + g);
                        n = n.substr(1);
                    }
                    if (")" !== n.charAt(0)) throw new SyntaxError("missing closing parenthesis in :" + g + " " + n);
                    n = n.substr(1);
                } else {
                    for (var A = 1, O = 1; O > 0 && A < n.length; A++) "(" !== n.charAt(A) || S(A) ? ")" !== n.charAt(A) || S(A) || O-- : O++;
                    if (O) throw new SyntaxError("parenthesis not matched");
                    h = n.substr(1, A - 2), n = n.substr(A), g in u && ((v = h.charAt(0)) === h.slice(-1) && v in d && (h = h.slice(1, -1)), 
                    h = p(h));
                }
                y.push({
                    type: "pseudo",
                    name: g,
                    data: h
                });
            } else {
                if (!r.test(n)) return y.length && "descendant" === y[y.length - 1].type && y.pop(), 
                _(t, y), n;
                g = b(), i && ("lowerCaseTags" in i ? !i.lowerCaseTags : i.xmlMode) || (g = g.toLowerCase()), 
                y.push({
                    type: "tag",
                    name: g
                });
            }
            return _(t, y), n;
        }(n, e + "", t))) throw new SyntaxError("Unmatched selector: " + e);
        return n;
    };
    var r = /^(?:\\.|[\w\-\u00b0-\uFFFF])+/, i = /\\([\da-f]{1,6}\s?|(\s)|.)/gi, o = /^\s*((?:\\.|[\w\u00b0-\uFFFF\-])+)\s*(?:(\S?)=\s*(?:(['"])([^]*?)\3|(#?(?:\\.|[\w\u00b0-\uFFFF\-])*)|)|)\s*(i)?\]/, a = {
        __proto__: null,
        undefined: "exists",
        "": "equals",
        "~": "element",
        "^": "start",
        $: "end",
        "*": "any",
        "!": "not",
        "|": "hyphen"
    }, s = {
        __proto__: null,
        ">": "child",
        "<": "parent",
        "~": "sibling",
        "+": "adjacent"
    }, l = {
        __proto__: null,
        "#": [ "id", "equals" ],
        ".": [ "class", "element" ]
    }, c = {
        __proto__: null,
        has: !0,
        not: !0,
        matches: !0
    }, u = {
        __proto__: null,
        contains: !0,
        icontains: !0
    }, d = {
        __proto__: null,
        '"': !0,
        "'": !0
    };
    function h(e, t, n) {
        var r = "0x" + t - 65536;
        return r != r || n ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320);
    }
    function p(e) {
        return e.replace(i, h);
    }
    function f(e) {
        return " " === e || "\n" === e || "\t" === e || "\f" === e || "\r" === e;
    }
    function _(e, t) {
        if (e.length > 0 && 0 === t.length) throw new SyntaxError("empty sub-selector");
        e.push(t);
    }
}
