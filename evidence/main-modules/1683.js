// analysis/pretty/main.js:128835; webpack module 1683
function(e, t, n) {
    "use strict";
    e.exports = function(e) {
        e.prototype[Symbol.iterator] = function*() {
            for (let e = this.head; e; e = e.next) yield e.value;
        };
    };
}
