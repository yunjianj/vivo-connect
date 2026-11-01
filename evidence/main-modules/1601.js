// analysis/pretty/main.js:122687; webpack module 1601
function(e, t, n) {
    var r = n(752);
    function i(e) {
        var t = function() {
            for (var e = {}, t = Object.keys(r), n = t.length, i = 0; i < n; i++) e[t[i]] = {
                distance: -1,
                parent: null
            };
            return e;
        }(), n = [ e ];
        for (t[e].distance = 0; n.length; ) for (var i = n.pop(), o = Object.keys(r[i]), a = o.length, s = 0; s < a; s++) {
            var l = o[s], c = t[l];
            -1 === c.distance && (c.distance = t[i].distance + 1, c.parent = i, n.unshift(l));
        }
        return t;
    }
    function o(e, t) {
        return function(n) {
            return t(e(n));
        };
    }
    function a(e, t) {
        for (var n = [ t[e].parent, e ], i = r[t[e].parent][e], a = t[e].parent; t[a].parent; ) n.unshift(t[a].parent), 
        i = o(r[t[a].parent][a], i), a = t[a].parent;
        return i.conversion = n, i;
    }
    e.exports = function(e) {
        for (var t = i(e), n = {}, r = Object.keys(t), o = r.length, s = 0; s < o; s++) {
            var l = r[s];
            null !== t[l].parent && (n[l] = a(l, t));
        }
        return n;
    };
}
