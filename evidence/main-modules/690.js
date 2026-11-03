// analysis/pretty/main.js:61736; webpack module 690
function(e, t, n) {
    var r;
    function i(e) {
        function n() {
            if (n.enabled) {
                var e = n, i = +new Date, o = i - (r || i);
                e.diff = o, e.prev = r, e.curr = i, r = i;
                for (var a = new Array(arguments.length), s = 0; s < a.length; s++) a[s] = arguments[s];
                a[0] = t.coerce(a[0]), "string" != typeof a[0] && a.unshift("%O");
                var l = 0;
                a[0] = a[0].replace(/%([a-zA-Z%])/g, function(n, r) {
                    if ("%%" === n) return n;
                    l++;
                    var i = t.formatters[r];
                    if ("function" == typeof i) {
                        var o = a[l];
                        n = i.call(e, o), a.splice(l, 1), l--;
                    }
                    return n;
                }), t.formatArgs.call(e, a);
                var c = n.log || t.log || console.log.bind(console);
                c.apply(e, a);
            }
        }
        return n.namespace = e, n.enabled = t.enabled(e), n.useColors = t.useColors(), n.color = function(e) {
            var n, r = 0;
            for (n in e) r = (r << 5) - r + e.charCodeAt(n), r |= 0;
            return t.colors[Math.abs(r) % t.colors.length];
        }(e), "function" == typeof t.init && t.init(n), n;
    }
    (t = e.exports = i.debug = i.default = i).coerce = function(e) {
        return e instanceof Error ? e.stack || e.message : e;
    }, t.disable = function() {
        t.enable("");
    }, t.enable = function(e) {
        t.save(e), t.names = [], t.skips = [];
        for (var n = ("string" == typeof e ? e : "").split(/[\s,]+/), r = n.length, i = 0; i < r; i++) n[i] && ("-" === (e = n[i].replace(/\*/g, ".*?"))[0] ? t.skips.push(new RegExp("^" + e.substr(1) + "$")) : t.names.push(new RegExp("^" + e + "$")));
    }, t.enabled = function(e) {
        var n, r;
        for (n = 0, r = t.skips.length; n < r; n++) if (t.skips[n].test(e)) return !1;
        for (n = 0, r = t.names.length; n < r; n++) if (t.names[n].test(e)) return !0;
        return !1;
    }, t.humanize = n(1400), t.names = [], t.skips = [], t.formatters = {};
}
