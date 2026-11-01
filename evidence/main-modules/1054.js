// analysis/pretty/main.js:83671; webpack module 1054
function(e, t, n) {
    "use strict";
    const r = n(430);
    e.exports = class {
        constructor(e = {}) {
            this.loggers = new Map, this.options = e;
        }
        add(e, t) {
            if (!this.loggers.has(e)) {
                const n = (t = Object.assign({}, t || this.options)).transports || this.options.transports;
                t.transports = n ? n.slice() : [];
                const i = r(t);
                i.on("close", () => this._delete(e)), this.loggers.set(e, i);
            }
            return this.loggers.get(e);
        }
        get(e, t) {
            return this.add(e, t);
        }
        has(e) {
            return !!this.loggers.has(e);
        }
        close(e) {
            if (e) return this._removeLogger(e);
            this.loggers.forEach((e, t) => this._removeLogger(t));
        }
        _removeLogger(e) {
            if (!this.loggers.has(e)) return;
            this.loggers.get(e).close(), this._delete(e);
        }
        _delete(e) {
            this.loggers.delete(e);
        }
    };
}
