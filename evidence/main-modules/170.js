// analysis/pretty/main.js:23837; webpack module 170
function(e, t, n) {
    var r = n(768), i = n(770);
    function o(t, n) {
        return delete e.exports[t], e.exports[t] = n, n;
    }
    e.exports = {
        Parser: r,
        Tokenizer: n(769),
        ElementType: n(82),
        DomHandler: i,
        get FeedHandler() {
            return o("FeedHandler", n(1626));
        },
        get Stream() {
            return o("Stream", n(1639));
        },
        get WritableStream() {
            return o("WritableStream", n(778));
        },
        get ProxyHandler() {
            return o("ProxyHandler", n(1640));
        },
        get DomUtils() {
            return o("DomUtils", n(772));
        },
        get CollectingHandler() {
            return o("CollectingHandler", n(1641));
        },
        DefaultHandler: i,
        get RssHandler() {
            return o("RssHandler", this.FeedHandler);
        },
        parseDOM: function(e, t) {
            var n = new i(t);
            return new r(n, t).end(e), n.dom;
        },
        parseFeed: function(t, n) {
            var i = new e.exports.FeedHandler(n);
            return new r(i, n).end(t), i.dom;
        },
        createDomStream: function(e, t, n) {
            var o = new i(e, t, n);
            return new r(o, t);
        },
        EVENTS: {
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
        }
    };
}
