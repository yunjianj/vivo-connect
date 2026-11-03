// analysis/pretty/main.js:123800; webpack module 1638
function(e, t) {
    t.removeSubsets = function(e) {
        for (var t, n, r, i = e.length; --i > -1; ) {
            for (t = n = e[i], e[i] = null, r = !0; n; ) {
                if (e.indexOf(n) > -1) {
                    r = !1, e.splice(i, 1);
                    break;
                }
                n = n.parent;
            }
            r && (e[i] = t);
        }
        return e;
    };
    var n = 1, r = 2, i = 4, o = 8, a = 16, s = t.compareDocumentPosition = function(e, t) {
        var s, l, c, u, d, h, p = [], f = [];
        if (e === t) return 0;
        for (s = e; s; ) p.unshift(s), s = s.parent;
        for (s = t; s; ) f.unshift(s), s = s.parent;
        for (h = 0; p[h] === f[h]; ) h++;
        return 0 === h ? n : (c = (l = p[h - 1]).children, u = p[h], d = f[h], c.indexOf(u) > c.indexOf(d) ? l === t ? i | a : i : l === e ? r | o : r);
    };
    t.uniqueSort = function(e) {
        var t, n, o = e.length;
        for (e = e.slice(); --o > -1; ) t = e[o], (n = e.indexOf(t)) > -1 && n < o && e.splice(o, 1);
        return e.sort(function(e, t) {
            var n = s(e, t);
            return n & r ? -1 : n & i ? 1 : 0;
        }), e;
    };
}
