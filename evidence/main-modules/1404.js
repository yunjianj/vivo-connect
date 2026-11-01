// analysis/pretty/main.js:103495; webpack module 1404
function(e, t, n) {
    "use strict";
    e.exports = {
        mask: (e, t, n, r, i) => {
            for (var o = 0; o < i; o++) n[r + o] = e[o] ^ t[3 & o];
        },
        unmask: (e, t) => {
            const n = e.length;
            for (var r = 0; r < n; r++) e[r] ^= t[3 & r];
        }
    };
}
