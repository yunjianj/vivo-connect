// analysis/pretty/main.js:57411; webpack module 624
function(e, t, n) {
    "use strict";
    var r = n(1170), i = r.Cookie, o = r.CookieJar;
    function a(e) {
        this._jar = new o(e, {
            looseMode: !0
        });
    }
    t.parse = function(e) {
        if (e && e.uri && (e = e.uri), "string" != typeof e) throw new Error("The cookie function only accepts STRING as param");
        return i.parse(e, {
            loose: !0
        });
    }, a.prototype.setCookie = function(e, t, n) {
        return this._jar.setCookieSync(e, t, n || {});
    }, a.prototype.getCookieString = function(e) {
        return this._jar.getCookieStringSync(e);
    }, a.prototype.getCookies = function(e) {
        return this._jar.getCookiesSync(e);
    }, t.jar = function(e) {
        return new a(e);
    };
}
