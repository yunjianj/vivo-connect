// analysis/pretty/main.js:83251; webpack module 1045
function(e, t) {
    var n = [], r = [], i = function() {};
    function o(e) {
        return !~n.indexOf(e) && (n.push(e), !0);
    }
    function a(e) {
        i = e;
    }
    function s(e) {
        for (var t = [], r = 0; r < n.length; r++) if (n[r].async) t.push(n[r]); else if (n[r](e)) return !0;
        return !!t.length && new Promise(function(n) {
            Promise.all(t.map(function(t) {
                return t(e);
            })).then(function(e) {
                n(e.some(Boolean));
            });
        });
    }
    function l(e) {
        return !~r.indexOf(e) && (r.push(e), !0);
    }
    function c() {
        i.apply(i, arguments);
    }
    function u(e) {
        for (var t = 0; t < r.length; t++) e = r[t].apply(r[t], arguments);
        return e;
    }
    function d(e, t) {
        var n = Object.prototype.hasOwnProperty;
        for (var r in t) n.call(t, r) && (e[r] = t[r]);
        return e;
    }
    function h(e) {
        return e.enabled = !1, e.modify = l, e.set = a, e.use = o, d(function() {
            return !1;
        }, e);
    }
    function p(e) {
        return e.enabled = !0, e.modify = l, e.set = a, e.use = o, d(function() {
            var t = Array.prototype.slice.call(arguments, 0);
            return c.call(c, e, u(t, e)), !0;
        }, e);
    }
    e.exports = function(e) {
        return e.introduce = d, e.enabled = s, e.process = u, e.modify = l, e.write = c, 
        e.nope = h, e.yep = p, e.set = a, e.use = o, e;
    };
}
