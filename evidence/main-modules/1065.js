// analysis/pretty/main.js:85337; webpack module 1065
function(e, t, n) {
    const r = e.exports = (e, t, n = {}) => (f(t), !(!n.nocomment && "#" === t.charAt(0)) && new g(t, n).match(e));
    e.exports = r;
    const i = n(1066);
    r.sep = i.sep;
    const o = Symbol("globstar **");
    r.GLOBSTAR = o;
    const a = n(1067), s = {
        "!": {
            open: "(?:(?!(?:",
            close: "))[^/]*?)"
        },
        "?": {
            open: "(?:",
            close: ")?"
        },
        "+": {
            open: "(?:",
            close: ")+"
        },
        "*": {
            open: "(?:",
            close: ")*"
        },
        "@": {
            open: "(?:",
            close: ")"
        }
    }, l = e => e.split("").reduce((e, t) => (e[t] = !0, e), {}), c = l("().*{}+?[]^$\\!"), u = l("[.("), d = /\/+/;
    r.filter = (e, t = {}) => (n, i, o) => r(n, e, t);
    const h = (e, t = {}) => {
        const n = {};
        return Object.keys(e).forEach(t => n[t] = e[t]), Object.keys(t).forEach(e => n[e] = t[e]), 
        n;
    };
    r.defaults = e => {
        if (!e || "object" != typeof e || !Object.keys(e).length) return r;
        const t = r, n = (n, r, i) => t(n, r, h(e, i));
        return (n.Minimatch = class extends t.Minimatch {
            constructor(t, n) {
                super(t, h(e, n));
            }
        }).defaults = n => t.defaults(h(e, n)).Minimatch, n.filter = (n, r) => t.filter(n, h(e, r)), 
        n.defaults = n => t.defaults(h(e, n)), n.makeRe = (n, r) => t.makeRe(n, h(e, r)), 
        n.braceExpand = (n, r) => t.braceExpand(n, h(e, r)), n.match = (n, r, i) => t.match(n, r, h(e, i)), 
        n;
    }, r.braceExpand = (e, t) => p(e, t);
    const p = (e, t = {}) => (f(e), t.nobrace || !/\{(?:(?!\{).)*\}/.test(e) ? [ e ] : a(e)), f = e => {
        if ("string" != typeof e) throw new TypeError("invalid pattern");
        if (e.length > 65536) throw new TypeError("pattern is too long");
    }, _ = Symbol("subparse");
    r.makeRe = (e, t) => new g(e, t || {}).makeRe(), r.match = (e, t, n = {}) => {
        const r = new g(t, n);
        return e = e.filter(e => r.match(e)), r.options.nonull && !e.length && e.push(t), 
        e;
    };
    const m = e => e.replace(/[[\]\\]/g, "\\$&");
    class g {
        constructor(e, t) {
            f(e), t || (t = {}), this.options = t, this.maxGlobstarRecursion = void 0 !== t.maxGlobstarRecursion ? t.maxGlobstarRecursion : 200, 
            this.set = [], this.pattern = e, this.windowsPathsNoEscape = !!t.windowsPathsNoEscape || !1 === t.allowWindowsEscape, 
            this.windowsPathsNoEscape && (this.pattern = this.pattern.replace(/\\/g, "/")), 
            this.regexp = null, this.negate = !1, this.comment = !1, this.empty = !1, this.partial = !!t.partial, 
            this.make();
        }
        debug() {}
        make() {
            const e = this.pattern, t = this.options;
            if (!t.nocomment && "#" === e.charAt(0)) return void (this.comment = !0);
            if (!e) return void (this.empty = !0);
            this.parseNegate();
            let n = this.globSet = this.braceExpand();
            t.debug && (this.debug = (...e) => console.error(...e)), this.debug(this.pattern, n), 
            n = this.globParts = n.map(e => e.split(d)), this.debug(this.pattern, n), n = n.map((e, t, n) => e.map(this.parse, this)), 
            this.debug(this.pattern, n), n = n.filter(e => -1 === e.indexOf(!1)), this.debug(this.pattern, n), 
            this.set = n;
        }
        parseNegate() {
            if (this.options.nonegate) return;
            const e = this.pattern;
            let t = !1, n = 0;
            for (let r = 0; r < e.length && "!" === e.charAt(r); r++) t = !t, n++;
            n && (this.pattern = e.slice(n)), this.negate = t;
        }
        matchOne(e, t, n) {
            return -1 !== t.indexOf(o) ? this._matchGlobstar(e, t, n, 0, 0) : this._matchOne(e, t, n, 0, 0);
        }
        _matchGlobstar(e, t, n, r, i) {
            let a = -1;
            for (let e = i; e < t.length; e++) if (t[e] === o) {
                a = e;
                break;
            }
            let s = -1;
            for (let e = t.length - 1; e >= 0; e--) if (t[e] === o) {
                s = e;
                break;
            }
            const l = t.slice(i, a), c = n ? t.slice(a + 1) : t.slice(a + 1, s), u = n ? [] : t.slice(s + 1);
            if (l.length) {
                const t = e.slice(r, r + l.length);
                if (!this._matchOne(t, l, n, 0, 0)) return !1;
                r += l.length;
            }
            let d = 0;
            if (u.length) {
                if (u.length + r > e.length) return !1;
                const t = e.length - u.length;
                if (this._matchOne(e, u, n, t, 0)) d = u.length; else {
                    if ("" !== e[e.length - 1] || r + u.length === e.length) return !1;
                    if (!this._matchOne(e, u, n, t - 1, 0)) return !1;
                    d = u.length + 1;
                }
            }
            if (!c.length) {
                let t = !!d;
                for (let n = r; n < e.length - d; n++) {
                    const r = String(e[n]);
                    if (t = !0, "." === r || ".." === r || !this.options.dot && "." === r.charAt(0)) return !1;
                }
                return n || t;
            }
            const h = [ [ [], 0 ] ];
            let p = h[0], f = 0;
            const _ = [ 0 ];
            for (const e of c) e === o ? (_.push(f), p = [ [], 0 ], h.push(p)) : (p[0].push(e), 
            f++);
            let m = h.length - 1;
            const g = e.length - d;
            for (const e of h) e[1] = g - (_[m--] + e[0].length);
            return !!this._matchGlobStarBodySections(e, h, r, 0, n, 0, !!d);
        }
        _matchGlobStarBodySections(e, t, n, r, i, o, a) {
            const s = t[r];
            if (!s) {
                for (let t = n; t < e.length; t++) {
                    a = !0;
                    const n = e[t];
                    if ("." === n || ".." === n || !this.options.dot && "." === n.charAt(0)) return !1;
                }
                return a;
            }
            const [l, c] = s;
            for (;n <= c; ) {
                if (this._matchOne(e.slice(0, n + l.length), l, i, n, 0) && o < this.maxGlobstarRecursion) {
                    const s = this._matchGlobStarBodySections(e, t, n + l.length, r + 1, i, o + 1, a);
                    if (!1 !== s) return s;
                }
                const s = e[n];
                if ("." === s || ".." === s || !this.options.dot && "." === s.charAt(0)) return !1;
                n++;
            }
            return i || null;
        }
        _matchOne(e, t, n, r, i) {
            let a, s, l, c;
            for (a = r, s = i, l = e.length, c = t.length; a < l && s < c; a++, s++) {
                this.debug("matchOne loop");
                const n = t[s], r = e[a];
                if (this.debug(t, n, r), !1 === n || n === o) return !1;
                let i;
                if ("string" == typeof n ? (i = r === n, this.debug("string match", n, r, i)) : (i = r.match(n), 
                this.debug("pattern match", n, r, i)), !i) return !1;
            }
            if (a === l && s === c) return !0;
            if (a === l) return n;
            if (s === c) return a === l - 1 && "" === e[a];
            throw new Error("wtf?");
        }
        braceExpand() {
            return p(this.pattern, this.options);
        }
        parse(e, t) {
            f(e);
            const n = this.options;
            if ("**" === e) {
                if (!n.noglobstar) return o;
                e = "*";
            }
            if ("" === e) return "";
            let r = "", i = !1, a = !1;
            const l = [], d = [];
            let h, p, g, v, y = !1, E = -1, b = -1, w = "." === e.charAt(0), S = n.dot || w;
            const T = e => "." === e.charAt(0) ? "" : n.dot ? "(?!(?:^|\\/)\\.{1,2}(?:$|\\/))" : "(?!\\.)", A = () => {
                if (h) {
                    switch (h) {
                      case "*":
                        r += "[^/]*?", i = !0;
                        break;

                      case "?":
                        r += "[^/]", i = !0;
                        break;

                      default:
                        r += "\\" + h;
                    }
                    this.debug("clearStateChar %j %j", h, r), h = !1;
                }
            };
            for (let t, o = 0; o < e.length && (t = e.charAt(o)); o++) if (this.debug("%s\t%s %s %j", e, o, r, t), 
            a) {
                if ("/" === t) return !1;
                c[t] && (r += "\\"), r += t, a = !1;
            } else switch (t) {
              case "/":
                return !1;

              case "\\":
                if (y && "-" === e.charAt(o + 1)) {
                    r += t;
                    continue;
                }
                A(), a = !0;
                continue;

              case "?":
              case "*":
              case "+":
              case "@":
              case "!":
                if (this.debug("%s\t%s %s %j <-- stateChar", e, o, r, t), y) {
                    this.debug("  in class"), "!" === t && o === b + 1 && (t = "^"), r += t;
                    continue;
                }
                if ("*" === t && "*" === h) continue;
                this.debug("call clearStateChar %j", h), A(), h = t, n.noext && A();
                continue;

              case "(":
                {
                    if (y) {
                        r += "(";
                        continue;
                    }
                    if (!h) {
                        r += "\\(";
                        continue;
                    }
                    const t = {
                        type: h,
                        start: o - 1,
                        reStart: r.length,
                        open: s[h].open,
                        close: s[h].close
                    };
                    this.debug(this.pattern, "\t", t), l.push(t), r += t.open, 0 === t.start && "!" !== t.type && (w = !0, 
                    r += T(e.slice(o + 1))), this.debug("plType %j %j", h, r), h = !1;
                    continue;
                }

              case ")":
                {
                    const e = l[l.length - 1];
                    if (y || !e) {
                        r += "\\)";
                        continue;
                    }
                    l.pop(), A(), i = !0, g = e, r += g.close, "!" === g.type && d.push(Object.assign(g, {
                        reEnd: r.length
                    }));
                    continue;
                }

              case "|":
                {
                    const t = l[l.length - 1];
                    if (y || !t) {
                        r += "\\|";
                        continue;
                    }
                    A(), r += "|", 0 === t.start && "!" !== t.type && (w = !0, r += T(e.slice(o + 1)));
                    continue;
                }

              case "[":
                if (A(), y) {
                    r += "\\" + t;
                    continue;
                }
                y = !0, b = o, E = r.length, r += t;
                continue;

              case "]":
                if (o === b + 1 || !y) {
                    r += "\\" + t;
                    continue;
                }
                p = e.substring(b + 1, o);
                try {
                    RegExp("[" + m(p.replace(/\\([^-\]])/g, "$1")) + "]"), r += t;
                } catch (e) {
                    r = r.substring(0, E) + "(?:$.)";
                }
                i = !0, y = !1;
                continue;

              default:
                A(), !c[t] || "^" === t && y || (r += "\\"), r += t;
            }
            for (y && (p = e.slice(b + 1), v = this.parse(p, _), r = r.substring(0, E) + "\\[" + v[0], 
            i = i || v[1]), g = l.pop(); g; g = l.pop()) {
                let e;
                e = r.slice(g.reStart + g.open.length), this.debug("setting tail", r, g), e = e.replace(/((?:\\{2}){0,64})(\\?)\|/g, (e, t, n) => (n || (n = "\\"), 
                t + t + n + "|")), this.debug("tail=%j\n   %s", e, e, g, r);
                const t = "*" === g.type ? "[^/]*?" : "?" === g.type ? "[^/]" : "\\" + g.type;
                i = !0, r = r.slice(0, g.reStart) + t + "\\(" + e;
            }
            A(), a && (r += "\\\\");
            const O = u[r.charAt(0)];
            for (let e = d.length - 1; e > -1; e--) {
                const n = d[e], i = r.slice(0, n.reStart), o = r.slice(n.reStart, n.reEnd - 8);
                let a = r.slice(n.reEnd);
                const s = r.slice(n.reEnd - 8, n.reEnd) + a, l = i.split(")").length, c = i.split("(").length - l;
                let u = a;
                for (let e = 0; e < c; e++) u = u.replace(/\)[+*?]?/, "");
                a = u;
                r = i + o + a + ("" === a && t !== _ ? "(?:$|\\/)" : "") + s;
            }
            if ("" !== r && i && (r = "(?=.)" + r), O && (r = (w ? "" : S ? "(?!(?:^|\\/)\\.{1,2}(?:$|\\/))" : "(?!\\.)") + r), 
            t === _) return [ r, i ];
            if (n.nocase && !i && (i = e.toUpperCase() !== e.toLowerCase()), !i) return (e => e.replace(/\\(.)/g, "$1"))(e);
            const C = n.nocase ? "i" : "";
            try {
                return Object.assign(new RegExp("^" + r + "$", C), {
                    _glob: e,
                    _src: r
                });
            } catch (e) {
                return new RegExp("$.");
            }
        }
        makeRe() {
            if (this.regexp || !1 === this.regexp) return this.regexp;
            const e = this.set;
            if (!e.length) return this.regexp = !1, this.regexp;
            const t = this.options, n = t.noglobstar ? "[^/]*?" : t.dot ? "(?:(?!(?:\\/|^)(?:\\.{1,2})($|\\/)).)*?" : "(?:(?!(?:\\/|^)\\.).)*?", r = t.nocase ? "i" : "";
            let i = e.map(e => ((e = e.map(e => "string" == typeof e ? e.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&") : e === o ? o : e._src).reduce((e, t) => (e[e.length - 1] === o && t === o || e.push(t), 
            e), [])).forEach((t, r) => {
                t === o && e[r - 1] !== o && (0 === r ? e.length > 1 ? e[r + 1] = "(?:\\/|" + n + "\\/)?" + e[r + 1] : e[r] = n : r === e.length - 1 ? e[r - 1] += "(?:\\/|" + n + ")?" : (e[r - 1] += "(?:\\/|\\/" + n + "\\/)" + e[r + 1], 
                e[r + 1] = o));
            }), e.filter(e => e !== o).join("/"))).join("|");
            i = "^(?:" + i + ")$", this.negate && (i = "^(?!" + i + ").*$");
            try {
                this.regexp = new RegExp(i, r);
            } catch (e) {
                this.regexp = !1;
            }
            return this.regexp;
        }
        match(e, t = this.partial) {
            if (this.debug("match", e, this.pattern), this.comment) return !1;
            if (this.empty) return "" === e;
            if ("/" === e && t) return !0;
            const n = this.options;
            "/" !== i.sep && (e = e.split(i.sep).join("/")), e = e.split(d), this.debug(this.pattern, "split", e);
            const r = this.set;
            let o;
            this.debug(this.pattern, "set", r);
            for (let t = e.length - 1; t >= 0 && (o = e[t], !o); t--) ;
            for (let i = 0; i < r.length; i++) {
                const a = r[i];
                let s = e;
                n.matchBase && 1 === a.length && (s = [ o ]);
                if (this.matchOne(s, a, t)) return !!n.flipNegate || !this.negate;
            }
            return !n.flipNegate && this.negate;
        }
        static defaults(e) {
            return r.defaults(e).Minimatch;
        }
    }
    r.Minimatch = g;
}
