// analysis/pretty/main.js:66981; webpack module 746
function(e, t, n) {
    n(363)("lex");
    e.exports = function(e) {
        var t, n = "", r = 0, i = -1, o = 0, a = 1, s = "before-selector", l = [ s ], c = {}, u = [], d = [ "media", "keyframes", {
            name: "-webkit-keyframes",
            type: "keyframes",
            prefix: "-webkit-"
        }, {
            name: "-moz-keyframes",
            type: "keyframes",
            prefix: "-moz-"
        }, {
            name: "-ms-keyframes",
            type: "keyframes",
            prefix: "-ms-"
        }, {
            name: "-o-keyframes",
            type: "keyframes",
            prefix: "-o-"
        }, "font-face", {
            name: "import",
            state: "before-at-value"
        }, {
            name: "charset",
            state: "before-at-value"
        }, "supports", "viewport", {
            name: "namespace",
            state: "before-at-value"
        }, "document", {
            name: "-moz-document",
            type: "document",
            prefix: "-moz-"
        }, "page" ];
        function h(e) {
            return e ? l[l.length - 1 - e] : s;
        }
        function p(t) {
            var n = i + 1;
            return t === e.slice(n, n + t.length);
        }
        function f(t) {
            var n = e.slice(i).indexOf(t);
            return n > 0 && n;
        }
        function _(e) {
            return e === m(1);
        }
        function m(t) {
            return e[i + (t || 1)];
        }
        function g() {
            var e = l.pop();
            return s = l[l.length - 1], e;
        }
        function v(e) {
            return s = e, l.push(s), l.length;
        }
        function y(e) {
            var t = s;
            return l[l.length - 1] = s = e, t;
        }
        function E(t) {
            if (1 == (t || 1)) "\n" == e[i] ? (a++, r = 1) : r++, i++; else {
                var n = e.slice(i, i + t).split("\n");
                n.length > 1 && (a += n.length - 1, r = 1), r += n[n.length - 1].length, i += t;
            }
        }
        function b() {
            c.end = {
                line: a,
                col: r
            }, u.push(c), n = "", c = {};
        }
        function w(e) {
            c = {
                type: e,
                start: {
                    line: a,
                    col: r
                }
            };
        }
        for (;E(), t = e[i]; ) switch (t) {
          case " ":
            switch (h()) {
              case "selector":
              case "value":
              case "value-paren":
              case "at-group":
              case "at-value":
              case "comment":
              case "double-string":
              case "single-string":
                n += t;
            }
            break;

          case "\n":
          case "\t":
          case "\r":
          case "\f":
            switch (h()) {
              case "value":
              case "value-paren":
              case "at-group":
              case "comment":
              case "single-string":
              case "double-string":
              case "selector":
                n += t;
                break;

              case "at-value":
                "\n" === t && (c.value = n.trim(), b(), g());
            }
            break;

          case ":":
            switch (h()) {
              case "name":
                c.name = n.trim(), n = "", y("before-value");
                break;

              case "before-selector":
                n += t, w("selector"), v("selector");
                break;

              case "before-value":
                y("value"), n += t;
                break;

              default:
                n += t;
            }
            break;

          case ";":
            switch (h()) {
              case "name":
              case "before-value":
              case "value":
                n.trim().length > 0 && (c.value = n.trim(), b()), y("before-name");
                break;

              case "value-paren":
                n += t;
                break;

              case "at-value":
                c.value = n.trim(), b(), g();
                break;

              case "before-name":
                break;

              default:
                n += t;
            }
            break;

          case "{":
            switch (h()) {
              case "selector":
                if ("\\" === m(-1)) {
                    n += t;
                    break;
                }
                c.text = n.trim(), b(), y("before-name"), o += 1;
                break;

              case "at-group":
                switch (c.name = n.trim(), c.type) {
                  case "font-face":
                  case "viewport":
                  case "page":
                    v("before-name");
                    break;

                  default:
                    v("before-selector");
                }
                b(), o += 1;
                break;

              case "name":
              case "at-rule":
                c.name = n.trim(), b(), v("before-name"), o += 1;
                break;

              case "comment":
              case "double-string":
              case "single-string":
                n += t;
                break;

              case "before-value":
                y("value"), n += t;
            }
            break;

          case "}":
            switch (h()) {
              case "before-name":
              case "name":
              case "before-value":
              case "value":
                n && (c.value = n.trim()), c.name && c.value && b(), w("end"), b(), g(), "at-group" === h() && (w("at-group-end"), 
                b(), g()), o > 0 && (o -= 1);
                break;

              case "at-group":
              case "before-selector":
              case "selector":
                if ("\\" === m(-1)) {
                    n += t;
                    break;
                }
                o > 0 && "at-group" === h(1) && (w("at-group-end"), b()), o > 1 && g(), o > 0 && (o -= 1);
                break;

              case "double-string":
              case "single-string":
              case "comment":
                n += t;
            }
            break;

          case '"':
          case "'":
            switch (h()) {
              case "double-string":
                '"' === t && "\\" !== m(-1) && g();
                break;

              case "single-string":
                "'" === t && "\\" !== m(-1) && g();
                break;

              case "before-at-value":
                y("at-value"), v('"' === t ? "double-string" : "single-string");
                break;

              case "before-value":
                y("value"), v('"' === t ? "double-string" : "single-string");
                break;

              case "comment":
                break;

              default:
                "\\" !== m(-1) && v('"' === t ? "double-string" : "single-string");
            }
            n += t;
            break;

          case "/":
            switch (h()) {
              case "comment":
              case "double-string":
              case "single-string":
                n += t;
                break;

              case "before-value":
              case "selector":
              case "name":
              case "value":
                if (_("*")) {
                    var S = f("*/");
                    S && E(S + 1);
                } else "before-value" == h() && y("value"), n += t;
                break;

              default:
                _("*") ? (w("comment"), v("comment"), E()) : n += t;
            }
            break;

          case "*":
            switch (h()) {
              case "comment":
                _("/") ? (c.text = n, E(), b(), g()) : n += t;
                break;

              case "before-selector":
                n += t, w("selector"), v("selector");
                break;

              case "before-value":
                y("value"), n += t;
                break;

              default:
                n += t;
            }
            break;

          case "@":
            switch (h()) {
              case "comment":
              case "double-string":
              case "single-string":
                n += t;
                break;

              case "before-value":
                y("value"), n += t;
                break;

              default:
                for (var T, A, O = !1, C = 0, N = d.length; !O && C < N; ++C) p(T = (A = d[C]).name || A) && (O = !0, 
                w(T), v(A.state || "at-group"), E(T.length), A.prefix && (c.prefix = A.prefix), 
                A.type && (c.type = A.type));
                O || (n += t);
            }
            break;

          case "(":
            switch (h()) {
              case "value":
                v("value-paren");
                break;

              case "before-value":
                y("value");
            }
            n += t;
            break;

          case ")":
            switch (h()) {
              case "value-paren":
                g();
                break;

              case "before-value":
                y("value");
            }
            n += t;
            break;

          default:
            switch (h()) {
              case "before-selector":
                w("selector"), v("selector");
                break;

              case "before-name":
                w("property"), y("name");
                break;

              case "before-value":
                y("value");
                break;

              case "before-at-value":
                y("at-value");
            }
            n += t;
        }
        return u;
    };
}
