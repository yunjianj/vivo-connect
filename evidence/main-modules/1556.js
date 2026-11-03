// analysis/pretty/main.js:119548; webpack module 1556
function(e, t, n) {
    "use strict";
    const r = n(8), i = n(4), o = n(741), a = () => {
        if ("linux" !== process.platform) return !1;
        if (r.release().toLowerCase().includes("microsoft")) return !o();
        try {
            return !!i.readFileSync("/proc/version", "utf8").toLowerCase().includes("microsoft") && !o();
        } catch (e) {
            return !1;
        }
    };
    process.env.__IS_WSL_TEST__ ? e.exports = a : e.exports = a();
}
