// analysis/pretty/main.js:120342; webpack module 1567
function(e, t, n) {
    "use strict";
    var r = n(244), i = n(1574), o = n(4), a = n(1), s = n(1575), l = n(1618), c = n(767), u = l;
    function d(e, t, n) {
        var i = r.extend({
            fileContent: e
        }, t);
        s.html(i, n);
    }
    function h(e, t, n) {
        (t = r.getDefaultOptions(t)).webResources.relativeTo = t.webResources.relativeTo || t.url, 
        d(e, t.webResources, function(e, r) {
            return e ? n(e) : n(null, c(r, {
                xmlMode: t && t.xmlMode
            }, l.juiceDocument, [ t ]));
        });
    }
    e.exports = u, u.version = i.version, u.Selector = r.Selector, u.Property = r.Property, 
    u.utils = r, u.ignoredPseudos = l.ignoredPseudos, u.widthElements = l.widthElements, 
    u.tableElements = l.tableElements, u.nonVisualElements = l.nonVisualElements, u.styleToAttribute = l.styleToAttribute, 
    u.juiceDocument = l.juiceDocument, u.inlineDocument = l.inlineDocument, u.inlineContent = l.inlineContent, 
    u.juiceFile = function(e, t, n) {
        o.readFile(e, "utf8", function(i, o) {
            if (i) return n(i);
            if (!(t = r.getDefaultOptions(t)).webResources.relativeTo) {
                var s = a.dirname(a.relative(process.cwd(), e));
                t.webResources.relativeTo = s;
            }
            h(o, t, n);
        });
    }, u.juiceResources = h, u.inlineExternal = d, u.codeBlocks = c.codeBlocks;
}
