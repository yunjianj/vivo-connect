// analysis/pretty/main.js:122841; webpack module 1606
function(e, t, n) {
    "use strict";
    function r(e) {
        for (var n in e) t.hasOwnProperty(n) || (t[n] = e[n]);
    }
    var i = this && this.__importStar || function(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e) for (var n in e) Object.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        return t.default = e, t;
    };
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var o = n(364);
    t.Parser = o.Parser;
    var a = n(757);
    t.DomHandler = a.DomHandler, t.DefaultHandler = a.DomHandler, t.parseDOM = function(e, t) {
        var n = new a.DomHandler(void 0, t);
        return new o.Parser(n, t).end(e), n.dom;
    }, t.createDomStream = function(e, t, n) {
        var r = new a.DomHandler(e, t, n);
        return new o.Parser(r, t);
    };
    var s = n(754);
    t.Tokenizer = s.default;
    var l = i(n(169));
    t.ElementType = l, t.EVENTS = {
        attribute: 2,
        cdatastart: 0,
        cdataend: 0,
        text: 1,
        processinginstruction: 2,
        comment: 1,
        commentend: 0,
        closetag: 1,
        opentag: 2,
        opentagname: 1,
        error: 1,
        end: 0
    }, r(n(759)), r(n(1615)), r(n(1616));
    var c = i(n(760));
    t.DomUtils = c;
    var u = n(759);
    t.RssHandler = u.FeedHandler;
}
