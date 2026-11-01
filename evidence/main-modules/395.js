// analysis/pretty/main.js:42158; webpack module 395
function(e, t, n) {
    "use strict";
    const r = RegExp.prototype.test.bind(/^[\da-f]{8}-[\da-f]{4}-[\da-f]{4}-[\da-f]{4}-[\da-f]{12}$/iu), i = RegExp.prototype.test.bind(/^(?:(?:25[0-5]|2[0-4]\d|1\d{2}|[1-9]\d|\d)\.){3}(?:25[0-5]|2[0-4]\d|1\d{2}|[1-9]\d|\d)$/u);
    function o(e) {
        let t = "", n = 0, r = 0;
        for (r = 0; r < e.length; r++) if (n = e[r].charCodeAt(0), 48 !== n) {
            if (!(n >= 48 && n <= 57 || n >= 65 && n <= 70 || n >= 97 && n <= 102)) return "";
            t += e[r];
            break;
        }
        for (r += 1; r < e.length; r++) {
            if (n = e[r].charCodeAt(0), !(n >= 48 && n <= 57 || n >= 65 && n <= 70 || n >= 97 && n <= 102)) return "";
            t += e[r];
        }
        return t;
    }
    const a = RegExp.prototype.test.bind(/[^!"$&'()*+,\-.;=_`a-z{}~]/u);
    function s(e) {
        return e.length = 0, !0;
    }
    function l(e, t, n) {
        if (e.length) {
            const r = o(e);
            if ("" === r) return n.error = !0, !1;
            t.push(r), e.length = 0;
        }
        return !0;
    }
    function c(e) {
        if (function(e, t) {
            let n = 0;
            for (let r = 0; r < e.length; r++) e[r] === t && n++;
            return n;
        }(e, ":") < 2) return {
            host: e,
            isIPV6: !1
        };
        const t = function(e) {
            let t = 0;
            const n = {
                error: !1,
                address: "",
                zone: ""
            }, r = [], i = [];
            let a = !1, c = !1, u = l;
            for (let o = 0; o < e.length; o++) {
                const l = e[o];
                if ("[" !== l && "]" !== l) if (":" !== l) if ("%" === l) {
                    if (!u(i, r, n)) break;
                    u = s;
                } else i.push(l); else {
                    if (!0 === a && (c = !0), !u(i, r, n)) break;
                    if (++t > 7) {
                        n.error = !0;
                        break;
                    }
                    o > 0 && ":" === e[o - 1] && (a = !0), r.push(":");
                }
            }
            return i.length && (u === s ? n.zone = i.join("") : c ? r.push(i.join("")) : r.push(o(i))), 
            n.address = r.join(""), n;
        }(e);
        if (t.error) return {
            host: e,
            isIPV6: !1
        };
        {
            let e = t.address, n = t.address;
            return t.zone && (e += "%" + t.zone, n += "%25" + t.zone), {
                host: e,
                isIPV6: !0,
                escapedHost: n
            };
        }
    }
    e.exports = {
        nonSimpleDomain: a,
        recomposeAuthority: function(e) {
            const t = [];
            if (void 0 !== e.userinfo && (t.push(e.userinfo), t.push("@")), void 0 !== e.host) {
                let n = unescape(e.host);
                if (!i(n)) {
                    const t = c(n);
                    n = !0 === t.isIPV6 ? `[${t.escapedHost}]` : e.host;
                }
                t.push(n);
            }
            return "number" != typeof e.port && "string" != typeof e.port || (t.push(":"), t.push(String(e.port))), 
            t.length ? t.join("") : void 0;
        },
        normalizeComponentEncoding: function(e, t) {
            const n = !0 !== t ? escape : unescape;
            return void 0 !== e.scheme && (e.scheme = n(e.scheme)), void 0 !== e.userinfo && (e.userinfo = n(e.userinfo)), 
            void 0 !== e.host && (e.host = n(e.host)), void 0 !== e.path && (e.path = n(e.path)), 
            void 0 !== e.query && (e.query = n(e.query)), void 0 !== e.fragment && (e.fragment = n(e.fragment)), 
            e;
        },
        removeDotSegments: function(e) {
            let t = e;
            const n = [];
            let r = -1, i = 0;
            for (;i = t.length; ) {
                if (1 === i) {
                    if ("." === t) break;
                    if ("/" === t) {
                        n.push("/");
                        break;
                    }
                    n.push(t);
                    break;
                }
                if (2 === i) {
                    if ("." === t[0]) {
                        if ("." === t[1]) break;
                        if ("/" === t[1]) {
                            t = t.slice(2);
                            continue;
                        }
                    } else if ("/" === t[0] && ("." === t[1] || "/" === t[1])) {
                        n.push("/");
                        break;
                    }
                } else if (3 === i && "/.." === t) {
                    0 !== n.length && n.pop(), n.push("/");
                    break;
                }
                if ("." === t[0]) {
                    if ("." === t[1]) {
                        if ("/" === t[2]) {
                            t = t.slice(3);
                            continue;
                        }
                    } else if ("/" === t[1]) {
                        t = t.slice(2);
                        continue;
                    }
                } else if ("/" === t[0] && "." === t[1]) {
                    if ("/" === t[2]) {
                        t = t.slice(2);
                        continue;
                    }
                    if ("." === t[2] && "/" === t[3]) {
                        t = t.slice(3), 0 !== n.length && n.pop();
                        continue;
                    }
                }
                if (-1 === (r = t.indexOf("/", 1))) {
                    n.push(t);
                    break;
                }
                n.push(t.slice(0, r)), t = t.slice(r);
            }
            return n.join("");
        },
        isIPv4: i,
        isUUID: r,
        normalizeIPv6: c,
        stringArrayToHexStripped: o
    };
}
