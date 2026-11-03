// analysis/pretty/main.js:57341; webpack module 623
function(e, t, n) {
    e.exports = function(e) {
        function t(e) {
            let n, i, o, a = null;
            function s(...e) {
                if (!s.enabled) return;
                const r = s, i = Number(new Date), o = i - (n || i);
                r.diff = o, r.prev = n, r.curr = i, n = i, e[0] = t.coerce(e[0]), "string" != typeof e[0] && e.unshift("%O");
                let a = 0;
                e[0] = e[0].replace(/%([a-zA-Z%])/g, (n, i) => {
                    if ("%%" === n) return "%";
                    a++;
                    const o = t.formatters[i];
                    if ("function" == typeof o) {
                        const t = e[a];
                        n = o.call(r, t), e.splice(a, 1), a--;
                    }
                    return n;
                }), t.formatArgs.call(r, e);
                (r.log || t.log).apply(r, e);
            }
            return s.namespace = e, s.useColors = t.useColors(), s.color = t.selectColor(e), 
            s.extend = r, s.destroy = t.destroy, Object.defineProperty(s, "enabled", {
                enumerable: !0,
                configurable: !1,
                get: () => null !== a ? a : (i !== t.namespaces && (i = t.namespaces, o = t.enabled(e)), 
                o),
                set: e => {
                    a = e;
                }
            }), "function" == typeof t.init && t.init(s), s;
        }
        function r(e, n) {
            const r = t(this.namespace + (void 0 === n ? ":" : n) + e);
            return r.log = this.log, r;
        }
        function i(e, t) {
            let n = 0, r = 0, i = -1, o = 0;
            for (;n < e.length; ) if (r < t.length && (t[r] === e[n] || "*" === t[r])) "*" === t[r] ? (i = r, 
            o = n, r++) : (n++, r++); else {
                if (-1 === i) return !1;
                r = i + 1, o++, n = o;
            }
            for (;r < t.length && "*" === t[r]; ) r++;
            return r === t.length;
        }
        return t.debug = t, t.default = t, t.coerce = function(e) {
            if (e instanceof Error) return e.stack || e.message;
            return e;
        }, t.disable = function() {
            const e = [ ...t.names, ...t.skips.map(e => "-" + e) ].join(",");
            return t.enable(""), e;
        }, t.enable = function(e) {
            t.save(e), t.namespaces = e, t.names = [], t.skips = [];
            const n = ("string" == typeof e ? e : "").trim().replace(/\s+/g, ",").split(",").filter(Boolean);
            for (const e of n) "-" === e[0] ? t.skips.push(e.slice(1)) : t.names.push(e);
        }, t.enabled = function(e) {
            for (const n of t.skips) if (i(e, n)) return !1;
            for (const n of t.names) if (i(e, n)) return !0;
            return !1;
        }, t.humanize = n(416), t.destroy = function() {
            console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
        }, Object.keys(e).forEach(n => {
            t[n] = e[n];
        }), t.names = [], t.skips = [], t.formatters = {}, t.selectColor = function(e) {
            let n = 0;
            for (let t = 0; t < e.length; t++) n = (n << 5) - n + e.charCodeAt(t), n |= 0;
            return t.colors[Math.abs(n) % t.colors.length];
        }, t.enable(t.load()), t;
    };
}
