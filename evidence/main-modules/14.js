// analysis/pretty/main.js:3282; webpack module 14
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.or = t.and = t.not = t.CodeGen = t.operators = t.varKinds = t.ValueScopeName = t.ValueScope = t.Scope = t.Name = t.regexpCode = t.stringify = t.getProperty = t.nil = t.strConcat = t.str = t._ = void 0;
    const r = n(186), i = n(391);
    var o = n(186);
    Object.defineProperty(t, "_", {
        enumerable: !0,
        get: function() {
            return o._;
        }
    }), Object.defineProperty(t, "str", {
        enumerable: !0,
        get: function() {
            return o.str;
        }
    }), Object.defineProperty(t, "strConcat", {
        enumerable: !0,
        get: function() {
            return o.strConcat;
        }
    }), Object.defineProperty(t, "nil", {
        enumerable: !0,
        get: function() {
            return o.nil;
        }
    }), Object.defineProperty(t, "getProperty", {
        enumerable: !0,
        get: function() {
            return o.getProperty;
        }
    }), Object.defineProperty(t, "stringify", {
        enumerable: !0,
        get: function() {
            return o.stringify;
        }
    }), Object.defineProperty(t, "regexpCode", {
        enumerable: !0,
        get: function() {
            return o.regexpCode;
        }
    }), Object.defineProperty(t, "Name", {
        enumerable: !0,
        get: function() {
            return o.Name;
        }
    });
    var a = n(391);
    Object.defineProperty(t, "Scope", {
        enumerable: !0,
        get: function() {
            return a.Scope;
        }
    }), Object.defineProperty(t, "ValueScope", {
        enumerable: !0,
        get: function() {
            return a.ValueScope;
        }
    }), Object.defineProperty(t, "ValueScopeName", {
        enumerable: !0,
        get: function() {
            return a.ValueScopeName;
        }
    }), Object.defineProperty(t, "varKinds", {
        enumerable: !0,
        get: function() {
            return a.varKinds;
        }
    }), t.operators = {
        GT: new r._Code(">"),
        GTE: new r._Code(">="),
        LT: new r._Code("<"),
        LTE: new r._Code("<="),
        EQ: new r._Code("==="),
        NEQ: new r._Code("!=="),
        NOT: new r._Code("!"),
        OR: new r._Code("||"),
        AND: new r._Code("&&"),
        ADD: new r._Code("+")
    };
    class s {
        optimizeNodes() {
            return this;
        }
        optimizeNames(e, t) {
            return this;
        }
    }
    class l extends s {
        constructor(e, t, n) {
            super(), this.varKind = e, this.name = t, this.rhs = n;
        }
        render({es5: e, _n: t}) {
            const n = e ? i.varKinds.var : this.varKind, r = void 0 === this.rhs ? "" : " = " + this.rhs;
            return `${n} ${this.name}${r};` + t;
        }
        optimizeNames(e, t) {
            if (e[this.name.str]) return this.rhs && (this.rhs = D(this.rhs, e, t)), this;
        }
        get names() {
            return this.rhs instanceof r._CodeOrName ? this.rhs.names : {};
        }
    }
    class c extends s {
        constructor(e, t, n) {
            super(), this.lhs = e, this.rhs = t, this.sideEffects = n;
        }
        render({_n: e}) {
            return `${this.lhs} = ${this.rhs};` + e;
        }
        optimizeNames(e, t) {
            if (!(this.lhs instanceof r.Name) || e[this.lhs.str] || this.sideEffects) return this.rhs = D(this.rhs, e, t), 
            this;
        }
        get names() {
            return R(this.lhs instanceof r.Name ? {} : {
                ...this.lhs.names
            }, this.rhs);
        }
    }
    class u extends c {
        constructor(e, t, n, r) {
            super(e, n, r), this.op = t;
        }
        render({_n: e}) {
            return `${this.lhs} ${this.op}= ${this.rhs};` + e;
        }
    }
    class d extends s {
        constructor(e) {
            super(), this.label = e, this.names = {};
        }
        render({_n: e}) {
            return this.label + ":" + e;
        }
    }
    class h extends s {
        constructor(e) {
            super(), this.label = e, this.names = {};
        }
        render({_n: e}) {
            return `break${this.label ? " " + this.label : ""};` + e;
        }
    }
    class p extends s {
        constructor(e) {
            super(), this.error = e;
        }
        render({_n: e}) {
            return `throw ${this.error};` + e;
        }
        get names() {
            return this.error.names;
        }
    }
    class f extends s {
        constructor(e) {
            super(), this.code = e;
        }
        render({_n: e}) {
            return this.code + ";" + e;
        }
        optimizeNodes() {
            return "" + this.code ? this : void 0;
        }
        optimizeNames(e, t) {
            return this.code = D(this.code, e, t), this;
        }
        get names() {
            return this.code instanceof r._CodeOrName ? this.code.names : {};
        }
    }
    class _ extends s {
        constructor(e = []) {
            super(), this.nodes = e;
        }
        render(e) {
            return this.nodes.reduce((t, n) => t + n.render(e), "");
        }
        optimizeNodes() {
            const {nodes: e} = this;
            let t = e.length;
            for (;t--; ) {
                const n = e[t].optimizeNodes();
                Array.isArray(n) ? e.splice(t, 1, ...n) : n ? e[t] = n : e.splice(t, 1);
            }
            return e.length > 0 ? this : void 0;
        }
        optimizeNames(e, t) {
            const {nodes: n} = this;
            let r = n.length;
            for (;r--; ) {
                const i = n[r];
                i.optimizeNames(e, t) || (L(e, i.names), n.splice(r, 1));
            }
            return n.length > 0 ? this : void 0;
        }
        get names() {
            return this.nodes.reduce((e, t) => I(e, t.names), {});
        }
    }
    class m extends _ {
        render(e) {
            return "{" + e._n + super.render(e) + "}" + e._n;
        }
    }
    class g extends _ {}
    class v extends m {}
    v.kind = "else";
    class y extends m {
        constructor(e, t) {
            super(t), this.condition = e;
        }
        render(e) {
            let t = `if(${this.condition})` + super.render(e);
            return this.else && (t += "else " + this.else.render(e)), t;
        }
        optimizeNodes() {
            super.optimizeNodes();
            const e = this.condition;
            if (!0 === e) return this.nodes;
            let t = this.else;
            if (t) {
                const e = t.optimizeNodes();
                t = this.else = Array.isArray(e) ? new v(e) : e;
            }
            return t ? !1 === e ? t instanceof y ? t : t.nodes : this.nodes.length ? this : new y(k(e), t instanceof y ? [ t ] : t.nodes) : !1 !== e && this.nodes.length ? this : void 0;
        }
        optimizeNames(e, t) {
            var n;
            if (this.else = null === (n = this.else) || void 0 === n ? void 0 : n.optimizeNames(e, t), 
            super.optimizeNames(e, t) || this.else) return this.condition = D(this.condition, e, t), 
            this;
        }
        get names() {
            const e = super.names;
            return R(e, this.condition), this.else && I(e, this.else.names), e;
        }
    }
    y.kind = "if";
    class E extends m {}
    E.kind = "for";
    class b extends E {
        constructor(e) {
            super(), this.iteration = e;
        }
        render(e) {
            return `for(${this.iteration})` + super.render(e);
        }
        optimizeNames(e, t) {
            if (super.optimizeNames(e, t)) return this.iteration = D(this.iteration, e, t), 
            this;
        }
        get names() {
            return I(super.names, this.iteration.names);
        }
    }
    class w extends E {
        constructor(e, t, n, r) {
            super(), this.varKind = e, this.name = t, this.from = n, this.to = r;
        }
        render(e) {
            const t = e.es5 ? i.varKinds.var : this.varKind, {name: n, from: r, to: o} = this;
            return `for(${t} ${n}=${r}; ${n}<${o}; ${n}++)` + super.render(e);
        }
        get names() {
            const e = R(super.names, this.from);
            return R(e, this.to);
        }
    }
    class S extends E {
        constructor(e, t, n, r) {
            super(), this.loop = e, this.varKind = t, this.name = n, this.iterable = r;
        }
        render(e) {
            return `for(${this.varKind} ${this.name} ${this.loop} ${this.iterable})` + super.render(e);
        }
        optimizeNames(e, t) {
            if (super.optimizeNames(e, t)) return this.iterable = D(this.iterable, e, t), this;
        }
        get names() {
            return I(super.names, this.iterable.names);
        }
    }
    class T extends m {
        constructor(e, t, n) {
            super(), this.name = e, this.args = t, this.async = n;
        }
        render(e) {
            return `${this.async ? "async " : ""}function ${this.name}(${this.args})` + super.render(e);
        }
    }
    T.kind = "func";
    class A extends _ {
        render(e) {
            return "return " + super.render(e);
        }
    }
    A.kind = "return";
    class O extends m {
        render(e) {
            let t = "try" + super.render(e);
            return this.catch && (t += this.catch.render(e)), this.finally && (t += this.finally.render(e)), 
            t;
        }
        optimizeNodes() {
            var e, t;
            return super.optimizeNodes(), null === (e = this.catch) || void 0 === e || e.optimizeNodes(), 
            null === (t = this.finally) || void 0 === t || t.optimizeNodes(), this;
        }
        optimizeNames(e, t) {
            var n, r;
            return super.optimizeNames(e, t), null === (n = this.catch) || void 0 === n || n.optimizeNames(e, t), 
            null === (r = this.finally) || void 0 === r || r.optimizeNames(e, t), this;
        }
        get names() {
            const e = super.names;
            return this.catch && I(e, this.catch.names), this.finally && I(e, this.finally.names), 
            e;
        }
    }
    class C extends m {
        constructor(e) {
            super(), this.error = e;
        }
        render(e) {
            return `catch(${this.error})` + super.render(e);
        }
    }
    C.kind = "catch";
    class N extends m {
        render(e) {
            return "finally" + super.render(e);
        }
    }
    N.kind = "finally";
    function I(e, t) {
        for (const n in t) e[n] = (e[n] || 0) + (t[n] || 0);
        return e;
    }
    function R(e, t) {
        return t instanceof r._CodeOrName ? I(e, t.names) : e;
    }
    function D(e, t, n) {
        return e instanceof r.Name ? o(e) : (i = e) instanceof r._Code && i._items.some(e => e instanceof r.Name && 1 === t[e.str] && void 0 !== n[e.str]) ? new r._Code(e._items.reduce((e, t) => (t instanceof r.Name && (t = o(t)), 
        t instanceof r._Code ? e.push(...t._items) : e.push(t), e), [])) : e;
        var i;
        function o(e) {
            const r = n[e.str];
            return void 0 === r || 1 !== t[e.str] ? e : (delete t[e.str], r);
        }
    }
    function L(e, t) {
        for (const n in t) e[n] = (e[n] || 0) - (t[n] || 0);
    }
    function k(e) {
        return "boolean" == typeof e || "number" == typeof e || null === e ? !e : r._`!${F(e)}`;
    }
    t.CodeGen = class {
        constructor(e, t = {}) {
            this._values = {}, this._blockStarts = [], this._constants = {}, this.opts = {
                ...t,
                _n: t.lines ? "\n" : ""
            }, this._extScope = e, this._scope = new i.Scope({
                parent: e
            }), this._nodes = [ new g ];
        }
        toString() {
            return this._root.render(this.opts);
        }
        name(e) {
            return this._scope.name(e);
        }
        scopeName(e) {
            return this._extScope.name(e);
        }
        scopeValue(e, t) {
            const n = this._extScope.value(e, t);
            return (this._values[n.prefix] || (this._values[n.prefix] = new Set)).add(n), n;
        }
        getScopeValue(e, t) {
            return this._extScope.getValue(e, t);
        }
        scopeRefs(e) {
            return this._extScope.scopeRefs(e, this._values);
        }
        scopeCode() {
            return this._extScope.scopeCode(this._values);
        }
        _def(e, t, n, r) {
            const i = this._scope.toName(t);
            return void 0 !== n && r && (this._constants[i.str] = n), this._leafNode(new l(e, i, n)), 
            i;
        }
        const(e, t, n) {
            return this._def(i.varKinds.const, e, t, n);
        }
        let(e, t, n) {
            return this._def(i.varKinds.let, e, t, n);
        }
        var(e, t, n) {
            return this._def(i.varKinds.var, e, t, n);
        }
        assign(e, t, n) {
            return this._leafNode(new c(e, t, n));
        }
        add(e, n) {
            return this._leafNode(new u(e, t.operators.ADD, n));
        }
        code(e) {
            return "function" == typeof e ? e() : e !== r.nil && this._leafNode(new f(e)), this;
        }
        object(...e) {
            const t = [ "{" ];
            for (const [n, i] of e) t.length > 1 && t.push(","), t.push(n), (n !== i || this.opts.es5) && (t.push(":"), 
            (0, r.addCodeArg)(t, i));
            return t.push("}"), new r._Code(t);
        }
        if(e, t, n) {
            if (this._blockNode(new y(e)), t && n) this.code(t).else().code(n).endIf(); else if (t) this.code(t).endIf(); else if (n) throw new Error('CodeGen: "else" body without "then" body');
            return this;
        }
        elseIf(e) {
            return this._elseNode(new y(e));
        }
        else() {
            return this._elseNode(new v);
        }
        endIf() {
            return this._endBlockNode(y, v);
        }
        _for(e, t) {
            return this._blockNode(e), t && this.code(t).endFor(), this;
        }
        for(e, t) {
            return this._for(new b(e), t);
        }
        forRange(e, t, n, r, o = (this.opts.es5 ? i.varKinds.var : i.varKinds.let)) {
            const a = this._scope.toName(e);
            return this._for(new w(o, a, t, n), () => r(a));
        }
        forOf(e, t, n, o = i.varKinds.const) {
            const a = this._scope.toName(e);
            if (this.opts.es5) {
                const e = t instanceof r.Name ? t : this.var("_arr", t);
                return this.forRange("_i", 0, r._`${e}.length`, t => {
                    this.var(a, r._`${e}[${t}]`), n(a);
                });
            }
            return this._for(new S("of", o, a, t), () => n(a));
        }
        forIn(e, t, n, o = (this.opts.es5 ? i.varKinds.var : i.varKinds.const)) {
            if (this.opts.ownProperties) return this.forOf(e, r._`Object.keys(${t})`, n);
            const a = this._scope.toName(e);
            return this._for(new S("in", o, a, t), () => n(a));
        }
        endFor() {
            return this._endBlockNode(E);
        }
        label(e) {
            return this._leafNode(new d(e));
        }
        break(e) {
            return this._leafNode(new h(e));
        }
        return(e) {
            const t = new A;
            if (this._blockNode(t), this.code(e), 1 !== t.nodes.length) throw new Error('CodeGen: "return" should have one node');
            return this._endBlockNode(A);
        }
        try(e, t, n) {
            if (!t && !n) throw new Error('CodeGen: "try" without "catch" and "finally"');
            const r = new O;
            if (this._blockNode(r), this.code(e), t) {
                const e = this.name("e");
                this._currNode = r.catch = new C(e), t(e);
            }
            return n && (this._currNode = r.finally = new N, this.code(n)), this._endBlockNode(C, N);
        }
        throw(e) {
            return this._leafNode(new p(e));
        }
        block(e, t) {
            return this._blockStarts.push(this._nodes.length), e && this.code(e).endBlock(t), 
            this;
        }
        endBlock(e) {
            const t = this._blockStarts.pop();
            if (void 0 === t) throw new Error("CodeGen: not in self-balancing block");
            const n = this._nodes.length - t;
            if (n < 0 || void 0 !== e && n !== e) throw new Error(`CodeGen: wrong number of nodes: ${n} vs ${e} expected`);
            return this._nodes.length = t, this;
        }
        func(e, t = r.nil, n, i) {
            return this._blockNode(new T(e, t, n)), i && this.code(i).endFunc(), this;
        }
        endFunc() {
            return this._endBlockNode(T);
        }
        optimize(e = 1) {
            for (;e-- > 0; ) this._root.optimizeNodes(), this._root.optimizeNames(this._root.names, this._constants);
        }
        _leafNode(e) {
            return this._currNode.nodes.push(e), this;
        }
        _blockNode(e) {
            this._currNode.nodes.push(e), this._nodes.push(e);
        }
        _endBlockNode(e, t) {
            const n = this._currNode;
            if (n instanceof e || t && n instanceof t) return this._nodes.pop(), this;
            throw new Error(`CodeGen: not in block "${t ? `${e.kind}/${t.kind}` : e.kind}"`);
        }
        _elseNode(e) {
            const t = this._currNode;
            if (!(t instanceof y)) throw new Error('CodeGen: "else" without "if"');
            return this._currNode = t.else = e, this;
        }
        get _root() {
            return this._nodes[0];
        }
        get _currNode() {
            const e = this._nodes;
            return e[e.length - 1];
        }
        set _currNode(e) {
            const t = this._nodes;
            t[t.length - 1] = e;
        }
    }, t.not = k;
    const M = x(t.operators.AND);
    t.and = function(...e) {
        return e.reduce(M);
    };
    const P = x(t.operators.OR);
    function x(e) {
        return (t, n) => t === r.nil ? n : n === r.nil ? t : r._`${F(t)} ${e} ${F(n)}`;
    }
    function F(e) {
        return e instanceof r.Name ? e : r._`(${e})`;
    }
    t.or = function(...e) {
        return e.reduce(P);
    };
}
