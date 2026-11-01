// analysis/pretty/main.js:87746; webpack module 1085
function(e, t, n) {
    e.exports = p, p.GlobSync = f;
    var r = n(591), i = n(278), o = (i.Minimatch, n(277).Glob, n(5), n(1)), a = n(44), s = n(279), l = n(592), c = l.setopts, u = l.ownProp, d = l.childrenIgnored, h = l.isIgnored;
    function p(e, t) {
        if ("function" == typeof t || 3 === arguments.length) throw new TypeError("callback provided to sync glob\nSee: https://github.com/isaacs/node-glob/issues/167");
        return new f(e, t).found;
    }
    function f(e, t) {
        if (!e) throw new Error("must provide pattern");
        if ("function" == typeof t || 3 === arguments.length) throw new TypeError("callback provided to sync glob\nSee: https://github.com/isaacs/node-glob/issues/167");
        if (!(this instanceof f)) return new f(e, t);
        if (c(this, e, t), this.noprocess) return this;
        var n = this.minimatch.set.length;
        this.matches = new Array(n);
        for (var r = 0; r < n; r++) this._process(this.minimatch.set[r], r, !1);
        this._finish();
    }
    f.prototype._finish = function() {
        if (a.ok(this instanceof f), this.realpath) {
            var e = this;
            this.matches.forEach(function(t, n) {
                var i = e.matches[n] = Object.create(null);
                for (var o in t) try {
                    o = e._makeAbs(o), i[r.realpathSync(o, e.realpathCache)] = !0;
                } catch (t) {
                    if ("stat" !== t.syscall) throw t;
                    i[e._makeAbs(o)] = !0;
                }
            });
        }
        l.finish(this);
    }, f.prototype._process = function(e, t, n) {
        a.ok(this instanceof f);
        for (var r, o = 0; "string" == typeof e[o]; ) o++;
        switch (o) {
          case e.length:
            return void this._processSimple(e.join("/"), t);

          case 0:
            r = null;
            break;

          default:
            r = e.slice(0, o).join("/");
        }
        var l, c = e.slice(o);
        null === r ? l = "." : s(r) || s(e.map(function(e) {
            return "string" == typeof e ? e : "[*]";
        }).join("/")) ? (r && s(r) || (r = "/" + r), l = r) : l = r;
        var u = this._makeAbs(l);
        d(this, l) || (c[0] === i.GLOBSTAR ? this._processGlobStar(r, l, u, c, t, n) : this._processReaddir(r, l, u, c, t, n));
    }, f.prototype._processReaddir = function(e, t, n, r, i, a) {
        var s = this._readdir(n, a);
        if (s) {
            for (var l = r[0], c = !!this.minimatch.negate, u = l._glob, d = this.dot || "." === u.charAt(0), h = [], p = 0; p < s.length; p++) {
                if ("." !== (m = s[p]).charAt(0) || d) (c && !e ? !m.match(l) : m.match(l)) && h.push(m);
            }
            var f = h.length;
            if (0 !== f) if (1 !== r.length || this.mark || this.stat) {
                r.shift();
                for (p = 0; p < f; p++) {
                    var _;
                    m = h[p];
                    _ = e ? [ e, m ] : [ m ], this._process(_.concat(r), i, a);
                }
            } else {
                this.matches[i] || (this.matches[i] = Object.create(null));
                for (var p = 0; p < f; p++) {
                    var m = h[p];
                    e && (m = "/" !== e.slice(-1) ? e + "/" + m : e + m), "/" !== m.charAt(0) || this.nomount || (m = o.join(this.root, m)), 
                    this._emitMatch(i, m);
                }
            }
        }
    }, f.prototype._emitMatch = function(e, t) {
        if (!h(this, t)) {
            var n = this._makeAbs(t);
            if (this.mark && (t = this._mark(t)), this.absolute && (t = n), !this.matches[e][t]) {
                if (this.nodir) {
                    var r = this.cache[n];
                    if ("DIR" === r || Array.isArray(r)) return;
                }
                this.matches[e][t] = !0, this.stat && this._stat(t);
            }
        }
    }, f.prototype._readdirInGlobStar = function(e) {
        if (this.follow) return this._readdir(e, !1);
        var t, n;
        try {
            n = this.fs.lstatSync(e);
        } catch (e) {
            if ("ENOENT" === e.code) return null;
        }
        var r = n && n.isSymbolicLink();
        return this.symlinks[e] = r, r || !n || n.isDirectory() ? t = this._readdir(e, !1) : this.cache[e] = "FILE", 
        t;
    }, f.prototype._readdir = function(e, t) {
        if (t && !u(this.symlinks, e)) return this._readdirInGlobStar(e);
        if (u(this.cache, e)) {
            var n = this.cache[e];
            if (!n || "FILE" === n) return null;
            if (Array.isArray(n)) return n;
        }
        try {
            return this._readdirEntries(e, this.fs.readdirSync(e));
        } catch (t) {
            return this._readdirError(e, t), null;
        }
    }, f.prototype._readdirEntries = function(e, t) {
        if (!this.mark && !this.stat) for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r = "/" === e ? e + r : e + "/" + r, this.cache[r] = !0;
        }
        return this.cache[e] = t, t;
    }, f.prototype._readdirError = function(e, t) {
        switch (t.code) {
          case "ENOTSUP":
          case "ENOTDIR":
            var n = this._makeAbs(e);
            if (this.cache[n] = "FILE", n === this.cwdAbs) {
                var r = new Error(t.code + " invalid cwd " + this.cwd);
                throw r.path = this.cwd, r.code = t.code, r;
            }
            break;

          case "ENOENT":
          case "ELOOP":
          case "ENAMETOOLONG":
          case "UNKNOWN":
            this.cache[this._makeAbs(e)] = !1;
            break;

          default:
            if (this.cache[this._makeAbs(e)] = !1, this.strict) throw t;
            this.silent || console.error("glob error", t);
        }
    }, f.prototype._processGlobStar = function(e, t, n, r, i, o) {
        var a = this._readdir(n, o);
        if (a) {
            var s = r.slice(1), l = e ? [ e ] : [], c = l.concat(s);
            this._process(c, i, !1);
            var u = a.length;
            if (!this.symlinks[n] || !o) for (var d = 0; d < u; d++) {
                if ("." !== a[d].charAt(0) || this.dot) {
                    var h = l.concat(a[d], s);
                    this._process(h, i, !0);
                    var p = l.concat(a[d], r);
                    this._process(p, i, !0);
                }
            }
        }
    }, f.prototype._processSimple = function(e, t) {
        var n = this._stat(e);
        if (this.matches[t] || (this.matches[t] = Object.create(null)), n) {
            if (e && s(e) && !this.nomount) {
                var r = /[\/\\]$/.test(e);
                "/" === e.charAt(0) ? e = o.join(this.root, e) : (e = o.resolve(this.root, e), r && (e += "/"));
            }
            "win32" === process.platform && (e = e.replace(/\\/g, "/")), this._emitMatch(t, e);
        }
    }, f.prototype._stat = function(e) {
        var t = this._makeAbs(e), n = "/" === e.slice(-1);
        if (e.length > this.maxLength) return !1;
        if (!this.stat && u(this.cache, t)) {
            var r = this.cache[t];
            if (Array.isArray(r) && (r = "DIR"), !n || "DIR" === r) return r;
            if (n && "FILE" === r) return !1;
        }
        var i = this.statCache[t];
        if (!i) {
            var o;
            try {
                o = this.fs.lstatSync(t);
            } catch (e) {
                if (e && ("ENOENT" === e.code || "ENOTDIR" === e.code)) return this.statCache[t] = !1, 
                !1;
            }
            if (o && o.isSymbolicLink()) try {
                i = this.fs.statSync(t);
            } catch (e) {
                i = o;
            } else i = o;
        }
        this.statCache[t] = i;
        r = !0;
        return i && (r = i.isDirectory() ? "DIR" : "FILE"), this.cache[t] = this.cache[t] || r, 
        (!n || "FILE" !== r) && r;
    }, f.prototype._mark = function(e) {
        return l.mark(this, e);
    }, f.prototype._makeAbs = function(e) {
        return l.makeAbs(this, e);
    };
}
