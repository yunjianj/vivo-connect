// analysis/pretty/main.js:82767; webpack module 1031
function(e, t, n) {
    "use strict";
    const r = n(4), i = n(1), o = n(1032), a = n(30), {MESSAGE: s} = n(27), {Stream: l, PassThrough: c} = n(38), u = n(120), d = n(203)("winston:file"), h = n(8), p = n(1046);
    e.exports = class extends u {
        constructor(e = {}) {
            function t(t, ...n) {
                n.slice(1).forEach(n => {
                    if (e[n]) throw new Error(`Cannot set ${n} and ${t} together`);
                });
            }
            if (super(e), this.name = e.name || "file", this._stream = new c, this._stream.setMaxListeners(30), 
            this._onError = this._onError.bind(this), e.filename || e.dirname) t("filename or dirname", "stream"), 
            this._basename = this.filename = e.filename ? i.basename(e.filename) : "winston.log", 
            this.dirname = e.dirname || i.dirname(e.filename), this.options = e.options || {
                flags: "a"
            }; else {
                if (!e.stream) throw new Error("Cannot log to file without filename or stream.");
                console.warn("options.stream will be removed in winston@4. Use winston.transports.Stream"), 
                t("stream", "filename", "maxsize"), this._dest = this._stream.pipe(this._setupStream(e.stream)), 
                this.dirname = i.dirname(this._dest.path);
            }
            this.maxsize = e.maxsize || null, this.rotationFormat = e.rotationFormat || !1, 
            this.zippedArchive = e.zippedArchive || !1, this.maxFiles = e.maxFiles || null, 
            this.eol = "string" == typeof e.eol ? e.eol : h.EOL, this.tailable = e.tailable || !1, 
            this._size = 0, this._pendingSize = 0, this._created = 0, this._drain = !1, this._opening = !1, 
            this._ending = !1, this.dirname && this._createLogDirIfNotExist(this.dirname), this.open();
        }
        finishIfEnding() {
            this._ending && (this._opening ? this.once("open", () => {
                this._stream.once("finish", () => this.emit("finish")), setImmediate(() => this._stream.end());
            }) : (this._stream.once("finish", () => this.emit("finish")), setImmediate(() => this._stream.end())));
        }
        log(e, t = () => {}) {
            if (this.silent) return t(), !0;
            if (this._drain) return void this._stream.once("drain", () => {
                this._drain = !1, this.log(e, t);
            });
            if (this._rotate) return void this._stream.once("rotate", () => {
                this._rotate = !1, this.log(e, t);
            });
            const n = `${e[s]}${this.eol}`, r = Buffer.byteLength(n);
            this._pendingSize += r, this._opening && !this.rotatedWhileOpening && this._needsNewFile(this._size + this._pendingSize) && (this.rotatedWhileOpening = !0);
            const i = this._stream.write(n, function() {
                this._size += r, this._pendingSize -= r, d("logged %s %s", this._size, n), this.emit("logged", e), 
                this._opening || this._needsNewFile() && (this._rotate = !0, this._endStream(() => this._rotateFile()));
            }.bind(this));
            return i ? t() : (this._drain = !0, this._stream.once("drain", () => {
                this._drain = !1, t();
            })), d("written", i, this._drain), this.finishIfEnding(), i;
        }
        query(e, t) {
            "function" == typeof e && (t = e, e = {}), e = function(e) {
                (e = e || {}).rows = e.rows || e.limit || 10, e.start = e.start || 0, e.until = e.until || new Date, 
                "object" != typeof e.until && (e.until = new Date(e.until));
                e.from = e.from || e.until - 864e5, "object" != typeof e.from && (e.from = new Date(e.from));
                return e.order = e.order || "desc", e;
            }(e);
            const n = i.join(this.dirname, this.filename);
            let o = "", a = [], s = 0;
            const l = r.createReadStream(n, {
                encoding: "utf8"
            });
            function c(t, n) {
                try {
                    const n = JSON.parse(t);
                    (function(t) {
                        if (!t) return;
                        if ("object" != typeof t) return;
                        const n = new Date(t.timestamp);
                        if (e.from && n < e.from || e.until && n > e.until || e.level && e.level !== t.level) return;
                        return !0;
                    })(n) && function(t) {
                        if (e.rows && a.length >= e.rows && "desc" !== e.order) return void (l.readable && l.destroy());
                        e.fields && (t = e.fields.reduce((e, n) => (e[n] = t[n], e), {}));
                        "desc" === e.order && a.length >= e.rows && a.shift();
                        a.push(t);
                    }(n);
                } catch (e) {
                    n || l.emit("error", e);
                }
            }
            l.on("error", e => {
                if (l.readable && l.destroy(), t) return "ENOENT" !== e.code ? t(e) : t(null, a);
            }), l.on("data", t => {
                const n = (t = (o + t).split(/\n+/)).length - 1;
                let r = 0;
                for (;r < n; r++) (!e.start || s >= e.start) && c(t[r]), s++;
                o = t[n];
            }), l.on("close", () => {
                o && c(o, !0), "desc" === e.order && (a = a.reverse()), t && t(null, a);
            });
        }
        stream(e = {}) {
            const t = i.join(this.dirname, this.filename), n = new l, r = {
                file: t,
                start: e.start
            };
            return n.destroy = p(r, (e, t) => {
                if (e) return n.emit("error", e);
                try {
                    n.emit("data", t), t = JSON.parse(t), n.emit("log", t);
                } catch (e) {
                    n.emit("error", e);
                }
            }), n;
        }
        open() {
            this.filename && (this._opening || (this._opening = !0, this.stat((e, t) => {
                if (e) return this.emit("error", e);
                d("stat done: %s { size: %s }", this.filename, t), this._size = t, this._dest = this._createStream(this._stream), 
                this._opening = !1, this.once("open", () => {
                    this._stream.eventNames().includes("rotate") ? this._stream.emit("rotate") : this._rotate = !1;
                });
            })));
        }
        stat(e) {
            const t = this._getFile(), n = i.join(this.dirname, t);
            r.stat(n, (r, i) => r && "ENOENT" === r.code ? (d("ENOENT ok", n), this.filename = t, 
            e(null, 0)) : r ? (d(`err ${r.code} ${n}`), e(r)) : !i || this._needsNewFile(i.size) ? this._incFile(() => this.stat(e)) : (this.filename = t, 
            void e(null, i.size)));
        }
        close(e) {
            this._stream && this._stream.end(() => {
                e && e(), this.emit("flush"), this.emit("closed");
            });
        }
        _needsNewFile(e) {
            return e = e || this._size, this.maxsize && e >= this.maxsize;
        }
        _onError(e) {
            this.emit("error", e);
        }
        _setupStream(e) {
            return e.on("error", this._onError), e;
        }
        _cleanupStream(e) {
            return e.removeListener("error", this._onError), e;
        }
        _rotateFile() {
            this._incFile(() => this.open());
        }
        _endStream(e = () => {}) {
            this._dest ? (this._stream.unpipe(this._dest), this._dest.end(() => {
                this._cleanupStream(this._dest), e();
            })) : e();
        }
        _createStream(e) {
            const t = i.join(this.dirname, this.filename);
            d("create stream start", t, this.options);
            const n = r.createWriteStream(t, this.options).on("error", e => d(e)).on("close", () => d("close", n.path, n.bytesWritten)).on("open", () => {
                d("file open ok", t), this.emit("open", t), e.pipe(n), this.rotatedWhileOpening && (this._stream = new c, 
                this._stream.setMaxListeners(30), this._rotateFile(), this.rotatedWhileOpening = !1, 
                this._cleanupStream(n), e.end());
            });
            if (d("create stream ok", t), this.zippedArchive) {
                const e = a.createGzip();
                return e.pipe(n), e;
            }
            return n;
        }
        _incFile(e) {
            d("_incFile", this.filename);
            const t = i.extname(this._basename), n = i.basename(this._basename, t);
            this.tailable ? this._checkMaxFilesTailable(t, n, e) : (this._created += 1, this._checkMaxFilesIncrementing(t, n, e));
        }
        _getFile() {
            const e = i.extname(this._basename), t = i.basename(this._basename, e), n = this.rotationFormat ? this.rotationFormat() : this._created, r = !this.tailable && this._created ? `${t}${n}${e}` : `${t}${e}`;
            return this.zippedArchive && !this.tailable ? r + ".gz" : r;
        }
        _checkMaxFilesIncrementing(e, t, n) {
            if (!this.maxFiles || this._created < this.maxFiles) return setImmediate(n);
            const o = this._created - this.maxFiles, a = `${t}${0 !== o ? o : ""}${e}${this.zippedArchive ? ".gz" : ""}`, s = i.join(this.dirname, a);
            r.unlink(s, n);
        }
        _checkMaxFilesTailable(e, t, n) {
            const a = [];
            if (!this.maxFiles) return;
            const s = this.zippedArchive ? ".gz" : "";
            for (let n = this.maxFiles - 1; n > 1; n--) a.push(function(n, o) {
                let a = `${t}${n - 1}${e}${s}`;
                const l = i.join(this.dirname, a);
                r.exists(l, c => {
                    if (!c) return o(null);
                    a = `${t}${n}${e}${s}`, r.rename(l, i.join(this.dirname, a), o);
                });
            }.bind(this, n));
            o(a, () => {
                r.rename(i.join(this.dirname, `${t}${e}`), i.join(this.dirname, `${t}1${e}${s}`), n);
            });
        }
        _createLogDirIfNotExist(e) {
            r.existsSync(e) || r.mkdirSync(e, {
                recursive: !0
            });
        }
    };
}
