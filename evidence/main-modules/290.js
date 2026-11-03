// analysis/pretty/main.js:32755; webpack module 290
function(e, t, n) {
    "use strict";
    var r = n(1175), i = n(7), o = n(37).Buffer, a = "undefined" == typeof setImmediate ? process.nextTick : setImmediate;
    t.paramsHaveRequestBody = function(e) {
        return e.body || e.requestBodyStream || e.json && "boolean" != typeof e.json || e.multipart;
    }, t.safeStringify = function(e, t) {
        var n;
        try {
            n = JSON.stringify(e, t);
        } catch (i) {
            n = r(e, t);
        }
        return n;
    }, t.md5 = function(e) {
        return i.createHash("md5").update(e).digest("hex");
    }, t.isReadStream = function(e) {
        return e.readable && e.path && e.mode;
    }, t.toBase64 = function(e) {
        return o.from(e || "", "utf8").toString("base64");
    }, t.copy = function(e) {
        var t = {};
        return Object.keys(e).forEach(function(n) {
            t[n] = e[n];
        }), t;
    }, t.version = function() {
        var e = process.version.replace("v", "").split(".");
        return {
            major: parseInt(e[0], 10),
            minor: parseInt(e[1], 10),
            patch: parseInt(e[2], 10)
        };
    }, t.defer = a;
}
