// analysis/pretty/main.js:26554; webpack module 204
function(e, t, n) {
    /**
 * Archiver Vending
 *
 * @ignore
 * @license [MIT]{@link https://github.com/archiverjs/node-archiver/blob/master/LICENSE}
 * @copyright (c) 2012-2014 Chris Talkington, contributors.
 */
    var r = n(1063), i = {}, o = function(e, t) {
        return o.create(e, t);
    };
    o.create = function(e, t) {
        if (i[e]) {
            var n = new r(e, t);
            return n.setFormat(e), n.setModule(new i[e](t)), n;
        }
        throw new Error("create(" + e + "): format not registered");
    }, o.registerFormat = function(e, t) {
        if (i[e]) throw new Error("register(" + e + "): format already registered");
        if ("function" != typeof t) throw new Error("register(" + e + "): format module invalid");
        if ("function" != typeof t.prototype.append || "function" != typeof t.prototype.finalize) throw new Error("register(" + e + "): format module missing methods");
        i[e] = t;
    }, o.isRegisteredFormat = function(e) {
        return !!i[e];
    }, o.registerFormat("zip", n(1088)), o.registerFormat("tar", n(1096)), o.registerFormat("json", n(1103)), 
    e.exports = o;
}
