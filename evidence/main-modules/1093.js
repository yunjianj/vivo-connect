// analysis/pretty/main.js:88213; webpack module 1093
function(e, t, n) {
    "use strict";
    const {DeflateRaw: r} = n(30), i = n(602);
    e.exports = class extends r {
        constructor(e) {
            super(e), this.checksum = Buffer.allocUnsafe(4), this.checksum.writeInt32BE(0, 0), 
            this.rawSize = 0, this.compressedSize = 0;
        }
        push(e, t) {
            return e && (this.compressedSize += e.length), super.push(e, t);
        }
        _transform(e, t, n) {
            e && (this.checksum = i.buf(e, this.checksum) >>> 0, this.rawSize += e.length), 
            super._transform(e, t, n);
        }
        digest(e) {
            const t = Buffer.allocUnsafe(4);
            return t.writeUInt32BE(this.checksum >>> 0, 0), e ? t.toString(e) : t;
        }
        hex() {
            return this.digest("hex").toUpperCase();
        }
        size(e = !1) {
            return e ? this.compressedSize : this.rawSize;
        }
    };
}
