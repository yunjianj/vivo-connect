// analysis/pretty/main.js:56661; webpack module 598
function(e, t, n) {
    var r = n(5).inherits, i = n(38).Transform, o = n(281), a = n(599), s = e.exports = function(e) {
        if (!(this instanceof s)) return new s(e);
        i.call(this, e), this.offset = 0, this._archive = {
            finish: !1,
            finished: !1,
            processing: !1
        };
    };
    r(s, i), s.prototype._appendBuffer = function(e, t, n) {}, s.prototype._appendStream = function(e, t, n) {}, 
    s.prototype._emitErrorCallback = function(e) {
        e && this.emit("error", e);
    }, s.prototype._finish = function(e) {}, s.prototype._normalizeEntry = function(e) {}, 
    s.prototype._transform = function(e, t, n) {
        n(null, e);
    }, s.prototype.entry = function(e, t, n) {
        if (t = t || null, "function" != typeof n && (n = this._emitErrorCallback.bind(this)), 
        e instanceof o) if (this._archive.finish || this._archive.finished) n(new Error("unacceptable entry after finish")); else {
            if (!this._archive.processing) {
                if (this._archive.processing = !0, this._normalizeEntry(e), this._entry = e, t = a.normalizeInputSource(t), 
                Buffer.isBuffer(t)) this._appendBuffer(e, t, n); else {
                    if (!a.isStream(t)) return this._archive.processing = !1, void n(new Error("input source must be valid Stream or Buffer instance"));
                    this._appendStream(e, t, n);
                }
                return this;
            }
            n(new Error("already processing an entry"));
        } else n(new Error("not a valid instance of ArchiveEntry"));
    }, s.prototype.finish = function() {
        this._archive.processing ? this._archive.finish = !0 : this._finish();
    }, s.prototype.getBytesWritten = function() {
        return this.offset;
    }, s.prototype.write = function(e, t) {
        return e && (this.offset += e.length), i.prototype.write.call(this, e, t);
    };
}
