// analysis/pretty/main.js:85717; webpack module 1067
function(e, t, n) {
    var r = n(573);
    e.exports = function(e, t) {
        if (!e) return [];
        var n = null == (t = t || {}).max ? 1 / 0 : t.max;
        "{}" === e.substr(0, 2) && (e = "\\{\\}" + e.substr(2));
        return function e(t, n, i) {
            var o = [], s = r("{", "}", t);
            if (!s) return [ t ];
            var l = s.pre, u = s.post.length ? e(s.post, n, !1) : [ "" ];
            if (/\$$/.test(s.pre)) for (var _ = 0; _ < u.length && _ < n; _++) {
                var m = l + "{" + s.body + "}" + u[_];
                o.push(m);
            } else {
                var g, v, y = /^-?\d+\.\.-?\d+(?:\.\.-?\d+)?$/.test(s.body), E = /^[a-zA-Z]\.\.[a-zA-Z](?:\.\.-?\d+)?$/.test(s.body), b = y || E, w = s.body.indexOf(",") >= 0;
                if (!b && !w) return s.post.match(/,(?!,).*\}/) ? (t = s.pre + "{" + s.body + a + s.post, 
                e(t, n, !0)) : [ t ];
                if (b) g = s.body.split(/\.\./); else if (1 === (g = function e(t) {
                    if (!t) return [ "" ];
                    var n = [], i = r("{", "}", t);
                    if (!i) return t.split(",");
                    var o = i.pre, a = i.body, s = i.post, l = o.split(",");
                    l[l.length - 1] += "{" + a + "}";
                    var c = e(s);
                    s.length && (l[l.length - 1] += c.shift(), l.push.apply(l, c));
                    return n.push.apply(n, l), n;
                }(s.body)).length && 1 === (g = e(g[0], n, !1).map(d)).length) return u.map(function(e) {
                    return s.pre + g[0] + e;
                });
                if (b) {
                    var S = c(g[0]), T = c(g[1]), A = Math.max(g[0].length, g[1].length), O = 3 == g.length ? Math.max(Math.abs(c(g[2])), 1) : 1, C = p;
                    T < S && (O *= -1, C = f);
                    var N = g.some(h);
                    v = [];
                    for (var I = S; C(I, T); I += O) {
                        var R;
                        if (E) "\\" === (R = String.fromCharCode(I)) && (R = ""); else if (R = String(I), 
                        N) {
                            var D = A - R.length;
                            if (D > 0) {
                                var L = new Array(D + 1).join("0");
                                R = I < 0 ? "-" + L + R.slice(1) : L + R;
                            }
                        }
                        v.push(R);
                    }
                } else {
                    v = [];
                    for (var k = 0; k < g.length; k++) v.push.apply(v, e(g[k], n, !1));
                }
                for (k = 0; k < v.length; k++) for (_ = 0; _ < u.length && o.length < n; _++) {
                    m = l + v[k] + u[_];
                    (!i || b || m) && o.push(m);
                }
            }
            return o;
        }(function(e) {
            return e.split("\\\\").join(i).split("\\{").join(o).split("\\}").join(a).split("\\,").join(s).split("\\.").join(l);
        }(e), n, !0).map(u);
    };
    var i = "\0SLASH" + Math.random() + "\0", o = "\0OPEN" + Math.random() + "\0", a = "\0CLOSE" + Math.random() + "\0", s = "\0COMMA" + Math.random() + "\0", l = "\0PERIOD" + Math.random() + "\0";
    function c(e) {
        return parseInt(e, 10) == e ? parseInt(e, 10) : e.charCodeAt(0);
    }
    function u(e) {
        return e.split(i).join("\\").split(o).join("{").split(a).join("}").split(s).join(",").split(l).join(".");
    }
    function d(e) {
        return "{" + e + "}";
    }
    function h(e) {
        return /^-?0\d/.test(e);
    }
    function p(e, t) {
        return e <= t;
    }
    function f(e, t) {
        return e >= t;
    }
}
