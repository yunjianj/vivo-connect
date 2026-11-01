// analysis/pretty/main.js:70992; webpack module 779
function(e, t, n) {
    var r = n(82), i = n(1642), o = {
        __proto__: null,
        style: !0,
        script: !0,
        xmp: !0,
        iframe: !0,
        noembed: !0,
        noframes: !0,
        plaintext: !0,
        noscript: !0
    };
    var a = {
        __proto__: null,
        area: !0,
        base: !0,
        basefont: !0,
        br: !0,
        col: !0,
        command: !0,
        embed: !0,
        frame: !0,
        hr: !0,
        img: !0,
        input: !0,
        isindex: !0,
        keygen: !0,
        link: !0,
        meta: !0,
        param: !0,
        source: !0,
        track: !0,
        wbr: !0
    }, s = e.exports = function(e, t) {
        Array.isArray(e) || e.cheerio || (e = [ e ]), t = t || {};
        for (var n = "", i = 0; i < e.length; i++) {
            var o = e[i];
            "root" === o.type ? n += s(o.children, t) : r.isTag(o) ? n += l(o, t) : o.type === r.Directive ? n += c(o) : o.type === r.Comment ? n += h(o) : o.type === r.CDATA ? n += d(o) : n += u(o, t);
        }
        return n;
    };
    function l(e, t) {
        "svg" === e.name && (t = {
            decodeEntities: t.decodeEntities,
            xmlMode: !0
        });
        var n = "<" + e.name, r = function(e, t) {
            if (e) {
                var n, r = "";
                for (var o in e) r && (r += " "), r += o, (null !== (n = e[o]) && "" !== n || t.xmlMode) && (r += '="' + (t.decodeEntities ? i.encodeXML(n) : n) + '"');
                return r;
            }
        }(e.attribs, t);
        return r && (n += " " + r), !t.xmlMode || e.children && 0 !== e.children.length ? (n += ">", 
        e.children && (n += s(e.children, t)), a[e.name] && !t.xmlMode || (n += "</" + e.name + ">")) : n += "/>", 
        n;
    }
    function c(e) {
        return "<" + e.data + ">";
    }
    function u(e, t) {
        var n = e.data || "";
        return !t.decodeEntities || e.parent && e.parent.name in o || (n = i.encodeXML(n)), 
        n;
    }
    function d(e) {
        return "<![CDATA[" + e.children[0].data + "]]>";
    }
    function h(e) {
        return "\x3c!--" + e.data + "--\x3e";
    }
}
