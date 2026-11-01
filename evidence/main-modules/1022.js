// analysis/pretty/main.js:82074; webpack module 1022
function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, "assign", function() {
        return l;
    }), n.d(t, "format", function() {
        return O;
    }), n.d(t, "parse", function() {
        return C;
    }), n.d(t, "defaultI18n", function() {
        return h;
    }), n.d(t, "setGlobalDateI18n", function() {
        return f;
    }), n.d(t, "setGlobalDateMasks", function() {
        return A;
    });
    var r = /d{1,4}|M{1,4}|YY(?:YY)?|S{1,3}|Do|ZZ|Z|([HhMsDm])\1?|[aA]|"[^"]*"|'[^']*'/g, i = "[^\\s]+", o = /\[([^]*?)\]/gm;
    function a(e, t) {
        for (var n = [], r = 0, i = e.length; r < i; r++) n.push(e[r].substr(0, t));
        return n;
    }
    var s = function(e) {
        return function(t, n) {
            var r = n[e].map(function(e) {
                return e.toLowerCase();
            }).indexOf(t.toLowerCase());
            return r > -1 ? r : null;
        };
    };
    function l(e) {
        for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
        for (var r = 0, i = t; r < i.length; r++) {
            var o = i[r];
            for (var a in o) e[a] = o[a];
        }
        return e;
    }
    var c = [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ], u = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ], d = a(u, 3), h = {
        dayNamesShort: a(c, 3),
        dayNames: c,
        monthNamesShort: d,
        monthNames: u,
        amPm: [ "am", "pm" ],
        DoFn: function(e) {
            return e + [ "th", "st", "nd", "rd" ][e % 10 > 3 ? 0 : (e - e % 10 != 10 ? 1 : 0) * e % 10];
        }
    }, p = l({}, h), f = function(e) {
        return p = l(p, e);
    }, _ = function(e) {
        return e.replace(/[|\\{()[^$+*?.-]/g, "\\$&");
    }, m = function(e, t) {
        for (void 0 === t && (t = 2), e = String(e); e.length < t; ) e = "0" + e;
        return e;
    }, g = {
        D: function(e) {
            return String(e.getDate());
        },
        DD: function(e) {
            return m(e.getDate());
        },
        Do: function(e, t) {
            return t.DoFn(e.getDate());
        },
        d: function(e) {
            return String(e.getDay());
        },
        dd: function(e) {
            return m(e.getDay());
        },
        ddd: function(e, t) {
            return t.dayNamesShort[e.getDay()];
        },
        dddd: function(e, t) {
            return t.dayNames[e.getDay()];
        },
        M: function(e) {
            return String(e.getMonth() + 1);
        },
        MM: function(e) {
            return m(e.getMonth() + 1);
        },
        MMM: function(e, t) {
            return t.monthNamesShort[e.getMonth()];
        },
        MMMM: function(e, t) {
            return t.monthNames[e.getMonth()];
        },
        YY: function(e) {
            return m(String(e.getFullYear()), 4).substr(2);
        },
        YYYY: function(e) {
            return m(e.getFullYear(), 4);
        },
        h: function(e) {
            return String(e.getHours() % 12 || 12);
        },
        hh: function(e) {
            return m(e.getHours() % 12 || 12);
        },
        H: function(e) {
            return String(e.getHours());
        },
        HH: function(e) {
            return m(e.getHours());
        },
        m: function(e) {
            return String(e.getMinutes());
        },
        mm: function(e) {
            return m(e.getMinutes());
        },
        s: function(e) {
            return String(e.getSeconds());
        },
        ss: function(e) {
            return m(e.getSeconds());
        },
        S: function(e) {
            return String(Math.round(e.getMilliseconds() / 100));
        },
        SS: function(e) {
            return m(Math.round(e.getMilliseconds() / 10), 2);
        },
        SSS: function(e) {
            return m(e.getMilliseconds(), 3);
        },
        a: function(e, t) {
            return e.getHours() < 12 ? t.amPm[0] : t.amPm[1];
        },
        A: function(e, t) {
            return e.getHours() < 12 ? t.amPm[0].toUpperCase() : t.amPm[1].toUpperCase();
        },
        ZZ: function(e) {
            var t = e.getTimezoneOffset();
            return (t > 0 ? "-" : "+") + m(100 * Math.floor(Math.abs(t) / 60) + Math.abs(t) % 60, 4);
        },
        Z: function(e) {
            var t = e.getTimezoneOffset();
            return (t > 0 ? "-" : "+") + m(Math.floor(Math.abs(t) / 60), 2) + ":" + m(Math.abs(t) % 60, 2);
        }
    }, v = function(e) {
        return +e - 1;
    }, y = [ null, "\\d\\d?" ], E = [ null, i ], b = [ "isPm", i, function(e, t) {
        var n = e.toLowerCase();
        return n === t.amPm[0] ? 0 : n === t.amPm[1] ? 1 : null;
    } ], w = [ "timezoneOffset", "[^\\s]*?[\\+\\-]\\d\\d:?\\d\\d|[^\\s]*?Z?", function(e) {
        var t = (e + "").match(/([+-]|\d\d)/gi);
        if (t) {
            var n = 60 * +t[1] + parseInt(t[2], 10);
            return "+" === t[0] ? n : -n;
        }
        return 0;
    } ], S = {
        D: [ "day", "\\d\\d?" ],
        DD: [ "day", "\\d\\d" ],
        Do: [ "day", "\\d\\d?" + i, function(e) {
            return parseInt(e, 10);
        } ],
        M: [ "month", "\\d\\d?", v ],
        MM: [ "month", "\\d\\d", v ],
        YY: [ "year", "\\d\\d", function(e) {
            var t = +("" + (new Date).getFullYear()).substr(0, 2);
            return +("" + (+e > 68 ? t - 1 : t) + e);
        } ],
        h: [ "hour", "\\d\\d?", void 0, "isPm" ],
        hh: [ "hour", "\\d\\d", void 0, "isPm" ],
        H: [ "hour", "\\d\\d?" ],
        HH: [ "hour", "\\d\\d" ],
        m: [ "minute", "\\d\\d?" ],
        mm: [ "minute", "\\d\\d" ],
        s: [ "second", "\\d\\d?" ],
        ss: [ "second", "\\d\\d" ],
        YYYY: [ "year", "\\d{4}" ],
        S: [ "millisecond", "\\d", function(e) {
            return 100 * +e;
        } ],
        SS: [ "millisecond", "\\d\\d", function(e) {
            return 10 * +e;
        } ],
        SSS: [ "millisecond", "\\d{3}" ],
        d: y,
        dd: y,
        ddd: E,
        dddd: E,
        MMM: [ "month", i, s("monthNamesShort") ],
        MMMM: [ "month", i, s("monthNames") ],
        a: b,
        A: b,
        ZZ: w,
        Z: w
    }, T = {
        default: "ddd MMM DD YYYY HH:mm:ss",
        shortDate: "M/D/YY",
        mediumDate: "MMM D, YYYY",
        longDate: "MMMM D, YYYY",
        fullDate: "dddd, MMMM D, YYYY",
        isoDate: "YYYY-MM-DD",
        isoDateTime: "YYYY-MM-DDTHH:mm:ssZ",
        shortTime: "HH:mm",
        mediumTime: "HH:mm:ss",
        longTime: "HH:mm:ss.SSS"
    }, A = function(e) {
        return l(T, e);
    }, O = function(e, t, n) {
        if (void 0 === t && (t = T.default), void 0 === n && (n = {}), "number" == typeof e && (e = new Date(e)), 
        "[object Date]" !== Object.prototype.toString.call(e) || isNaN(e.getTime())) throw new Error("Invalid Date pass to format");
        var i = [];
        t = (t = T[t] || t).replace(o, function(e, t) {
            return i.push(t), "@@@";
        });
        var a = l(l({}, p), n);
        return (t = t.replace(r, function(t) {
            return g[t](e, a);
        })).replace(/@@@/g, function() {
            return i.shift();
        });
    };
    function C(e, t, n) {
        if (void 0 === n && (n = {}), "string" != typeof t) throw new Error("Invalid format in fecha parse");
        if (t = T[t] || t, e.length > 1e3) return null;
        var i = {
            year: (new Date).getFullYear(),
            month: 0,
            day: 1,
            hour: 0,
            minute: 0,
            second: 0,
            millisecond: 0,
            isPm: null,
            timezoneOffset: null
        }, a = [], s = [], c = t.replace(o, function(e, t) {
            return s.push(_(t)), "@@@";
        }), u = {}, d = {};
        c = _(c).replace(r, function(e) {
            var t = S[e], n = t[0], r = t[1], i = t[3];
            if (u[n]) throw new Error("Invalid format. " + n + " specified twice in format");
            return u[n] = !0, i && (d[i] = !0), a.push(t), "(" + r + ")";
        }), Object.keys(d).forEach(function(e) {
            if (!u[e]) throw new Error("Invalid format. " + e + " is required in specified format");
        }), c = c.replace(/@@@/g, function() {
            return s.shift();
        });
        var h = e.match(new RegExp(c, "i"));
        if (!h) return null;
        for (var f, m = l(l({}, p), n), g = 1; g < h.length; g++) {
            var v = a[g - 1], y = v[0], E = v[2], b = E ? E(h[g], m) : +h[g];
            if (null == b) return null;
            i[y] = b;
        }
        if (1 === i.isPm && null != i.hour && 12 != +i.hour ? i.hour = +i.hour + 12 : 0 === i.isPm && 12 == +i.hour && (i.hour = 0), 
        null == i.timezoneOffset) {
            f = new Date(i.year, i.month, i.day, i.hour, i.minute, i.second, i.millisecond);
            for (var w = [ [ "month", "getMonth" ], [ "day", "getDate" ], [ "hour", "getHours" ], [ "minute", "getMinutes" ], [ "second", "getSeconds" ] ], A = (g = 0, 
            w.length); g < A; g++) if (u[w[g][0]] && i[w[g][0]] !== f[w[g][1]]()) return null;
        } else if (f = new Date(Date.UTC(i.year, i.month, i.day, i.hour, i.minute - i.timezoneOffset, i.second, i.millisecond)), 
        i.month > 11 || i.month < 0 || i.day > 31 || i.day < 1 || i.hour > 23 || i.hour < 0 || i.minute > 59 || i.minute < 0 || i.second > 59 || i.second < 0) return null;
        return f;
    }
    var N = {
        format: O,
        parse: C,
        defaultI18n: h,
        setGlobalDateI18n: f,
        setGlobalDateMasks: A
    };
    t.default = N;
}
