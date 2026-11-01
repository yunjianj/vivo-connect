// analysis/pretty/main.js:87990; webpack module 1088
function(e, t, n) {
    /**
 * ZIP Format Plugin
 *
 * @module plugins/zip
 * @license [MIT]{@link https://github.com/archiverjs/node-archiver/blob/master/LICENSE}
 * @copyright (c) 2012-2014 Chris Talkington, contributors.
 */
    var r = n(1089), i = n(205), o = function(e) {
        if (!(this instanceof o)) return new o(e);
        e = this.options = i.defaults(e, {
            comment: "",
            forceUTC: !1,
            namePrependSlash: !1,
            store: !1
        }), this.supports = {
            directory: !0,
            symlink: !0
        }, this.engine = new r(e);
    };
    o.prototype.append = function(e, t, n) {
        this.engine.entry(e, t, n);
    }, o.prototype.finalize = function() {
        this.engine.finalize();
    }, o.prototype.on = function() {
        return this.engine.on.apply(this.engine, arguments);
    }, o.prototype.pipe = function() {
        return this.engine.pipe.apply(this.engine, arguments);
    }, o.prototype.unpipe = function() {
        return this.engine.unpipe.apply(this.engine, arguments);
    }, e.exports = o;
}
