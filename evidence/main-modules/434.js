// analysis/pretty/main.js:44179; webpack module 434
function(e, t, n) {
    "use strict";
    const {Writable: r} = n(38);
    e.exports = class extends r {
        constructor(e) {
            if (super({
                objectMode: !0
            }), !e) throw new Error("ExceptionStream requires a TransportStream instance.");
            this.handleExceptions = !0, this.transport = e;
        }
        _write(e, t, n) {
            return e.exception ? this.transport.log(e, n) : (n(), !0);
        }
    };
}
