// analysis/pretty/main.js:87138; webpack module 1069
function(e, t, n) {
    var r = n(574), i = process.cwd, o = null, a = process.env.GRACEFUL_FS_PLATFORM || process.platform;
    process.cwd = function() {
        return o || (o = i.call(process)), o;
    };
    try {
        process.cwd();
    } catch (e) {}
    if ("function" == typeof process.chdir) {
        var s = process.chdir;
        process.chdir = function(e) {
            o = null, s.call(process, e);
        }, Object.setPrototypeOf && Object.setPrototypeOf(process.chdir, s);
    }
    e.exports = function(e) {
        r.hasOwnProperty("O_SYMLINK") && process.version.match(/^v0\.6\.[0-2]|^v0\.5\./) && function(e) {
            e.lchmod = function(t, n, i) {
                e.open(t, r.O_WRONLY | r.O_SYMLINK, n, function(t, r) {
                    t ? i && i(t) : e.fchmod(r, n, function(t) {
                        e.close(r, function(e) {
                            i && i(t || e);
                        });
                    });
                });
            }, e.lchmodSync = function(t, n) {
                var i, o = e.openSync(t, r.O_WRONLY | r.O_SYMLINK, n), a = !0;
                try {
                    i = e.fchmodSync(o, n), a = !1;
                } finally {
                    if (a) try {
                        e.closeSync(o);
                    } catch (e) {} else e.closeSync(o);
                }
                return i;
            };
        }(e);
        e.lutimes || function(e) {
            r.hasOwnProperty("O_SYMLINK") && e.futimes ? (e.lutimes = function(t, n, i, o) {
                e.open(t, r.O_SYMLINK, function(t, r) {
                    t ? o && o(t) : e.futimes(r, n, i, function(t) {
                        e.close(r, function(e) {
                            o && o(t || e);
                        });
                    });
                });
            }, e.lutimesSync = function(t, n, i) {
                var o, a = e.openSync(t, r.O_SYMLINK), s = !0;
                try {
                    o = e.futimesSync(a, n, i), s = !1;
                } finally {
                    if (s) try {
                        e.closeSync(a);
                    } catch (e) {} else e.closeSync(a);
                }
                return o;
            }) : e.futimes && (e.lutimes = function(e, t, n, r) {
                r && process.nextTick(r);
            }, e.lutimesSync = function() {});
        }(e);
        e.chown = i(e.chown), e.fchown = i(e.fchown), e.lchown = i(e.lchown), e.chmod = t(e.chmod), 
        e.fchmod = t(e.fchmod), e.lchmod = t(e.lchmod), e.chownSync = o(e.chownSync), e.fchownSync = o(e.fchownSync), 
        e.lchownSync = o(e.lchownSync), e.chmodSync = n(e.chmodSync), e.fchmodSync = n(e.fchmodSync), 
        e.lchmodSync = n(e.lchmodSync), e.stat = s(e.stat), e.fstat = s(e.fstat), e.lstat = s(e.lstat), 
        e.statSync = l(e.statSync), e.fstatSync = l(e.fstatSync), e.lstatSync = l(e.lstatSync), 
        e.chmod && !e.lchmod && (e.lchmod = function(e, t, n) {
            n && process.nextTick(n);
        }, e.lchmodSync = function() {});
        e.chown && !e.lchown && (e.lchown = function(e, t, n, r) {
            r && process.nextTick(r);
        }, e.lchownSync = function() {});
        "win32" === a && (e.rename = "function" != typeof e.rename ? e.rename : function(t) {
            function n(n, r, i) {
                var o = Date.now(), a = 0;
                t(n, r, function s(l) {
                    if (l && ("EACCES" === l.code || "EPERM" === l.code || "EBUSY" === l.code) && Date.now() - o < 6e4) return setTimeout(function() {
                        e.stat(r, function(e, o) {
                            e && "ENOENT" === e.code ? t(n, r, s) : i(l);
                        });
                    }, a), void (a < 100 && (a += 10));
                    i && i(l);
                });
            }
            return Object.setPrototypeOf && Object.setPrototypeOf(n, t), n;
        }(e.rename));
        function t(t) {
            return t ? function(n, r, i) {
                return t.call(e, n, r, function(e) {
                    c(e) && (e = null), i && i.apply(this, arguments);
                });
            } : t;
        }
        function n(t) {
            return t ? function(n, r) {
                try {
                    return t.call(e, n, r);
                } catch (e) {
                    if (!c(e)) throw e;
                }
            } : t;
        }
        function i(t) {
            return t ? function(n, r, i, o) {
                return t.call(e, n, r, i, function(e) {
                    c(e) && (e = null), o && o.apply(this, arguments);
                });
            } : t;
        }
        function o(t) {
            return t ? function(n, r, i) {
                try {
                    return t.call(e, n, r, i);
                } catch (e) {
                    if (!c(e)) throw e;
                }
            } : t;
        }
        function s(t) {
            return t ? function(n, r, i) {
                function o(e, t) {
                    t && (t.uid < 0 && (t.uid += 4294967296), t.gid < 0 && (t.gid += 4294967296)), i && i.apply(this, arguments);
                }
                return "function" == typeof r && (i = r, r = null), r ? t.call(e, n, r, o) : t.call(e, n, o);
            } : t;
        }
        function l(t) {
            return t ? function(n, r) {
                var i = r ? t.call(e, n, r) : t.call(e, n);
                return i && (i.uid < 0 && (i.uid += 4294967296), i.gid < 0 && (i.gid += 4294967296)), 
                i;
            } : t;
        }
        function c(e) {
            return !e || ("ENOSYS" === e.code || !(process.getuid && 0 === process.getuid() || "EINVAL" !== e.code && "EPERM" !== e.code));
        }
        e.read = "function" != typeof e.read ? e.read : function(t) {
            function n(n, r, i, o, a, s) {
                var l;
                if (s && "function" == typeof s) {
                    var c = 0;
                    l = function(u, d, h) {
                        if (u && "EAGAIN" === u.code && c < 10) return c++, t.call(e, n, r, i, o, a, l);
                        s.apply(this, arguments);
                    };
                }
                return t.call(e, n, r, i, o, a, l);
            }
            return Object.setPrototypeOf && Object.setPrototypeOf(n, t), n;
        }(e.read), e.readSync = "function" != typeof e.readSync ? e.readSync : (u = e.readSync, 
        function(t, n, r, i, o) {
            for (var a = 0; ;) try {
                return u.call(e, t, n, r, i, o);
            } catch (e) {
                if ("EAGAIN" === e.code && a < 10) {
                    a++;
                    continue;
                }
                throw e;
            }
        });
        var u;
    };
}
