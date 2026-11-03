// analysis/pretty/main.js:32223; webpack module 278
function(e, t, n) {
    e.exports = u, u.Minimatch = d;
    var r = function() {
        try {
            return n(1);
        } catch (e) {}
    }() || {
        sep: "/"
    };
    u.sep = r.sep;
    var i = u.GLOBSTAR = d.GLOBSTAR = {}, o = n(1083), a = {
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
    }, s = "().*{}+?[]^$\\!".split("").reduce(function(e, t) {
        return e[t] = !0, e;
    }, {});
    var l = /\/+/;
    function c(e, t) {
        t = t || {};
        var n = {};
        return Object.keys(e).forEach(function(t) {
            n[t] = e[t];
        }), Object.keys(t).forEach(function(e) {
            n[e] = t[e];
        }), n;
    }
    function u(e, t, n) {
        return p(t), n || (n = {}), !(!n.nocomment && "#" === t.charAt(0)) && new d(t, n).match(e);
    }
    function d(e, t) {
        if (!(this instanceof d)) return new d(e, t);
        p(e), t || (t = {}), e = e.trim(), t.allowWindowsEscape || "/" === r.sep || (e = e.split(r.sep).join("/")), 
        this.options = t, this.maxGlobstarRecursion = void 0 !== t.maxGlobstarRecursion ? t.maxGlobstarRecursion : 200, 
        this.set = [], this.pattern = e, this.regexp = null, this.negate = !1, this.comment = !1, 
        this.empty = !1, this.partial = !!t.partial, this.make();
    }
    function h(e, t) {
        return t || (t = this instanceof d ? this.options : {}), e = void 0 === e ? this.pattern : e, 
        p(e), t.nobrace || !/\{(?:(?!\{).)*\}/.test(e) ? [ e ] : o(e);
    }
    u.filter = function(e, t) {
        return t = t || {}, function(n, r, i) {
            return u(n, e, t);
        };
    }, u.defaults = function(e) {
        if (!e || "object" != typeof e || !Object.keys(e).length) return u;
        var t = u, n = function(n, r, i) {
            return t(n, r, c(e, i));
        };
        return (n.Minimatch = function(n, r) {
            return new t.Minimatch(n, c(e, r));
        }).defaults = function(n) {
            return t.defaults(c(e, n)).Minimatch;
        }, n.filter = function(n, r) {
            return t.filter(n, c(e, r));
        }, n.defaults = function(n) {
            return t.defaults(c(e, n));
        }, n.makeRe = function(n, r) {
            return t.makeRe(n, c(e, r));
        }, n.braceExpand = function(n, r) {
            return t.braceExpand(n, c(e, r));
        }, n.match = function(n, r, i) {
            return t.match(n, r, c(e, i));
        }, n;
    }, d.defaults = function(e) {
        return u.defaults(e).Minimatch;
    }, d.prototype.debug = function() {}, d.prototype.make = function() {
        var e = this.pattern, t = this.options;
        if (!t.nocomment && "#" === e.charAt(0)) return void (this.comment = !0);
        if (!e) return void (this.empty = !0);
        this.parseNegate();
        var n = this.globSet = this.braceExpand();
        t.debug && (this.debug = function() {
            console.error.apply(console, arguments);
        });
        this.debug(this.pattern, n), n = this.globParts = n.map(function(e) {
            return e.split(l);
        }), this.debug(this.pattern, n), n = n.map(function(e, t, n) {
            return e.map(this.parse, this);
        }, this), this.debug(this.pattern, n), n = n.filter(function(e) {
            return -1 === e.indexOf(!1);
        }), this.debug(this.pattern, n), this.set = n;
    }, d.prototype.parseNegate = function() {
        var e = this.pattern, t = !1, n = this.options, r = 0;
        if (n.nonegate) return;
        for (var i = 0, o = e.length; i < o && "!" === e.charAt(i); i++) t = !t, r++;
        r && (this.pattern = e.substr(r));
        this.negate = t;
    }, u.braceExpand = function(e, t) {
        return h(e, t);
    }, d.prototype.braceExpand = h;
    var p = function(e) {
        if ("string" != typeof e) throw new TypeError("invalid pattern");
        if (e.length > 65536) throw new TypeError("pattern is too long");
    };
    d.prototype.parse = function(e, t) {
        p(e);
        var n = this.options;
        if ("**" === e) {
            if (!n.noglobstar) return i;
            e = "*";
        }
        if ("" === e) return "";
        var r, o = "", l = !!n.nocase, c = !1, u = [], d = [], h = !1, _ = -1, m = -1, g = "." === e.charAt(0) ? "" : n.dot ? "(?!(?:^|\\/)\\.{1,2}(?:$|\\/))" : "(?!\\.)", v = this;
        function y() {
            if (r) {
                switch (r) {
                  case "*":
                    o += "[^/]*?", l = !0;
                    break;

                  case "?":
                    o += "[^/]", l = !0;
                    break;

                  default:
                    o += "\\" + r;
                }
                v.debug("clearStateChar %j %j", r, o), r = !1;
            }
        }
        for (var E, b = 0, w = e.length; b < w && (E = e.charAt(b)); b++) if (this.debug("%s\t%s %s %j", e, b, o, E), 
        c && s[E]) o += "\\" + E, c = !1; else switch (E) {
          case "/":
            return !1;

          case "\\":
            y(), c = !0;
            continue;

          case "?":
          case "*":
          case "+":
          case "@":
          case "!":
            if (this.debug("%s\t%s %s %j <-- stateChar", e, b, o, E), h) {
                this.debug("  in class"), "!" === E && b === m + 1 && (E = "^"), o += E;
                continue;
            }
            if ("*" === E && "*" === r) continue;
            v.debug("call clearStateChar %j", r), y(), r = E, n.noext && y();
            continue;

          case "(":
            if (h) {
                o += "(";
                continue;
            }
            if (!r) {
                o += "\\(";
                continue;
            }
            u.push({
                type: r,
                start: b - 1,
                reStart: o.length,
                open: a[r].open,
                close: a[r].close
            }), o += "!" === r ? "(?:(?!(?:" : "(?:", this.debug("plType %j %j", r, o), r = !1;
            continue;

          case ")":
            if (h || !u.length) {
                o += "\\)";
                continue;
            }
            y(), l = !0;
            var S = u.pop();
            o += S.close, "!" === S.type && d.push(S), S.reEnd = o.length;
            continue;

          case "|":
            if (h || !u.length || c) {
                o += "\\|", c = !1;
                continue;
            }
            y(), o += "|";
            continue;

          case "[":
            if (y(), h) {
                o += "\\" + E;
                continue;
            }
            h = !0, m = b, _ = o.length, o += E;
            continue;

          case "]":
            if (b === m + 1 || !h) {
                o += "\\" + E, c = !1;
                continue;
            }
            var T = e.substring(m + 1, b);
            try {
                RegExp("[" + T + "]");
            } catch (e) {
                var A = this.parse(T, f);
                o = o.substr(0, _) + "\\[" + A[0] + "\\]", l = l || A[1], h = !1;
                continue;
            }
            l = !0, h = !1, o += E;
            continue;

          default:
            y(), c ? c = !1 : !s[E] || "^" === E && h || (o += "\\"), o += E;
        }
        h && (T = e.substr(m + 1), A = this.parse(T, f), o = o.substr(0, _) + "\\[" + A[0], 
        l = l || A[1]);
        for (S = u.pop(); S; S = u.pop()) {
            var O = o.slice(S.reStart + S.open.length);
            this.debug("setting tail", o, S), O = O.replace(/((?:\\{2}){0,64})(\\?)\|/g, function(e, t, n) {
                return n || (n = "\\"), t + t + n + "|";
            }), this.debug("tail=%j\n   %s", O, O, S, o);
            var C = "*" === S.type ? "[^/]*?" : "?" === S.type ? "[^/]" : "\\" + S.type;
            l = !0, o = o.slice(0, S.reStart) + C + "\\(" + O;
        }
        y(), c && (o += "\\\\");
        var N = !1;
        switch (o.charAt(0)) {
          case "[":
          case ".":
          case "(":
            N = !0;
        }
        for (var I = d.length - 1; I > -1; I--) {
            var R = d[I], D = o.slice(0, R.reStart), L = o.slice(R.reStart, R.reEnd - 8), k = o.slice(R.reEnd - 8, R.reEnd), M = o.slice(R.reEnd);
            k += M;
            var P = D.split("(").length - 1, x = M;
            for (b = 0; b < P; b++) x = x.replace(/\)[+*?]?/, "");
            var F = "";
            "" === (M = x) && t !== f && (F = "$"), o = D + L + M + F + k;
        }
        "" !== o && l && (o = "(?=.)" + o);
        N && (o = g + o);
        if (t === f) return [ o, l ];
        if (!l) return function(e) {
            return e.replace(/\\(.)/g, "$1");
        }(e);
        var j = n.nocase ? "i" : "";
        try {
            var U = new RegExp("^" + o + "$", j);
        } catch (e) {
            return new RegExp("$.");
        }
        return U._glob = e, U._src = o, U;
    };
    var f = {};
    u.makeRe = function(e, t) {
        return new d(e, t || {}).makeRe();
    }, d.prototype.makeRe = function() {
        if (this.regexp || !1 === this.regexp) return this.regexp;
        var e = this.set;
        if (!e.length) return this.regexp = !1, this.regexp;
        var t = this.options, n = t.noglobstar ? "[^/]*?" : t.dot ? "(?:(?!(?:\\/|^)(?:\\.{1,2})($|\\/)).)*?" : "(?:(?!(?:\\/|^)\\.).)*?", r = t.nocase ? "i" : "", o = e.map(function(e) {
            return e.map(function(e) {
                return e === i ? n : "string" == typeof e ? function(e) {
                    return e.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
                }(e) : e._src;
            }).join("\\/");
        }).join("|");
        o = "^(?:" + o + ")$", this.negate && (o = "^(?!" + o + ").*$");
        try {
            this.regexp = new RegExp(o, r);
        } catch (e) {
            this.regexp = !1;
        }
        return this.regexp;
    }, u.match = function(e, t, n) {
        var r = new d(t, n = n || {});
        return e = e.filter(function(e) {
            return r.match(e);
        }), r.options.nonull && !e.length && e.push(t), e;
    }, d.prototype.match = function(e, t) {
        if (void 0 === t && (t = this.partial), this.debug("match", e, this.pattern), this.comment) return !1;
        if (this.empty) return "" === e;
        if ("/" === e && t) return !0;
        var n = this.options;
        "/" !== r.sep && (e = e.split(r.sep).join("/")), e = e.split(l), this.debug(this.pattern, "split", e);
        var i, o, a = this.set;
        for (this.debug(this.pattern, "set", a), o = e.length - 1; o >= 0 && !(i = e[o]); o--) ;
        for (o = 0; o < a.length; o++) {
            var s = a[o], c = e;
            if (n.matchBase && 1 === s.length && (c = [ i ]), this.matchOne(c, s, t)) return !!n.flipNegate || !this.negate;
        }
        return !n.flipNegate && this.negate;
    }, d.prototype.matchOne = function(e, t, n) {
        return -1 !== t.indexOf(i) ? this._matchGlobstar(e, t, n, 0, 0) : this._matchOne(e, t, n, 0, 0);
    }, d.prototype._matchGlobstar = function(e, t, n, r, o) {
        var a, s = -1;
        for (a = o; a < t.length; a++) if (t[a] === i) {
            s = a;
            break;
        }
        var l = -1;
        for (a = t.length - 1; a >= 0; a--) if (t[a] === i) {
            l = a;
            break;
        }
        var c = t.slice(o, s), u = n ? t.slice(s + 1) : t.slice(s + 1, l), d = n ? [] : t.slice(l + 1);
        if (c.length) {
            var h = e.slice(r, r + c.length);
            if (!this._matchOne(h, c, n, 0, 0)) return !1;
            r += c.length;
        }
        var p = 0;
        if (d.length) {
            if (d.length + r > e.length) return !1;
            var f = e.length - d.length;
            if (this._matchOne(e, d, n, f, 0)) p = d.length; else {
                if ("" !== e[e.length - 1] || r + d.length === e.length) return !1;
                if (f--, !this._matchOne(e, d, n, f, 0)) return !1;
                p = d.length + 1;
            }
        }
        if (!u.length) {
            var _ = !!p;
            for (a = r; a < e.length - p; a++) {
                var m = String(e[a]);
                if (_ = !0, "." === m || ".." === m || !this.options.dot && "." === m.charAt(0)) return !1;
            }
            return n || _;
        }
        for (var g = [ [ [], 0 ] ], v = g[0], y = 0, E = [ 0 ], b = 0; b < u.length; b++) {
            var w = u[b];
            w === i ? (E.push(y), v = [ [], 0 ], g.push(v)) : (v[0].push(w), y++);
        }
        for (var S = g.length - 1, T = e.length - p, A = 0; A < g.length; A++) g[A][1] = T - (E[S--] + g[A][0].length);
        return !!this._matchGlobStarBodySections(e, g, r, 0, n, 0, !!p);
    }, d.prototype._matchGlobStarBodySections = function(e, t, n, r, i, o, a) {
        var s = t[r];
        if (!s) {
            for (var l = n; l < e.length; l++) {
                if (a = !0, "." === (d = e[l]) || ".." === d || !this.options.dot && "." === d.charAt(0)) return !1;
            }
            return a;
        }
        for (var c = s[0], u = s[1]; n <= u; ) {
            var d;
            if (this._matchOne(e.slice(0, n + c.length), c, i, n, 0) && o < this.maxGlobstarRecursion) {
                var h = this._matchGlobStarBodySections(e, t, n + c.length, r + 1, i, o + 1, a);
                if (!1 !== h) return h;
            }
            if ("." === (d = e[n]) || ".." === d || !this.options.dot && "." === d.charAt(0)) return !1;
            n++;
        }
        return i || null;
    }, d.prototype._matchOne = function(e, t, n, r, o) {
        var a, s, l, c;
        for (a = r, s = o, l = e.length, c = t.length; a < l && s < c; a++, s++) {
            this.debug("matchOne loop");
            var u, d = t[s], h = e[a];
            if (this.debug(t, d, h), !1 === d || d === i) return !1;
            if ("string" == typeof d ? (u = h === d, this.debug("string match", d, h, u)) : (u = h.match(d), 
            this.debug("pattern match", d, h, u)), !u) return !1;
        }
        if (a === l && s === c) return !0;
        if (a === l) return n;
        if (s === c) return a === l - 1 && "" === e[a];
        throw new Error("wtf?");
    };
}
