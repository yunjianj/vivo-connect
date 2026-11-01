// analysis/pretty/main.js:79891; webpack module 930
function(e, t, n) {
    "use strict";
    function r(e) {
        const t = e.length;
        let n, r = 0, i = 0;
        for (;i < t; ) r++, n = e.charCodeAt(i++), n >= 55296 && n <= 56319 && i < t && (n = e.charCodeAt(i), 
        56320 == (64512 & n) && i++);
        return r;
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = r, r.code = 'require("ajv/dist/runtime/ucs2length").default';
}
