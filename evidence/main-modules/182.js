// analysis/pretty/main.js:24360; webpack module 182
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    const r = n(117);
    t.default = class {
        static Encrypt(e) {
            let t = {
                iv: r.enc.Utf8.parse("7E2TPU4eZNAMjRYG"),
                mode: r.mode.CBC,
                padding: r.pad.ZeroPadding
            }, n = r.enc.Utf8.parse("7E2TPU4eZNAMjRYG");
            return r.AES.encrypt(e, n, t).ciphertext.toString().toUpperCase();
        }
        static Decrypt(e) {
            let t = {
                iv: r.enc.Utf8.parse("7E2TPU4eZNAMjRYG"),
                mode: r.mode.CBC,
                padding: r.pad.ZeroPadding
            }, n = r.enc.Utf8.parse("7E2TPU4eZNAMjRYG"), i = r.enc.Hex.parse(e), o = r.enc.Base64.stringify(i);
            return r.AES.decrypt(o, n, t).toString(r.enc.Utf8).toString();
        }
    };
}
