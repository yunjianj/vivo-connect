// analysis/pretty/main.js:78726; webpack module 910
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    const r = n(911), i = n(912), o = n(13), a = new o.Name("fullFormats"), s = new o.Name("fastFormats"), l = (e, t = {
        keywords: !0
    }) => {
        if (Array.isArray(t)) return c(e, t, r.fullFormats, a), e;
        const [n, o] = "fast" === t.mode ? [ r.fastFormats, s ] : [ r.fullFormats, a ];
        return c(e, t.formats || r.formatNames, n, o), t.keywords && i.default(e), e;
    };
    function c(e, t, n, r) {
        var i, a;
        null !== (i = (a = e.opts.code).formats) && void 0 !== i || (a.formats = o._`require("ajv-formats/dist/formats").${r}`);
        for (const r of t) e.addFormat(r, n[r]);
    }
    l.get = (e, t = "full") => {
        const n = ("fast" === t ? r.fastFormats : r.fullFormats)[e];
        if (!n) throw new Error(`Unknown format "${e}"`);
        return n;
    }, e.exports = t = l, Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = l;
}
