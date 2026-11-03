// analysis/pretty/main.js:89251; webpack module 1106
function(e, t, n) {
    "use strict";
    var r, i = n(24), o = i.getNativePromise();
    if (i.isNode && "undefined" == typeof MutationObserver) {
        var a = global.setImmediate, s = process.nextTick;
        r = i.isRecentNode ? function(e) {
            a.call(global, e);
        } : function(e) {
            s.call(process, e);
        };
    } else if ("function" == typeof o && "function" == typeof o.resolve) {
        var l = o.resolve();
        r = function(e) {
            l.then(e);
        };
    } else r = "undefined" == typeof MutationObserver || "undefined" != typeof window && window.navigator && (window.navigator.standalone || window.cordova) || !("classList" in document.documentElement) ? "undefined" != typeof setImmediate ? function(e) {
        setImmediate(e);
    } : "undefined" != typeof setTimeout ? function(e) {
        setTimeout(e, 0);
    } : function() {
        throw new Error("No async scheduler available\n\n    See http://goo.gl/MqrFmX\n");
    } : function() {
        var e = document.createElement("div"), t = {
            attributes: !0
        }, n = !1, r = document.createElement("div");
        new MutationObserver(function() {
            e.classList.toggle("foo"), n = !1;
        }).observe(r, t);
        return function(i) {
            var o = new MutationObserver(function() {
                o.disconnect(), i();
            });
            o.observe(e, t), n || (n = !0, r.classList.toggle("foo"));
        };
    }();
    e.exports = r;
}
