// analysis/pretty/main.js:94657; webpack module 1202
function(e, t, n) {
    var r, i = n(1203), o = n(1237), a = n(1238);
    function s(e, t) {
        t = t || {};
        var s = (r = r || function() {
            var e = new i({
                allErrors: !0
            });
            return e.addMetaSchema(n(1257)), e.addSchema(a), e;
        }()).getSchema(e + ".json");
        return new Promise(function(e, n) {
            s(t) ? e(t) : n(new o(s.errors));
        });
    }
    t.afterRequest = function(e) {
        return s("afterRequest", e);
    }, t.beforeRequest = function(e) {
        return s("beforeRequest", e);
    }, t.browser = function(e) {
        return s("browser", e);
    }, t.cache = function(e) {
        return s("cache", e);
    }, t.content = function(e) {
        return s("content", e);
    }, t.cookie = function(e) {
        return s("cookie", e);
    }, t.creator = function(e) {
        return s("creator", e);
    }, t.entry = function(e) {
        return s("entry", e);
    }, t.har = function(e) {
        return s("har", e);
    }, t.header = function(e) {
        return s("header", e);
    }, t.log = function(e) {
        return s("log", e);
    }, t.page = function(e) {
        return s("page", e);
    }, t.pageTimings = function(e) {
        return s("pageTimings", e);
    }, t.postData = function(e) {
        return s("postData", e);
    }, t.query = function(e) {
        return s("query", e);
    }, t.request = function(e) {
        return s("request", e);
    }, t.response = function(e) {
        return s("response", e);
    }, t.timings = function(e) {
        return s("timings", e);
    };
}
