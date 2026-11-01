// analysis/pretty/main.js:97759; webpack module 1276
function(e, t, n) {
    "use strict";
    var r = n(17).Buffer;
    function i(e, t) {
        if (!e) throw new Error("SBCS codec is called without the data.");
        if (!e.chars || 128 !== e.chars.length && 256 !== e.chars.length) throw new Error("Encoding '" + e.type + "' has incorrect 'chars' (must be of len 128 or 256)");
        if (128 === e.chars.length) {
            for (var n = "", i = 0; i < 128; i++) n += String.fromCharCode(i);
            e.chars = n + e.chars;
        }
        this.decodeBuf = r.from(e.chars, "ucs2");
        var o = r.alloc(65536, t.defaultCharSingleByte.charCodeAt(0));
        for (i = 0; i < e.chars.length; i++) o[e.chars.charCodeAt(i)] = i;
        this.encodeBuf = o;
    }
    function o(e, t) {
        this.encodeBuf = t.encodeBuf;
    }
    function a(e, t) {
        this.decodeBuf = t.decodeBuf;
    }
    t._sbcs = i, i.prototype.encoder = o, i.prototype.decoder = a, o.prototype.write = function(e) {
        for (var t = r.alloc(e.length), n = 0; n < e.length; n++) t[n] = this.encodeBuf[e.charCodeAt(n)];
        return t;
    }, o.prototype.end = function() {}, a.prototype.write = function(e) {
        for (var t = this.decodeBuf, n = r.alloc(2 * e.length), i = 0, o = 0, a = 0; a < e.length; a++) i = 2 * e[a], 
        n[o = 2 * a] = t[i], n[o + 1] = t[i + 1];
        return n.toString("ucs2");
    }, a.prototype.end = function() {};
}
