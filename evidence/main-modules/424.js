// analysis/pretty/main.js:43862; webpack module 424
function(e, t, n) {
    "use strict";
    const r = n(5), {LEVEL: i} = n(27), o = n(418), a = e.exports = function(e = {}) {
        if (o.call(this, e), !e.transport || "function" != typeof e.transport.log) throw new Error("Invalid transport, must be an object with a log method.");
        this.transport = e.transport, this.level = this.level || e.transport.level, this.handleExceptions = this.handleExceptions || e.transport.handleExceptions, 
        this._deprecated(), this.transport.__winstonError || (this.transport.__winstonError = function(e) {
            this.emit("error", e, this.transport);
        }.bind(this), this.transport.on("error", this.transport.__winstonError));
    };
    r.inherits(a, o), a.prototype._write = function(e, t, n) {
        if (this.silent || !0 === e.exception && !this.handleExceptions) return n(null);
        (!this.level || this.levels[this.level] >= this.levels[e[i]]) && this.transport.log(e[i], e.message, e, this._nop), 
        n(null);
    }, a.prototype._writev = function(e, t) {
        for (let t = 0; t < e.length; t++) this._accept(e[t]) && (this.transport.log(e[t].chunk[i], e[t].chunk.message, e[t].chunk, this._nop), 
        e[t].callback());
        return t(null);
    }, a.prototype._deprecated = function() {
        console.error([ this.transport.name + " is a legacy winston transport. Consider upgrading: ", "- Upgrade docs: https://github.com/winstonjs/winston/blob/master/UPGRADE-3.0.md" ].join("\n"));
    }, a.prototype.close = function() {
        this.transport.close && this.transport.close(), this.transport.__winstonError && (this.transport.removeListener("error", this.transport.__winstonError), 
        this.transport.__winstonError = null);
    };
}
