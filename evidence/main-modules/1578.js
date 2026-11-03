// analysis/pretty/main.js:120827; webpack module 1578
function(e, t, n) {
    "use strict";
    const r = n(1579);
    class i extends r {
        constructor() {
            super();
            const e = arguments.length;
            e && this[(e => e > 1 ? "encode" : "encodeSync")(e)].apply(this, arguments);
        }
        static promise(e) {
            const t = new i;
            return new Promise((n, r) => {
                t.on("encoded", n).on("error", r).encode(e);
            });
        }
        static sync(e) {
            return new i(e).content;
        }
    }
    e.exports = i;
}
