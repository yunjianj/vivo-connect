// analysis/pretty/main.js:41233; webpack module 376
function(e, t, n) {
    "use strict";
    e.exports = e => class extends e {
        warn(e, t, n = {}) {
            this.file && (n.file = this.file), this.cwd && (n.cwd = this.cwd), n.code = t instanceof Error && t.code || e, 
            n.tarCode = e, this.strict || !1 === n.recoverable ? t instanceof Error ? this.emit("error", Object.assign(t, n)) : this.emit("error", Object.assign(new Error(`${e}: ${t}`), n)) : (t instanceof Error && (n = Object.assign(t, n), 
            t = t.message), this.emit("warn", n.tarCode, t, n));
        }
    };
}
