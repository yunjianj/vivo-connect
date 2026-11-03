// analysis/pretty/main.js:76361; webpack module 846
function(e, t, n) {
    "use strict";
    const r = n(847), i = new Set([ "__proto__", "prototype", "constructor" ]);
    function o(e) {
        const t = e.split("."), n = [];
        for (let e = 0; e < t.length; e++) {
            let r = t[e];
            for (;"\\" === r[r.length - 1] && void 0 !== t[e + 1]; ) r = r.slice(0, -1) + ".", 
            r += t[++e];
            n.push(r);
        }
        return n.some(e => i.has(e)) ? [] : n;
    }
    e.exports = {
        get(e, t, n) {
            if (!r(e) || "string" != typeof t) return void 0 === n ? e : n;
            const i = o(t);
            if (0 !== i.length) {
                for (let t = 0; t < i.length; t++) if (null == (e = e[i[t]])) {
                    if (t !== i.length - 1) return n;
                    break;
                }
                return void 0 === e ? n : e;
            }
        },
        set(e, t, n) {
            if (!r(e) || "string" != typeof t) return e;
            const i = e, a = o(t);
            for (let t = 0; t < a.length; t++) {
                const i = a[t];
                r(e[i]) || (e[i] = {}), t === a.length - 1 && (e[i] = n), e = e[i];
            }
            return i;
        },
        delete(e, t) {
            if (!r(e) || "string" != typeof t) return !1;
            const n = o(t);
            for (let t = 0; t < n.length; t++) {
                const i = n[t];
                if (t === n.length - 1) return delete e[i], !0;
                if (e = e[i], !r(e)) return !1;
            }
        },
        has(e, t) {
            if (!r(e) || "string" != typeof t) return !1;
            const n = o(t);
            if (0 === n.length) return !1;
            for (let t = 0; t < n.length; t++) {
                if (!r(e)) return !1;
                if (!(n[t] in e)) return !1;
                e = e[n[t]];
            }
            return !0;
        }
    };
}
