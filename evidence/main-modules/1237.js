// analysis/pretty/main.js:96765; webpack module 1237
function(e, t) {
    function n(e) {
        this.name = "HARError", this.message = "validation failed", this.errors = e, "function" == typeof Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error("validation failed").stack;
    }
    n.prototype = Error.prototype, e.exports = n;
}
