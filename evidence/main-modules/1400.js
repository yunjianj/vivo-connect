// analysis/pretty/main.js:103258; webpack module 1400
function(e, t) {
    var n = 1e3, r = 6e4, i = 60 * r, o = 24 * i;
    function a(e, t, n) {
        if (!(e < t)) return e < 1.5 * t ? Math.floor(e / t) + " " + n : Math.ceil(e / t) + " " + n + "s";
    }
    e.exports = function(e, t) {
        t = t || {};
        var s, l = typeof e;
        if ("string" === l && e.length > 0) return function(e) {
            if ((e = String(e)).length > 100) return;
            var t = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(e);
            if (!t) return;
            var a = parseFloat(t[1]);
            switch ((t[2] || "ms").toLowerCase()) {
              case "years":
              case "year":
              case "yrs":
              case "yr":
              case "y":
                return 315576e5 * a;

              case "days":
              case "day":
              case "d":
                return a * o;

              case "hours":
              case "hour":
              case "hrs":
              case "hr":
              case "h":
                return a * i;

              case "minutes":
              case "minute":
              case "mins":
              case "min":
              case "m":
                return a * r;

              case "seconds":
              case "second":
              case "secs":
              case "sec":
              case "s":
                return a * n;

              case "milliseconds":
              case "millisecond":
              case "msecs":
              case "msec":
              case "ms":
                return a;

              default:
                return;
            }
        }(e);
        if ("number" === l && !1 === isNaN(e)) return t.long ? a(s = e, o, "day") || a(s, i, "hour") || a(s, r, "minute") || a(s, n, "second") || s + " ms" : function(e) {
            if (e >= o) return Math.round(e / o) + "d";
            if (e >= i) return Math.round(e / i) + "h";
            if (e >= r) return Math.round(e / r) + "m";
            if (e >= n) return Math.round(e / n) + "s";
            return e + "ms";
        }(e);
        throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(e));
    };
}
