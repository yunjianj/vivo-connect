// analysis/pretty/main.js:23896; webpack module 171
function(e, t, n) {
    var r = n(245), i = n(779), o = {
        tag: !0,
        script: !0,
        style: !0
    };
    t.isTag = function(e) {
        return e.type && (e = e.type), o[e] || !1;
    }, t.camelCase = function(e) {
        return e.replace(/[_.-](\w|$)/g, function(e, t) {
            return t.toUpperCase();
        });
    }, t.cssCase = function(e) {
        return e.replace(/[A-Z]/g, "-$&").toLowerCase();
    }, t.domEach = function(e, t) {
        for (var n = 0, r = e.length; n < r && !1 !== t.call(e, n, e[n]); ) ++n;
        return e;
    }, t.cloneDom = function(e, t) {
        return r(i(e, t), t).children;
    };
    var a = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/;
    t.isHtml = function(e) {
        if ("<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3) return !0;
        var t = a.exec(e);
        return !(!t || !t[1]);
    };
}
