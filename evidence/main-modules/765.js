// analysis/pretty/main.js:70158; webpack module 765
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.findAll = t.existsOne = t.findOne = t.findOneChild = t.find = t.filter = void 0;
    var r = n(142);
    function i(e, t, n, o) {
        for (var a = [], s = 0, l = t; s < l.length; s++) {
            var c = l[s];
            if (e(c) && (a.push(c), --o <= 0)) break;
            if (n && (0, r.hasChildren)(c) && c.children.length > 0) {
                var u = i(e, c.children, n, o);
                if (a.push.apply(a, u), (o -= u.length) <= 0) break;
            }
        }
        return a;
    }
    t.filter = function(e, t, n, r) {
        return void 0 === n && (n = !0), void 0 === r && (r = 1 / 0), Array.isArray(t) || (t = [ t ]), 
        i(e, t, n, r);
    }, t.find = i, t.findOneChild = function(e, t) {
        return t.find(e);
    }, t.findOne = function e(t, n, i) {
        void 0 === i && (i = !0);
        for (var o = null, a = 0; a < n.length && !o; a++) {
            var s = n[a];
            (0, r.isTag)(s) && (t(s) ? o = s : i && s.children.length > 0 && (o = e(t, s.children)));
        }
        return o;
    }, t.existsOne = function e(t, n) {
        return n.some(function(n) {
            return (0, r.isTag)(n) && (t(n) || n.children.length > 0 && e(t, n.children));
        });
    }, t.findAll = function(e, t) {
        for (var n, i, o = [], a = t.filter(r.isTag); i = a.shift(); ) {
            var s = null === (n = i.children) || void 0 === n ? void 0 : n.filter(r.isTag);
            s && s.length > 0 && a.unshift.apply(a, s), e(i) && o.push(i);
        }
        return o;
    };
}
