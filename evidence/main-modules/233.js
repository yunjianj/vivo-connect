// analysis/pretty/main.js:27920; webpack module 233
function(e, t, n) {
    "use strict";
    const r = n(20), i = n(23).fromCallback, o = n(1380);
    e.exports = {
        remove: i(function(e, t) {
            if (r.rm) return r.rm(e, {
                recursive: !0,
                force: !0
            }, t);
            o(e, t);
        }),
        removeSync: function(e) {
            if (r.rmSync) return r.rmSync(e, {
                recursive: !0,
                force: !0
            });
            o.sync(e);
        }
    };
}
