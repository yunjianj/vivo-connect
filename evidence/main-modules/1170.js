// analysis/pretty/main.js:91721; webpack module 1170
function(e, t, n) {
    "use strict";
    /*!
 * Copyright (c) 2015, Salesforce.com, Inc.
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * 1. Redistributions of source code must retain the above copyright notice,
 * this list of conditions and the following disclaimer.
 *
 * 2. Redistributions in binary form must reproduce the above copyright notice,
 * this list of conditions and the following disclaimer in the documentation
 * and/or other materials provided with the distribution.
 *
 * 3. Neither the name of Salesforce.com nor the names of its contributors may
 * be used to endorse or promote products derived from this software without
 * specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
 * ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE
 * LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
 * CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
 * SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
 * INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
 * CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
 * ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
 * POSSIBILITY OF SUCH DAMAGE.
 */    var r, i = n(104), o = n(15).parse, a = n(5), s = n(625), l = n(626).Store, c = n(1172).MemoryCookieStore, u = n(628).pathMatch, d = n(1173);
    try {
        r = n(1174);
    } catch (e) {
        console.warn("tough-cookie: can't load punycode; won't use punycode for domain normalization");
    }
    var h = /^[\x21\x23-\x2B\x2D-\x3A\x3C-\x5B\x5D-\x7E]+$/, p = /[\x00-\x1F]/, f = [ "\n", "\r", "\0" ], _ = /[\x20-\x3A\x3C-\x7E]+/, m = /[\x09\x20-\x2F\x3B-\x40\x5B-\x60\x7B-\x7E]/, g = {
        jan: 0,
        feb: 1,
        mar: 2,
        apr: 3,
        may: 4,
        jun: 5,
        jul: 6,
        aug: 7,
        sep: 8,
        oct: 9,
        nov: 10,
        dec: 11
    }, v = [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ], y = [ "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat" ];
    function E(e, t, n, r) {
        for (var i = 0; i < e.length; ) {
            var o = e.charCodeAt(i);
            if (o <= 47 || o >= 58) break;
            i++;
        }
        return i < t || i > n ? null : r || i == e.length ? parseInt(e.substr(0, i), 10) : null;
    }
    function b(e) {
        var t = e.split(":"), n = [ 0, 0, 0 ];
        if (3 !== t.length) return null;
        for (var r = 0; r < 3; r++) {
            var i = 2 == r, o = E(t[r], 1, 2, i);
            if (null === o) return null;
            n[r] = o;
        }
        return n;
    }
    function w(e) {
        e = String(e).substr(0, 3).toLowerCase();
        var t = g[e];
        return t >= 0 ? t : null;
    }
    function S(e) {
        if (e) {
            var t = e.split(m);
            if (t) {
                for (var n = null, r = null, i = null, o = null, a = null, s = null, l = 0; l < t.length; l++) {
                    var c, u = t[l].trim();
                    if (u.length) null === i && (c = b(u)) ? (n = c[0], r = c[1], i = c[2]) : null !== o || null === (c = E(u, 1, 2, !0)) ? null !== a || null === (c = w(u)) ? null === s && null !== (c = E(u, 2, 4, !0)) && ((s = c) >= 70 && s <= 99 ? s += 1900 : s >= 0 && s <= 69 && (s += 2e3)) : a = c : o = c;
                }
                if (!(null === o || null === a || null === s || null === i || o < 1 || o > 31 || s < 1601 || n > 23 || r > 59 || i > 59)) return new Date(Date.UTC(s, a, o, n, r, i));
            }
        }
    }
    function T(e) {
        var t = e.getUTCDate();
        t = t >= 10 ? t : "0" + t;
        var n = e.getUTCHours();
        n = n >= 10 ? n : "0" + n;
        var r = e.getUTCMinutes();
        r = r >= 10 ? r : "0" + r;
        var i = e.getUTCSeconds();
        return i = i >= 10 ? i : "0" + i, y[e.getUTCDay()] + ", " + t + " " + v[e.getUTCMonth()] + " " + e.getUTCFullYear() + " " + n + ":" + r + ":" + i + " GMT";
    }
    function A(e) {
        return null == e ? null : (e = e.trim().replace(/^\./, ""), r && /[^\u0001-\u007f]/.test(e) && (e = r.toASCII(e)), 
        e.toLowerCase());
    }
    function O(e, t, n) {
        if (null == e || null == t) return null;
        if (!1 !== n && (e = A(e), t = A(t)), e == t) return !0;
        if (i.isIP(e)) return !1;
        var r = e.indexOf(t);
        return !(r <= 0) && (e.length === t.length + r && "." === e.substr(r - 1, 1));
    }
    function C(e) {
        if (!e || "/" !== e.substr(0, 1)) return "/";
        if ("/" === e) return e;
        var t = e.lastIndexOf("/");
        return 0 === t ? "/" : e.slice(0, t);
    }
    function N(e, t) {
        var n, r, i = (e = function(e) {
            for (var t = 0; t < f.length; t++) {
                var n = e.indexOf(f[t]);
                -1 !== n && (e = e.substr(0, n));
            }
            return e;
        }(e)).indexOf("=");
        if (t) 0 === i && (i = (e = e.substr(1)).indexOf("=")); else if (i <= 0) return;
        if (i <= 0 ? (n = "", r = e.trim()) : (n = e.substr(0, i).trim(), r = e.substr(i + 1).trim()), 
        !p.test(n) && !p.test(r)) {
            var o = new M;
            return o.key = n, o.value = r, o;
        }
    }
    function I(e, t) {
        t && "object" == typeof t || (t = {});
        var n = (e = e.trim()).indexOf(";"), r = N(-1 === n ? e : e.substr(0, n), !!t.loose);
        if (r) {
            if (-1 === n) return r;
            var i = e.slice(n + 1).trim();
            if (0 === i.length) return r;
            for (var o = i.split(";"); o.length; ) {
                var a = o.shift().trim();
                if (0 !== a.length) {
                    var s, l, c = a.indexOf("=");
                    switch (-1 === c ? (s = a, l = null) : (s = a.substr(0, c), l = a.substr(c + 1)), 
                    s = s.trim().toLowerCase(), l && (l = l.trim()), s) {
                      case "expires":
                        if (l) {
                            var u = S(l);
                            u && (r.expires = u);
                        }
                        break;

                      case "max-age":
                        if (l && /^-?[0-9]+$/.test(l)) {
                            var d = parseInt(l, 10);
                            r.setMaxAge(d);
                        }
                        break;

                      case "domain":
                        if (l) {
                            var h = l.trim().replace(/^\./, "");
                            h && (r.domain = h.toLowerCase());
                        }
                        break;

                      case "path":
                        r.path = l && "/" === l[0] ? l : null;
                        break;

                      case "secure":
                        r.secure = !0;
                        break;

                      case "httponly":
                        r.httpOnly = !0;
                        break;

                      default:
                        r.extensions = r.extensions || [], r.extensions.push(a);
                    }
                }
            }
            return r;
        }
    }
    function R(e) {
        var t;
        try {
            t = JSON.parse(e);
        } catch (e) {
            return e;
        }
        return t;
    }
    function D(e) {
        if (!e) return null;
        var t;
        if ("string" == typeof e) {
            if ((t = R(e)) instanceof Error) return null;
        } else t = e;
        for (var n = new M, r = 0; r < M.serializableProperties.length; r++) {
            var i = M.serializableProperties[r];
            void 0 !== t[i] && t[i] !== M.prototype[i] && ("expires" === i || "creation" === i || "lastAccessed" === i ? null === t[i] ? n[i] = null : n[i] = "Infinity" == t[i] ? "Infinity" : new Date(t[i]) : n[i] = t[i]);
        }
        return n;
    }
    function L(e, t) {
        var n = 0, r = e.path ? e.path.length : 0;
        return 0 !== (n = (t.path ? t.path.length : 0) - r) || 0 !== (n = (e.creation ? e.creation.getTime() : 2147483647e3) - (t.creation ? t.creation.getTime() : 2147483647e3)) ? n : n = e.creationIndex - t.creationIndex;
    }
    function k(e) {
        if (e instanceof Object) return e;
        try {
            e = decodeURI(e);
        } catch (e) {}
        return o(e);
    }
    function M(e) {
        e = e || {}, Object.keys(e).forEach(function(t) {
            M.prototype.hasOwnProperty(t) && M.prototype[t] !== e[t] && "_" !== t.substr(0, 1) && (this[t] = e[t]);
        }, this), this.creation = this.creation || new Date, Object.defineProperty(this, "creationIndex", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: ++M.cookiesCreated
        });
    }
    function P(e, t) {
        "boolean" == typeof t ? t = {
            rejectPublicSuffixes: t
        } : null == t && (t = {}), null != t.rejectPublicSuffixes && (this.rejectPublicSuffixes = t.rejectPublicSuffixes), 
        null != t.looseMode && (this.enableLooseMode = t.looseMode), e || (e = new c), this.store = e;
    }
    M.cookiesCreated = 0, M.parse = I, M.fromJSON = D, M.prototype.key = "", M.prototype.value = "", 
    M.prototype.expires = "Infinity", M.prototype.maxAge = null, M.prototype.domain = null, 
    M.prototype.path = null, M.prototype.secure = !1, M.prototype.httpOnly = !1, M.prototype.extensions = null, 
    M.prototype.hostOnly = null, M.prototype.pathIsDefault = null, M.prototype.creation = null, 
    M.prototype.lastAccessed = null, Object.defineProperty(M.prototype, "creationIndex", {
        configurable: !0,
        enumerable: !1,
        writable: !0,
        value: 0
    }), M.serializableProperties = Object.keys(M.prototype).filter(function(e) {
        return !(M.prototype[e] instanceof Function || "creationIndex" === e || "_" === e.substr(0, 1));
    }), M.prototype.inspect = function() {
        var e = Date.now();
        return 'Cookie="' + this.toString() + "; hostOnly=" + (null != this.hostOnly ? this.hostOnly : "?") + "; aAge=" + (this.lastAccessed ? e - this.lastAccessed.getTime() + "ms" : "?") + "; cAge=" + (this.creation ? e - this.creation.getTime() + "ms" : "?") + '"';
    }, a.inspect.custom && (M.prototype[a.inspect.custom] = M.prototype.inspect), M.prototype.toJSON = function() {
        for (var e = {}, t = M.serializableProperties, n = 0; n < t.length; n++) {
            var r = t[n];
            this[r] !== M.prototype[r] && ("expires" === r || "creation" === r || "lastAccessed" === r ? null === this[r] ? e[r] = null : e[r] = "Infinity" == this[r] ? "Infinity" : this[r].toISOString() : "maxAge" === r ? null !== this[r] && (e[r] = this[r] == 1 / 0 || this[r] == -1 / 0 ? this[r].toString() : this[r]) : this[r] !== M.prototype[r] && (e[r] = this[r]));
        }
        return e;
    }, M.prototype.clone = function() {
        return D(this.toJSON());
    }, M.prototype.validate = function() {
        if (!h.test(this.value)) return !1;
        if (!(this.expires == 1 / 0 || this.expires instanceof Date || S(this.expires))) return !1;
        if (null != this.maxAge && this.maxAge <= 0) return !1;
        if (null != this.path && !_.test(this.path)) return !1;
        var e = this.cdomain();
        if (e) {
            if (e.match(/\.$/)) return !1;
            if (null == s.getPublicSuffix(e)) return !1;
        }
        return !0;
    }, M.prototype.setExpires = function(e) {
        e instanceof Date ? this.expires = e : this.expires = S(e) || "Infinity";
    }, M.prototype.setMaxAge = function(e) {
        this.maxAge = e === 1 / 0 || e === -1 / 0 ? e.toString() : e;
    }, M.prototype.cookieString = function() {
        var e = this.value;
        return null == e && (e = ""), "" === this.key ? e : this.key + "=" + e;
    }, M.prototype.toString = function() {
        var e = this.cookieString();
        return this.expires != 1 / 0 && (this.expires instanceof Date ? e += "; Expires=" + T(this.expires) : e += "; Expires=" + this.expires), 
        null != this.maxAge && this.maxAge != 1 / 0 && (e += "; Max-Age=" + this.maxAge), 
        this.domain && !this.hostOnly && (e += "; Domain=" + this.domain), this.path && (e += "; Path=" + this.path), 
        this.secure && (e += "; Secure"), this.httpOnly && (e += "; HttpOnly"), this.extensions && this.extensions.forEach(function(t) {
            e += "; " + t;
        }), e;
    }, M.prototype.TTL = function(e) {
        if (null != this.maxAge) return this.maxAge <= 0 ? 0 : 1e3 * this.maxAge;
        var t = this.expires;
        return t != 1 / 0 ? (t instanceof Date || (t = S(t) || 1 / 0), t == 1 / 0 ? 1 / 0 : t.getTime() - (e || Date.now())) : 1 / 0;
    }, M.prototype.expiryTime = function(e) {
        if (null != this.maxAge) {
            var t = e || this.creation || new Date, n = this.maxAge <= 0 ? -1 / 0 : 1e3 * this.maxAge;
            return t.getTime() + n;
        }
        return this.expires == 1 / 0 ? 1 / 0 : this.expires.getTime();
    }, M.prototype.expiryDate = function(e) {
        var t = this.expiryTime(e);
        return t == 1 / 0 ? new Date(2147483647e3) : t == -1 / 0 ? new Date(0) : new Date(t);
    }, M.prototype.isPersistent = function() {
        return null != this.maxAge || this.expires != 1 / 0;
    }, M.prototype.cdomain = M.prototype.canonicalizedDomain = function() {
        return null == this.domain ? null : A(this.domain);
    }, P.prototype.store = null, P.prototype.rejectPublicSuffixes = !0, P.prototype.enableLooseMode = !1;
    var x = [];
    function F(e) {
        return function() {
            if (!this.store.synchronous) throw new Error("CookieJar store is not synchronous; use async API instead.");
            var t, n, r = Array.prototype.slice.call(arguments);
            if (r.push(function(e, r) {
                t = e, n = r;
            }), this[e].apply(this, r), t) throw t;
            return n;
        };
    }
    x.push("setCookie"), P.prototype.setCookie = function(e, t, n, r) {
        var i, o = k(t);
        n instanceof Function && (r = n, n = {});
        var a = A(o.hostname), l = this.enableLooseMode;
        if (null != n.loose && (l = n.loose), e instanceof M || (e = M.parse(e, {
            loose: l
        })), !e) return i = new Error("Cookie failed to parse"), r(n.ignoreError ? null : i);
        var c = n.now || new Date;
        if (this.rejectPublicSuffixes && e.domain && null == s.getPublicSuffix(e.cdomain())) return i = new Error("Cookie has domain set to a public suffix"), 
        r(n.ignoreError ? null : i);
        if (e.domain) {
            if (!O(a, e.cdomain(), !1)) return i = new Error("Cookie not in this host's domain. Cookie:" + e.cdomain() + " Request:" + a), 
            r(n.ignoreError ? null : i);
            null == e.hostOnly && (e.hostOnly = !1);
        } else e.hostOnly = !0, e.domain = a;
        if (e.path && "/" === e.path[0] || (e.path = C(o.pathname), e.pathIsDefault = !0), 
        !1 === n.http && e.httpOnly) return i = new Error("Cookie is HttpOnly and this isn't an HTTP API"), 
        r(n.ignoreError ? null : i);
        var u = this.store;
        u.updateCookie || (u.updateCookie = function(e, t, n) {
            this.putCookie(t, n);
        }), u.findCookie(e.domain, e.path, e.key, function(t, i) {
            if (t) return r(t);
            var o = function(t) {
                if (t) return r(t);
                r(null, e);
            };
            if (i) {
                if (!1 === n.http && i.httpOnly) return t = new Error("old Cookie is HttpOnly and this isn't an HTTP API"), 
                r(n.ignoreError ? null : t);
                e.creation = i.creation, e.creationIndex = i.creationIndex, e.lastAccessed = c, 
                u.updateCookie(i, e, o);
            } else e.creation = e.lastAccessed = c, u.putCookie(e, o);
        });
    }, x.push("getCookies"), P.prototype.getCookies = function(e, t, n) {
        var r = k(e);
        t instanceof Function && (n = t, t = {});
        var i = A(r.hostname), o = r.pathname || "/", a = t.secure;
        null != a || !r.protocol || "https:" != r.protocol && "wss:" != r.protocol || (a = !0);
        var s = t.http;
        null == s && (s = !0);
        var l = t.now || Date.now(), c = !1 !== t.expire, d = !!t.allPaths, h = this.store;
        function p(e) {
            if (e.hostOnly) {
                if (e.domain != i) return !1;
            } else if (!O(i, e.domain, !1)) return !1;
            return !(!d && !u(o, e.path)) && (!(e.secure && !a) && (!(e.httpOnly && !s) && (!(c && e.expiryTime() <= l) || (h.removeCookie(e.domain, e.path, e.key, function() {}), 
            !1))));
        }
        h.findCookies(i, d ? null : o, function(e, r) {
            if (e) return n(e);
            r = r.filter(p), !1 !== t.sort && (r = r.sort(L));
            var i = new Date;
            r.forEach(function(e) {
                e.lastAccessed = i;
            }), n(null, r);
        });
    }, x.push("getCookieString"), P.prototype.getCookieString = function() {
        var e = Array.prototype.slice.call(arguments, 0), t = e.pop(), n = function(e, n) {
            e ? t(e) : t(null, n.sort(L).map(function(e) {
                return e.cookieString();
            }).join("; "));
        };
        e.push(n), this.getCookies.apply(this, e);
    }, x.push("getSetCookieStrings"), P.prototype.getSetCookieStrings = function() {
        var e = Array.prototype.slice.call(arguments, 0), t = e.pop(), n = function(e, n) {
            e ? t(e) : t(null, n.map(function(e) {
                return e.toString();
            }));
        };
        e.push(n), this.getCookies.apply(this, e);
    }, x.push("serialize"), P.prototype.serialize = function(e) {
        var t = this.store.constructor.name;
        "Object" === t && (t = null);
        var n = {
            version: "tough-cookie@" + d,
            storeType: t,
            rejectPublicSuffixes: !!this.rejectPublicSuffixes,
            cookies: []
        };
        if (!this.store.getAllCookies || "function" != typeof this.store.getAllCookies) return e(new Error("store does not support getAllCookies and cannot be serialized"));
        this.store.getAllCookies(function(t, r) {
            return t ? e(t) : (n.cookies = r.map(function(e) {
                return delete (e = e instanceof M ? e.toJSON() : e).creationIndex, e;
            }), e(null, n));
        });
    }, P.prototype.toJSON = function() {
        return this.serializeSync();
    }, x.push("_importCookies"), P.prototype._importCookies = function(e, t) {
        var n = this, r = e.cookies;
        if (!r || !Array.isArray(r)) return t(new Error("serialized jar has no cookies array"));
        r = r.slice(), function e(i) {
            if (i) return t(i);
            if (!r.length) return t(i, n);
            var o;
            try {
                o = D(r.shift());
            } catch (e) {
                return t(e);
            }
            if (null === o) return e(null);
            n.store.putCookie(o, e);
        }();
    }, P.deserialize = function(e, t, n) {
        var r;
        if (3 !== arguments.length && (n = t, t = null), "string" == typeof e) {
            if ((r = R(e)) instanceof Error) return n(r);
        } else r = e;
        var i = new P(t, r.rejectPublicSuffixes);
        i._importCookies(r, function(e) {
            if (e) return n(e);
            n(null, i);
        });
    }, P.deserializeSync = function(e, t) {
        var n = "string" == typeof e ? JSON.parse(e) : e, r = new P(t, n.rejectPublicSuffixes);
        if (!r.store.synchronous) throw new Error("CookieJar store is not synchronous; use async API instead.");
        return r._importCookiesSync(n), r;
    }, P.fromJSON = P.deserializeSync, P.prototype.clone = function(e, t) {
        1 === arguments.length && (t = e, e = null), this.serialize(function(n, r) {
            if (n) return t(n);
            P.deserialize(r, e, t);
        });
    }, x.push("removeAllCookies"), P.prototype.removeAllCookies = function(e) {
        var t = this.store;
        if (t.removeAllCookies instanceof Function && t.removeAllCookies !== l.prototype.removeAllCookies) return t.removeAllCookies(e);
        t.getAllCookies(function(n, r) {
            if (n) return e(n);
            if (0 === r.length) return e(null);
            var i = 0, o = [];
            function a(t) {
                if (t && o.push(t), ++i === r.length) return e(o.length ? o[0] : null);
            }
            r.forEach(function(e) {
                t.removeCookie(e.domain, e.path, e.key, a);
            });
        });
    }, P.prototype._cloneSync = F("clone"), P.prototype.cloneSync = function(e) {
        if (!e.synchronous) throw new Error("CookieJar clone destination store is not synchronous; use async API instead.");
        return this._cloneSync(e);
    }, x.forEach(function(e) {
        P.prototype[e + "Sync"] = F(e);
    }), t.version = d, t.CookieJar = P, t.Cookie = M, t.Store = l, t.MemoryCookieStore = c, 
    t.parseDate = S, t.formatDate = T, t.parse = I, t.fromJSON = D, t.domainMatch = O, 
    t.defaultPath = C, t.pathMatch = u, t.getPublicSuffix = s.getPublicSuffix, t.cookieCompare = L, 
    t.permuteDomain = n(627).permuteDomain, t.permutePath = function(e) {
        if ("/" === e) return [ "/" ];
        e.lastIndexOf("/") === e.length - 1 && (e = e.substr(0, e.length - 1));
        for (var t = [ e ]; e.length > 1; ) {
            var n = e.lastIndexOf("/");
            if (0 === n) break;
            e = e.substr(0, n), t.push(e);
        }
        return t.push("/"), t;
    }, t.canonicalDomain = A;
}
