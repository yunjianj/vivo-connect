// analysis/pretty/main.js:10034; webpack module 51
function(e, t, n) {
    "use strict";
    class r extends Error {
        constructor(e) {
            super(`Format functions must be synchronous taking a two arguments: (info, opts)\nFound: ${e.toString().split("\n")[0]}\n`), 
            Error.captureStackTrace(this, r);
        }
    }
    e.exports = e => {
        if (e.length > 2) throw new r(e);
        function t(e = {}) {
            this.options = e;
        }
        function n(e) {
            return new t(e);
        }
        return t.prototype.transform = e, n.Format = t, n;
    };
}
