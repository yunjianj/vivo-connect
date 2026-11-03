// analysis/pretty/main.js:123626; webpack module 1631
function(e, t, n) {
    "use strict";
    var r = this && this.__importDefault || function(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    };
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = r(n(1632)), o = String.fromCodePoint || function(e) {
        var t = "";
        return e > 65535 && (e -= 65536, t += String.fromCharCode(e >>> 10 & 1023 | 55296), 
        e = 56320 | 1023 & e), t += String.fromCharCode(e);
    };
    t.default = function(e) {
        return e >= 55296 && e <= 57343 || e > 1114111 ? "�" : (e in i.default && (e = i.default[e]), 
        o(e));
    };
}
