// analysis/pretty/main.js:26207; webpack module 202
function(e, t, n) {
    "use strict";
    const {hasOwnProperty: r} = Object.prototype, i = f();
    i.configure = f, i.stringify = i, i.default = i, t.stringify = i, t.configure = f, 
    e.exports = i;
    const o = /[\u0000-\u001f\u0022\u005c\ud800-\udfff]/;
    function a(e) {
        return e.length < 5e3 && !o.test(e) ? `"${e}"` : JSON.stringify(e);
    }
    function s(e, t) {
        if (e.length > 200 || t) return e.sort(t);
        for (let t = 1; t < e.length; t++) {
            const n = e[t];
            let r = t;
            for (;0 !== r && e[r - 1] > n; ) e[r] = e[r - 1], r--;
            e[r] = n;
        }
        return e;
    }
    const l = Object.getOwnPropertyDescriptor(Object.getPrototypeOf(Object.getPrototypeOf(new Int8Array)), Symbol.toStringTag).get;
    function c(e) {
        return void 0 !== l.call(e) && 0 !== e.length;
    }
    function u(e, t, n) {
        e.length < n && (n = e.length);
        const r = "," === t ? "" : " ";
        let i = `"0":${r}${e[0]}`;
        for (let o = 1; o < n; o++) i += `${t}"${o}":${r}${e[o]}`;
        return i;
    }
    function d(e, t) {
        let n;
        if (r.call(e, t)) {
            if (n = e[t], "number" != typeof n) throw new TypeError(`The "${t}" argument must be of type number`);
            if (!Number.isInteger(n)) throw new TypeError(`The "${t}" argument must be an integer`);
            if (n < 1) throw new RangeError(`The "${t}" argument must be >= 1`);
        }
        return void 0 === n ? 1 / 0 : n;
    }
    function h(e) {
        return 1 === e ? "1 item" : e + " items";
    }
    function p(e) {
        const t = new Set;
        for (const n of e) "string" != typeof n && "number" != typeof n || t.add(String(n));
        return t;
    }
    function f(e) {
        const t = function(e) {
            if (r.call(e, "strict")) {
                const t = e.strict;
                if ("boolean" != typeof t) throw new TypeError('The "strict" argument must be of type boolean');
                if (t) return e => {
                    let t = "Object can not safely be stringified. Received type " + typeof e;
                    throw "function" != typeof e && (t += ` (${e.toString()})`), new Error(t);
                };
            }
        }(e = {
            ...e
        });
        t && (void 0 === e.bigint && (e.bigint = !1), "circularValue" in e || (e.circularValue = Error));
        const n = function(e) {
            if (r.call(e, "circularValue")) {
                const t = e.circularValue;
                if ("string" == typeof t) return `"${t}"`;
                if (null == t) return t;
                if (t === Error || t === TypeError) return {
                    toString() {
                        throw new TypeError("Converting circular structure to JSON");
                    }
                };
                throw new TypeError('The "circularValue" argument must be of type string or the value null or undefined');
            }
            return '"[Circular]"';
        }(e), i = function(e, t) {
            let n;
            if (r.call(e, t) && (n = e[t], "boolean" != typeof n)) throw new TypeError(`The "${t}" argument must be of type boolean`);
            return void 0 === n || n;
        }(e, "bigint"), o = function(e) {
            let t;
            if (r.call(e, "deterministic") && (t = e.deterministic, "boolean" != typeof t && "function" != typeof t)) throw new TypeError('The "deterministic" argument must be of type boolean or comparator function');
            return void 0 === t || t;
        }(e), l = "function" == typeof o ? o : void 0, f = d(e, "maximumDepth"), _ = d(e, "maximumBreadth");
        function m(e, r, u, d, p, g) {
            let v = r[e];
            switch ("object" == typeof v && null !== v && "function" == typeof v.toJSON && (v = v.toJSON(e)), 
            v = d.call(r, e, v), typeof v) {
              case "string":
                return a(v);

              case "object":
                {
                    if (null === v) return "null";
                    if (-1 !== u.indexOf(v)) return n;
                    let e = "", t = ",";
                    const r = g;
                    if (Array.isArray(v)) {
                        if (0 === v.length) return "[]";
                        if (f < u.length + 1) return '"[Array]"';
                        u.push(v), "" !== p && (e += "\n" + (g += p), t = ",\n" + g);
                        const n = Math.min(v.length, _);
                        let i = 0;
                        for (;i < n - 1; i++) {
                            const n = m(String(i), v, u, d, p, g);
                            e += void 0 !== n ? n : "null", e += t;
                        }
                        const o = m(String(i), v, u, d, p, g);
                        if (e += void 0 !== o ? o : "null", v.length - 1 > _) {
                            e += `${t}"... ${h(v.length - _ - 1)} not stringified"`;
                        }
                        return "" !== p && (e += "\n" + r), u.pop(), `[${e}]`;
                    }
                    let i = Object.keys(v);
                    const y = i.length;
                    if (0 === y) return "{}";
                    if (f < u.length + 1) return '"[Object]"';
                    let E = "", b = "";
                    "" !== p && (t = ",\n" + (g += p), E = " ");
                    const w = Math.min(y, _);
                    o && !c(v) && (i = s(i, l)), u.push(v);
                    for (let n = 0; n < w; n++) {
                        const r = i[n], o = m(r, v, u, d, p, g);
                        void 0 !== o && (e += `${b}${a(r)}:${E}${o}`, b = t);
                    }
                    if (y > _) {
                        e += `${b}"...":${E}"${h(y - _)} not stringified"`, b = t;
                    }
                    return "" !== p && b.length > 1 && (e = `\n${g}${e}\n${r}`), u.pop(), `{${e}}`;
                }

              case "number":
                return isFinite(v) ? String(v) : t ? t(v) : "null";

              case "boolean":
                return !0 === v ? "true" : "false";

              case "undefined":
                return;

              case "bigint":
                if (i) return String(v);

              default:
                return t ? t(v) : void 0;
            }
        }
        function g(e, r, o, s, l, c) {
            switch ("object" == typeof r && null !== r && "function" == typeof r.toJSON && (r = r.toJSON(e)), 
            typeof r) {
              case "string":
                return a(r);

              case "object":
                {
                    if (null === r) return "null";
                    if (-1 !== o.indexOf(r)) return n;
                    const e = c;
                    let t = "", i = ",";
                    if (Array.isArray(r)) {
                        if (0 === r.length) return "[]";
                        if (f < o.length + 1) return '"[Array]"';
                        o.push(r), "" !== l && (t += "\n" + (c += l), i = ",\n" + c);
                        const n = Math.min(r.length, _);
                        let a = 0;
                        for (;a < n - 1; a++) {
                            const e = g(String(a), r[a], o, s, l, c);
                            t += void 0 !== e ? e : "null", t += i;
                        }
                        const u = g(String(a), r[a], o, s, l, c);
                        if (t += void 0 !== u ? u : "null", r.length - 1 > _) {
                            t += `${i}"... ${h(r.length - _ - 1)} not stringified"`;
                        }
                        return "" !== l && (t += "\n" + e), o.pop(), `[${t}]`;
                    }
                    o.push(r);
                    let u = "";
                    "" !== l && (i = ",\n" + (c += l), u = " ");
                    let d = "";
                    for (const e of s) {
                        const n = g(e, r[e], o, s, l, c);
                        void 0 !== n && (t += `${d}${a(e)}:${u}${n}`, d = i);
                    }
                    return "" !== l && d.length > 1 && (t = `\n${c}${t}\n${e}`), o.pop(), `{${t}}`;
                }

              case "number":
                return isFinite(r) ? String(r) : t ? t(r) : "null";

              case "boolean":
                return !0 === r ? "true" : "false";

              case "undefined":
                return;

              case "bigint":
                if (i) return String(r);

              default:
                return t ? t(r) : void 0;
            }
        }
        function v(e, r, d, p, m) {
            switch (typeof r) {
              case "string":
                return a(r);

              case "object":
                {
                    if (null === r) return "null";
                    if ("function" == typeof r.toJSON) {
                        if ("object" != typeof (r = r.toJSON(e))) return v(e, r, d, p, m);
                        if (null === r) return "null";
                    }
                    if (-1 !== d.indexOf(r)) return n;
                    const t = m;
                    if (Array.isArray(r)) {
                        if (0 === r.length) return "[]";
                        if (f < d.length + 1) return '"[Array]"';
                        d.push(r);
                        let e = "\n" + (m += p);
                        const n = ",\n" + m, i = Math.min(r.length, _);
                        let o = 0;
                        for (;o < i - 1; o++) {
                            const t = v(String(o), r[o], d, p, m);
                            e += void 0 !== t ? t : "null", e += n;
                        }
                        const a = v(String(o), r[o], d, p, m);
                        if (e += void 0 !== a ? a : "null", r.length - 1 > _) {
                            e += `${n}"... ${h(r.length - _ - 1)} not stringified"`;
                        }
                        return e += "\n" + t, d.pop(), `[${e}]`;
                    }
                    let i = Object.keys(r);
                    const g = i.length;
                    if (0 === g) return "{}";
                    if (f < d.length + 1) return '"[Object]"';
                    const y = ",\n" + (m += p);
                    let E = "", b = "", w = Math.min(g, _);
                    c(r) && (E += u(r, y, _), i = i.slice(r.length), w -= r.length, b = y), o && (i = s(i, l)), 
                    d.push(r);
                    for (let e = 0; e < w; e++) {
                        const t = i[e], n = v(t, r[t], d, p, m);
                        void 0 !== n && (E += `${b}${a(t)}: ${n}`, b = y);
                    }
                    if (g > _) {
                        E += `${b}"...": "${h(g - _)} not stringified"`, b = y;
                    }
                    return "" !== b && (E = `\n${m}${E}\n${t}`), d.pop(), `{${E}}`;
                }

              case "number":
                return isFinite(r) ? String(r) : t ? t(r) : "null";

              case "boolean":
                return !0 === r ? "true" : "false";

              case "undefined":
                return;

              case "bigint":
                if (i) return String(r);

              default:
                return t ? t(r) : void 0;
            }
        }
        function y(e, r, d) {
            switch (typeof r) {
              case "string":
                return a(r);

              case "object":
                {
                    if (null === r) return "null";
                    if ("function" == typeof r.toJSON) {
                        if ("object" != typeof (r = r.toJSON(e))) return y(e, r, d);
                        if (null === r) return "null";
                    }
                    if (-1 !== d.indexOf(r)) return n;
                    let t = "";
                    const i = void 0 !== r.length;
                    if (i && Array.isArray(r)) {
                        if (0 === r.length) return "[]";
                        if (f < d.length + 1) return '"[Array]"';
                        d.push(r);
                        const e = Math.min(r.length, _);
                        let n = 0;
                        for (;n < e - 1; n++) {
                            const e = y(String(n), r[n], d);
                            t += void 0 !== e ? e : "null", t += ",";
                        }
                        const i = y(String(n), r[n], d);
                        if (t += void 0 !== i ? i : "null", r.length - 1 > _) {
                            t += `,"... ${h(r.length - _ - 1)} not stringified"`;
                        }
                        return d.pop(), `[${t}]`;
                    }
                    let p = Object.keys(r);
                    const m = p.length;
                    if (0 === m) return "{}";
                    if (f < d.length + 1) return '"[Object]"';
                    let g = "", v = Math.min(m, _);
                    i && c(r) && (t += u(r, ",", _), p = p.slice(r.length), v -= r.length, g = ","), 
                    o && (p = s(p, l)), d.push(r);
                    for (let e = 0; e < v; e++) {
                        const n = p[e], i = y(n, r[n], d);
                        void 0 !== i && (t += `${g}${a(n)}:${i}`, g = ",");
                    }
                    if (m > _) {
                        t += `${g}"...":"${h(m - _)} not stringified"`;
                    }
                    return d.pop(), `{${t}}`;
                }

              case "number":
                return isFinite(r) ? String(r) : t ? t(r) : "null";

              case "boolean":
                return !0 === r ? "true" : "false";

              case "undefined":
                return;

              case "bigint":
                if (i) return String(r);

              default:
                return t ? t(r) : void 0;
            }
        }
        return function(e, t, n) {
            if (arguments.length > 1) {
                let r = "";
                if ("number" == typeof n ? r = " ".repeat(Math.min(n, 10)) : "string" == typeof n && (r = n.slice(0, 10)), 
                null != t) {
                    if ("function" == typeof t) return m("", {
                        "": e
                    }, [], t, r, "");
                    if (Array.isArray(t)) return g("", e, [], p(t), r, "");
                }
                if (0 !== r.length) return v("", e, [], r, "");
            }
            return y("", e, []);
        };
    }
}
