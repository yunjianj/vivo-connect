// analysis/pretty/main.js:113781; webpack module 1510
function(e, t, n) {
    "use strict";
    function r(e) {
        return (new TextEncoder).encode(e).length;
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.getThumbFile = t.getOriginalFile = t.biteLimitSubstr = t.getByteCount = t.isHeic = t.nameFormat = t.checkNameWithSpecial = t.timeFormat = t.dateFormat = void 0, 
    t.dateFormat = function(e) {
        let t = new Array, n = new Date(e), r = "", i = n.getFullYear() + "", o = n.getMonth() + 1, a = n.getDate(), s = (new Date).getFullYear() + "", l = (new Date).getMonth() + 1, c = (new Date).getDate(), u = o > 9 ? o + "" : "0" + o, d = a > 9 ? a + "" : "0" + a, h = i + "年" + o + "月" + a + "日";
        return i == s && o == l && a == c && (r = "今天"), s == i && (h = o + "月" + a + "日", 
        i = ""), t.push(h), t.push(i), t.push(u), t.push(d), t.push(r), t;
    }, t.timeFormat = function(e) {
        let t = "";
        if ("number" == typeof e) if (0 == e) t = "00:00"; else {
            let n = Math.round(e / 1e3), r = Math.floor(n / 60 / 60) % 24, i = Math.floor(n / 60) % 60, o = Math.floor(n) % 60;
            t = (r > 0 ? r + ":" : "") + (i > 9 ? i + ":" : "0" + i + ":") + (o < 10 ? "0" + o : o);
        }
        return t;
    }, t.checkNameWithSpecial = function(e) {
        return new RegExp(/[\\：:*?？“”"<>\.\|｜\r]+/g).test(e);
    }, t.nameFormat = function(e) {
        let t = e.toString(), n = t.toString().length;
        if (n < 5) for (let e = 0; e < 5 - n; e++) t = "0" + t;
        return t + ".jpg";
    }, t.isHeic = function(e) {
        return /\.(heic|heif)$/i.test(e);
    }, t.getByteCount = r, t.biteLimitSubstr = function(e, t, n = !0) {
        let i = e, o = 0, a = "";
        if (n) for (let e = 0; e < i.length && (o += r(i[e]), !(o > t)); e++) a += i[e]; else for (let e = i.length - 1; e >= 0 && (o += r(i[e]), 
        !(o > t)); e--) a = i[e] + a;
        return a;
    }, t.getOriginalFile = function(e) {
        if (process.env.IS_WEB) return !1;
        {
            const t = n(4), r = null == e ? void 0 : e.originUrl;
            return !!r && t.existsSync(r);
        }
    }, t.getThumbFile = function(e) {
        if (process.env.IS_WEB) return !1;
        {
            const t = n(4), r = null == e ? void 0 : e.thumbUrl;
            return !!r && t.existsSync(r);
        }
    };
}
