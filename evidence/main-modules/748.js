// analysis/pretty/main.js:68685; webpack module 748
function(e, t, n) {
    "use strict";
    var r = n(1), i = n(15), o = n(1578), a = n(4), s = n(103), l = n(1596), c = n(1605), u = n(17).Buffer, d = {};
    function h(e, t, n, r) {
        /^\/\//.test(e) && (e = "https:" + e);
        var i = {
            uri: e,
            encoding: r && "binary",
            gzip: !0
        };
        if ("function" == typeof t.requestTransform) {
            var o = t.requestTransform(i);
            if (!1 === o) return n();
            if (void 0 === o) return n(new Error(e + " requestTransform returned `undefined`"));
            i = o || i;
        }
        s(i, function(t, i, o) {
            if (t) return n(t);
            if (200 !== i.statusCode) return n(new Error(e + " returned http " + i.statusCode));
            if (r) {
                var a = u.from(o.toString(), "binary").toString("base64"), s = "data:" + i.headers["content-type"] + ";base64," + a;
                return n(null, s);
            }
            return n(null, o);
        });
    }
    e.exports = d, d.defaults = {
        images: 8,
        svgs: 8,
        scripts: !0,
        links: !0,
        strict: !1,
        relativeTo: "",
        rebaseRelativeTo: "",
        inlineAttribute: "data-inline",
        fileContent: "",
        requestTransform: void 0,
        scriptTransform: void 0,
        linkTransform: void 0
    }, d.attrValueExpression = "(=[\"']([^\"']+?)[\"'])?", d.escapeSpecialChars = function(e) {
        return e.replace(/(\/|\.|\$|\^|\{|\[|\(|\||\)|\*|\+|\?|\\)/gm, "\\$1");
    }, d.isRemotePath = function(e) {
        return /^'?https?:\/\/|^\/\//.test(e);
    }, d.isBase64Path = function(e) {
        return /^'?data.*base64/.test(e);
    }, d.getAttrs = function(e, t) {
        var n = e.match(/^<[^\W>]*/);
        if (n) {
            n = n[0];
            var r = e.replace(/(<[\s\S]*?(?=\>))([\s\S]*?(?=\<\/))(<\/[\w\W]>)?/gm, "$1>$3").replace(/^<[^\s>]*/, "").replace(/\/?>/, "").replace(/>?\s?<\/[^>]*>$/, "").replace(new RegExp(t.inlineAttribute + "-ignore" + d.attrValueExpression, "gi"), "").replace(new RegExp(t.inlineAttribute + d.attrValueExpression, "gi"), "");
            if ("<script" === n || "<img" === n) return r.replace(/(src|language|type)=["'][^"']*["']/gi, "").trim();
            if ("<link" === n) return r.replace(/(href|rel)=["'][^"']*["']/g, "").trim();
        }
    }, d.getInlineFilePath = function(e, t) {
        return e = e.replace(/^\//, ""), r.resolve(t, e).replace(/[\?#].*$/, "");
    }, d.getInlineFileContents = function(e, t) {
        return a.readFileSync(d.getInlineFilePath(e, t));
    }, d.getTextReplacement = function(e, t, n) {
        if (d.isRemotePath(t.relativeTo) || d.isRemotePath(e)) h(i.resolve(t.relativeTo, e), t, n); else {
            if (!d.isRemotePath(e)) {
                try {
                    var r = d.getInlineFileContents(e, t.relativeTo);
                } catch (e) {
                    return n(e);
                }
                return n(null, r);
            }
            h(e, t, n);
        }
    }, d.getFileReplacement = function(e, t, n) {
        if (!e || d.srcIsCid(e)) n(null); else if (d.isRemotePath(t.relativeTo)) h(i.resolve(t.relativeTo, e), t, n, !0); else if (d.isRemotePath(e)) h(e, t, n, !0); else if (c(e)) n(null, e); else {
            var r = new o(d.getInlineFilePath(e, t.relativeTo)).content;
            n(void 0 === r ? new Error("Local file not found") : null, r);
        }
    }, d.srcIsCid = function(e) {
        return e.match(/^cid:/);
    }, d.handleReplaceErr = function(e, t, n, r) {
        return n ? r(e) : (console.warn(l.yellow("Not found, skipping: " + t)), r(null));
    };
}
