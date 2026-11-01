// analysis/pretty/main.js:57122; webpack module 608
function(e, t, n) {
    "use strict";
    var r = n(24), i = r.maybeWrapAsError, o = n(88).OperationalError, a = n(102);
    var s = /^(?:name|message|stack|cause)$/;
    function l(e) {
        var t;
        if (function(e) {
            return e instanceof Error && a.getPrototypeOf(e) === Error.prototype;
        }(e)) {
            (t = new o(e)).name = e.name, t.message = e.message, t.stack = e.stack;
            for (var n = a.keys(e), i = 0; i < n.length; ++i) {
                var l = n[i];
                s.test(l) || (t[l] = e[l]);
            }
            return t;
        }
        return r.markAsOriginatingFromRejection(e), e;
    }
    e.exports = function(e, t) {
        return function(n, r) {
            if (null !== e) {
                if (n) {
                    var o = l(i(n));
                    e._attachExtraTrace(o), e._reject(o);
                } else if (t) {
                    for (var a = arguments.length, s = new Array(Math.max(a - 1, 0)), c = 1; c < a; ++c) s[c - 1] = arguments[c];
                    e._fulfill(s);
                } else e._fulfill(r);
                e = null;
            }
        };
    };
}
