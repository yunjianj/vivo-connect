// analysis/pretty/main.js:18199; webpack module 129
function(e, t, n) {
    e.exports = o;
    var r = n(21), i = n(17).Buffer;
    function o(e) {
        r.object(e, "options"), void 0 !== e.buffer && r.buffer(e.buffer, "options.buffer"), 
        this._size = e.buffer ? e.buffer.length : 1024, this._buffer = e.buffer || i.alloc(this._size), 
        this._offset = 0;
    }
    o.prototype.toBuffer = function() {
        return this._buffer.slice(0, this._offset);
    }, o.prototype.atEnd = function() {
        return this._offset >= this._buffer.length;
    }, o.prototype.remainder = function() {
        return this._buffer.slice(this._offset);
    }, o.prototype.skip = function(e) {
        this._offset += e;
    }, o.prototype.expand = function() {
        this._size *= 2;
        var e = i.alloc(this._size);
        this._buffer.copy(e, 0), this._buffer = e;
    }, o.prototype.readPart = function() {
        return {
            data: this.readBuffer()
        };
    }, o.prototype.readBuffer = function() {
        var e = this._buffer.readUInt32BE(this._offset);
        this._offset += 4, r.ok(this._offset + e <= this._buffer.length, "length out of bounds at +0x" + this._offset.toString(16) + " (data truncated?)");
        var t = this._buffer.slice(this._offset, this._offset + e);
        return this._offset += e, t;
    }, o.prototype.readString = function() {
        return this.readBuffer().toString();
    }, o.prototype.readCString = function() {
        for (var e = this._offset; e < this._buffer.length && 0 !== this._buffer[e]; ) e++;
        r.ok(e < this._buffer.length, "c string does not terminate");
        var t = this._buffer.slice(this._offset, e).toString();
        return this._offset = e + 1, t;
    }, o.prototype.readInt = function() {
        var e = this._buffer.readUInt32BE(this._offset);
        return this._offset += 4, e;
    }, o.prototype.readInt64 = function() {
        r.ok(this._offset + 8 < this._buffer.length, "buffer not long enough to read Int64");
        var e = this._buffer.slice(this._offset, this._offset + 8);
        return this._offset += 8, e;
    }, o.prototype.readChar = function() {
        return this._buffer[this._offset++];
    }, o.prototype.writeBuffer = function(e) {
        for (;this._offset + 4 + e.length > this._size; ) this.expand();
        this._buffer.writeUInt32BE(e.length, this._offset), this._offset += 4, e.copy(this._buffer, this._offset), 
        this._offset += e.length;
    }, o.prototype.writeString = function(e) {
        this.writeBuffer(i.from(e, "utf8"));
    }, o.prototype.writeCString = function(e) {
        for (;this._offset + 1 + e.length > this._size; ) this.expand();
        this._buffer.write(e, this._offset), this._offset += e.length, this._buffer[this._offset++] = 0;
    }, o.prototype.writeInt = function(e) {
        for (;this._offset + 4 > this._size; ) this.expand();
        this._buffer.writeUInt32BE(e, this._offset), this._offset += 4;
    }, o.prototype.writeInt64 = function(e) {
        if (r.buffer(e, "value"), e.length > 8) {
            for (var t = e.slice(0, e.length - 8), n = 0; n < t.length; ++n) r.strictEqual(t[n], 0, "must fit in 64 bits of precision");
            e = e.slice(e.length - 8, e.length);
        }
        for (;this._offset + 8 > this._size; ) this.expand();
        e.copy(this._buffer, this._offset), this._offset += 8;
    }, o.prototype.writeChar = function(e) {
        for (;this._offset + 1 > this._size; ) this.expand();
        this._buffer[this._offset++] = e;
    }, o.prototype.writePart = function(e) {
        this.writeBuffer(e.data);
    }, o.prototype.write = function(e) {
        for (;this._offset + e.length > this._size; ) this.expand();
        e.copy(this._buffer, this._offset), this._offset += e.length;
    };
}
