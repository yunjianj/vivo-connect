// analysis/pretty/main.js:123161; webpack module 1613
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.uniqueSort = t.compareDocumentPosition = t.removeSubsets = void 0;
    var r = n(142);
    function i(e, t) {
        var n = [], i = [];
        if (e === t) return 0;
        for (var o = (0, r.hasChildren)(e) ? e : e.parent; o; ) n.unshift(o), o = o.parent;
        for (o = (0, r.hasChildren)(t) ? t : t.parent; o; ) i.unshift(o), o = o.parent;
        for (var a = Math.min(n.length, i.length), s = 0; s < a && n[s] === i[s]; ) s++;
        if (0 === s) return 1;
        var l = n[s - 1], c = l.children, u = n[s], d = i[s];
        return c.indexOf(u) > c.indexOf(d) ? l === t ? 20 : 4 : l === e ? 10 : 2;
    }
    t.removeSubsets = function(e) {
        for (var t = e.length; --t >= 0; ) {
            var n = e[t];
            if (t > 0 && e.lastIndexOf(n, t - 1) >= 0) e.splice(t, 1); else for (var r = n.parent; r; r = r.parent) if (e.includes(r)) {
                e.splice(t, 1);
                break;
            }
        }
        return e;
    }, t.compareDocumentPosition = i, t.uniqueSort = function(e) {
        return (e = e.filter(function(e, t, n) {
            return !n.includes(e, t + 1);
        })).sort(function(e, t) {
            var n = i(e, t);
            return 2 & n ? -1 : 4 & n ? 1 : 0;
        }), e;
    };
}
