// analysis/pretty/main.js:66720; webpack module 740
function(e, t, n) {
    "use strict";
    var r = n(210), i = n(5), o = n(1), a = n(39), s = n(43), l = n(15).parse, c = n(4), u = n(7), d = n(128), h = n(285), p = n(212), f = n(616), _ = n(1549), m = n(37).Buffer;
    function g(e) {
        if (!(this instanceof g)) return new g;
        for (var t in this._overheadLength = 0, this._valueLength = 0, this._valuesToMeasure = [], 
        r.call(this), e = e || {}) this[t] = e[t];
    }
    i.inherits(g, r), g.LINE_BREAK = "\r\n", g.DEFAULT_CONTENT_TYPE = "application/octet-stream", 
    g.prototype.append = function(e, t, n) {
        "string" == typeof (n = n || {}) && (n = {
            filename: n
        });
        var i = r.prototype.append.bind(this);
        if ("number" != typeof t && null != t || (t = String(t)), Array.isArray(t)) this._error(new Error("Arrays are not supported.")); else {
            var o = this._multiPartHeader(e, t, n), a = this._multiPartFooter();
            i(o), i(t), i(a), this._trackLength(o, t, n);
        }
    }, g.prototype._trackLength = function(e, t, n) {
        var r = 0;
        null != n.knownLength ? r += Number(n.knownLength) : m.isBuffer(t) ? r = t.length : "string" == typeof t && (r = m.byteLength(t)), 
        this._valueLength += r, this._overheadLength += m.byteLength(e) + g.LINE_BREAK.length, 
        t && (t.path || t.readable && p(t, "httpVersion")) && (n.knownLength || this._valuesToMeasure.push(t));
    }, g.prototype._lengthRetriever = function(e, t) {
        p(e, "fd") ? null != e.end && e.end !== 1 / 0 && null != e.start ? t(null, e.end + 1 - (e.start ? e.start : 0)) : c.stat(e.path, function(n, r) {
            var i;
            n ? t(n) : (i = r.size - (e.start ? e.start : 0), t(null, i));
        }) : p(e, "httpVersion") ? t(null, Number(e.headers["content-length"])) : p(e, "httpModule") ? (e.on("response", function(n) {
            e.pause(), t(null, Number(n.headers["content-length"]));
        }), e.resume()) : t("Unknown stream");
    }, g.prototype._multiPartHeader = function(e, t, n) {
        if ("string" == typeof n.header) return n.header;
        var r, i = this._getContentDisposition(t, n), o = this._getContentType(t, n), a = "", s = {
            "Content-Disposition": [ "form-data", 'name="' + e + '"' ].concat(i || []),
            "Content-Type": [].concat(o || [])
        };
        for (var l in "object" == typeof n.header && _(s, n.header), s) if (p(s, l)) {
            if (null == (r = s[l])) continue;
            Array.isArray(r) || (r = [ r ]), r.length && (a += l + ": " + r.join("; ") + g.LINE_BREAK);
        }
        return "--" + this.getBoundary() + g.LINE_BREAK + a + g.LINE_BREAK;
    }, g.prototype._getContentDisposition = function(e, t) {
        var n, r;
        return "string" == typeof t.filepath ? n = o.normalize(t.filepath).replace(/\\/g, "/") : t.filename || e && (e.name || e.path) ? n = o.basename(t.filename || e && (e.name || e.path)) : e && e.readable && p(e, "httpVersion") && (n = o.basename(e.client._httpMessage.path || "")), 
        n && (r = 'filename="' + n + '"'), r;
    }, g.prototype._getContentType = function(e, t) {
        var n = t.contentType;
        return !n && e && e.name && (n = d.lookup(e.name)), !n && e && e.path && (n = d.lookup(e.path)), 
        !n && e && e.readable && p(e, "httpVersion") && (n = e.headers["content-type"]), 
        n || !t.filepath && !t.filename || (n = d.lookup(t.filepath || t.filename)), !n && e && "object" == typeof e && (n = g.DEFAULT_CONTENT_TYPE), 
        n;
    }, g.prototype._multiPartFooter = function() {
        return function(e) {
            var t = g.LINE_BREAK;
            0 === this._streams.length && (t += this._lastBoundary()), e(t);
        }.bind(this);
    }, g.prototype._lastBoundary = function() {
        return "--" + this.getBoundary() + "--" + g.LINE_BREAK;
    }, g.prototype.getHeaders = function(e) {
        var t, n = {
            "content-type": "multipart/form-data; boundary=" + this.getBoundary()
        };
        for (t in e) p(e, t) && (n[t.toLowerCase()] = e[t]);
        return n;
    }, g.prototype.setBoundary = function(e) {
        if ("string" != typeof e) throw new TypeError("FormData boundary must be a string");
        this._boundary = e;
    }, g.prototype.getBoundary = function() {
        return this._boundary || this._generateBoundary(), this._boundary;
    }, g.prototype.getBuffer = function() {
        for (var e = m.alloc(0), t = this.getBoundary(), n = 0, r = this._streams.length; n < r; n++) "function" != typeof this._streams[n] && (e = m.isBuffer(this._streams[n]) ? m.concat([ e, this._streams[n] ]) : m.concat([ e, m.from(this._streams[n]) ]), 
        "string" == typeof this._streams[n] && this._streams[n].substring(2, t.length + 2) === t || (e = m.concat([ e, m.from(g.LINE_BREAK) ])));
        return m.concat([ e, m.from(this._lastBoundary()) ]);
    }, g.prototype._generateBoundary = function() {
        this._boundary = "--------------------------" + u.randomBytes(12).toString("hex");
    }, g.prototype.getLengthSync = function() {
        var e = this._overheadLength + this._valueLength;
        return this._streams.length && (e += this._lastBoundary().length), this.hasKnownLength() || this._error(new Error("Cannot calculate proper length in synchronous way.")), 
        e;
    }, g.prototype.hasKnownLength = function() {
        var e = !0;
        return this._valuesToMeasure.length && (e = !1), e;
    }, g.prototype.getLength = function(e) {
        var t = this._overheadLength + this._valueLength;
        this._streams.length && (t += this._lastBoundary().length), this._valuesToMeasure.length ? h.parallel(this._valuesToMeasure, this._lengthRetriever, function(n, r) {
            n ? e(n) : (r.forEach(function(e) {
                t += e;
            }), e(null, t));
        }) : process.nextTick(e.bind(this, null, t));
    }, g.prototype.submit = function(e, t) {
        var n, r, i = {
            method: "post"
        };
        return "string" == typeof e ? (e = l(e), r = _({
            port: e.port,
            path: e.pathname,
            host: e.hostname,
            protocol: e.protocol
        }, i)) : (r = _(e, i)).port || (r.port = "https:" === r.protocol ? 443 : 80), r.headers = this.getHeaders(e.headers), 
        n = "https:" === r.protocol ? s.request(r) : a.request(r), this.getLength(function(e, r) {
            e ? this._error(e) : (n.setHeader("Content-Length", r), this.pipe(n), t && (n.on("error", t), 
            n.on("response", t.bind(this, null))));
        }.bind(this)), n;
    }, g.prototype._error = function(e) {
        this.error || (this.error = e, this.pause(), this.emit("error", e));
    }, g.prototype.toString = function() {
        return "[object FormData]";
    }, f(g, "FormData"), e.exports = g;
}
