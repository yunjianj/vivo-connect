// analysis/pretty/main.js:94537; webpack module 1200
function(e, t, n) {
    "use strict";
    var r = n(638), i = Object.prototype.hasOwnProperty, o = {
        allowDots: !1,
        allowPrototypes: !1,
        arrayLimit: 20,
        decoder: r.decode,
        delimiter: "&",
        depth: 5,
        parameterLimit: 1e3,
        plainObjects: !1,
        strictNullHandling: !1
    }, a = function(e, t, n) {
        if (e) {
            var r = n.allowDots ? e.replace(/\.([^.[]+)/g, "[$1]") : e, o = /(\[[^[\]]*])/g, a = /(\[[^[\]]*])/.exec(r), s = a ? r.slice(0, a.index) : r, l = [];
            if (s) {
                if (!n.plainObjects && i.call(Object.prototype, s) && !n.allowPrototypes) return;
                l[l.length] = s;
            }
            for (var c = 0; null !== (a = o.exec(r)) && c < n.depth; ) {
                if (c += 1, !n.plainObjects && i.call(Object.prototype, a[1].slice(1, -1)) && !n.allowPrototypes) return;
                l[l.length] = a[1];
            }
            return a && (l[l.length] = "[" + r.slice(a.index) + "]"), function(e, t, n) {
                for (var r = t, i = e.length - 1; i >= 0; --i) {
                    var o, a = e[i];
                    if ("[]" === a && n.parseArrays) o = [].concat(r); else {
                        o = n.plainObjects ? Object.create(null) : {};
                        var s = "[" === a.charAt(0) && "]" === a.charAt(a.length - 1) ? a.slice(1, -1) : a, l = parseInt(s, 10);
                        n.parseArrays || "" !== s ? !isNaN(l) && a !== s && String(l) === s && l >= 0 && n.parseArrays && l <= n.arrayLimit ? (o = [])[l] = r : "__proto__" !== s && (o[s] = r) : o = {
                            0: r
                        };
                    }
                    r = o;
                }
                return r;
            }(l, t, n);
        }
    };
    e.exports = function(e, t) {
        var n = t ? r.assign({}, t) : {};
        if (null !== n.decoder && void 0 !== n.decoder && "function" != typeof n.decoder) throw new TypeError("Decoder has to be a function.");
        if (n.ignoreQueryPrefix = !0 === n.ignoreQueryPrefix, n.delimiter = "string" == typeof n.delimiter || r.isRegExp(n.delimiter) ? n.delimiter : o.delimiter, 
        n.depth = "number" == typeof n.depth ? n.depth : o.depth, n.arrayLimit = "number" == typeof n.arrayLimit ? n.arrayLimit : o.arrayLimit, 
        n.parseArrays = !1 !== n.parseArrays, n.decoder = "function" == typeof n.decoder ? n.decoder : o.decoder, 
        n.allowDots = "boolean" == typeof n.allowDots ? n.allowDots : o.allowDots, n.plainObjects = "boolean" == typeof n.plainObjects ? n.plainObjects : o.plainObjects, 
        n.allowPrototypes = "boolean" == typeof n.allowPrototypes ? n.allowPrototypes : o.allowPrototypes, 
        n.parameterLimit = "number" == typeof n.parameterLimit ? n.parameterLimit : o.parameterLimit, 
        n.strictNullHandling = "boolean" == typeof n.strictNullHandling ? n.strictNullHandling : o.strictNullHandling, 
        "" === e || null == e) return n.plainObjects ? Object.create(null) : {};
        for (var s = "string" == typeof e ? function(e, t) {
            for (var n = {}, r = t.ignoreQueryPrefix ? e.replace(/^\?/, "") : e, a = t.parameterLimit === 1 / 0 ? void 0 : t.parameterLimit, s = r.split(t.delimiter, a), l = 0; l < s.length; ++l) {
                var c, u, d = s[l], h = d.indexOf("]="), p = -1 === h ? d.indexOf("=") : h + 1;
                -1 === p ? (c = t.decoder(d, o.decoder), u = t.strictNullHandling ? null : "") : (c = t.decoder(d.slice(0, p), o.decoder), 
                u = t.decoder(d.slice(p + 1), o.decoder)), i.call(n, c) ? n[c] = [].concat(n[c]).concat(u) : n[c] = u;
            }
            return n;
        }(e, n) : e, l = n.plainObjects ? Object.create(null) : {}, c = Object.keys(s), u = 0; u < c.length; ++u) {
            var d = c[u], h = a(d, s[d], n);
            l = r.merge(l, h, n);
        }
        return r.compact(l);
    };
}
