// analysis/pretty/main.js:120560; webpack module 1571
function(e, t, n) {
    "use strict";
    var r = n(1572);
    function i(e, t) {
        this.text = e, this.spec = void 0, this.styleAttribute = t || !1;
    }
    function o(e) {
        try {
            return r(e)[0];
        } catch (e) {
            return [];
        }
    }
    e.exports = i, i.prototype.parsed = function() {
        return this.tokens || (this.tokens = o(this.text)), this.tokens;
    }, i.prototype.specificity = function() {
        var e = this.styleAttribute;
        return this.spec || (this.spec = function t(n, r) {
            for (var i = r || o(n), a = [ e ? 1 : 0, 0, 0, 0 ], s = [], l = 0; l < i.length; l++) {
                var c = i[l], u = c.pseudos;
                if (c.id && a[1]++, c.attributes && (a[2] += c.attributes.length), c.classList && (a[2] += c.classList.length), 
                c.tag && "*" !== c.tag && a[3]++, u) {
                    a[3] += u.length;
                    for (var d = 0; d < u.length; d++) "not" === u[d].name && (s.push(u[d].value), a[3]--);
                }
            }
            for (var h = s.length; h--; ) for (var p = t(s[h]), f = 4; f--; ) a[f] += p[f];
            return a;
        }(this.text, this.parsed())), this.spec;
    };
}
