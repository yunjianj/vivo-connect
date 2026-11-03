// analysis/pretty/main.js:41866; webpack module 391
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.ValueScope = t.ValueScopeName = t.Scope = t.varKinds = t.UsedValueState = void 0;
    const r = n(186);
    class i extends Error {
        constructor(e) {
            super(`CodeGen: "code" for ${e} not defined`), this.value = e.value;
        }
    }
    var o;
    !function(e) {
        e[e.Started = 0] = "Started", e[e.Completed = 1] = "Completed";
    }(o || (t.UsedValueState = o = {})), t.varKinds = {
        const: new r.Name("const"),
        let: new r.Name("let"),
        var: new r.Name("var")
    };
    class a {
        constructor({prefixes: e, parent: t} = {}) {
            this._names = {}, this._prefixes = e, this._parent = t;
        }
        toName(e) {
            return e instanceof r.Name ? e : this.name(e);
        }
        name(e) {
            return new r.Name(this._newName(e));
        }
        _newName(e) {
            return `${e}${(this._names[e] || this._nameGroup(e)).index++}`;
        }
        _nameGroup(e) {
            var t, n;
            if ((null === (n = null === (t = this._parent) || void 0 === t ? void 0 : t._prefixes) || void 0 === n ? void 0 : n.has(e)) || this._prefixes && !this._prefixes.has(e)) throw new Error(`CodeGen: prefix "${e}" is not allowed in this scope`);
            return this._names[e] = {
                prefix: e,
                index: 0
            };
        }
    }
    t.Scope = a;
    class s extends r.Name {
        constructor(e, t) {
            super(t), this.prefix = e;
        }
        setValue(e, {property: t, itemIndex: n}) {
            this.value = e, this.scopePath = r._`.${new r.Name(t)}[${n}]`;
        }
    }
    t.ValueScopeName = s;
    const l = r._`\n`;
    t.ValueScope = class extends a {
        constructor(e) {
            super(e), this._values = {}, this._scope = e.scope, this.opts = {
                ...e,
                _n: e.lines ? l : r.nil
            };
        }
        get() {
            return this._scope;
        }
        name(e) {
            return new s(e, this._newName(e));
        }
        value(e, t) {
            var n;
            if (void 0 === t.ref) throw new Error("CodeGen: ref must be passed in value");
            const r = this.toName(e), {prefix: i} = r, o = null !== (n = t.key) && void 0 !== n ? n : t.ref;
            let a = this._values[i];
            if (a) {
                const e = a.get(o);
                if (e) return e;
            } else a = this._values[i] = new Map;
            a.set(o, r);
            const s = this._scope[i] || (this._scope[i] = []), l = s.length;
            return s[l] = t.ref, r.setValue(t, {
                property: i,
                itemIndex: l
            }), r;
        }
        getValue(e, t) {
            const n = this._values[e];
            if (n) return n.get(t);
        }
        scopeRefs(e, t = this._values) {
            return this._reduceValues(t, t => {
                if (void 0 === t.scopePath) throw new Error(`CodeGen: name "${t}" has no value`);
                return r._`${e}${t.scopePath}`;
            });
        }
        scopeCode(e = this._values, t, n) {
            return this._reduceValues(e, e => {
                if (void 0 === e.value) throw new Error(`CodeGen: name "${e}" has no value`);
                return e.value.code;
            }, t, n);
        }
        _reduceValues(e, n, a = {}, s) {
            let l = r.nil;
            for (const c in e) {
                const u = e[c];
                if (!u) continue;
                const d = a[c] = a[c] || new Map;
                u.forEach(e => {
                    if (d.has(e)) return;
                    d.set(e, o.Started);
                    let a = n(e);
                    if (a) {
                        const n = this.opts.es5 ? t.varKinds.var : t.varKinds.const;
                        l = r._`${l}${n} ${e} = ${a};${this.opts._n}`;
                    } else {
                        if (!(a = null == s ? void 0 : s(e))) throw new i(e);
                        l = r._`${l}${a}${this.opts._n}`;
                    }
                    d.set(e, o.Completed);
                });
            }
            return l;
        }
    };
}
