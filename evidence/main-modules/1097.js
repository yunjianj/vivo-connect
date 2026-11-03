// analysis/pretty/main.js:88402; webpack module 1097
function(e, t, n) {
    var r = n(5), i = n(1098), o = n(603), a = n(38).Writable, s = n(38).PassThrough, l = function() {}, c = function(e) {
        return (e &= 511) && 512 - e;
    }, u = function(e, t) {
        this._parent = e, this.offset = t, s.call(this, {
            autoDestroy: !1
        });
    };
    r.inherits(u, s), u.prototype.destroy = function(e) {
        this._parent.destroy(e);
    };
    var d = function(e) {
        if (!(this instanceof d)) return new d(e);
        a.call(this, e), e = e || {}, this._offset = 0, this._buffer = i(), this._missing = 0, 
        this._partial = !1, this._onparse = l, this._header = null, this._stream = null, 
        this._overflow = null, this._cb = null, this._locked = !1, this._destroyed = !1, 
        this._pax = null, this._paxGlobal = null, this._gnuLongPath = null, this._gnuLongLinkPath = null;
        var t = this, n = t._buffer, r = function() {
            t._continue();
        }, s = function(e) {
            if (t._locked = !1, e) return t.destroy(e);
            t._stream || r();
        }, h = function() {
            t._stream = null;
            var e = c(t._header.size);
            e ? t._parse(e, p) : t._parse(512, v), t._locked || r();
        }, p = function() {
            t._buffer.consume(c(t._header.size)), t._parse(512, v), r();
        }, f = function() {
            var e = t._header.size;
            t._paxGlobal = o.decodePax(n.slice(0, e)), n.consume(e), h();
        }, _ = function() {
            var e = t._header.size;
            t._pax = o.decodePax(n.slice(0, e)), t._paxGlobal && (t._pax = Object.assign({}, t._paxGlobal, t._pax)), 
            n.consume(e), h();
        }, m = function() {
            var r = t._header.size;
            this._gnuLongPath = o.decodeLongPath(n.slice(0, r), e.filenameEncoding), n.consume(r), 
            h();
        }, g = function() {
            var r = t._header.size;
            this._gnuLongLinkPath = o.decodeLongPath(n.slice(0, r), e.filenameEncoding), n.consume(r), 
            h();
        }, v = function() {
            var i, a = t._offset;
            try {
                i = t._header = o.decode(n.slice(0, 512), e.filenameEncoding, e.allowUnknownFormat);
            } catch (e) {
                t.emit("error", e);
            }
            return n.consume(512), i ? "gnu-long-path" === i.type ? (t._parse(i.size, m), void r()) : "gnu-long-link-path" === i.type ? (t._parse(i.size, g), 
            void r()) : "pax-global-header" === i.type ? (t._parse(i.size, f), void r()) : "pax-header" === i.type ? (t._parse(i.size, _), 
            void r()) : (t._gnuLongPath && (i.name = t._gnuLongPath, t._gnuLongPath = null), 
            t._gnuLongLinkPath && (i.linkname = t._gnuLongLinkPath, t._gnuLongLinkPath = null), 
            t._pax && (t._header = i = function(e, t) {
                return t.path && (e.name = t.path), t.linkpath && (e.linkname = t.linkpath), t.size && (e.size = parseInt(t.size, 10)), 
                e.pax = t, e;
            }(i, t._pax), t._pax = null), t._locked = !0, i.size && "directory" !== i.type ? (t._stream = new u(t, a), 
            t.emit("entry", i, t._stream, s), t._parse(i.size, h), void r()) : (t._parse(512, v), 
            void t.emit("entry", i, function(e, t) {
                var n = new u(e, t);
                return n.end(), n;
            }(t, a), s))) : (t._parse(512, v), void r());
        };
        this._onheader = v, this._parse(512, v);
    };
    r.inherits(d, a), d.prototype.destroy = function(e) {
        this._destroyed || (this._destroyed = !0, e && this.emit("error", e), this.emit("close"), 
        this._stream && this._stream.emit("close"));
    }, d.prototype._parse = function(e, t) {
        this._destroyed || (this._offset += e, this._missing = e, t === this._onheader && (this._partial = !1), 
        this._onparse = t);
    }, d.prototype._continue = function() {
        if (!this._destroyed) {
            var e = this._cb;
            this._cb = l, this._overflow ? this._write(this._overflow, void 0, e) : e();
        }
    }, d.prototype._write = function(e, t, n) {
        if (!this._destroyed) {
            var r = this._stream, i = this._buffer, o = this._missing;
            if (e.length && (this._partial = !0), e.length < o) return this._missing -= e.length, 
            this._overflow = null, r ? r.write(e, n) : (i.append(e), n());
            this._cb = n, this._missing = 0;
            var a = null;
            e.length > o && (a = e.slice(o), e = e.slice(0, o)), r ? r.end(e) : i.append(e), 
            this._overflow = a, this._onparse();
        }
    }, d.prototype._final = function(e) {
        if (this._partial) return this.destroy(new Error("Unexpected end of data"));
        e();
    }, e.exports = d;
}
