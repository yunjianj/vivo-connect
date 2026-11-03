// analysis/pretty/main.js:87346; webpack module 1071
function(e, t, n) {
    "use strict";
    e.exports = function(e) {
        if (null === e || "object" != typeof e) return e;
        if (e instanceof Object) var t = {
            __proto__: r(e)
        }; else t = Object.create(null);
        return Object.getOwnPropertyNames(e).forEach(function(n) {
            Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(e, n));
        }), t;
    };
    var r = Object.getPrototypeOf || function(e) {
        return e.__proto__;
    };
}
