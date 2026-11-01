// analysis/pretty/main.js:28588; webpack module 237
function(e, t, n) {
    "use strict";
    var r = n(114), i = n(1450), o = n(1460), a = {
        client: function(e, t) {
            return void 0 === (t = t || {}).masking && (t.masking = !0), new i(e, t);
        },
        server: function(e) {
            return void 0 === (e = e || {}).requireMasking && (e.requireMasking = !0), new o(e);
        },
        http: function() {
            return o.http.apply(o, arguments);
        },
        isSecureRequest: function(e) {
            return o.isSecureRequest(e);
        },
        isWebSocket: function(e) {
            return r.isWebSocket(e);
        },
        validateOptions: function(e, t) {
            r.validateOptions(e, t);
        }
    };
    e.exports = a;
}
