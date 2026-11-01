// analysis/pretty/main.js:69120; webpack module 753
function(e, t, n) {
    "use strict";
    var r = n(15), i = n(350), o = n(747).parallel, a = n(1), s = n(748);
    e.exports = function(e, t) {
        var n = i({}, s.defaults, e), l = function(e) {
            var t = this;
            if (s.isBase64Path(t.src)) return e(null);
            s.getFileReplacement(t.src, n, function(r, i) {
                if (r) return s.handleReplaceErr(r, t.src, n.strict, e);
                if ("number" == typeof t.limit && i.length > 1e3 * t.limit) return e(null);
                var o = 'url("' + i + '")', a = new RegExp("url\\(\\s?[\"']?(" + s.escapeSpecialChars(t.src) + ")[\"']?\\s?\\)", "g");
                return u = u.replace(a, () => o), e(null);
            });
        }, c = function(e) {
            var t = 'url("' + (s.isRemotePath(e) || s.isRemotePath(n.rebaseRelativeTo) ? r.resolve(n.rebaseRelativeTo, e) : a.join(n.rebaseRelativeTo, e).replace(/\\/g, "/")) + '")', i = new RegExp("url\\(\\s?[\"']?(" + s.escapeSpecialChars(e) + ")[\"']?\\s?\\)", "g");
            u = u.replace(i, () => t);
        }, u = n.fileContent, d = [], h = null, p = /url\(\s?["']?([^)'"]+)["']?\s?\).*/i, f = 0;
        if (n.rebaseRelativeTo) {
            for (var _, m = {}; null !== (h = p.exec(u.substring(f))); ) m[_ = h[1]] = !0, f = h.index + f + 1;
            for (_ in m) s.isRemotePath(_) || s.isBase64Path(_) || c(_);
        }
        var g = new RegExp("\\/\\*\\s?" + n.inlineAttribute + "\\s?\\*\\/", "i"), v = new RegExp("\\/\\*\\s?" + n.inlineAttribute + "-ignore\\s?\\*\\/", "i");
        for (f = 0; null !== (h = p.exec(u.substring(f))); ) v.test(h[0]) || !n.images && !g.test(h[0]) || d.push(l.bind({
            src: h[1],
            limit: n.images
        })), f = h.index + f + 1;
        o(d, function(e) {
            t(e, u);
        });
    };
}
