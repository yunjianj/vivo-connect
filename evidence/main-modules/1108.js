// analysis/pretty/main.js:89318; webpack module 1108
function(e, t, n) {
    "use strict";
    e.exports = function(e, t) {
        var r = n(24), i = r.errorObj, o = r.isObject;
        var a = {}.hasOwnProperty;
        return function(n, s) {
            if (o(n)) {
                if (n instanceof e) return n;
                var l = function(e) {
                    try {
                        return function(e) {
                            return e.then;
                        }(e);
                    } catch (e) {
                        return i.e = e, i;
                    }
                }(n);
                if (l === i) {
                    s && s._pushContext();
                    var c = e.reject(l.e);
                    return s && s._popContext(), c;
                }
                if ("function" == typeof l) {
                    if (function(e) {
                        try {
                            return a.call(e, "_promise0");
                        } catch (e) {
                            return !1;
                        }
                    }(n)) {
                        c = new e(t);
                        return n._then(c._fulfill, c._reject, void 0, c, null), c;
                    }
                    return function(n, o, a) {
                        var s = new e(t), l = s;
                        a && a._pushContext();
                        s._captureStackTrace(), a && a._popContext();
                        var c = r.tryCatch(o).call(n, function(e) {
                            if (!s) return;
                            s._resolveCallback(e), s = null;
                        }, function(e) {
                            if (!s) return;
                            s._rejectCallback(e, !1, !0), s = null;
                        });
                        !1, s && c === i && (s._rejectCallback(c.e, !0, !0), s = null);
                        return l;
                    }(n, l, s);
                }
            }
            return n;
        };
    };
}
