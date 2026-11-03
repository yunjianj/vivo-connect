// analysis/pretty/main.js:70801; webpack module 773
function(e, t, n) {
    var r = n(1628), i = n(1629), o = n(1633);
    o.elementNames.__proto__ = null, o.attributeNames.__proto__ = null;
    var a = {
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
    var s = {
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
    }, l = e.exports = function(e, t) {
        Array.isArray(e) || e.cheerio || (e = [ e ]), t = t || {};
        for (var n = "", i = 0; i < e.length; i++) {
            var o = e[i];
            "root" === o.type ? n += l(o.children, t) : r.isTag(o) ? n += u(o, t) : o.type === r.Directive ? n += d(o) : o.type === r.Comment ? n += f(o) : o.type === r.CDATA ? n += p(o) : n += h(o, t);
        }
        return n;
    }, c = [ "mi", "mo", "mn", "ms", "mtext", "annotation-xml", "foreignObject", "desc", "title" ];
    function u(e, t) {
        "foreign" === t.xmlMode && (e.name = o.elementNames[e.name] || e.name, e.parent && c.indexOf(e.parent.name) >= 0 && (t = Object.assign({}, t, {
            xmlMode: !1
        }))), !t.xmlMode && [ "svg", "math" ].indexOf(e.name) >= 0 && (t = Object.assign({}, t, {
            xmlMode: "foreign"
        }));
        var n = "<" + e.name, r = function(e, t) {
            if (e) {
                var n, r = "";
                for (var a in e) n = e[a], r && (r += " "), "foreign" === t.xmlMode && (a = o.attributeNames[a] || a), 
                r += a, (null !== n && "" !== n || t.xmlMode) && (r += '="' + (t.decodeEntities ? i.encodeXML(n) : n.replace(/\"/g, "&quot;")) + '"');
                return r;
            }
        }(e.attribs, t);
        return r && (n += " " + r), !t.xmlMode || e.children && 0 !== e.children.length ? (n += ">", 
        e.children && (n += l(e.children, t)), s[e.name] && !t.xmlMode || (n += "</" + e.name + ">")) : n += "/>", 
        n;
    }
    function d(e) {
        return "<" + e.data + ">";
    }
    function h(e, t) {
        var n = e.data || "";
        return !t.decodeEntities || e.parent && e.parent.name in a || (n = i.encodeXML(n)), 
        n;
    }
    function p(e) {
        return "<![CDATA[" + e.children[0].data + "]]>";
    }
    function f(e) {
        return "\x3c!--" + e.data + "--\x3e";
    }
}
