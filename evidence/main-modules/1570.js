// analysis/pretty/main.js:120485; webpack module 1570
function(e, t, n) {
    var r, i, o, a, s, l;
    n(363)("stringify");
    function c(e) {
        if (!e) return i ? "" : Array(a).join(o || "");
        a += e;
    }
    function u(e) {
        var t = "", n = e.prefix || "";
        e.name && (t = " " + e.name);
        var r = "page" !== e.type;
        return "@" + n + e.type + t + l + f(e, r) + s;
    }
    function d(e) {
        return r ? "/*" + (e.text || "") + "*/" + s : "";
    }
    function h(e) {
        var t;
        return e.selectors ? t = e.selectors.join("," + s) : (t = "@" + e.type, t += e.name ? " " + e.name : ""), 
        c() + t + l + f(e) + s;
    }
    function p(e, t) {
        return e.reduce(function(e, n) {
            var r = "comment" === n.type ? d(n) : t(n);
            return r && e.push(r), e;
        }, []);
    }
    function f(e, t) {
        var n = e.declarations, r = _;
        return e.rules && (n = e.rules, r = h), (n = function(e, t) {
            if (!e) return "";
            c(1);
            var n = p(e, t);
            if (c(-1), !n.length) return "";
            return n.join(s);
        }(n, r)) && (n = s + n + (t ? "" : s)), "{" + n + c() + "}";
    }
    function _(e) {
        if ("property" === e.type) return function(e) {
            var t = e.name ? e.name + ":" + l : "";
            return c() + t + e.value + ";";
        }(e);
    }
    function m(e) {
        switch (e.type) {
          case "rule":
            return h(e);

          case "media":
          case "keyframes":
            return u(e);

          case "comment":
            return d(e);

          case "import":
          case "charset":
          case "namespace":
            return function(e) {
                return "@" + e.type + " " + e.value + ";" + s;
            }(e);

          case "font-face":
          case "supports":
          case "viewport":
          case "document":
          case "page":
            return u(e);
        }
    }
    e.exports = function(e, t) {
        t || (t = {}), o = t.indentation || "", i = !!t.compress, r = !!t.comments, a = 1, 
        i ? s = l = "" : (s = "\n", l = " ");
        return p(e.stylesheet.rules, m).join("\n").trim();
    };
}
