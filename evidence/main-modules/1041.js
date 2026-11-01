// analysis/pretty/main.js:83156; webpack module 1041
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = function(e, t, n, r) {
        let i = !1, a = !1, s = !1, l = 0, c = 0;
        function u() {
            l >= t || s || i || (s = !0, e.next().then(({value: e, done: t}) => {
                if (!a && !i) {
                    if (s = !1, t) return i = !0, void (l <= 0 && r(null));
                    l++, n(e, c, d), c++, u();
                }
            }).catch(h));
        }
        function d(e, t) {
            if (l -= 1, !a) return e ? h(e) : !1 === e ? (i = !0, void (a = !0)) : t === o.default || i && l <= 0 ? (i = !0, 
            r(null)) : void u();
        }
        function h(e) {
            a || (s = !1, i = !0, r(e));
        }
        u();
    };
    var r, i = n(272), o = (r = i) && r.__esModule ? r : {
        default: r
    };
    e.exports = t.default;
}
