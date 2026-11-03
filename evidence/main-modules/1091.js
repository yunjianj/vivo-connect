// analysis/pretty/main.js:88075; webpack module 1091
function(e, t, n) {
    var r = n(5).inherits, i = n(600), {CRC32Stream: o} = n(601), {DeflateCRC32Stream: a} = n(601), s = n(598), l = (n(595), 
    n(596), n(597)), c = (n(599), n(282)), u = e.exports = function(e) {
        if (!(this instanceof u)) return new u(e);
        e = this.options = this._defaults(e), s.call(this, e), this._entry = null, this._entries = [], 
        this._archive = {
            centralLength: 0,
            centralOffset: 0,
            comment: "",
            finish: !1,
            finished: !1,
            processing: !1,
            forceZip64: e.forceZip64,
            forceLocalTime: e.forceLocalTime
        };
    };
    r(u, s), u.prototype._afterAppend = function(e) {
        this._entries.push(e), e.getGeneralPurposeBit().usesDataDescriptor() && this._writeDataDescriptor(e), 
        this._archive.processing = !1, this._entry = null, this._archive.finish && !this._archive.finished && this._finish();
    }, u.prototype._appendBuffer = function(e, t, n) {
        0 === t.length && e.setMethod(l.METHOD_STORED);
        var r = e.getMethod();
        return r === l.METHOD_STORED && (e.setSize(t.length), e.setCompressedSize(t.length), 
        e.setCrc(i.unsigned(t))), this._writeLocalFileHeader(e), r === l.METHOD_STORED ? (this.write(t), 
        this._afterAppend(e), void n(null, e)) : r === l.METHOD_DEFLATED ? void this._smartStream(e, n).end(t) : void n(new Error("compression method " + r + " not implemented"));
    }, u.prototype._appendStream = function(e, t, n) {
        e.getGeneralPurposeBit().useDataDescriptor(!0), e.setVersionNeededToExtract(l.MIN_VERSION_DATA_DESCRIPTOR), 
        this._writeLocalFileHeader(e);
        var r = this._smartStream(e, n);
        t.once("error", function(e) {
            r.emit("error", e), r.end();
        }), t.pipe(r);
    }, u.prototype._defaults = function(e) {
        return "object" != typeof e && (e = {}), "object" != typeof e.zlib && (e.zlib = {}), 
        "number" != typeof e.zlib.level && (e.zlib.level = l.ZLIB_BEST_SPEED), e.forceZip64 = !!e.forceZip64, 
        e.forceLocalTime = !!e.forceLocalTime, e;
    }, u.prototype._finish = function() {
        this._archive.centralOffset = this.offset, this._entries.forEach(function(e) {
            this._writeCentralFileHeader(e);
        }.bind(this)), this._archive.centralLength = this.offset - this._archive.centralOffset, 
        this.isZip64() && this._writeCentralDirectoryZip64(), this._writeCentralDirectoryEnd(), 
        this._archive.processing = !1, this._archive.finish = !0, this._archive.finished = !0, 
        this.end();
    }, u.prototype._normalizeEntry = function(e) {
        -1 === e.getMethod() && e.setMethod(l.METHOD_DEFLATED), e.getMethod() === l.METHOD_DEFLATED && (e.getGeneralPurposeBit().useDataDescriptor(!0), 
        e.setVersionNeededToExtract(l.MIN_VERSION_DATA_DESCRIPTOR)), -1 === e.getTime() && e.setTime(new Date, this._archive.forceLocalTime), 
        e._offsets = {
            file: 0,
            data: 0,
            contents: 0
        };
    }, u.prototype._smartStream = function(e, t) {
        var n = e.getMethod() === l.METHOD_DEFLATED ? new a(this.options.zlib) : new o, r = null;
        return n.once("end", function() {
            var i = n.digest().readUInt32BE(0);
            e.setCrc(i), e.setSize(n.size()), e.setCompressedSize(n.size(!0)), this._afterAppend(e), 
            t(r, e);
        }.bind(this)), n.once("error", function(e) {
            r = e;
        }), n.pipe(this, {
            end: !1
        }), n;
    }, u.prototype._writeCentralDirectoryEnd = function() {
        var e = this._entries.length, t = this._archive.centralLength, n = this._archive.centralOffset;
        this.isZip64() && (e = l.ZIP64_MAGIC_SHORT, t = l.ZIP64_MAGIC, n = l.ZIP64_MAGIC), 
        this.write(c.getLongBytes(l.SIG_EOCD)), this.write(l.SHORT_ZERO), this.write(l.SHORT_ZERO), 
        this.write(c.getShortBytes(e)), this.write(c.getShortBytes(e)), this.write(c.getLongBytes(t)), 
        this.write(c.getLongBytes(n));
        var r = this.getComment(), i = Buffer.byteLength(r);
        this.write(c.getShortBytes(i)), this.write(r);
    }, u.prototype._writeCentralDirectoryZip64 = function() {
        this.write(c.getLongBytes(l.SIG_ZIP64_EOCD)), this.write(c.getEightBytes(44)), this.write(c.getShortBytes(l.MIN_VERSION_ZIP64)), 
        this.write(c.getShortBytes(l.MIN_VERSION_ZIP64)), this.write(l.LONG_ZERO), this.write(l.LONG_ZERO), 
        this.write(c.getEightBytes(this._entries.length)), this.write(c.getEightBytes(this._entries.length)), 
        this.write(c.getEightBytes(this._archive.centralLength)), this.write(c.getEightBytes(this._archive.centralOffset)), 
        this.write(c.getLongBytes(l.SIG_ZIP64_EOCD_LOC)), this.write(l.LONG_ZERO), this.write(c.getEightBytes(this._archive.centralOffset + this._archive.centralLength)), 
        this.write(c.getLongBytes(1));
    }, u.prototype._writeCentralFileHeader = function(e) {
        var t = e.getGeneralPurposeBit(), n = e.getMethod(), r = e._offsets, i = e.getSize(), o = e.getCompressedSize();
        if (e.isZip64() || r.file > l.ZIP64_MAGIC) {
            i = l.ZIP64_MAGIC, o = l.ZIP64_MAGIC, e.setVersionNeededToExtract(l.MIN_VERSION_ZIP64);
            var a = Buffer.concat([ c.getShortBytes(l.ZIP64_EXTRA_ID), c.getShortBytes(24), c.getEightBytes(e.getSize()), c.getEightBytes(e.getCompressedSize()), c.getEightBytes(r.file) ], 28);
            e.setExtra(a);
        }
        this.write(c.getLongBytes(l.SIG_CFH)), this.write(c.getShortBytes(e.getPlatform() << 8 | l.VERSION_MADEBY)), 
        this.write(c.getShortBytes(e.getVersionNeededToExtract())), this.write(t.encode()), 
        this.write(c.getShortBytes(n)), this.write(c.getLongBytes(e.getTimeDos())), this.write(c.getLongBytes(e.getCrc())), 
        this.write(c.getLongBytes(o)), this.write(c.getLongBytes(i));
        var s = e.getName(), u = e.getComment(), d = e.getCentralDirectoryExtra();
        t.usesUTF8ForNames() && (s = Buffer.from(s), u = Buffer.from(u)), this.write(c.getShortBytes(s.length)), 
        this.write(c.getShortBytes(d.length)), this.write(c.getShortBytes(u.length)), this.write(l.SHORT_ZERO), 
        this.write(c.getShortBytes(e.getInternalAttributes())), this.write(c.getLongBytes(e.getExternalAttributes())), 
        r.file > l.ZIP64_MAGIC ? this.write(c.getLongBytes(l.ZIP64_MAGIC)) : this.write(c.getLongBytes(r.file)), 
        this.write(s), this.write(d), this.write(u);
    }, u.prototype._writeDataDescriptor = function(e) {
        this.write(c.getLongBytes(l.SIG_DD)), this.write(c.getLongBytes(e.getCrc())), e.isZip64() ? (this.write(c.getEightBytes(e.getCompressedSize())), 
        this.write(c.getEightBytes(e.getSize()))) : (this.write(c.getLongBytes(e.getCompressedSize())), 
        this.write(c.getLongBytes(e.getSize())));
    }, u.prototype._writeLocalFileHeader = function(e) {
        var t = e.getGeneralPurposeBit(), n = e.getMethod(), r = e.getName(), i = e.getLocalFileDataExtra();
        e.isZip64() && (t.useDataDescriptor(!0), e.setVersionNeededToExtract(l.MIN_VERSION_ZIP64)), 
        t.usesUTF8ForNames() && (r = Buffer.from(r)), e._offsets.file = this.offset, this.write(c.getLongBytes(l.SIG_LFH)), 
        this.write(c.getShortBytes(e.getVersionNeededToExtract())), this.write(t.encode()), 
        this.write(c.getShortBytes(n)), this.write(c.getLongBytes(e.getTimeDos())), e._offsets.data = this.offset, 
        t.usesDataDescriptor() ? (this.write(l.LONG_ZERO), this.write(l.LONG_ZERO), this.write(l.LONG_ZERO)) : (this.write(c.getLongBytes(e.getCrc())), 
        this.write(c.getLongBytes(e.getCompressedSize())), this.write(c.getLongBytes(e.getSize()))), 
        this.write(c.getShortBytes(r.length)), this.write(c.getShortBytes(i.length)), this.write(r), 
        this.write(i), e._offsets.contents = this.offset;
    }, u.prototype.getComment = function(e) {
        return null !== this._archive.comment ? this._archive.comment : "";
    }, u.prototype.isZip64 = function() {
        return this._archive.forceZip64 || this._entries.length > l.ZIP64_MAGIC_SHORT || this._archive.centralLength > l.ZIP64_MAGIC || this._archive.centralOffset > l.ZIP64_MAGIC;
    }, u.prototype.setComment = function(e) {
        this._archive.comment = e;
    };
}
