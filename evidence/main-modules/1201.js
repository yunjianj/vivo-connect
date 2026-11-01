// analysis/pretty/main.js:94600; webpack module 1201
function(e, t, n) {
    "use strict";
    var r = n(4), i = n(291), o = n(1202), a = n(289);
    function s(e) {
        this.request = e;
    }
    s.prototype.reducer = function(e, t) {
        if (void 0 === e[t.name]) return e[t.name] = t.value, e;
        var n = [ e[t.name], t.value ];
        return e[t.name] = n, e;
    }, s.prototype.prep = function(e) {
        if (e.queryObj = {}, e.headersObj = {}, e.postData.jsonObj = !1, e.postData.paramsObj = !1, 
        e.queryString && e.queryString.length && (e.queryObj = e.queryString.reduce(this.reducer, {})), 
        e.headers && e.headers.length && (e.headersObj = e.headers.reduceRight(function(e, t) {
            return e[t.name] = t.value, e;
        }, {})), e.cookies && e.cookies.length) {
            var t = e.cookies.map(function(e) {
                return e.name + "=" + e.value;
            });
            t.length && (e.headersObj.cookie = t.join("; "));
        }
        function n(t) {
            return t.some(function(t) {
                return 0 === e.postData.mimeType.indexOf(t);
            });
        }
        if (n([ "multipart/mixed", "multipart/related", "multipart/form-data", "multipart/alternative" ])) e.postData.mimeType = "multipart/form-data"; else if (n([ "application/x-www-form-urlencoded" ])) e.postData.params ? (e.postData.paramsObj = e.postData.params.reduce(this.reducer, {}), 
        e.postData.text = i.stringify(e.postData.paramsObj)) : e.postData.text = ""; else if (n([ "text/json", "text/x-json", "application/json", "application/x-json" ]) && (e.postData.mimeType = "application/json", 
        e.postData.text)) try {
            e.postData.jsonObj = JSON.parse(e.postData.text);
        } catch (t) {
            this.request.debug(t), e.postData.mimeType = "text/plain";
        }
        return e;
    }, s.prototype.options = function(e) {
        if (!e.har) return e;
        var t = {};
        if (a(t, e.har), t.log && t.log.entries && (t = t.log.entries[0]), t.url = t.url || e.url || e.uri || e.baseUrl || "/", 
        t.httpVersion = t.httpVersion || "HTTP/1.1", t.queryString = t.queryString || [], 
        t.headers = t.headers || [], t.cookies = t.cookies || [], t.postData = t.postData || {}, 
        t.postData.mimeType = t.postData.mimeType || "application/octet-stream", t.bodySize = 0, 
        t.headersSize = 0, t.postData.size = 0, !o.request(t)) return e;
        var n = this.prep(t);
        function i(e) {
            return 0 === n.postData.mimeType.indexOf(e);
        }
        return n.url && (e.url = n.url), n.method && (e.method = n.method), Object.keys(n.queryObj).length && (e.qs = n.queryObj), 
        Object.keys(n.headersObj).length && (e.headers = n.headersObj), i("application/x-www-form-urlencoded") ? e.form = n.postData.paramsObj : i("application/json") ? n.postData.jsonObj && (e.body = n.postData.jsonObj, 
        e.json = !0) : i("multipart/form-data") ? (e.formData = {}, n.postData.params.forEach(function(t) {
            var n = {};
            t.fileName || t.contentType ? (t.fileName && !t.value ? n.value = r.createReadStream(t.fileName) : t.value && (n.value = t.value), 
            t.fileName && (n.options = {
                filename: t.fileName,
                contentType: t.contentType ? t.contentType : null
            }), e.formData[t.name] = n) : e.formData[t.name] = t.value;
        })) : n.postData.text && (e.body = n.postData.text), e;
    }, t.Har = s;
}
