// analysis/pretty/main.js:129109; webpack module 1686
function(e, t, n) {
    "use strict";
    const r = n(174), i = n(794);
    e.exports = (e, t, n) => {
        const a = r(e);
        if (!a.file) throw new TypeError("file is required");
        if (a.gzip || a.brotli || a.file.endsWith(".br") || a.file.endsWith(".tbr")) throw new TypeError("cannot append to compressed archives");
        if (!t || !Array.isArray(t) || !t.length) throw new TypeError("no files or directories specified");
        return t = Array.from(t), o(a), i(a, t, n);
    };
    const o = e => {
        const t = e.filter;
        e.mtimeCache || (e.mtimeCache = new Map), e.filter = t ? (n, r) => t(n, r) && !(e.mtimeCache.get(n) > r.mtime) : (t, n) => !(e.mtimeCache.get(t) > n.mtime);
    };
}
