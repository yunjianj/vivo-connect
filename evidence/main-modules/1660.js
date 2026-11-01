// analysis/pretty/main.js:124609; webpack module 1660
function(e, t, n) {
    var r = n(172), i = r.isTag, o = r.getParent, a = r.getChildren, s = r.getSiblings, l = r.getName;
    e.exports = {
        __proto__: null,
        attribute: n(784).compile,
        pseudo: n(370).compile,
        tag: function(e, t) {
            var n = t.name;
            return function(t) {
                return l(t) === n && e(t);
            };
        },
        descendant: function(e, t, n, r, i) {
            return function(t) {
                if (i && e(t)) return !0;
                for (var n = !1; !n && (t = o(t)); ) n = e(t);
                return n;
            };
        },
        parent: function(e, t, n) {
            if (n && n.strict) throw SyntaxError("Parent selector isn't part of CSS3");
            return function(e) {
                return a(e).some(r);
            };
            function r(t) {
                return i(t) && e(t);
            }
        },
        child: function(e) {
            return function(t) {
                var n = o(t);
                return !!n && e(n);
            };
        },
        sibling: function(e) {
            return function(t) {
                for (var n = s(t), r = 0; r < n.length; r++) if (i(n[r])) {
                    if (n[r] === t) break;
                    if (e(n[r])) return !0;
                }
                return !1;
            };
        },
        adjacent: function(e) {
            return function(t) {
                for (var n, r = s(t), o = 0; o < r.length; o++) if (i(r[o])) {
                    if (r[o] === t) break;
                    n = r[o];
                }
                return !!n && e(n);
            };
        },
        universal: function(e) {
            return e;
        }
    };
}
