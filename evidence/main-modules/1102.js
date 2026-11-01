// analysis/pretty/main.js:88789; webpack module 1102
function(e, t, n) {
    var r = n(280), i = function() {}, o = global.Bare ? queueMicrotask : process.nextTick.bind(process), a = function(e, t, n) {
        if ("function" == typeof t) return a(e, null, t);
        t || (t = {}), n = r(n || i);
        var s = e._writableState, l = e._readableState, c = t.readable || !1 !== t.readable && e.readable, u = t.writable || !1 !== t.writable && e.writable, d = !1, h = function() {
            e.writable || p();
        }, p = function() {
            u = !1, c || n.call(e);
        }, f = function() {
            c = !1, u || n.call(e);
        }, _ = function(t) {
            n.call(e, t ? new Error("exited with error code: " + t) : null);
        }, m = function(t) {
            n.call(e, t);
        }, g = function() {
            o(v);
        }, v = function() {
            if (!d) return (!c || l && l.ended && !l.destroyed) && (!u || s && s.ended && !s.destroyed) ? void 0 : n.call(e, new Error("premature close"));
        }, y = function() {
            e.req.on("finish", p);
        };
        return !function(e) {
            return e.setHeader && "function" == typeof e.abort;
        }(e) ? u && !s && (e.on("end", h), e.on("close", h)) : (e.on("complete", p), e.on("abort", g), 
        e.req ? y() : e.on("request", y)), function(e) {
            return e.stdio && Array.isArray(e.stdio) && 3 === e.stdio.length;
        }(e) && e.on("exit", _), e.on("end", f), e.on("finish", p), !1 !== t.error && e.on("error", m), 
        e.on("close", g), function() {
            d = !0, e.removeListener("complete", p), e.removeListener("abort", g), e.removeListener("request", y), 
            e.req && e.req.removeListener("finish", p), e.removeListener("end", h), e.removeListener("close", h), 
            e.removeListener("finish", p), e.removeListener("exit", _), e.removeListener("end", f), 
            e.removeListener("error", m), e.removeListener("close", g);
        };
    };
    e.exports = a;
}
