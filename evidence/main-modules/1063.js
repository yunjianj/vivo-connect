// analysis/pretty/main.js:84956; webpack module 1063
function(e, t, n) {
    /**
 * Archiver Core
 *
 * @ignore
 * @license [MIT]{@link https://github.com/archiverjs/node-archiver/blob/master/LICENSE}
 * @copyright (c) 2012-2014 Chris Talkington, contributors.
 */
    var r = n(4), i = n(1064), o = n(1068), a = n(1), s = n(205), l = n(5).inherits, c = n(1087), u = n(38).Transform, d = "win32" === process.platform, h = function(e, t) {
        if (!(this instanceof h)) return new h(e, t);
        "string" != typeof e && (t = e, e = "zip"), t = this.options = s.defaults(t, {
            highWaterMark: 1048576,
            statConcurrency: 4
        }), u.call(this, t), this._format = !1, this._module = !1, this._pending = 0, this._pointer = 0, 
        this._entriesCount = 0, this._entriesProcessedCount = 0, this._fsEntriesTotalBytes = 0, 
        this._fsEntriesProcessedBytes = 0, this._queue = o.queue(this._onQueueTask.bind(this), 1), 
        this._queue.drain(this._onQueueDrain.bind(this)), this._statQueue = o.queue(this._onStatQueueTask.bind(this), t.statConcurrency), 
        this._statQueue.drain(this._onQueueDrain.bind(this)), this._state = {
            aborted: !1,
            finalize: !1,
            finalizing: !1,
            finalized: !1,
            modulePiped: !1
        }, this._streams = [];
    };
    l(h, u), h.prototype._abort = function() {
        this._state.aborted = !0, this._queue.kill(), this._statQueue.kill(), this._queue.idle() && this._shutdown();
    }, h.prototype._append = function(e, t) {
        var n = {
            source: null,
            filepath: e
        };
        (t = t || {}).name || (t.name = e), t.sourcePath = e, n.data = t, this._entriesCount++, 
        t.stats && t.stats instanceof r.Stats ? (n = this._updateQueueTaskWithStats(n, t.stats)) && (t.stats.size && (this._fsEntriesTotalBytes += t.stats.size), 
        this._queue.push(n)) : this._statQueue.push(n);
    }, h.prototype._finalize = function() {
        this._state.finalizing || this._state.finalized || this._state.aborted || (this._state.finalizing = !0, 
        this._moduleFinalize(), this._state.finalizing = !1, this._state.finalized = !0);
    }, h.prototype._maybeFinalize = function() {
        return !(this._state.finalizing || this._state.finalized || this._state.aborted) && (!!(this._state.finalize && 0 === this._pending && this._queue.idle() && this._statQueue.idle()) && (this._finalize(), 
        !0));
    }, h.prototype._moduleAppend = function(e, t, n) {
        this._state.aborted ? n() : this._module.append(e, t, function(e) {
            if (this._task = null, this._state.aborted) this._shutdown(); else {
                if (e) return this.emit("error", e), void setImmediate(n);
                this.emit("entry", t), this._entriesProcessedCount++, t.stats && t.stats.size && (this._fsEntriesProcessedBytes += t.stats.size), 
                this.emit("progress", {
                    entries: {
                        total: this._entriesCount,
                        processed: this._entriesProcessedCount
                    },
                    fs: {
                        totalBytes: this._fsEntriesTotalBytes,
                        processedBytes: this._fsEntriesProcessedBytes
                    }
                }), setImmediate(n);
            }
        }.bind(this));
    }, h.prototype._moduleFinalize = function() {
        "function" == typeof this._module.finalize ? this._module.finalize() : "function" == typeof this._module.end ? this._module.end() : this.emit("error", new c("NOENDMETHOD"));
    }, h.prototype._modulePipe = function() {
        this._module.on("error", this._onModuleError.bind(this)), this._module.pipe(this), 
        this._state.modulePiped = !0;
    }, h.prototype._moduleSupports = function(e) {
        return !(!this._module.supports || !this._module.supports[e]) && this._module.supports[e];
    }, h.prototype._moduleUnpipe = function() {
        this._module.unpipe(this), this._state.modulePiped = !1;
    }, h.prototype._normalizeEntryData = function(e, t) {
        e = s.defaults(e, {
            type: "file",
            name: null,
            date: null,
            mode: null,
            prefix: null,
            sourcePath: null,
            stats: !1
        }), t && !1 === e.stats && (e.stats = t);
        var n = "directory" === e.type;
        return e.name && ("string" == typeof e.prefix && "" !== e.prefix && (e.name = e.prefix + "/" + e.name, 
        e.prefix = null), e.name = s.sanitizePath(e.name), "symlink" !== e.type && "/" === e.name.slice(-1) ? (n = !0, 
        e.type = "directory") : n && (e.name += "/")), "number" == typeof e.mode ? e.mode &= d ? 511 : 4095 : e.stats && null === e.mode ? (e.mode = d ? 511 & e.stats.mode : 4095 & e.stats.mode, 
        d && n && (e.mode = 493)) : null === e.mode && (e.mode = n ? 493 : 420), e.stats && null === e.date ? e.date = e.stats.mtime : e.date = s.dateify(e.date), 
        e;
    }, h.prototype._onModuleError = function(e) {
        this.emit("error", e);
    }, h.prototype._onQueueDrain = function() {
        this._state.finalizing || this._state.finalized || this._state.aborted || this._state.finalize && 0 === this._pending && this._queue.idle() && this._statQueue.idle() && this._finalize();
    }, h.prototype._onQueueTask = function(e, t) {
        var n = () => {
            e.data.callback && e.data.callback(), t();
        };
        this._state.finalizing || this._state.finalized || this._state.aborted ? n() : (this._task = e, 
        this._moduleAppend(e.source, e.data, n));
    }, h.prototype._onStatQueueTask = function(e, t) {
        this._state.finalizing || this._state.finalized || this._state.aborted ? t() : r.lstat(e.filepath, function(n, r) {
            if (this._state.aborted) setImmediate(t); else {
                if (n) return this._entriesCount--, this.emit("warning", n), void setImmediate(t);
                (e = this._updateQueueTaskWithStats(e, r)) && (r.size && (this._fsEntriesTotalBytes += r.size), 
                this._queue.push(e)), setImmediate(t);
            }
        }.bind(this));
    }, h.prototype._shutdown = function() {
        this._moduleUnpipe(), this.end();
    }, h.prototype._transform = function(e, t, n) {
        e && (this._pointer += e.length), n(null, e);
    }, h.prototype._updateQueueTaskWithStats = function(e, t) {
        if (t.isFile()) e.data.type = "file", e.data.sourceType = "stream", e.source = s.lazyReadStream(e.filepath); else if (t.isDirectory() && this._moduleSupports("directory")) e.data.name = s.trailingSlashIt(e.data.name), 
        e.data.type = "directory", e.data.sourcePath = s.trailingSlashIt(e.filepath), e.data.sourceType = "buffer", 
        e.source = Buffer.concat([]); else {
            if (!t.isSymbolicLink() || !this._moduleSupports("symlink")) return t.isDirectory() ? this.emit("warning", new c("DIRECTORYNOTSUPPORTED", e.data)) : t.isSymbolicLink() ? this.emit("warning", new c("SYMLINKNOTSUPPORTED", e.data)) : this.emit("warning", new c("ENTRYNOTSUPPORTED", e.data)), 
            null;
            var n = r.readlinkSync(e.filepath), i = a.dirname(e.filepath);
            e.data.type = "symlink", e.data.linkname = a.relative(i, a.resolve(i, n)), e.data.sourceType = "buffer", 
            e.source = Buffer.concat([]);
        }
        return e.data = this._normalizeEntryData(e.data, t), e;
    }, h.prototype.abort = function() {
        return this._state.aborted || this._state.finalized || this._abort(), this;
    }, h.prototype.append = function(e, t) {
        if (this._state.finalize || this._state.aborted) return this.emit("error", new c("QUEUECLOSED")), 
        this;
        if ("string" != typeof (t = this._normalizeEntryData(t)).name || 0 === t.name.length) return this.emit("error", new c("ENTRYNAMEREQUIRED")), 
        this;
        if ("directory" === t.type && !this._moduleSupports("directory")) return this.emit("error", new c("DIRECTORYNOTSUPPORTED", {
            name: t.name
        })), this;
        if (e = s.normalizeInputSource(e), Buffer.isBuffer(e)) t.sourceType = "buffer"; else {
            if (!s.isStream(e)) return this.emit("error", new c("INPUTSTEAMBUFFERREQUIRED", {
                name: t.name
            })), this;
            t.sourceType = "stream";
        }
        return this._entriesCount++, this._queue.push({
            data: t,
            source: e
        }), this;
    }, h.prototype.directory = function(e, t, n) {
        if (this._state.finalize || this._state.aborted) return this.emit("error", new c("QUEUECLOSED")), 
        this;
        if ("string" != typeof e || 0 === e.length) return this.emit("error", new c("DIRECTORYDIRPATHREQUIRED")), 
        this;
        this._pending++, !1 === t ? t = "" : "string" != typeof t && (t = e);
        var r = !1;
        "function" == typeof n ? (r = n, n = {}) : "object" != typeof n && (n = {});
        var o = i(e, {
            stat: !0,
            dot: !0
        });
        return o.on("error", function(e) {
            this.emit("error", e);
        }.bind(this)), o.on("match", function(i) {
            o.pause();
            var a = !1, s = Object.assign({}, n);
            s.name = i.relative, s.prefix = t, s.stats = i.stat, s.callback = o.resume.bind(o);
            try {
                if (r) if (!1 === (s = r(s))) a = !0; else if ("object" != typeof s) throw new c("DIRECTORYFUNCTIONINVALIDDATA", {
                    dirpath: e
                });
            } catch (e) {
                return void this.emit("error", e);
            }
            a ? o.resume() : this._append(i.absolute, s);
        }.bind(this)), o.on("end", function() {
            this._pending--, this._maybeFinalize();
        }.bind(this)), this;
    }, h.prototype.file = function(e, t) {
        return this._state.finalize || this._state.aborted ? (this.emit("error", new c("QUEUECLOSED")), 
        this) : "string" != typeof e || 0 === e.length ? (this.emit("error", new c("FILEFILEPATHREQUIRED")), 
        this) : (this._append(e, t), this);
    }, h.prototype.glob = function(e, t, n) {
        this._pending++, t = s.defaults(t, {
            stat: !0,
            pattern: e
        });
        var r = i(t.cwd || ".", t);
        return r.on("error", function(e) {
            this.emit("error", e);
        }.bind(this)), r.on("match", function(e) {
            r.pause();
            var t = Object.assign({}, n);
            t.callback = r.resume.bind(r), t.stats = e.stat, t.name = e.relative, this._append(e.absolute, t);
        }.bind(this)), r.on("end", function() {
            this._pending--, this._maybeFinalize();
        }.bind(this)), this;
    }, h.prototype.finalize = function() {
        if (this._state.aborted) {
            var e = new c("ABORTED");
            return this.emit("error", e), Promise.reject(e);
        }
        if (this._state.finalize) {
            var t = new c("FINALIZING");
            return this.emit("error", t), Promise.reject(t);
        }
        this._state.finalize = !0, 0 === this._pending && this._queue.idle() && this._statQueue.idle() && this._finalize();
        var n = this;
        return new Promise(function(e, t) {
            var r;
            n._module.on("end", function() {
                r || e();
            }), n._module.on("error", function(e) {
                r = !0, t(e);
            });
        });
    }, h.prototype.setFormat = function(e) {
        return this._format ? (this.emit("error", new c("FORMATSET")), this) : (this._format = e, 
        this);
    }, h.prototype.setModule = function(e) {
        return this._state.aborted ? (this.emit("error", new c("ABORTED")), this) : this._state.module ? (this.emit("error", new c("MODULESET")), 
        this) : (this._module = e, this._modulePipe(), this);
    }, h.prototype.symlink = function(e, t, n) {
        if (this._state.finalize || this._state.aborted) return this.emit("error", new c("QUEUECLOSED")), 
        this;
        if ("string" != typeof e || 0 === e.length) return this.emit("error", new c("SYMLINKFILEPATHREQUIRED")), 
        this;
        if ("string" != typeof t || 0 === t.length) return this.emit("error", new c("SYMLINKTARGETREQUIRED", {
            filepath: e
        })), this;
        if (!this._moduleSupports("symlink")) return this.emit("error", new c("SYMLINKNOTSUPPORTED", {
            filepath: e
        })), this;
        var r = {
            type: "symlink"
        };
        return r.name = e.replace(/\\/g, "/"), r.linkname = t.replace(/\\/g, "/"), r.sourceType = "buffer", 
        "number" == typeof n && (r.mode = n), this._entriesCount++, this._queue.push({
            data: r,
            source: Buffer.concat([])
        }), this;
    }, h.prototype.pointer = function() {
        return this._pointer;
    }, h.prototype.use = function(e) {
        return this._streams.push(e), this;
    }, e.exports = h;
}
