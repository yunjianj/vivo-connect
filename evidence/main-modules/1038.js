// analysis/pretty/main.js:83076; webpack module 1038
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = c(n(426)), i = c(n(1039)), o = c(n(427)), a = n(122), s = c(n(1041)), l = c(n(272));
    function c(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    }
    t.default = e => (t, n, c) => {
        if (c = (0, r.default)(c), e <= 0) throw new RangeError("concurrency limit cannot be less than 1");
        if (!t) return c(null);
        if ((0, a.isAsyncGenerator)(t)) return (0, s.default)(t, e, n, c);
        if ((0, a.isAsyncIterable)(t)) return (0, s.default)(t[Symbol.asyncIterator](), e, n, c);
        var u = (0, i.default)(t), d = !1, h = !1, p = 0, f = !1;
        function _(e, t) {
            if (!h) if (p -= 1, e) d = !0, c(e); else if (!1 === e) d = !0, h = !0; else {
                if (t === l.default || d && p <= 0) return d = !0, c(null);
                f || m();
            }
        }
        function m() {
            for (f = !0; p < e && !d; ) {
                var t = u();
                if (null === t) return d = !0, void (p <= 0 && c(null));
                p += 1, n(t.value, t.key, (0, o.default)(_));
            }
            f = !1;
        }
        m();
    }, e.exports = t.default;
}
