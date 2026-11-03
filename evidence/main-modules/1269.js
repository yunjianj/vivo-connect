// analysis/pretty/main.js:97325; webpack module 1269
function(e, t, n) {
    "use strict";
    var r, i = n(17).Buffer, o = n(1270), a = e.exports;
    a.encodings = null, a.defaultCharUnicode = "�", a.defaultCharSingleByte = "?", a.encode = function(e, t, n) {
        e = "" + (e || "");
        var r = a.getEncoder(t, n), o = r.write(e), s = r.end();
        return s && s.length > 0 ? i.concat([ o, s ]) : o;
    }, a.decode = function(e, t, n) {
        "string" == typeof e && (a.skipDecodeWarning || (console.error("Iconv-lite warning: decode()-ing strings is deprecated. Refer to https://github.com/ashtuchkin/iconv-lite/wiki/Use-Buffers-when-decoding"), 
        a.skipDecodeWarning = !0), e = i.from("" + (e || ""), "binary"));
        var r = a.getDecoder(t, n), o = r.write(e), s = r.end();
        return s ? o + s : o;
    }, a.encodingExists = function(e) {
        try {
            return a.getCodec(e), !0;
        } catch (e) {
            return !1;
        }
    }, a.toEncoding = a.encode, a.fromEncoding = a.decode, a._codecDataCache = {}, a.getCodec = function(e) {
        a.encodings || (a.encodings = n(1271));
        for (var t = a._canonicalizeEncoding(e), r = {}; ;) {
            var i = a._codecDataCache[t];
            if (i) return i;
            var o = a.encodings[t];
            switch (typeof o) {
              case "string":
                t = o;
                break;

              case "object":
                for (var s in o) r[s] = o[s];
                r.encodingName || (r.encodingName = t), t = o.type;
                break;

              case "function":
                return r.encodingName || (r.encodingName = t), i = new o(r, a), a._codecDataCache[r.encodingName] = i, 
                i;

              default:
                throw new Error("Encoding not recognized: '" + e + "' (searched as: '" + t + "')");
            }
        }
    }, a._canonicalizeEncoding = function(e) {
        return ("" + e).toLowerCase().replace(/:\d{4}$|[^0-9a-z]/g, "");
    }, a.getEncoder = function(e, t) {
        var n = a.getCodec(e), r = new n.encoder(t, n);
        return n.bomAware && t && t.addBOM && (r = new o.PrependBOM(r, t)), r;
    }, a.getDecoder = function(e, t) {
        var n = a.getCodec(e), r = new n.decoder(t, n);
        return !n.bomAware || t && !1 === t.stripBOM || (r = new o.StripBOM(r, t)), r;
    }, a.enableStreamingAPI = function(e) {
        if (!a.supportsStreams) {
            var t = n(1286)(e);
            a.IconvLiteEncoderStream = t.IconvLiteEncoderStream, a.IconvLiteDecoderStream = t.IconvLiteDecoderStream, 
            a.encodeStream = function(e, t) {
                return new a.IconvLiteEncoderStream(a.getEncoder(e, t), t);
            }, a.decodeStream = function(e, t) {
                return new a.IconvLiteDecoderStream(a.getDecoder(e, t), t);
            }, a.supportsStreams = !0;
        }
    };
    try {
        r = n(9);
    } catch (e) {}
    r && r.Transform ? a.enableStreamingAPI(r) : a.encodeStream = a.decodeStream = function() {
        throw new Error("iconv-lite Streaming API is not enabled. Use iconv.enableStreamingAPI(require('stream')); to enable it.");
    };
}
