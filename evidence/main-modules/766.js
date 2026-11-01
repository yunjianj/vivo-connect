// analysis/pretty/main.js:70198; webpack module 766
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.getElementsByTagType = t.getElementsByTagName = t.getElementById = t.getElements = t.testElement = void 0;
    var r = n(142), i = n(765), o = {
        tag_name: function(e) {
            return "function" == typeof e ? function(t) {
                return (0, r.isTag)(t) && e(t.name);
            } : "*" === e ? r.isTag : function(t) {
                return (0, r.isTag)(t) && t.name === e;
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
                return (0, r.isText)(t) && e(t.data);
            } : function(t) {
                return (0, r.isText)(t) && t.data === e;
            };
        }
    };
    function a(e, t) {
        return "function" == typeof t ? function(n) {
            return (0, r.isTag)(n) && t(n.attribs[e]);
        } : function(n) {
            return (0, r.isTag)(n) && n.attribs[e] === t;
        };
    }
    function s(e, t) {
        return function(n) {
            return e(n) || t(n);
        };
    }
    function l(e) {
        var t = Object.keys(e).map(function(t) {
            var n = e[t];
            return Object.prototype.hasOwnProperty.call(o, t) ? o[t](n) : a(t, n);
        });
        return 0 === t.length ? null : t.reduce(s);
    }
    t.testElement = function(e, t) {
        var n = l(e);
        return !n || n(t);
    }, t.getElements = function(e, t, n, r) {
        void 0 === r && (r = 1 / 0);
        var o = l(e);
        return o ? (0, i.filter)(o, t, n, r) : [];
    }, t.getElementById = function(e, t, n) {
        return void 0 === n && (n = !0), Array.isArray(t) || (t = [ t ]), (0, i.findOne)(a("id", e), t, n);
    }, t.getElementsByTagName = function(e, t, n, r) {
        return void 0 === n && (n = !0), void 0 === r && (r = 1 / 0), (0, i.filter)(o.tag_name(e), t, n, r);
    }, t.getElementsByTagType = function(e, t, n, r) {
        return void 0 === n && (n = !0), void 0 === r && (r = 1 / 0), (0, i.filter)(o.tag_type(e), t, n, r);
    };
}
