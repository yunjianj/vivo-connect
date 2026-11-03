// analysis/pretty/main.js:60579; webpack module 669
function(e, t, n) {
    "use strict";
    const r = n(667), i = n(668), o = n(227), a = n(330), s = n(329), l = n(331);
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
