// analysis/pretty/main.js:88824; webpack module 1103
function(e, t, n) {
    /**
 * JSON Format Plugin
 *
 * @module plugins/json
 * @license [MIT]{@link https://github.com/archiverjs/node-archiver/blob/master/LICENSE}
 * @copyright (c) 2012-2014 Chris Talkington, contributors.
 */
    var r = n(5).inherits, i = n(38).Transform, o = n(600), a = n(205), s = function(e) {
        if (!(this instanceof s)) return new s(e);
        e = this.options = a.defaults(e, {}), i.call(this, e), this.supports = {
            directory: !0,
            symlink: !0
        }, this.files = [];
    };
    r(s, i), s.prototype._transform = function(e, t, n) {
        n(null, e);
    }, s.prototype._writeStringified = function() {
        var e = JSON.stringify(this.files);
        this.write(e);
    }, s.prototype.append = function(e, t, n) {
        var r = this;
        function i(e, i) {
            e ? n(e) : (t.size = i.length || 0, t.crc32 = o.unsigned(i), r.files.push(t), n(null, t));
        }
        t.crc32 = 0, "buffer" === t.sourceType ? i(null, e) : "stream" === t.sourceType && a.collectStream(e, i);
    }, s.prototype.finalize = function() {
        this._writeStringified(), this.end();
    }, e.exports = s;
}
