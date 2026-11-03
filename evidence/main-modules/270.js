// analysis/pretty/main.js:31808; webpack module 270
function(e, t, n) {
    "use strict";
    var r = n(101).codes.ERR_STREAM_PREMATURE_CLOSE;
    function i() {}
    e.exports = function e(t, n, o) {
        if ("function" == typeof n) return e(t, null, n);
        n || (n = {}), o = function(e) {
            var t = !1;
            return function() {
                if (!t) {
                    t = !0;
                    for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++) r[i] = arguments[i];
                    e.apply(this, r);
                }
            };
        }(o || i);
        var a = n.readable || !1 !== n.readable && t.readable, s = n.writable || !1 !== n.writable && t.writable, l = function() {
            t.writable || u();
        }, c = t._writableState && t._writableState.finished, u = function() {
            s = !1, c = !0, a || o.call(t);
        }, d = t._readableState && t._readableState.endEmitted, h = function() {
            a = !1, d = !0, s || o.call(t);
        }, p = function(e) {
            o.call(t, e);
        }, f = function() {
            var e;
            return a && !d ? (t._readableState && t._readableState.ended || (e = new r), o.call(t, e)) : s && !c ? (t._writableState && t._writableState.ended || (e = new r), 
            o.call(t, e)) : void 0;
        }, _ = function() {
            t.req.on("finish", u);
        };
        return !function(e) {
            return e.setHeader && "function" == typeof e.abort;
        }(t) ? s && !t._writableState && (t.on("end", l), t.on("close", l)) : (t.on("complete", u), 
        t.on("abort", f), t.req ? _() : t.on("request", _)), t.on("end", h), t.on("finish", u), 
        !1 !== n.error && t.on("error", p), t.on("close", f), function() {
            t.removeListener("complete", u), t.removeListener("abort", f), t.removeListener("request", _), 
            t.req && t.req.removeListener("finish", u), t.removeListener("end", l), t.removeListener("close", l), 
            t.removeListener("finish", u), t.removeListener("end", h), t.removeListener("error", p), 
            t.removeListener("close", f);
        };
    };
}
