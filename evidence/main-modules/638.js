// analysis/pretty/main.js:58220; webpack module 638
function(e, t, n) {
    "use strict";
    var r = Object.prototype.hasOwnProperty, i = function() {
        for (var e = [], t = 0; t < 256; ++t) e[e.length] = "%" + ((t < 16 ? "0" : "") + t.toString(16)).toUpperCase();
        return e;
    }(), o = function(e, t) {
        for (var n = t && t.plainObjects ? Object.create(null) : {}, r = 0; r < e.length; ++r) void 0 !== e[r] && (n[r] = e[r]);
        return n;
    };
    e.exports = {
        arrayToObject: o,
        assign: function(e, t) {
            return Object.keys(t).reduce(function(e, n) {
                return e[n] = t[n], e;
            }, e);
        },
        compact: function(e) {
            for (var t = [ {
                obj: {
                    o: e
                },
                prop: "o"
            } ], n = [], r = 0; r < t.length; ++r) for (var i = t[r], o = i.obj[i.prop], a = Object.keys(o), s = 0; s < a.length; ++s) {
                var l = a[s], c = o[l];
                "object" == typeof c && null !== c && -1 === n.indexOf(c) && (t[t.length] = {
                    obj: o,
                    prop: l
                }, n[n.length] = c);
            }
            return function(e) {
                for (var t; e.length; ) {
                    var n = e.pop();
                    if (t = n.obj[n.prop], Array.isArray(t)) {
                        for (var r = [], i = 0; i < t.length; ++i) void 0 !== t[i] && (r[r.length] = t[i]);
                        n.obj[n.prop] = r;
                    }
                }
                return t;
            }(t);
        },
        decode: function(e) {
            try {
                return decodeURIComponent(e.replace(/\+/g, " "));
            } catch (t) {
                return e;
            }
        },
        encode: function(e) {
            if (0 === e.length) return e;
            for (var t = "string" == typeof e ? e : String(e), n = "", r = 0; r < t.length; ++r) {
                var o = t.charCodeAt(r);
                45 === o || 46 === o || 95 === o || 126 === o || o >= 48 && o <= 57 || o >= 65 && o <= 90 || o >= 97 && o <= 122 ? n += t.charAt(r) : o < 128 ? n += i[o] : o < 2048 ? n += i[192 | o >> 6] + i[128 | 63 & o] : o < 55296 || o >= 57344 ? n += i[224 | o >> 12] + i[128 | o >> 6 & 63] + i[128 | 63 & o] : (r += 1, 
                o = 65536 + ((1023 & o) << 10 | 1023 & t.charCodeAt(r)), n += i[240 | o >> 18] + i[128 | o >> 12 & 63] + i[128 | o >> 6 & 63] + i[128 | 63 & o]);
            }
            return n;
        },
        isBuffer: function(e) {
            return null != e && !!(e.constructor && e.constructor.isBuffer && e.constructor.isBuffer(e));
        },
        isRegExp: function(e) {
            return "[object RegExp]" === Object.prototype.toString.call(e);
        },
        merge: function e(t, n, i) {
            if (!n) return t;
            if ("object" != typeof n) {
                if (Array.isArray(t)) t[t.length] = n; else {
                    if (!t || "object" != typeof t) return [ t, n ];
                    (i && (i.plainObjects || i.allowPrototypes) || !r.call(Object.prototype, n)) && (t[n] = !0);
                }
                return t;
            }
            if (!t || "object" != typeof t) return [ t ].concat(n);
            var a = t;
            return Array.isArray(t) && !Array.isArray(n) && (a = o(t, i)), Array.isArray(t) && Array.isArray(n) ? (n.forEach(function(n, o) {
                if (r.call(t, o)) {
                    var a = t[o];
                    a && "object" == typeof a && n && "object" == typeof n ? t[o] = e(a, n, i) : t[t.length] = n;
                } else t[o] = n;
            }), t) : Object.keys(n).reduce(function(t, o) {
                var a = n[o];
                return r.call(t, o) ? t[o] = e(t[o], a, i) : t[o] = a, t;
            }, a);
        }
    };
}
