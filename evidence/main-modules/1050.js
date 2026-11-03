// analysis/pretty/main.js:83615; webpack module 1050
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = u(n(271)), i = u(n(272)), o = u(n(425)), a = u(n(426)), s = u(n(427)), l = u(n(122)), c = u(n(145));
    function u(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    }
    function d(e, t, n) {
        n = (0, a.default)(n);
        var r = 0, o = 0, {length: l} = e, c = !1;
        function u(e, t) {
            !1 === e && (c = !0), !0 !== c && (e ? n(e) : ++o !== l && t !== i.default || n(null));
        }
        for (0 === l && n(null); r < l; r++) t(e[r], r, (0, s.default)(u));
    }
    function h(e, t, n) {
        return (0, o.default)(e, 1 / 0, t, n);
    }
    t.default = (0, c.default)(function(e, t, n) {
        return ((0, r.default)(e) ? d : h)(e, (0, l.default)(t), n);
    }, 3), e.exports = t.default;
}
