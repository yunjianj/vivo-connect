// analysis/pretty/main.js:88671; webpack module 1100
function(e, t, n) {
    var r = n(1101), i = n(1102), o = n(22), a = Buffer.alloc, s = n(38).Readable, l = n(38).Writable, c = n(83).StringDecoder, u = n(603), d = parseInt("755", 8), h = parseInt("644", 8), p = a(1024), f = function() {}, _ = function(e, t) {
        (t &= 511) && e.push(p.slice(0, 512 - t));
    };
    var m = function(e) {
        l.call(this), this.written = 0, this._to = e, this._destroyed = !1;
    };
    o(m, l), m.prototype._write = function(e, t, n) {
        if (this.written += e.length, this._to.push(e)) return n();
        this._to._drain = n;
    }, m.prototype.destroy = function() {
        this._destroyed || (this._destroyed = !0, this.emit("close"));
    };
    var g = function() {
        l.call(this), this.linkname = "", this._decoder = new c("utf-8"), this._destroyed = !1;
    };
    o(g, l), g.prototype._write = function(e, t, n) {
        this.linkname += this._decoder.write(e), n();
    }, g.prototype.destroy = function() {
        this._destroyed || (this._destroyed = !0, this.emit("close"));
    };
    var v = function() {
        l.call(this), this._destroyed = !1;
    };
    o(v, l), v.prototype._write = function(e, t, n) {
        n(new Error("No body allowed for this entry"));
    }, v.prototype.destroy = function() {
        this._destroyed || (this._destroyed = !0, this.emit("close"));
    };
    var y = function(e) {
        if (!(this instanceof y)) return new y(e);
        s.call(this, e), this._drain = f, this._finalized = !1, this._finalizing = !1, this._destroyed = !1, 
        this._stream = null;
    };
    o(y, s), y.prototype.entry = function(e, t, n) {
        if (this._stream) throw new Error("already piping an entry");
        if (!this._finalized && !this._destroyed) {
            "function" == typeof t && (n = t, t = null), n || (n = f);
            var o = this;
            if (e.size && "symlink" !== e.type || (e.size = 0), e.type || (e.type = function(e) {
                switch (e & r.S_IFMT) {
                  case r.S_IFBLK:
                    return "block-device";

                  case r.S_IFCHR:
                    return "character-device";

                  case r.S_IFDIR:
                    return "directory";

                  case r.S_IFIFO:
                    return "fifo";

                  case r.S_IFLNK:
                    return "symlink";
                }
                return "file";
            }(e.mode)), e.mode || (e.mode = "directory" === e.type ? d : h), e.uid || (e.uid = 0), 
            e.gid || (e.gid = 0), e.mtime || (e.mtime = new Date), "string" == typeof t && (t = Buffer.from(t)), 
            Buffer.isBuffer(t)) {
                e.size = t.length, this._encode(e);
                var a = this.push(t);
                return _(o, e.size), a ? process.nextTick(n) : this._drain = n, new v;
            }
            if ("symlink" === e.type && !e.linkname) {
                var s = new g;
                return i(s, function(t) {
                    if (t) return o.destroy(), n(t);
                    e.linkname = s.linkname, o._encode(e), n();
                }), s;
            }
            if (this._encode(e), "file" !== e.type && "contiguous-file" !== e.type) return process.nextTick(n), 
            new v;
            var l = new m(this);
            return this._stream = l, i(l, function(t) {
                return o._stream = null, t ? (o.destroy(), n(t)) : l.written !== e.size ? (o.destroy(), 
                n(new Error("size mismatch"))) : (_(o, e.size), o._finalizing && o.finalize(), void n());
            }), l;
        }
    }, y.prototype.finalize = function() {
        this._stream ? this._finalizing = !0 : this._finalized || (this._finalized = !0, 
        this.push(p), this.push(null));
    }, y.prototype.destroy = function(e) {
        this._destroyed || (this._destroyed = !0, e && this.emit("error", e), this.emit("close"), 
        this._stream && this._stream.destroy && this._stream.destroy());
    }, y.prototype._encode = function(e) {
        if (!e.pax) {
            var t = u.encode(e);
            if (t) return void this.push(t);
        }
        this._encodePax(e);
    }, y.prototype._encodePax = function(e) {
        var t = u.encodePax({
            name: e.name,
            linkname: e.linkname,
            pax: e.pax
        }), n = {
            name: "PaxHeader",
            mode: e.mode,
            uid: e.uid,
            gid: e.gid,
            size: t.length,
            mtime: e.mtime,
            type: "pax-header",
            linkname: e.linkname && "PaxHeader",
            uname: e.uname,
            gname: e.gname,
            devmajor: e.devmajor,
            devminor: e.devminor
        };
        this.push(u.encode(n)), this.push(t), _(this, t.length), n.size = e.size, n.type = e.type, 
        this.push(u.encode(n));
    }, y.prototype._read = function(e) {
        var t = this._drain;
        this._drain = f, t();
    }, e.exports = y;
}
