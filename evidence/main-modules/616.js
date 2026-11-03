// analysis/pretty/main.js:57285; webpack module 616
function(e, t, n) {
    "use strict";
    var r = n(1138)("%Object.defineProperty%", !0), i = n(1162)(), o = n(212), a = n(286), s = i ? Symbol.toStringTag : null;
    e.exports = function(e, t) {
        var n = arguments.length > 2 && !!arguments[2] && arguments[2].force, i = arguments.length > 2 && !!arguments[2] && arguments[2].nonConfigurable;
        if (void 0 !== n && "boolean" != typeof n || void 0 !== i && "boolean" != typeof i) throw new a("if provided, the `overrideIfSet` and `nonConfigurable` options must be booleans");
        !s || !n && o(e, s) || (r ? r(e, s, {
            configurable: !i,
            enumerable: !1,
            value: t,
            writable: !1
        }) : e[s] = t);
    };
}
