// analysis/pretty/main.js:88190; webpack module 1092
function(e, t, n) {
    "use strict";
    const {Transform: r} = n(38), i = n(602);
    e.exports = class extends r {
        constructor(e) {
            super(e), this.checksum = Buffer.allocUnsafe(4), this.checksum.writeInt32BE(0, 0), 
            this.rawSize = 0;
        }
        _transform(e, t, n) {
            e && (this.checksum = i.buf(e, this.checksum) >>> 0, this.rawSize += e.length), 
            n(null, e);
        }
        digest(e) {
            const t = Buffer.allocUnsafe(4);
            return t.writeUInt32BE(this.checksum >>> 0, 0), e ? t.toString(e) : t;
        }
        hex() {
            return this.digest("hex").toUpperCase();
        }
        size() {
            return this.rawSize;
        }
    };
}
