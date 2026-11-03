// analysis/pretty/main.js:70921; webpack module 777
function(e, t, n) {
    "use strict";
    var r = this && this.__importDefault || function(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    };
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.escapeUTF8 = t.escape = t.encodeNonAsciiHTML = t.encodeHTML = t.encodeXML = void 0;
    var i = u(r(n(776)).default), o = d(i);
    t.encodeXML = m(i);
    var a, s, l = u(r(n(775)).default), c = d(l);
    function u(e) {
        return Object.keys(e).sort().reduce(function(t, n) {
            return t[e[n]] = "&" + n + ";", t;
        }, {});
    }
    function d(e) {
        for (var t = [], n = [], r = 0, i = Object.keys(e); r < i.length; r++) {
            var o = i[r];
            1 === o.length ? t.push("\\" + o) : n.push(o);
        }
        t.sort();
        for (var a = 0; a < t.length - 1; a++) {
            for (var s = a; s < t.length - 1 && t[s].charCodeAt(1) + 1 === t[s + 1].charCodeAt(1); ) s += 1;
            var l = 1 + s - a;
            l < 3 || t.splice(a, l, t[a] + "-" + t[s]);
        }
        return n.unshift("[" + t.join("") + "]"), new RegExp(n.join("|"), "g");
    }
    t.encodeHTML = (a = l, s = c, function(e) {
        return e.replace(s, function(e) {
            return a[e];
        }).replace(h, f);
    }), t.encodeNonAsciiHTML = m(l);
    var h = /(?:[\x80-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])/g, p = null != String.prototype.codePointAt ? function(e) {
        return e.codePointAt(0);
    } : function(e) {
        return 1024 * (e.charCodeAt(0) - 55296) + e.charCodeAt(1) - 56320 + 65536;
    };
    function f(e) {
        return "&#x" + (e.length > 1 ? p(e) : e.charCodeAt(0)).toString(16).toUpperCase() + ";";
    }
    var _ = new RegExp(o.source + "|" + h.source, "g");
    function m(e) {
        return function(t) {
            return t.replace(_, function(t) {
                return e[t] || f(t);
            });
        };
    }
    t.escape = function(e) {
        return e.replace(_, f);
    }, t.escapeUTF8 = function(e) {
        return e.replace(o, f);
    };
}
