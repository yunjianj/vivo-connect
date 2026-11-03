// analysis/pretty/main.js:25423; webpack module 192
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.regexpCode = t.getEsmExportName = t.getProperty = t.safeStringify = t.stringify = t.strConcat = t.addCodeArg = t.str = t._ = t.nil = t._Code = t.Name = t.IDENTIFIER = t._CodeOrName = void 0;
    class r {}
    t._CodeOrName = r, t.IDENTIFIER = /^[a-z$_][a-z$_0-9]*$/i;
    class i extends r {
        constructor(e) {
            if (super(), !t.IDENTIFIER.test(e)) throw new Error("CodeGen: name must be a valid identifier");
            this.str = e;
        }
        toString() {
            return this.str;
        }
        emptyStr() {
            return !1;
        }
        get names() {
            return {
                [this.str]: 1
            };
        }
    }
    t.Name = i;
    class o extends r {
        constructor(e) {
            super(), this._items = "string" == typeof e ? [ e ] : e;
        }
        toString() {
            return this.str;
        }
        emptyStr() {
            if (this._items.length > 1) return !1;
            const e = this._items[0];
            return "" === e || '""' === e;
        }
        get str() {
            var e;
            return null !== (e = this._str) && void 0 !== e ? e : this._str = this._items.reduce((e, t) => `${e}${t}`, "");
        }
        get names() {
            var e;
            return null !== (e = this._names) && void 0 !== e ? e : this._names = this._items.reduce((e, t) => (t instanceof i && (e[t.str] = (e[t.str] || 0) + 1), 
            e), {});
        }
    }
    function a(e, ...t) {
        const n = [ e[0] ];
        let r = 0;
        for (;r < t.length; ) c(n, t[r]), n.push(e[++r]);
        return new o(n);
    }
    t._Code = o, t.nil = new o(""), t._ = a;
    const s = new o("+");
    function l(e, ...t) {
        const n = [ d(e[0]) ];
        let r = 0;
        for (;r < t.length; ) n.push(s), c(n, t[r]), n.push(s, d(e[++r]));
        return function(e) {
            let t = 1;
            for (;t < e.length - 1; ) {
                if (e[t] === s) {
                    const n = u(e[t - 1], e[t + 1]);
                    if (void 0 !== n) {
                        e.splice(t - 1, 3, n);
                        continue;
                    }
                    e[t++] = "+";
                }
                t++;
            }
        }(n), new o(n);
    }
    function c(e, t) {
        var n;
        t instanceof o ? e.push(...t._items) : t instanceof i ? e.push(t) : e.push("number" == typeof (n = t) || "boolean" == typeof n || null === n ? n : d(Array.isArray(n) ? n.join(",") : n));
    }
    function u(e, t) {
        if ('""' === t) return e;
        if ('""' === e) return t;
        if ("string" == typeof e) {
            if (t instanceof i || '"' !== e[e.length - 1]) return;
            return "string" != typeof t ? `${e.slice(0, -1)}${t}"` : '"' === t[0] ? e.slice(0, -1) + t.slice(1) : void 0;
        }
        return "string" != typeof t || '"' !== t[0] || e instanceof i ? void 0 : `"${e}${t.slice(1)}`;
    }
    function d(e) {
        return JSON.stringify(e).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029");
    }
    t.str = l, t.addCodeArg = c, t.strConcat = function(e, t) {
        return t.emptyStr() ? e : e.emptyStr() ? t : l`${e}${t}`;
    }, t.stringify = function(e) {
        return new o(d(e));
    }, t.safeStringify = d, t.getProperty = function(e) {
        return "string" == typeof e && t.IDENTIFIER.test(e) ? new o("." + e) : a`[${e}]`;
    }, t.getEsmExportName = function(e) {
        if ("string" == typeof e && t.IDENTIFIER.test(e)) return new o("" + e);
        throw new Error(`CodeGen: invalid export name: ${e}, use explicit $id name mapping`);
    }, t.regexpCode = function(e) {
        return new o(e.toString());
    };
}
