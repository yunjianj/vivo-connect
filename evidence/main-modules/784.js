// analysis/pretty/main.js:71184; webpack module 784
function(e, t, n) {
    var r = n(172), i = r.hasAttrib, o = r.getAttributeValue, a = n(173).falseFunc, s = /[-[\]{}()*+?.,\\^$|#\s]/g, l = {
        __proto__: null,
        equals: function(e, t) {
            var n = t.name, r = t.value;
            return t.ignoreCase ? (r = r.toLowerCase(), function(t) {
                var i = o(t, n);
                return null != i && i.toLowerCase() === r && e(t);
            }) : function(t) {
                return o(t, n) === r && e(t);
            };
        },
        hyphen: function(e, t) {
            var n = t.name, r = t.value, i = r.length;
            return t.ignoreCase ? (r = r.toLowerCase(), function(t) {
                var a = o(t, n);
                return null != a && (a.length === i || "-" === a.charAt(i)) && a.substr(0, i).toLowerCase() === r && e(t);
            }) : function(t) {
                var a = o(t, n);
                return null != a && a.substr(0, i) === r && (a.length === i || "-" === a.charAt(i)) && e(t);
            };
        },
        element: function(e, t) {
            var n = t.name, r = t.value;
            if (/\s/.test(r)) return a;
            var i = "(?:^|\\s)" + (r = r.replace(s, "\\$&")) + "(?:$|\\s)", l = t.ignoreCase ? "i" : "", c = new RegExp(i, l);
            return function(t) {
                var r = o(t, n);
                return null != r && c.test(r) && e(t);
            };
        },
        exists: function(e, t) {
            var n = t.name;
            return function(t) {
                return i(t, n) && e(t);
            };
        },
        start: function(e, t) {
            var n = t.name, r = t.value, i = r.length;
            return 0 === i ? a : t.ignoreCase ? (r = r.toLowerCase(), function(t) {
                var a = o(t, n);
                return null != a && a.substr(0, i).toLowerCase() === r && e(t);
            }) : function(t) {
                var a = o(t, n);
                return null != a && a.substr(0, i) === r && e(t);
            };
        },
        end: function(e, t) {
            var n = t.name, r = t.value, i = -r.length;
            return 0 === i ? a : t.ignoreCase ? (r = r.toLowerCase(), function(t) {
                var a = o(t, n);
                return null != a && a.substr(i).toLowerCase() === r && e(t);
            }) : function(t) {
                var a = o(t, n);
                return null != a && a.substr(i) === r && e(t);
            };
        },
        any: function(e, t) {
            var n = t.name, r = t.value;
            if ("" === r) return a;
            if (t.ignoreCase) {
                var i = new RegExp(r.replace(s, "\\$&"), "i");
                return function(t) {
                    var r = o(t, n);
                    return null != r && i.test(r) && e(t);
                };
            }
            return function(t) {
                var i = o(t, n);
                return null != i && i.indexOf(r) >= 0 && e(t);
            };
        },
        not: function(e, t) {
            var n = t.name, r = t.value;
            return "" === r ? function(t) {
                return !!o(t, n) && e(t);
            } : t.ignoreCase ? (r = r.toLowerCase(), function(t) {
                var i = o(t, n);
                return null != i && i.toLowerCase() !== r && e(t);
            }) : function(t) {
                return o(t, n) !== r && e(t);
            };
        }
    };
    e.exports = {
        compile: function(e, t, n) {
            if (n && n.strict && (t.ignoreCase || "not" === t.action)) throw SyntaxError("Unsupported attribute selector");
            return l[t.action](e, t);
        },
        rules: l
    };
}
