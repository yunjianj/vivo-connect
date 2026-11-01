// analysis/pretty/main.js:83049; webpack module 1036
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.fallback = s, t.wrap = l;
    var r, i = t.hasQueueMicrotask = "function" == typeof queueMicrotask && queueMicrotask, o = t.hasSetImmediate = "function" == typeof setImmediate && setImmediate, a = t.hasNextTick = "object" == typeof process && "function" == typeof process.nextTick;
    function s(e) {
        setTimeout(e, 0);
    }
    function l(e) {
        return (t, ...n) => e(() => t(...n));
    }
    r = i ? queueMicrotask : o ? setImmediate : a ? process.nextTick : s, t.default = l(r);
}
