// analysis/pretty/main.js:27477; webpack module 221
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.getAuthInfo = void 0;
    const r = n(0).__importDefault(n(6));
    t.getAuthInfo = function() {
        let e = r.default.getItem("userInfo") || {};
        return {
            openid: e.vivo_account_cookie_iqoo_openid,
            token: e.vivo_account_cookie_iqoo_vivotoken
        };
    };
}
