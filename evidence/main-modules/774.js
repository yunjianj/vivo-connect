// analysis/pretty/main.js:70876; webpack module 774
function(e, t, n) {
    "use strict";
    var r = this && this.__importDefault || function(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    };
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.decodeHTML = t.decodeHTMLStrict = t.decodeXML = void 0;
    var i = r(n(775)), o = r(n(1630)), a = r(n(776)), s = r(n(1631)), l = /&(?:[a-zA-Z0-9]+|#[xX][\da-fA-F]+|#\d+);/g;
    function c(e) {
        var t = d(e);
        return function(e) {
            return String(e).replace(l, t);
        };
    }
    t.decodeXML = c(a.default), t.decodeHTMLStrict = c(i.default);
    var u = function(e, t) {
        return e < t ? 1 : -1;
    };
    function d(e) {
        return function(t) {
            if ("#" === t.charAt(1)) {
                var n = t.charAt(2);
                return "X" === n || "x" === n ? s.default(parseInt(t.substr(3), 16)) : s.default(parseInt(t.substr(2), 10));
            }
            return e[t.slice(1, -1)] || t;
        };
    }
    t.decodeHTML = function() {
        for (var e = Object.keys(o.default).sort(u), t = Object.keys(i.default).sort(u), n = 0, r = 0; n < t.length; n++) e[r] === t[n] ? (t[n] += ";?", 
        r++) : t[n] += ";";
        var a = new RegExp("&(?:" + t.join("|") + "|#[xX][\\da-fA-F]+;?|#\\d+;?)", "g"), s = d(i.default);
        function l(e) {
            return ";" !== e.substr(-1) && (e += ";"), s(e);
        }
        return function(e) {
            return String(e).replace(a, l);
        };
    }();
}
