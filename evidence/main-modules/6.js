// analysis/pretty/main.js:2353; webpack module 6
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    const r = n(0).__importDefault(n(182));
    class i {
        constructor() {
            process.env.IS_WEB ? this.storage = localStorage : this.storage = this.initElectronStore();
        }
        initElectronStore() {
            var e;
            const t = n(252);
            try {
                return new t;
            } catch (r) {
                if (r instanceof SyntaxError || (null === (e = null == r ? void 0 : r.message) || void 0 === e ? void 0 : e.includes("JSON"))) {
                    const e = n(1), {app: r} = n(2), i = n(4), o = e.join(r.getPath("userData"), "config.json");
                    try {
                        i.unlinkSync(o), console.warn("[storage] corrupted config file deleted: " + o);
                    } catch (e) {}
                    return new t;
                }
                throw r;
            }
        }
        static getInstance() {
            return this.instance || (this.instance = new i), this.instance;
        }
        getItem(e) {
            var t;
            if (process.env.IS_WEB) try {
                const t = JSON.parse(this.storage.getItem(e));
                return "userInfo" == e ? function e(t) {
                    let n = {};
                    if ("string" == typeof t) return r.default.Decrypt(t);
                    for (const r in t) n[r] = e(t[r]);
                    return n;
                }(t) : t;
            } catch (e) {
                return void console.error("参数异常:" + e);
            }
            try {
                return this.storage.get(e);
            } catch (n) {
                return this.checkAndRepairConfig(), void (null === (t = null === window || void 0 === window ? void 0 : window._log) || void 0 === t || t.error(`[framework][storage][getItem] error : ${n.message || n}, key: ${e}`));
            }
        }
        setItem(e, t) {
            var n;
            if (void 0 !== t) if (process.env.IS_WEB) try {
                const n = "userInfo" == e ? function e(t) {
                    let n = {};
                    if ("string" == typeof t || "number" == typeof t || "boolean" == typeof t) return r.default.Encrypt(t.toString());
                    for (const r in t) n[r] = e(t[r]);
                    return n;
                }(t) : t;
                this.storage.setItem(e, JSON.stringify(n));
            } catch (e) {
                console.error(e);
            } else try {
                this.storage.set(e, t);
            } catch (r) {
                console.error(r), null === (n = null === window || void 0 === window ? void 0 : window._log) || void 0 === n || n.error(`[framework][storage][setItem] error : ${r.message || r}, key: ${e}, value: ${t} `), 
                this.checkAndRepairConfig();
            }
        }
        removeItem(e) {
            if (process.env.IS_WEB) this.storage.removeItem(e); else try {
                this.storage.has(e) && this.storage.delete(e);
            } catch (e) {
                throw this.checkAndRepairConfig(), e;
            }
        }
        has(e) {
            return process.env.IS_WEB ? () => {} : this.storage.has(e);
        }
        clear() {
            this.storage.clear();
        }
        checkAndRepairConfig() {
            if (!process.env.IS_WEB) try {
                const e = n(1), {app: t} = n(2), r = n(4), i = n(252), a = e.join(t.getPath("userData"), "config.json");
                if (!r.existsSync(a)) return;
                const s = r.readFileSync(a, "utf-8");
                try {
                    return void JSON.parse(s);
                } catch (e) {}
                const l = function(e) {
                    if (!e || "string" != typeof e) return null;
                    let t = 65279 === e.charCodeAt(0) ? e.slice(1) : e;
                    if (t = t.trim(), !t) return null;
                    try {
                        const e = JSON.parse(t);
                        if (e && "object" == typeof e && !Array.isArray(e)) return e;
                    } catch (e) {}
                    try {
                        const e = JSON.parse(t + "}");
                        if (e && "object" == typeof e && !Array.isArray(e)) return e;
                    } catch (e) {}
                    const n = function(e) {
                        const t = e.indexOf("{");
                        if (-1 === t) {
                            try {
                                const t = JSON.parse("{" + e + "}");
                                if (t && "object" == typeof t && !Array.isArray(t)) return t;
                            } catch (e) {}
                            return null;
                        }
                        let n = !1, r = !1, i = 0, o = -1;
                        for (let a = t; a < e.length; a++) {
                            const s = e[a];
                            if (n) r ? r = !1 : "\\" === s ? r = !0 : '"' === s && (n = !1); else if ('"' === s) n = !0; else if ("{" === s || "[" === s) i++; else if ("}" === s || "]" === s) {
                                if (i--, 0 === i) {
                                    const n = e.substring(t, a + 1);
                                    try {
                                        const e = JSON.parse(n);
                                        if (e && "object" == typeof e && !Array.isArray(e)) return e;
                                    } catch (e) {}
                                }
                            } else "," === s && 1 === i && (o = a);
                        }
                        if (o > t) {
                            const t = e.substring(0, o) + "}";
                            try {
                                const e = JSON.parse(t);
                                if (e && "object" == typeof e && !Array.isArray(e)) return e;
                            } catch (e) {}
                        }
                        return null;
                    }(t);
                    if (n) return n;
                    const r = function(e) {
                        const t = {}, n = e.indexOf("{");
                        if (-1 === n) return null;
                        let r = n + 1;
                        const i = e.length;
                        for (;r < i; ) {
                            for (;r < i && /[\s,]/.test(e[r]); ) r++;
                            if (r >= i || '"' !== e[r]) {
                                r++;
                                continue;
                            }
                            r++;
                            let n = "", a = !1;
                            for (;r < i; ) {
                                const t = e[r];
                                if (a) n += "\\" + t, a = !1; else if ("\\" === t) a = !0; else {
                                    if ('"' === t) {
                                        r++;
                                        break;
                                    }
                                    n += t;
                                }
                                r++;
                            }
                            for (;r < i && /[\s:]/.test(e[r]); ) r++;
                            if (r >= i) break;
                            const s = o(e, r);
                            if (-1 !== s) {
                                try {
                                    const i = JSON.parse('"' + n + '"'), o = JSON.parse(e.substring(r, s));
                                    t[i] = o;
                                } catch (e) {}
                                r = s;
                            } else r++;
                        }
                        return Object.keys(t).length > 0 ? t : null;
                    }(t);
                    return r || null;
                }(s);
                if (l && Object.keys(l).length > 0) r.writeFileSync(a, JSON.stringify(l, null, 2), "utf-8"), 
                console.warn(`[storage] config.json repaired at runtime, retained ${Object.keys(l).length} keys`); else {
                    try {
                        r.unlinkSync(a);
                    } catch (e) {}
                    console.warn("[storage] config.json unrecoverable at runtime, deleted: " + a);
                }
                this.storage = new i;
            } catch (e) {
                console.error("[storage] checkAndRepairConfig error: " + e);
            }
        }
    }
    function o(e, t) {
        const n = e.length, r = e[t];
        if ('"' === r) {
            let r = t + 1, i = !1;
            for (;r < n; ) {
                const t = e[r];
                if (i) i = !1; else if ("\\" === t) i = !0; else if ('"' === t) return r + 1;
                r++;
            }
            return -1;
        }
        if ("{" === r || "[" === r) {
            const i = r, o = "{" === r ? "}" : "]";
            let a = 1, s = !1, l = !1, c = t + 1;
            for (;c < n; ) {
                const t = e[c];
                if (s) l ? l = !1 : "\\" === t ? l = !0 : '"' === t && (s = !1); else if ('"' === t) s = !0; else if (t === i) a++; else if (t === o && (a--, 
                0 === a)) return c + 1;
                c++;
            }
            return -1;
        }
        {
            let r = t;
            for (;r < n && !" \t\n\r,}]".includes(e[r]); ) r++;
            return r > t ? r : -1;
        }
    }
    t.default = i.getInstance();
}
