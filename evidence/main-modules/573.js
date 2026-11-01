// analysis/pretty/main.js:54378; webpack module 573
function(e, t, n) {
    "use strict";
    function r(e, t, n) {
        e instanceof RegExp && (e = i(e, n)), t instanceof RegExp && (t = i(t, n));
        var r = o(e, t, n);
        return r && {
            start: r[0],
            end: r[1],
            pre: n.slice(0, r[0]),
            body: n.slice(r[0] + e.length, r[1]),
            post: n.slice(r[1] + t.length)
        };
    }
    function i(e, t) {
        var n = t.match(e);
        return n ? n[0] : null;
    }
    function o(e, t, n) {
        var r, i, o, a, s, l = n.indexOf(e), c = n.indexOf(t, l + 1), u = l;
        if (l >= 0 && c > 0) {
            if (e === t) return [ l, c ];
            for (r = [], o = n.length; u >= 0 && !s; ) u == l ? (r.push(u), l = n.indexOf(e, u + 1)) : 1 == r.length ? s = [ r.pop(), c ] : ((i = r.pop()) < o && (o = i, 
            a = c), c = n.indexOf(t, u + 1)), u = l < c && l >= 0 ? l : c;
            r.length && (s = [ o, a ]);
        }
        return s;
    }
    e.exports = r, r.range = o;
}
