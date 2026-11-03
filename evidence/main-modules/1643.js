// analysis/pretty/main.js:123908; webpack module 1643
function(e, t, n) {
    var r = s(n(780)), i = l(r);
    t.XML = p(r, i);
    var o = s(n(781)), a = l(o);
    function s(e) {
        return Object.keys(e).sort().reduce(function(t, n) {
            return t[e[n]] = "&" + n + ";", t;
        }, {});
    }
    function l(e) {
        var t = [], n = [];
        return Object.keys(e).forEach(function(e) {
            1 === e.length ? t.push("\\" + e) : n.push(e);
        }), n.unshift("[" + t.join("") + "]"), new RegExp(n.join("|"), "g");
    }
    t.HTML = p(o, a);
    var c = /[^\0-\x7F]/g, u = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g;
    function d(e) {
        return "&#x" + e.charCodeAt(0).toString(16).toUpperCase() + ";";
    }
    function h(e) {
        return "&#x" + (1024 * (e.charCodeAt(0) - 55296) + e.charCodeAt(1) - 56320 + 65536).toString(16).toUpperCase() + ";";
    }
    function p(e, t) {
        function n(t) {
            return e[t];
        }
        return function(e) {
            return e.replace(t, n).replace(u, h).replace(c, d);
        };
    }
    var f = l(r);
    t.escape = function(e) {
        return e.replace(f, d).replace(u, h).replace(c, d);
    };
}
