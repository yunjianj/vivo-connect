// analysis/pretty/main.js:76106; webpack module 845
function(e, t, n) {
    "use strict";
    (function(e) {
        var r, i, o, a, s, l, c = this && this.__classPrivateFieldSet || function(e, t, n, r, i) {
            if ("m" === r) throw new TypeError("Private method is not writable");
            if ("a" === r && !i) throw new TypeError("Private accessor was defined without a setter");
            if ("function" == typeof t ? e !== t || !i : !t.has(e)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
            return "a" === r ? i.call(e, n) : i ? i.value = n : t.set(e, n), n;
        }, u = this && this.__classPrivateFieldGet || function(e, t, n, r) {
            if ("a" === n && !r) throw new TypeError("Private accessor was defined without a getter");
            if ("function" == typeof t ? e !== t || !r : !t.has(e)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
            return "m" === n ? r : "a" === n ? r.call(e) : r ? r.value : t.get(e);
        };
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        const d = n(5), h = n(4), p = n(1), f = n(7), _ = n(44), m = n(12), g = n(846), v = n(848), y = n(855), E = n(856), b = n(864), w = n(910), S = n(958), T = n(960), A = n(985), O = () => Object.create(null);
        let C = "";
        try {
            delete n.c[__filename], C = p.dirname(null !== (i = null === (r = e.parent) || void 0 === r ? void 0 : r.filename) && void 0 !== i ? i : ".");
        } catch (e) {}
        const N = "__internal__.migrations.version";
        class I {
            constructor(e = {}) {
                var t;
                o.set(this, void 0), a.set(this, void 0), s.set(this, void 0), l.set(this, {}), 
                this._deserialize = e => JSON.parse(e), this._serialize = e => JSON.stringify(e, void 0, "\t");
                const n = {
                    configName: "config",
                    fileExtension: "json",
                    projectSuffix: "nodejs",
                    clearInvalidConfig: !1,
                    accessPropertiesByDotNotation: !0,
                    configFileMode: 438,
                    ...e
                }, r = A(() => {
                    const e = v.sync({
                        cwd: C
                    }), t = e && JSON.parse(h.readFileSync(e, "utf8"));
                    return null != t ? t : {};
                });
                if (!n.cwd) {
                    if (n.projectName || (n.projectName = r().name), !n.projectName) throw new Error("Project name could not be inferred. Please specify the `projectName` option.");
                    n.cwd = y(n.projectName, {
                        suffix: n.projectSuffix
                    }).config;
                }
                if (c(this, s, n, "f"), n.schema) {
                    if ("object" != typeof n.schema) throw new TypeError("The `schema` option must be an object.");
                    const e = new b.default({
                        allErrors: !0,
                        useDefaults: !0
                    });
                    (0, w.default)(e);
                    const t = {
                        type: "object",
                        properties: n.schema
                    };
                    c(this, o, e.compile(t), "f");
                    for (const [e, t] of Object.entries(n.schema)) (null == t ? void 0 : t.default) && (u(this, l, "f")[e] = t.default);
                }
                n.defaults && c(this, l, {
                    ...u(this, l, "f"),
                    ...n.defaults
                }, "f"), n.serialize && (this._serialize = n.serialize), n.deserialize && (this._deserialize = n.deserialize), 
                this.events = new m.EventEmitter, c(this, a, n.encryptionKey, "f");
                const i = n.fileExtension ? "." + n.fileExtension : "";
                this.path = p.resolve(n.cwd, `${null !== (t = n.configName) && void 0 !== t ? t : "config"}${i}`);
                const d = this.store, f = Object.assign(O(), n.defaults, d);
                this._validate(f);
                try {
                    _.deepEqual(d, f);
                } catch (e) {
                    this.store = f;
                }
                if (n.watch && this._watch(), n.migrations) {
                    if (n.projectVersion || (n.projectVersion = r().version), !n.projectVersion) throw new Error("Project version could not be inferred. Please specify the `projectVersion` option.");
                    this._migrate(n.migrations, n.projectVersion, n.beforeEachMigration);
                }
            }
            get(e, t) {
                if (u(this, s, "f").accessPropertiesByDotNotation) return this._get(e, t);
                const {store: n} = this;
                return e in n ? n[e] : t;
            }
            set(e, t) {
                if ("string" != typeof e && "object" != typeof e) throw new TypeError("Expected `key` to be of type `string` or `object`, got " + typeof e);
                if ("object" != typeof e && void 0 === t) throw new TypeError("Use `delete()` to clear values");
                if (this._containsReservedKey(e)) throw new TypeError("Please don't use the __internal__ key, as it's used to manage this module internal operations.");
                const {store: n} = this, r = (e, t) => {
                    ((e, t) => {
                        const n = typeof t;
                        if (new Set([ "undefined", "symbol", "function" ]).has(n)) throw new TypeError(`Setting a value of type \`${n}\` for key \`${e}\` is not allowed as it's not supported by JSON`);
                    })(e, t), u(this, s, "f").accessPropertiesByDotNotation ? g.set(n, e, t) : n[e] = t;
                };
                if ("object" == typeof e) {
                    const t = e;
                    for (const [e, n] of Object.entries(t)) r(e, n);
                } else r(e, t);
                this.store = n;
            }
            has(e) {
                return u(this, s, "f").accessPropertiesByDotNotation ? g.has(this.store, e) : e in this.store;
            }
            reset(...e) {
                for (const t of e) null != u(this, l, "f")[t] && this.set(t, u(this, l, "f")[t]);
            }
            delete(e) {
                const {store: t} = this;
                u(this, s, "f").accessPropertiesByDotNotation ? g.delete(t, e) : delete t[e], this.store = t;
            }
            clear() {
                this.store = O();
                for (const e of Object.keys(u(this, l, "f"))) this.reset(e);
            }
            onDidChange(e, t) {
                if ("string" != typeof e) throw new TypeError("Expected `key` to be of type `string`, got " + typeof e);
                if ("function" != typeof t) throw new TypeError("Expected `callback` to be of type `function`, got " + typeof t);
                return this._handleChange(() => this.get(e), t);
            }
            onDidAnyChange(e) {
                if ("function" != typeof e) throw new TypeError("Expected `callback` to be of type `function`, got " + typeof e);
                return this._handleChange(() => this.store, e);
            }
            get size() {
                return Object.keys(this.store).length;
            }
            get store() {
                try {
                    const e = h.readFileSync(this.path, u(this, a, "f") ? null : "utf8"), t = this._encryptData(e), n = this._deserialize(t);
                    return this._validate(n), Object.assign(O(), n);
                } catch (e) {
                    if ("ENOENT" === (null == e ? void 0 : e.code)) return this._ensureDirectory(), 
                    O();
                    if (u(this, s, "f").clearInvalidConfig && "SyntaxError" === e.name) return O();
                    throw e;
                }
            }
            set store(e) {
                this._ensureDirectory(), this._validate(e), this._write(e), this.events.emit("change");
            }
            * [(o = new WeakMap, a = new WeakMap, s = new WeakMap, l = new WeakMap, Symbol.iterator)]() {
                for (const [e, t] of Object.entries(this.store)) yield [ e, t ];
            }
            _encryptData(e) {
                if (!u(this, a, "f")) return e.toString();
                try {
                    if (u(this, a, "f")) try {
                        if (":" === e.slice(16, 17).toString()) {
                            const t = e.slice(0, 16), n = f.pbkdf2Sync(u(this, a, "f"), t.toString(), 1e4, 32, "sha512"), r = f.createDecipheriv("aes-256-cbc", n, t);
                            e = Buffer.concat([ r.update(Buffer.from(e.slice(17))), r.final() ]).toString("utf8");
                        } else {
                            const t = f.createDecipher("aes-256-cbc", u(this, a, "f"));
                            e = Buffer.concat([ t.update(Buffer.from(e)), t.final() ]).toString("utf8");
                        }
                    } catch (e) {}
                } catch (e) {}
                return e.toString();
            }
            _handleChange(e, t) {
                let n = e();
                const r = () => {
                    const r = n, i = e();
                    (0, d.isDeepStrictEqual)(i, r) || (n = i, t.call(this, i, r));
                };
                return this.events.on("change", r), () => this.events.removeListener("change", r);
            }
            _validate(e) {
                if (!u(this, o, "f")) return;
                if (u(this, o, "f").call(this, e) || !u(this, o, "f").errors) return;
                const t = u(this, o, "f").errors.map(({instancePath: e, message: t = ""}) => `\`${e.slice(1)}\` ${t}`);
                throw new Error("Config schema violation: " + t.join("; "));
            }
            _ensureDirectory() {
                h.mkdirSync(p.dirname(this.path), {
                    recursive: !0
                });
            }
            _write(e) {
                let t = this._serialize(e);
                if (u(this, a, "f")) {
                    const e = f.randomBytes(16), n = f.pbkdf2Sync(u(this, a, "f"), e.toString(), 1e4, 32, "sha512"), r = f.createCipheriv("aes-256-cbc", n, e);
                    t = Buffer.concat([ e, Buffer.from(":"), r.update(Buffer.from(t)), r.final() ]);
                }
                if (process.env.SNAP) h.writeFileSync(this.path, t, {
                    mode: u(this, s, "f").configFileMode
                }); else try {
                    E.writeFileSync(this.path, t, {
                        mode: u(this, s, "f").configFileMode
                    });
                } catch (e) {
                    if ("EXDEV" === (null == e ? void 0 : e.code)) return void h.writeFileSync(this.path, t, {
                        mode: u(this, s, "f").configFileMode
                    });
                    throw e;
                }
            }
            _watch() {
                this._ensureDirectory(), h.existsSync(this.path) || this._write(O()), "win32" === process.platform ? h.watch(this.path, {
                    persistent: !1
                }, S(() => {
                    this.events.emit("change");
                }, {
                    wait: 100
                })) : h.watchFile(this.path, {
                    persistent: !1
                }, S(() => {
                    this.events.emit("change");
                }, {
                    wait: 5e3
                }));
            }
            _migrate(e, t, n) {
                let r = this._get(N, "0.0.0");
                const i = Object.keys(e).filter(e => this._shouldPerformMigration(e, r, t));
                let o = {
                    ...this.store
                };
                for (const a of i) try {
                    n && n(this, {
                        fromVersion: r,
                        toVersion: a,
                        finalVersion: t,
                        versions: i
                    });
                    (0, e[a])(this), this._set(N, a), r = a, o = {
                        ...this.store
                    };
                } catch (e) {
                    throw this.store = o, new Error("Something went wrong during the migration! Changes applied to the store until this failed migration will be restored. " + e);
                }
                !this._isVersionInRangeFormat(r) && T.eq(r, t) || this._set(N, t);
            }
            _containsReservedKey(e) {
                if ("object" == typeof e) {
                    if ("__internal__" === Object.keys(e)[0]) return !0;
                }
                return "string" == typeof e && (!!u(this, s, "f").accessPropertiesByDotNotation && !!e.startsWith("__internal__."));
            }
            _isVersionInRangeFormat(e) {
                return null === T.clean(e);
            }
            _shouldPerformMigration(e, t, n) {
                return this._isVersionInRangeFormat(e) ? ("0.0.0" === t || !T.satisfies(t, e)) && T.satisfies(n, e) : !T.lte(e, t) && !T.gt(e, n);
            }
            _get(e, t) {
                return g.get(this.store, e, t);
            }
            _set(e, t) {
                const {store: n} = this;
                g.set(n, e, t), this.store = n;
            }
        }
        t.default = I, e.exports = I, e.exports.default = I;
    }).call(this, n(40)(e));
}
