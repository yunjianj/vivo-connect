// analysis/pretty/main.js:103218; webpack module 1399
function(e, t, n) {
    function r() {
        var e;
        try {
            e = t.storage.debug;
        } catch (e) {}
        return !e && "undefined" != typeof process && "env" in process && (e = process.env.DEBUG), 
        e;
    }
    (t = e.exports = n(690)).log = function() {
        return "object" == typeof console && console.log && Function.prototype.apply.call(console.log, console, arguments);
    }, t.formatArgs = function(e) {
        var n = this.useColors;
        if (e[0] = (n ? "%c" : "") + this.namespace + (n ? " %c" : " ") + e[0] + (n ? "%c " : " ") + "+" + t.humanize(this.diff), 
        !n) return;
        var r = "color: " + this.color;
        e.splice(1, 0, r, "color: inherit");
        var i = 0, o = 0;
        e[0].replace(/%[a-zA-Z%]/g, function(e) {
            "%%" !== e && (i++, "%c" === e && (o = i));
        }), e.splice(o, 0, r);
    }, t.save = function(e) {
        try {
            null == e ? t.storage.removeItem("debug") : t.storage.debug = e;
        } catch (e) {}
    }, t.load = r, t.useColors = function() {
        if ("undefined" != typeof window && window.process && "renderer" === window.process.type) return !0;
        return "undefined" != typeof document && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || "undefined" != typeof window && window.console && (window.console.firebug || window.console.exception && window.console.table) || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
    }, t.storage = "undefined" != typeof chrome && void 0 !== chrome.storage ? chrome.storage.local : function() {
        try {
            return window.localStorage;
        } catch (e) {}
    }(), t.colors = [ "lightseagreen", "forestgreen", "goldenrod", "dodgerblue", "darkorchid", "crimson" ], 
    t.formatters.j = function(e) {
        try {
            return JSON.stringify(e);
        } catch (e) {
            return "[UnexpectedJSONParseError]: " + e.message;
        }
    }, t.enable(r());
}
