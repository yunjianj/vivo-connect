// analysis/pretty/main.js:56481; webpack module 595
function(e, t, n) {
    var r = n(5).inherits, i = n(275), o = n(281), a = n(596), s = n(1090), l = n(597), c = n(282), u = e.exports = function(e) {
        if (!(this instanceof u)) return new u(e);
        o.call(this), this.platform = l.PLATFORM_FAT, this.method = -1, this.name = null, 
        this.size = 0, this.csize = 0, this.gpb = new a, this.crc = 0, this.time = -1, this.minver = l.MIN_VERSION_INITIAL, 
        this.mode = -1, this.extra = null, this.exattr = 0, this.inattr = 0, this.comment = null, 
        e && this.setName(e);
    };
    r(u, o), u.prototype.getCentralDirectoryExtra = function() {
        return this.getExtra();
    }, u.prototype.getComment = function() {
        return null !== this.comment ? this.comment : "";
    }, u.prototype.getCompressedSize = function() {
        return this.csize;
    }, u.prototype.getCrc = function() {
        return this.crc;
    }, u.prototype.getExternalAttributes = function() {
        return this.exattr;
    }, u.prototype.getExtra = function() {
        return null !== this.extra ? this.extra : l.EMPTY;
    }, u.prototype.getGeneralPurposeBit = function() {
        return this.gpb;
    }, u.prototype.getInternalAttributes = function() {
        return this.inattr;
    }, u.prototype.getLastModifiedDate = function() {
        return this.getTime();
    }, u.prototype.getLocalFileDataExtra = function() {
        return this.getExtra();
    }, u.prototype.getMethod = function() {
        return this.method;
    }, u.prototype.getName = function() {
        return this.name;
    }, u.prototype.getPlatform = function() {
        return this.platform;
    }, u.prototype.getSize = function() {
        return this.size;
    }, u.prototype.getTime = function() {
        return -1 !== this.time ? c.dosToDate(this.time) : -1;
    }, u.prototype.getTimeDos = function() {
        return -1 !== this.time ? this.time : 0;
    }, u.prototype.getUnixMode = function() {
        return this.platform !== l.PLATFORM_UNIX ? 0 : this.getExternalAttributes() >> l.SHORT_SHIFT & l.SHORT_MASK;
    }, u.prototype.getVersionNeededToExtract = function() {
        return this.minver;
    }, u.prototype.setComment = function(e) {
        Buffer.byteLength(e) !== e.length && this.getGeneralPurposeBit().useUTF8ForNames(!0), 
        this.comment = e;
    }, u.prototype.setCompressedSize = function(e) {
        if (e < 0) throw new Error("invalid entry compressed size");
        this.csize = e;
    }, u.prototype.setCrc = function(e) {
        if (e < 0) throw new Error("invalid entry crc32");
        this.crc = e;
    }, u.prototype.setExternalAttributes = function(e) {
        this.exattr = e >>> 0;
    }, u.prototype.setExtra = function(e) {
        this.extra = e;
    }, u.prototype.setGeneralPurposeBit = function(e) {
        if (!(e instanceof a)) throw new Error("invalid entry GeneralPurposeBit");
        this.gpb = e;
    }, u.prototype.setInternalAttributes = function(e) {
        this.inattr = e;
    }, u.prototype.setMethod = function(e) {
        if (e < 0) throw new Error("invalid entry compression method");
        this.method = e;
    }, u.prototype.setName = function(e, t = !1) {
        e = i(e, !1).replace(/^\w+:/, "").replace(/^(\.\.\/|\/)+/, ""), t && (e = "/" + e), 
        Buffer.byteLength(e) !== e.length && this.getGeneralPurposeBit().useUTF8ForNames(!0), 
        this.name = e;
    }, u.prototype.setPlatform = function(e) {
        this.platform = e;
    }, u.prototype.setSize = function(e) {
        if (e < 0) throw new Error("invalid entry size");
        this.size = e;
    }, u.prototype.setTime = function(e, t) {
        if (!(e instanceof Date)) throw new Error("invalid entry time");
        this.time = c.dateToDos(e, t);
    }, u.prototype.setUnixMode = function(e) {
        var t = 0;
        t |= (e |= this.isDirectory() ? l.S_IFDIR : l.S_IFREG) << l.SHORT_SHIFT | (this.isDirectory() ? l.S_DOS_D : l.S_DOS_A), 
        this.setExternalAttributes(t), this.mode = e & l.MODE_MASK, this.platform = l.PLATFORM_UNIX;
    }, u.prototype.setVersionNeededToExtract = function(e) {
        this.minver = e;
    }, u.prototype.isDirectory = function() {
        return "/" === this.getName().slice(-1);
    }, u.prototype.isUnixSymlink = function() {
        return (this.getUnixMode() & s.FILE_TYPE_FLAG) === s.LINK_FLAG;
    }, u.prototype.isZip64 = function() {
        return this.csize > l.ZIP64_MAGIC || this.size > l.ZIP64_MAGIC;
    };
}
