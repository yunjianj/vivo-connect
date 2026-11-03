// analysis/pretty/main.js:130265; webpack module 1701
function(e, t, n) {
    "use strict";
    function r() {
        this._types = Object.create(null), this._extensions = Object.create(null);
        for (let e = 0; e < arguments.length; e++) this.define(arguments[e]);
        this.define = this.define.bind(this), this.getType = this.getType.bind(this), this.getExtension = this.getExtension.bind(this);
    }
    r.prototype.define = function(e, t) {
        for (let n in e) {
            let r = e[n].map(function(e) {
                return e.toLowerCase();
            });
            n = n.toLowerCase();
            for (let e = 0; e < r.length; e++) {
                const i = r[e];
                if ("*" !== i[0]) {
                    if (!t && i in this._types) throw new Error('Attempt to change mapping for "' + i + '" extension from "' + this._types[i] + '" to "' + n + '". Pass `force=true` to allow this, otherwise remove "' + i + '" from the list of extensions for "' + n + '".');
                    this._types[i] = n;
                }
            }
            if (t || !this._extensions[n]) {
                const e = r[0];
                this._extensions[n] = "*" !== e[0] ? e : e.substr(1);
            }
        }
    }, r.prototype.getType = function(e) {
        let t = (e = String(e)).replace(/^.*[/\\]/, "").toLowerCase(), n = t.replace(/^.*\./, "").toLowerCase(), r = t.length < e.length;
        return (n.length < t.length - 1 || !r) && this._types[n] || null;
    }, r.prototype.getExtension = function(e) {
        return (e = /^\s*([^;\s]*)/.test(e) && RegExp.$1) && this._extensions[e.toLowerCase()] || null;
    }, e.exports = r;
}
