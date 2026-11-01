// analysis/pretty/main.js:31939; webpack module 277
function(e, t, n) {
    e.exports = v;
    var r = n(591), i = n(278), o = (i.Minimatch, n(22)), a = n(12).EventEmitter, s = n(1), l = n(44), c = n(279), u = n(1085), d = n(592), h = d.setopts, p = d.ownProp, f = n(1086), _ = (n(5), 
    d.childrenIgnored), m = d.isIgnored, g = n(280);
    function v(e, t, n) {
        if ("function" == typeof t && (n = t, t = {}), t || (t = {}), t.sync) {
            if (n) throw new TypeError("callback provided to sync glob");
            return u(e, t);
        }
        return new E(e, t, n);
    }
    v.sync = u;
    var y = v.GlobSync = u.GlobSync;
    function E(e, t, n) {
        if ("function" == typeof t && (n = t, t = null), t && t.sync) {
            if (n) throw new TypeError("callback provided to sync glob");
            return new y(e, t);
        }
        if (!(this instanceof E)) return new E(e, t, n);
        h(this, e, t), this._didRealPath = !1;
        var r = this.minimatch.set.length;
        this.matches = new Array(r), "function" == typeof n && (n = g(n), this.on("error", n), 
        this.on("end", function(e) {
            n(null, e);
        }));
        var i = this;
        if (this._processing = 0, this._emitQueue = [], this._processQueue = [], this.paused = !1, 
        this.noprocess) return this;
        if (0 === r) return a();
        for (var o = 0; o < r; o++) this._process(this.minimatch.set[o], o, !1, a);
        function a() {
            --i._processing, i._processing <= 0 && i._finish();
        }
    }
    v.glob = v, v.hasMagic = function(e, t) {
        var n = function(e, t) {
            if (null === t || "object" != typeof t) return e;
            for (var n = Object.keys(t), r = n.length; r--; ) e[n[r]] = t[n[r]];
            return e;
        }({}, t);
        n.noprocess = !0;
        var r = new E(e, n).minimatch.set;
        if (!e) return !1;
        if (r.length > 1) return !0;
        for (var i = 0; i < r[0].length; i++) if ("string" != typeof r[0][i]) return !0;
        return !1;
    }, v.Glob = E, o(E, a), E.prototype._finish = function() {
        if (l(this instanceof E), !this.aborted) {
            if (this.realpath && !this._didRealpath) return this._realpath();
            d.finish(this), this.emit("end", this.found);
        }
    }, E.prototype._realpath = function() {
        if (!this._didRealpath) {
            this._didRealpath = !0;
            var e = this.matches.length;
            if (0 === e) return this._finish();
            for (var t = this, n = 0; n < this.matches.length; n++) this._realpathSet(n, r);
        }
        function r() {
            0 == --e && t._finish();
        }
    }, E.prototype._realpathSet = function(e, t) {
        var n = this.matches[e];
        if (!n) return t();
        var i = Object.keys(n), o = this, a = i.length;
        if (0 === a) return t();
        var s = this.matches[e] = Object.create(null);
        i.forEach(function(n, i) {
            n = o._makeAbs(n), r.realpath(n, o.realpathCache, function(r, i) {
                r ? "stat" === r.syscall ? s[n] = !0 : o.emit("error", r) : s[i] = !0, 0 == --a && (o.matches[e] = s, 
                t());
            });
        });
    }, E.prototype._mark = function(e) {
        return d.mark(this, e);
    }, E.prototype._makeAbs = function(e) {
        return d.makeAbs(this, e);
    }, E.prototype.abort = function() {
        this.aborted = !0, this.emit("abort");
    }, E.prototype.pause = function() {
        this.paused || (this.paused = !0, this.emit("pause"));
    }, E.prototype.resume = function() {
        if (this.paused) {
            if (this.emit("resume"), this.paused = !1, this._emitQueue.length) {
                var e = this._emitQueue.slice(0);
                this._emitQueue.length = 0;
                for (var t = 0; t < e.length; t++) {
                    var n = e[t];
                    this._emitMatch(n[0], n[1]);
                }
            }
            if (this._processQueue.length) {
                var r = this._processQueue.slice(0);
                this._processQueue.length = 0;
                for (t = 0; t < r.length; t++) {
                    var i = r[t];
                    this._processing--, this._process(i[0], i[1], i[2], i[3]);
                }
            }
        }
    }, E.prototype._process = function(e, t, n, r) {
        if (l(this instanceof E), l("function" == typeof r), !this.aborted) if (this._processing++, 
        this.paused) this._processQueue.push([ e, t, n, r ]); else {
            for (var o, a = 0; "string" == typeof e[a]; ) a++;
            switch (a) {
              case e.length:
                return void this._processSimple(e.join("/"), t, r);

              case 0:
                o = null;
                break;

              default:
                o = e.slice(0, a).join("/");
            }
            var s, u = e.slice(a);
            null === o ? s = "." : c(o) || c(e.map(function(e) {
                return "string" == typeof e ? e : "[*]";
            }).join("/")) ? (o && c(o) || (o = "/" + o), s = o) : s = o;
            var d = this._makeAbs(s);
            if (_(this, s)) return r();
            u[0] === i.GLOBSTAR ? this._processGlobStar(o, s, d, u, t, n, r) : this._processReaddir(o, s, d, u, t, n, r);
        }
    }, E.prototype._processReaddir = function(e, t, n, r, i, o, a) {
        var s = this;
        this._readdir(n, o, function(l, c) {
            return s._processReaddir2(e, t, n, r, i, o, c, a);
        });
    }, E.prototype._processReaddir2 = function(e, t, n, r, i, o, a, l) {
        if (!a) return l();
        for (var c = r[0], u = !!this.minimatch.negate, d = c._glob, h = this.dot || "." === d.charAt(0), p = [], f = 0; f < a.length; f++) {
            if ("." !== (m = a[f]).charAt(0) || h) (u && !e ? !m.match(c) : m.match(c)) && p.push(m);
        }
        var _ = p.length;
        if (0 === _) return l();
        if (1 === r.length && !this.mark && !this.stat) {
            this.matches[i] || (this.matches[i] = Object.create(null));
            for (f = 0; f < _; f++) {
                var m = p[f];
                e && (m = "/" !== e ? e + "/" + m : e + m), "/" !== m.charAt(0) || this.nomount || (m = s.join(this.root, m)), 
                this._emitMatch(i, m);
            }
            return l();
        }
        r.shift();
        for (f = 0; f < _; f++) {
            m = p[f];
            e && (m = "/" !== e ? e + "/" + m : e + m), this._process([ m ].concat(r), i, o, l);
        }
        l();
    }, E.prototype._emitMatch = function(e, t) {
        if (!this.aborted && !m(this, t)) if (this.paused) this._emitQueue.push([ e, t ]); else {
            var n = c(t) ? t : this._makeAbs(t);
            if (this.mark && (t = this._mark(t)), this.absolute && (t = n), !this.matches[e][t]) {
                if (this.nodir) {
                    var r = this.cache[n];
                    if ("DIR" === r || Array.isArray(r)) return;
                }
                this.matches[e][t] = !0;
                var i = this.statCache[n];
                i && this.emit("stat", t, i), this.emit("match", t);
            }
        }
    }, E.prototype._readdirInGlobStar = function(e, t) {
        if (!this.aborted) {
            if (this.follow) return this._readdir(e, !1, t);
            var n = this, r = f("lstat\0" + e, function(r, i) {
                if (r && "ENOENT" === r.code) return t();
                var o = i && i.isSymbolicLink();
                n.symlinks[e] = o, o || !i || i.isDirectory() ? n._readdir(e, !1, t) : (n.cache[e] = "FILE", 
                t());
            });
            r && n.fs.lstat(e, r);
        }
    }, E.prototype._readdir = function(e, t, n) {
        if (!this.aborted && (n = f("readdir\0" + e + "\0" + t, n))) {
            if (t && !p(this.symlinks, e)) return this._readdirInGlobStar(e, n);
            if (p(this.cache, e)) {
                var r = this.cache[e];
                if (!r || "FILE" === r) return n();
                if (Array.isArray(r)) return n(null, r);
            }
            this.fs.readdir(e, function(e, t, n) {
                return function(r, i) {
                    r ? e._readdirError(t, r, n) : e._readdirEntries(t, i, n);
                };
            }(this, e, n));
        }
    }, E.prototype._readdirEntries = function(e, t, n) {
        if (!this.aborted) {
            if (!this.mark && !this.stat) for (var r = 0; r < t.length; r++) {
                var i = t[r];
                i = "/" === e ? e + i : e + "/" + i, this.cache[i] = !0;
            }
            return this.cache[e] = t, n(null, t);
        }
    }, E.prototype._readdirError = function(e, t, n) {
        if (!this.aborted) {
            switch (t.code) {
              case "ENOTSUP":
              case "ENOTDIR":
                var r = this._makeAbs(e);
                if (this.cache[r] = "FILE", r === this.cwdAbs) {
                    var i = new Error(t.code + " invalid cwd " + this.cwd);
                    i.path = this.cwd, i.code = t.code, this.emit("error", i), this.abort();
                }
                break;

              case "ENOENT":
              case "ELOOP":
              case "ENAMETOOLONG":
              case "UNKNOWN":
                this.cache[this._makeAbs(e)] = !1;
                break;

              default:
                this.cache[this._makeAbs(e)] = !1, this.strict && (this.emit("error", t), this.abort()), 
                this.silent || console.error("glob error", t);
            }
            return n();
        }
    }, E.prototype._processGlobStar = function(e, t, n, r, i, o, a) {
        var s = this;
        this._readdir(n, o, function(l, c) {
            s._processGlobStar2(e, t, n, r, i, o, c, a);
        });
    }, E.prototype._processGlobStar2 = function(e, t, n, r, i, o, a, s) {
        if (!a) return s();
        var l = r.slice(1), c = e ? [ e ] : [], u = c.concat(l);
        this._process(u, i, !1, s);
        var d = this.symlinks[n], h = a.length;
        if (d && o) return s();
        for (var p = 0; p < h; p++) {
            if ("." !== a[p].charAt(0) || this.dot) {
                var f = c.concat(a[p], l);
                this._process(f, i, !0, s);
                var _ = c.concat(a[p], r);
                this._process(_, i, !0, s);
            }
        }
        s();
    }, E.prototype._processSimple = function(e, t, n) {
        var r = this;
        this._stat(e, function(i, o) {
            r._processSimple2(e, t, i, o, n);
        });
    }, E.prototype._processSimple2 = function(e, t, n, r, i) {
        if (this.matches[t] || (this.matches[t] = Object.create(null)), !r) return i();
        if (e && c(e) && !this.nomount) {
            var o = /[\/\\]$/.test(e);
            "/" === e.charAt(0) ? e = s.join(this.root, e) : (e = s.resolve(this.root, e), o && (e += "/"));
        }
        "win32" === process.platform && (e = e.replace(/\\/g, "/")), this._emitMatch(t, e), 
        i();
    }, E.prototype._stat = function(e, t) {
        var n = this._makeAbs(e), r = "/" === e.slice(-1);
        if (e.length > this.maxLength) return t();
        if (!this.stat && p(this.cache, n)) {
            var i = this.cache[n];
            if (Array.isArray(i) && (i = "DIR"), !r || "DIR" === i) return t(null, i);
            if (r && "FILE" === i) return t();
        }
        var o = this.statCache[n];
        if (void 0 !== o) {
            if (!1 === o) return t(null, o);
            var a = o.isDirectory() ? "DIR" : "FILE";
            return r && "FILE" === a ? t() : t(null, a, o);
        }
        var s = this, l = f("stat\0" + n, function(r, i) {
            if (i && i.isSymbolicLink()) return s.fs.stat(n, function(r, o) {
                r ? s._stat2(e, n, null, i, t) : s._stat2(e, n, r, o, t);
            });
            s._stat2(e, n, r, i, t);
        });
        l && s.fs.lstat(n, l);
    }, E.prototype._stat2 = function(e, t, n, r, i) {
        if (n && ("ENOENT" === n.code || "ENOTDIR" === n.code)) return this.statCache[t] = !1, 
        i();
        var o = "/" === e.slice(-1);
        if (this.statCache[t] = r, "/" === t.slice(-1) && r && !r.isDirectory()) return i(null, !1, r);
        var a = !0;
        return r && (a = r.isDirectory() ? "DIR" : "FILE"), this.cache[t] = this.cache[t] || a, 
        o && "FILE" === a ? i() : i(null, a, r);
    };
}
