// analysis/pretty/main.js:94456; webpack module 1198
function(e, t, n) {
    "use strict";
    var r = n(637), i = n(291);
    function o(e) {
        this.request = e, this.lib = null, this.useQuerystring = null, this.parseOptions = null, 
        this.stringifyOptions = null;
    }
    o.prototype.init = function(e) {
        this.lib || (this.useQuerystring = e.useQuerystring, this.lib = this.useQuerystring ? i : r, 
        this.parseOptions = e.qsParseOptions || {}, this.stringifyOptions = e.qsStringifyOptions || {});
    }, o.prototype.stringify = function(e) {
        return this.useQuerystring ? this.rfc3986(this.lib.stringify(e, this.stringifyOptions.sep || null, this.stringifyOptions.eq || null, this.stringifyOptions)) : this.lib.stringify(e, this.stringifyOptions);
    }, o.prototype.parse = function(e) {
        return this.useQuerystring ? this.lib.parse(e, this.parseOptions.sep || null, this.parseOptions.eq || null, this.parseOptions) : this.lib.parse(e, this.parseOptions);
    }, o.prototype.rfc3986 = function(e) {
        return e.replace(/[!'()*]/g, function(e) {
            return "%" + e.charCodeAt(0).toString(16).toUpperCase();
        });
    }, o.prototype.unescape = i.unescape, t.Querystring = o;
}
