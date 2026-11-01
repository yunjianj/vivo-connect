// analysis/pretty/main.js:107866; webpack module 1451
function(e, t) {
    function n(e) {
        if (void 0 !== e && e !== n.REQUEST && e !== n.RESPONSE) throw new Error("type must be REQUEST or RESPONSE");
        void 0 === e || this.initialize(e), this.maxHeaderSize = n.maxHeaderSize;
    }
    t.HTTPParser = n, n.prototype.initialize = function(e, t) {
        if (e !== n.REQUEST && e !== n.RESPONSE) throw new Error("type must be REQUEST or RESPONSE");
        this.type = e, this.state = e + "_LINE", this.info = {
            headers: [],
            upgrade: !1
        }, this.trailers = [], this.line = "", this.isChunked = !1, this.connection = "", 
        this.headerSize = 0, this.body_bytes = null, this.isUserCall = !1, this.hadError = !1;
    }, n.encoding = "ascii", n.maxHeaderSize = 81920, n.REQUEST = "REQUEST", n.RESPONSE = "RESPONSE";
    var r = n.kOnHeaders = 1, i = n.kOnHeadersComplete = 2, o = n.kOnBody = 3, a = n.kOnMessageComplete = 4;
    n.prototype[r] = n.prototype[i] = n.prototype[o] = n.prototype[a] = function() {};
    var s = !0;
    Object.defineProperty(n, "kOnExecute", {
        get: function() {
            return s = !1, 99;
        }
    });
    var l = t.methods = n.methods = [ "DELETE", "GET", "HEAD", "POST", "PUT", "CONNECT", "OPTIONS", "TRACE", "COPY", "LOCK", "MKCOL", "MOVE", "PROPFIND", "PROPPATCH", "SEARCH", "UNLOCK", "BIND", "REBIND", "UNBIND", "ACL", "REPORT", "MKACTIVITY", "CHECKOUT", "MERGE", "M-SEARCH", "NOTIFY", "SUBSCRIBE", "UNSUBSCRIBE", "PATCH", "PURGE", "MKCALENDAR", "LINK", "UNLINK", "SOURCE" ], c = l.indexOf("CONNECT");
    n.prototype.reinitialize = n, n.prototype.close = n.prototype.pause = n.prototype.resume = n.prototype.remove = n.prototype.free = function() {}, 
    n.prototype._compatMode0_11 = !1, n.prototype.getAsyncId = function() {
        return 0;
    };
    var u = {
        REQUEST_LINE: !0,
        RESPONSE_LINE: !0,
        HEADER: !0
    };
    n.prototype.execute = function(e, t, r) {
        if (!(this instanceof n)) throw new TypeError("not a HTTPParser");
        t = t || 0, r = "number" == typeof r ? r : e.length, this.chunk = e, this.offset = t;
        var i = this.end = t + r;
        try {
            for (;this.offset < i && !this[this.state](); ) ;
        } catch (e) {
            if (this.isUserCall) throw e;
            return this.hadError = !0, e;
        }
        return this.chunk = null, r = this.offset - t, u[this.state] && (this.headerSize += r, 
        this.headerSize > (this.maxHeaderSize || n.maxHeaderSize)) ? new Error("max header size exceeded") : r;
    };
    var d = {
        REQUEST_LINE: !0,
        RESPONSE_LINE: !0,
        BODY_RAW: !0
    };
    n.prototype.finish = function() {
        if (!this.hadError) return d[this.state] ? void ("BODY_RAW" === this.state && this.userCall()(this[a]())) : new Error("invalid state for EOF");
    }, n.prototype.consume = n.prototype.unconsume = n.prototype.getCurrentBuffer = function() {}, 
    n.prototype.userCall = function() {
        this.isUserCall = !0;
        var e = this;
        return function(t) {
            return e.isUserCall = !1, t;
        };
    }, n.prototype.nextRequest = function() {
        this.userCall()(this[a]()), this.reinitialize(this.type);
    }, n.prototype.consumeLine = function() {
        for (var e = this.end, t = this.chunk, r = this.offset; r < e; r++) if (10 === t[r]) {
            var i = this.line + t.toString(n.encoding, this.offset, r);
            return "\r" === i.charAt(i.length - 1) && (i = i.substr(0, i.length - 1)), this.line = "", 
            this.offset = r + 1, i;
        }
        this.line += t.toString(n.encoding, this.offset, this.end), this.offset = this.end;
    };
    var h = /^([^: \t]+):[ \t]*((?:.*[^ \t])|)/, p = /^[ \t]+(.*[^ \t])/;
    n.prototype.parseHeader = function(e, t) {
        if (-1 !== e.indexOf("\r")) throw m("HPE_LF_EXPECTED");
        var n = h.exec(e), r = n && n[1];
        if (r) t.push(r), t.push(n[2]); else {
            var i = p.exec(e);
            i && t.length && (t[t.length - 1] && (t[t.length - 1] += " "), t[t.length - 1] += i[1]);
        }
    };
    var f = /^([A-Z-]+) ([^ ]+) HTTP\/(\d)\.(\d)$/;
    n.prototype.REQUEST_LINE = function() {
        var e = this.consumeLine();
        if (e) {
            var t = f.exec(e);
            if (null === t) throw m("HPE_INVALID_CONSTANT");
            if (this.info.method = this._compatMode0_11 ? t[1] : l.indexOf(t[1]), -1 === this.info.method) throw new Error("invalid request method");
            this.info.url = t[2], this.info.versionMajor = +t[3], this.info.versionMinor = +t[4], 
            this.body_bytes = 0, this.state = "HEADER";
        }
    };
    var _ = /^HTTP\/(\d)\.(\d) (\d{3}) ?(.*)$/;
    function m(e) {
        var t = new Error("Parse Error");
        return t.code = e, t;
    }
    n.prototype.RESPONSE_LINE = function() {
        var e = this.consumeLine();
        if (e) {
            var t = _.exec(e);
            if (null === t) throw m("HPE_INVALID_CONSTANT");
            this.info.versionMajor = +t[1], this.info.versionMinor = +t[2];
            var n = this.info.statusCode = +t[3];
            this.info.statusMessage = t[4], 1 != (n / 100 | 0) && 204 !== n && 304 !== n || (this.body_bytes = 0), 
            this.state = "HEADER";
        }
    }, n.prototype.shouldKeepAlive = function() {
        if (this.info.versionMajor > 0 && this.info.versionMinor > 0) {
            if (-1 !== this.connection.indexOf("close")) return !1;
        } else if (-1 === this.connection.indexOf("keep-alive")) return !1;
        return !(null === this.body_bytes && !this.isChunked);
    }, n.prototype.HEADER = function() {
        var e = this.consumeLine();
        if (void 0 !== e) {
            var t = this.info;
            if (e) this.parseHeader(e, t.headers); else {
                for (var r, o, a = t.headers, l = !1, u = !1, d = 0; d < a.length; d += 2) switch (a[d].toLowerCase()) {
                  case "transfer-encoding":
                    this.isChunked = "chunked" === a[d + 1].toLowerCase();
                    break;

                  case "content-length":
                    if (r = +a[d + 1], l) {
                        if (r !== this.body_bytes) throw m("HPE_UNEXPECTED_CONTENT_LENGTH");
                    } else l = !0, this.body_bytes = r;
                    break;

                  case "connection":
                    this.connection += a[d + 1].toLowerCase();
                    break;

                  case "upgrade":
                    u = !0;
                }
                if (this.isChunked && l && (l = !1, this.body_bytes = null), u && -1 != this.connection.indexOf("upgrade") ? t.upgrade = this.type === n.REQUEST || 101 === t.statusCode : t.upgrade = t.method === c, 
                this.isChunked && t.upgrade && (this.isChunked = !1), t.shouldKeepAlive = this.shouldKeepAlive(), 
                2 === (o = s ? this.userCall()(this[i](t)) : this.userCall()(this[i](t.versionMajor, t.versionMinor, t.headers, t.method, t.url, t.statusCode, t.statusMessage, t.upgrade, t.shouldKeepAlive)))) return this.nextRequest(), 
                !0;
                if (this.isChunked && !o) this.state = "BODY_CHUNKHEAD"; else {
                    if (o || 0 === this.body_bytes) return this.nextRequest(), t.upgrade;
                    null === this.body_bytes ? this.state = "BODY_RAW" : this.state = "BODY_SIZED";
                }
            }
        }
    }, n.prototype.BODY_CHUNKHEAD = function() {
        var e = this.consumeLine();
        void 0 !== e && (this.body_bytes = parseInt(e, 16), this.body_bytes ? this.state = "BODY_CHUNK" : this.state = "BODY_CHUNKTRAILERS");
    }, n.prototype.BODY_CHUNK = function() {
        var e = Math.min(this.end - this.offset, this.body_bytes);
        this.userCall()(this[o](this.chunk.slice(this.offset, this.offset + e), 0, e)), 
        this.offset += e, this.body_bytes -= e, this.body_bytes || (this.state = "BODY_CHUNKEMPTYLINE");
    }, n.prototype.BODY_CHUNKEMPTYLINE = function() {
        var e = this.consumeLine();
        if (void 0 !== e) {
            if ("" !== e) throw new Error("Expected empty line");
            this.state = "BODY_CHUNKHEAD";
        }
    }, n.prototype.BODY_CHUNKTRAILERS = function() {
        var e = this.consumeLine();
        void 0 !== e && (e ? this.parseHeader(e, this.trailers) : (this.trailers.length && this.userCall()(this[r](this.trailers, "")), 
        this.nextRequest()));
    }, n.prototype.BODY_RAW = function() {
        this.userCall()(this[o](this.chunk.slice(this.offset, this.end), 0, this.end - this.offset)), 
        this.offset = this.end;
    }, n.prototype.BODY_SIZED = function() {
        var e = Math.min(this.end - this.offset, this.body_bytes);
        this.userCall()(this[o](this.chunk.slice(this.offset, this.offset + e), 0, e)), 
        this.offset += e, this.body_bytes -= e, this.body_bytes || this.nextRequest();
    }, [ "Headers", "HeadersComplete", "Body", "MessageComplete" ].forEach(function(e) {
        var t = n["kOn" + e];
        Object.defineProperty(n.prototype, "on" + e, {
            get: function() {
                return this[t];
            },
            set: function(e) {
                return this._compatMode0_11 = !0, c = "CONNECT", this[t] = e;
            }
        });
    });
}
