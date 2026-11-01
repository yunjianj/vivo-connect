// analysis/pretty/main.js:123702; webpack module 1636
function(e, t, n) {
    var r = n(82).isTag;
    function i(e, t, n, r) {
        for (var o, a = [], s = 0, l = t.length; s < l && !(e(t[s]) && (a.push(t[s]), --r <= 0)) && (o = t[s].children, 
        !(n && o && o.length > 0 && (o = i(e, o, n, r), a = a.concat(o), (r -= o.length) <= 0))); s++) ;
        return a;
    }
    e.exports = {
        filter: function(e, t, n, r) {
            Array.isArray(t) || (t = [ t ]);
            "number" == typeof r && isFinite(r) || (r = 1 / 0);
            return i(e, t, !1 !== n, r);
        },
        find: i,
        findOneChild: function(e, t) {
            for (var n = 0, r = t.length; n < r; n++) if (e(t[n])) return t[n];
            return null;
        },
        findOne: function e(t, n) {
            for (var i = null, o = 0, a = n.length; o < a && !i; o++) r(n[o]) && (t(n[o]) ? i = n[o] : n[o].children.length > 0 && (i = e(t, n[o].children)));
            return i;
        },
        existsOne: function e(t, n) {
            for (var i = 0, o = n.length; i < o; i++) if (r(n[i]) && (t(n[i]) || n[i].children.length > 0 && e(t, n[i].children))) return !0;
            return !1;
        },
        findAll: function(e, t) {
            var n = [], i = t.slice();
            for (;i.length; ) {
                var o = i.shift();
                r(o) && (o.children && o.children.length > 0 && i.unshift.apply(i, o.children), 
                e(o) && n.push(o));
            }
            return n;
        }
    };
}
