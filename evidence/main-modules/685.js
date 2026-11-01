// analysis/pretty/main.js:61654; webpack module 685
function(e, t, n) {
    "use strict";
    const r = n(20);
    e.exports = {
        utimesMillis: function(e, t, n, i) {
            r.open(e, "r+", (e, o) => {
                if (e) return i(e);
                r.futimes(o, t, n, e => {
                    r.close(o, t => {
                        i && i(e || t);
                    });
                });
            });
        },
        utimesMillisSync: function(e, t, n) {
            const i = r.openSync(e, "r+");
            return r.futimesSync(i, t, n), r.closeSync(i);
        }
    };
}
