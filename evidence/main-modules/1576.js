// analysis/pretty/main.js:120690; webpack module 1576
function(e, t, n) {
    "use strict";
    var r = n(1), i = n(1577), o = n(350), a = n(747).parallel, s = n(748), l = n(753), c = n(1606);
    e.exports = function(e, t) {
        var n = o({}, s.defaults, e);
        function u(e) {
            return e.replace(new RegExp(" " + n.inlineAttribute + "-ignore" + s.attrValueExpression, "gi"), "").replace(new RegExp(" " + n.inlineAttribute + s.attrValueExpression, "gi"), "");
        }
        for (var d, h = function(t) {
            var r = this;
            r.element = u(r.element), s.getTextReplacement(r.src, n, function(i, o) {
                if (i) return s.handleReplaceErr(i, r.src, n.strict, t);
                var a = function(e, n) {
                    if (e) return t(e);
                    if (!n || "number" == typeof r.limit && n.length > 1e3 * r.limit) return t(null);
                    var i = n.toString();
                    i = i.replace(/<\/script>/gim, "<\\/script>"), i = "<script" + (r.attrs ? " " + r.attrs : "") + ">\n" + i + "\n<\/script>";
                    var o = new RegExp(s.escapeSpecialChars(r.element), "g");
                    return m = m.replace(o, () => i), t(null);
                };
                if (e.scriptTransform) return e.scriptTransform(o, a);
                a(null, o);
            });
        }, p = function(t) {
            var i = this;
            i.element = u(i.element), s.getTextReplacement(i.src, n, function(a, c) {
                if (a) return s.handleReplaceErr(a, i.src, n.strict, t);
                var u = function(e, a) {
                    if (e) return t(e);
                    if (!a || "number" == typeof i.limit && a.length > 1e3 * i.limit) return t(null);
                    var c = o({}, n, {
                        fileContent: a.toString(),
                        rebaseRelativeTo: s.isRemotePath(i.src) && !s.isRemotePath(n.relativeTo) ? i.src : r.relative(n.relativeTo, n.rebaseRelativeTo || r.join(n.relativeTo, i.src, ".." + r.sep))
                    });
                    l(c, function(e, n) {
                        if (e) return t(e);
                        var r = n.toString();
                        r = r.replace(/<\/script>/gim, "<\\/script>"), r = "<style" + (i.attrs ? " " + i.attrs : "") + ">\n" + r.replace(/\/\*[\s]*--[\s]*>*/gm, "/* - ->") + "\n</style>";
                        var o = new RegExp(s.escapeSpecialChars(i.element), "g");
                        return m = m.replace(o, () => r), t(null);
                    });
                };
                if (e.linkTransform) return e.linkTransform(c, u);
                u(null, c);
            });
        }, f = function(e) {
            var t = this;
            t.element = u(t.element), s.getFileReplacement(t.src, n, function(r, i) {
                if (r) return s.handleReplaceErr(r, t.src, n.strict, e);
                if (!i || "number" == typeof t.limit && i.length > 1e3 * t.limit) return e(null);
                var o = "<img" + (t.attrs ? " " + t.attrs : "") + ' src="' + i + '" />', a = new RegExp(s.escapeSpecialChars(t.element), "g");
                return m = m.replace(a, () => o), e(null);
            });
        }, _ = function(e) {
            var t = this;
            t.element = u(t.element), s.getTextReplacement(t.src, n, function(r, i) {
                if (r) return s.handleReplaceErr(r, t.src, n.strict, e);
                if (!i || "number" == typeof t.limit && i.length > 1e3 * t.limit) return e(null);
                var o = new c.DomHandler(function(n, r) {
                    if (n) return e(n);
                    var i = c.DomUtils.getElements({
                        id: t.id
                    }, r);
                    if (i.length) {
                        var o = c.DomUtils.getInnerHTML(i[0]), a = new RegExp(s.escapeSpecialChars(t.element), "g");
                        m = m.replace(a, () => o);
                    }
                    return e(null);
                }, {
                    normalizeWhitespace: !0
                }), a = new c.Parser(o, {
                    xmlMode: !0
                });
                a.write(i), a.done();
            });
        }, m = n.fileContent, g = [], v = new RegExp(n.inlineAttribute, "i"), y = new RegExp(n.inlineAttribute + "-ignore", "i"), E = new RegExp("stylesheet", "i"), b = /<script\b[^>]+?\bsrc\s*=\s*("|')([\s\S]+?)\1[\s\S]*?>[\s\w\S]*?(?=<\/script>)<\/script>/gi; null !== (d = b.exec(m)); ) {
            if (!y.test(d[0]) && (n.scripts || v.test(d[0]))) (T = i(d[2]).trim()) && 0 !== T.indexOf("#") && g.push(h.bind({
                element: d[0],
                src: T,
                attrs: s.getAttrs(d[0], n),
                limit: n.scripts
            }));
        }
        for (var w = /<link\b[\s\S]+?\bhref\s*=\s*("|')([\s\S]*?)\1[\s\S]*?>/gm; null !== (d = w.exec(m)); ) {
            if (!y.test(d[0]) && E.test(d[0]) && (n.links || v.test(d[0]))) (T = i(d[2]).trim()) && 0 !== T.indexOf("#") && g.push(p.bind({
                element: d[0],
                src: T,
                attrs: s.getAttrs(d[0], n),
                limit: n.links
            }));
        }
        for (var S = /<img\b[\s\S]+?\bsrc\s*=\s*("|')([\s\S]*?)\1[\s\S]*?>/gm; null !== (d = S.exec(m)); ) {
            var T;
            if (!y.test(d[0]) && (n.images || v.test(d[0]))) (T = i(d[2]).trim()) && 0 !== T.indexOf("#") && g.push(f.bind({
                element: d[0],
                src: T,
                attrs: s.getAttrs(d[0], n),
                limit: n.images
            }));
        }
        for (var A = /<use\b[\s\S]+?\bxlink:href\s*=\s*("|')([\s\S]+?)#([^"'\s]*)("|')\s*\/?>(<\/\s*use>)?/gi; null !== (d = A.exec(m)); ) y.test(d[0]) || !n.svgs && !v.test(d[0]) || g.push(_.bind({
            element: d[0],
            src: i(d[2]).trim(),
            attrs: s.getAttrs(d[0], n),
            limit: n.svgs,
            id: i(d[3]).trim()
        }));
        m = u(m), a(g, function(e) {
            t(e, m);
        });
    };
}
