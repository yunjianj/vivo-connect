// analysis/pretty/main.js:99146; webpack module 1290
function(e, t, n) {
    (function() {
        "use strict";
        var e, r, i, o, a, s = {}.hasOwnProperty;
        e = n(1291), r = n(306).defaults, o = function(e) {
            return "string" == typeof e && (e.indexOf("&") >= 0 || e.indexOf(">") >= 0 || e.indexOf("<") >= 0);
        }, a = function(e) {
            return "<![CDATA[" + i(e) + "]]>";
        }, i = function(e) {
            return e.replace("]]>", "]]]]><![CDATA[>");
        }, t.Builder = function() {
            function t(e) {
                var t, n, i;
                for (t in this.options = {}, n = r[.2]) s.call(n, t) && (i = n[t], this.options[t] = i);
                for (t in e) s.call(e, t) && (i = e[t], this.options[t] = i);
            }
            return t.prototype.buildObject = function(t) {
                var n, i, l, c, u, d;
                return n = this.options.attrkey, i = this.options.charkey, 1 === Object.keys(t).length && this.options.rootName === r[.2].rootName ? t = t[u = Object.keys(t)[0]] : u = this.options.rootName, 
                d = this, l = function(e, t) {
                    var r, c, u, h, p, f;
                    if ("object" != typeof t) d.options.cdata && o(t) ? e.raw(a(t)) : e.txt(t); else if (Array.isArray(t)) {
                        for (h in t) if (s.call(t, h)) for (p in c = t[h]) u = c[p], e = l(e.ele(p), u).up();
                    } else for (p in t) if (s.call(t, p)) if (c = t[p], p === n) {
                        if ("object" == typeof c) for (r in c) f = c[r], e = e.att(r, f);
                    } else if (p === i) e = d.options.cdata && o(c) ? e.raw(a(c)) : e.txt(c); else if (Array.isArray(c)) for (h in c) s.call(c, h) && (e = "string" == typeof (u = c[h]) ? d.options.cdata && o(u) ? e.ele(p).raw(a(u)).up() : e.ele(p, u).up() : l(e.ele(p), u).up()); else "object" == typeof c ? e = l(e.ele(p), c).up() : "string" == typeof c && d.options.cdata && o(c) ? e = e.ele(p).raw(a(c)).up() : (null == c && (c = ""), 
                    e = e.ele(p, c.toString()).up());
                    return e;
                }, c = e.create(u, this.options.xmldec, this.options.doctype, {
                    headless: this.options.headless,
                    allowSurrogateChars: this.options.allowSurrogateChars
                }), l(c, t).end(this.options.renderOpts);
            }, t;
        }();
    }).call(this);
}
