// analysis/pretty/main.js:83415; webpack module 1048
function(e, t, n) {
    "use strict";
    const r = n(429), {MESSAGE: i} = n(27), o = n(8), a = n(120);
    e.exports = class extends a {
        constructor(e = {}) {
            if (super(e), !e.stream || !r(e.stream)) throw new Error("options.stream is required.");
            this._stream = e.stream, this._stream.setMaxListeners(1 / 0), this.isObjectMode = e.stream._writableState.objectMode, 
            this.eol = "string" == typeof e.eol ? e.eol : o.EOL;
        }
        log(e, t) {
            if (setImmediate(() => this.emit("logged", e)), this.isObjectMode) return this._stream.write(e), 
            void (t && t());
            this._stream.write(`${e[i]}${this.eol}`), t && t();
        }
    };
}
