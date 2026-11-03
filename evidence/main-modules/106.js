// analysis/pretty/main.js:16835; webpack module 106
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.newBaseUrl = function(e) {
        const t = new r.URL(e);
        t.pathname.endsWith("/") || (t.pathname += "/");
        return t;
    }, t.newUrlFromBase = function(e, t, n = !1) {
        const i = new r.URL(e, t), o = t.search;
        null != o && 0 !== o.length ? i.search = o : n && (i.search = "noCache=" + Date.now().toString(32));
        return i;
    }, t.getChannelFilename = function(e) {
        return e + ".yml";
    };
    const r = n(15);
}
