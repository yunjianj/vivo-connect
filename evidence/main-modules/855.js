// analysis/pretty/main.js:76534; webpack module 855
function(e, t, n) {
    "use strict";
    const r = n(1), i = n(8), o = i.homedir(), a = i.tmpdir(), {env: s} = process, l = (e, t) => {
        if ("string" != typeof e) throw new TypeError("Expected string, got " + typeof e);
        return (t = Object.assign({
            suffix: "nodejs"
        }, t)).suffix && (e += "-" + t.suffix), "darwin" === process.platform ? (e => {
            const t = r.join(o, "Library");
            return {
                data: r.join(t, "Application Support", e),
                config: r.join(t, "Preferences", e),
                cache: r.join(t, "Caches", e),
                log: r.join(t, "Logs", e),
                temp: r.join(a, e)
            };
        })(e) : "win32" === process.platform ? (e => {
            const t = s.APPDATA || r.join(o, "AppData", "Roaming"), n = s.LOCALAPPDATA || r.join(o, "AppData", "Local");
            return {
                data: r.join(n, e, "Data"),
                config: r.join(t, e, "Config"),
                cache: r.join(n, e, "Cache"),
                log: r.join(n, e, "Log"),
                temp: r.join(a, e)
            };
        })(e) : (e => {
            const t = r.basename(o);
            return {
                data: r.join(s.XDG_DATA_HOME || r.join(o, ".local", "share"), e),
                config: r.join(s.XDG_CONFIG_HOME || r.join(o, ".config"), e),
                cache: r.join(s.XDG_CACHE_HOME || r.join(o, ".cache"), e),
                log: r.join(s.XDG_STATE_HOME || r.join(o, ".local", "state"), e),
                temp: r.join(a, t, e)
            };
        })(e);
    };
    e.exports = l, e.exports.default = l;
}
