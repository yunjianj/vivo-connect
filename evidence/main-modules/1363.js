// analysis/pretty/main.js:101822; webpack module 1363
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.getAppCacheDir = function() {
        const e = (0, i.homedir)();
        let t;
        t = "win32" === process.platform ? process.env.LOCALAPPDATA || r.join(e, "AppData", "Local") : "darwin" === process.platform ? r.join(e, "Library", "Caches") : process.env.XDG_CACHE_HOME || r.join(e, ".cache");
        return t;
    };
    const r = n(1), i = n(8);
}
