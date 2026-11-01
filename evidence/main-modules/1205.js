// analysis/pretty/main.js:95115; webpack module 1205
function(e, t, n) {
    /** @license URI.js v4.4.1 (c) 2011 Gary Court. License: http://github.com/garycourt/uri-js */
    !function(e) {
        "use strict";
        function t() {
            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            if (t.length > 1) {
                t[0] = t[0].slice(0, -1);
                for (var r = t.length - 1, i = 1; i < r; ++i) t[i] = t[i].slice(1, -1);
                return t[r] = t[r].slice(1), t.join("");
            }
            return t[0];
        }
        function n(e) {
            return "(?:" + e + ")";
        }
        function r(e) {
            return void 0 === e ? "undefined" : null === e ? "null" : Object.prototype.toString.call(e).split(" ").pop().split("]").shift().toLowerCase();
        }
        function i(e) {
            return e.toUpperCase();
        }
        function o(e) {
            var r = t("[0-9]", "[A-Fa-f]"), i = n(n("%[EFef]" + r + "%" + r + r + "%" + r + r) + "|" + n("%[89A-Fa-f]" + r + "%" + r + r) + "|" + n("%" + r + r)), o = "[\\!\\$\\&\\'\\(\\)\\*\\+\\,\\;\\=]", a = t("[\\:\\/\\?\\#\\[\\]\\@]", o), s = e ? "[\\uE000-\\uF8FF]" : "[]", l = t("[A-Za-z]", "[0-9]", "[\\-\\.\\_\\~]", e ? "[\\xA0-\\u200D\\u2010-\\u2029\\u202F-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF]" : "[]"), c = n("[A-Za-z]" + t("[A-Za-z]", "[0-9]", "[\\+\\-\\.]") + "*"), u = n(n(i + "|" + t(l, o, "[\\:]")) + "*"), d = (n(n("25[0-5]") + "|" + n("2[0-4][0-9]") + "|" + n("1[0-9][0-9]") + "|" + n("[1-9][0-9]") + "|[0-9]"), 
            n(n("25[0-5]") + "|" + n("2[0-4][0-9]") + "|" + n("1[0-9][0-9]") + "|" + n("0?[1-9][0-9]") + "|0?0?[0-9]")), h = n(d + "\\." + d + "\\." + d + "\\." + d), p = n(r + "{1,4}"), f = n(n(p + "\\:" + p) + "|" + h), _ = n(n(p + "\\:") + "{6}" + f), m = n("\\:\\:" + n(p + "\\:") + "{5}" + f), g = n(n(p) + "?\\:\\:" + n(p + "\\:") + "{4}" + f), v = n(n(n(p + "\\:") + "{0,1}" + p) + "?\\:\\:" + n(p + "\\:") + "{3}" + f), y = n(n(n(p + "\\:") + "{0,2}" + p) + "?\\:\\:" + n(p + "\\:") + "{2}" + f), E = n(n(n(p + "\\:") + "{0,3}" + p) + "?\\:\\:" + p + "\\:" + f), b = n(n(n(p + "\\:") + "{0,4}" + p) + "?\\:\\:" + f), w = n(n(n(p + "\\:") + "{0,5}" + p) + "?\\:\\:" + p), S = n(n(n(p + "\\:") + "{0,6}" + p) + "?\\:\\:"), T = n([ _, m, g, v, y, E, b, w, S ].join("|")), A = n(n(l + "|" + i) + "+"), O = (n(T + "\\%25" + A), 
            n(T + n("\\%25|\\%(?!" + r + "{2})") + A)), C = n("[vV]" + r + "+\\." + t(l, o, "[\\:]") + "+"), N = n("\\[" + n(O + "|" + T + "|" + C) + "\\]"), I = n(n(i + "|" + t(l, o)) + "*"), R = n(N + "|" + h + "(?!" + I + ")|" + I), D = n("[0-9]*"), L = n(n(u + "@") + "?" + R + n("\\:" + D) + "?"), k = n(i + "|" + t(l, o, "[\\:\\@]")), M = n(k + "*"), P = n(k + "+"), x = n(n(i + "|" + t(l, o, "[\\@]")) + "+"), F = n(n("\\/" + M) + "*"), j = n("\\/" + n(P + F) + "?"), U = n(x + F), W = n(P + F), B = "(?!" + k + ")", H = (n(F + "|" + j + "|" + U + "|" + W + "|" + B), 
            n(n(k + "|" + t("[\\/\\?]", s)) + "*")), $ = n(n(k + "|[\\/\\?]") + "*"), Y = n(n("\\/\\/" + L + F) + "|" + j + "|" + W + "|" + B), z = n(c + "\\:" + Y + n("\\?" + H) + "?" + n("\\#" + $) + "?"), G = n(n("\\/\\/" + L + F) + "|" + j + "|" + U + "|" + B), q = n(G + n("\\?" + H) + "?" + n("\\#" + $) + "?");
            return n(z + "|" + q), n(c + "\\:" + Y + n("\\?" + H) + "?"), n(n("\\/\\/(" + n("(" + u + ")@") + "?(" + R + ")" + n("\\:(" + D + ")") + "?)") + "?(" + F + "|" + j + "|" + W + "|" + B + ")"), 
            n("\\?(" + H + ")"), n("\\#(" + $ + ")"), n(n("\\/\\/(" + n("(" + u + ")@") + "?(" + R + ")" + n("\\:(" + D + ")") + "?)") + "?(" + F + "|" + j + "|" + U + "|" + B + ")"), 
            n("\\?(" + H + ")"), n("\\#(" + $ + ")"), n(n("\\/\\/(" + n("(" + u + ")@") + "?(" + R + ")" + n("\\:(" + D + ")") + "?)") + "?(" + F + "|" + j + "|" + W + "|" + B + ")"), 
            n("\\?(" + H + ")"), n("\\#(" + $ + ")"), n("(" + u + ")@"), n("\\:(" + D + ")"), 
            {
                NOT_SCHEME: new RegExp(t("[^]", "[A-Za-z]", "[0-9]", "[\\+\\-\\.]"), "g"),
                NOT_USERINFO: new RegExp(t("[^\\%\\:]", l, o), "g"),
                NOT_HOST: new RegExp(t("[^\\%\\[\\]\\:]", l, o), "g"),
                NOT_PATH: new RegExp(t("[^\\%\\/\\:\\@]", l, o), "g"),
                NOT_PATH_NOSCHEME: new RegExp(t("[^\\%\\/\\@]", l, o), "g"),
                NOT_QUERY: new RegExp(t("[^\\%]", l, o, "[\\:\\@\\/\\?]", s), "g"),
                NOT_FRAGMENT: new RegExp(t("[^\\%]", l, o, "[\\:\\@\\/\\?]"), "g"),
                ESCAPE: new RegExp(t("[^]", l, o), "g"),
                UNRESERVED: new RegExp(l, "g"),
                OTHER_CHARS: new RegExp(t("[^\\%]", l, a), "g"),
                PCT_ENCODED: new RegExp(i, "g"),
                IPV4ADDRESS: new RegExp("^(" + h + ")$"),
                IPV6ADDRESS: new RegExp("^\\[?(" + T + ")" + n(n("\\%25|\\%(?!" + r + "{2})") + "(" + A + ")") + "?\\]?$")
            };
        }
        var a = o(!1), s = o(!0), l = function(e, t) {
            if (Array.isArray(e)) return e;
            if (Symbol.iterator in Object(e)) return function(e, t) {
                var n = [], r = !0, i = !1, o = void 0;
                try {
                    for (var a, s = e[Symbol.iterator](); !(r = (a = s.next()).done) && (n.push(a.value), 
                    !t || n.length !== t); r = !0) ;
                } catch (e) {
                    i = !0, o = e;
                } finally {
                    try {
                        !r && s.return && s.return();
                    } finally {
                        if (i) throw o;
                    }
                }
                return n;
            }(e, t);
            throw new TypeError("Invalid attempt to destructure non-iterable instance");
        }, c = 2147483647, u = /^xn--/, d = /[^\0-\x7E]/, h = /[\x2E\u3002\uFF0E\uFF61]/g, p = {
            overflow: "Overflow: input needs wider integers to process",
            "not-basic": "Illegal input >= 0x80 (not a basic code point)",
            "invalid-input": "Invalid input"
        }, f = Math.floor, _ = String.fromCharCode;
        function m(e) {
            throw new RangeError(p[e]);
        }
        function g(e, t) {
            var n = e.split("@"), r = "";
            n.length > 1 && (r = n[0] + "@", e = n[1]);
            var i = function(e, t) {
                for (var n = [], r = e.length; r--; ) n[r] = t(e[r]);
                return n;
            }((e = e.replace(h, ".")).split("."), t).join(".");
            return r + i;
        }
        function v(e) {
            for (var t = [], n = 0, r = e.length; n < r; ) {
                var i = e.charCodeAt(n++);
                if (i >= 55296 && i <= 56319 && n < r) {
                    var o = e.charCodeAt(n++);
                    56320 == (64512 & o) ? t.push(((1023 & i) << 10) + (1023 & o) + 65536) : (t.push(i), 
                    n--);
                } else t.push(i);
            }
            return t;
        }
        var y = function(e, t) {
            return e + 22 + 75 * (e < 26) - ((0 != t) << 5);
        }, E = function(e, t, n) {
            var r = 0;
            for (e = n ? f(e / 700) : e >> 1, e += f(e / t); e > 455; r += 36) e = f(e / 35);
            return f(r + 36 * e / (e + 38));
        }, b = function(e) {
            var t, n = [], r = e.length, i = 0, o = 128, a = 72, s = e.lastIndexOf("-");
            s < 0 && (s = 0);
            for (var l = 0; l < s; ++l) e.charCodeAt(l) >= 128 && m("not-basic"), n.push(e.charCodeAt(l));
            for (var u = s > 0 ? s + 1 : 0; u < r; ) {
                for (var d = i, h = 1, p = 36; ;p += 36) {
                    u >= r && m("invalid-input");
                    var _ = (t = e.charCodeAt(u++)) - 48 < 10 ? t - 22 : t - 65 < 26 ? t - 65 : t - 97 < 26 ? t - 97 : 36;
                    (_ >= 36 || _ > f((c - i) / h)) && m("overflow"), i += _ * h;
                    var g = p <= a ? 1 : p >= a + 26 ? 26 : p - a;
                    if (_ < g) break;
                    var v = 36 - g;
                    h > f(c / v) && m("overflow"), h *= v;
                }
                var y = n.length + 1;
                a = E(i - d, y, 0 == d), f(i / y) > c - o && m("overflow"), o += f(i / y), i %= y, 
                n.splice(i++, 0, o);
            }
            return String.fromCodePoint.apply(String, n);
        }, w = function(e) {
            var t = [], n = (e = v(e)).length, r = 128, i = 0, o = 72, a = !0, s = !1, l = void 0;
            try {
                for (var u, d = e[Symbol.iterator](); !(a = (u = d.next()).done); a = !0) {
                    var h = u.value;
                    h < 128 && t.push(_(h));
                }
            } catch (e) {
                s = !0, l = e;
            } finally {
                try {
                    !a && d.return && d.return();
                } finally {
                    if (s) throw l;
                }
            }
            var p = t.length, g = p;
            for (p && t.push("-"); g < n; ) {
                var b = c, w = !0, S = !1, T = void 0;
                try {
                    for (var A, O = e[Symbol.iterator](); !(w = (A = O.next()).done); w = !0) {
                        var C = A.value;
                        C >= r && C < b && (b = C);
                    }
                } catch (e) {
                    S = !0, T = e;
                } finally {
                    try {
                        !w && O.return && O.return();
                    } finally {
                        if (S) throw T;
                    }
                }
                var N = g + 1;
                b - r > f((c - i) / N) && m("overflow"), i += (b - r) * N, r = b;
                var I = !0, R = !1, D = void 0;
                try {
                    for (var L, k = e[Symbol.iterator](); !(I = (L = k.next()).done); I = !0) {
                        var M = L.value;
                        if (M < r && ++i > c && m("overflow"), M == r) {
                            for (var P = i, x = 36; ;x += 36) {
                                var F = x <= o ? 1 : x >= o + 26 ? 26 : x - o;
                                if (P < F) break;
                                var j = P - F, U = 36 - F;
                                t.push(_(y(F + j % U, 0))), P = f(j / U);
                            }
                            t.push(_(y(P, 0))), o = E(i, N, g == p), i = 0, ++g;
                        }
                    }
                } catch (e) {
                    R = !0, D = e;
                } finally {
                    try {
                        !I && k.return && k.return();
                    } finally {
                        if (R) throw D;
                    }
                }
                ++i, ++r;
            }
            return t.join("");
        }, S = function(e) {
            return g(e, function(e) {
                return d.test(e) ? "xn--" + w(e) : e;
            });
        }, T = function(e) {
            return g(e, function(e) {
                return u.test(e) ? b(e.slice(4).toLowerCase()) : e;
            });
        }, A = {};
        function O(e) {
            var t = e.charCodeAt(0);
            return t < 16 ? "%0" + t.toString(16).toUpperCase() : t < 128 ? "%" + t.toString(16).toUpperCase() : t < 2048 ? "%" + (t >> 6 | 192).toString(16).toUpperCase() + "%" + (63 & t | 128).toString(16).toUpperCase() : "%" + (t >> 12 | 224).toString(16).toUpperCase() + "%" + (t >> 6 & 63 | 128).toString(16).toUpperCase() + "%" + (63 & t | 128).toString(16).toUpperCase();
        }
        function C(e) {
            for (var t = "", n = 0, r = e.length; n < r; ) {
                var i = parseInt(e.substr(n + 1, 2), 16);
                if (i < 128) t += String.fromCharCode(i), n += 3; else if (i >= 194 && i < 224) {
                    if (r - n >= 6) {
                        var o = parseInt(e.substr(n + 4, 2), 16);
                        t += String.fromCharCode((31 & i) << 6 | 63 & o);
                    } else t += e.substr(n, 6);
                    n += 6;
                } else if (i >= 224) {
                    if (r - n >= 9) {
                        var a = parseInt(e.substr(n + 4, 2), 16), s = parseInt(e.substr(n + 7, 2), 16);
                        t += String.fromCharCode((15 & i) << 12 | (63 & a) << 6 | 63 & s);
                    } else t += e.substr(n, 9);
                    n += 9;
                } else t += e.substr(n, 3), n += 3;
            }
            return t;
        }
        function N(e, t) {
            function n(e) {
                var n = C(e);
                return n.match(t.UNRESERVED) ? n : e;
            }
            return e.scheme && (e.scheme = String(e.scheme).replace(t.PCT_ENCODED, n).toLowerCase().replace(t.NOT_SCHEME, "")), 
            void 0 !== e.userinfo && (e.userinfo = String(e.userinfo).replace(t.PCT_ENCODED, n).replace(t.NOT_USERINFO, O).replace(t.PCT_ENCODED, i)), 
            void 0 !== e.host && (e.host = String(e.host).replace(t.PCT_ENCODED, n).toLowerCase().replace(t.NOT_HOST, O).replace(t.PCT_ENCODED, i)), 
            void 0 !== e.path && (e.path = String(e.path).replace(t.PCT_ENCODED, n).replace(e.scheme ? t.NOT_PATH : t.NOT_PATH_NOSCHEME, O).replace(t.PCT_ENCODED, i)), 
            void 0 !== e.query && (e.query = String(e.query).replace(t.PCT_ENCODED, n).replace(t.NOT_QUERY, O).replace(t.PCT_ENCODED, i)), 
            void 0 !== e.fragment && (e.fragment = String(e.fragment).replace(t.PCT_ENCODED, n).replace(t.NOT_FRAGMENT, O).replace(t.PCT_ENCODED, i)), 
            e;
        }
        function I(e) {
            return e.replace(/^0*(.*)/, "$1") || "0";
        }
        function R(e, t) {
            var n = e.match(t.IPV4ADDRESS) || [], r = l(n, 2)[1];
            return r ? r.split(".").map(I).join(".") : e;
        }
        function D(e, t) {
            var n = e.match(t.IPV6ADDRESS) || [], r = l(n, 3), i = r[1], o = r[2];
            if (i) {
                for (var a = i.toLowerCase().split("::").reverse(), s = l(a, 2), c = s[0], u = s[1], d = u ? u.split(":").map(I) : [], h = c.split(":").map(I), p = t.IPV4ADDRESS.test(h[h.length - 1]), f = p ? 7 : 8, _ = h.length - f, m = Array(f), g = 0; g < f; ++g) m[g] = d[g] || h[_ + g] || "";
                p && (m[f - 1] = R(m[f - 1], t));
                var v = m.reduce(function(e, t, n) {
                    if (!t || "0" === t) {
                        var r = e[e.length - 1];
                        r && r.index + r.length === n ? r.length++ : e.push({
                            index: n,
                            length: 1
                        });
                    }
                    return e;
                }, []).sort(function(e, t) {
                    return t.length - e.length;
                })[0], y = void 0;
                if (v && v.length > 1) {
                    var E = m.slice(0, v.index), b = m.slice(v.index + v.length);
                    y = E.join(":") + "::" + b.join(":");
                } else y = m.join(":");
                return o && (y += "%" + o), y;
            }
            return e;
        }
        var L = /^(?:([^:\/?#]+):)?(?:\/\/((?:([^\/?#@]*)@)?(\[[^\/?#\]]+\]|[^\/?#:]*)(?:\:(\d*))?))?([^?#]*)(?:\?([^#]*))?(?:#((?:.|\n|\r)*))?/i, k = void 0 === "".match(/(){0}/)[1];
        function M(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, n = {}, r = !1 !== t.iri ? s : a;
            "suffix" === t.reference && (e = (t.scheme ? t.scheme + ":" : "") + "//" + e);
            var i = e.match(L);
            if (i) {
                k ? (n.scheme = i[1], n.userinfo = i[3], n.host = i[4], n.port = parseInt(i[5], 10), 
                n.path = i[6] || "", n.query = i[7], n.fragment = i[8], isNaN(n.port) && (n.port = i[5])) : (n.scheme = i[1] || void 0, 
                n.userinfo = -1 !== e.indexOf("@") ? i[3] : void 0, n.host = -1 !== e.indexOf("//") ? i[4] : void 0, 
                n.port = parseInt(i[5], 10), n.path = i[6] || "", n.query = -1 !== e.indexOf("?") ? i[7] : void 0, 
                n.fragment = -1 !== e.indexOf("#") ? i[8] : void 0, isNaN(n.port) && (n.port = e.match(/\/\/(?:.|\n)*\:(?:\/|\?|\#|$)/) ? i[4] : void 0)), 
                n.host && (n.host = D(R(n.host, r), r)), void 0 !== n.scheme || void 0 !== n.userinfo || void 0 !== n.host || void 0 !== n.port || n.path || void 0 !== n.query ? void 0 === n.scheme ? n.reference = "relative" : void 0 === n.fragment ? n.reference = "absolute" : n.reference = "uri" : n.reference = "same-document", 
                t.reference && "suffix" !== t.reference && t.reference !== n.reference && (n.error = n.error || "URI is not a " + t.reference + " reference.");
                var o = A[(t.scheme || n.scheme || "").toLowerCase()];
                if (t.unicodeSupport || o && o.unicodeSupport) N(n, r); else {
                    if (n.host && (t.domainHost || o && o.domainHost)) try {
                        n.host = S(n.host.replace(r.PCT_ENCODED, C).toLowerCase());
                    } catch (e) {
                        n.error = n.error || "Host's domain name can not be converted to ASCII via punycode: " + e;
                    }
                    N(n, a);
                }
                o && o.parse && o.parse(n, t);
            } else n.error = n.error || "URI can not be parsed.";
            return n;
        }
        function P(e, t) {
            var n = !1 !== t.iri ? s : a, r = [];
            return void 0 !== e.userinfo && (r.push(e.userinfo), r.push("@")), void 0 !== e.host && r.push(D(R(String(e.host), n), n).replace(n.IPV6ADDRESS, function(e, t, n) {
                return "[" + t + (n ? "%25" + n : "") + "]";
            })), "number" != typeof e.port && "string" != typeof e.port || (r.push(":"), r.push(String(e.port))), 
            r.length ? r.join("") : void 0;
        }
        var x = /^\.\.?\//, F = /^\/\.(\/|$)/, j = /^\/\.\.(\/|$)/, U = /^\/?(?:.|\n)*?(?=\/|$)/;
        function W(e) {
            for (var t = []; e.length; ) if (e.match(x)) e = e.replace(x, ""); else if (e.match(F)) e = e.replace(F, "/"); else if (e.match(j)) e = e.replace(j, "/"), 
            t.pop(); else if ("." === e || ".." === e) e = ""; else {
                var n = e.match(U);
                if (!n) throw new Error("Unexpected dot segment condition");
                var r = n[0];
                e = e.slice(r.length), t.push(r);
            }
            return t.join("");
        }
        function B(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, n = t.iri ? s : a, r = [], i = A[(t.scheme || e.scheme || "").toLowerCase()];
            if (i && i.serialize && i.serialize(e, t), e.host) if (n.IPV6ADDRESS.test(e.host)) ; else if (t.domainHost || i && i.domainHost) try {
                e.host = t.iri ? T(e.host) : S(e.host.replace(n.PCT_ENCODED, C).toLowerCase());
            } catch (n) {
                e.error = e.error || "Host's domain name can not be converted to " + (t.iri ? "Unicode" : "ASCII") + " via punycode: " + n;
            }
            N(e, n), "suffix" !== t.reference && e.scheme && (r.push(e.scheme), r.push(":"));
            var o = P(e, t);
            if (void 0 !== o && ("suffix" !== t.reference && r.push("//"), r.push(o), e.path && "/" !== e.path.charAt(0) && r.push("/")), 
            void 0 !== e.path) {
                var l = e.path;
                t.absolutePath || i && i.absolutePath || (l = W(l)), void 0 === o && (l = l.replace(/^\/\//, "/%2F")), 
                r.push(l);
            }
            return void 0 !== e.query && (r.push("?"), r.push(e.query)), void 0 !== e.fragment && (r.push("#"), 
            r.push(e.fragment)), r.join("");
        }
        function H(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, r = arguments[3], i = {};
            return r || (e = M(B(e, n), n), t = M(B(t, n), n)), !(n = n || {}).tolerant && t.scheme ? (i.scheme = t.scheme, 
            i.userinfo = t.userinfo, i.host = t.host, i.port = t.port, i.path = W(t.path || ""), 
            i.query = t.query) : (void 0 !== t.userinfo || void 0 !== t.host || void 0 !== t.port ? (i.userinfo = t.userinfo, 
            i.host = t.host, i.port = t.port, i.path = W(t.path || ""), i.query = t.query) : (t.path ? ("/" === t.path.charAt(0) ? i.path = W(t.path) : (void 0 === e.userinfo && void 0 === e.host && void 0 === e.port || e.path ? e.path ? i.path = e.path.slice(0, e.path.lastIndexOf("/") + 1) + t.path : i.path = t.path : i.path = "/" + t.path, 
            i.path = W(i.path)), i.query = t.query) : (i.path = e.path, void 0 !== t.query ? i.query = t.query : i.query = e.query), 
            i.userinfo = e.userinfo, i.host = e.host, i.port = e.port), i.scheme = e.scheme), 
            i.fragment = t.fragment, i;
        }
        function $(e, t) {
            return e && e.toString().replace(t && t.iri ? s.PCT_ENCODED : a.PCT_ENCODED, C);
        }
        var Y = {
            scheme: "http",
            domainHost: !0,
            parse: function(e, t) {
                return e.host || (e.error = e.error || "HTTP URIs must have a host."), e;
            },
            serialize: function(e, t) {
                var n = "https" === String(e.scheme).toLowerCase();
                return e.port !== (n ? 443 : 80) && "" !== e.port || (e.port = void 0), e.path || (e.path = "/"), 
                e;
            }
        }, z = {
            scheme: "https",
            domainHost: Y.domainHost,
            parse: Y.parse,
            serialize: Y.serialize
        };
        function G(e) {
            return "boolean" == typeof e.secure ? e.secure : "wss" === String(e.scheme).toLowerCase();
        }
        var q = {
            scheme: "ws",
            domainHost: !0,
            parse: function(e, t) {
                var n = e;
                return n.secure = G(n), n.resourceName = (n.path || "/") + (n.query ? "?" + n.query : ""), 
                n.path = void 0, n.query = void 0, n;
            },
            serialize: function(e, t) {
                if (e.port !== (G(e) ? 443 : 80) && "" !== e.port || (e.port = void 0), "boolean" == typeof e.secure && (e.scheme = e.secure ? "wss" : "ws", 
                e.secure = void 0), e.resourceName) {
                    var n = e.resourceName.split("?"), r = l(n, 2), i = r[0], o = r[1];
                    e.path = i && "/" !== i ? i : void 0, e.query = o, e.resourceName = void 0;
                }
                return e.fragment = void 0, e;
            }
        }, V = {
            scheme: "wss",
            domainHost: q.domainHost,
            parse: q.parse,
            serialize: q.serialize
        }, K = {}, J = "[A-Za-z0-9\\-\\.\\_\\~\\xA0-\\u200D\\u2010-\\u2029\\u202F-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF]", X = "[0-9A-Fa-f]", Q = n(n("%[EFef]" + X + "%" + X + X + "%" + X + X) + "|" + n("%[89A-Fa-f]" + X + "%" + X + X) + "|" + n("%" + X + X)), Z = t("[\\!\\$\\%\\'\\(\\)\\*\\+\\,\\-\\.0-9\\<\\>A-Z\\x5E-\\x7E]", '[\\"\\\\]'), ee = new RegExp(J, "g"), te = new RegExp(Q, "g"), ne = new RegExp(t("[^]", "[A-Za-z0-9\\!\\$\\%\\'\\*\\+\\-\\^\\_\\`\\{\\|\\}\\~]", "[\\.]", '[\\"]', Z), "g"), re = new RegExp(t("[^]", J, "[\\!\\$\\'\\(\\)\\*\\+\\,\\;\\:\\@]"), "g"), ie = re;
        function oe(e) {
            var t = C(e);
            return t.match(ee) ? t : e;
        }
        var ae = {
            scheme: "mailto",
            parse: function(e, t) {
                var n = e, r = n.to = n.path ? n.path.split(",") : [];
                if (n.path = void 0, n.query) {
                    for (var i = !1, o = {}, a = n.query.split("&"), s = 0, l = a.length; s < l; ++s) {
                        var c = a[s].split("=");
                        switch (c[0]) {
                          case "to":
                            for (var u = c[1].split(","), d = 0, h = u.length; d < h; ++d) r.push(u[d]);
                            break;

                          case "subject":
                            n.subject = $(c[1], t);
                            break;

                          case "body":
                            n.body = $(c[1], t);
                            break;

                          default:
                            i = !0, o[$(c[0], t)] = $(c[1], t);
                        }
                    }
                    i && (n.headers = o);
                }
                n.query = void 0;
                for (var p = 0, f = r.length; p < f; ++p) {
                    var _ = r[p].split("@");
                    if (_[0] = $(_[0]), t.unicodeSupport) _[1] = $(_[1], t).toLowerCase(); else try {
                        _[1] = S($(_[1], t).toLowerCase());
                    } catch (e) {
                        n.error = n.error || "Email address's domain name can not be converted to ASCII via punycode: " + e;
                    }
                    r[p] = _.join("@");
                }
                return n;
            },
            serialize: function(e, t) {
                var n, r = e, o = null != (n = e.to) ? n instanceof Array ? n : "number" != typeof n.length || n.split || n.setInterval || n.call ? [ n ] : Array.prototype.slice.call(n) : [];
                if (o) {
                    for (var a = 0, s = o.length; a < s; ++a) {
                        var l = String(o[a]), c = l.lastIndexOf("@"), u = l.slice(0, c).replace(te, oe).replace(te, i).replace(ne, O), d = l.slice(c + 1);
                        try {
                            d = t.iri ? T(d) : S($(d, t).toLowerCase());
                        } catch (e) {
                            r.error = r.error || "Email address's domain name can not be converted to " + (t.iri ? "Unicode" : "ASCII") + " via punycode: " + e;
                        }
                        o[a] = u + "@" + d;
                    }
                    r.path = o.join(",");
                }
                var h = e.headers = e.headers || {};
                e.subject && (h.subject = e.subject), e.body && (h.body = e.body);
                var p = [];
                for (var f in h) h[f] !== K[f] && p.push(f.replace(te, oe).replace(te, i).replace(re, O) + "=" + h[f].replace(te, oe).replace(te, i).replace(ie, O));
                return p.length && (r.query = p.join("&")), r;
            }
        }, se = /^([^\:]+)\:(.*)/, le = {
            scheme: "urn",
            parse: function(e, t) {
                var n = e.path && e.path.match(se), r = e;
                if (n) {
                    var i = t.scheme || r.scheme || "urn", o = n[1].toLowerCase(), a = n[2], s = i + ":" + (t.nid || o), l = A[s];
                    r.nid = o, r.nss = a, r.path = void 0, l && (r = l.parse(r, t));
                } else r.error = r.error || "URN can not be parsed.";
                return r;
            },
            serialize: function(e, t) {
                var n = t.scheme || e.scheme || "urn", r = e.nid, i = n + ":" + (t.nid || r), o = A[i];
                o && (e = o.serialize(e, t));
                var a = e, s = e.nss;
                return a.path = (r || t.nid) + ":" + s, a;
            }
        }, ce = /^[0-9A-Fa-f]{8}(?:\-[0-9A-Fa-f]{4}){3}\-[0-9A-Fa-f]{12}$/, ue = {
            scheme: "urn:uuid",
            parse: function(e, t) {
                var n = e;
                return n.uuid = n.nss, n.nss = void 0, t.tolerant || n.uuid && n.uuid.match(ce) || (n.error = n.error || "UUID is not valid."), 
                n;
            },
            serialize: function(e, t) {
                var n = e;
                return n.nss = (e.uuid || "").toLowerCase(), n;
            }
        };
        A[Y.scheme] = Y, A[z.scheme] = z, A[q.scheme] = q, A[V.scheme] = V, A[ae.scheme] = ae, 
        A[le.scheme] = le, A[ue.scheme] = ue, e.SCHEMES = A, e.pctEncChar = O, e.pctDecChars = C, 
        e.parse = M, e.removeDotSegments = W, e.serialize = B, e.resolveComponents = H, 
        e.resolve = function(e, t, n) {
            var r = function(e, t) {
                var n = e;
                if (t) for (var r in t) n[r] = t[r];
                return n;
            }({
                scheme: "null"
            }, n);
            return B(H(M(e, r), M(t, r), r, !0), r);
        }, e.normalize = function(e, t) {
            return "string" == typeof e ? e = B(M(e, t), t) : "object" === r(e) && (e = M(B(e, t), t)), 
            e;
        }, e.equal = function(e, t, n) {
            return "string" == typeof e ? e = B(M(e, n), n) : "object" === r(e) && (e = B(e, n)), 
            "string" == typeof t ? t = B(M(t, n), n) : "object" === r(t) && (t = B(t, n)), e === t;
        }, e.escapeComponent = function(e, t) {
            return e && e.toString().replace(t && t.iri ? s.ESCAPE : a.ESCAPE, O);
        }, e.unescapeComponent = $, Object.defineProperty(e, "__esModule", {
            value: !0
        });
    }(t);
}
