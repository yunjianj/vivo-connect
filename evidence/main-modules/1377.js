// analysis/pretty/main.js:102540; webpack module 1377
function(e, t, n) {
    "use strict";
    const r = n(1);
    e.exports.checkPath = function(e) {
        if ("win32" === process.platform) {
            if (/[<>:"|?*]/.test(e.replace(r.parse(e).root, ""))) {
                const t = new Error("Path contains invalid characters: " + e);
                throw t.code = "EINVAL", t;
            }
        }
    };
}
