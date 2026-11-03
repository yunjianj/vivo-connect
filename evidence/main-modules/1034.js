// analysis/pretty/main.js:82996; webpack module 1034
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = function(e) {
        if ((0, o.isAsync)(e)) return function(...t) {
            const n = t.pop();
            return s(e.apply(this, t), n);
        };
        return (0, r.default)(function(t, n) {
            var r;
            try {
                r = e.apply(this, t);
            } catch (e) {
                return n(e);
            }
            if (r && "function" == typeof r.then) return s(r, n);
            n(null, r);
        });
    };
    var r = a(n(1035)), i = a(n(1036)), o = n(122);
    function a(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    }
    function s(e, t) {
        return e.then(e => {
            l(t, null, e);
        }, e => {
            l(t, e && (e instanceof Error || e.message) ? e : new Error(e));
        });
    }
    function l(e, t, n) {
        try {
            e(t, n);
        } catch (e) {
            (0, i.default)(e => {
                throw e;
            }, e);
        }
    }
    e.exports = t.default;
}
