// analysis/pretty/main.js:100766; webpack module 1332
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.parseDn = function(e) {
        let t = !1, n = null, r = "", i = 0;
        e = e.trim();
        const o = new Map;
        for (let a = 0; a <= e.length; a++) {
            if (a === e.length) {
                null !== n && o.set(n, r);
                break;
            }
            const s = e[a];
            if (t) {
                if ('"' === s) {
                    t = !1;
                    continue;
                }
            } else {
                if ('"' === s) {
                    t = !0;
                    continue;
                }
                if ("\\" === s) {
                    a++;
                    const t = parseInt(e.slice(a, a + 2), 16);
                    Number.isNaN(t) ? r += e[a] : (a++, r += String.fromCharCode(t));
                    continue;
                }
                if (null === n && "=" === s) {
                    n = r, r = "";
                    continue;
                }
                if ("," === s || ";" === s || "+" === s) {
                    null !== n && o.set(n, r), n = null, r = "";
                    continue;
                }
            }
            if (" " === s && !t) {
                if (0 === r.length) continue;
                if (a > i) {
                    let t = a;
                    for (;" " === e[t]; ) t++;
                    i = t;
                }
                if (i >= e.length || "," === e[i] || ";" === e[i] || null === n && "=" === e[i] || null !== n && "+" === e[i]) {
                    a = i - 1;
                    continue;
                }
            }
            r += s;
        }
        return o;
    };
}
