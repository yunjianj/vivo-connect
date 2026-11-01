// analysis/pretty/main.js:120590; webpack module 1572
function(e, t, n) {
    "use strict";
    var r = /([-.*+?^${}()|[\]\/\\])/g, i = /\\/g, o = function(e) {
        return (e + "").replace(r, "\\$1");
    }, a = function(e) {
        return (e + "").replace(i, "");
    }, s = RegExp("^(?:\\s*(,)\\s*|\\s*(<combinator>+)\\s*|(\\s+)|(<unicode>+|\\*)|\\#(<unicode>+)|\\.(<unicode>+)|\\[\\s*(<unicode1>+)(?:\\s*([*^$!~|]?=)(?:\\s*(?:([\"']?)(.*?)\\9)))?\\s*\\](?!\\])|(:+)(<unicode>+)(?:\\((?:(?:([\"'])([^\\13]*)\\13)|((?:\\([^)]+\\)|[^()]*)+))\\))?)".replace(/<combinator>/, "[" + o(">+~`!@$%^&={}\\;</") + "]").replace(/<unicode>/g, "(?:[\\w\\u00a1-\\uFFFF-]|\\\\[^\\s0-9a-f])").replace(/<unicode1>/g, "(?:[:\\w\\u00a1-\\uFFFF-]|\\\\[^\\s0-9a-f])")), l = function(e) {
        this.combinator = e || " ", this.tag = "*";
    };
    l.prototype.toString = function() {
        if (!this.raw) {
            var e, t, n = "";
            if (n += this.tag || "*", this.id && (n += "#" + this.id), this.classes && (n += "." + this.classList.join(".")), 
            this.attributes) for (e = 0; t = this.attributes[e++]; ) n += "[" + t.name + (t.operator ? t.operator + '"' + t.value + '"' : "") + "]";
            if (this.pseudos) for (e = 0; t = this.pseudos[e++]; ) n += ":" + t.name, t.value && (n += "(" + t.value + ")");
            this.raw = n;
        }
        return this.raw;
    };
    var c = function() {
        this.length = 0;
    };
    c.prototype.toString = function() {
        if (!this.raw) {
            for (var e, t = "", n = 0; e = this[n++]; ) 1 !== n && (t += " "), " " !== e.combinator && (t += e.combinator + " "), 
            t += e;
            this.raw = t;
        }
        return this.raw;
    };
    var u = function(e, t, n, r, i, s, u, d, h, p, f, _, m, g, v, y) {
        var E, b;
        if ((t || !this.length) && (E = this[this.length++] = new c, t)) return "";
        if (E || (E = this[this.length - 1]), (n || r || !E.length) && (b = E[E.length++] = new l(n)), 
        b || (b = E[E.length - 1]), i) b.tag = a(i); else if (s) b.id = a(s); else if (u) {
            var w = a(u), S = b.classes || (b.classes = {});
            if (!S[w]) {
                S[w] = o(u);
                var T = b.classList || (b.classList = []);
                T.push(w), T.sort();
            }
        } else m ? (y = y || v, (b.pseudos || (b.pseudos = [])).push({
            type: 1 == _.length ? "class" : "element",
            name: a(m),
            escapedName: o(m),
            value: y ? a(y) : null,
            escapedValue: y ? o(y) : null
        })) : d && (f = f ? o(f) : null, (b.attributes || (b.attributes = [])).push({
            operator: h,
            name: a(d),
            escapedName: o(d),
            value: f ? a(f) : null,
            escapedValue: f ? o(f) : null
        }));
        return "";
    }, d = function(e) {
        this.length = 0;
        for (var t, n = this, r = e; e; ) {
            if ((t = e.replace(s, function() {
                return u.apply(n, arguments);
            })) === e) throw new Error(r + " is an invalid expression");
            e = t;
        }
    };
    d.prototype.toString = function() {
        if (!this.raw) {
            for (var e, t = [], n = 0; e = this[n++]; ) t.push(e);
            this.raw = t.join(", ");
        }
        return this.raw;
    };
    var h = {};
    e.exports = function(e) {
        return null == e ? null : (e = ("" + e).replace(/^\s+|\s+$/g, ""), h[e] || (h[e] = new d(e)));
    };
}
