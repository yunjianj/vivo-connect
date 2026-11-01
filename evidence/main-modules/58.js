// analysis/pretty/main.js:12532; webpack module 58
function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, "v1", function() {
        return m;
    }), n.d(t, "v3", function() {
        return y;
    }), n.d(t, "v4", function() {
        return E;
    }), n.d(t, "v5", function() {
        return b;
    }), n.d(t, "NIL", function() {
        return w;
    }), n.d(t, "version", function() {
        return S;
    }), n.d(t, "validate", function() {
        return c;
    }), n.d(t, "stringify", function() {
        return d;
    }), n.d(t, "parse", function() {
        return g;
    });
    var r = n(7), i = n.n(r);
    const o = new Uint8Array(256);
    let a = o.length;
    function s() {
        return a > o.length - 16 && (i.a.randomFillSync(o), a = 0), o.slice(a, a += 16);
    }
    var l = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
    var c = function(e) {
        return "string" == typeof e && l.test(e);
    };
    const u = [];
    for (let e = 0; e < 256; ++e) u.push((e + 256).toString(16).substr(1));
    var d = function(e, t = 0) {
        const n = (u[e[t + 0]] + u[e[t + 1]] + u[e[t + 2]] + u[e[t + 3]] + "-" + u[e[t + 4]] + u[e[t + 5]] + "-" + u[e[t + 6]] + u[e[t + 7]] + "-" + u[e[t + 8]] + u[e[t + 9]] + "-" + u[e[t + 10]] + u[e[t + 11]] + u[e[t + 12]] + u[e[t + 13]] + u[e[t + 14]] + u[e[t + 15]]).toLowerCase();
        if (!c(n)) throw TypeError("Stringified UUID is invalid");
        return n;
    };
    let h, p, f = 0, _ = 0;
    var m = function(e, t, n) {
        let r = t && n || 0;
        const i = t || new Array(16);
        let o = (e = e || {}).node || h, a = void 0 !== e.clockseq ? e.clockseq : p;
        if (null == o || null == a) {
            const t = e.random || (e.rng || s)();
            null == o && (o = h = [ 1 | t[0], t[1], t[2], t[3], t[4], t[5] ]), null == a && (a = p = 16383 & (t[6] << 8 | t[7]));
        }
        let l = void 0 !== e.msecs ? e.msecs : Date.now(), c = void 0 !== e.nsecs ? e.nsecs : _ + 1;
        const u = l - f + (c - _) / 1e4;
        if (u < 0 && void 0 === e.clockseq && (a = a + 1 & 16383), (u < 0 || l > f) && void 0 === e.nsecs && (c = 0), 
        c >= 1e4) throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
        f = l, _ = c, p = a, l += 122192928e5;
        const m = (1e4 * (268435455 & l) + c) % 4294967296;
        i[r++] = m >>> 24 & 255, i[r++] = m >>> 16 & 255, i[r++] = m >>> 8 & 255, i[r++] = 255 & m;
        const g = l / 4294967296 * 1e4 & 268435455;
        i[r++] = g >>> 8 & 255, i[r++] = 255 & g, i[r++] = g >>> 24 & 15 | 16, i[r++] = g >>> 16 & 255, 
        i[r++] = a >>> 8 | 128, i[r++] = 255 & a;
        for (let e = 0; e < 6; ++e) i[r + e] = o[e];
        return t || d(i);
    };
    var g = function(e) {
        if (!c(e)) throw TypeError("Invalid UUID");
        let t;
        const n = new Uint8Array(16);
        return n[0] = (t = parseInt(e.slice(0, 8), 16)) >>> 24, n[1] = t >>> 16 & 255, n[2] = t >>> 8 & 255, 
        n[3] = 255 & t, n[4] = (t = parseInt(e.slice(9, 13), 16)) >>> 8, n[5] = 255 & t, 
        n[6] = (t = parseInt(e.slice(14, 18), 16)) >>> 8, n[7] = 255 & t, n[8] = (t = parseInt(e.slice(19, 23), 16)) >>> 8, 
        n[9] = 255 & t, n[10] = (t = parseInt(e.slice(24, 36), 16)) / 1099511627776 & 255, 
        n[11] = t / 4294967296 & 255, n[12] = t >>> 24 & 255, n[13] = t >>> 16 & 255, n[14] = t >>> 8 & 255, 
        n[15] = 255 & t, n;
    };
    var v = function(e, t, n) {
        function r(e, r, i, o) {
            if ("string" == typeof e && (e = function(e) {
                e = unescape(encodeURIComponent(e));
                const t = [];
                for (let n = 0; n < e.length; ++n) t.push(e.charCodeAt(n));
                return t;
            }(e)), "string" == typeof r && (r = g(r)), 16 !== r.length) throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");
            let a = new Uint8Array(16 + e.length);
            if (a.set(r), a.set(e, r.length), a = n(a), a[6] = 15 & a[6] | t, a[8] = 63 & a[8] | 128, 
            i) {
                o = o || 0;
                for (let e = 0; e < 16; ++e) i[o + e] = a[e];
                return i;
            }
            return d(a);
        }
        try {
            r.name = e;
        } catch (e) {}
        return r.DNS = "6ba7b810-9dad-11d1-80b4-00c04fd430c8", r.URL = "6ba7b811-9dad-11d1-80b4-00c04fd430c8", 
        r;
    };
    var y = v("v3", 48, function(e) {
        return Array.isArray(e) ? e = Buffer.from(e) : "string" == typeof e && (e = Buffer.from(e, "utf8")), 
        i.a.createHash("md5").update(e).digest();
    });
    var E = function(e, t, n) {
        const r = (e = e || {}).random || (e.rng || s)();
        if (r[6] = 15 & r[6] | 64, r[8] = 63 & r[8] | 128, t) {
            n = n || 0;
            for (let e = 0; e < 16; ++e) t[n + e] = r[e];
            return t;
        }
        return d(r);
    };
    var b = v("v5", 80, function(e) {
        return Array.isArray(e) ? e = Buffer.from(e) : "string" == typeof e && (e = Buffer.from(e, "utf8")), 
        i.a.createHash("sha1").update(e).digest();
    }), w = "00000000-0000-0000-0000-000000000000";
    var S = function(e) {
        if (!c(e)) throw TypeError("Invalid UUID");
        return parseInt(e.substr(14, 1), 16);
    };
}
