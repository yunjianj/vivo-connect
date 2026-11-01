// analysis/pretty/main.js:94475; webpack module 1199
function(e, t, n) {
    "use strict";
    var r = n(638), i = n(639), o = {
        brackets: function(e) {
            return e + "[]";
        },
        indices: function(e, t) {
            return e + "[" + t + "]";
        },
        repeat: function(e) {
            return e;
        }
    }, a = Array.isArray, s = Array.prototype.push, l = function(e, t) {
        s.apply(e, a(t) ? t : [ t ]);
    }, c = Date.prototype.toISOString, u = {
        delimiter: "&",
        encode: !0,
        encoder: r.encode,
        encodeValuesOnly: !1,
        serializeDate: function(e) {
            return c.call(e);
        },
        skipNulls: !1,
        strictNullHandling: !1
    }, d = function e(t, n, i, o, s, c, d, h, p, f, _, m) {
        var g = t;
        if ("function" == typeof d ? g = d(n, g) : g instanceof Date && (g = f(g)), null === g) {
            if (o) return c && !m ? c(n, u.encoder) : n;
            g = "";
        }
        if ("string" == typeof g || "number" == typeof g || "boolean" == typeof g || r.isBuffer(g)) return c ? [ _(m ? n : c(n, u.encoder)) + "=" + _(c(g, u.encoder)) ] : [ _(n) + "=" + _(String(g)) ];
        var v, y = [];
        if (void 0 === g) return y;
        if (a(d)) v = d; else {
            var E = Object.keys(g);
            v = h ? E.sort(h) : E;
        }
        for (var b = 0; b < v.length; ++b) {
            var w = v[b];
            s && null === g[w] || (a(g) ? l(y, e(g[w], i(n, w), i, o, s, c, d, h, p, f, _, m)) : l(y, e(g[w], n + (p ? "." + w : "[" + w + "]"), i, o, s, c, d, h, p, f, _, m)));
        }
        return y;
    };
    e.exports = function(e, t) {
        var n = e, s = t ? r.assign({}, t) : {};
        if (null !== s.encoder && void 0 !== s.encoder && "function" != typeof s.encoder) throw new TypeError("Encoder has to be a function.");
        var c = void 0 === s.delimiter ? u.delimiter : s.delimiter, h = "boolean" == typeof s.strictNullHandling ? s.strictNullHandling : u.strictNullHandling, p = "boolean" == typeof s.skipNulls ? s.skipNulls : u.skipNulls, f = "boolean" == typeof s.encode ? s.encode : u.encode, _ = "function" == typeof s.encoder ? s.encoder : u.encoder, m = "function" == typeof s.sort ? s.sort : null, g = void 0 !== s.allowDots && s.allowDots, v = "function" == typeof s.serializeDate ? s.serializeDate : u.serializeDate, y = "boolean" == typeof s.encodeValuesOnly ? s.encodeValuesOnly : u.encodeValuesOnly;
        if (void 0 === s.format) s.format = i.default; else if (!Object.prototype.hasOwnProperty.call(i.formatters, s.format)) throw new TypeError("Unknown format option provided.");
        var E, b, w = i.formatters[s.format];
        "function" == typeof s.filter ? n = (b = s.filter)("", n) : a(s.filter) && (E = b = s.filter);
        var S, T = [];
        if ("object" != typeof n || null === n) return "";
        S = s.arrayFormat in o ? s.arrayFormat : "indices" in s ? s.indices ? "indices" : "repeat" : "indices";
        var A = o[S];
        E || (E = Object.keys(n)), m && E.sort(m);
        for (var O = 0; O < E.length; ++O) {
            var C = E[O];
            p && null === n[C] || l(T, d(n[C], C, A, h, p, f ? _ : null, b, m, g, v, w, y));
        }
        var N = T.join(c), I = !0 === s.addQueryPrefix ? "?" : "";
        return N.length > 0 ? I + N : "";
    };
}
