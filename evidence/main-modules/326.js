// analysis/pretty/main.js:34902; webpack module 326
function(e, t, n) {
    "use strict";
    /*! js-yaml 4.1.1 https://github.com/nodeca/js-yaml @license MIT */    function r(e) {
        return null == e;
    }
    n.r(t), n.d(t, "CORE_SCHEMA", function() {
        return rt;
    }), n.d(t, "DEFAULT_SCHEMA", function() {
        return it;
    }), n.d(t, "FAILSAFE_SCHEMA", function() {
        return tt;
    }), n.d(t, "JSON_SCHEMA", function() {
        return nt;
    }), n.d(t, "Schema", function() {
        return et;
    }), n.d(t, "Type", function() {
        return Ze;
    }), n.d(t, "YAMLException", function() {
        return lt;
    }), n.d(t, "default", function() {
        return pt;
    }), n.d(t, "dump", function() {
        return st;
    }), n.d(t, "load", function() {
        return ot;
    }), n.d(t, "loadAll", function() {
        return at;
    }), n.d(t, "safeDump", function() {
        return ht;
    }), n.d(t, "safeLoad", function() {
        return ut;
    }), n.d(t, "safeLoadAll", function() {
        return dt;
    }), n.d(t, "types", function() {
        return ct;
    });
    var i = {
        isNothing: r,
        isObject: function(e) {
            return "object" == typeof e && null !== e;
        },
        toArray: function(e) {
            return Array.isArray(e) ? e : r(e) ? [] : [ e ];
        },
        repeat: function(e, t) {
            var n, r = "";
            for (n = 0; n < t; n += 1) r += e;
            return r;
        },
        isNegativeZero: function(e) {
            return 0 === e && Number.NEGATIVE_INFINITY === 1 / e;
        },
        extend: function(e, t) {
            var n, r, i, o;
            if (t) for (n = 0, r = (o = Object.keys(t)).length; n < r; n += 1) e[i = o[n]] = t[i];
            return e;
        }
    };
    function o(e, t) {
        var n = "", r = e.reason || "(unknown reason)";
        return e.mark ? (e.mark.name && (n += 'in "' + e.mark.name + '" '), n += "(" + (e.mark.line + 1) + ":" + (e.mark.column + 1) + ")", 
        !t && e.mark.snippet && (n += "\n\n" + e.mark.snippet), r + " " + n) : r;
    }
    function a(e, t) {
        Error.call(this), this.name = "YAMLException", this.reason = e, this.mark = t, this.message = o(this, !1), 
        Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = (new Error).stack || "";
    }
    a.prototype = Object.create(Error.prototype), a.prototype.constructor = a, a.prototype.toString = function(e) {
        return this.name + ": " + o(this, e);
    };
    var s = a;
    function l(e, t, n, r, i) {
        var o = "", a = "", s = Math.floor(i / 2) - 1;
        return r - t > s && (t = r - s + (o = " ... ").length), n - r > s && (n = r + s - (a = " ...").length), 
        {
            str: o + e.slice(t, n).replace(/\t/g, "→") + a,
            pos: r - t + o.length
        };
    }
    function c(e, t) {
        return i.repeat(" ", t - e.length) + e;
    }
    var u = function(e, t) {
        if (t = Object.create(t || null), !e.buffer) return null;
        t.maxLength || (t.maxLength = 79), "number" != typeof t.indent && (t.indent = 1), 
        "number" != typeof t.linesBefore && (t.linesBefore = 3), "number" != typeof t.linesAfter && (t.linesAfter = 2);
        for (var n, r = /\r?\n|\r|\0/g, o = [ 0 ], a = [], s = -1; n = r.exec(e.buffer); ) a.push(n.index), 
        o.push(n.index + n[0].length), e.position <= n.index && s < 0 && (s = o.length - 2);
        s < 0 && (s = o.length - 1);
        var u, d, h = "", p = Math.min(e.line + t.linesAfter, a.length).toString().length, f = t.maxLength - (t.indent + p + 3);
        for (u = 1; u <= t.linesBefore && !(s - u < 0); u++) d = l(e.buffer, o[s - u], a[s - u], e.position - (o[s] - o[s - u]), f), 
        h = i.repeat(" ", t.indent) + c((e.line - u + 1).toString(), p) + " | " + d.str + "\n" + h;
        for (d = l(e.buffer, o[s], a[s], e.position, f), h += i.repeat(" ", t.indent) + c((e.line + 1).toString(), p) + " | " + d.str + "\n", 
        h += i.repeat("-", t.indent + p + 3 + d.pos) + "^\n", u = 1; u <= t.linesAfter && !(s + u >= a.length); u++) d = l(e.buffer, o[s + u], a[s + u], e.position - (o[s] - o[s + u]), f), 
        h += i.repeat(" ", t.indent) + c((e.line + u + 1).toString(), p) + " | " + d.str + "\n";
        return h.replace(/\n$/, "");
    }, d = [ "kind", "multi", "resolve", "construct", "instanceOf", "predicate", "represent", "representName", "defaultStyle", "styleAliases" ], h = [ "scalar", "sequence", "mapping" ];
    var p = function(e, t) {
        if (t = t || {}, Object.keys(t).forEach(function(t) {
            if (-1 === d.indexOf(t)) throw new s('Unknown option "' + t + '" is met in definition of "' + e + '" YAML type.');
        }), this.options = t, this.tag = e, this.kind = t.kind || null, this.resolve = t.resolve || function() {
            return !0;
        }, this.construct = t.construct || function(e) {
            return e;
        }, this.instanceOf = t.instanceOf || null, this.predicate = t.predicate || null, 
        this.represent = t.represent || null, this.representName = t.representName || null, 
        this.defaultStyle = t.defaultStyle || null, this.multi = t.multi || !1, this.styleAliases = function(e) {
            var t = {};
            return null !== e && Object.keys(e).forEach(function(n) {
                e[n].forEach(function(e) {
                    t[String(e)] = n;
                });
            }), t;
        }(t.styleAliases || null), -1 === h.indexOf(this.kind)) throw new s('Unknown kind "' + this.kind + '" is specified for "' + e + '" YAML type.');
    };
    function f(e, t) {
        var n = [];
        return e[t].forEach(function(e) {
            var t = n.length;
            n.forEach(function(n, r) {
                n.tag === e.tag && n.kind === e.kind && n.multi === e.multi && (t = r);
            }), n[t] = e;
        }), n;
    }
    function _(e) {
        return this.extend(e);
    }
    _.prototype.extend = function(e) {
        var t = [], n = [];
        if (e instanceof p) n.push(e); else if (Array.isArray(e)) n = n.concat(e); else {
            if (!e || !Array.isArray(e.implicit) && !Array.isArray(e.explicit)) throw new s("Schema.extend argument should be a Type, [ Type ], or a schema definition ({ implicit: [...], explicit: [...] })");
            e.implicit && (t = t.concat(e.implicit)), e.explicit && (n = n.concat(e.explicit));
        }
        t.forEach(function(e) {
            if (!(e instanceof p)) throw new s("Specified list of YAML types (or a single Type object) contains a non-Type object.");
            if (e.loadKind && "scalar" !== e.loadKind) throw new s("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.");
            if (e.multi) throw new s("There is a multi type in the implicit list of a schema. Multi tags can only be listed as explicit.");
        }), n.forEach(function(e) {
            if (!(e instanceof p)) throw new s("Specified list of YAML types (or a single Type object) contains a non-Type object.");
        });
        var r = Object.create(_.prototype);
        return r.implicit = (this.implicit || []).concat(t), r.explicit = (this.explicit || []).concat(n), 
        r.compiledImplicit = f(r, "implicit"), r.compiledExplicit = f(r, "explicit"), r.compiledTypeMap = function() {
            var e, t, n = {
                scalar: {},
                sequence: {},
                mapping: {},
                fallback: {},
                multi: {
                    scalar: [],
                    sequence: [],
                    mapping: [],
                    fallback: []
                }
            };
            function r(e) {
                e.multi ? (n.multi[e.kind].push(e), n.multi.fallback.push(e)) : n[e.kind][e.tag] = n.fallback[e.tag] = e;
            }
            for (e = 0, t = arguments.length; e < t; e += 1) arguments[e].forEach(r);
            return n;
        }(r.compiledImplicit, r.compiledExplicit), r;
    };
    var m = _, g = new p("tag:yaml.org,2002:str", {
        kind: "scalar",
        construct: function(e) {
            return null !== e ? e : "";
        }
    }), v = new p("tag:yaml.org,2002:seq", {
        kind: "sequence",
        construct: function(e) {
            return null !== e ? e : [];
        }
    }), y = new p("tag:yaml.org,2002:map", {
        kind: "mapping",
        construct: function(e) {
            return null !== e ? e : {};
        }
    }), E = new m({
        explicit: [ g, v, y ]
    });
    var b = new p("tag:yaml.org,2002:null", {
        kind: "scalar",
        resolve: function(e) {
            if (null === e) return !0;
            var t = e.length;
            return 1 === t && "~" === e || 4 === t && ("null" === e || "Null" === e || "NULL" === e);
        },
        construct: function() {
            return null;
        },
        predicate: function(e) {
            return null === e;
        },
        represent: {
            canonical: function() {
                return "~";
            },
            lowercase: function() {
                return "null";
            },
            uppercase: function() {
                return "NULL";
            },
            camelcase: function() {
                return "Null";
            },
            empty: function() {
                return "";
            }
        },
        defaultStyle: "lowercase"
    });
    var w = new p("tag:yaml.org,2002:bool", {
        kind: "scalar",
        resolve: function(e) {
            if (null === e) return !1;
            var t = e.length;
            return 4 === t && ("true" === e || "True" === e || "TRUE" === e) || 5 === t && ("false" === e || "False" === e || "FALSE" === e);
        },
        construct: function(e) {
            return "true" === e || "True" === e || "TRUE" === e;
        },
        predicate: function(e) {
            return "[object Boolean]" === Object.prototype.toString.call(e);
        },
        represent: {
            lowercase: function(e) {
                return e ? "true" : "false";
            },
            uppercase: function(e) {
                return e ? "TRUE" : "FALSE";
            },
            camelcase: function(e) {
                return e ? "True" : "False";
            }
        },
        defaultStyle: "lowercase"
    });
    function S(e) {
        return 48 <= e && e <= 55;
    }
    function T(e) {
        return 48 <= e && e <= 57;
    }
    var A = new p("tag:yaml.org,2002:int", {
        kind: "scalar",
        resolve: function(e) {
            if (null === e) return !1;
            var t, n, r = e.length, i = 0, o = !1;
            if (!r) return !1;
            if ("-" !== (t = e[i]) && "+" !== t || (t = e[++i]), "0" === t) {
                if (i + 1 === r) return !0;
                if ("b" === (t = e[++i])) {
                    for (i++; i < r; i++) if ("_" !== (t = e[i])) {
                        if ("0" !== t && "1" !== t) return !1;
                        o = !0;
                    }
                    return o && "_" !== t;
                }
                if ("x" === t) {
                    for (i++; i < r; i++) if ("_" !== (t = e[i])) {
                        if (!(48 <= (n = e.charCodeAt(i)) && n <= 57 || 65 <= n && n <= 70 || 97 <= n && n <= 102)) return !1;
                        o = !0;
                    }
                    return o && "_" !== t;
                }
                if ("o" === t) {
                    for (i++; i < r; i++) if ("_" !== (t = e[i])) {
                        if (!S(e.charCodeAt(i))) return !1;
                        o = !0;
                    }
                    return o && "_" !== t;
                }
            }
            if ("_" === t) return !1;
            for (;i < r; i++) if ("_" !== (t = e[i])) {
                if (!T(e.charCodeAt(i))) return !1;
                o = !0;
            }
            return !(!o || "_" === t);
        },
        construct: function(e) {
            var t, n = e, r = 1;
            if (-1 !== n.indexOf("_") && (n = n.replace(/_/g, "")), "-" !== (t = n[0]) && "+" !== t || ("-" === t && (r = -1), 
            t = (n = n.slice(1))[0]), "0" === n) return 0;
            if ("0" === t) {
                if ("b" === n[1]) return r * parseInt(n.slice(2), 2);
                if ("x" === n[1]) return r * parseInt(n.slice(2), 16);
                if ("o" === n[1]) return r * parseInt(n.slice(2), 8);
            }
            return r * parseInt(n, 10);
        },
        predicate: function(e) {
            return "[object Number]" === Object.prototype.toString.call(e) && e % 1 == 0 && !i.isNegativeZero(e);
        },
        represent: {
            binary: function(e) {
                return e >= 0 ? "0b" + e.toString(2) : "-0b" + e.toString(2).slice(1);
            },
            octal: function(e) {
                return e >= 0 ? "0o" + e.toString(8) : "-0o" + e.toString(8).slice(1);
            },
            decimal: function(e) {
                return e.toString(10);
            },
            hexadecimal: function(e) {
                return e >= 0 ? "0x" + e.toString(16).toUpperCase() : "-0x" + e.toString(16).toUpperCase().slice(1);
            }
        },
        defaultStyle: "decimal",
        styleAliases: {
            binary: [ 2, "bin" ],
            octal: [ 8, "oct" ],
            decimal: [ 10, "dec" ],
            hexadecimal: [ 16, "hex" ]
        }
    }), O = new RegExp("^(?:[-+]?(?:[0-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$");
    var C = /^[-+]?[0-9]+e/;
    var N = new p("tag:yaml.org,2002:float", {
        kind: "scalar",
        resolve: function(e) {
            return null !== e && !(!O.test(e) || "_" === e[e.length - 1]);
        },
        construct: function(e) {
            var t, n;
            return n = "-" === (t = e.replace(/_/g, "").toLowerCase())[0] ? -1 : 1, "+-".indexOf(t[0]) >= 0 && (t = t.slice(1)), 
            ".inf" === t ? 1 === n ? Number.POSITIVE_INFINITY : Number.NEGATIVE_INFINITY : ".nan" === t ? NaN : n * parseFloat(t, 10);
        },
        predicate: function(e) {
            return "[object Number]" === Object.prototype.toString.call(e) && (e % 1 != 0 || i.isNegativeZero(e));
        },
        represent: function(e, t) {
            var n;
            if (isNaN(e)) switch (t) {
              case "lowercase":
                return ".nan";

              case "uppercase":
                return ".NAN";

              case "camelcase":
                return ".NaN";
            } else if (Number.POSITIVE_INFINITY === e) switch (t) {
              case "lowercase":
                return ".inf";

              case "uppercase":
                return ".INF";

              case "camelcase":
                return ".Inf";
            } else if (Number.NEGATIVE_INFINITY === e) switch (t) {
              case "lowercase":
                return "-.inf";

              case "uppercase":
                return "-.INF";

              case "camelcase":
                return "-.Inf";
            } else if (i.isNegativeZero(e)) return "-0.0";
            return n = e.toString(10), C.test(n) ? n.replace("e", ".e") : n;
        },
        defaultStyle: "lowercase"
    }), I = E.extend({
        implicit: [ b, w, A, N ]
    }), R = I, D = new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$"), L = new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$");
    var k = new p("tag:yaml.org,2002:timestamp", {
        kind: "scalar",
        resolve: function(e) {
            return null !== e && (null !== D.exec(e) || null !== L.exec(e));
        },
        construct: function(e) {
            var t, n, r, i, o, a, s, l, c = 0, u = null;
            if (null === (t = D.exec(e)) && (t = L.exec(e)), null === t) throw new Error("Date resolve error");
            if (n = +t[1], r = +t[2] - 1, i = +t[3], !t[4]) return new Date(Date.UTC(n, r, i));
            if (o = +t[4], a = +t[5], s = +t[6], t[7]) {
                for (c = t[7].slice(0, 3); c.length < 3; ) c += "0";
                c = +c;
            }
            return t[9] && (u = 6e4 * (60 * +t[10] + +(t[11] || 0)), "-" === t[9] && (u = -u)), 
            l = new Date(Date.UTC(n, r, i, o, a, s, c)), u && l.setTime(l.getTime() - u), l;
        },
        instanceOf: Date,
        represent: function(e) {
            return e.toISOString();
        }
    });
    var M = new p("tag:yaml.org,2002:merge", {
        kind: "scalar",
        resolve: function(e) {
            return "<<" === e || null === e;
        }
    }), P = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=\n\r";
    var x = new p("tag:yaml.org,2002:binary", {
        kind: "scalar",
        resolve: function(e) {
            if (null === e) return !1;
            var t, n, r = 0, i = e.length, o = P;
            for (n = 0; n < i; n++) if (!((t = o.indexOf(e.charAt(n))) > 64)) {
                if (t < 0) return !1;
                r += 6;
            }
            return r % 8 == 0;
        },
        construct: function(e) {
            var t, n, r = e.replace(/[\r\n=]/g, ""), i = r.length, o = P, a = 0, s = [];
            for (t = 0; t < i; t++) t % 4 == 0 && t && (s.push(a >> 16 & 255), s.push(a >> 8 & 255), 
            s.push(255 & a)), a = a << 6 | o.indexOf(r.charAt(t));
            return 0 === (n = i % 4 * 6) ? (s.push(a >> 16 & 255), s.push(a >> 8 & 255), s.push(255 & a)) : 18 === n ? (s.push(a >> 10 & 255), 
            s.push(a >> 2 & 255)) : 12 === n && s.push(a >> 4 & 255), new Uint8Array(s);
        },
        predicate: function(e) {
            return "[object Uint8Array]" === Object.prototype.toString.call(e);
        },
        represent: function(e) {
            var t, n, r = "", i = 0, o = e.length, a = P;
            for (t = 0; t < o; t++) t % 3 == 0 && t && (r += a[i >> 18 & 63], r += a[i >> 12 & 63], 
            r += a[i >> 6 & 63], r += a[63 & i]), i = (i << 8) + e[t];
            return 0 === (n = o % 3) ? (r += a[i >> 18 & 63], r += a[i >> 12 & 63], r += a[i >> 6 & 63], 
            r += a[63 & i]) : 2 === n ? (r += a[i >> 10 & 63], r += a[i >> 4 & 63], r += a[i << 2 & 63], 
            r += a[64]) : 1 === n && (r += a[i >> 2 & 63], r += a[i << 4 & 63], r += a[64], 
            r += a[64]), r;
        }
    }), F = Object.prototype.hasOwnProperty, j = Object.prototype.toString;
    var U = new p("tag:yaml.org,2002:omap", {
        kind: "sequence",
        resolve: function(e) {
            if (null === e) return !0;
            var t, n, r, i, o, a = [], s = e;
            for (t = 0, n = s.length; t < n; t += 1) {
                if (r = s[t], o = !1, "[object Object]" !== j.call(r)) return !1;
                for (i in r) if (F.call(r, i)) {
                    if (o) return !1;
                    o = !0;
                }
                if (!o) return !1;
                if (-1 !== a.indexOf(i)) return !1;
                a.push(i);
            }
            return !0;
        },
        construct: function(e) {
            return null !== e ? e : [];
        }
    }), W = Object.prototype.toString;
    var B = new p("tag:yaml.org,2002:pairs", {
        kind: "sequence",
        resolve: function(e) {
            if (null === e) return !0;
            var t, n, r, i, o, a = e;
            for (o = new Array(a.length), t = 0, n = a.length; t < n; t += 1) {
                if (r = a[t], "[object Object]" !== W.call(r)) return !1;
                if (1 !== (i = Object.keys(r)).length) return !1;
                o[t] = [ i[0], r[i[0]] ];
            }
            return !0;
        },
        construct: function(e) {
            if (null === e) return [];
            var t, n, r, i, o, a = e;
            for (o = new Array(a.length), t = 0, n = a.length; t < n; t += 1) r = a[t], i = Object.keys(r), 
            o[t] = [ i[0], r[i[0]] ];
            return o;
        }
    }), H = Object.prototype.hasOwnProperty;
    var $ = new p("tag:yaml.org,2002:set", {
        kind: "mapping",
        resolve: function(e) {
            if (null === e) return !0;
            var t, n = e;
            for (t in n) if (H.call(n, t) && null !== n[t]) return !1;
            return !0;
        },
        construct: function(e) {
            return null !== e ? e : {};
        }
    }), Y = R.extend({
        implicit: [ k, M ],
        explicit: [ x, U, B, $ ]
    }), z = Object.prototype.hasOwnProperty, G = /[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x84\x86-\x9F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/, q = /[\x85\u2028\u2029]/, V = /[,\[\]\{\}]/, K = /^(?:!|!!|![a-z\-]+!)$/i, J = /^(?:!|[^,\[\]\{\}])(?:%[0-9a-f]{2}|[0-9a-z\-#;\/\?:@&=\+\$,_\.!~\*'\(\)\[\]])*$/i;
    function X(e) {
        return Object.prototype.toString.call(e);
    }
    function Q(e) {
        return 10 === e || 13 === e;
    }
    function Z(e) {
        return 9 === e || 32 === e;
    }
    function ee(e) {
        return 9 === e || 32 === e || 10 === e || 13 === e;
    }
    function te(e) {
        return 44 === e || 91 === e || 93 === e || 123 === e || 125 === e;
    }
    function ne(e) {
        var t;
        return 48 <= e && e <= 57 ? e - 48 : 97 <= (t = 32 | e) && t <= 102 ? t - 97 + 10 : -1;
    }
    function re(e) {
        return 48 === e ? "\0" : 97 === e ? "" : 98 === e ? "\b" : 116 === e || 9 === e ? "\t" : 110 === e ? "\n" : 118 === e ? "\v" : 102 === e ? "\f" : 114 === e ? "\r" : 101 === e ? "" : 32 === e ? " " : 34 === e ? '"' : 47 === e ? "/" : 92 === e ? "\\" : 78 === e ? "" : 95 === e ? " " : 76 === e ? "\u2028" : 80 === e ? "\u2029" : "";
    }
    function ie(e) {
        return e <= 65535 ? String.fromCharCode(e) : String.fromCharCode(55296 + (e - 65536 >> 10), 56320 + (e - 65536 & 1023));
    }
    function oe(e, t, n) {
        "__proto__" === t ? Object.defineProperty(e, t, {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            value: n
        }) : e[t] = n;
    }
    for (var ae = new Array(256), se = new Array(256), le = 0; le < 256; le++) ae[le] = re(le) ? 1 : 0, 
    se[le] = re(le);
    function ce(e, t) {
        this.input = e, this.filename = t.filename || null, this.schema = t.schema || Y, 
        this.onWarning = t.onWarning || null, this.legacy = t.legacy || !1, this.json = t.json || !1, 
        this.listener = t.listener || null, this.implicitTypes = this.schema.compiledImplicit, 
        this.typeMap = this.schema.compiledTypeMap, this.length = e.length, this.position = 0, 
        this.line = 0, this.lineStart = 0, this.lineIndent = 0, this.firstTabInLine = -1, 
        this.documents = [];
    }
    function ue(e, t) {
        var n = {
            name: e.filename,
            buffer: e.input.slice(0, -1),
            position: e.position,
            line: e.line,
            column: e.position - e.lineStart
        };
        return n.snippet = u(n), new s(t, n);
    }
    function de(e, t) {
        throw ue(e, t);
    }
    function he(e, t) {
        e.onWarning && e.onWarning.call(null, ue(e, t));
    }
    var pe = {
        YAML: function(e, t, n) {
            var r, i, o;
            null !== e.version && de(e, "duplication of %YAML directive"), 1 !== n.length && de(e, "YAML directive accepts exactly one argument"), 
            null === (r = /^([0-9]+)\.([0-9]+)$/.exec(n[0])) && de(e, "ill-formed argument of the YAML directive"), 
            i = parseInt(r[1], 10), o = parseInt(r[2], 10), 1 !== i && de(e, "unacceptable YAML version of the document"), 
            e.version = n[0], e.checkLineBreaks = o < 2, 1 !== o && 2 !== o && he(e, "unsupported YAML version of the document");
        },
        TAG: function(e, t, n) {
            var r, i;
            2 !== n.length && de(e, "TAG directive accepts exactly two arguments"), r = n[0], 
            i = n[1], K.test(r) || de(e, "ill-formed tag handle (first argument) of the TAG directive"), 
            z.call(e.tagMap, r) && de(e, 'there is a previously declared suffix for "' + r + '" tag handle'), 
            J.test(i) || de(e, "ill-formed tag prefix (second argument) of the TAG directive");
            try {
                i = decodeURIComponent(i);
            } catch (t) {
                de(e, "tag prefix is malformed: " + i);
            }
            e.tagMap[r] = i;
        }
    };
    function fe(e, t, n, r) {
        var i, o, a, s;
        if (t < n) {
            if (s = e.input.slice(t, n), r) for (i = 0, o = s.length; i < o; i += 1) 9 === (a = s.charCodeAt(i)) || 32 <= a && a <= 1114111 || de(e, "expected valid JSON character"); else G.test(s) && de(e, "the stream contains non-printable characters");
            e.result += s;
        }
    }
    function _e(e, t, n, r) {
        var o, a, s, l;
        for (i.isObject(n) || de(e, "cannot merge mappings; the provided source object is unacceptable"), 
        s = 0, l = (o = Object.keys(n)).length; s < l; s += 1) a = o[s], z.call(t, a) || (oe(t, a, n[a]), 
        r[a] = !0);
    }
    function me(e, t, n, r, i, o, a, s, l) {
        var c, u;
        if (Array.isArray(i)) for (c = 0, u = (i = Array.prototype.slice.call(i)).length; c < u; c += 1) Array.isArray(i[c]) && de(e, "nested arrays are not supported inside keys"), 
        "object" == typeof i && "[object Object]" === X(i[c]) && (i[c] = "[object Object]");
        if ("object" == typeof i && "[object Object]" === X(i) && (i = "[object Object]"), 
        i = String(i), null === t && (t = {}), "tag:yaml.org,2002:merge" === r) if (Array.isArray(o)) for (c = 0, 
        u = o.length; c < u; c += 1) _e(e, t, o[c], n); else _e(e, t, o, n); else e.json || z.call(n, i) || !z.call(t, i) || (e.line = a || e.line, 
        e.lineStart = s || e.lineStart, e.position = l || e.position, de(e, "duplicated mapping key")), 
        oe(t, i, o), delete n[i];
        return t;
    }
    function ge(e) {
        var t;
        10 === (t = e.input.charCodeAt(e.position)) ? e.position++ : 13 === t ? (e.position++, 
        10 === e.input.charCodeAt(e.position) && e.position++) : de(e, "a line break is expected"), 
        e.line += 1, e.lineStart = e.position, e.firstTabInLine = -1;
    }
    function ve(e, t, n) {
        for (var r = 0, i = e.input.charCodeAt(e.position); 0 !== i; ) {
            for (;Z(i); ) 9 === i && -1 === e.firstTabInLine && (e.firstTabInLine = e.position), 
            i = e.input.charCodeAt(++e.position);
            if (t && 35 === i) do {
                i = e.input.charCodeAt(++e.position);
            } while (10 !== i && 13 !== i && 0 !== i);
            if (!Q(i)) break;
            for (ge(e), i = e.input.charCodeAt(e.position), r++, e.lineIndent = 0; 32 === i; ) e.lineIndent++, 
            i = e.input.charCodeAt(++e.position);
        }
        return -1 !== n && 0 !== r && e.lineIndent < n && he(e, "deficient indentation"), 
        r;
    }
    function ye(e) {
        var t, n = e.position;
        return !(45 !== (t = e.input.charCodeAt(n)) && 46 !== t || t !== e.input.charCodeAt(n + 1) || t !== e.input.charCodeAt(n + 2) || (n += 3, 
        0 !== (t = e.input.charCodeAt(n)) && !ee(t)));
    }
    function Ee(e, t) {
        1 === t ? e.result += " " : t > 1 && (e.result += i.repeat("\n", t - 1));
    }
    function be(e, t) {
        var n, r, i = e.tag, o = e.anchor, a = [], s = !1;
        if (-1 !== e.firstTabInLine) return !1;
        for (null !== e.anchor && (e.anchorMap[e.anchor] = a), r = e.input.charCodeAt(e.position); 0 !== r && (-1 !== e.firstTabInLine && (e.position = e.firstTabInLine, 
        de(e, "tab characters must not be used in indentation")), 45 === r) && ee(e.input.charCodeAt(e.position + 1)); ) if (s = !0, 
        e.position++, ve(e, !0, -1) && e.lineIndent <= t) a.push(null), r = e.input.charCodeAt(e.position); else if (n = e.line, 
        Te(e, t, 3, !1, !0), a.push(e.result), ve(e, !0, -1), r = e.input.charCodeAt(e.position), 
        (e.line === n || e.lineIndent > t) && 0 !== r) de(e, "bad indentation of a sequence entry"); else if (e.lineIndent < t) break;
        return !!s && (e.tag = i, e.anchor = o, e.kind = "sequence", e.result = a, !0);
    }
    function we(e) {
        var t, n, r, i, o = !1, a = !1;
        if (33 !== (i = e.input.charCodeAt(e.position))) return !1;
        if (null !== e.tag && de(e, "duplication of a tag property"), 60 === (i = e.input.charCodeAt(++e.position)) ? (o = !0, 
        i = e.input.charCodeAt(++e.position)) : 33 === i ? (a = !0, n = "!!", i = e.input.charCodeAt(++e.position)) : n = "!", 
        t = e.position, o) {
            do {
                i = e.input.charCodeAt(++e.position);
            } while (0 !== i && 62 !== i);
            e.position < e.length ? (r = e.input.slice(t, e.position), i = e.input.charCodeAt(++e.position)) : de(e, "unexpected end of the stream within a verbatim tag");
        } else {
            for (;0 !== i && !ee(i); ) 33 === i && (a ? de(e, "tag suffix cannot contain exclamation marks") : (n = e.input.slice(t - 1, e.position + 1), 
            K.test(n) || de(e, "named tag handle cannot contain such characters"), a = !0, t = e.position + 1)), 
            i = e.input.charCodeAt(++e.position);
            r = e.input.slice(t, e.position), V.test(r) && de(e, "tag suffix cannot contain flow indicator characters");
        }
        r && !J.test(r) && de(e, "tag name cannot contain such characters: " + r);
        try {
            r = decodeURIComponent(r);
        } catch (t) {
            de(e, "tag name is malformed: " + r);
        }
        return o ? e.tag = r : z.call(e.tagMap, n) ? e.tag = e.tagMap[n] + r : "!" === n ? e.tag = "!" + r : "!!" === n ? e.tag = "tag:yaml.org,2002:" + r : de(e, 'undeclared tag handle "' + n + '"'), 
        !0;
    }
    function Se(e) {
        var t, n;
        if (38 !== (n = e.input.charCodeAt(e.position))) return !1;
        for (null !== e.anchor && de(e, "duplication of an anchor property"), n = e.input.charCodeAt(++e.position), 
        t = e.position; 0 !== n && !ee(n) && !te(n); ) n = e.input.charCodeAt(++e.position);
        return e.position === t && de(e, "name of an anchor node must contain at least one character"), 
        e.anchor = e.input.slice(t, e.position), !0;
    }
    function Te(e, t, n, r, o) {
        var a, s, l, c, u, d, h, p, f, _ = 1, m = !1, g = !1;
        if (null !== e.listener && e.listener("open", e), e.tag = null, e.anchor = null, 
        e.kind = null, e.result = null, a = s = l = 4 === n || 3 === n, r && ve(e, !0, -1) && (m = !0, 
        e.lineIndent > t ? _ = 1 : e.lineIndent === t ? _ = 0 : e.lineIndent < t && (_ = -1)), 
        1 === _) for (;we(e) || Se(e); ) ve(e, !0, -1) ? (m = !0, l = a, e.lineIndent > t ? _ = 1 : e.lineIndent === t ? _ = 0 : e.lineIndent < t && (_ = -1)) : l = !1;
        if (l && (l = m || o), 1 !== _ && 4 !== n || (p = 1 === n || 2 === n ? t : t + 1, 
        f = e.position - e.lineStart, 1 === _ ? l && (be(e, f) || function(e, t, n) {
            var r, i, o, a, s, l, c, u = e.tag, d = e.anchor, h = {}, p = Object.create(null), f = null, _ = null, m = null, g = !1, v = !1;
            if (-1 !== e.firstTabInLine) return !1;
            for (null !== e.anchor && (e.anchorMap[e.anchor] = h), c = e.input.charCodeAt(e.position); 0 !== c; ) {
                if (g || -1 === e.firstTabInLine || (e.position = e.firstTabInLine, de(e, "tab characters must not be used in indentation")), 
                r = e.input.charCodeAt(e.position + 1), o = e.line, 63 !== c && 58 !== c || !ee(r)) {
                    if (a = e.line, s = e.lineStart, l = e.position, !Te(e, n, 2, !1, !0)) break;
                    if (e.line === o) {
                        for (c = e.input.charCodeAt(e.position); Z(c); ) c = e.input.charCodeAt(++e.position);
                        if (58 === c) ee(c = e.input.charCodeAt(++e.position)) || de(e, "a whitespace character is expected after the key-value separator within a block mapping"), 
                        g && (me(e, h, p, f, _, null, a, s, l), f = _ = m = null), v = !0, g = !1, i = !1, 
                        f = e.tag, _ = e.result; else {
                            if (!v) return e.tag = u, e.anchor = d, !0;
                            de(e, "can not read an implicit mapping pair; a colon is missed");
                        }
                    } else {
                        if (!v) return e.tag = u, e.anchor = d, !0;
                        de(e, "can not read a block mapping entry; a multiline key may not be an implicit key");
                    }
                } else 63 === c ? (g && (me(e, h, p, f, _, null, a, s, l), f = _ = m = null), v = !0, 
                g = !0, i = !0) : g ? (g = !1, i = !0) : de(e, "incomplete explicit mapping pair; a key node is missed; or followed by a non-tabulated empty line"), 
                e.position += 1, c = r;
                if ((e.line === o || e.lineIndent > t) && (g && (a = e.line, s = e.lineStart, l = e.position), 
                Te(e, t, 4, !0, i) && (g ? _ = e.result : m = e.result), g || (me(e, h, p, f, _, m, a, s, l), 
                f = _ = m = null), ve(e, !0, -1), c = e.input.charCodeAt(e.position)), (e.line === o || e.lineIndent > t) && 0 !== c) de(e, "bad indentation of a mapping entry"); else if (e.lineIndent < t) break;
            }
            return g && me(e, h, p, f, _, null, a, s, l), v && (e.tag = u, e.anchor = d, e.kind = "mapping", 
            e.result = h), v;
        }(e, f, p)) || function(e, t) {
            var n, r, i, o, a, s, l, c, u, d, h, p, f = !0, _ = e.tag, m = e.anchor, g = Object.create(null);
            if (91 === (p = e.input.charCodeAt(e.position))) a = 93, c = !1, o = []; else {
                if (123 !== p) return !1;
                a = 125, c = !0, o = {};
            }
            for (null !== e.anchor && (e.anchorMap[e.anchor] = o), p = e.input.charCodeAt(++e.position); 0 !== p; ) {
                if (ve(e, !0, t), (p = e.input.charCodeAt(e.position)) === a) return e.position++, 
                e.tag = _, e.anchor = m, e.kind = c ? "mapping" : "sequence", e.result = o, !0;
                f ? 44 === p && de(e, "expected the node content, but found ','") : de(e, "missed comma between flow collection entries"), 
                h = null, s = l = !1, 63 === p && ee(e.input.charCodeAt(e.position + 1)) && (s = l = !0, 
                e.position++, ve(e, !0, t)), n = e.line, r = e.lineStart, i = e.position, Te(e, t, 1, !1, !0), 
                d = e.tag, u = e.result, ve(e, !0, t), p = e.input.charCodeAt(e.position), !l && e.line !== n || 58 !== p || (s = !0, 
                p = e.input.charCodeAt(++e.position), ve(e, !0, t), Te(e, t, 1, !1, !0), h = e.result), 
                c ? me(e, o, g, d, u, h, n, r, i) : s ? o.push(me(e, null, g, d, u, h, n, r, i)) : o.push(u), 
                ve(e, !0, t), 44 === (p = e.input.charCodeAt(e.position)) ? (f = !0, p = e.input.charCodeAt(++e.position)) : f = !1;
            }
            de(e, "unexpected end of the stream within a flow collection");
        }(e, p) ? g = !0 : (s && function(e, t) {
            var n, r, o, a, s, l = 1, c = !1, u = !1, d = t, h = 0, p = !1;
            if (124 === (a = e.input.charCodeAt(e.position))) r = !1; else {
                if (62 !== a) return !1;
                r = !0;
            }
            for (e.kind = "scalar", e.result = ""; 0 !== a; ) if (43 === (a = e.input.charCodeAt(++e.position)) || 45 === a) 1 === l ? l = 43 === a ? 3 : 2 : de(e, "repeat of a chomping mode identifier"); else {
                if (!((o = 48 <= (s = a) && s <= 57 ? s - 48 : -1) >= 0)) break;
                0 === o ? de(e, "bad explicit indentation width of a block scalar; it cannot be less than one") : u ? de(e, "repeat of an indentation width identifier") : (d = t + o - 1, 
                u = !0);
            }
            if (Z(a)) {
                do {
                    a = e.input.charCodeAt(++e.position);
                } while (Z(a));
                if (35 === a) do {
                    a = e.input.charCodeAt(++e.position);
                } while (!Q(a) && 0 !== a);
            }
            for (;0 !== a; ) {
                for (ge(e), e.lineIndent = 0, a = e.input.charCodeAt(e.position); (!u || e.lineIndent < d) && 32 === a; ) e.lineIndent++, 
                a = e.input.charCodeAt(++e.position);
                if (!u && e.lineIndent > d && (d = e.lineIndent), Q(a)) h++; else {
                    if (e.lineIndent < d) {
                        3 === l ? e.result += i.repeat("\n", c ? 1 + h : h) : 1 === l && c && (e.result += "\n");
                        break;
                    }
                    for (r ? Z(a) ? (p = !0, e.result += i.repeat("\n", c ? 1 + h : h)) : p ? (p = !1, 
                    e.result += i.repeat("\n", h + 1)) : 0 === h ? c && (e.result += " ") : e.result += i.repeat("\n", h) : e.result += i.repeat("\n", c ? 1 + h : h), 
                    c = !0, u = !0, h = 0, n = e.position; !Q(a) && 0 !== a; ) a = e.input.charCodeAt(++e.position);
                    fe(e, n, e.position, !1);
                }
            }
            return !0;
        }(e, p) || function(e, t) {
            var n, r, i;
            if (39 !== (n = e.input.charCodeAt(e.position))) return !1;
            for (e.kind = "scalar", e.result = "", e.position++, r = i = e.position; 0 !== (n = e.input.charCodeAt(e.position)); ) if (39 === n) {
                if (fe(e, r, e.position, !0), 39 !== (n = e.input.charCodeAt(++e.position))) return !0;
                r = e.position, e.position++, i = e.position;
            } else Q(n) ? (fe(e, r, i, !0), Ee(e, ve(e, !1, t)), r = i = e.position) : e.position === e.lineStart && ye(e) ? de(e, "unexpected end of the document within a single quoted scalar") : (e.position++, 
            i = e.position);
            de(e, "unexpected end of the stream within a single quoted scalar");
        }(e, p) || function(e, t) {
            var n, r, i, o, a, s, l;
            if (34 !== (s = e.input.charCodeAt(e.position))) return !1;
            for (e.kind = "scalar", e.result = "", e.position++, n = r = e.position; 0 !== (s = e.input.charCodeAt(e.position)); ) {
                if (34 === s) return fe(e, n, e.position, !0), e.position++, !0;
                if (92 === s) {
                    if (fe(e, n, e.position, !0), Q(s = e.input.charCodeAt(++e.position))) ve(e, !1, t); else if (s < 256 && ae[s]) e.result += se[s], 
                    e.position++; else if ((a = 120 === (l = s) ? 2 : 117 === l ? 4 : 85 === l ? 8 : 0) > 0) {
                        for (i = a, o = 0; i > 0; i--) (a = ne(s = e.input.charCodeAt(++e.position))) >= 0 ? o = (o << 4) + a : de(e, "expected hexadecimal character");
                        e.result += ie(o), e.position++;
                    } else de(e, "unknown escape sequence");
                    n = r = e.position;
                } else Q(s) ? (fe(e, n, r, !0), Ee(e, ve(e, !1, t)), n = r = e.position) : e.position === e.lineStart && ye(e) ? de(e, "unexpected end of the document within a double quoted scalar") : (e.position++, 
                r = e.position);
            }
            de(e, "unexpected end of the stream within a double quoted scalar");
        }(e, p) ? g = !0 : !function(e) {
            var t, n, r;
            if (42 !== (r = e.input.charCodeAt(e.position))) return !1;
            for (r = e.input.charCodeAt(++e.position), t = e.position; 0 !== r && !ee(r) && !te(r); ) r = e.input.charCodeAt(++e.position);
            return e.position === t && de(e, "name of an alias node must contain at least one character"), 
            n = e.input.slice(t, e.position), z.call(e.anchorMap, n) || de(e, 'unidentified alias "' + n + '"'), 
            e.result = e.anchorMap[n], ve(e, !0, -1), !0;
        }(e) ? function(e, t, n) {
            var r, i, o, a, s, l, c, u, d = e.kind, h = e.result;
            if (ee(u = e.input.charCodeAt(e.position)) || te(u) || 35 === u || 38 === u || 42 === u || 33 === u || 124 === u || 62 === u || 39 === u || 34 === u || 37 === u || 64 === u || 96 === u) return !1;
            if ((63 === u || 45 === u) && (ee(r = e.input.charCodeAt(e.position + 1)) || n && te(r))) return !1;
            for (e.kind = "scalar", e.result = "", i = o = e.position, a = !1; 0 !== u; ) {
                if (58 === u) {
                    if (ee(r = e.input.charCodeAt(e.position + 1)) || n && te(r)) break;
                } else if (35 === u) {
                    if (ee(e.input.charCodeAt(e.position - 1))) break;
                } else {
                    if (e.position === e.lineStart && ye(e) || n && te(u)) break;
                    if (Q(u)) {
                        if (s = e.line, l = e.lineStart, c = e.lineIndent, ve(e, !1, -1), e.lineIndent >= t) {
                            a = !0, u = e.input.charCodeAt(e.position);
                            continue;
                        }
                        e.position = o, e.line = s, e.lineStart = l, e.lineIndent = c;
                        break;
                    }
                }
                a && (fe(e, i, o, !1), Ee(e, e.line - s), i = o = e.position, a = !1), Z(u) || (o = e.position + 1), 
                u = e.input.charCodeAt(++e.position);
            }
            return fe(e, i, o, !1), !!e.result || (e.kind = d, e.result = h, !1);
        }(e, p, 1 === n) && (g = !0, null === e.tag && (e.tag = "?")) : (g = !0, null === e.tag && null === e.anchor || de(e, "alias node should not have any properties")), 
        null !== e.anchor && (e.anchorMap[e.anchor] = e.result)) : 0 === _ && (g = l && be(e, f))), 
        null === e.tag) null !== e.anchor && (e.anchorMap[e.anchor] = e.result); else if ("?" === e.tag) {
            for (null !== e.result && "scalar" !== e.kind && de(e, 'unacceptable node kind for !<?> tag; it should be "scalar", not "' + e.kind + '"'), 
            c = 0, u = e.implicitTypes.length; c < u; c += 1) if ((h = e.implicitTypes[c]).resolve(e.result)) {
                e.result = h.construct(e.result), e.tag = h.tag, null !== e.anchor && (e.anchorMap[e.anchor] = e.result);
                break;
            }
        } else if ("!" !== e.tag) {
            if (z.call(e.typeMap[e.kind || "fallback"], e.tag)) h = e.typeMap[e.kind || "fallback"][e.tag]; else for (h = null, 
            c = 0, u = (d = e.typeMap.multi[e.kind || "fallback"]).length; c < u; c += 1) if (e.tag.slice(0, d[c].tag.length) === d[c].tag) {
                h = d[c];
                break;
            }
            h || de(e, "unknown tag !<" + e.tag + ">"), null !== e.result && h.kind !== e.kind && de(e, "unacceptable node kind for !<" + e.tag + '> tag; it should be "' + h.kind + '", not "' + e.kind + '"'), 
            h.resolve(e.result, e.tag) ? (e.result = h.construct(e.result, e.tag), null !== e.anchor && (e.anchorMap[e.anchor] = e.result)) : de(e, "cannot resolve a node with !<" + e.tag + "> explicit tag");
        }
        return null !== e.listener && e.listener("close", e), null !== e.tag || null !== e.anchor || g;
    }
    function Ae(e) {
        var t, n, r, i, o = e.position, a = !1;
        for (e.version = null, e.checkLineBreaks = e.legacy, e.tagMap = Object.create(null), 
        e.anchorMap = Object.create(null); 0 !== (i = e.input.charCodeAt(e.position)) && (ve(e, !0, -1), 
        i = e.input.charCodeAt(e.position), !(e.lineIndent > 0 || 37 !== i)); ) {
            for (a = !0, i = e.input.charCodeAt(++e.position), t = e.position; 0 !== i && !ee(i); ) i = e.input.charCodeAt(++e.position);
            for (r = [], (n = e.input.slice(t, e.position)).length < 1 && de(e, "directive name must not be less than one character in length"); 0 !== i; ) {
                for (;Z(i); ) i = e.input.charCodeAt(++e.position);
                if (35 === i) {
                    do {
                        i = e.input.charCodeAt(++e.position);
                    } while (0 !== i && !Q(i));
                    break;
                }
                if (Q(i)) break;
                for (t = e.position; 0 !== i && !ee(i); ) i = e.input.charCodeAt(++e.position);
                r.push(e.input.slice(t, e.position));
            }
            0 !== i && ge(e), z.call(pe, n) ? pe[n](e, n, r) : he(e, 'unknown document directive "' + n + '"');
        }
        ve(e, !0, -1), 0 === e.lineIndent && 45 === e.input.charCodeAt(e.position) && 45 === e.input.charCodeAt(e.position + 1) && 45 === e.input.charCodeAt(e.position + 2) ? (e.position += 3, 
        ve(e, !0, -1)) : a && de(e, "directives end mark is expected"), Te(e, e.lineIndent - 1, 4, !1, !0), 
        ve(e, !0, -1), e.checkLineBreaks && q.test(e.input.slice(o, e.position)) && he(e, "non-ASCII line breaks are interpreted as content"), 
        e.documents.push(e.result), e.position === e.lineStart && ye(e) ? 46 === e.input.charCodeAt(e.position) && (e.position += 3, 
        ve(e, !0, -1)) : e.position < e.length - 1 && de(e, "end of the stream or a document separator is expected");
    }
    function Oe(e, t) {
        t = t || {}, 0 !== (e = String(e)).length && (10 !== e.charCodeAt(e.length - 1) && 13 !== e.charCodeAt(e.length - 1) && (e += "\n"), 
        65279 === e.charCodeAt(0) && (e = e.slice(1)));
        var n = new ce(e, t), r = e.indexOf("\0");
        for (-1 !== r && (n.position = r, de(n, "null byte is not allowed in input")), n.input += "\0"; 32 === n.input.charCodeAt(n.position); ) n.lineIndent += 1, 
        n.position += 1;
        for (;n.position < n.length - 1; ) Ae(n);
        return n.documents;
    }
    var Ce = {
        loadAll: function(e, t, n) {
            null !== t && "object" == typeof t && void 0 === n && (n = t, t = null);
            var r = Oe(e, n);
            if ("function" != typeof t) return r;
            for (var i = 0, o = r.length; i < o; i += 1) t(r[i]);
        },
        load: function(e, t) {
            var n = Oe(e, t);
            if (0 !== n.length) {
                if (1 === n.length) return n[0];
                throw new s("expected a single document in the stream, but found more");
            }
        }
    }, Ne = Object.prototype.toString, Ie = Object.prototype.hasOwnProperty, Re = {
        0: "\\0",
        7: "\\a",
        8: "\\b",
        9: "\\t",
        10: "\\n",
        11: "\\v",
        12: "\\f",
        13: "\\r",
        27: "\\e",
        34: '\\"',
        92: "\\\\",
        133: "\\N",
        160: "\\_",
        8232: "\\L",
        8233: "\\P"
    }, De = [ "y", "Y", "yes", "Yes", "YES", "on", "On", "ON", "n", "N", "no", "No", "NO", "off", "Off", "OFF" ], Le = /^[-+]?[0-9_]+(?::[0-9_]+)+(?:\.[0-9_]*)?$/;
    function ke(e) {
        var t, n, r;
        if (t = e.toString(16).toUpperCase(), e <= 255) n = "x", r = 2; else if (e <= 65535) n = "u", 
        r = 4; else {
            if (!(e <= 4294967295)) throw new s("code point within a string may not be greater than 0xFFFFFFFF");
            n = "U", r = 8;
        }
        return "\\" + n + i.repeat("0", r - t.length) + t;
    }
    function Me(e) {
        this.schema = e.schema || Y, this.indent = Math.max(1, e.indent || 2), this.noArrayIndent = e.noArrayIndent || !1, 
        this.skipInvalid = e.skipInvalid || !1, this.flowLevel = i.isNothing(e.flowLevel) ? -1 : e.flowLevel, 
        this.styleMap = function(e, t) {
            var n, r, i, o, a, s, l;
            if (null === t) return {};
            for (n = {}, i = 0, o = (r = Object.keys(t)).length; i < o; i += 1) a = r[i], s = String(t[a]), 
            "!!" === a.slice(0, 2) && (a = "tag:yaml.org,2002:" + a.slice(2)), (l = e.compiledTypeMap.fallback[a]) && Ie.call(l.styleAliases, s) && (s = l.styleAliases[s]), 
            n[a] = s;
            return n;
        }(this.schema, e.styles || null), this.sortKeys = e.sortKeys || !1, this.lineWidth = e.lineWidth || 80, 
        this.noRefs = e.noRefs || !1, this.noCompatMode = e.noCompatMode || !1, this.condenseFlow = e.condenseFlow || !1, 
        this.quotingType = '"' === e.quotingType ? 2 : 1, this.forceQuotes = e.forceQuotes || !1, 
        this.replacer = "function" == typeof e.replacer ? e.replacer : null, this.implicitTypes = this.schema.compiledImplicit, 
        this.explicitTypes = this.schema.compiledExplicit, this.tag = null, this.result = "", 
        this.duplicates = [], this.usedDuplicates = null;
    }
    function Pe(e, t) {
        for (var n, r = i.repeat(" ", t), o = 0, a = -1, s = "", l = e.length; o < l; ) -1 === (a = e.indexOf("\n", o)) ? (n = e.slice(o), 
        o = l) : (n = e.slice(o, a + 1), o = a + 1), n.length && "\n" !== n && (s += r), 
        s += n;
        return s;
    }
    function xe(e, t) {
        return "\n" + i.repeat(" ", e.indent * t);
    }
    function Fe(e) {
        return 32 === e || 9 === e;
    }
    function je(e) {
        return 32 <= e && e <= 126 || 161 <= e && e <= 55295 && 8232 !== e && 8233 !== e || 57344 <= e && e <= 65533 && 65279 !== e || 65536 <= e && e <= 1114111;
    }
    function Ue(e) {
        return je(e) && 65279 !== e && 13 !== e && 10 !== e;
    }
    function We(e, t, n) {
        var r = Ue(e), i = r && !Fe(e);
        return (n ? r : r && 44 !== e && 91 !== e && 93 !== e && 123 !== e && 125 !== e) && 35 !== e && !(58 === t && !i) || Ue(t) && !Fe(t) && 35 === e || 58 === t && i;
    }
    function Be(e, t) {
        var n, r = e.charCodeAt(t);
        return r >= 55296 && r <= 56319 && t + 1 < e.length && (n = e.charCodeAt(t + 1)) >= 56320 && n <= 57343 ? 1024 * (r - 55296) + n - 56320 + 65536 : r;
    }
    function He(e) {
        return /^\n* /.test(e);
    }
    function $e(e, t, n, r, i, o, a, s) {
        var l, c, u = 0, d = null, h = !1, p = !1, f = -1 !== r, _ = -1, m = je(c = Be(e, 0)) && 65279 !== c && !Fe(c) && 45 !== c && 63 !== c && 58 !== c && 44 !== c && 91 !== c && 93 !== c && 123 !== c && 125 !== c && 35 !== c && 38 !== c && 42 !== c && 33 !== c && 124 !== c && 61 !== c && 62 !== c && 39 !== c && 34 !== c && 37 !== c && 64 !== c && 96 !== c && function(e) {
            return !Fe(e) && 58 !== e;
        }(Be(e, e.length - 1));
        if (t || a) for (l = 0; l < e.length; u >= 65536 ? l += 2 : l++) {
            if (!je(u = Be(e, l))) return 5;
            m = m && We(u, d, s), d = u;
        } else {
            for (l = 0; l < e.length; u >= 65536 ? l += 2 : l++) {
                if (10 === (u = Be(e, l))) h = !0, f && (p = p || l - _ - 1 > r && " " !== e[_ + 1], 
                _ = l); else if (!je(u)) return 5;
                m = m && We(u, d, s), d = u;
            }
            p = p || f && l - _ - 1 > r && " " !== e[_ + 1];
        }
        return h || p ? n > 9 && He(e) ? 5 : a ? 2 === o ? 5 : 2 : p ? 4 : 3 : !m || a || i(e) ? 2 === o ? 5 : 2 : 1;
    }
    function Ye(e, t, n, r, i) {
        e.dump = function() {
            if (0 === t.length) return 2 === e.quotingType ? '""' : "''";
            if (!e.noCompatMode && (-1 !== De.indexOf(t) || Le.test(t))) return 2 === e.quotingType ? '"' + t + '"' : "'" + t + "'";
            var o = e.indent * Math.max(1, n), a = -1 === e.lineWidth ? -1 : Math.max(Math.min(e.lineWidth, 40), e.lineWidth - o), l = r || e.flowLevel > -1 && n >= e.flowLevel;
            switch ($e(t, l, e.indent, a, function(t) {
                return function(e, t) {
                    var n, r;
                    for (n = 0, r = e.implicitTypes.length; n < r; n += 1) if (e.implicitTypes[n].resolve(t)) return !0;
                    return !1;
                }(e, t);
            }, e.quotingType, e.forceQuotes && !r, i)) {
              case 1:
                return t;

              case 2:
                return "'" + t.replace(/'/g, "''") + "'";

              case 3:
                return "|" + ze(t, e.indent) + Ge(Pe(t, o));

              case 4:
                return ">" + ze(t, e.indent) + Ge(Pe(function(e, t) {
                    var n, r, i = /(\n+)([^\n]*)/g, o = (s = e.indexOf("\n"), s = -1 !== s ? s : e.length, 
                    i.lastIndex = s, qe(e.slice(0, s), t)), a = "\n" === e[0] || " " === e[0];
                    var s;
                    for (;r = i.exec(e); ) {
                        var l = r[1], c = r[2];
                        n = " " === c[0], o += l + (a || n || "" === c ? "" : "\n") + qe(c, t), a = n;
                    }
                    return o;
                }(t, a), o));

              case 5:
                return '"' + function(e) {
                    for (var t, n = "", r = 0, i = 0; i < e.length; r >= 65536 ? i += 2 : i++) r = Be(e, i), 
                    !(t = Re[r]) && je(r) ? (n += e[i], r >= 65536 && (n += e[i + 1])) : n += t || ke(r);
                    return n;
                }(t) + '"';

              default:
                throw new s("impossible error: invalid scalar style");
            }
        }();
    }
    function ze(e, t) {
        var n = He(e) ? String(t) : "", r = "\n" === e[e.length - 1];
        return n + (r && ("\n" === e[e.length - 2] || "\n" === e) ? "+" : r ? "" : "-") + "\n";
    }
    function Ge(e) {
        return "\n" === e[e.length - 1] ? e.slice(0, -1) : e;
    }
    function qe(e, t) {
        if ("" === e || " " === e[0]) return e;
        for (var n, r, i = / [^ ]/g, o = 0, a = 0, s = 0, l = ""; n = i.exec(e); ) (s = n.index) - o > t && (r = a > o ? a : s, 
        l += "\n" + e.slice(o, r), o = r + 1), a = s;
        return l += "\n", e.length - o > t && a > o ? l += e.slice(o, a) + "\n" + e.slice(a + 1) : l += e.slice(o), 
        l.slice(1);
    }
    function Ve(e, t, n, r) {
        var i, o, a, s = "", l = e.tag;
        for (i = 0, o = n.length; i < o; i += 1) a = n[i], e.replacer && (a = e.replacer.call(n, String(i), a)), 
        (Je(e, t + 1, a, !0, !0, !1, !0) || void 0 === a && Je(e, t + 1, null, !0, !0, !1, !0)) && (r && "" === s || (s += xe(e, t)), 
        e.dump && 10 === e.dump.charCodeAt(0) ? s += "-" : s += "- ", s += e.dump);
        e.tag = l, e.dump = s || "[]";
    }
    function Ke(e, t, n) {
        var r, i, o, a, l, c;
        for (o = 0, a = (i = n ? e.explicitTypes : e.implicitTypes).length; o < a; o += 1) if (((l = i[o]).instanceOf || l.predicate) && (!l.instanceOf || "object" == typeof t && t instanceof l.instanceOf) && (!l.predicate || l.predicate(t))) {
            if (n ? l.multi && l.representName ? e.tag = l.representName(t) : e.tag = l.tag : e.tag = "?", 
            l.represent) {
                if (c = e.styleMap[l.tag] || l.defaultStyle, "[object Function]" === Ne.call(l.represent)) r = l.represent(t, c); else {
                    if (!Ie.call(l.represent, c)) throw new s("!<" + l.tag + '> tag resolver accepts not "' + c + '" style');
                    r = l.represent[c](t, c);
                }
                e.dump = r;
            }
            return !0;
        }
        return !1;
    }
    function Je(e, t, n, r, i, o, a) {
        e.tag = null, e.dump = n, Ke(e, n, !1) || Ke(e, n, !0);
        var l, c = Ne.call(e.dump), u = r;
        r && (r = e.flowLevel < 0 || e.flowLevel > t);
        var d, h, p = "[object Object]" === c || "[object Array]" === c;
        if (p && (h = -1 !== (d = e.duplicates.indexOf(n))), (null !== e.tag && "?" !== e.tag || h || 2 !== e.indent && t > 0) && (i = !1), 
        h && e.usedDuplicates[d]) e.dump = "*ref_" + d; else {
            if (p && h && !e.usedDuplicates[d] && (e.usedDuplicates[d] = !0), "[object Object]" === c) r && 0 !== Object.keys(e.dump).length ? (!function(e, t, n, r) {
                var i, o, a, l, c, u, d = "", h = e.tag, p = Object.keys(n);
                if (!0 === e.sortKeys) p.sort(); else if ("function" == typeof e.sortKeys) p.sort(e.sortKeys); else if (e.sortKeys) throw new s("sortKeys must be a boolean or a function");
                for (i = 0, o = p.length; i < o; i += 1) u = "", r && "" === d || (u += xe(e, t)), 
                l = n[a = p[i]], e.replacer && (l = e.replacer.call(n, a, l)), Je(e, t + 1, a, !0, !0, !0) && ((c = null !== e.tag && "?" !== e.tag || e.dump && e.dump.length > 1024) && (e.dump && 10 === e.dump.charCodeAt(0) ? u += "?" : u += "? "), 
                u += e.dump, c && (u += xe(e, t)), Je(e, t + 1, l, !0, c) && (e.dump && 10 === e.dump.charCodeAt(0) ? u += ":" : u += ": ", 
                d += u += e.dump));
                e.tag = h, e.dump = d || "{}";
            }(e, t, e.dump, i), h && (e.dump = "&ref_" + d + e.dump)) : (!function(e, t, n) {
                var r, i, o, a, s, l = "", c = e.tag, u = Object.keys(n);
                for (r = 0, i = u.length; r < i; r += 1) s = "", "" !== l && (s += ", "), e.condenseFlow && (s += '"'), 
                a = n[o = u[r]], e.replacer && (a = e.replacer.call(n, o, a)), Je(e, t, o, !1, !1) && (e.dump.length > 1024 && (s += "? "), 
                s += e.dump + (e.condenseFlow ? '"' : "") + ":" + (e.condenseFlow ? "" : " "), Je(e, t, a, !1, !1) && (l += s += e.dump));
                e.tag = c, e.dump = "{" + l + "}";
            }(e, t, e.dump), h && (e.dump = "&ref_" + d + " " + e.dump)); else if ("[object Array]" === c) r && 0 !== e.dump.length ? (e.noArrayIndent && !a && t > 0 ? Ve(e, t - 1, e.dump, i) : Ve(e, t, e.dump, i), 
            h && (e.dump = "&ref_" + d + e.dump)) : (!function(e, t, n) {
                var r, i, o, a = "", s = e.tag;
                for (r = 0, i = n.length; r < i; r += 1) o = n[r], e.replacer && (o = e.replacer.call(n, String(r), o)), 
                (Je(e, t, o, !1, !1) || void 0 === o && Je(e, t, null, !1, !1)) && ("" !== a && (a += "," + (e.condenseFlow ? "" : " ")), 
                a += e.dump);
                e.tag = s, e.dump = "[" + a + "]";
            }(e, t, e.dump), h && (e.dump = "&ref_" + d + " " + e.dump)); else {
                if ("[object String]" !== c) {
                    if ("[object Undefined]" === c) return !1;
                    if (e.skipInvalid) return !1;
                    throw new s("unacceptable kind of an object to dump " + c);
                }
                "?" !== e.tag && Ye(e, e.dump, t, o, u);
            }
            null !== e.tag && "?" !== e.tag && (l = encodeURI("!" === e.tag[0] ? e.tag.slice(1) : e.tag).replace(/!/g, "%21"), 
            l = "!" === e.tag[0] ? "!" + l : "tag:yaml.org,2002:" === l.slice(0, 18) ? "!!" + l.slice(18) : "!<" + l + ">", 
            e.dump = l + " " + e.dump);
        }
        return !0;
    }
    function Xe(e, t) {
        var n, r, i = [], o = [];
        for (function e(t, n, r) {
            var i, o, a;
            if (null !== t && "object" == typeof t) if (-1 !== (o = n.indexOf(t))) -1 === r.indexOf(o) && r.push(o); else if (n.push(t), 
            Array.isArray(t)) for (o = 0, a = t.length; o < a; o += 1) e(t[o], n, r); else for (i = Object.keys(t), 
            o = 0, a = i.length; o < a; o += 1) e(t[i[o]], n, r);
        }(e, i, o), n = 0, r = o.length; n < r; n += 1) t.duplicates.push(i[o[n]]);
        t.usedDuplicates = new Array(r);
    }
    function Qe(e, t) {
        return function() {
            throw new Error("Function yaml." + e + " is removed in js-yaml 4. Use yaml." + t + " instead, which is now safe by default.");
        };
    }
    var Ze = p, et = m, tt = E, nt = I, rt = R, it = Y, ot = Ce.load, at = Ce.loadAll, st = {
        dump: function(e, t) {
            var n = new Me(t = t || {});
            n.noRefs || Xe(e, n);
            var r = e;
            return n.replacer && (r = n.replacer.call({
                "": r
            }, "", r)), Je(n, 0, r, !0, !0) ? n.dump + "\n" : "";
        }
    }.dump, lt = s, ct = {
        binary: x,
        float: N,
        map: y,
        null: b,
        pairs: B,
        set: $,
        timestamp: k,
        bool: w,
        int: A,
        merge: M,
        omap: U,
        seq: v,
        str: g
    }, ut = Qe("safeLoad", "load"), dt = Qe("safeLoadAll", "loadAll"), ht = Qe("safeDump", "dump"), pt = {
        Type: Ze,
        Schema: et,
        FAILSAFE_SCHEMA: tt,
        JSON_SCHEMA: nt,
        CORE_SCHEMA: rt,
        DEFAULT_SCHEMA: it,
        load: ot,
        loadAll: at,
        dump: st,
        YAMLException: lt,
        types: ct,
        safeLoad: ut,
        safeLoadAll: dt,
        safeDump: ht
    };
}
