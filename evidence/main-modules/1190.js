// analysis/pretty/main.js:93886; webpack module 1190
function(e, t, n) {
    var r = n(21), i = (n(5), n(634)), o = n(1191), a = n(1192);
    function s(e, t) {
        return r.equal(typeof t, "string"), Object.prototype.hasOwnProperty.call(e, t);
    }
    t.deepCopy = function e(t) {
        var n, r, i = "__deepCopy";
        if (t && t[i]) throw new Error("attempted deep copy of cyclic object");
        if (t && t.constructor == Object) {
            for (r in n = {}, t[i] = !0, t) r != i && (n[r] = e(t[r]));
            return delete t[i], n;
        }
        if (t && t.constructor == Array) {
            for (n = [], t[i] = !0, r = 0; r < t.length; r++) n.push(e(t[r]));
            return delete t[i], n;
        }
        return t;
    }, t.deepEqual = function e(t, n) {
        if (typeof t != typeof n) return !1;
        if (null === t || null === n || "object" != typeof t) return t === n;
        if (t.constructor != n.constructor) return !1;
        var r;
        for (r in t) {
            if (!n.hasOwnProperty(r)) return !1;
            if (!e(t[r], n[r])) return !1;
        }
        for (r in n) if (!t.hasOwnProperty(r)) return !1;
        return !0;
    }, t.isEmpty = function(e) {
        var t;
        for (t in e) return !1;
        return !0;
    }, t.hasKey = s, t.forEachKey = function(e, t) {
        for (var n in e) s(e, n) && t(n, e[n]);
    }, t.pluck = function(e, t) {
        return r.equal(typeof t, "string"), function e(t, n) {
            if (null === t || "object" != typeof t) return;
            if (t.hasOwnProperty(n)) return t[n];
            var r = n.indexOf(".");
            if (-1 == r) return;
            var i = n.substr(0, r);
            return t.hasOwnProperty(i) ? e(t[i], n.substr(r + 1)) : void 0;
        }(e, t);
    }, t.flattenObject = function e(t, n) {
        if (0 === n) return [ t ];
        r.ok(null !== t), r.equal(typeof t, "object"), r.equal(typeof n, "number"), r.ok(n >= 0);
        var i, o = [];
        for (i in t) e(t[i], n - 1).forEach(function(e) {
            o.push([ i ].concat(e));
        });
        return o;
    }, t.flattenIter = function(e, t, n) {
        !function e(t, n, i, o) {
            var a, s;
            if (0 === n) return (a = i.slice(0)).push(t), void o(a);
            for (s in r.ok(null !== t), r.equal(typeof t, "object"), r.equal(typeof n, "number"), 
            r.ok(n >= 0), t) (a = i.slice(0)).push(s), e(t[s], n - 1, a, o);
        }(e, t, [], n);
    }, t.validateJsonObject = _, t.validateJsonObjectJS = _, t.randElt = function(e) {
        return r.ok(Array.isArray(e) && e.length > 0, "randElt argument must be a non-empty array"), 
        e[Math.floor(Math.random() * e.length)];
    }, t.extraProperties = function(e, t) {
        r.ok("object" == typeof e && null !== e, "obj argument must be a non-null object"), 
        r.ok(Array.isArray(t), "allowed argument must be an array of strings");
        for (var n = 0; n < t.length; n++) r.ok("string" == typeof t[n], "allowed argument must be an array of strings");
        return Object.keys(e).filter(function(e) {
            return -1 === t.indexOf(e);
        });
    }, t.mergeObjects = y, t.startsWith = function(e, t) {
        return e.substr(0, t.length) == t;
    }, t.endsWith = function(e, t) {
        return e.substr(e.length - t.length, t.length) == t;
    }, t.parseInteger = function(e, t) {
        r.string(e, "str"), r.optionalObject(t, "options");
        var n, i = !1, o = h;
        t && (i = s(t, "base"), o = y(o, t), r.number(o.base, "options.base"), r.ok(o.base >= 2, "options.base >= 2"), 
        r.ok(o.base <= 36, "options.base <= 36"), r.bool(o.allowSign, "options.allowSign"), 
        r.bool(o.allowPrefix, "options.allowPrefix"), r.bool(o.allowTrailing, "options.allowTrailing"), 
        r.bool(o.allowImprecise, "options.allowImprecise"), r.bool(o.trimWhitespace, "options.trimWhitespace"), 
        r.bool(o.leadingZeroIsOctal, "options.leadingZeroIsOctal"), o.leadingZeroIsOctal && r.ok(!i, '"base" and "leadingZeroIsOctal" are mutually exclusive'));
        var a, l = -1, c = o.base, _ = 1, m = 0, g = 0, v = e.length;
        if (o.trimWhitespace) for (;g < v && f(e.charCodeAt(g)); ) ++g;
        o.allowSign && ("-" === e[g] ? (g += 1, _ = -1) : "+" === e[g] && (g += 1));
        "0" === e[g] && (o.allowPrefix && (-1 === (l = function(e) {
            return 98 === e || 66 === e ? 2 : 111 === e || 79 === e ? 8 : 116 === e || 84 === e ? 10 : 120 === e || 88 === e ? 16 : -1;
        }(e.charCodeAt(g + 1))) || i && l !== c || (c = l, g += 2)), -1 === l && o.leadingZeroIsOctal && (c = 8));
        for (a = g; g < v && (-1 !== (n = p(e.charCodeAt(g))) && n < c); ++g) m *= c, m += n;
        if (a === g) return new Error("invalid number: " + JSON.stringify(e));
        if (o.trimWhitespace) for (;g < v && f(e.charCodeAt(g)); ) ++g;
        if (g < v && !o.allowTrailing) return new Error("trailing characters after number: " + JSON.stringify(e.slice(g)));
        if (0 === m) return 0;
        var E = m * _;
        if (!o.allowImprecise && (m > u || E < d)) return new Error("number is outside of the supported range: " + JSON.stringify(e.slice(a, g)));
        return E;
    }, t.iso8601 = function(e) {
        "number" == typeof e && (e = new Date(e));
        return r.ok(e.constructor === Date), i.sprintf("%4d-%02d-%02dT%02d:%02d:%02d.%03dZ", e.getUTCFullYear(), e.getUTCMonth() + 1, e.getUTCDate(), e.getUTCHours(), e.getUTCMinutes(), e.getUTCSeconds(), e.getUTCMilliseconds());
    }, t.rfc1123 = function(e) {
        return i.sprintf("%s, %02d %s %04d %02d:%02d:%02d GMT", c[e.getUTCDay()], e.getUTCDate(), l[e.getUTCMonth()], e.getUTCFullYear(), e.getUTCHours(), e.getUTCMinutes(), e.getUTCSeconds());
    }, t.parseDateTime = function(e) {
        var t = +e;
        return isNaN(t) ? new Date(e) : new Date(t);
    }, t.hrtimediff = g, t.hrtimeDiff = g, t.hrtimeAccum = v, t.hrtimeAdd = function(e, t) {
        return m(e), v([ e[0], e[1] ], t);
    }, t.hrtimeNanosec = function(e) {
        return m(e), Math.floor(1e9 * e[0] + e[1]);
    }, t.hrtimeMicrosec = function(e) {
        return m(e), Math.floor(1e6 * e[0] + e[1] / 1e3);
    }, t.hrtimeMillisec = function(e) {
        return m(e), Math.floor(1e3 * e[0] + e[1] / 1e6);
    };
    var l = [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ], c = [ "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat" ];
    var u = Number.MAX_SAFE_INTEGER || 9007199254740991, d = Number.MIN_SAFE_INTEGER || -9007199254740991, h = {
        base: 10,
        allowSign: !0,
        allowPrefix: !1,
        allowTrailing: !1,
        allowImprecise: !1,
        trimWhitespace: !1,
        leadingZeroIsOctal: !1
    };
    function p(e) {
        return e >= 48 && e <= 57 ? e - 48 : e >= 65 && e <= 90 ? e - 55 : e >= 97 && e <= 122 ? e - 87 : -1;
    }
    function f(e) {
        return 32 === e || e >= 9 && e <= 13 || 160 === e || 5760 === e || 6158 === e || e >= 8192 && e <= 8202 || 8232 === e || 8233 === e || 8239 === e || 8287 === e || 12288 === e || 65279 === e;
    }
    function _(e, t) {
        var n = a.validate(t, e);
        if (0 === n.errors.length) return null;
        var r, i, s = n.errors[0], l = s.property, c = s.message.toLowerCase();
        -1 != (r = c.indexOf("the property ")) && -1 != (i = c.indexOf(" is not defined in the schema and the schema does not allow additional properties")) && (r += "the property ".length, 
        l = "" === l ? c.substr(r, i - r) : l + "." + c.substr(r, i - r), c = "unsupported property");
        var u = new o.VError('property "%s": %s', l, c);
        return u.jsv_details = s, u;
    }
    function m(e) {
        r.ok(e[0] >= 0 && e[1] >= 0, "negative numbers not allowed in hrtimes"), r.ok(e[1] < 1e9, "nanoseconds column overflow");
    }
    function g(e, t) {
        m(e), m(t), r.ok(e[0] > t[0] || e[0] == t[0] && e[1] >= t[1], "negative differences not allowed");
        var n = [ e[0] - t[0], 0 ];
        return e[1] >= t[1] ? n[1] = e[1] - t[1] : (n[0]--, n[1] = 1e9 - (t[1] - e[1])), 
        n;
    }
    function v(e, t) {
        return m(e), m(t), e[1] += t[1], e[1] >= 1e9 && (e[0]++, e[1] -= 1e9), e[0] += t[0], 
        e;
    }
    function y(e, t, n) {
        var r, i;
        if (r = {}, n) for (i in n) r[i] = n[i];
        if (e) for (i in e) r[i] = e[i];
        if (t) for (i in t) r[i] = t[i];
        return r;
    }
}
