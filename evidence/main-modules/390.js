// analysis/pretty/main.js:41829; webpack module 390
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    const r = n(4), i = n(5), o = n(857), a = n(858), s = n(859), l = {
        chmodAttempt: o.attemptifyAsync(i.promisify(r.chmod), a.default.onChangeError),
        chownAttempt: o.attemptifyAsync(i.promisify(r.chown), a.default.onChangeError),
        closeAttempt: o.attemptifyAsync(i.promisify(r.close)),
        fsyncAttempt: o.attemptifyAsync(i.promisify(r.fsync)),
        mkdirAttempt: o.attemptifyAsync(i.promisify(r.mkdir)),
        realpathAttempt: o.attemptifyAsync(i.promisify(r.realpath)),
        statAttempt: o.attemptifyAsync(i.promisify(r.stat)),
        unlinkAttempt: o.attemptifyAsync(i.promisify(r.unlink)),
        closeRetry: s.retryifyAsync(i.promisify(r.close), a.default.isRetriableError),
        fsyncRetry: s.retryifyAsync(i.promisify(r.fsync), a.default.isRetriableError),
        openRetry: s.retryifyAsync(i.promisify(r.open), a.default.isRetriableError),
        readFileRetry: s.retryifyAsync(i.promisify(r.readFile), a.default.isRetriableError),
        renameRetry: s.retryifyAsync(i.promisify(r.rename), a.default.isRetriableError),
        statRetry: s.retryifyAsync(i.promisify(r.stat), a.default.isRetriableError),
        writeRetry: s.retryifyAsync(i.promisify(r.write), a.default.isRetriableError),
        chmodSyncAttempt: o.attemptifySync(r.chmodSync, a.default.onChangeError),
        chownSyncAttempt: o.attemptifySync(r.chownSync, a.default.onChangeError),
        closeSyncAttempt: o.attemptifySync(r.closeSync),
        mkdirSyncAttempt: o.attemptifySync(r.mkdirSync),
        realpathSyncAttempt: o.attemptifySync(r.realpathSync),
        statSyncAttempt: o.attemptifySync(r.statSync),
        unlinkSyncAttempt: o.attemptifySync(r.unlinkSync),
        closeSyncRetry: s.retryifySync(r.closeSync, a.default.isRetriableError),
        fsyncSyncRetry: s.retryifySync(r.fsyncSync, a.default.isRetriableError),
        openSyncRetry: s.retryifySync(r.openSync, a.default.isRetriableError),
        readFileSyncRetry: s.retryifySync(r.readFileSync, a.default.isRetriableError),
        renameSyncRetry: s.retryifySync(r.renameSync, a.default.isRetriableError),
        statSyncRetry: s.retryifySync(r.statSync, a.default.isRetriableError),
        writeSyncRetry: s.retryifySync(r.writeSync, a.default.isRetriableError)
    };
    t.default = l;
}
