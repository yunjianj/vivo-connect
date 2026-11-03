// analysis/pretty/main.js:103594; webpack module 1407
function(e, t, n) {
    "use strict";
    e.exports = function(e) {
        const t = e.length;
        let n = 0;
        for (;n < t; ) if (0 == (128 & e[n])) n++; else if (192 == (224 & e[n])) {
            if (n + 1 === t || 128 != (192 & e[n + 1]) || 192 == (254 & e[n])) return !1;
            n += 2;
        } else if (224 == (240 & e[n])) {
            if (n + 2 >= t || 128 != (192 & e[n + 1]) || 128 != (192 & e[n + 2]) || 224 === e[n] && 128 == (224 & e[n + 1]) || 237 === e[n] && 160 == (224 & e[n + 1])) return !1;
            n += 3;
        } else {
            if (240 != (248 & e[n])) return !1;
            if (n + 3 >= t || 128 != (192 & e[n + 1]) || 128 != (192 & e[n + 2]) || 128 != (192 & e[n + 3]) || 240 === e[n] && 128 == (240 & e[n + 1]) || 244 === e[n] && e[n + 1] > 143 || e[n] > 244) return !1;
            n += 4;
        }
        return !0;
    };
}
