// analysis/pretty/main.js:91709; webpack module 1169
function(e, t, n) {
    "use strict";
    function r(e, t) {
        return e.then(function(e) {
            return [ null, e ];
        }).catch(function(e) {
            return t && Object.assign(e, t), [ e, void 0 ];
        });
    }
    n.r(t), n.d(t, "to", function() {
        return r;
    }), t.default = r;
}
