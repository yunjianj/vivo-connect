// analysis/pretty/main.js:97671; webpack module 1275
function(e, t, n) {
    "use strict";
    var r = n(17).Buffer;
    function i(e, t) {
        this.iconv = t;
    }
    t.utf7 = i, t.unicode11utf7 = "utf7", i.prototype.encoder = a, i.prototype.decoder = s, 
    i.prototype.bomAware = !0;
    var o = /[^A-Za-z0-9'\(\),-\.\/:\? \n\r\t]+/g;
    function a(e, t) {
        this.iconv = t.iconv;
    }
    function s(e, t) {
        this.iconv = t.iconv, this.inBase64 = !1, this.base64Accum = "";
    }
    a.prototype.write = function(e) {
        return r.from(e.replace(o, function(e) {
            return "+" + ("+" === e ? "" : this.iconv.encode(e, "utf16-be").toString("base64").replace(/=+$/, "")) + "-";
        }.bind(this)));
    }, a.prototype.end = function() {};
    for (var l = /[A-Za-z0-9\/+]/, c = [], u = 0; u < 256; u++) c[u] = l.test(String.fromCharCode(u));
    var d = "+".charCodeAt(0), h = "-".charCodeAt(0), p = "&".charCodeAt(0);
    function f(e, t) {
        this.iconv = t;
    }
    function _(e, t) {
        this.iconv = t.iconv, this.inBase64 = !1, this.base64Accum = r.alloc(6), this.base64AccumIdx = 0;
    }
    function m(e, t) {
        this.iconv = t.iconv, this.inBase64 = !1, this.base64Accum = "";
    }
    s.prototype.write = function(e) {
        for (var t = "", n = 0, i = this.inBase64, o = this.base64Accum, a = 0; a < e.length; a++) if (i) {
            if (!c[e[a]]) {
                if (a == n && e[a] == h) t += "+"; else {
                    var s = o + this.iconv.decode(e.slice(n, a), "ascii");
                    t += this.iconv.decode(r.from(s, "base64"), "utf16-be");
                }
                e[a] != h && a--, n = a + 1, i = !1, o = "";
            }
        } else e[a] == d && (t += this.iconv.decode(e.slice(n, a), "ascii"), n = a + 1, 
        i = !0);
        if (i) {
            var l = (s = o + this.iconv.decode(e.slice(n), "ascii")).length - s.length % 8;
            o = s.slice(l), s = s.slice(0, l), t += this.iconv.decode(r.from(s, "base64"), "utf16-be");
        } else t += this.iconv.decode(e.slice(n), "ascii");
        return this.inBase64 = i, this.base64Accum = o, t;
    }, s.prototype.end = function() {
        var e = "";
        return this.inBase64 && this.base64Accum.length > 0 && (e = this.iconv.decode(r.from(this.base64Accum, "base64"), "utf16-be")), 
        this.inBase64 = !1, this.base64Accum = "", e;
    }, t.utf7imap = f, f.prototype.encoder = _, f.prototype.decoder = m, f.prototype.bomAware = !0, 
    _.prototype.write = function(e) {
        for (var t = this.inBase64, n = this.base64Accum, i = this.base64AccumIdx, o = r.alloc(5 * e.length + 10), a = 0, s = 0; s < e.length; s++) {
            var l = e.charCodeAt(s);
            32 <= l && l <= 126 ? (t && (i > 0 && (a += o.write(n.slice(0, i).toString("base64").replace(/\//g, ",").replace(/=+$/, ""), a), 
            i = 0), o[a++] = h, t = !1), t || (o[a++] = l, l === p && (o[a++] = h))) : (t || (o[a++] = p, 
            t = !0), t && (n[i++] = l >> 8, n[i++] = 255 & l, i == n.length && (a += o.write(n.toString("base64").replace(/\//g, ","), a), 
            i = 0)));
        }
        return this.inBase64 = t, this.base64AccumIdx = i, o.slice(0, a);
    }, _.prototype.end = function() {
        var e = r.alloc(10), t = 0;
        return this.inBase64 && (this.base64AccumIdx > 0 && (t += e.write(this.base64Accum.slice(0, this.base64AccumIdx).toString("base64").replace(/\//g, ",").replace(/=+$/, ""), t), 
        this.base64AccumIdx = 0), e[t++] = h, this.inBase64 = !1), e.slice(0, t);
    };
    var g = c.slice();
    g[",".charCodeAt(0)] = !0, m.prototype.write = function(e) {
        for (var t = "", n = 0, i = this.inBase64, o = this.base64Accum, a = 0; a < e.length; a++) if (i) {
            if (!g[e[a]]) {
                if (a == n && e[a] == h) t += "&"; else {
                    var s = o + this.iconv.decode(e.slice(n, a), "ascii").replace(/,/g, "/");
                    t += this.iconv.decode(r.from(s, "base64"), "utf16-be");
                }
                e[a] != h && a--, n = a + 1, i = !1, o = "";
            }
        } else e[a] == p && (t += this.iconv.decode(e.slice(n, a), "ascii"), n = a + 1, 
        i = !0);
        if (i) {
            var l = (s = o + this.iconv.decode(e.slice(n), "ascii").replace(/,/g, "/")).length - s.length % 8;
            o = s.slice(l), s = s.slice(0, l), t += this.iconv.decode(r.from(s, "base64"), "utf16-be");
        } else t += this.iconv.decode(e.slice(n), "ascii");
        return this.inBase64 = i, this.base64Accum = o, t;
    }, m.prototype.end = function() {
        var e = "";
        return this.inBase64 && this.base64Accum.length > 0 && (e = this.iconv.decode(r.from(this.base64Accum, "base64"), "utf16-be")), 
        this.inBase64 = !1, this.base64Accum = "", e;
    };
}
