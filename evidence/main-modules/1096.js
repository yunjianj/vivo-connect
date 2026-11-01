// analysis/pretty/main.js:88359; webpack module 1096
function(e, t, n) {
    /**
 * TAR Format Plugin
 *
 * @module plugins/tar
 * @license [MIT]{@link https://github.com/archiverjs/node-archiver/blob/master/LICENSE}
 * @copyright (c) 2012-2014 Chris Talkington, contributors.
 */
    var r = n(30), i = n(283), o = n(205), a = function(e) {
        if (!(this instanceof a)) return new a(e);
        "object" != typeof (e = this.options = o.defaults(e, {
            gzip: !1
        })).gzipOptions && (e.gzipOptions = {}), this.supports = {
            directory: !0,
            symlink: !0
        }, this.engine = i.pack(e), this.compressor = !1, e.gzip && (this.compressor = r.createGzip(e.gzipOptions), 
        this.compressor.on("error", this._onCompressorError.bind(this)));
    };
    a.prototype._onCompressorError = function(e) {
        this.engine.emit("error", e);
    }, a.prototype.append = function(e, t, n) {
        var r = this;
        function i(e, i) {
            e ? n(e) : r.engine.entry(t, i, function(e) {
                n(e, t);
            });
        }
        if (t.mtime = t.date, "buffer" === t.sourceType) i(null, e); else if ("stream" === t.sourceType && t.stats) {
            t.size = t.stats.size;
            var a = r.engine.entry(t, function(e) {
                n(e, t);
            });
            e.pipe(a);
        } else "stream" === t.sourceType && o.collectStream(e, i);
    }, a.prototype.finalize = function() {
        this.engine.finalize();
    }, a.prototype.on = function() {
        return this.engine.on.apply(this.engine, arguments);
    }, a.prototype.pipe = function(e, t) {
        return this.compressor ? this.engine.pipe.apply(this.engine, [ this.compressor ]).pipe(e, t) : this.engine.pipe.apply(this.engine, arguments);
    }, a.prototype.unpipe = function() {
        return this.compressor ? this.compressor.unpipe.apply(this.compressor, arguments) : this.engine.unpipe.apply(this.engine, arguments);
    }, e.exports = a;
}
