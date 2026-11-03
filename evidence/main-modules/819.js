// analysis/pretty/main.js:74818; webpack module 819
function(e, t, n) {
    const r = n(5);
    function i(e) {
        return e.stack.split("\n").filter(function(e) {
            return e.indexOf(__filename) < 0;
        });
    }
    t.extendTrace = function(e, t, n) {
        const o = e[t];
        e[t] = function() {
            const a = new Error, s = e.constructor.name + "#" + t + "(" + Array.prototype.slice.call(arguments).map(function(e) {
                return r.inspect(e, !1, 0);
            }).join(", ") + ")";
            void 0 === n && (n = -1), n < 0 && (n += arguments.length);
            const l = arguments[n];
            return "function" == typeof arguments[n] && (arguments[n] = function() {
                const e = arguments[0];
                return e && e.stack && !e.__augmented && (e.stack = i(e).join("\n"), e.stack += "\n--\x3e in " + s, 
                e.stack += "\n" + i(a).slice(1).join("\n"), e.__augmented = !0), l.apply(this, arguments);
            }), o.apply(this, arguments);
        };
    };
}
