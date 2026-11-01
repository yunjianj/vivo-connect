// analysis/pretty/main.js:17962; webpack module 122
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.isAsyncIterable = t.isAsyncGenerator = t.isAsync = void 0;
    var r, i = n(1034), o = (r = i) && r.__esModule ? r : {
        default: r
    };
    function a(e) {
        return "AsyncFunction" === e[Symbol.toStringTag];
    }
    t.default = function(e) {
        if ("function" != typeof e) throw new Error("expected a function");
        return a(e) ? (0, o.default)(e) : e;
    }, t.isAsync = a, t.isAsyncGenerator = function(e) {
        return "AsyncGenerator" === e[Symbol.toStringTag];
    }, t.isAsyncIterable = function(e) {
        return "function" == typeof e[Symbol.asyncIterator];
    };
}
