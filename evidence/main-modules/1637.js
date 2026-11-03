// analysis/pretty/main.js:123738; webpack module 1637
function(e, t, n) {
    var r = n(82), i = t.isTag = r.isTag;
    t.testElement = function(e, t) {
        for (var n in e) if (e.hasOwnProperty(n)) {
            if ("tag_name" === n) {
                if (!i(t) || !e.tag_name(t.name)) return !1;
            } else if ("tag_type" === n) {
                if (!e.tag_type(t.type)) return !1;
            } else if ("tag_contains" === n) {
                if (i(t) || !e.tag_contains(t.data)) return !1;
            } else if (!t.attribs || !e[n](t.attribs[n])) return !1;
        } else ;
        return !0;
    };
    var o = {
        tag_name: function(e) {
            return "function" == typeof e ? function(t) {
                return i(t) && e(t.name);
            } : "*" === e ? i : function(t) {
                return i(t) && t.name === e;
            };
        },
        tag_type: function(e) {
            return "function" == typeof e ? function(t) {
                return e(t.type);
            } : function(t) {
                return t.type === e;
            };
        },
        tag_contains: function(e) {
            return "function" == typeof e ? function(t) {
                return !i(t) && e(t.data);
            } : function(t) {
                return !i(t) && t.data === e;
            };
        }
    };
    function a(e, t) {
        return "function" == typeof t ? function(n) {
            return n.attribs && t(n.attribs[e]);
        } : function(n) {
            return n.attribs && n.attribs[e] === t;
        };
    }
    function s(e, t) {
        return function(n) {
            return e(n) || t(n);
        };
    }
    t.getElements = function(e, t, n, r) {
        var i = Object.keys(e).map(function(t) {
            var n = e[t];
            return t in o ? o[t](n) : a(t, n);
        });
        return 0 === i.length ? [] : this.filter(i.reduce(s), t, n, r);
    }, t.getElementById = function(e, t, n) {
        return Array.isArray(t) || (t = [ t ]), this.findOne(a("id", e), t, !1 !== n);
    }, t.getElementsByTagName = function(e, t, n, r) {
        return this.filter(o.tag_name(e), t, n, r);
    }, t.getElementsByTagType = function(e, t, n, r) {
        return this.filter(o.tag_type(e), t, n, r);
    };
}
