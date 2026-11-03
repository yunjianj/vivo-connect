// analysis/pretty/main.js:102950; webpack module 1386
function(e, t, n) {
    "use strict";
    const r = n(20);
    e.exports = {
        symlinkType: function(e, t, n) {
            if (n = "function" == typeof t ? t : n, t = "function" != typeof t && t) return n(null, t);
            r.lstat(e, (e, r) => {
                if (e) return n(null, "file");
                t = r && r.isDirectory() ? "dir" : "file", n(null, t);
            });
        },
        symlinkTypeSync: function(e, t) {
            let n;
            if (t) return t;
            try {
                n = r.lstatSync(e);
            } catch {
                return "file";
            }
            return n && n.isDirectory() ? "dir" : "file";
        }
    };
}
