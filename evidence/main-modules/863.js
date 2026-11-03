// analysis/pretty/main.js:76808; webpack module 863
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    const r = n(1), i = n(143), o = n(390), a = {
        store: {},
        create: e => {
            const t = ("000000" + Math.floor(16777215 * Math.random()).toString(16)).slice(-6);
            return `${e}${`.tmp-${Date.now().toString().slice(-10)}${t}`}`;
        },
        get: (e, t, n = !0) => {
            const r = a.truncate(t(e));
            if (r in a.store) return a.get(e, t, n);
            a.store[r] = n;
            return [ r, () => delete a.store[r] ];
        },
        purge: e => {
            a.store[e] && (delete a.store[e], o.default.unlinkAttempt(e));
        },
        purgeSync: e => {
            a.store[e] && (delete a.store[e], o.default.unlinkSyncAttempt(e));
        },
        purgeSyncAll: () => {
            for (const e in a.store) a.purgeSync(e);
        },
        truncate: e => {
            const t = r.basename(e);
            if (t.length <= i.LIMIT_BASENAME_LENGTH) return e;
            const n = /^(\.?)(.*?)((?:\.[^.]+)?(?:\.tmp-\d{10}[a-f0-9]{6})?)$/.exec(t);
            if (!n) return e;
            const o = t.length - i.LIMIT_BASENAME_LENGTH;
            return `${e.slice(0, -t.length)}${n[1]}${n[2].slice(0, -o)}${n[3]}`;
        }
    };
    process.on("exit", a.purgeSyncAll), t.default = a;
}
