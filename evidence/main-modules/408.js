// analysis/pretty/main.js:42789; webpack module 408
function(e, t, n) {
    "use strict";
    const r = n(406), i = n(407), o = n(198), a = n(262), s = n(261), l = n(263);
    e.exports = (e, t, n, c) => {
        switch (t) {
          case "===":
            return "object" == typeof e && (e = e.version), "object" == typeof n && (n = n.version), 
            e === n;

          case "!==":
            return "object" == typeof e && (e = e.version), "object" == typeof n && (n = n.version), 
            e !== n;

          case "":
          case "=":
          case "==":
            return r(e, n, c);

          case "!=":
            return i(e, n, c);

          case ">":
            return o(e, n, c);

          case ">=":
            return a(e, n, c);

          case "<":
            return s(e, n, c);

          case "<=":
            return l(e, n, c);

          default:
            throw new TypeError("Invalid operator: " + t);
        }
    };
}
