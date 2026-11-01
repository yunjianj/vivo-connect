// analysis/pretty/main.js:88021; webpack module 1089
function(e, t, n) {
    /**
 * ZipStream
 *
 * @ignore
 * @license [MIT]{@link https://github.com/archiverjs/node-zip-stream/blob/master/LICENSE}
 * @copyright (c) 2014 Chris Talkington, contributors.
 */
    var r = n(5).inherits, i = n(594).ZipArchiveOutputStream, o = n(594).ZipArchiveEntry, a = n(1094), s = e.exports = function(e) {
        if (!(this instanceof s)) return new s(e);
        (e = this.options = e || {}).zlib = e.zlib || {}, i.call(this, e), "number" == typeof e.level && e.level >= 0 && (e.zlib.level = e.level, 
        delete e.level), e.forceZip64 || "number" != typeof e.zlib.level || 0 !== e.zlib.level || (e.store = !0), 
        e.namePrependSlash = e.namePrependSlash || !1, e.comment && e.comment.length > 0 && this.setComment(e.comment);
    };
    r(s, i), s.prototype._normalizeFileData = function(e) {
        var t = "directory" === (e = a.defaults(e, {
            type: "file",
            name: null,
            namePrependSlash: this.options.namePrependSlash,
            linkname: null,
            date: null,
            mode: null,
            store: this.options.store,
            comment: ""
        })).type, n = "symlink" === e.type;
        return e.name && (e.name = a.sanitizePath(e.name), n || "/" !== e.name.slice(-1) ? t && (e.name += "/") : (t = !0, 
        e.type = "directory")), (t || n) && (e.store = !0), e.date = a.dateify(e.date), 
        e;
    }, s.prototype.entry = function(e, t, n) {
        if ("function" != typeof n && (n = this._emitErrorCallback.bind(this)), "file" === (t = this._normalizeFileData(t)).type || "directory" === t.type || "symlink" === t.type) if ("string" == typeof t.name && 0 !== t.name.length) {
            if ("symlink" !== t.type || "string" == typeof t.linkname) {
                var r = new o(t.name);
                return r.setTime(t.date, this.options.forceLocalTime), t.namePrependSlash && r.setName(t.name, !0), 
                t.store && r.setMethod(0), t.comment.length > 0 && r.setComment(t.comment), "symlink" === t.type && "number" != typeof t.mode && (t.mode = 40960), 
                "number" == typeof t.mode && ("symlink" === t.type && (t.mode |= 40960), r.setUnixMode(t.mode)), 
                "symlink" === t.type && "string" == typeof t.linkname && (e = Buffer.from(t.linkname)), 
                i.prototype.entry.call(this, r, e, n);
            }
            n(new Error("entry linkname must be a non-empty string value when type equals symlink"));
        } else n(new Error("entry name must be a non-empty string value")); else n(new Error(t.type + " entries not currently supported"));
    }, s.prototype.finalize = function() {
        this.finish();
    };
}
