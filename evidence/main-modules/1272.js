// analysis/pretty/main.js:97417; webpack module 1272
function(e, t, n) {
    "use strict";
    var r = n(17).Buffer;
    function i(e, t) {
        this.enc = e.encodingName, this.bomAware = e.bomAware, "base64" === this.enc ? this.encoder = l : "cesu8" === this.enc && (this.enc = "utf8", 
        this.encoder = c, "💩" !== r.from("eda0bdedb2a9", "hex").toString() && (this.decoder = u, 
        this.defaultCharUnicode = t.defaultCharUnicode));
    }
    e.exports = {
        utf8: {
            type: "_internal",
            bomAware: !0
        },
        cesu8: {
            type: "_internal",
            bomAware: !0
        },
        unicode11utf8: "utf8",
        ucs2: {
            type: "_internal",
            bomAware: !0
        },
        utf16le: "ucs2",
        binary: {
            type: "_internal"
        },
        base64: {
            type: "_internal"
        },
        hex: {
            type: "_internal"
        },
        _internal: i
    }, i.prototype.encoder = s, i.prototype.decoder = a;
    var o = n(83).StringDecoder;
    function a(e, t) {
        this.decoder = new o(t.enc);
    }
    function s(e, t) {
        this.enc = t.enc;
    }
    function l(e, t) {
        this.prevStr = "";
    }
    function c(e, t) {}
    function u(e, t) {
        this.acc = 0, this.contBytes = 0, this.accBytes = 0, this.defaultCharUnicode = t.defaultCharUnicode;
    }
    o.prototype.end || (o.prototype.end = function() {}), a.prototype.write = function(e) {
        return r.isBuffer(e) || (e = r.from(e)), this.decoder.write(e);
    }, a.prototype.end = function() {
        return this.decoder.end();
    }, s.prototype.write = function(e) {
        return r.from(e, this.enc);
    }, s.prototype.end = function() {}, l.prototype.write = function(e) {
        var t = (e = this.prevStr + e).length - e.length % 4;
        return this.prevStr = e.slice(t), e = e.slice(0, t), r.from(e, "base64");
    }, l.prototype.end = function() {
        return r.from(this.prevStr, "base64");
    }, c.prototype.write = function(e) {
        for (var t = r.alloc(3 * e.length), n = 0, i = 0; i < e.length; i++) {
            var o = e.charCodeAt(i);
            o < 128 ? t[n++] = o : o < 2048 ? (t[n++] = 192 + (o >>> 6), t[n++] = 128 + (63 & o)) : (t[n++] = 224 + (o >>> 12), 
            t[n++] = 128 + (o >>> 6 & 63), t[n++] = 128 + (63 & o));
        }
        return t.slice(0, n);
    }, c.prototype.end = function() {}, u.prototype.write = function(e) {
        for (var t = this.acc, n = this.contBytes, r = this.accBytes, i = "", o = 0; o < e.length; o++) {
            var a = e[o];
            128 != (192 & a) ? (n > 0 && (i += this.defaultCharUnicode, n = 0), a < 128 ? i += String.fromCharCode(a) : a < 224 ? (t = 31 & a, 
            n = 1, r = 1) : a < 240 ? (t = 15 & a, n = 2, r = 1) : i += this.defaultCharUnicode) : n > 0 ? (t = t << 6 | 63 & a, 
            r++, 0 === --n && (i += 2 === r && t < 128 && t > 0 || 3 === r && t < 2048 ? this.defaultCharUnicode : String.fromCharCode(t))) : i += this.defaultCharUnicode;
        }
        return this.acc = t, this.contBytes = n, this.accBytes = r, i;
    }, u.prototype.end = function() {
        var e = 0;
        return this.contBytes > 0 && (e += this.defaultCharUnicode), e;
    };
}
