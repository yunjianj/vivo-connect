// analysis/pretty/main.js:4409; webpack module 21
function(e, t, n) {
    var r = n(44), i = n(9).Stream, o = n(5), a = /^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$/;
    function s(e) {
        return e.charAt(0).toUpperCase() + e.slice(1);
    }
    function l(e, t, n, i, a) {
        throw new r.AssertionError({
            message: o.format("%s (%s) is required", e, t),
            actual: void 0 === a ? typeof i : a(i),
            expected: t,
            operator: n || "===",
            stackStartFunction: l.caller
        });
    }
    function c(e) {
        return Object.prototype.toString.call(e).slice(8, -1);
    }
    function u() {}
    var d = {
        bool: {
            check: function(e) {
                return "boolean" == typeof e;
            }
        },
        func: {
            check: function(e) {
                return "function" == typeof e;
            }
        },
        string: {
            check: function(e) {
                return "string" == typeof e;
            }
        },
        object: {
            check: function(e) {
                return "object" == typeof e && null !== e;
            }
        },
        number: {
            check: function(e) {
                return "number" == typeof e && !isNaN(e);
            }
        },
        finite: {
            check: function(e) {
                return "number" == typeof e && !isNaN(e) && isFinite(e);
            }
        },
        buffer: {
            check: function(e) {
                return Buffer.isBuffer(e);
            },
            operator: "Buffer.isBuffer"
        },
        array: {
            check: function(e) {
                return Array.isArray(e);
            },
            operator: "Array.isArray"
        },
        stream: {
            check: function(e) {
                return e instanceof i;
            },
            operator: "instanceof",
            actual: c
        },
        date: {
            check: function(e) {
                return e instanceof Date;
            },
            operator: "instanceof",
            actual: c
        },
        regexp: {
            check: function(e) {
                return e instanceof RegExp;
            },
            operator: "instanceof",
            actual: c
        },
        uuid: {
            check: function(e) {
                return "string" == typeof e && a.test(e);
            },
            operator: "isUUID"
        }
    };
    e.exports = function e(t) {
        var n, i = Object.keys(d);
        return n = process.env.NODE_NDEBUG ? u : function(e, t) {
            e || l(t, "true", e);
        }, i.forEach(function(e) {
            if (t) n[e] = u; else {
                var r = d[e];
                n[e] = function(t, n) {
                    r.check(t) || l(n, e, r.operator, t, r.actual);
                };
            }
        }), i.forEach(function(e) {
            var r = "optional" + s(e);
            if (t) n[r] = u; else {
                var i = d[e];
                n[r] = function(t, n) {
                    null != t && (i.check(t) || l(n, e, i.operator, t, i.actual));
                };
            }
        }), i.forEach(function(e) {
            var r = "arrayOf" + s(e);
            if (t) n[r] = u; else {
                var i = d[e], o = "[" + e + "]";
                n[r] = function(e, t) {
                    var n;
                    for (Array.isArray(e) || l(t, o, i.operator, e, i.actual), n = 0; n < e.length; n++) i.check(e[n]) || l(t, o, i.operator, e, i.actual);
                };
            }
        }), i.forEach(function(e) {
            var r = "optionalArrayOf" + s(e);
            if (t) n[r] = u; else {
                var i = d[e], o = "[" + e + "]";
                n[r] = function(e, t) {
                    var n;
                    if (null != e) for (Array.isArray(e) || l(t, o, i.operator, e, i.actual), n = 0; n < e.length; n++) i.check(e[n]) || l(t, o, i.operator, e, i.actual);
                };
            }
        }), Object.keys(r).forEach(function(e) {
            n[e] = "AssertionError" !== e && t ? u : r[e];
        }), n._setExports = e, n;
    }(process.env.NODE_NDEBUG);
}
