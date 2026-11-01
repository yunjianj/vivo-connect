// analysis/pretty/main.js:123988; webpack module 1648
function(e, t, n) {
    var r = n(369), i = n(171), o = i.isTag, a = i.domEach, s = Object.prototype.hasOwnProperty, l = i.camelCase, c = i.cssCase, u = /\s+/, d = {
        forEach: n(246),
        extend: n(782),
        some: n(1663)
    }, h = {
        null: null,
        true: !0,
        false: !1
    }, p = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i, f = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, _ = function(e, t) {
        if (e && o(e)) return e.attribs || (e.attribs = {}), t ? s.call(e.attribs, t) ? p.test(t) ? t : e.attribs[t] : "option" === e.name && "value" === t ? r.text(e.children) : "input" !== e.name || "radio" !== e.attribs.type && "checkbox" !== e.attribs.type || "value" !== t ? void 0 : "on" : e.attribs;
    }, m = function(e, t, n) {
        null === n ? E(e, t) : e.attribs[t] = n + "";
    };
    t.attr = function(e, t) {
        return "object" == typeof e || void 0 !== t ? a(this, "function" == typeof t ? function(n, r) {
            m(r, e, t.call(r, n, r.attribs[e]));
        } : function(n, r) {
            o(r) && ("object" == typeof e ? d.forEach(e, function(e, t) {
                m(r, t, e);
            }) : m(r, e, t));
        }) : _(this[0], e);
    };
    var g = function(e, t) {
        if (e && o(e)) return e.hasOwnProperty(t) ? e[t] : p.test(t) ? void 0 !== _(e, t) : _(e, t);
    }, v = function(e, t, n) {
        e[t] = p.test(t) ? !!n : n;
    };
    t.prop = function(e, t) {
        var n, r = 0;
        if ("string" == typeof e && void 0 === t) {
            switch (e) {
              case "style":
                n = this.css(), d.forEach(n, function(e, t) {
                    n[r++] = t;
                }), n.length = r;
                break;

              case "tagName":
              case "nodeName":
                n = this[0].name.toUpperCase();
                break;

              default:
                n = g(this[0], e);
            }
            return n;
        }
        if ("object" == typeof e || void 0 !== t) return a(this, "function" == typeof t ? function(n, r) {
            v(r, e, t.call(r, n, g(r, e)));
        } : function(n, r) {
            o(r) && ("object" == typeof e ? d.forEach(e, function(e, t) {
                v(r, t, e);
            }) : v(r, e, t));
        });
    };
    var y = function(e, t) {
        var n, r, i, o, a, u, d, p = 1 === arguments.length;
        for (p ? i = (n = Object.keys(e.attribs).filter(function(e) {
            return "data-" === e.slice(0, "data-".length);
        })).map(function(e) {
            return l(e.slice("data-".length));
        }) : (n = [ "data-" + c(t) ], i = [ t ]), u = 0, d = n.length; u < d; ++u) if (r = n[u], 
        o = i[u], s.call(e.attribs, r)) {
            if (a = e.attribs[r], s.call(h, a)) a = h[a]; else if (a === String(Number(a))) a = Number(a); else if (f.test(a)) try {
                a = JSON.parse(a);
            } catch (e) {}
            e.data[o] = a;
        }
        return p ? e.data : a;
    };
    t.data = function(e, t) {
        var n = this[0];
        if (n && o(n)) return n.data || (n.data = {}), e ? "object" == typeof e || void 0 !== t ? (a(this, function(n, r) {
            !function(e, t, n) {
                if (e.data || (e.data = {}), "object" == typeof t) return d.extend(e.data, t);
                "string" == typeof t && void 0 !== n ? e.data[t] = n : "object" == typeof t && d.extend(e.data, t);
            }(r, e, t);
        }), this) : s.call(n.data, e) ? n.data[e] : y(n, e) : y(n);
    }, t.val = function(e) {
        var t = 0 === arguments.length, n = this[0];
        if (n) switch (n.name) {
          case "textarea":
            return this.text(e);

          case "input":
            switch (this.attr("type")) {
              case "radio":
                return t ? this.attr("value") : (this.attr("value", e), this);

              default:
                return this.attr("value", e);
            }
            return;

          case "select":
            var r, i = this.find("option:selected");
            if (void 0 === i) return;
            if (!t) {
                if (!this.attr().hasOwnProperty("multiple") && "object" == typeof e) return this;
                "object" != typeof e && (e = [ e ]), this.find("option").removeAttr("selected");
                for (var o = 0; o < e.length; o++) this.find('option[value="' + e[o] + '"]').attr("selected", "");
                return this;
            }
            return r = i.attr("value"), this.attr().hasOwnProperty("multiple") && (r = [], a(i, function(e, t) {
                r.push(_(t, "value"));
            })), r;

          case "option":
            return t ? this.attr("value") : (this.attr("value", e), this);
        }
    };
    var E = function(e, t) {
        e.attribs && s.call(e.attribs, t) && delete e.attribs[t];
    };
    t.removeAttr = function(e) {
        return a(this, function(t, n) {
            E(n, e);
        }), this;
    }, t.hasClass = function(e) {
        return d.some(this, function(t) {
            var n, r = t.attribs, i = r && r.class, o = -1;
            if (i) for (;(o = i.indexOf(e, o + 1)) > -1; ) if (n = o + e.length, (0 === o || u.test(i[o - 1])) && (n === i.length || u.test(i[n]))) return !0;
        });
    }, t.addClass = function(e) {
        if ("function" == typeof e) return a(this, function(n, r) {
            var i = r.attribs.class || "";
            t.addClass.call([ r ], e.call(r, n, i));
        });
        if (!e || "string" != typeof e) return this;
        for (var n = e.split(u), r = this.length, i = 0; i < r; i++) if (o(this[i])) {
            var s, l, c = _(this[i], "class");
            if (c) {
                l = " " + c + " ", s = n.length;
                for (var d = 0; d < s; d++) {
                    var h = n[d] + " ";
                    l.indexOf(" " + h) < 0 && (l += h);
                }
                m(this[i], "class", l.trim());
            } else m(this[i], "class", n.join(" ").trim());
        }
        return this;
    };
    var b = function(e) {
        return e ? e.trim().split(u) : [];
    };
    t.removeClass = function(e) {
        var n, r, i;
        return "function" == typeof e ? a(this, function(n, r) {
            t.removeClass.call([ r ], e.call(r, n, r.attribs.class || ""));
        }) : (n = b(e), r = n.length, i = 0 === arguments.length, a(this, function(e, t) {
            if (o(t)) if (i) t.attribs.class = ""; else {
                for (var a, s, l = b(t.attribs.class), c = 0; c < r; c++) (a = l.indexOf(n[c])) >= 0 && (l.splice(a, 1), 
                s = !0, c--);
                s && (t.attribs.class = l.join(" "));
            }
        }));
    }, t.toggleClass = function(e, n) {
        if ("function" == typeof e) return a(this, function(r, i) {
            t.toggleClass.call([ i ], e.call(i, r, i.attribs.class || "", n), n);
        });
        if (!e || "string" != typeof e) return this;
        for (var r, i, s = e.split(u), l = s.length, c = "boolean" == typeof n ? n ? 1 : -1 : 0, d = this.length, h = 0; h < d; h++) if (o(this[h])) {
            r = b(this[h].attribs.class);
            for (var p = 0; p < l; p++) i = r.indexOf(s[p]), c >= 0 && i < 0 ? r.push(s[p]) : c <= 0 && i >= 0 && r.splice(i, 1);
            this[h].attribs.class = r.join(" ");
        }
        return this;
    }, t.is = function(e) {
        return !!e && this.filter(e).length > 0;
    };
}
