// analysis/pretty/main.js:37659; webpack module 352
function(e, t, n) {
    "use strict";
    var r = n(1451).HTTPParser, i = n(37).Buffer, o = {
        request: r.REQUEST || "request",
        response: r.RESPONSE || "response"
    }, a = function(e) {
        this._type = e, this._parser = new r(o[e]), this._complete = !1, this.headers = {};
        var t = null, n = this;
        this._parser.onHeaderField = function(e, n, r) {
            t = e.toString("utf8", n, n + r).toLowerCase();
        }, this._parser.onHeaderValue = function(e, r, i) {
            var o = e.toString("utf8", r, r + i);
            n.headers.hasOwnProperty(t) ? n.headers[t] += ", " + o : n.headers[t] = o;
        }, this._parser.onHeadersComplete = this._parser[r.kOnHeadersComplete] = function(e, t, r, i, o, s) {
            var l = arguments[0];
            if ("object" == typeof l && (i = l.method, o = l.url, s = l.statusCode, r = l.headers), 
            n.method = "number" == typeof i ? a.METHODS[i] : i, n.statusCode = s, n.url = o, 
            r) {
                for (var c, u, d = 0, h = r.length; d < h; d += 2) c = r[d].toLowerCase(), u = r[d + 1], 
                n.headers.hasOwnProperty(c) ? n.headers[c] += ", " + u : n.headers[c] = u;
                n._complete = !0;
            }
        };
    };
    a.METHODS = {
        0: "DELETE",
        1: "GET",
        2: "HEAD",
        3: "POST",
        4: "PUT",
        5: "CONNECT",
        6: "OPTIONS",
        7: "TRACE",
        8: "COPY",
        9: "LOCK",
        10: "MKCOL",
        11: "MOVE",
        12: "PROPFIND",
        13: "PROPPATCH",
        14: "SEARCH",
        15: "UNLOCK",
        16: "BIND",
        17: "REBIND",
        18: "UNBIND",
        19: "ACL",
        20: "REPORT",
        21: "MKACTIVITY",
        22: "CHECKOUT",
        23: "MERGE",
        24: "M-SEARCH",
        25: "NOTIFY",
        26: "SUBSCRIBE",
        27: "UNSUBSCRIBE",
        28: "PATCH",
        29: "PURGE",
        30: "MKCALENDAR",
        31: "LINK",
        32: "UNLINK"
    };
    var s = process.version ? process.version.match(/[0-9]+/g).map(function(e) {
        return parseInt(e, 10);
    }) : [];
    0 === s[0] && 12 === s[1] && (a.METHODS[16] = "REPORT", a.METHODS[17] = "MKACTIVITY", 
    a.METHODS[18] = "CHECKOUT", a.METHODS[19] = "MERGE", a.METHODS[20] = "M-SEARCH", 
    a.METHODS[21] = "NOTIFY", a.METHODS[22] = "SUBSCRIBE", a.METHODS[23] = "UNSUBSCRIBE", 
    a.METHODS[24] = "PATCH", a.METHODS[25] = "PURGE"), a.prototype.isComplete = function() {
        return this._complete;
    }, a.prototype.parse = function(e) {
        var t = this._parser.execute(e, 0, e.length);
        if ("number" != typeof t) return this.error = t, void (this._complete = !0);
        this._complete && (this.body = t < e.length ? e.slice(t) : i.alloc(0));
    }, e.exports = a;
}
