// analysis/pretty/main.js:71162; webpack module 783
function(e, t, n) {
    "use strict";
    e.exports = m;
    var r = n(370), i = n(172), o = i.findOne, a = i.findAll, s = i.getChildren, l = i.removeSubsets, c = n(173).falseFunc, u = n(1658), d = u.compileUnsafe, h = u.compileToken;
    function p(e) {
        return function(t, n, r) {
            return "function" != typeof t && (t = d(t, r, n)), n = Array.isArray(n) ? l(n) : s(n), 
            e(t, n);
        };
    }
    var f = p(function(e, t) {
        return e !== c && t && 0 !== t.length ? a(e, t) : [];
    }), _ = p(function(e, t) {
        return e !== c && t && 0 !== t.length ? o(e, t) : null;
    });
    function m(e, t, n) {
        return f(e, t, n);
    }
    m.compile = u, m.filters = r.filters, m.pseudos = r.pseudos, m.selectAll = f, m.selectOne = _, 
    m.is = function(e, t, n) {
        return ("function" == typeof t ? t : u(t, n))(e);
    }, m.parse = u, m.iterate = f, m._compileUnsafe = d, m._compileToken = h;
}
