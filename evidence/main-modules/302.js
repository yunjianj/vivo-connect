// analysis/pretty/main.js:33766; webpack module 302
function(e, t, n) {
    "use strict";
    var r = n(301);
    function i(e, t, n) {
        this.message = n || i.message(e, t), this.missingRef = r.url(e, t), this.missingSchema = r.normalizeId(r.fullPath(this.missingRef));
    }
    function o(e) {
        return e.prototype = Object.create(Error.prototype), e.prototype.constructor = e, 
        e;
    }
    e.exports = {
        Validation: o(function(e) {
            this.message = "validation failed", this.errors = e, this.ajv = this.validation = !0;
        }),
        MissingRef: o(i)
    }, i.message = function(e, t) {
        return "can't resolve reference " + t + " from id " + e;
    };
}
