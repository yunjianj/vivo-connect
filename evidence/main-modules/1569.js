// analysis/pretty/main.js:120379; webpack module 1569
function(e, t, n) {
    n(363)("parse");
    var r, i, o, a, s = n(746);
    function l(e, t) {
        var n;
        t || (t = {});
        for (var r = [ "type", "name", "value" ], i = {}, a = 0; a < r.length; ++a) e[n = r[a]] && (i[n] = t[n] || e[n]);
        for (r = Object.keys(t), a = 0; a < r.length; ++a) i[n = r[a]] || (i[n] = t[n]);
        return o && (i.position = {
            start: e.start,
            end: e.end
        }), i;
    }
    function c() {
        var e = a.shift();
        return e;
    }
    function u(e) {
        i += 1;
        var t = {};
        switch (e.type) {
          case "font-face":
          case "viewport":
            t.declarations = p();
            break;

          case "page":
            t.prefix = e.prefix, t.declarations = p();
            break;

          default:
            t.prefix = e.prefix, t.rules = h(function() {
                return i;
            });
        }
        return l(e, t);
    }
    function d(e) {
        switch (e.type) {
          case "property":
            return function(e) {
                return l(e);
            }(e);

          case "selector":
            return function(e) {
                return l(e, {
                    type: "rule",
                    selectors: e.text.split(",").map(function(e) {
                        return e.trim();
                    }),
                    declarations: p()
                });
            }(e);

          case "at-group-end":
            return void (i -= 1);

          case "media":
          case "keyframes":
            return u(e);

          case "comment":
            if (r) return function(e) {
                return l(e, {
                    text: e.text
                });
            }(e);
            break;

          case "charset":
          case "import":
          case "namespace":
            return function(e) {
                return l(e);
            }(e);

          case "font-face":
          case "supports":
          case "viewport":
          case "document":
          case "page":
            return u(e);
        }
    }
    function h(e) {
        for (var t, n, r = []; (n = c()) && e && e(n); ) (t = d(n)) && r.push(t);
        return n && "end" !== n.type && a.unshift(n), r;
    }
    function p() {
        return h(function(e) {
            return "property" === e.type || "comment" === e.type;
        });
    }
    e.exports = function(e, t) {
        var n;
        t || (t = {}), r = !!t.comments, o = !!t.position, i = 0, a = Array.isArray(e) ? e.slice() : s(e);
        var l, u = [];
        for (;l = c(); ) (n = d(l)) && u.push(n);
        return {
            type: "stylesheet",
            stylesheet: {
                rules: u
            }
        };
    };
}
