// analysis/pretty/main.js:30078; webpack module 244
function(e, t, n) {
    "use strict";
    var r = n(1568), i = {}.hasOwnProperty, o = n(8), a = n(1571), s = n(1573);
    t.Selector = a, t.Property = s, 
    /**
 * Returns an array of the selectors.
 *
 * @license Sizzle CSS Selector Engine - MIT
 * @param {String} selectorText from mensch
 * @api public
 */
    t.extract = function(e) {
        for (var t = 0, n = [], r = "", i = 0, o = e.length; i < o; i++) {
            var a = e.charAt(i);
            t ? ("]" !== a && ")" !== a || t--, r += a) : "," === a ? (n.push(r), r = "") : ("[" !== a && "(" !== a || t++, 
            (r.length || "," !== a && "\n" !== a && " " !== a) && (r += a));
        }
        return r.length && n.push(r), n;
    }, t.parseCSS = function(e) {
        for (var t = r.parse(e, {
            position: !0,
            comments: !0
        }), n = void 0 !== t.stylesheet && t.stylesheet.rules ? t.stylesheet.rules : [], i = [], o = 0, a = n.length; o < a; o++) if ("rule" == n[o].type) for (var s = n[o], l = s.selectors, c = 0, u = l.length; c < u; c++) i.push([ l[c], s.declarations ]);
        return i;
    }, t.getPreservedText = function(e, t) {
        for (var n = r.parse(e, {
            position: !0,
            comments: !0
        }), i = void 0 !== n.stylesheet && n.stylesheet.rules ? n.stylesheet.rules : [], a = [], s = i.length - 1; s >= 0; s--) (t.fontFaces && "font-face" === i[s].type || t.mediaQueries && "media" === i[s].type) && a.push(r.stringify({
            stylesheet: {
                rules: [ i[s] ]
            }
        }, {
            comments: !1,
            indentation: "  "
        })), i[s].position.start;
        return 0 !== a.length && o.EOL + a.join(o.EOL) + o.EOL;
    }, t.normalizeLineEndings = function(e) {
        return e.replace(/\r\n/g, "\n").replace(/\n/g, "\r\n");
    }, t.compareFunc = function(e, t) {
        for (var n = Math.min(e.length, t.length), r = 0; r < n; r++) if (e[r] !== t[r]) return e[r] > t[r] ? 1 : -1;
        return e.length - t.length;
    }, t.compare = function(e, n) {
        return 1 == t.compareFunc(e, n) ? e : n;
    }, t.extend = function(e, t) {
        for (var n in t) i.call(t, n) && (e[n] = t[n]);
        return e;
    }, t.getDefaultOptions = function(e) {
        var n = t.extend({
            extraCss: "",
            insertPreservedExtraCss: !0,
            applyStyleTags: !0,
            removeStyleTags: !0,
            preserveMediaQueries: !0,
            preserveFontFaces: !0,
            applyWidthAttributes: !0,
            applyHeightAttributes: !0,
            applyAttributesTableElements: !0,
            url: ""
        }, e);
        return n.webResources = n.webResources || {}, n;
    };
}
