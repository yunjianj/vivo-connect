// analysis/pretty/main.js:94346; webpack module 1195
function(e, t, n) {
    var r = n(210), i = n(5), o = n(1), a = n(39), s = n(43), l = n(15).parse, c = n(4), u = n(128), d = n(285), h = n(1196);
    function p(e) {
        if (!(this instanceof p)) return new p;
        for (var t in this._overheadLength = 0, this._valueLength = 0, this._valuesToMeasure = [], 
        r.call(this), e = e || {}) this[t] = e[t];
    }
    e.exports = p, i.inherits(p, r), p.LINE_BREAK = "\r\n", p.DEFAULT_CONTENT_TYPE = "application/octet-stream", 
    p.prototype.append = function(e, t, n) {
        "string" == typeof (n = n || {}) && (n = {
            filename: n
        });
        var o = r.prototype.append.bind(this);
        if ("number" == typeof t && (t = "" + t), i.isArray(t)) this._error(new Error("Arrays are not supported.")); else {
            var a = this._multiPartHeader(e, t, n), s = this._multiPartFooter();
            o(a), o(t), o(s), this._trackLength(a, t, n);
        }
    }, p.prototype._trackLength = function(e, t, n) {
        var r = 0;
        null != n.knownLength ? r += +n.knownLength : Buffer.isBuffer(t) ? r = t.length : "string" == typeof t && (r = Buffer.byteLength(t)), 
        this._valueLength += r, this._overheadLength += Buffer.byteLength(e) + p.LINE_BREAK.length, 
        t && (t.path || t.readable && t.hasOwnProperty("httpVersion")) && (n.knownLength || this._valuesToMeasure.push(t));
    }, p.prototype._lengthRetriever = function(e, t) {
        e.hasOwnProperty("fd") ? null != e.end && e.end != 1 / 0 && null != e.start ? t(null, e.end + 1 - (e.start ? e.start : 0)) : c.stat(e.path, function(n, r) {
            var i;
            n ? t(n) : (i = r.size - (e.start ? e.start : 0), t(null, i));
        }) : e.hasOwnProperty("httpVersion") ? t(null, +e.headers["content-length"]) : e.hasOwnProperty("httpModule") ? (e.on("response", function(n) {
            e.pause(), t(null, +n.headers["content-length"]);
        }), e.resume()) : t("Unknown stream");
    }, p.prototype._multiPartHeader = function(e, t, n) {
        if ("string" == typeof n.header) return n.header;
        var r, i = this._getContentDisposition(t, n), o = this._getContentType(t, n), a = "", s = {
            "Content-Disposition": [ "form-data", 'name="' + e + '"' ].concat(i || []),
            "Content-Type": [].concat(o || [])
        };
        for (var l in "object" == typeof n.header && h(s, n.header), s) s.hasOwnProperty(l) && null != (r = s[l]) && (Array.isArray(r) || (r = [ r ]), 
        r.length && (a += l + ": " + r.join("; ") + p.LINE_BREAK));
        return "--" + this.getBoundary() + p.LINE_BREAK + a + p.LINE_BREAK;
    }, p.prototype._getContentDisposition = function(e, t) {
        var n, r;
        return "string" == typeof t.filepath ? n = o.normalize(t.filepath).replace(/\\/g, "/") : t.filename || e.name || e.path ? n = o.basename(t.filename || e.name || e.path) : e.readable && e.hasOwnProperty("httpVersion") && (n = o.basename(e.client._httpMessage.path)), 
        n && (r = 'filename="' + n + '"'), r;
    }, p.prototype._getContentType = function(e, t) {
        var n = t.contentType;
        return !n && e.name && (n = u.lookup(e.name)), !n && e.path && (n = u.lookup(e.path)), 
        !n && e.readable && e.hasOwnProperty("httpVersion") && (n = e.headers["content-type"]), 
        n || !t.filepath && !t.filename || (n = u.lookup(t.filepath || t.filename)), n || "object" != typeof e || (n = p.DEFAULT_CONTENT_TYPE), 
        n;
    }, p.prototype._multiPartFooter = function() {
        return function(e) {
            var t = p.LINE_BREAK;
            0 === this._streams.length && (t += this._lastBoundary()), e(t);
        }.bind(this);
    }, p.prototype._lastBoundary = function() {
        return "--" + this.getBoundary() + "--" + p.LINE_BREAK;
    }, p.prototype.getHeaders = function(e) {
        var t, n = {
            "content-type": "multipart/form-data; boundary=" + this.getBoundary()
        };
        for (t in e) e.hasOwnProperty(t) && (n[t.toLowerCase()] = e[t]);
        return n;
    }, p.prototype.getBoundary = function() {
        return this._boundary || this._generateBoundary(), this._boundary;
    }, p.prototype._generateBoundary = function() {
        for (var e = "--------------------------", t = 0; t < 24; t++) e += Math.floor(10 * Math.random()).toString(16);
        this._boundary = e;
    }, p.prototype.getLengthSync = function() {
        var e = this._overheadLength + this._valueLength;
        return this._streams.length && (e += this._lastBoundary().length), this.hasKnownLength() || this._error(new Error("Cannot calculate proper length in synchronous way.")), 
        e;
    }, p.prototype.hasKnownLength = function() {
        var e = !0;
        return this._valuesToMeasure.length && (e = !1), e;
    }, p.prototype.getLength = function(e) {
        var t = this._overheadLength + this._valueLength;
        this._streams.length && (t += this._lastBoundary().length), this._valuesToMeasure.length ? d.parallel(this._valuesToMeasure, this._lengthRetriever, function(n, r) {
            n ? e(n) : (r.forEach(function(e) {
                t += e;
            }), e(null, t));
        }) : process.nextTick(e.bind(this, null, t));
    }, p.prototype.submit = function(e, t) {
        var n, r, i = {
            method: "post"
        };
        return "string" == typeof e ? (e = l(e), r = h({
            port: e.port,
            path: e.pathname,
            host: e.hostname,
            protocol: e.protocol
        }, i)) : (r = h(e, i)).port || (r.port = "https:" == r.protocol ? 443 : 80), r.headers = this.getHeaders(e.headers), 
        n = "https:" == r.protocol ? s.request(r) : a.request(r), this.getLength(function(e, r) {
            e ? this._error(e) : (n.setHeader("Content-Length", r), this.pipe(n), t && (n.on("error", t), 
            n.on("response", t.bind(this, null))));
        }.bind(this)), n;
    }, p.prototype._error = function(e) {
        this.error || (this.error = e, this.pause(), this.emit("error", e));
    }, p.prototype.toString = function() {
        return "[object FormData]";
    };
}
