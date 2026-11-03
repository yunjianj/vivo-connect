// analysis/pretty/main.js:76570; webpack module 856
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.writeFileSync = t.writeFile = t.readFileSync = t.readFile = void 0;
    const r = n(1), i = n(143), o = n(390), a = n(861), s = n(862), l = n(863);
    t.readFile = function e(t, n = i.DEFAULT_READ_OPTIONS) {
        var r;
        if (a.default.isString(n)) return e(t, {
            encoding: n
        });
        const s = Date.now() + (null !== (r = n.timeout) && void 0 !== r ? r : i.DEFAULT_TIMEOUT_ASYNC);
        return o.default.readFileRetry(s)(t, n);
    }, t.readFileSync = function e(t, n = i.DEFAULT_READ_OPTIONS) {
        var r;
        if (a.default.isString(n)) return e(t, {
            encoding: n
        });
        const s = Date.now() + (null !== (r = n.timeout) && void 0 !== r ? r : i.DEFAULT_TIMEOUT_SYNC);
        return o.default.readFileSyncRetry(s)(t, n);
    };
    const c = (e, t, n, r) => {
        if (a.default.isFunction(n)) return c(e, t, i.DEFAULT_WRITE_OPTIONS, n);
        const o = u(e, t, n);
        return r && o.then(r, r), o;
    };
    t.writeFile = c;
    const u = async (e, t, n = i.DEFAULT_WRITE_OPTIONS) => {
        var c;
        if (a.default.isString(n)) return u(e, t, {
            encoding: n
        });
        const d = Date.now() + (null !== (c = n.timeout) && void 0 !== c ? c : i.DEFAULT_TIMEOUT_ASYNC);
        let h = null, p = null, f = null, _ = null, m = null;
        try {
            n.schedule && (h = await n.schedule(e)), p = await s.default.schedule(e), e = await o.default.realpathAttempt(e) || e, 
            [_, f] = l.default.get(e, n.tmpCreate || l.default.create, !(!1 === n.tmpPurge));
            const c = i.IS_POSIX && a.default.isUndefined(n.chown), u = a.default.isUndefined(n.mode);
            if (c || u) {
                const t = await o.default.statAttempt(e);
                t && (n = {
                    ...n
                }, c && (n.chown = {
                    uid: t.uid,
                    gid: t.gid
                }), u && (n.mode = t.mode));
            }
            const g = r.dirname(e);
            await o.default.mkdirAttempt(g, {
                mode: i.DEFAULT_FOLDER_MODE,
                recursive: !0
            }), m = await o.default.openRetry(d)(_, "w", n.mode || i.DEFAULT_FILE_MODE), n.tmpCreated && n.tmpCreated(_), 
            a.default.isString(t) ? await o.default.writeRetry(d)(m, t, 0, n.encoding || i.DEFAULT_ENCODING) : a.default.isUndefined(t) || await o.default.writeRetry(d)(m, t, 0, t.length, 0), 
            !1 !== n.fsync && (!1 !== n.fsyncWait ? await o.default.fsyncRetry(d)(m) : o.default.fsyncAttempt(m)), 
            await o.default.closeRetry(d)(m), m = null, n.chown && await o.default.chownAttempt(_, n.chown.uid, n.chown.gid), 
            n.mode && await o.default.chmodAttempt(_, n.mode);
            try {
                await o.default.renameRetry(d)(_, e);
            } catch (t) {
                if ("ENAMETOOLONG" !== t.code) throw t;
                await o.default.renameRetry(d)(_, l.default.truncate(e));
            }
            f(), _ = null;
        } finally {
            m && await o.default.closeAttempt(m), _ && l.default.purge(_), h && h(), p && p();
        }
    }, d = (e, t, n = i.DEFAULT_WRITE_OPTIONS) => {
        var s;
        if (a.default.isString(n)) return d(e, t, {
            encoding: n
        });
        const c = Date.now() + (null !== (s = n.timeout) && void 0 !== s ? s : i.DEFAULT_TIMEOUT_SYNC);
        let u = null, h = null, p = null;
        try {
            e = o.default.realpathSyncAttempt(e) || e, [h, u] = l.default.get(e, n.tmpCreate || l.default.create, !(!1 === n.tmpPurge));
            const s = i.IS_POSIX && a.default.isUndefined(n.chown), d = a.default.isUndefined(n.mode);
            if (s || d) {
                const t = o.default.statSyncAttempt(e);
                t && (n = {
                    ...n
                }, s && (n.chown = {
                    uid: t.uid,
                    gid: t.gid
                }), d && (n.mode = t.mode));
            }
            const f = r.dirname(e);
            o.default.mkdirSyncAttempt(f, {
                mode: i.DEFAULT_FOLDER_MODE,
                recursive: !0
            }), p = o.default.openSyncRetry(c)(h, "w", n.mode || i.DEFAULT_FILE_MODE), n.tmpCreated && n.tmpCreated(h), 
            a.default.isString(t) ? o.default.writeSyncRetry(c)(p, t, 0, n.encoding || i.DEFAULT_ENCODING) : a.default.isUndefined(t) || o.default.writeSyncRetry(c)(p, t, 0, t.length, 0), 
            !1 !== n.fsync && (!1 !== n.fsyncWait ? o.default.fsyncSyncRetry(c)(p) : o.default.fsyncAttempt(p)), 
            o.default.closeSyncRetry(c)(p), p = null, n.chown && o.default.chownSyncAttempt(h, n.chown.uid, n.chown.gid), 
            n.mode && o.default.chmodSyncAttempt(h, n.mode);
            try {
                o.default.renameSyncRetry(c)(h, e);
            } catch (t) {
                if ("ENAMETOOLONG" !== t.code) throw t;
                o.default.renameSyncRetry(c)(h, l.default.truncate(e));
            }
            u(), h = null;
        } finally {
            p && o.default.closeSyncAttempt(p), h && l.default.purge(h);
        }
    };
    t.writeFileSync = d;
}
