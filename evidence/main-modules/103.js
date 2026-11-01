// analysis/pretty/main.js:16767; webpack module 103
function(e, t, n) {
    "use strict";
    var r = n(289), i = n(624), o = n(290).paramsHaveRequestBody;
    function a(e, t, n) {
        "function" == typeof t && (n = t);
        var i = {};
        return null !== t && "object" == typeof t ? r(i, t, {
            uri: e
        }) : r(i, "string" == typeof e ? {
            uri: e
        } : e), i.callback = n || i.callback, i;
    }
    function s(e, t, n) {
        if (void 0 === e) throw new Error("undefined is not a valid uri or options object.");
        var r = a(e, t, n);
        if ("HEAD" === r.method && o(r)) throw new Error("HTTP HEAD requests MUST NOT include a request body.");
        return new s.Request(r);
    }
    function l(e) {
        var t = e.toUpperCase();
        return function(e, n, r) {
            var i = a(e, n, r);
            return i.method = t, s(i, i.callback);
        };
    }
    function c(e, t, n, i) {
        return function(o, s, l) {
            var c = a(o, s, l), u = {};
            return r(!0, u, t, c), u.pool = c.pool || t.pool, i && (u.method = i.toUpperCase()), 
            "function" == typeof n && (e = n), e(u, u.callback);
        };
    }
    s.get = l("get"), s.head = l("head"), s.options = l("options"), s.post = l("post"), 
    s.put = l("put"), s.patch = l("patch"), s.del = l("delete"), s.delete = l("delete"), 
    s.jar = function(e) {
        return i.jar(e);
    }, s.cookie = function(e) {
        return i.parse(e);
    }, s.defaults = function(e, t) {
        var n = this;
        "function" == typeof (e = e || {}) && (t = e, e = {});
        var r = c(n, e, t);
        return [ "get", "head", "post", "put", "patch", "del", "delete" ].forEach(function(i) {
            r[i] = c(n[i], e, t, i);
        }), r.cookie = c(n.cookie, e, t), r.jar = n.jar, r.defaults = n.defaults, r;
    }, s.forever = function(e, t) {
        var n = {};
        return t && r(n, t), e && (n.agentOptions = e), n.forever = !0, s.defaults(n);
    }, e.exports = s, s.Request = n(1176), s.initParams = a, Object.defineProperty(s, "debug", {
        enumerable: !0,
        get: function() {
            return s.Request.debug;
        },
        set: function(e) {
            s.Request.debug = e;
        }
    });
}
