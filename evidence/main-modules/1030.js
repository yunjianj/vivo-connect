// analysis/pretty/main.js:82675; webpack module 1030
function(e, t, n) {
    "use strict";
    function r(e, t, n, r, i, o, a) {
        try {
            var s = e[o](a), l = s.value;
        } catch (e) {
            return void n(e);
        }
        s.done ? t(l) : Promise.resolve(l).then(r, i);
    }
    function i(e) {
        return function() {
            var t = this, n = arguments;
            return new Promise(function(i, o) {
                var a = e.apply(t, n);
                function s(e) {
                    r(a, i, o, s, l, "next", e);
                }
                function l(e) {
                    r(a, i, o, s, l, "throw", e);
                }
                s(void 0);
            });
        };
    }
    function o(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter(function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })), n.push.apply(n, r);
        }
        return n;
    }
    function a(e, t, n) {
        return (t = function(e) {
            var t = function(e, t) {
                if ("object" != typeof e || null === e) return e;
                var n = e[Symbol.toPrimitive];
                if (void 0 !== n) {
                    var r = n.call(e, t || "default");
                    if ("object" != typeof r) return r;
                    throw new TypeError("@@toPrimitive must return a primitive value.");
                }
                return ("string" === t ? String : Number)(e);
            }(e, "string");
            return "symbol" == typeof t ? t : String(t);
        }(t)) in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e;
    }
    var s = n(101).codes.ERR_INVALID_ARG_TYPE;
    e.exports = function(e, t, n) {
        var r;
        if (t && "function" == typeof t.next) r = t; else if (t && t[Symbol.asyncIterator]) r = t[Symbol.asyncIterator](); else {
            if (!t || !t[Symbol.iterator]) throw new s("iterable", [ "Iterable" ], t);
            r = t[Symbol.iterator]();
        }
        var l = new e(function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? o(Object(n), !0).forEach(function(t) {
                    a(e, t, n[t]);
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : o(Object(n)).forEach(function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                });
            }
            return e;
        }({
            objectMode: !0
        }, n)), c = !1;
        function u() {
            return d.apply(this, arguments);
        }
        function d() {
            return (d = i(function*() {
                try {
                    var e = yield r.next(), t = e.value;
                    e.done ? l.push(null) : l.push(yield t) ? u() : c = !1;
                } catch (e) {
                    l.destroy(e);
                }
            })).apply(this, arguments);
        }
        return l._read = function() {
            c || (c = !0, u());
        }, l;
    };
}
