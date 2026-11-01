// analysis/pretty/main.js:56362; webpack module 592
function(e, t, n) {
    function r(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
    }
    t.setopts = function(e, t, n) {
        n || (n = {});
        if (n.matchBase && -1 === t.indexOf("/")) {
            if (n.noglobstar) throw new Error("base matching requires globstar");
            t = "**/" + t;
        }
        e.silent = !!n.silent, e.pattern = t, e.strict = !1 !== n.strict, e.realpath = !!n.realpath, 
        e.realpathCache = n.realpathCache || Object.create(null), e.follow = !!n.follow, 
        e.dot = !!n.dot, e.mark = !!n.mark, e.nodir = !!n.nodir, e.nodir && (e.mark = !0);
        e.sync = !!n.sync, e.nounique = !!n.nounique, e.nonull = !!n.nonull, e.nosort = !!n.nosort, 
        e.nocase = !!n.nocase, e.stat = !!n.stat, e.noprocess = !!n.noprocess, e.absolute = !!n.absolute, 
        e.fs = n.fs || i, e.maxLength = n.maxLength || 1 / 0, e.cache = n.cache || Object.create(null), 
        e.statCache = n.statCache || Object.create(null), e.symlinks = n.symlinks || Object.create(null), 
        function(e, t) {
            e.ignore = t.ignore || [], Array.isArray(e.ignore) || (e.ignore = [ e.ignore ]);
            e.ignore.length && (e.ignore = e.ignore.map(u));
        }(e, n), e.changedCwd = !1;
        var a = process.cwd();
        r(n, "cwd") ? (e.cwd = o.resolve(n.cwd), e.changedCwd = e.cwd !== a) : e.cwd = a;
        e.root = n.root || o.resolve(e.cwd, "/"), e.root = o.resolve(e.root), "win32" === process.platform && (e.root = e.root.replace(/\\/g, "/"));
        e.cwdAbs = s(e.cwd) ? e.cwd : d(e, e.cwd), "win32" === process.platform && (e.cwdAbs = e.cwdAbs.replace(/\\/g, "/"));
        e.nomount = !!n.nomount, n.nonegate = !0, n.nocomment = !0, n.allowWindowsEscape = !1, 
        e.minimatch = new l(t, n), e.options = e.minimatch.options;
    }, t.ownProp = r, t.makeAbs = d, t.finish = function(e) {
        for (var t = e.nounique, n = t ? [] : Object.create(null), r = 0, i = e.matches.length; r < i; r++) {
            var o = e.matches[r];
            if (o && 0 !== Object.keys(o).length) {
                var a = Object.keys(o);
                t ? n.push.apply(n, a) : a.forEach(function(e) {
                    n[e] = !0;
                });
            } else if (e.nonull) {
                var s = e.minimatch.globSet[r];
                t ? n.push(s) : n[s] = !0;
            }
        }
        t || (n = Object.keys(n));
        e.nosort || (n = n.sort(c));
        if (e.mark) {
            for (r = 0; r < n.length; r++) n[r] = e._mark(n[r]);
            e.nodir && (n = n.filter(function(t) {
                var n = !/\/$/.test(t), r = e.cache[t] || e.cache[d(e, t)];
                return n && r && (n = "DIR" !== r && !Array.isArray(r)), n;
            }));
        }
        e.ignore.length && (n = n.filter(function(t) {
            return !h(e, t);
        }));
        e.found = n;
    }, t.mark = function(e, t) {
        var n = d(e, t), r = e.cache[n], i = t;
        if (r) {
            var o = "DIR" === r || Array.isArray(r), a = "/" === t.slice(-1);
            if (o && !a ? i += "/" : !o && a && (i = i.slice(0, -1)), i !== t) {
                var s = d(e, i);
                e.statCache[s] = e.statCache[n], e.cache[s] = e.cache[n];
            }
        }
        return i;
    }, t.isIgnored = h, t.childrenIgnored = function(e, t) {
        return !!e.ignore.length && e.ignore.some(function(e) {
            return !(!e.gmatcher || !e.gmatcher.match(t));
        });
    };
    var i = n(4), o = n(1), a = n(278), s = n(279), l = a.Minimatch;
    function c(e, t) {
        return e.localeCompare(t, "en");
    }
    function u(e) {
        var t = null;
        if ("/**" === e.slice(-3)) {
            var n = e.replace(/(\/\*\*)+$/, "");
            t = new l(n, {
                dot: !0
            });
        }
        return {
            matcher: new l(e, {
                dot: !0
            }),
            gmatcher: t
        };
    }
    function d(e, t) {
        var n = t;
        return n = "/" === t.charAt(0) ? o.join(e.root, t) : s(t) || "" === t ? t : e.changedCwd ? o.resolve(e.cwd, t) : o.resolve(t), 
        "win32" === process.platform && (n = n.replace(/\\/g, "/")), n;
    }
    function h(e, t) {
        return !!e.ignore.length && e.ignore.some(function(e) {
            return e.matcher.match(t) || !(!e.gmatcher || !e.gmatcher.match(t));
        });
    }
}
