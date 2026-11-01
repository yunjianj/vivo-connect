// analysis/pretty/main.js:123532; webpack module 1629
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.decodeXMLStrict = t.decodeHTML5Strict = t.decodeHTML4Strict = t.decodeHTML5 = t.decodeHTML4 = t.decodeHTMLStrict = t.decodeHTML = t.decodeXML = t.encodeHTML5 = t.encodeHTML4 = t.escapeUTF8 = t.escape = t.encodeNonAsciiHTML = t.encodeHTML = t.encodeXML = t.encode = t.decodeStrict = t.decode = void 0;
    var r = n(774), i = n(777);
    t.decode = function(e, t) {
        return (!t || t <= 0 ? r.decodeXML : r.decodeHTML)(e);
    }, t.decodeStrict = function(e, t) {
        return (!t || t <= 0 ? r.decodeXML : r.decodeHTMLStrict)(e);
    }, t.encode = function(e, t) {
        return (!t || t <= 0 ? i.encodeXML : i.encodeHTML)(e);
    };
    var o = n(777);
    Object.defineProperty(t, "encodeXML", {
        enumerable: !0,
        get: function() {
            return o.encodeXML;
        }
    }), Object.defineProperty(t, "encodeHTML", {
        enumerable: !0,
        get: function() {
            return o.encodeHTML;
        }
    }), Object.defineProperty(t, "encodeNonAsciiHTML", {
        enumerable: !0,
        get: function() {
            return o.encodeNonAsciiHTML;
        }
    }), Object.defineProperty(t, "escape", {
        enumerable: !0,
        get: function() {
            return o.escape;
        }
    }), Object.defineProperty(t, "escapeUTF8", {
        enumerable: !0,
        get: function() {
            return o.escapeUTF8;
        }
    }), Object.defineProperty(t, "encodeHTML4", {
        enumerable: !0,
        get: function() {
            return o.encodeHTML;
        }
    }), Object.defineProperty(t, "encodeHTML5", {
        enumerable: !0,
        get: function() {
            return o.encodeHTML;
        }
    });
    var a = n(774);
    Object.defineProperty(t, "decodeXML", {
        enumerable: !0,
        get: function() {
            return a.decodeXML;
        }
    }), Object.defineProperty(t, "decodeHTML", {
        enumerable: !0,
        get: function() {
            return a.decodeHTML;
        }
    }), Object.defineProperty(t, "decodeHTMLStrict", {
        enumerable: !0,
        get: function() {
            return a.decodeHTMLStrict;
        }
    }), Object.defineProperty(t, "decodeHTML4", {
        enumerable: !0,
        get: function() {
            return a.decodeHTML;
        }
    }), Object.defineProperty(t, "decodeHTML5", {
        enumerable: !0,
        get: function() {
            return a.decodeHTML;
        }
    }), Object.defineProperty(t, "decodeHTML4Strict", {
        enumerable: !0,
        get: function() {
            return a.decodeHTMLStrict;
        }
    }), Object.defineProperty(t, "decodeHTML5Strict", {
        enumerable: !0,
        get: function() {
            return a.decodeHTMLStrict;
        }
    }), Object.defineProperty(t, "decodeXMLStrict", {
        enumerable: !0,
        get: function() {
            return a.decodeXML;
        }
    });
}
