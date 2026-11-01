// analysis/pretty/main.js:87660; webpack module 1083
function(e, t, n) {
    var r = n(1084), i = n(573);
    e.exports = function(e, t) {
        if (!e) return [];
        var n = null == (t = t || {}).max ? 1 / 0 : t.max;
        "{}" === e.substr(0, 2) && (e = "\\{\\}" + e.substr(2));
        return function e(t, n, o) {
            var a = [], l = i("{", "}", t);
            if (!l || /\$$/.test(l.pre)) return [ t ];
            var c, d = /^-?\d+\.\.-?\d+(?:\.\.-?\d+)?$/.test(l.body), m = /^[a-zA-Z]\.\.[a-zA-Z](?:\.\.-?\d+)?$/.test(l.body), g = d || m, v = l.body.indexOf(",") >= 0;
            if (!g && !v) return l.post.match(/,(?!,).*\}/) ? (t = l.pre + "{" + l.body + s + l.post, 
            e(t, n, !0)) : [ t ];
            if (g) c = l.body.split(/\.\./); else {
                if (1 === (c = function e(t) {
                    if (!t) return [ "" ];
                    var n = [], r = i("{", "}", t);
                    if (!r) return t.split(",");
                    var o = r.pre, a = r.body, s = r.post, l = o.split(",");
                    l[l.length - 1] += "{" + a + "}";
                    var c = e(s);
                    s.length && (l[l.length - 1] += c.shift(), l.push.apply(l, c));
                    return n.push.apply(n, l), n;
                }(l.body)).length) if (1 === (c = e(c[0], n, !1).map(h)).length) return (b = l.post.length ? e(l.post, n, !1) : [ "" ]).map(function(e) {
                    return l.pre + c[0] + e;
                });
            }
            var y, E = l.pre, b = l.post.length ? e(l.post, n, !1) : [ "" ];
            if (g) {
                var w = u(c[0]), S = u(c[1]), T = Math.max(c[0].length, c[1].length), A = 3 == c.length ? Math.max(Math.abs(u(c[2])), 1) : 1, O = f;
                S < w && (A *= -1, O = _);
                var C = c.some(p);
                y = [];
                for (var N = w; O(N, S); N += A) {
                    var I;
                    if (m) "\\" === (I = String.fromCharCode(N)) && (I = ""); else if (I = String(N), 
                    C) {
                        var R = T - I.length;
                        if (R > 0) {
                            var D = new Array(R + 1).join("0");
                            I = N < 0 ? "-" + D + I.slice(1) : D + I;
                        }
                    }
                    y.push(I);
                }
            } else y = r(c, function(t) {
                return e(t, n, !1);
            });
            for (var L = 0; L < y.length; L++) for (var k = 0; k < b.length && a.length < n; k++) {
                var M = E + y[L] + b[k];
                (!o || g || M) && a.push(M);
            }
            return a;
        }(function(e) {
            return e.split("\\\\").join(o).split("\\{").join(a).split("\\}").join(s).split("\\,").join(l).split("\\.").join(c);
        }(e), n, !0).map(d);
    };
    var o = "\0SLASH" + Math.random() + "\0", a = "\0OPEN" + Math.random() + "\0", s = "\0CLOSE" + Math.random() + "\0", l = "\0COMMA" + Math.random() + "\0", c = "\0PERIOD" + Math.random() + "\0";
    function u(e) {
        return parseInt(e, 10) == e ? parseInt(e, 10) : e.charCodeAt(0);
    }
    function d(e) {
        return e.split(o).join("\\").split(a).join("{").split(s).join("}").split(l).join(",").split(c).join(".");
    }
    function h(e) {
        return "{" + e + "}";
    }
    function p(e) {
        return /^-?0\d/.test(e);
    }
    function f(e, t) {
        return e <= t;
    }
    function _(e, t) {
        return e >= t;
    }
}
