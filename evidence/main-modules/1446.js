// analysis/pretty/main.js:107665; webpack module 1446
function(e, t, n) {
    n(5);
    e.exports = r;
    function r() {
        var e = l(arguments), t = o, n = 0;
        if (0 === e.length) throw new Error("at least one predicate and one consequent are required");
        1 === e.length ? n = 1 : e.length % 2 == 1 && (t = e.pop());
        var c = function() {
            if (0 !== n) throw new Error("missing at least one consequent, you forgot to call then() ?");
            var r = arguments, i = r[r.length - 1];
            if ("function" != typeof i) throw new Error("missing callback argument");
            var o = e.shift();
            if (!o) return t.apply(null, r);
            var a = e.shift(), s = l(r);
            function u(e, t) {
                return e ? i(e) : t ? a.apply(null, r) : void c.apply(null, r);
            }
            s.pop(), s.push(u), o.apply(null, s);
        };
        return c.then = function(t) {
            if (1 !== n) throw new Error("not expecting a then() call now");
            return n = 0, e.push(t), c;
        }, c.and = function(t) {
            var n = e.pop();
            return e.push(r(n).then(t).else(s)), c;
        }, c.and.not = function(e) {
            return c.and(i(e));
        }, c.or = function(t) {
            var n = e.pop();
            return e.push(r(n).then(a).elseIf(t).then(a).else(s)), c;
        }, c.or.not = function(e) {
            return c.or(i(e));
        }, c.else = function(e) {
            if (1 === n) throw new Error("only then() may be called after elseIf()");
            return t = e, c;
        }, c.elseif = c.elseIf = function(t) {
            if (1 === n) throw new Error("only then() may be called after elseIf()");
            return e.push(t), n = 1, c;
        }, c.elseif.not = function(e) {
            return c.elseIf(i(e));
        }, c;
    }
    function i(e) {
        return function() {
            var t = l(arguments), n = t.pop();
            if ("function" != typeof n) throw new Error("expected a callback but instead got " + typeof n);
            t.push(function(e, t) {
                n(e, !t);
            }), e.apply(null, t);
        };
    }
    function o() {
        var e = l(arguments), t = e.pop();
        if (e.unshift(null), "function" != typeof t) throw new Error("expected a callback function");
        setImmediate(function() {
            t.apply(null, e);
        });
    }
    function a() {
        var e = arguments[arguments.length - 1];
        if ("function" != typeof e) throw new Error("expected a callback function");
        e(null, !0);
    }
    function s() {
        var e = arguments[arguments.length - 1];
        if ("function" != typeof e) throw new Error("expected a callback function");
        e(null, !1);
    }
    function l(e) {
        return Array.prototype.slice.call(e, 0);
    }
    r.not = function(e) {
        if ("function" != typeof e) throw new Error("argument must be a predicate function");
        return r(i(e));
    };
}
