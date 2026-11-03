// analysis/pretty/main.js:83194; webpack module 1043
function(e, t, n) {
    "use strict";
    var r;
    var i = n(101).codes, o = i.ERR_MISSING_ARGS, a = i.ERR_STREAM_DESTROYED;
    function s(e) {
        if (e) throw e;
    }
    function l(e, t, i, o) {
        o = function(e) {
            var t = !1;
            return function() {
                t || (t = !0, e.apply(void 0, arguments));
            };
        }(o);
        var s = !1;
        e.on("close", function() {
            s = !0;
        }), void 0 === r && (r = n(270)), r(e, {
            readable: t,
            writable: i
        }, function(e) {
            if (e) return o(e);
            s = !0, o();
        });
        var l = !1;
        return function(t) {
            if (!s && !l) return l = !0, function(e) {
                return e.setHeader && "function" == typeof e.abort;
            }(e) ? e.abort() : "function" == typeof e.destroy ? e.destroy() : void o(t || new a("pipe"));
        };
    }
    function c(e) {
        e();
    }
    function u(e, t) {
        return e.pipe(t);
    }
    function d(e) {
        return e.length ? "function" != typeof e[e.length - 1] ? s : e.pop() : s;
    }
    e.exports = function() {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
        var r, i = d(t);
        if (Array.isArray(t[0]) && (t = t[0]), t.length < 2) throw new o("streams");
        var a = t.map(function(e, n) {
            var o = n < t.length - 1;
            return l(e, o, n > 0, function(e) {
                r || (r = e), e && a.forEach(c), o || (a.forEach(c), i(r));
            });
        });
        return t.reduce(u);
    };
}
