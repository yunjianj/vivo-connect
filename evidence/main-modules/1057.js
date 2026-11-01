// analysis/pretty/main.js:84107; webpack module 1057
function(e, t, n) {
    "use strict";
    /*!
 * FileStreamRotator
 * Copyright(c) 2012-2017 Holiday Extras.
 * Copyright(c) 2017 Roger C.
 * MIT Licensed
 */    var r = n(4), i = n(1), o = n(3), a = n(7), s = n(12), l = {};
    e.exports = l;
    var c = [ "daily", "test", "m", "h", "custom" ];
    function u(e, t) {
        if (e.hash === a.createHash(e.hashType).update(e.name + "LOG_FILE" + e.date).digest("hex")) try {
            r.existsSync(e.name) && r.unlinkSync(e.name);
        } catch (n) {
            t && console.error(new Date, "[FileStreamRotator] Could not remove old log file: ", e.name);
        }
    }
    l.getFrequency = function(e) {
        var t = e.toLowerCase().match(/^(\d+)([mh])$/);
        if (t) return function(e, t) {
            if ("number" == typeof t) {
                switch (e) {
                  case "m":
                    if (t < 0 || t > 60) return !1;
                    break;

                  case "h":
                    if (t < 0 || t > 24) return !1;
                }
                return {
                    type: e,
                    digit: t
                };
            }
        }(t[2], parseInt(t[1]));
        var n = function(e) {
            switch (e) {
              case "custom":
              case "daily":
                return {
                    type: e,
                    digit: void 0
                };

              case "test":
                return {
                    type: e,
                    digit: 0
                };
            }
            return !1;
        }(e);
        return n || !1;
    }, l.parseFileSize = function(e) {
        if (e && "string" == typeof e) {
            var t = e.toLowerCase().match(/^((?:0\.)?\d+)([kmg])$/);
            if (t) switch (t[2]) {
              case "k":
                return 1024 * t[1];

              case "m":
                return 1024 * t[1] * 1024;

              case "g":
                return 1024 * t[1] * 1024 * 1024;
            }
        }
        return null;
    }, l.getDate = function(e, t, n) {
        t = t || "YYYYMMDDHHmm";
        let r = n ? o.utc() : o().local();
        if (e && -1 !== c.indexOf(e.type)) switch (e.type) {
          case "m":
            var i = Math.floor(r.minutes() / e.digit) * e.digit;
            return r.minutes(i).format(t);

          case "h":
            var a = Math.floor(r.hour() / e.digit) * e.digit;
            return r.hour(a).format(t);

          case "daily":
          case "custom":
          case "test":
            return r.format(t);
        }
        return r.format(t);
    }, l.setAuditLog = function(e, t, n) {
        var o = null;
        if (e) {
            var a = e.toString().substr(-1), s = e.toString().match(/^(\d+)/);
            if (Number(s[1]) > 0) {
                var l = i.dirname(n.replace(/%DATE%.+/, "_filename"));
                try {
                    if (t) {
                        var c = i.resolve(t);
                        o = JSON.parse(r.readFileSync(c, {
                            encoding: "utf-8"
                        }));
                    } else {
                        c = i.resolve(l + "/.audit.json");
                        o = JSON.parse(r.readFileSync(c, {
                            encoding: "utf-8"
                        }));
                    }
                } catch (e) {
                    if ("ENOENT" !== e.code) return null;
                    o = {
                        keep: {
                            days: !1,
                            amount: Number(s[1])
                        },
                        auditLog: t || l + "/.audit.json",
                        files: []
                    };
                }
                o.keep = {
                    days: "d" === a,
                    amount: Number(s[1])
                };
            }
        }
        return o;
    }, l.writeAuditLog = function(e, t) {
        try {
            d(e.auditLog), r.writeFileSync(e.auditLog, JSON.stringify(e, null, 4));
        } catch (n) {
            t && console.error(new Date, "[FileStreamRotator] Failed to store log audit at:", e.auditLog, "Error:", n);
        }
    }, l.addLogToAudit = function(e, t, n, r) {
        if (t && t.files) {
            if (-1 !== t.files.findIndex(function(t) {
                return t.name === e;
            })) return t;
            var i = Date.now();
            if (t.files.push({
                date: i,
                name: e,
                hash: a.createHash(t.hashType).update(e + "LOG_FILE" + i).digest("hex")
            }), t.keep.days) {
                var s = o().subtract(t.keep.amount, "days").valueOf(), c = t.files.filter(function(e) {
                    return e.date > s || (e.hashType = t.hashType, u(e, r), n.emit("logRemoved", e), 
                    !1);
                });
                t.files = c;
            } else {
                var d = t.files.splice(-t.keep.amount);
                t.files.length > 0 && t.files.filter(function(e) {
                    return e.hashType = t.hashType, u(e, r), n.emit("logRemoved", e), !1;
                }), t.files = d;
            }
            l.writeAuditLog(t, r);
        }
        return t;
    }, l.getStream = function(e) {
        var t = null, a = null, u = this;
        if (!e.filename) return console.error(new Date, "[FileStreamRotator] No filename supplied. Defaulting to STDOUT"), 
        process.stdout;
        e.frequency && (t = u.getFrequency(e.frequency));
        let p = u.setAuditLog(e.max_logs, e.audit_file, e.filename);
        null != p && (p.hashType = void 0 !== e.audit_hash_type ? e.audit_hash_type : "md5"), 
        u.verbose = void 0 === e.verbose || e.verbose;
        var f = null, _ = 0, m = 0;
        e.size && (f = l.parseFileSize(e.size));
        var g = e.date_format || "YYYYMMDDHHmm";
        t && "daily" == t.type && (e.date_format || (g = "YYYY-MM-DD"), o().format(g) == o().endOf("day").format(g) && o().format(g) != o().add(1, "day").format(g) || (u.verbose && console.log(new Date, "[FileStreamRotator] Changing type to custom as date format changes more often than once a day or not every day"), 
        t.type = "custom")), t && (a = e.frequency ? u.getDate(t, g, e.utc) : ""), e.create_symlink = e.create_symlink || !1, 
        e.extension = e.extension || "";
        var v = e.filename, y = null, E = v + (a ? "." + a : "");
        if (v.match(/%DATE%/) && (E = v.replace(/%DATE%/g, a || u.getDate(null, g, e.utc))), 
        f) {
            var b = null, w = E;
            if (p && p.files && p.files instanceof Array && p.files.length > 0) {
                var S = p.files[p.files.length - 1].name;
                if (S.match(w)) {
                    var T = S.match(w + "\\.(\\d+)");
                    T && (w = S, _ = T[1]);
                }
            }
            for (0 == _ && w == E && (w += e.extension); r.existsSync(w); ) b = w, _++, w = E + "." + _ + e.extension;
            if (b) {
                var A = r.statSync(b);
                A.size < f && (w = b, _--, m = A.size);
            }
            E = w;
        } else E += e.extension;
        u.verbose && console.log(new Date, "[FileStreamRotator] Logging to: ", E), d(E);
        var O = e.file_options || {
            flags: "a"
        }, C = r.createWriteStream(E, O);
        if (a && t && c.indexOf(t.type) > -1 || f > 0) {
            u.verbose && console.log(new Date, "[FileStreamRotator] Rotating file: ", t ? t.type : "", f ? "size: " + f : "");
            var N, I = new s;
            return I.auditLog = p, I.end = function() {
                C.end.apply(C, arguments);
            }, h(C, I), I.on("close", function() {
                N && N.close();
            }), I.on("new", function(t) {
                I.auditLog = u.addLogToAudit(t, I.auditLog, I, u.verbose), e.create_symlink && function(e, t, n) {
                    let o = t || "current.log", a = i.dirname(e), s = i.basename(e), l = a + "/" + o;
                    try {
                        r.lstatSync(l).isSymbolicLink() && (r.unlinkSync(l), r.symlinkSync(s, l));
                    } catch (e) {
                        if (e && "ENOENT" == e.code) try {
                            r.symlinkSync(s, l);
                        } catch (e) {
                            n && console.error(new Date, "[FileStreamRotator] Could not create symlink file: ", l, " -> ", s);
                        }
                    }
                }(t, e.symlink_name, u.verbose), e.watch_log && I.emit("addWatcher", t);
            }), I.on("addWatcher", function(t) {
                N && N.close(), e.watch_log && (N = function(e, t, n) {
                    if (!e) return null;
                    try {
                        r.lstatSync(e);
                        return r.watch(e, function(t, i) {
                            if ("rename" == t) try {
                                r.lstatSync(e);
                            } catch (t) {
                                n(t, e);
                            }
                        });
                    } catch (n) {
                        t && console.log(new Date, "[FileStreamRotator] Could not add watcher for " + e);
                    }
                }(t, u.verbose, function(e, t) {
                    I.emit("createLog", t);
                }));
            }), I.on("createLog", function(e) {
                try {
                    r.lstatSync(e);
                } catch (t) {
                    C && "function" == C.end && C.end(), C = r.createWriteStream(e, O), I.emit("new", e), 
                    h(C, I);
                }
            }), I.write = function(i, o) {
                var s = t ? this.getDate(t, g, e.utc) : a;
                if (s != a || f && m > f) {
                    var l = v + (a && t ? "." + s : "");
                    v.match(/%DATE%/) && a && (l = v.replace(/%DATE%/g, s)), f && m > f ? l += "." + ++_ + e.extension : (_ = 0, 
                    l += e.extension), m = 0, u.verbose && console.log(new Date, n(5).format("[FileStreamRotator] Changing logs from %s to %s", E, l)), 
                    a = s, y = E, E = l, !0 === e.end_stream ? C.end() : C.destroy(), d(E), C = r.createWriteStream(l, O), 
                    I.emit("new", l), I.emit("rotate", y, l), h(C, I);
                }
                C.write(i, o), m += Buffer.byteLength(i, o);
            }.bind(this), process.nextTick(function() {
                I.emit("new", E);
            }), I.emit("new", E), I;
        }
        return u.verbose && console.log(new Date, "[FileStreamRotator] File won't be rotated: ", e.frequency, e.size), 
        process.nextTick(function() {
            C.emit("new", E);
        }), C;
    };
    var d = function(e) {
        i.dirname(e).split(i.sep).reduce(function(e, t) {
            if (e += t + i.sep, !r.existsSync(e)) try {
                r.mkdirSync(e);
            } catch (e) {
                if ("EEXIST" !== e.code) throw e;
            }
            return e;
        }, "");
    }, h = function(e, t) {
        e.on("close", function() {
            t.emit("close");
        }), e.on("finish", function() {
            t.emit("finish");
        }), e.on("error", function(e) {
            t.emit("error", e);
        }), e.on("open", function(e) {
            t.emit("open", e);
        });
    };
}
