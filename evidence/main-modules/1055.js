// analysis/pretty/main.js:83705; webpack module 1055
function(e, t, n) {
    "use strict";
    var r = n(4), i = n(8), o = n(1), a = n(5), s = n(30), l = n(1056), c = n(27).MESSAGE, u = n(9).PassThrough, d = n(120), h = {
        json: !1,
        colorize: !1,
        eol: i.EOL,
        logstash: null,
        prettyPrint: !1,
        label: null,
        stringify: !1,
        depth: null,
        showLevel: !0,
        timestamp: function() {
            return (new Date).toISOString();
        }
    }, p = function(e) {
        if (e = e || {}, d.call(this, e), this.options = Object.assign({}, h, e), e.stream) !function(t) {
            Array.prototype.slice.call(arguments, 1).forEach(function(n) {
                if (e[n]) throw new Error("Cannot set " + n + " and " + t + " together");
            });
        }("stream", "filename", "maxsize"), this.logStream = new u, this.logStream.pipe(e.stream); else {
            if (this.filename = e.filename ? o.basename(e.filename) : "winston.log", this.dirname = e.dirname || o.dirname(e.filename), 
            a = this.filename, /["<>|:*?\\/\x00\x01\x02\x03\x04\x05\x06\x07\x08\x09\x0a\x0b\x0c\x0d\x0e\x0f\x10\x11\x12\x13\x14\x15\x16\x17\x18\x19\x1a\x1b\x1c\x1d\x1e\x1f]/g.test(a) || (i = this.dirname, 
            /["<>|\x00\x01\x02\x03\x04\x05\x06\x07\x08\x09\x0a\x0b\x0c\x0d\x0e\x0f\x10\x11\x12\x13\x14\x15\x16\x17\x18\x19\x1a\x1b\x1c\x1d\x1e\x1f]/g.test(i))) throw new Error("Your path or filename contain an invalid character.");
            var t = this;
            this.logStream = n(1057).getStream({
                filename: o.join(this.dirname, this.filename),
                frequency: e.frequency ? e.frequency : "custom",
                date_format: e.datePattern ? e.datePattern : "YYYY-MM-DD",
                verbose: !1,
                size: function(e) {
                    if (e && "string" == typeof e) {
                        if (e.toLowerCase().match(/^((?:0\.)?\d+)([k|m|g])$/)) return e;
                    } else if (e && Number.isInteger(e)) {
                        var t = Math.round(e / 1024);
                        return 0 === t ? "1k" : t + "k";
                    }
                    return null;
                }(e.maxSize),
                max_logs: e.maxFiles,
                end_stream: !0,
                audit_file: e.auditFile ? e.auditFile : o.join(t.dirname, "." + l(e) + "-audit.json"),
                file_options: e.options ? e.options : {
                    flags: "a"
                },
                utc: !!e.utc && e.utc,
                extension: e.extension ? e.extension : "",
                create_symlink: !!e.createSymlink && e.createSymlink,
                symlink_name: e.symlinkName ? e.symlinkName : "current.log",
                watch_log: !!e.watchLog && e.watchLog
            }), this.logStream.on("new", function(e) {
                t.emit("new", e);
            }), this.logStream.on("rotate", function(e, n) {
                t.emit("rotate", e, n);
            }), this.logStream.on("logRemoved", function(n) {
                if (e.zippedArchive) {
                    var i = n.name + ".gz";
                    if (r.existsSync(i)) {
                        try {
                            r.unlinkSync(i);
                        } catch (e) {}
                        return void t.emit("logRemoved", i);
                    }
                }
                t.emit("logRemoved", n.name);
            }), e.zippedArchive && this.logStream.on("rotate", function(e) {
                var n = r.existsSync(e), i = r.existsSync(e + ".gz");
                if (n && !i) {
                    var o = s.createGzip(), a = r.createReadStream(e), l = r.createWriteStream(e + ".gz");
                    a.pipe(o).pipe(l).on("finish", function() {
                        r.existsSync(e) && r.unlinkSync(e), t.emit("archive", e + ".gz");
                    });
                }
            }), e.watchLog && this.logStream.on("addWatcher", e => {
                t.emit("addWatcher", e);
            });
        }
        var i, a;
    };
    e.exports = p, a.inherits(p, d), p.prototype.name = "dailyRotateFile";
    var f = function() {};
    p.prototype.log = function(e, t) {
        t = t || f, this.logStream.write(e[c] + this.options.eol), this.emit("logged", e), 
        t(null, !0);
    }, p.prototype.close = function() {
        var e = this;
        this.logStream && this.logStream.end(function() {
            e.emit("finish");
        });
    }, p.prototype.query = function(e, t) {
        if ("function" == typeof e && (t = e, e = {}), !this.options.json) throw new Error("query() may not be used without the json option being set to true");
        if (!this.filename) throw new Error("query() may not be used when initializing with a stream");
        var n = this, i = [];
        (e = e || {}).rows = e.rows || e.limit || 10, e.start = e.start || 0, e.until = e.until || new Date, 
        "object" != typeof e.until && (e.until = new Date(e.until)), e.from = e.from || e.until - 864e5, 
        "object" != typeof e.from && (e.from = new Date(e.from)), e.order = e.order || "desc";
        var a, l = (a = new RegExp(n.filename.replace("%DATE%", ".*"), "i"), r.readdirSync(n.dirname).filter(function(e) {
            return o.basename(e).match(a);
        }));
        0 === l.length && t && t(null, i), function a(c) {
            if (c) {
                var d, h = o.join(n.dirname, c), p = "";
                c.endsWith(".gz") ? (d = new u, r.createReadStream(h).pipe(s.createGunzip()).pipe(d)) : d = r.createReadStream(h, {
                    encoding: "utf8"
                }), d.on("error", function(e) {
                    if (d.readable && d.destroy(), t) return "ENOENT" === e.code ? t(null, i) : t(e);
                }), d.on("data", function(e) {
                    for (var t = (e = (p + e).split(/\n+/)).length - 1, n = 0; n < t; n++) f(e[n]);
                    p = e[t];
                }), d.on("end", function() {
                    if (p && f(p, !0), l.length) a(l.shift()); else if (t) {
                        i.sort(function(e, t) {
                            var n = new Date(e.timestamp).getTime(), r = new Date(t.timestamp).getTime();
                            return n > r ? 1 : n < r ? -1 : 0;
                        }), "desc" === e.order && (i = i.reverse());
                        var n = e.start || 0, r = e.limit || i.length;
                        i = i.slice(n, n + r), e.fields && (i = i.map(function(t) {
                            var n = {};
                            return e.fields.forEach(function(e) {
                                n[e] = t[e];
                            }), n;
                        })), t(null, i);
                    }
                });
            }
            function f(t, n) {
                try {
                    var r = JSON.parse(t);
                    if (!r || "object" != typeof r) return;
                    var o = new Date(r.timestamp);
                    if (e.from && o < e.from || e.until && o > e.until || e.level && e.level !== r.level) return;
                    i.push(r);
                } catch (e) {
                    n || d.emit("error", e);
                }
            }
        }(l.shift());
    };
}
