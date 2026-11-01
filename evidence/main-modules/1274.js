// analysis/pretty/main.js:97602; webpack module 1274
function(e, t, n) {
    "use strict";
    var r = n(17).Buffer;
    function i() {}
    function o() {}
    function a() {
        this.overflowByte = -1;
    }
    function s(e, t) {
        this.iconv = t;
    }
    function l(e, t) {
        void 0 === (e = e || {}).addBOM && (e.addBOM = !0), this.encoder = t.iconv.getEncoder("utf-16le", e);
    }
    function c(e, t) {
        this.decoder = null, this.initialBufs = [], this.initialBufsLen = 0, this.options = e || {}, 
        this.iconv = t.iconv;
    }
    function u(e, t) {
        var n = [], r = 0, i = 0, o = 0;
        e: for (var a = 0; a < e.length; a++) for (var s = e[a], l = 0; l < s.length; l++) if (n.push(s[l]), 
        2 === n.length) {
            if (0 === r) {
                if (255 === n[0] && 254 === n[1]) return "utf-16le";
                if (254 === n[0] && 255 === n[1]) return "utf-16be";
            }
            if (0 === n[0] && 0 !== n[1] && o++, 0 !== n[0] && 0 === n[1] && i++, n.length = 0, 
            ++r >= 100) break e;
        }
        return o > i ? "utf-16be" : o < i ? "utf-16le" : t || "utf-16le";
    }
    t.utf16be = i, i.prototype.encoder = o, i.prototype.decoder = a, i.prototype.bomAware = !0, 
    o.prototype.write = function(e) {
        for (var t = r.from(e, "ucs2"), n = 0; n < t.length; n += 2) {
            var i = t[n];
            t[n] = t[n + 1], t[n + 1] = i;
        }
        return t;
    }, o.prototype.end = function() {}, a.prototype.write = function(e) {
        if (0 == e.length) return "";
        var t = r.alloc(e.length + 1), n = 0, i = 0;
        for (-1 !== this.overflowByte && (t[0] = e[0], t[1] = this.overflowByte, n = 1, 
        i = 2); n < e.length - 1; n += 2, i += 2) t[i] = e[n + 1], t[i + 1] = e[n];
        return this.overflowByte = n == e.length - 1 ? e[e.length - 1] : -1, t.slice(0, i).toString("ucs2");
    }, a.prototype.end = function() {
        this.overflowByte = -1;
    }, t.utf16 = s, s.prototype.encoder = l, s.prototype.decoder = c, l.prototype.write = function(e) {
        return this.encoder.write(e);
    }, l.prototype.end = function() {
        return this.encoder.end();
    }, c.prototype.write = function(e) {
        if (!this.decoder) {
            if (this.initialBufs.push(e), this.initialBufsLen += e.length, this.initialBufsLen < 16) return "";
            var t = u(this.initialBufs, this.options.defaultEncoding);
            this.decoder = this.iconv.getDecoder(t, this.options);
            for (var n = "", r = 0; r < this.initialBufs.length; r++) n += this.decoder.write(this.initialBufs[r]);
            return this.initialBufs.length = this.initialBufsLen = 0, n;
        }
        return this.decoder.write(e);
    }, c.prototype.end = function() {
        if (!this.decoder) {
            var e = u(this.initialBufs, this.options.defaultEncoding);
            this.decoder = this.iconv.getDecoder(e, this.options);
            for (var t = "", n = 0; n < this.initialBufs.length; n++) t += this.decoder.write(this.initialBufs[n]);
            var r = this.decoder.end();
            return r && (t += r), this.initialBufs.length = this.initialBufsLen = 0, t;
        }
        return this.decoder.end();
    };
}
