// analysis/pretty/main.js:82019; webpack module 1018
function(e, t, n) {
    "use strict";
    const {MESSAGE: r} = n(27);
    class i {
        constructor(e) {
            this.template = e;
        }
        transform(e) {
            return e[r] = this.template(e), e;
        }
    }
    e.exports = e => new i(e), e.exports.Printf = e.exports.Format = i;
}
