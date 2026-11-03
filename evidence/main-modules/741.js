// analysis/pretty/main.js:66828; webpack module 741
function(e, t, n) {
    "use strict";
    const r = n(4);
    let i;
    e.exports = () => (void 0 === i && (i = function() {
        try {
            return r.statSync("/.dockerenv"), !0;
        } catch (e) {
            return !1;
        }
    }() || function() {
        try {
            return r.readFileSync("/proc/self/cgroup", "utf8").includes("docker");
        } catch (e) {
            return !1;
        }
    }()), i);
}
